"use strict";

const fs = require("fs");
const path = require("path");

const SITE_ORIGIN = "https://artnews.ai998.top";
const ASSET_VERSION = "20261116a";

function parseDay(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const parts = value.split("-").map(Number);
  const stamp = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  if (
    stamp.getUTCFullYear() !== parts[0] ||
    stamp.getUTCMonth() !== parts[1] - 1 ||
    stamp.getUTCDate() !== parts[2]
  ) {
    return null;
  }
  return stamp.getTime();
}

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function validPublicUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch (err) {
    return false;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return false;
  if (url.username || url.password) return false;
  return true;
}

function cleanText(value, max) {
  if (typeof value !== "string") return null;
  const text = value.replace(/\r\n/g, "\n").trim();
  if (!text || text.length > max) return null;
  return text;
}

function validateIssue(input) {
  const errors = [];
  if (!isPlainObject(input)) {
    return { ok: false, errors: ["根节点必须是对象"] };
  }

  const allowed = new Set(["schemaVersion", "id", "end", "title", "dek", "items", "closing"]);
  Object.keys(input).forEach(function (key) {
    if (!allowed.has(key)) errors.push("未知字段: " + key);
  });

  if (input.schemaVersion !== 1) errors.push("schemaVersion 必须为 1");

  const start = parseDay(input.id);
  const end = parseDay(input.end);
  if (start === null) errors.push("id 必须是真实存在的 YYYY-MM-DD");
  if (end === null) errors.push("end 必须是真实存在的 YYYY-MM-DD");
  if (start !== null && end !== null && end < start) errors.push("end 不能早于 id");

  const title = cleanText(input.title, 120);
  const dek = cleanText(input.dek, 400);
  if (!title) errors.push("title 不能为空，且不超过 120 字");
  if (!dek) errors.push("dek 不能为空，且不超过 400 字");

  let closing = null;
  if (input.closing != null) {
    closing = cleanText(input.closing, 600);
    if (!closing) errors.push("closing 不能为空，且不超过 600 字");
  }

  if (!Array.isArray(input.items)) {
    errors.push("items 必须是数组");
  } else if (input.items.length > 30) {
    errors.push("items 最多 30 条");
  }

  const items = [];
  if (Array.isArray(input.items)) {
    input.items.forEach(function (raw, index) {
      const label = "items[" + index + "]";
      if (!isPlainObject(raw)) {
        errors.push(label + " 必须是对象");
        return;
      }
      const itemKeys = new Set(["title", "body", "value", "links"]);
      Object.keys(raw).forEach(function (key) {
        if (!itemKeys.has(key)) errors.push(label + " 未知字段: " + key);
      });
      const itemTitle = cleanText(raw.title, 160);
      const value = cleanText(raw.value, 800);
      if (!itemTitle) errors.push(label + ".title 不能为空，且不超过 160 字");
      if (!value) errors.push(label + ".value 不能为空，且不超过 800 字");
      if (!Array.isArray(raw.body) || raw.body.length < 1 || raw.body.length > 8) {
        errors.push(label + ".body 必须是 1 到 8 段文字");
      }
      const body = [];
      if (Array.isArray(raw.body)) {
        raw.body.forEach(function (paragraph, paragraphIndex) {
          const text = cleanText(paragraph, 2000);
          if (!text) errors.push(label + ".body[" + paragraphIndex + "] 不能为空，且不超过 2000 字");
          else body.push(text);
        });
      }
      if (!Array.isArray(raw.links) || raw.links.length < 1 || raw.links.length > 8) {
        errors.push(label + ".links 必须是 1 到 8 个链接");
      }
      const links = [];
      if (Array.isArray(raw.links)) {
        raw.links.forEach(function (link, linkIndex) {
          const linkLabel = "items[" + index + "].links[" + linkIndex + "]";
          if (!isPlainObject(link)) {
            errors.push(linkLabel + " 必须是对象");
            return;
          }
          const name = cleanText(link.label, 120);
          if (!name) errors.push(linkLabel + ".label 不能为空");
          if (typeof link.url !== "string" || !validPublicUrl(link.url)) {
            errors.push(linkLabel + ".url 必须是不带账号的 http(s) 链接");
          }
          if (name && typeof link.url === "string" && validPublicUrl(link.url)) {
            links.push({ label: name, url: link.url });
          }
        });
      }
      if (itemTitle && value && body.length === (raw.body || []).length && links.length === (raw.links || []).length) {
        items.push({ title: itemTitle, body: body, value: value, links: links });
      }
    });
  }

  if (errors.length) return { ok: false, errors: errors };

  const issue = {
    schemaVersion: 1,
    id: input.id,
    end: input.end,
    title: title,
    dek: dek,
    items: items
  };
  if (closing) issue.closing = closing;
  return { ok: true, errors: [], issue: issue };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function paragraphs(list) {
  return list.map(function (text) {
    return "        <p>" + escapeHtml(text) + "</p>";
  }).join("\n");
}

function renderIssueHtml(issue) {
  const canonical = SITE_ORIGIN + "/weekly/" + issue.id + ".html";
  const toc = issue.items.map(function (item, index) {
    return "        <li><a href=\"#item-" + (index + 1) + "\">" + escapeHtml(item.title) + "</a></li>";
  }).join("\n");
  const articles = issue.items.map(function (item, index) {
    const links = item.links.map(function (link) {
      return "          <li><a href=\"" + escapeHtml(link.url) + "\" rel=\"noopener noreferrer\">" + escapeHtml(link.label) + "</a></li>";
    }).join("\n");
    return [
      "      <article class=\"issue\" id=\"item-" + (index + 1) + "\">",
      "        <h2>" + escapeHtml(item.title) + "</h2>",
      paragraphs(item.body),
      "        <p class=\"value\">" + escapeHtml(item.value) + "</p>",
      "        <ul class=\"sources\">",
      links,
      "        </ul>",
      "      </article>"
    ].join("\n");
  }).join("\n");
  const body = issue.items.length
    ? articles
    : "      <p class=\"empty\">这一期还没有写入已核实的条目。</p>";
  const tocBlock = issue.items.length
    ? [
      "      <nav class=\"toc\" aria-label=\"本期条目\">",
      "        <ol>",
      toc,
      "        </ol>",
      "      </nav>"
    ].join("\n")
    : "";
  const closing = issue.closing
    ? "      <p class=\"closing\">" + escapeHtml(issue.closing) + "</p>"
    : "";

  return [
    "<!DOCTYPE html>",
    "<html lang=\"zh-CN\" data-theme=\"dark\">",
    "<head>",
    "  <meta charset=\"UTF-8\" />",
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
    "  <title>" + escapeHtml(issue.title) + "</title>",
    "  <meta name=\"description\" content=\"" + escapeHtml(issue.dek) + "\" />",
    "  <link rel=\"canonical\" href=\"" + escapeHtml(canonical) + "\" />",
    "  <link rel=\"stylesheet\" href=\"../styles.css?v=" + ASSET_VERSION + "\" />",
    "  <link rel=\"stylesheet\" href=\"./weekly.css?v=" + ASSET_VERSION + "\" />",
    "</head>",
    "<body>",
    "  <a class=\"skip-link\" href=\"#main\">跳到正文</a>",
    "  <div class=\"weekly\">",
    "    <nav class=\"site-nav\" aria-label=\"栏目\">",
    "      <a href=\"../index.html\">日报</a>",
    "      <a href=\"./index.html\">周报</a>",
    "    </nav>",
    "    <header class=\"weekly-head\">",
    "      <p class=\"kicker\">技术周报</p>",
    "      <h1>" + escapeHtml(issue.title) + "</h1>",
    "      <p class=\"range\"><time datetime=\"" + issue.id + "\">" + issue.id + "</time> 至 <time datetime=\"" + issue.end + "\">" + issue.end + "</time></p>",
    "      <p class=\"dek\">" + escapeHtml(issue.dek) + "</p>",
    "    </header>",
    tocBlock,
    "    <main id=\"main\">",
    body,
    closing,
    "    </main>",
    "    <footer class=\"weekly-foot\">",
    "      <p>这一期的说明写在本页。上面的链接只用于回到原始出处核对。</p>",
    "      <p><a href=\"./index.html\">全部周报</a> · <a href=\"../index.html\">返回日报</a></p>",
    "    </footer>",
    "  </div>",
    "</body>",
    "</html>",
    ""
  ].filter(function (line) { return line !== ""; }).join("\n");
}

function renderIndexHtml(issues) {
  const cards = issues.length
    ? issues.map(function (issue) {
      return [
        "      <article class=\"card\">",
        "        <p class=\"range\"><time datetime=\"" + issue.id + "\">" + issue.id + "</time> 至 <time datetime=\"" + issue.end + "\">" + issue.end + "</time></p>",
        "        <h2><a href=\"./" + issue.id + ".html\">" + escapeHtml(issue.title) + "</a></h2>",
        "        <p>" + escapeHtml(issue.dek) + "</p>",
        "      </article>"
      ].join("\n");
    }).join("\n")
    : "      <p class=\"empty\">还没有周报。</p>";

  return [
    "<!DOCTYPE html>",
    "<html lang=\"zh-CN\" data-theme=\"dark\">",
    "<head>",
    "  <meta charset=\"UTF-8\" />",
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
    "  <title>技术周报</title>",
    "  <meta name=\"description\" content=\"按周归档的技术周报，每一期的正文都在本站。\" />",
    "  <link rel=\"canonical\" href=\"" + SITE_ORIGIN + "/weekly/\" />",
    "  <link rel=\"stylesheet\" href=\"../styles.css?v=" + ASSET_VERSION + "\" />",
    "  <link rel=\"stylesheet\" href=\"./weekly.css?v=" + ASSET_VERSION + "\" />",
    "</head>",
    "<body>",
    "  <a class=\"skip-link\" href=\"#main\">跳到正文</a>",
    "  <div class=\"weekly\">",
    "    <nav class=\"site-nav\" aria-label=\"栏目\">",
    "      <a href=\"../index.html\">日报</a>",
    "      <a href=\"./index.html\" aria-current=\"page\">周报</a>",
    "    </nav>",
    "    <header class=\"weekly-head\">",
    "      <p class=\"kicker\">技术周报</p>",
    "      <h1>按周归档</h1>",
    "      <p class=\"dek\">每一期有单独的地址，正文在本站。日报仍按日期留在首页。</p>",
    "    </header>",
    "    <main id=\"main\" class=\"week-list\">",
    cards,
    "    </main>",
    "  </div>",
    "</body>",
    "</html>",
    ""
  ].join("\n");
}

function manifestFrom(issues) {
  return {
    schemaVersion: 1,
    issues: issues.map(function (issue) {
      return {
        id: issue.id,
        end: issue.end,
        title: issue.title,
        dek: issue.dek,
        href: issue.id + ".html"
      };
    })
  };
}

function canonicalJson(value) {
  return JSON.stringify(value, null, 2) + "\n";
}

function issueDir(root) {
  return path.join(root, "weekly", "issues");
}

function readIssues(root) {
  const dir = issueDir(root);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(function (name) { return name.endsWith(".json"); })
    .sort()
    .map(function (name) {
      const parsed = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
      const result = validateIssue(parsed);
      if (!result.ok) {
        throw new Error(name + " 不符合周报格式: " + result.errors.join("；"));
      }
      if (result.issue.id + ".json" !== name) {
        throw new Error(name + " 的文件名必须与 id 一致");
      }
      return result.issue;
    })
    .sort(function (a, b) { return a.id < b.id ? 1 : -1; });
}

function writeIfChanged(file, content) {
  const next = Buffer.from(content);
  if (fs.existsSync(file) && fs.readFileSync(file).equals(next)) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, next);
  return true;
}

function writeSite(root, issues) {
  const changed = [];
  const indexPath = path.join(root, "weekly", "index.html");
  const manifestPath = path.join(root, "weekly", "manifest.json");
  if (writeIfChanged(indexPath, renderIndexHtml(issues))) changed.push("weekly/index.html");
  if (writeIfChanged(manifestPath, canonicalJson(manifestFrom(issues)))) changed.push("weekly/manifest.json");
  issues.forEach(function (issue) {
    const htmlPath = path.join(root, "weekly", issue.id + ".html");
    if (writeIfChanged(htmlPath, renderIssueHtml(issue))) changed.push("weekly/" + issue.id + ".html");
  });
  return changed;
}

function importIssue(root, input) {
  const result = validateIssue(input);
  if (!result.ok) {
    const error = new Error(result.errors.join("；"));
    error.code = "INVALID_ISSUE";
    error.errors = result.errors;
    throw error;
  }
  const issue = result.issue;
  const jsonPath = path.join(issueDir(root), issue.id + ".json");
  const existed = fs.existsSync(jsonPath);
  const json = canonicalJson(issue);
  const jsonChanged = writeIfChanged(jsonPath, json);
  const changed = writeSite(root, readIssues(root));
  let status = "unchanged";
  if (!existed) status = "created";
  else if (jsonChanged || changed.length) status = "updated";
  return {
    status: status,
    id: issue.id,
    html: "weekly/" + issue.id + ".html",
    changed: (jsonChanged ? ["weekly/issues/" + issue.id + ".json"] : []).concat(changed)
  };
}

function rebuild(root) {
  const issues = readIssues(root);
  const changed = writeSite(root, issues);
  return { status: changed.length ? "updated" : "unchanged", count: issues.length, changed: changed };
}

module.exports = {
  SITE_ORIGIN: SITE_ORIGIN,
  validateIssue: validateIssue,
  renderIssueHtml: renderIssueHtml,
  renderIndexHtml: renderIndexHtml,
  canonicalJson: canonicalJson,
  importIssue: importIssue,
  rebuild: rebuild,
  readIssues: readIssues
};
