#!/usr/bin/env node
"use strict";
/* High-confidence credential scan for authored, generated and automation files. */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ROOT_FILES = ["build.js", "package.json", "package-lock.json", ".gitignore"];
const ROOT_DIRS = ["src", "tools", "scripts", ".github", "schemas", "docs", "research", "dist"];
const TEXT_EXT = new Set([
  "", ".css", ".html", ".js", ".json", ".jsonc", ".md", ".mjs", ".txt",
  ".webmanifest", ".xml", ".yaml", ".yml"
]);
const PATTERNS = [
  ["private key", /-----BEGIN (?:EC |OPENSSH |PGP |RSA )?PRIVATE KEY-----/g],
  ["AWS access key", /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g],
  ["GitHub token", /\bgh(?:p|o|u|s|r)_[A-Za-z0-9]{30,255}\b/g],
  ["OpenAI key", /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g],
  ["Stripe live secret", /\b(?:sk|rk)_live_[A-Za-z0-9]{16,}\b/g],
  ["Slack token", /\bxox(?:a|b|p|r|s)-[A-Za-z0-9-]{20,}\b/g],
  ["Google API key", /\bAIza[0-9A-Za-z_-]{35}\b/g],
  ["npm token", /\bnpm_[A-Za-z0-9]{30,}\b/g],
  ["credential in URL", /https?:\/\/[^\s/:@]+:[^\s/@]+@[^\s/]+/gi]
];

function walk(dir, out) {
  out = out || [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) throw new Error("Symlink is not allowed in scan scope: " + full);
    if (stat.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function lineOf(text, offset) {
  return text.slice(0, offset).split(/\r?\n/).length;
}

function main() {
  const envFiles = fs.readdirSync(ROOT).filter(function (name) {
    return /^\.env(?:\..+)?$/i.test(name) && !/\.(?:example|sample|template)$/i.test(name);
  });
  const findings = envFiles.map(function (name) {
    return { file: name, line: 1, type: "unignored environment file" };
  });
  const files = ROOT_FILES.map(function (name) { return path.join(ROOT, name); })
    .filter(fs.existsSync)
    .concat(ROOT_DIRS.flatMap(function (name) { return walk(path.join(ROOT, name)); }));

  files.forEach(function (file) {
    const base = path.basename(file);
    if (/^\.env(?:\..+)?$/i.test(base) && !/\.(?:example|sample|template)$/i.test(base)) {
      findings.push({
        file: path.relative(ROOT, file).replace(/\\/g, "/"),
        line: 1,
        type: "unignored environment file"
      });
    }
    if (!TEXT_EXT.has(path.extname(file).toLowerCase())) return;
    const bytes = fs.readFileSync(file);
    if (bytes.includes(0)) return;
    const text = bytes.toString("utf8");
    PATTERNS.forEach(function (item) {
      const regex = new RegExp(item[1].source, item[1].flags);
      let match;
      while ((match = regex.exec(text))) {
        findings.push({
          file: path.relative(ROOT, file).replace(/\\/g, "/"),
          line: lineOf(text, match.index),
          type: item[0]
        });
        if (!match[0].length) regex.lastIndex++;
      }
    });
  });

  if (findings.length) {
    console.error("Secret scan: FAIL (" + findings.length + " high-confidence finding(s))");
    findings.forEach(function (finding) {
      console.error("- " + finding.file + ":" + finding.line + " " + finding.type);
    });
    process.exit(1);
  }
  console.log("Secret scan: PASS (" + files.length + " files considered; no high-confidence credentials)");
}

try { main(); }
catch (error) {
  console.error("Secret scan: FAIL\n- " + error.message);
  process.exit(1);
}
