"use strict";
/* PattayaPets allowlist build script.  src/ -> dist/
   Generates static HTML, minifies HTML/CSS/JS, copies allowlisted assets,
   regenerates the service-worker precache, validates every JSON-LD block,
   and writes sitemap.xml, llms.txt and search-index.json. */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const CleanCSS = require("clean-css");
const { minify: minifyHtml } = require("html-minifier-terser");
const { minify: minifyJs } = require("terser");

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");
const DIST = process.env.PP_DIST ? path.resolve(process.env.PP_DIST) : path.join(ROOT, "dist");

const ASSET_EXT = [".woff2", ".svg", ".png", ".webp", ".jpg", ".jpeg", ".ico", ".gif"];
const STATIC_FILES = [
  "_headers", "_redirects", "robots.txt", "manifest.webmanifest",
  ".well-known/security.txt"
];
const SECTION_LABELS = {
  "": "Site pages", vets: "Vets & animal hospitals", groomers: "Pet groomers",
  boarding: "Boarding & daycare", "pet-shops": "Pet shops", trainers: "Dog trainers",
  "pet-relocation": "Pet relocation", "mobile-vets": "Mobile vets", area: "Areas",
  "bring-pet-to-thailand": "Bringing a pet to Thailand",
  "take-pet-out-of-thailand": "Taking a pet out of Thailand",
  "dog-friendly-pattaya": "Dog-friendly Pattaya", "pet-emergency": "Pet emergency",
  "owning-a-pet-in-pattaya": "Owning a pet in Pattaya",
  "adopt-a-pet-pattaya": "Adoption & rescue", cats: "Cats", dogs: "Dogs",
  "pet-health-pattaya": "Pet health in Pattaya"
};

const HTML_MIN = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  sortAttributes: true,
  sortClassName: true
};

function log(m) { process.stdout.write(m + "\n"); }

function rmrf(p) {
  if (!fs.existsSync(p)) return;
  try { fs.rmSync(p, { recursive: true, force: true }); }
  catch (e) { /* read-only mount: fall back to overwriting files in place */ }
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function write(rel, content) {
  const out = path.join(DIST, rel);
  ensureDir(path.dirname(out));
  fs.writeFileSync(out, content);
}

function pathToFile(p) {
  if (p === "/" || p === "") return "index.html";
  if (p.endsWith("/")) return p.replace(/^\//, "") + "index.html";
  return p.replace(/^\//, "");
}

function kindOf(p) {
  return SECTION_LABELS[p.split("/")[1] || ""] || "Page";
}

function walk(dir, base, list) {
  base = base || dir;
  list = list || [];
  if (!fs.existsSync(dir)) return list;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, base, list);
    else list.push(path.relative(base, full));
  }
  return list;
}

function validateJsonLd(html, pagePath) {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m, count = 0;
  while ((m = re.exec(html))) {
    try { JSON.parse(m[1]); count++; }
    catch (e) { throw new Error("Invalid JSON-LD on " + pagePath + ": " + e.message); }
  }
  return count;
}

function buildSitemapPage(pages) {
  const groups = {};
  pages.filter(function (p) { return !p.noindex; }).forEach(function (p) {
    const key = kindOf(p.path);
    (groups[key] = groups[key] || []).push(p);
  });
  let body =
    '<section class="section"><div class="container"><p class="eyebrow">Sitemap</p>' +
    "<h1>Every page on PattayaPets</h1>" +
    '<p class="lede">A complete index of the directory and guide library.</p>';
  Object.keys(groups).forEach(function (g) {
    body += "<h2>" + g.replace(/&/g, "&amp;") + "</h2><ul>";
    groups[g].forEach(function (p) {
      body += '<li><a href="' + p.path + '">' +
        (p.crumb || p.shortTitle || p.title) + "</a></li>";
    });
    body += "</ul>";
  });
  body += "</div></section>";
  return {
    path: "/sitemap.html",
    title: "Sitemap — PattayaPets",
    description: "A complete index of every page on PattayaPets — the Pattaya pet directory and guides.",
    crumb: "Sitemap",
    breadcrumbs: [],
    updated: new Date().toISOString().slice(0, 10),
    body: body
  };
}

var RECENT_SKIP = {
  "/": 1, "/sitemap.html": 1, "/search.html": 1, "/404.html": 1,
  "/offline.html": 1, "/masthead.html": 1
};

function fmtUpdated(iso) {
  var p = String(iso || "").split("-");
  if (p.length !== 3) return iso;
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];
  return parseInt(p[2], 10) + " " + months[parseInt(p[1], 10) - 1] + " " + p[0];
}

function pageLabel(p) {
  var t = p.crumb || p.shortTitle || p.title || "";
  return t.replace(/\s*\|\s*PattayaPets\s*$/, "").replace(/\s*—\s*PattayaPets\s*$/, "");
}

function buildRecentSection(pages) {
  var recent = pages.filter(function (p) {
    return !p.noindex && !RECENT_SKIP[p.path] && p.updated;
  }).sort(function (a, b) {
    return b.updated.localeCompare(a.updated);
  }).slice(0, 8);
  if (!recent.length) return "";
  var items = recent.map(function (p) {
    return '<a class="recent-item" href="' + p.path + '">' +
      '<span class="recent-date">' + fmtUpdated(p.updated) + "</span>" +
      '<span class="recent-title">' + pageLabel(p).replace(/&/g, "&amp;") + "</span>" +
      '<span class="recent-kind">' + kindOf(p.path).replace(/&/g, "&amp;") + "</span></a>";
  }).join("");
  return '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Fresh content</p>' +
    "<h2>Recently updated</h2>" +
    "<p>Pages refreshed most recently across the directory and guides.</p></div>" +
    '<div class="recent-list">' + items + "</div>" +
    '<div class="btn-row"><a class="btn btn-ghost" href="/sitemap.html">Full sitemap &rarr;</a></div>' +
    "</div></section>";
}

function injectRecentUpdates(pages) {
  var home = pages.find(function (p) { return p.path === "/"; });
  if (!home || !home.body || home.body.indexOf("<!--__RECENT_UPDATES__-->") === -1) return;
  home.body = home.body.replace("<!--__RECENT_UPDATES__-->", buildRecentSection(pages));
}

async function build() {
  const t0 = Date.now();
  log("\nPattayaPets build");
  log("=================");
  rmrf(DIST);
  ensureDir(DIST);

  const criticalRaw = fs.readFileSync(path.join(SRC, "critical.css"), "utf8");
  const criticalMin = new CleanCSS({ level: 1 }).minify(criticalRaw).styles;

  const layout = require(path.join(SRC, "layout.js"));
  const pagesDir = path.join(SRC, "pages");
  let pages = [];
  if (fs.existsSync(pagesDir)) {
    for (const f of fs.readdirSync(pagesDir).sort()) {
      if (!f.endsWith(".js")) continue;
      const mod = require(path.join(pagesDir, f));
      const arr = Array.isArray(mod) ? mod : (mod.pages || []);
      arr.forEach(function (p) { pages.push(p); });
    }
  }
  if (!pages.length) throw new Error("No pages found in src/pages/");

  pages.push(buildSitemapPage(pages));

  const seen = {};
  pages.forEach(function (p) {
    if (seen[p.path]) throw new Error("Duplicate page path: " + p.path);
    seen[p.path] = true;
  });

  injectRecentUpdates(pages);

  let jsonldCount = 0;
  for (const page of pages) {
    const html = layout.renderPage(page, { criticalCss: criticalMin });
    jsonldCount += validateJsonLd(html, page.path);
    const min = await minifyHtml(html, HTML_MIN);
    write(pathToFile(page.path), min);
  }
  log("Pages:      " + pages.length + " rendered, " + jsonldCount + " JSON-LD blocks valid");

  const cssRaw = fs.readFileSync(path.join(SRC, "assets/css/site.css"), "utf8");
  const cssMin = new CleanCSS({ level: 2 }).minify(cssRaw).styles;
  write("assets/css/site.css", cssMin);

  const jsRaw = fs.readFileSync(path.join(SRC, "assets/js/site.js"), "utf8");
  const jsMin = (await minifyJs(jsRaw)).code;
  write("assets/js/site.js", jsMin);

  let assetCount = 0;
  for (const sub of ["fonts", "img"]) {
    const dir = path.join(SRC, "assets", sub);
    for (const rel of walk(dir)) {
      if (ASSET_EXT.indexOf(path.extname(rel).toLowerCase()) === -1) continue;
      const from = path.join(dir, rel);
      const to = path.join(DIST, "assets", sub, rel);
      ensureDir(path.dirname(to));
      fs.copyFileSync(from, to);
      assetCount++;
    }
  }
  log("Assets:     1 css, 1 js, " + assetCount + " static assets");

  for (const rel of STATIC_FILES) {
    const from = path.join(SRC, "static", rel);
    if (fs.existsSync(from)) {
      const to = path.join(DIST, rel);
      ensureDir(path.dirname(to));
      fs.copyFileSync(from, to);
    }
  }

  const indexable = pages.filter(function (p) { return !p.noindex; });
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    indexable.map(function (p) {
      return "  <url><loc>" + layout.canonical(p.path) + "</loc>" +
        (p.updated ? "<lastmod>" + p.updated + "</lastmod>" : "") +
        "<changefreq>monthly</changefreq></url>";
    }).join("\n") +
    "\n</urlset>\n";
  write("sitemap.xml", sitemap);

  const llms =
    "# PattayaPets\n\n" +
    "> The honest pet resource for Pattaya, Thailand — an independent editorial " +
    "directory of pet businesses and a guide hub for pet owners. No paid placements, " +
    "no sponsored content, no affiliate links. Editorial and informational only; " +
    "not veterinary advice.\n\n## Key pages\n\n" +
    indexable.map(function (p) {
      return "- [" + (p.crumb || p.shortTitle || p.title) + "](" +
        layout.canonical(p.path) + "): " + (p.description || "");
    }).join("\n") + "\n";
  write("llms.txt", llms);

  const { BUSINESSES, AREAS } = require(path.join(SRC, "data/businesses.js"));
  const bizByPath = {};
  BUSINESSES.forEach(function (b) {
    bizByPath["/" + b.category + "/" + b.slug + ".html"] = b;
  });

  const searchIndex = indexable.map(function (p) {
    var d = p.description || "";
    var b = bizByPath[p.path];
    if (b) {
      if (b.address) d += " " + b.address;
      if (b.phone) d += " " + b.phone;
      if (b.type) d += " " + b.type;
      if (b.summary) d += " " + b.summary;
      if (b.services && b.services.length) d += " " + b.services.join(" ");
      b.areas.forEach(function (ak) {
        if (AREAS[ak]) d += " " + AREAS[ak].name;
      });
    }
    return {
      t: p.crumb || p.shortTitle || p.title,
      u: p.path,
      k: kindOf(p.path),
      d: d.replace(/\s+/g, " ").trim()
    };
  });
  write("search-index.json", JSON.stringify(searchIndex));
  log("Search:     " + searchIndex.length + " pages indexed");

  const version = crypto.createHash("sha1")
    .update(cssMin + jsMin + criticalMin).digest("hex").slice(0, 12);
  const precache = [
    "/", "/offline.html", "/search-index.json", "/assets/css/site.css", "/assets/js/site.js",
    "/assets/img/favicon.svg", "/manifest.webmanifest",
    "/assets/fonts/hanken-400.woff2", "/assets/fonts/hanken-500.woff2",
    "/assets/fonts/hanken-700.woff2", "/assets/fonts/bricolage-600.woff2",
    "/assets/fonts/bricolage-700.woff2"
  ];
  let swRaw = fs.readFileSync(path.join(SRC, "sw.js"), "utf8");
  swRaw = swRaw.replace("__VERSION__", version)
               .replace("__PRECACHE__", JSON.stringify(precache));
  const swMin = (await minifyJs(swRaw)).code;
  write("sw.js", swMin);

  let total = 0;
  walk(DIST).forEach(function (f) { total += fs.statSync(path.join(DIST, f)).size; });
  log("Sitemap:    " + indexable.length + " indexable URLs");
  log("Service worker: " + precache.length + " precached, version " + version);
  log("Output:     " + DIST + "  (" + (total / 1024).toFixed(0) + " KB)");
  log("Done in " + (Date.now() - t0) + " ms\n");
}

build().catch(function (e) {
  log("\nBUILD FAILED: " + e.message + "\n");
  process.exit(1);
});
