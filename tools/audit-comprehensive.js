"use strict";
/* Full metadata, keyword and on-page SEO audit on dist/. Run after build. */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");

const TARGET_KEYWORDS = [
  { kw: "vet pattaya", paths: ["/", "/vets/", "/vets/english-speaking-vets-pattaya.html"] },
  { kw: "24 hour vet pattaya", paths: ["/pet-emergency/24-hour-vets-pattaya.html"] },
  { kw: "english speaking vet", paths: ["/vets/english-speaking-vets-pattaya.html"] },
  { kw: "bring pet to thailand", paths: ["/bring-pet-to-thailand/"] },
  { kw: "bring dog to thailand", paths: ["/bring-pet-to-thailand/bring-a-dog-to-thailand.html"] },
  { kw: "bring cat to thailand", paths: ["/bring-pet-to-thailand/bring-a-cat-to-thailand.html"] },
  { kw: "dog friendly pattaya", paths: ["/dog-friendly-pattaya/"] },
  { kw: "pet friendly hotel pattaya", paths: ["/dog-friendly-pattaya/hotels.html"] },
  { kw: "animal shelter pattaya", paths: ["/adopt-a-pet-pattaya/animal-shelters-pattaya.html"] },
  { kw: "adopt pet pattaya", paths: ["/adopt-a-pet-pattaya/"] },
  { kw: "dog grooming pattaya", paths: ["/groomers/dog-grooming-pattaya.html", "/groomers/"] },
  { kw: "pet boarding pattaya", paths: ["/boarding/"] },
  { kw: "export pet thailand", paths: ["/take-pet-out-of-thailand/"] },
  { kw: "pet emergency pattaya", paths: ["/pet-emergency/"] },
  { kw: "vet costs pattaya", paths: ["/owning-a-pet-in-pattaya/vet-costs-pattaya.html"] },
  { kw: "bangkok to pattaya pet", paths: ["/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html"] },
  { kw: "pet taxi pattaya", paths: ["/owning-a-pet-in-pattaya/pet-taxi-pattaya.html"] },
  { kw: "heartworm pattaya", paths: ["/pet-health-pattaya/heartworm.html"] },
  { kw: "microchip thailand pet", paths: ["/bring-pet-to-thailand/microchip-requirements.html"] }
];

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function metaAttr(h, name, prop) {
  var re = new RegExp(
    "(?:name=\"" + name + "\"\\s+content=\"([^\"]*)\"|content=\"([^\"]*)\"\\s+name=\"" + name + "\")"
  );
  if (prop) {
    re = new RegExp(
      "(?:property=\"" + prop + "\"\\s+content=\"([^\"]*)\"|content=\"([^\"]*)\"\\s+property=\"" + prop + "\")"
    );
  }
  var m = h.match(re);
  return (m && (m[1] || m[2])) || "";
}

function pagePath(f) {
  const rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  if (rel === "/index.html") return "/";
  return rel.endsWith("/index.html") ? rel.replace("/index.html", "/") : rel;
}

function strip(s) {
  return String(s).replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").trim();
}

/* Decode the entities the build emits so lengths match what users/Google see. */
function decode(s) {
  return String(s)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

const files = walk(dist);
const pages = [];
const titles = {};
const descs = {};
const issues = {
  longTitle: [], shortTitle: [], longDesc: [], shortDesc: [],
  noDesc: [], multiH1: [], noH1: [], noCanonical: [], noOg: [],
  noRobots: [], titleOver60: []
};

files.forEach(function (f) {
  const h = fs.readFileSync(f, "utf8");
  const norm = pagePath(f);

  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = decode(metaAttr(h, "description"));
  const canonical = (h.match(/rel="canonical"\s+href="([^"]+)"/) ||
    h.match(/href="([^"]+)"\s+rel="canonical"/) || [])[1] || "";
  const robots = metaAttr(h, "robots");
  const ogTitle = metaAttr(h, "", "og:title");
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(function (m) {
    return strip(m[1]);
  });

  pages.push({ path: norm, title: title, desc: desc, h1: h1s[0] || "", canonical: canonical });

  if (title) {
    titles[title] = (titles[title] || []).concat(norm);
    if (title.length > 60) issues.titleOver60.push({ p: norm, l: title.length, title: title });
  }
  if (desc) {
    descs[desc] = (descs[desc] || []).concat(norm);
    if (desc.length > 160) issues.longDesc.push({ p: norm, l: desc.length });
    if (desc.length < 50) issues.shortDesc.push({ p: norm, l: desc.length });
  } else issues.noDesc.push(norm);

  if (h1s.length === 0) issues.noH1.push(norm);
  if (h1s.length > 1) issues.multiH1.push({ p: norm, n: h1s.length });
  if (!canonical) issues.noCanonical.push(norm);
  if (!ogTitle && norm !== "/404.html" && norm !== "/offline.html") issues.noOg.push(norm);
  if (!robots) issues.noRobots.push(norm);
});

const dupTitles = Object.entries(titles).filter(function (e) { return e[1].length > 1; });
const dupDescs = Object.entries(descs).filter(function (e) { return e[1].length > 1; });

console.log("COMPREHENSIVE SEO & METADATA AUDIT");
console.log("=".repeat(55));
console.log("Pages scanned:", pages.length, "(incl. homepage)");
console.log("");

console.log("--- Metadata summary ---");
console.log("Titles >60 chars:", issues.titleOver60.length);
console.log("Descriptions >160:", issues.longDesc.length);
console.log("Descriptions <50:", issues.shortDesc.length);
console.log("Missing description:", issues.noDesc.length);
console.log("Duplicate titles:", dupTitles.length);
console.log("Duplicate descriptions:", dupDescs.length);
console.log("Missing canonical:", issues.noCanonical.length);
console.log("Missing og:title:", issues.noOg.length);
console.log("Multi H1:", issues.multiH1.length);
console.log("No H1:", issues.noH1.length);
console.log("");

console.log("--- Target keyword coverage ---");
TARGET_KEYWORDS.forEach(function (k) {
  var hits = [];
  k.paths.forEach(function (p) {
    var page = pages.find(function (x) { return x.path === p || x.path === p.replace(/\/$/, "/index.html"); });
    if (!page) page = pages.find(function (x) { return x.path === p; });
    if (page) {
      var inTitle = page.title.toLowerCase().indexOf(k.kw.split(" ")[0]) !== -1 ||
        k.kw.split(" ").every(function (w) { return page.title.toLowerCase().indexOf(w) !== -1; });
      var inH1 = page.h1 && k.kw.split(" ").filter(function (w) {
        return page.h1.toLowerCase().indexOf(w) !== -1;
      }).length >= Math.min(2, k.kw.split(" ").length);
      hits.push(p + (inTitle || inH1 ? " OK" : " WEAK"));
    } else hits.push(p + " MISSING");
  });
  console.log(k.kw + ":", hits.join(" | "));
});
console.log("");

console.log("--- Hub & flagship metadata ---");
["/", "/vets/", "/bring-pet-to-thailand/", "/dog-friendly-pattaya/",
  "/adopt-a-pet-pattaya/", "/guides.html", "/directory.html"].forEach(function (p) {
  var page = pages.find(function (x) { return x.path === p; });
  if (!page) return;
  console.log("\n" + p);
  console.log("  title (" + page.title.length + "):", page.title);
  console.log("  desc  (" + page.desc.length + "):", page.desc.slice(0, 80) + (page.desc.length > 80 ? "…" : ""));
  console.log("  h1:", page.h1.slice(0, 60));
});

if (issues.titleOver60.length) {
  console.log("\n--- Titles over 60 (should be 0 after clamp) ---");
  issues.titleOver60.slice(0, 10).forEach(function (x) {
    console.log(" ", x.l, x.p, "—", x.title);
  });
}
if (dupTitles.length) {
  console.log("\nFAIL duplicate titles:");
  dupTitles.forEach(function (e) { console.log(" ", e[0], "→", e[1].join(", ")); });
}
if (issues.longDesc.length) {
  console.log("\nWARN long descriptions:");
  issues.longDesc.forEach(function (x) { console.log(" ", x.l, x.p); });
}

var ok = !dupTitles.length && !issues.noH1.length && !issues.noDesc.length &&
  !issues.noCanonical.length && !issues.titleOver60.length && !issues.longDesc.length;
console.log("\n" + (ok ? "PASS" : "WARN/FAIL") + " — comprehensive metadata audit");
process.exit(ok ? 0 : issues.titleOver60.length || dupTitles.length || issues.noH1.length ? 1 : 0);
