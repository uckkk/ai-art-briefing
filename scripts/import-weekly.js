#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const weekly = require("./weekly-lib");

function fail(message, code) {
  process.stderr.write(message + "\n");
  process.exit(code);
}

function readOption(args, name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) fail("缺少 " + name + " 的参数", 2);
  return value;
}

function main() {
  const args = process.argv.slice(2);
  const rootOption = readOption(args, "--root");
  const root = path.resolve(rootOption || path.join(__dirname, ".."));
  const rebuild = args.indexOf("--rebuild") !== -1;
  const file = args.filter(function (arg, index) {
    if (arg === "--rebuild") return false;
    if (arg === "--root") return false;
    if (index > 0 && args[index - 1] === "--root") return false;
    return true;
  })[0];

  if (!rebuild && !file) {
    fail("用法: node scripts/import-weekly.js <issue.json> [--root 目录]\n或: node scripts/import-weekly.js --rebuild [--root 目录]", 2);
  }

  try {
    const result = rebuild
      ? weekly.rebuild(root)
      : weekly.importIssue(root, JSON.parse(fs.readFileSync(path.resolve(file), "utf8")));
    if (rebuild) {
      process.stdout.write("status=" + result.status + " count=" + result.count + "\n");
    } else {
      process.stdout.write("status=" + result.status + " id=" + result.id + " html=" + result.html + "\n");
    }
  } catch (err) {
    if (err.code === "INVALID_ISSUE") fail(err.message, 2);
    fail(err.message, 1);
  }
}

main();
