"use strict";
/* Quick SEO/meta audit on dist HTML. Run after build: npm run audit:seo */
const fs = require("fs");
const path = require("path");
const dist = path.join(__dirname, "..", "dist");

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function metaDesc(h) {
  return (h.match(/name="description"\s+content="([^"]*)"/) ||
    h.match(/content="([^"]*)"\s+name="description"/) || [])[1];
}

/* Decode build-emitted entities so lengths match what users/Google see. */
function decode(s) {
  return s == null ? s : String(s)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

const files = walk(dist);
const titles = {};
const issues = { noH1: [], multiH1: [], shortDesc: [], longDesc: [], longTitle: [], noDesc: [] };

files.forEach(function (f) {
  const h = fs.readFileSync(f, "utf8");
  const rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1]);
  const desc = decode(metaDesc(h));
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(function (m) {
    return m[1].replace(/<[^>]+>/g, "").trim();
  });
  if (title) titles[title] = (titles[title] || []).concat(rel);
  if (!desc) issues.noDesc.push(rel);
  else {
    if (desc.length < 50) issues.shortDesc.push({ p: rel, l: desc.length });
    if (desc.length > 160) issues.longDesc.push({ p: rel, l: desc.length });
  }
  if (title && title.length > 60) issues.longTitle.push({ p: rel, l: title.length });
  if (h1s.length === 0) issues.noH1.push(rel);
  if (h1s.length > 1) issues.multiH1.push({ p: rel, n: h1s.length });
});

const dups = Object.entries(titles).filter(function (e) { return e[1].length > 1; });
let ok = true;
console.log("Pages:", files.length);
if (dups.length) { ok = false; console.log("FAIL duplicate titles:", dups.length); }
if (issues.noH1.length) { ok = false; console.log("FAIL no H1:", issues.noH1.length); }
if (issues.multiH1.length) { ok = false; console.log("FAIL multi H1:", issues.multiH1.length); }
if (issues.noDesc.length) { ok = false; console.log("FAIL no description:", issues.noDesc.length); }
if (issues.longTitle.length) {
  console.log("WARN long titles (>60):", issues.longTitle.length);
  issues.longTitle.sort(function (a, b) { return b.l - a.l; });
  issues.longTitle.slice(0, 15).forEach(function (x) { console.log(" ", x.l, x.p); });
}
if (issues.longDesc.length) {
  console.log("WARN long descriptions (>160):", issues.longDesc.length);
  issues.longDesc.forEach(function (x) { console.log(" ", x.p, x.l); });
}
if (issues.shortDesc.length) {
  console.log("WARN short descriptions (<50):", issues.shortDesc.length);
  issues.shortDesc.forEach(function (x) { console.log(" ", x.p, x.l); });
}
if (ok && !issues.longDesc.length) console.log("OK — meta structure clean");
process.exit(ok ? 0 : 1);
