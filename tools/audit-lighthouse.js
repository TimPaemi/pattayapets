"use strict";
/* Mobile Lighthouse performance gate. Requires: npm run build && npx serve dist -l 8787 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const url = process.env.PP_LH_URL || "http://127.0.0.1:8787/";
const out = path.join(__dirname, "..", "lighthouse-audit.json");
const min = Number(process.env.PP_LH_MIN || 95);

const run = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  [
    "lighthouse", url,
    "--only-categories=performance,accessibility,best-practices,seo",
    "--form-factor=mobile",
    "--screenEmulation.mobile=true",
    "--throttling-method=simulate",
    "--quiet",
    "--output=json",
    "--output-path=" + out
  ],
  { stdio: "inherit", shell: process.platform === "win32" }
);

if (run.status !== 0) {
  console.error("Lighthouse failed to run. Start a local server: npx serve dist -l 8787");
  process.exit(run.status || 1);
}

const r = JSON.parse(fs.readFileSync(out, "utf8"));
const scores = {};
Object.keys(r.categories).forEach(function (k) {
  scores[k] = Math.round(r.categories[k].score * 100);
});
console.log("Lighthouse (" + url + "):", JSON.stringify(scores));

var perf = scores.performance || 0;
if (perf < min) {
  console.error("FAIL performance " + perf + " < " + min);
  ["largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift",
    "unused-javascript", "render-blocking-resources"].forEach(function (id) {
    var a = r.audits[id];
    if (a && a.score !== null && a.score < 1) {
      console.error(" ", id + ":", a.displayValue || a.title);
    }
  });
  process.exit(1);
}
console.log("OK — performance >= " + min);
