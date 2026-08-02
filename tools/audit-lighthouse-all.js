"use strict";
/* Mobile Lighthouse gate across PattayaPets page templates.
   Requires: npm run build and a trusted local server on 127.0.0.1:8787.
   Usage: npm run audit:lighthouse:all */
const { spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const base = process.env.PP_LH_BASE || "http://127.0.0.1:8787";
const minPerf = Number(process.env.PP_LH_MIN || 90);
const minOther = Number(process.env.PP_LH_MIN_A11Y || 95);
if (![minPerf, minOther].every(function (value) {
  return Number.isFinite(value) && value >= 0 && value <= 100;
})) throw new Error("Lighthouse thresholds must be finite percentages from 0 to 100");
const root = path.resolve(__dirname, "..");
const cli = path.join(root, "node_modules", "lighthouse", "cli", "index.js");
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "pattayapets-lighthouse-all-"));
process.on("exit", function () { fs.rmSync(outDir, { recursive: true, force: true }); });
const parsedBase = new URL(base);
if (parsedBase.protocol !== "http:" || !["127.0.0.1", "localhost", "[::1]"].includes(parsedBase.hostname) ||
    parsedBase.username || parsedBase.password) throw new Error("PP_LH_BASE must be an unauthenticated loopback HTTP URL");

/* Utility pages intentionally noindex — skip SEO category threshold */
const NOINDEX_SKIP_SEO = new Set([
  "/search.html",
  "/404.html",
  "/offline.html"
]);

/* One URL per template / cluster — covers every major page type on PattayaPets */
const URLS = [
  { label: "Home", path: "/" },
  { label: "Directory", path: "/directory.html" },
  { label: "Guides hub", path: "/guides.html" },
  { label: "About", path: "/about.html" },
  { label: "Search", path: "/search.html" },
  { label: "Vets hub", path: "/vets/" },
  { label: "Vet listing", path: "/vets/pattaya-animal-hospital.html" },
  { label: "Groomers hub", path: "/groomers/" },
  { label: "Boarding hub", path: "/boarding/" },
  { label: "Area hub", path: "/area/naklua.html" },
  { label: "Import hub", path: "/bring-pet-to-thailand/" },
  { label: "Import corridor", path: "/bring-pet-to-thailand/from-uk.html" },
  { label: "Import checklist", path: "/bring-pet-to-thailand/checklist.html" },
  { label: "Import step", path: "/bring-pet-to-thailand/microchip-requirements.html" },
  { label: "Export hub", path: "/take-pet-out-of-thailand/" },
  { label: "Export corridor", path: "/take-pet-out-of-thailand/to-uk.html" },
  { label: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html" },
  { label: "Emergency hub", path: "/pet-emergency/" },
  { label: "Emergency guide", path: "/pet-emergency/24-hour-vets-pattaya.html" },
  { label: "Owning hub", path: "/owning-a-pet-in-pattaya/" },
  { label: "Owning guide", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
  { label: "Dog-friendly hub", path: "/dog-friendly-pattaya/" },
  { label: "Dog-friendly guide", path: "/dog-friendly-pattaya/beaches.html" },
  { label: "Adoption hub", path: "/adopt-a-pet-pattaya/" },
  { label: "Adoption org", path: "/adopt-a-pet-pattaya/hope-for-strays.html" },
  { label: "Pet health hub", path: "/pet-health-pattaya/" },
  { label: "Pet health guide", path: "/pet-health-pattaya/heartworm.html" },
  { label: "Cats hub", path: "/cats/" },
  { label: "Cats guide", path: "/cats/indoor-vs-outdoor-cats.html" },
  { label: "Dogs hub", path: "/dogs/" },
  { label: "Dogs guide", path: "/dogs/puppy-care-pattaya.html" },
  { label: "Pet insurance", path: "/pet-insurance-thailand.html" },
  { label: "Relocation hub", path: "/pet-relocation/" }
];

function runLh(url, outFile) {
  var chromeFlags = process.env.PP_CHROME_NO_SANDBOX === "1" ?
    "--headless --disable-gpu --no-sandbox --disable-setuid-sandbox" : "--headless --disable-gpu";
  var r = spawnSync(
    process.execPath,
    [
      cli, url,
      "--only-categories=performance,accessibility,best-practices,seo",
      "--form-factor=mobile",
      "--screenEmulation.mobile=true",
      "--throttling-method=simulate",
      "--quiet",
      "--output=json",
      "--output-path=" + outFile,
      "--chrome-flags=" + chromeFlags
    ],
    { stdio: "pipe", shell: false, encoding: "utf8", cwd: root }
  );
  return r.status === 0 && fs.existsSync(outFile);
}

if (!fs.existsSync(cli)) {
  console.error("Locked Lighthouse CLI is missing. Run `npm ci` first.");
  process.exit(1);
}

console.log("Lighthouse all-templates audit");
console.log("Base:", base, "| min performance:", minPerf);
console.log("Templates:", URLS.length);
console.log("=".repeat(60));

var failed = [];
var rows = [];

URLS.forEach(function (item, i) {
  var url = base + (item.path === "/" ? "/" : item.path);
  var slug = item.path.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home";
  var outFile = path.join(outDir, slug + ".json");
  process.stdout.write("[" + (i + 1) + "/" + URLS.length + "] " + item.label + " ... ");
  var report = null;
  var scores = {};
  var skipSeo = NOINDEX_SKIP_SEO.has(item.path);
  if (runLh(url, outFile)) {
    report = JSON.parse(fs.readFileSync(outFile, "utf8"));
    scores = {};
    Object.keys(report.categories).forEach(function (k) {
      scores[k] = Math.round(report.categories[k].score * 100);
    });
  }
  if (!report) {
    console.log("ERROR (lighthouse failed)");
    failed.push({ item: item, reason: "lighthouse error", scores: {} });
    return;
  }
  var ok = (scores.performance || 0) >= minPerf &&
    (scores.accessibility || 0) >= minOther &&
    (scores["best-practices"] || 0) >= minOther &&
    (skipSeo || (scores.seo || 0) >= minOther);
  console.log(
    ok ? "PASS" : "FAIL",
    "perf=" + scores.performance,
    "a11y=" + scores.accessibility,
    "bp=" + scores["best-practices"],
    "seo=" + scores.seo + (skipSeo ? " (noindex)" : "")
  );
  rows.push({ item: item, scores: scores, ok: ok, report: report });
  if (!ok) {
    var issues = [];
    if ((scores.performance || 0) < minPerf) issues.push("performance");
    if ((scores.accessibility || 0) < minOther) issues.push("accessibility");
    if ((scores["best-practices"] || 0) < minOther) issues.push("best-practices");
    if ((scores.seo || 0) < minOther && !NOINDEX_SKIP_SEO.has(item.path)) issues.push("seo");
    failed.push({ item: item, scores: scores, issues: issues, report: report });
  }
});

console.log("\n--- Summary ---");
var passCount = rows.filter(function (r) { return r.ok; }).length;
console.log("PASS:", passCount + "/" + URLS.length);

if (failed.length) {
  console.log("\nFailed templates:");
  failed.forEach(function (f) {
    console.log(" ", f.item.label, f.item.path, JSON.stringify(f.scores));
    if (f.report) {
      ["largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift",
        "unused-javascript", "render-blocking-resources", "dom-size"].forEach(function (id) {
        var a = f.report.audits[id];
        if (a && a.score !== null && a.score < 0.9) {
          console.log("    ", id + ":", a.displayValue || a.title);
        }
      });
    }
  });
  process.exit(1);
}

console.log("\nOK — all templates pass Lighthouse thresholds");
process.exit(0);
