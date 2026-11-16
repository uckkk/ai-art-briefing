#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const dns = require("dns").promises;
const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const { execFile } = require("child_process");

const HOST = "artnews.ai998.top";

function fail(message, code) {
  process.stderr.write(message + "\n");
  process.exit(code);
}

function readOption(args, name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) fail("缺少 " + name + "的参数", 2);
  return value;
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function digCnames(host) {
  const servers = ["", "8.8.8.8", "1.1.1.1"];
  return Promise.all(servers.map(function (server) {
    return new Promise(function (resolve) {
      const args = ["+short", "+time=2", "+tries=1"];
      if (server) args.push("@" + server);
      args.push(host, "CNAME");
      execFile("dig", args, { timeout: 8000 }, function (err, stdout) {
        if (err) {
          resolve([]);
          return;
        }
        resolve(String(stdout).split(/\s+/).map(function (item) {
          return item.replace(/\.$/, "");
        }).filter(Boolean));
      });
    });
  })).then(function (lists) {
    return unique([].concat.apply([], lists));
  });
}

function requestOnce(options) {
  const lib = options.scheme === "https" ? https : http;
  return new Promise(function (resolve) {
    const req = lib.request({
      host: options.host,
      port: options.port,
      path: options.path,
      method: "GET",
      servername: options.host,
      rejectUnauthorized: options.rejectUnauthorized !== false,
      agent: false,
      timeout: 15000,
      headers: { "User-Agent": "weekly-verify", "Accept": "*/*" },
      lookup: function (hostname, opts, callback) {
        function finish(err, address, family) {
          if (err) {
            callback(err);
            return;
          }
          if (opts && opts.all) callback(null, [{ address: address, family: family }]);
          else callback(null, address, family);
        }
        if (!options.address) {
          dns.lookup(hostname).then(function (found) {
            finish(null, found.address, found.family);
          }).catch(callback);
          return;
        }
        finish(null, options.address, options.address.indexOf(":") === -1 ? 4 : 6);
      }
    }, function (res) {
      const chunks = [];
      let size = 0;
      res.on("data", function (chunk) {
        size += chunk.length;
        if (size <= 2 * 1024 * 1024) chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        resolve({
          url: options.scheme + "://" + options.host + options.path,
          address: (res.socket && res.socket.remoteAddress) || options.address || "",
          httpStatus: res.statusCode,
          server: String(res.headers.server || ""),
          tls: options.scheme === "https" ? (options.rejectUnauthorized === false ? options.tlsLabel || "unverified" : "ok") : "none",
          sha256: sha256(body),
          match: false
        });
      });
    });
    req.on("timeout", function () {
      req.destroy(new Error("timeout"));
    });
    req.on("error", function (err) {
      resolve({
        url: options.scheme + "://" + options.host + options.path,
        address: options.address || "",
        httpStatus: 0,
        server: "",
        tls: err.code === "ERR_TLS_CERT_ALTNAME_INVALID" ? "name-mismatch" : "error",
        error: err.code || err.message,
        sha256: "",
        match: false
      });
    });
    req.end();
  });
}

async function fetchUrl(scheme, host, address, urlPath, port) {
  const first = await requestOnce({
    scheme: scheme,
    host: host,
    port: port || (scheme === "https" ? 443 : 80),
    path: urlPath,
    address: address,
    rejectUnauthorized: true
  });
  if (scheme === "https" && first.tls === "name-mismatch") {
    const second = await requestOnce({
      scheme: scheme,
      host: host,
      port: port || 443,
      path: urlPath,
      address: address,
      rejectUnauthorized: false,
      tlsLabel: "name-mismatch"
    });
    second.note = "证书名称不匹配，正文只作对照，不能当作可信发布";
    return second;
  }
  return first;
}

function unique(list) {
  const seen = new Set();
  return list.filter(function (item) {
    if (!item || seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}

async function addressesFor(host) {
  const cnames = unique([].concat(await digCnames(host)));
  try {
    const resolved = await dns.resolveCname(host);
    resolved.forEach(function (item) { cnames.push(item.replace(/\.$/, "")); });
  } catch (err) {}
  const names = unique([host].concat(cnames));
  const addresses = [];
  for (const name of names) {
    try {
      const found = await dns.resolve4(name);
      found.forEach(function (item) { addresses.push(item); });
    } catch (err) {}
  }
  return { cnames: unique(cnames), addresses: unique(addresses) };
}

function familyOf(observation) {
  const server = String(observation.server || "").toLowerCase();
  if (server.indexOf("github") !== -1) return "pages";
  if (server.indexOf("edgeone") !== -1) return "edge";
  return "other";
}

function summarize(localHash, observations) {
  observations.forEach(function (item) {
    item.contentMatch = item.httpStatus === 200 && item.sha256 === localHash;
    item.match = item.contentMatch && item.tls !== "name-mismatch" && item.tls !== "unverified" && item.tls !== "error";
    item.family = familyOf(item);
  });
  const pagesHttp = observations.some(function (item) {
    return item.family === "pages" && item.tls === "none" && item.contentMatch;
  });
  const edgeHttps = observations.some(function (item) {
    return item.family === "edge" && item.tls === "ok" && item.contentMatch;
  });
  const sawPages = observations.some(function (item) { return item.family === "pages"; });
  const sawEdge = observations.some(function (item) { return item.family === "edge"; });
  let pagesHttps = "unseen";
  observations.forEach(function (item) {
    if (item.family === "pages" && item.tls === "name-mismatch") pagesHttps = "name-mismatch";
    else if (item.family === "pages" && item.tls === "ok" && pagesHttps === "unseen") pagesHttps = "ok";
  });
  let status = "none";
  if (sawPages || sawEdge) {
    if (pagesHttp && edgeHttps) status = "all-match";
    else if (pagesHttp || edgeHttps) status = "partial";
  } else {
    const trusted = observations.filter(function (item) { return item.match; });
    if (trusted.length && trusted.length === observations.length) status = "all-match";
    else if (trusted.length) status = "partial";
  }
  return {
    status: status,
    pagesHttp: sawPages ? (pagesHttp ? "match" : "missing") : "unseen",
    pagesHttps: pagesHttps,
    edgeHttps: sawEdge ? (edgeHttps ? "match" : "missing") : "unseen",
    localSha256: localHash,
    observations: observations
  };
}

async function checkBase(base, urlPath, localHash) {
  const url = new URL(base);
  const scheme = url.protocol.replace(":", "");
  const port = url.port ? Number(url.port) : (scheme === "https" ? 443 : 80);
  const observation = await fetchUrl(scheme, url.hostname, null, urlPath, port);
  observation.url = url.origin + urlPath;
  return summarize(localHash, [observation]);
}

async function checkPublic(urlPath, localHash) {
  const found = await addressesFor(HOST);
  const targets = found.addresses.length ? found.addresses : [""];
  const observations = [];
  for (const address of targets) {
    observations.push(await fetchUrl("https", HOST, address, urlPath));
    observations.push(await fetchUrl("http", HOST, address, urlPath));
  }
  const report = summarize(localHash, observations);
  report.host = HOST;
  report.cnames = found.cnames;
  report.addresses = found.addresses;
  return report;
}

async function verifyPublished(options) {
  const rel = options.file || "weekly/index.html";
  const base = options.base || "";
  const root = path.resolve(options.root || path.join(__dirname, ".."));
  if (rel.startsWith("/") || rel.split(/[\\/]/).indexOf("..") !== -1) {
    throw Object.assign(new Error("--file 必须是仓库内的相对路径"), { code: "BAD_ARG" });
  }
  const file = path.resolve(root, rel);
  if (file !== root && !file.startsWith(root + path.sep)) {
    throw Object.assign(new Error("--file 超出仓库"), { code: "BAD_ARG" });
  }
  if (!fs.existsSync(file)) throw Object.assign(new Error("找不到 " + rel), { code: "BAD_ARG" });
  if (base) {
    const parsed = new URL(base);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      throw Object.assign(new Error("--base 只接受 http(s)"), { code: "BAD_ARG" });
    }
  }
  const localHash = sha256(fs.readFileSync(file));
  const urlPath = "/" + rel.split(path.sep).join("/");
  const report = base
    ? await checkBase(base, urlPath, localHash)
    : await checkPublic(urlPath, localHash);
  report.file = rel;
  return report;
}

async function main() {
  const args = process.argv.slice(2);
  try {
    const report = await verifyPublished({
      file: readOption(args, "--file") || "weekly/index.html",
      base: readOption(args, "--base") || "",
      root: path.join(__dirname, "..")
    });
    process.stdout.write(JSON.stringify(report, null, 2) + "\n");
    if (report.status === "all-match") process.exit(0);
    if (report.status === "partial") process.exit(3);
    process.exit(4);
  } catch (err) {
    fail(err.stack || err.message, err.code === "BAD_ARG" ? 2 : 1);
  }
}

if (require.main === module) main();

module.exports = { verifyPublished: verifyPublished };
