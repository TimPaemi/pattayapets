"use strict";
/* Extended local dist audit. Run after build: npm run audit:full */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const dist = path.join(__dirname, "..", "dist");
const root = path.join(__dirname, "..");

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function run(name, cmd, args) {
  console.log("\n>>> " + name);
  var r = spawnSync(cmd, args, { cwd: root, stdio: "inherit", shell: process.platform === "win32" });
  return r.status === 0;
}

if (!fs.existsSync(dist)) {
  console.error("dist/ missing — run npm run build first");
  process.exit(1);
}

var files = walk(dist);
var issues = {
  undefinedTitle: [],
  emptyTitle: [],
  badCanonical: [],
  invalidJsonLd: [],
  noDisclaimer: [],
  missingOg: []
};

files.forEach(function (f) {
  var h = fs.readFileSync(f, "utf8");
  var rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  var title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  var canonical = (h.match(/rel="canonical"\s+href="([^"]+)"/) ||
    h.match(/href="([^"]+)"\s+rel="canonical"/) || [])[1];

  if (/undefined/i.test(title)) issues.undefinedTitle.push(rel);
  if (!title.trim()) issues.emptyTitle.push(rel);
  if (!canonical) issues.badCanonical.push({ p: rel, why: "missing" });
  if (canonical && canonical.indexOf("pattayapets.com") === -1) {
    issues.badCanonical.push({ p: rel, why: "not production domain: " + canonical });
  }
  if (!h.includes('property="og:title"') && rel !== "/404.html" && rel !== "/offline.html") {
    issues.missingOg.push(rel);
  }
  if (!h.includes("Editorial and informational only") &&
      rel !== "/404.html" && rel !== "/offline.html" && rel !== "/search.html") {
    issues.noDisclaimer.push(rel);
  }

  var blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  blocks.forEach(function (b, i) {
    try { JSON.parse(b[1]); } catch (e) {
      issues.invalidJsonLd.push({ p: rel, block: i, err: e.message });
    }
  });
});

console.log("PattayaPets extended audit (dist/)");
console.log("=".repeat(50));
console.log("HTML pages:", files.length);

var ok = true;
function report(label, arr, fail) {
  if (!arr.length) { console.log("OK  " + label); return; }
  console.log((fail ? "FAIL" : "WARN") + "  " + label + ": " + arr.length);
  arr.slice(0, 15).forEach(function (x) {
    console.log("   ", typeof x === "string" ? x : x.p + (x.why ? " — " + x.why : "") + (x.detail || "") + (x.err || ""));
  });
  if (arr.length > 15) console.log("    ... +" + (arr.length - 15));
  if (fail) ok = false;
}

report("undefined in <title>", issues.undefinedTitle, true);
report("empty <title>", issues.emptyTitle, true);
report("canonical problems", issues.badCanonical, true);
report("invalid JSON-LD", issues.invalidJsonLd, true);
report("missing OG title", issues.missingOg, false);
report("missing disclaimer", issues.noDisclaimer, false);

/* static files */
var staticChecks = [
  "sitemap.xml", "robots.txt", "sw.js", "assets/css/site.css", "assets/js/site.js",
  "_headers", "manifest.webmanifest"
];
console.log("\n--- Static artifacts ---");
staticChecks.forEach(function (s) {
  var p = path.join(dist, s);
  console.log(fs.existsSync(p) ? "OK  " + s : "FAIL " + s);
  if (!fs.existsSync(p)) ok = false;
});

/* sitemap vs files */
var sm = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
var smUrls = [...sm.matchAll(/<loc>https:\/\/pattayapets\.com([^<]*)<\/loc>/g)].map(function (m) {
  return m[1];
});
var missingFromDist = smUrls.filter(function (u) {
  var t = u.replace(/^\//, "");
  if (t === "") t = "index.html";
  return !fs.existsSync(path.join(dist, t));
});
report("sitemap URLs missing from dist", missingFromDist, true);

console.log("\n--- Standard audits ---");
ok = run("check-links", "npm", ["run", "check"]) && ok;
ok = run("audit-seo", "npm", ["run", "audit:seo"]) && ok;
ok = run("audit-directory", "npm", ["run", "audit:directory"]) && ok;
ok = run("audit-country-pairs", "npm", ["run", "audit:country-pairs"]) && ok;
ok = run("audit-orphans", "npm", ["run", "audit:orphans"]) && ok;
ok = run("audit-linking", "npm", ["run", "audit:linking"]) && ok;
run("audit-content-depth", "npm", ["run", "audit:content"]);
ok = run("audit-official-links", "npm", ["run", "audit:official"]) && ok;

console.log("\n" + (ok ? "PASS" : "FAIL") + " — extended audit complete");
process.exit(ok ? 0 : 1);
