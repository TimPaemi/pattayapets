#!/usr/bin/env node
"use strict";
/* Local Lighthouse gate. Requires a trusted local server at PP_LH_URL. */

const { spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const url = process.env.PP_LH_URL || "http://127.0.0.1:8787/";
const cli = path.join(ROOT, "node_modules", "lighthouse", "cli", "index.js");
const minimum = {
  performance: Number(process.env.PP_LH_PERFORMANCE || 90),
  accessibility: Number(process.env.PP_LH_ACCESSIBILITY || 95),
  "best-practices": Number(process.env.PP_LH_BEST_PRACTICES || 95),
  seo: Number(process.env.PP_LH_SEO || 95)
};
if (Object.keys(minimum).some(function (category) {
  return !Number.isFinite(minimum[category]) || minimum[category] < 0 || minimum[category] > 100;
})) {
  console.error("Lighthouse thresholds must be finite percentages from 0 to 100.");
  process.exit(1);
}
const parsedUrl = new URL(url);
if (parsedUrl.protocol !== "http:" || !["127.0.0.1", "localhost", "[::1]"].includes(parsedUrl.hostname) ||
    parsedUrl.username || parsedUrl.password) {
  console.error("PP_LH_URL must be an unauthenticated loopback HTTP URL.");
  process.exit(1);
}

if (!fs.existsSync(cli)) {
  console.error("Locked Lighthouse CLI is missing. Run `npm ci` first.");
  process.exit(1);
}
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "pattayapets-lighthouse-"));
const output = path.join(temp, "report.json");

try {
  const chromeFlags = process.env.PP_CHROME_NO_SANDBOX === "1" ?
    "--headless --disable-gpu --no-sandbox --disable-setuid-sandbox" : "--headless --disable-gpu";
  const run = spawnSync(process.execPath, [
    cli, url,
    "--only-categories=performance,accessibility,best-practices,seo",
    "--form-factor=mobile",
    "--screenEmulation.mobile=true",
    "--throttling-method=simulate",
    "--chrome-flags=" + chromeFlags,
    "--quiet", "--output=json", "--output-path=" + output
  ], { stdio: "inherit", shell: false, cwd: ROOT });
  if (run.status !== 0) throw new Error("Lighthouse failed; confirm the local server is available at " + url);

  const report = JSON.parse(fs.readFileSync(output, "utf8"));
  const scores = {};
  Object.keys(minimum).forEach(function (category) {
    scores[category] = Math.round(((report.categories[category] || {}).score || 0) * 100);
  });
  console.log("Lighthouse (" + url + "):", JSON.stringify(scores));
  const failures = Object.keys(minimum).filter(function (category) {
    return scores[category] < minimum[category];
  });
  if (failures.length) {
    failures.forEach(function (category) {
      console.error("FAIL " + category + " " + scores[category] + " < " + minimum[category]);
    });
    process.exitCode = 1;
  } else {
    console.log("PASS - every Lighthouse category meets its threshold");
  }
} catch (error) {
  console.error("Lighthouse gate: FAIL - " + error.message);
  process.exitCode = 1;
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
