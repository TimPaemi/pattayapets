"use strict";
/* Cross-link coverage audit — sidebars, hub strips, network footer. */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");

const HUB_PATHS = {
  "/bring-pet-to-thailand/": 1,
  "/take-pet-out-of-thailand/": 1,
  "/pet-emergency/": 1,
  "/owning-a-pet-in-pattaya/": 1,
  "/pet-health-pattaya/": 1,
  "/dog-friendly-pattaya/": 1,
  "/adopt-a-pet-pattaya/": 1,
  "/dogs/": 1,
  "/cats/": 1
};

const STRUCTURAL_NETWORK = {
  "/about.html": 1,
  "/masthead.html": 1
};

const SKIP = {
  "/404.html": 1,
  "/offline.html": 1,
  "/search.html": 1
};

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function mainContent(html) {
  var m = html.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return m ? m[1] : html;
}

function countInternal(main) {
  var n = 0;
  var re = /href="(\/[^"#?]*[^"#?])"/g;
  var hit;
  while ((hit = re.exec(main)) !== null) n += 1;
  return n;
}

if (!fs.existsSync(dist)) {
  console.error("dist/ missing — run npm run build first");
  process.exit(1);
}

var files = walk(dist);
var fail = [];
var warn = [];

files.forEach(function (f) {
  var h = fs.readFileSync(f, "utf8");
  var rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  if (SKIP[rel]) return;

  if (!h.includes("Pattaya Authority network")) {
    fail.push(rel + " — missing footer network block");
  }

  if (STRUCTURAL_NETWORK[rel] && !h.includes("Sister publications in the Pattaya Authority network")) {
    fail.push(rel + " — missing in-page network directory prose");
  }

  if (HUB_PATHS[rel] && !h.includes("More to read")) {
    fail.push(rel + " — cluster hub missing More to read strip");
  }

  var isGuideArticle = h.includes('"@type":"Article"') ||
    h.includes('"@type": "Article"');
  var isListing = h.includes("biz-sub") && h.includes("The facts");
  var isCategoryHub = /^\/(vets|groomers|boarding|pet-shops|trainers|mobile-vets|pet-relocation)\/$/.test(rel);

  if (isGuideArticle && !h.includes("Also on PattayaPets")) {
    fail.push(rel + " — guide article missing Also on PattayaPets sidebar");
  }
  if (isGuideArticle && !h.includes("see-also")) {
    warn.push(rel + " — guide missing in-body See also callout");
  }
  if (isListing && !h.includes("Also on PattayaPets")) {
    fail.push(rel + " — business listing missing link sidebar");
  }
  if (isCategoryHub && !h.includes("More to read")) {
    fail.push(rel + " — category hub missing More to read strip");
  }

  var main = mainContent(h);
  var internal = countInternal(main);
  if ((isGuideArticle || isListing) && internal < 5) {
    warn.push(rel + " — only " + internal + " internal links in <main> (min 5 suggested)");
  }
});

console.log("Linking audit (dist/)");
console.log("=".repeat(40));
console.log("Pages checked:", files.length);

if (fail.length) {
  console.log("\nFAIL:", fail.length);
  fail.forEach(function (x) { console.log("  ", x); });
} else {
  console.log("\nOK — required link blocks present");
}

if (warn.length) {
  console.log("\nWARN:", warn.length);
  warn.slice(0, 20).forEach(function (x) { console.log("  ", x); });
  if (warn.length > 20) console.log("   ... +" + (warn.length - 20));
} else {
  console.log("OK — no link warnings");
}

var ok = !fail.length;
console.log("\n" + (ok ? "PASS" : "FAIL") + " — linking audit complete");
process.exit(ok ? 0 : 1);
