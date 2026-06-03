"use strict";
/* HEAD-check external official URLs embedded in src/. Run: npm run audit:official */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SCAN_DIRS = [
  path.join(ROOT, "src", "pages"),
  path.join(ROOT, "src", "data"),
  path.join(ROOT, "src")
];
const SKIP_HOSTS = /^(localhost|127\.0\.0\.1|pattayapets\.com|www\.pattayapets\.com)$/i;
const URL_RE = /https:\/\/[^\s"'<>\\]+/g;
const CONCURRENCY = 6;
const TIMEOUT_MS = 12000;

function collectFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  if (fs.statSync(dir).isFile()) return [dir];
  return fs.readdirSync(dir).flatMap(function (name) {
    var p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) return collectFiles(p);
    return /\.js$/.test(name) ? [p] : [];
  });
}

function cleanUrl(raw) {
  return raw.replace(/[)\\]},.;]+$/g, "");
}

function extractUrls() {
  var files = [];
  SCAN_DIRS.forEach(function (d) { files = files.concat(collectFiles(d)); });
  files = [...new Set(files)];

  var urls = new Set();
  files.forEach(function (file) {
    var text = fs.readFileSync(file, "utf8");
    var m;
    while ((m = URL_RE.exec(text)) !== null) {
      var u = cleanUrl(m[0]);
      try {
        var host = new URL(u).hostname.replace(/^www\./, "");
        if (!SKIP_HOSTS.test(host) && !host.endsWith(".pattayapets.com")) urls.add(u);
      } catch (e) { /* skip malformed */ }
    }
  });
  return [...urls].sort();
}

async function headCheck(url) {
  var ctrl = new AbortController();
  var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
  try {
    var res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "User-Agent": "PattayaPets-official-link-audit/1.0" }
    });
    clearTimeout(timer);
    if (res.status === 405 || res.status === 403 || res.status === 400 ||
        res.status === 404 || res.status === 410) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { "User-Agent": "PattayaPets-official-link-audit/1.0" }
      });
    }
    return { url: url, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timer);
    return { url: url, status: 0, ok: false, error: err.message || String(err) };
  }
}

async function runPool(list, fn, limit) {
  var results = [];
  var i = 0;
  async function worker() {
    while (i < list.length) {
      var idx = i++;
      results[idx] = await fn(list[idx]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, list.length) }, worker));
  return results;
}

(async function main() {
  var urls = extractUrls();
  console.log("Official link audit — checking", urls.length, "unique external URLs\n");

  var results = await runPool(urls, headCheck, CONCURRENCY);
  var dead = [];
  var warn = [];
  var ok = [];

  results.forEach(function (r) {
    if (r.status === 404 || r.status === 410) dead.push(r);
    else if (r.status === 0 || r.status >= 500) warn.push(r);
    else if (!r.ok && r.status !== 403) warn.push(r);
    else ok.push(r);
  });

  ok.forEach(function (r) { console.log("OK  ", r.status, r.url); });
  warn.forEach(function (r) {
    console.log("WARN", r.status || "ERR", r.url, r.error ? "(" + r.error + ")" : "");
  });
  dead.forEach(function (r) { console.log("FAIL", r.status, r.url); });

  console.log("\n--- Summary ---");
  console.log("OK:", ok.length, "| WARN:", warn.length, "| FAIL:", dead.length);

  if (dead.length) {
    console.log("\nFAIL — dead official URLs (404/410)");
    process.exit(1);
  }
  if (warn.length) console.log("\nWARN — some URLs timed out or returned server errors; re-run if needed.");
  console.log("\nPASS — no dead official URLs");
  process.exit(0);
})();
