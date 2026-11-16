#!/usr/bin/env node
"use strict";

const assert = require("assert");
const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawnSync } = require("child_process");
const weekly = require("./weekly-lib");
const publish = require("./verify-publish");

const repo = path.join(__dirname, "..");

function sample(id, end, title) {
  return {
    schemaVersion: 1,
    id: id,
    end: end || "2026-11-16",
    title: title || "技术周报 · 示例",
    dek: "这是一段放在本站的导语，用来确认正文不是只留外链。",
    items: [
      {
        title: "可核实的条目 <safe>",
        body: ["第一段写在页面里。", "第二段仍写在页面里。"],
        value: "对一般游戏美术流程，这是一句可保留的判断。",
        links: [{ label: "出处", url: "https://example.com/source" }]
      }
    ],
    closing: "核对说明。"
  };
}

function run(args, cwd) {
  return spawnSync(process.execPath, args, { cwd: cwd || repo, encoding: "utf8" });
}

function testValidation() {
  const ok = weekly.validateIssue(sample("2026-11-09"));
  assert.strictEqual(ok.ok, true);
  assert.strictEqual(ok.issue.items[0].title, "可核实的条目 <safe>");

  const bad = weekly.validateIssue({ schemaVersion: 1, id: "2026-02-31", end: "2026-11-16", title: "x", dek: "y", items: [] });
  assert.strictEqual(bad.ok, false);

  const secretUrl = sample("2026-11-09");
  secretUrl.items[0].links[0].url = "https://user:password@example.com/a";
  assert.strictEqual(weekly.validateIssue(secretUrl).ok, false);

  const empty = sample("2026-11-09");
  empty.items = [];
  assert.strictEqual(weekly.validateIssue(empty).ok, true);
}

function testIdempotentImport() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "weekly-"));
  const source = path.join(root, "inbox.json");
  fs.writeFileSync(source, JSON.stringify(sample("2026-11-09")));
  const first = run(["scripts/import-weekly.js", source, "--root", root]);
  assert.strictEqual(first.status, 0, first.stderr);
  assert.match(first.stdout, /status=created id=2026-11-09 html=weekly\/2026-11-09\.html/);

  const html = fs.readFileSync(path.join(root, "weekly", "2026-11-09.html"), "utf8");
  assert.match(html, /第一段写在页面里/);
  assert.match(html, /https:\/\/example\.com\/source/);
  assert.match(html, /可核实的条目 &lt;safe&gt;/);
  assert.doesNotMatch(html, /<script>/);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, "weekly", "manifest.json"), "utf8"));
  assert.strictEqual(manifest.issues.length, 1);

  const second = run(["scripts/import-weekly.js", source, "--root", root]);
  assert.strictEqual(second.status, 0, second.stderr);
  assert.match(second.stdout, /status=unchanged/);
  assert.strictEqual(fs.readFileSync(path.join(root, "weekly", "2026-11-09.html"), "utf8"), html);

  const changed = sample("2026-11-09");
  changed.items[0].body = ["替换后的正文只保留一份。"];
  fs.writeFileSync(source, JSON.stringify(changed));
  const third = run(["scripts/import-weekly.js", source, "--root", root]);
  assert.match(third.stdout, /status=updated/);
  const updated = fs.readFileSync(path.join(root, "weekly", "2026-11-09.html"), "utf8");
  assert.match(updated, /替换后的正文只保留一份/);
  assert.doesNotMatch(updated, /第一段写在页面里/);
  const manifestAgain = JSON.parse(fs.readFileSync(path.join(root, "weekly", "manifest.json"), "utf8"));
  assert.strictEqual(manifestAgain.issues.length, 1);

  const invalid = run(["scripts/import-weekly.js", path.join(root, "missing-not-used.json"), "--root", root]);
  fs.writeFileSync(path.join(root, "bad.json"), "{\"schemaVersion\":1}");
  const rejected = run(["scripts/import-weekly.js", path.join(root, "bad.json"), "--root", root]);
  assert.strictEqual(rejected.status, 2);
  assert.strictEqual(invalid.status !== 0, true);
  assert.strictEqual(manifestAgain.issues.length, 1);
}

function testDailyUntouchedContract() {
  const index = fs.readFileSync(path.join(repo, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(repo, "app.js"), "utf8");
  const archiveHead = fs.readFileSync(path.join(repo, "archive.js"), "utf8").slice(0, 40);
  const dataHead = fs.readFileSync(path.join(repo, "data.js"), "utf8").slice(0, 40);
  assert.match(index, /href="\.\/weekly\/index\.html"/);
  assert.match(index, /src="data\.js\?v=20260821a"/);
  assert.match(app, /function loadDay/);
  assert.match(app, /function loadSummary/);
  assert.match(archiveHead, /window\.ARCHIVE/);
  assert.match(dataHead, /window\.BRIEFING/);
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(repo, "archive.js"), "utf8"), sandbox, { timeout: 5000 });
  assert.ok(sandbox.window.ARCHIVE["2026-10-08"]);
  assert.ok(sandbox.window.ARCHIVE["2026-09-21"]);
  assert.ok(sandbox.window.ARCHIVE["2026-08-21"]);
}

function testPublishedIssue() {
  const issuePath = path.join(repo, "weekly", "issues", "2026-11-09.json");
  const issue = JSON.parse(fs.readFileSync(issuePath, "utf8"));
  const validated = weekly.validateIssue(issue);
  assert.strictEqual(validated.ok, true, (validated.errors || []).join("；"));
  const htmlPath = path.join(repo, "weekly", "2026-11-09.html");
  const html = fs.readFileSync(htmlPath, "utf8");
  assert.strictEqual(html, weekly.renderIssueHtml(validated.issue));
  assert.match(html, /Seedream 5\.5/);
  assert.match(html, /seed\.bytedance\.com/);
  assert.match(html, /不是新模型|不是一个新产品|只把它记成节点/);
  assert.match(html, /Electron 45\.3\.0/);
  const list = fs.readFileSync(path.join(repo, "weekly", "index.html"), "utf8");
  assert.match(list, /href="\.\/2026-11-09\.html"/);
  const publicText = [
    html,
    list,
    fs.readFileSync(path.join(repo, "docs", "WEEKLY.md"), "utf8"),
    fs.readFileSync(path.join(repo, "weekly", "weekly.css"), "utf8")
  ].join("\n");
  assert.doesNotMatch(publicText, /[A-Za-z]:\\/);
  assert.doesNotMatch(publicText, /\/home\/|\/Users\//);
  assert.doesNotMatch(publicText, /\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b/);
  assert.doesNotMatch(publicText, /password|secret|api[_-]?key/i);
}

function testVerifyLocal() {
  return new Promise(function (resolve, reject) {
    const server = http.createServer(function (req, res) {
      const file = path.join(repo, decodeURIComponent(req.url.split("?")[0].replace(/^\/+/, "")));
      if (!file.startsWith(repo) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404);
        res.end("missing");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html", Server: "local-test" });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, "127.0.0.1", function () {
      const port = server.address().port;
      publish.verifyPublished({
        file: "weekly/2026-11-09.html",
        base: "http://127.0.0.1:" + port,
        root: repo
      }).then(function (report) {
        assert.strictEqual(report.status, "all-match");
        assert.strictEqual(report.observations[0].match, true);
        assert.strictEqual(report.observations[0].server, "local-test");
        server.close(function () { resolve(); });
      }).catch(function (err) {
        server.close(function () { reject(err); });
      });
    });
  });
}

async function main() {
  testValidation();
  testIdempotentImport();
  testDailyUntouchedContract();
  testPublishedIssue();
  await testVerifyLocal();
  const hash = crypto.createHash("sha256").update(fs.readFileSync(path.join(repo, "archive.js"))).digest("hex");
  assert.strictEqual(hash.length, 64);
  process.stdout.write("ok\n");
}

main().catch(function (err) {
  process.stderr.write(String(err.stack || err) + "\n");
  process.exit(1);
});
