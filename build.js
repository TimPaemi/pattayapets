"use strict";
/* PattayaPets allowlist build script.  src/ -> dist/
   Generates static HTML, minifies HTML/CSS/JS, copies allowlisted assets,
   regenerates the service-worker precache, validates every JSON-LD block,
   and writes sitemap.xml, llms.txt and search-index.json. */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const CleanCSS = require("clean-css");
const { minify: minifyHtml } = require("html-minifier-terser");
const { minify: minifyJs } = require("terser");

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");
const { SITE } = require(path.join(SRC, "site-config.js"));
const {
  manifestEntryForPath,
  createPageManifest,
  indexPageManifest,
  routeOutputFile
} = require(path.join(SRC, "page-manifest.js"));
const TARGET_DIST = process.env.PP_DIST ? path.resolve(process.env.PP_DIST) : path.join(ROOT, "dist");
const STAGE_DIST = path.join(
  path.dirname(TARGET_DIST),
  "." + path.basename(TARGET_DIST) + ".stage-" + process.pid + "-" + crypto.randomBytes(4).toString("hex")
);
const BACKUP_DIST = path.join(
  path.dirname(TARGET_DIST),
  "." + path.basename(TARGET_DIST) + ".backup-" + process.pid + "-" + crypto.randomBytes(4).toString("hex")
);
let OUT = STAGE_DIST;

const PROJECT = "pattayapets";
const SITE_ORIGIN = "https://pattayapets.com";

const ASSET_EXT = [".woff2", ".svg", ".png", ".webp", ".jpg", ".jpeg", ".ico", ".gif"];
const STATIC_FILES = [
  "_headers", "_redirects", "robots.txt", "manifest.webmanifest",
  ".well-known/security.txt"
];
const CRITICAL_FONT_URLS = [
  "/assets/fonts/bricolage-700.woff2",
  "/assets/fonts/hanken-400.woff2"
];
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

function isWithin(base, candidate) {
  const rel = path.relative(path.resolve(base), path.resolve(candidate));
  return rel !== "" && rel !== ".." && !rel.startsWith(".." + path.sep) && !path.isAbsolute(rel);
}

function validateTarget(p) {
  const target = path.resolve(p);
  const parent = path.dirname(target);
  const name = path.basename(target);
  const directChild = parent === ROOT && /^(?:dist|[.]?audit-dist|[.]?pattayapets-(?:dist|build))(?:[-_.].*)?$/i.test(name);
  const safeSibling = parent === path.dirname(ROOT) && /^pattayapets-(?:dist|build)(?:[-_.].*)?$/i.test(name);
  const protectedPaths = [
    path.parse(target).root,
    ROOT,
    SRC,
    path.join(ROOT, ".git"),
    path.join(ROOT, "node_modules"),
    os.homedir()
  ].map(function (x) { return path.resolve(x); });
  if (!directChild && !safeSibling) {
    throw new Error("Unsafe PP_DIST target. Use dist/audit-dist inside the repository or a pattayapets-dist sibling: " + target);
  }
  if (protectedPaths.includes(target) || isWithin(target, ROOT) || isWithin(target, os.homedir())) {
    throw new Error("Refusing broad or protected output target: " + target);
  }
  if (fs.existsSync(target) && !fs.statSync(target).isDirectory()) {
    throw new Error("Output target exists and is not a directory: " + target);
  }
}

function safeRemove(p, allowed) {
  const resolved = path.resolve(p);
  if (!allowed.map(function (item) { return path.resolve(item); }).includes(resolved)) {
    throw new Error("Refusing to remove unapproved path: " + resolved);
  }
  if (fs.existsSync(resolved)) fs.rmSync(resolved, { recursive: true, force: false });
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function outputPath(rel) {
  if (typeof rel !== "string" || !rel || rel.includes("\0") || rel.includes("\\") ||
      path.isAbsolute(rel) || /^[A-Za-z]:/.test(rel) || rel.startsWith("//")) {
    throw new Error("Unsafe output path: " + JSON.stringify(rel));
  }
  const parts = rel.split("/");
  if (parts.some(function (part) { return !part || part === "." || part === ".."; })) {
    throw new Error("Unsafe output path segment: " + rel);
  }
  const out = path.resolve(OUT, ...parts);
  if (!isWithin(OUT, out)) throw new Error("Output path escapes staging root: " + rel);
  return out;
}

function write(rel, content) {
  const out = outputPath(rel);
  ensureDir(path.dirname(out));
  fs.writeFileSync(out, content);
}

function validateRoutePath(p) {
  if (p === "/") return;
  if (typeof p !== "string" || !p.startsWith("/") || p.includes("\\") ||
      p.includes("..") || p.includes("//") || /[%?#:\0]/.test(p) ||
      !/^\/[a-z0-9][a-z0-9/-]*(?:\.html|\/)$/.test(p)) {
    throw new Error("Unsafe or unsupported page path: " + JSON.stringify(p));
  }
}

function pathToFile(p) {
  validateRoutePath(p);
  return routeOutputFile(p);
}

function routeAliasKey(p) {
  if (p === "/") return "/";
  return p.toLowerCase().replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "") || "/";
}

function walk(dir, base, list) {
  base = base || dir;
  list = list || [];
  if (!fs.existsSync(dir)) return list;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.lstatSync(full);
    if (st.isSymbolicLink()) throw new Error("Symbolic links are not allowed in build inputs/output: " + full);
    if (st.isDirectory()) walk(full, base, list);
    else list.push(path.relative(base, full));
  }
  return list;
}

function sha256(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function replaceAssetRefs(text, assetMap) {
  let out = String(text);
  Object.keys(assetMap).sort(function (a, b) { return b.length - a.length; }).forEach(function (from) {
    out = out.split(from).join(assetMap[from]);
  });
  return out;
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

function canonicalOf(html) {
  const tag = html.match(/<link\b[^>]*\brel=["']?canonical["']?[^>]*>/i) ||
    html.match(/<link\b[^>]*\bhref=["'][^"']+["'][^>]*\brel=["']?canonical["']?[^>]*>/i);
  if (!tag) return null;
  const href = tag[0].match(/\bhref=["']([^"']+)["']/i);
  return href ? href[1] : null;
}

function sourceFingerprint() {
  const files = [".node-version", "build.js", "package.json", "package-lock.json"];
  walk(SRC).forEach(function (rel) { files.push("src/" + rel.replace(/\\/g, "/")); });
  const hash = crypto.createHash("sha256");
  files.sort().forEach(function (rel) {
    const full = path.join(ROOT, ...rel.split("/"));
    if (!fs.existsSync(full)) return;
    hash.update(rel + "\0");
    hash.update(fs.readFileSync(full));
    hash.update("\0");
  });
  return hash.digest("hex");
}

function buildFileLedger() {
  return walk(OUT).map(function (rel) { return rel.replace(/\\/g, "/"); })
    .filter(function (rel) { return rel !== "build-manifest.json"; })
    .sort()
    .map(function (rel) {
      const buf = fs.readFileSync(path.join(OUT, ...rel.split("/")));
      return { path: rel, bytes: buf.length, sha256: sha256(buf) };
    });
}

function makeBuildManifest(pageManifest, layout, contentVersion) {
  return {
    schemaVersion: 1,
    project: PROJECT,
    site: SITE_ORIGIN,
    runtime: { node: process.version },
    source: {
      sha256: sourceFingerprint(),
      packageLockSha256: sha256(fs.readFileSync(path.join(ROOT, "package-lock.json")))
    },
    serviceWorkerVersion: contentVersion,
    routes: pageManifest.map(function (entry) {
      return {
        path: entry.path,
        output: pathToFile(entry.path),
        canonical: layout.canonical(entry.path),
        kind: entry.kind,
        category: entry.category,
        indexable: entry.indexable,
        locale: entry.locale,
        auditScopes: entry.auditScopes
      };
    }).sort(function (a, b) { return a.path.localeCompare(b.path); }),
    files: buildFileLedger()
  };
}

function validateBuildManifest(manifest) {
  if (manifest.project !== PROJECT || manifest.site !== SITE_ORIGIN || manifest.schemaVersion !== 1) {
    throw new Error("Build manifest identity is invalid");
  }
  const actual = buildFileLedger();
  if (actual.some(function (file) { return file.path === "pp-indexnow-key.txt"; })) {
    throw new Error("Raw IndexNow helper filename must not be published");
  }
  if (JSON.stringify(actual) !== JSON.stringify(manifest.files)) {
    throw new Error("Build manifest file ledger does not match staged output");
  }
  const routeOutputs = new Set();
  const routePaths = new Set();
  manifest.routes.forEach(function (route) {
    if (routePaths.has(route.path)) throw new Error("Duplicate route in manifest: " + route.path);
    if (routeOutputs.has(route.output)) throw new Error("Duplicate route output in manifest: " + route.output);
    routePaths.add(route.path);
    routeOutputs.add(route.output);
    const expectedMeta = manifestEntryForPath(route.path);
    ["kind", "category", "indexable", "locale"].forEach(function (field) {
      if (route[field] !== expectedMeta[field]) {
        throw new Error("Build route " + field + " disagrees with page manifest: " + route.path);
      }
    });
    if (JSON.stringify(route.auditScopes) !== JSON.stringify(expectedMeta.auditScopes)) {
      throw new Error("Build route auditScopes disagree with page manifest: " + route.path);
    }
    const full = path.join(OUT, ...route.output.split("/"));
    if (!fs.existsSync(full)) throw new Error("Manifest route output is missing: " + route.output);
    const html = fs.readFileSync(full, "utf8");
    if (canonicalOf(html) !== route.canonical) {
      throw new Error("Canonical mismatch for " + route.path + ": " + canonicalOf(html));
    }
    if (/\son[a-z]+\s*=/i.test(html)) throw new Error("Inline event handler remains on " + route.path);
    if (/\/assets\/fonts\/[a-z0-9-]+\.woff2/i.test(html)) {
      throw new Error("Unversioned font URL remains on " + route.path);
    }
  });
  const sitemap = fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(function (m) { return m[1]; }).sort();
  const expected = manifest.routes.filter(function (r) { return r.indexable; })
    .map(function (r) { return r.canonical; }).sort();
  if (JSON.stringify(locs) !== JSON.stringify(expected)) throw new Error("Sitemap does not exactly match indexable manifest routes");
  locs.forEach(function (u) {
    const parsed = new URL(u);
    if (parsed.origin !== SITE_ORIGIN) throw new Error("Foreign sitemap URL: " + u);
  });
  const headers = fs.readFileSync(path.join(OUT, "_headers"), "utf8");
  if (/\/assets\/fonts\/[a-z0-9-]+\.woff2/i.test(headers)) {
    throw new Error("Unversioned font URL remains in _headers");
  }
  if (!fs.readFileSync(path.join(OUT, "sw.js"), "utf8").includes(manifest.serviceWorkerVersion)) {
    throw new Error("Service-worker version does not match build manifest");
  }
}

function publishStage() {
  let movedOld = false;
  if (fs.existsSync(BACKUP_DIST)) safeRemove(BACKUP_DIST, [BACKUP_DIST]);
  try {
    if (fs.existsSync(TARGET_DIST)) {
      fs.renameSync(TARGET_DIST, BACKUP_DIST);
      movedOld = true;
    }
    fs.renameSync(STAGE_DIST, TARGET_DIST);
  } catch (e) {
    if (!fs.existsSync(TARGET_DIST) && movedOld && fs.existsSync(BACKUP_DIST)) {
      fs.renameSync(BACKUP_DIST, TARGET_DIST);
    }
    throw new Error("Atomic output promotion failed; previous output was retained: " + e.message);
  }
  if (movedOld) safeRemove(BACKUP_DIST, [BACKUP_DIST]);
}

function buildSitemapPage(pages) {
  const groups = {};
  const reviewedDates = pages.map(function (p) { return p.updated; })
    .filter(function (value) { return /^\d{4}-\d{2}-\d{2}$/.test(String(value || "")); })
    .sort();
  if (!reviewedDates.length) throw new Error("Sitemap requires at least one source-reviewed page date");
  pages.filter(function (p) { return manifestEntryForPath(p.path).indexable; }).forEach(function (p) {
    const key = manifestEntryForPath(p.path).kind;
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
  const { inPageLinkSection } = require("./src/linking.js");
  body += inPageLinkSection("general");
  return {
    path: "/sitemap.html",
    title: "Complete Sitemap | Pattaya Pet Directory & Guides",
    description: "Browse every page on PattayaPets — vets, groomers, import guides, emergency help and area directories for Pattaya pet owners.",
    crumb: "Sitemap",
    breadcrumbs: [],
    updated: reviewedDates[reviewedDates.length - 1],
    body: body
  };
}

var RECENT_SKIP = {
  "/": 1, "/sitemap.html": 1, "/search.html": 1, "/404.html": 1,
  "/offline.html": 1, "/masthead.html": 1
};

var RECENT_STRUCTURAL = {
  "/about.html": 1, "/accessibility.html": 1, "/privacy.html": 1,
  "/contact.html": 1, "/corrections.html": 1, "/standards.html": 1
};

function recentTier(p) {
  var path = p.path;
  if (/^\/(bring-pet-to-thailand|take-pet-out-of-thailand|pet-emergency|dog-friendly-pattaya|owning-a-pet-in-pattaya|pet-health-pattaya)\//.test(path)) return 0;
  if (path === "/bring-pet-to-thailand/" || path === "/take-pet-out-of-thailand/" ||
      path === "/pet-emergency/" || path === "/dog-friendly-pattaya/" ||
      path === "/owning-a-pet-in-pattaya/" || path === "/pet-health-pattaya/" ||
      path === "/adopt-a-pet-pattaya/" || path === "/guides.html" ||
      path === "/start-here.html") return 1;
  if (/^\/(vets|groomers|boarding|pet-shops|trainers|mobile-vets|pet-relocation)\//.test(path)) return 2;
  if (/^\/area\//.test(path)) return 3;
  return 4;
}

function isRecentCandidate(p) {
  if (p.noindex || !p.updated || RECENT_SKIP[p.path] || RECENT_STRUCTURAL[p.path]) return false;
  /* A held/rejected business route is retained for transparency, not promoted
     as fresh directory content. The page object carries the canonical live
     publication decision from src/data/businesses.js. */
  if (p.businessPublishState && p.businessPublishState !== "published") return false;
  if (/^\/adopt-a-pet-pattaya\/[a-z0-9-]+\.html$/.test(p.path) &&
      p.path !== "/adopt-a-pet-pattaya/fostering.html" &&
      p.path !== "/adopt-a-pet-pattaya/how-to-help.html") return false;
  return true;
}

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

function truncateText(s, n) {
  s = String(s || "").replace(/\s+/g, " ").trim();
  if (s.length <= n) return s;
  var cut = s.slice(0, n - 1);
  var sp = cut.lastIndexOf(" ");
  if (sp > n * 0.6) cut = cut.slice(0, sp);
  return cut + "\u2026";
}

function buildRecentSection(pages) {
  var recent = pages.filter(isRecentCandidate).sort(function (a, b) {
    var d = b.updated.localeCompare(a.updated);
    if (d !== 0) return d;
    var t = recentTier(a) - recentTier(b);
    if (t !== 0) return t;
    return a.path.localeCompare(b.path);
  }).slice(0, 8);
  if (!recent.length) return "";
  var items = recent.map(function (p) {
    var desc = truncateText(p.description, 100).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    return '<a class="recent-item" href="' + p.path + '">' +
      '<span class="recent-date">' + fmtUpdated(p.updated) + "</span>" +
      '<span class="recent-title">' + pageLabel(p).replace(/&/g, "&amp;") + "</span>" +
      (desc ? '<span class="recent-desc">' + desc + "</span>" : "") +
      '<span class="recent-kind">' + manifestEntryForPath(p.path).kind.replace(/&/g, "&amp;") + "</span></a>";
  }).join("");
  return '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Fresh content</p>' +
    "<h2>Recently updated</h2>" +
    "<p>Pages refreshed most recently across the directory and guides.</p></div>" +
    '<div class="recent-list">' + items + "</div>" +
    '<div class="btn-row"><a class="btn btn-ghost" href="/guides.html">All guides &rarr;</a> ' +
    '<a class="btn btn-ghost" href="/sitemap.html">Full sitemap &rarr;</a></div>' +
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
  validateTarget(TARGET_DIST);
  const pinnedNode = fs.readFileSync(path.join(ROOT, ".node-version"), "utf8").trim();
  if (!/^\d+\.\d+\.\d+$/.test(pinnedNode) || process.versions.node !== pinnedNode) {
    throw new Error("Build requires Node " + pinnedNode + " exactly; current runtime is " + process.version);
  }
  safeRemove(STAGE_DIST, [STAGE_DIST]);
  ensureDir(STAGE_DIST);
  /* This source fingerprint changes whenever any input capable of changing the
     generated site changes. It can therefore be embedded in both the hashed
     site script and worker URL without a circular output-hash dependency. */
  const version = sourceFingerprint().slice(0, 12);

  /* Fonts and public image references carry content-derived names. Stable image
     aliases remain in the artifact for old links and press downloads, while all
     generated markup points at immutable-by-name files so a previously cached
     social/PWA image can never mask a newer release. */
  const fontMap = {};
  const imageMap = {};
  let assetCount = 0;
  const fontsDir = path.join(SRC, "assets", "fonts");
  for (const rel of walk(fontsDir).sort()) {
    if (path.extname(rel).toLowerCase() !== ".woff2") continue;
    const source = fs.readFileSync(path.join(fontsDir, rel));
    const parsed = path.parse(rel);
    const hashedRel = path.join(parsed.dir, parsed.name + "." + sha256(source).slice(0, 12) + parsed.ext)
      .replace(/\\/g, "/");
    const sourceUrl = "/assets/fonts/" + rel.replace(/\\/g, "/");
    const hashedUrl = "/assets/fonts/" + hashedRel;
    fontMap[sourceUrl] = hashedUrl;
    write(hashedUrl.slice(1), source);
    assetCount++;
  }
  if (!Object.keys(fontMap).length) throw new Error("No WOFF2 fonts found in src/assets/fonts");

  const imagesDir = path.join(SRC, "assets", "img");
  for (const rel of walk(imagesDir).sort()) {
    if (ASSET_EXT.indexOf(path.extname(rel).toLowerCase()) === -1) continue;
    const source = fs.readFileSync(path.join(imagesDir, rel));
    const parsed = path.parse(rel);
    const hashedRel = path.join(parsed.dir, parsed.name + "." + sha256(source).slice(0, 12) + parsed.ext)
      .replace(/\\/g, "/");
    imageMap["/assets/img/" + rel.replace(/\\/g, "/")] = "/assets/immutable/img/" + hashedRel;
  }
  if (!Object.keys(imageMap).length) throw new Error("No public images found in src/assets/img");
  const assetMap = Object.assign({}, fontMap, imageMap);

  const criticalRaw = replaceAssetRefs(fs.readFileSync(path.join(SRC, "critical.css"), "utf8"), assetMap);
  const criticalResult = new CleanCSS({ level: 1 }).minify(criticalRaw);
  if (criticalResult.errors.length) throw new Error("Critical CSS minification failed: " + criticalResult.errors.join("; "));
  const criticalMin = criticalResult.styles;

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
  const pageManifest = createPageManifest(pages);
  const pageManifestByPath = indexPageManifest(pageManifest);
  pages.forEach(function (page) {
    const entry = pageManifestByPath.get(page.path);
    /* renderPage still receives the historical noindex flag, but its value now
       comes from the canonical manifest rather than ad-hoc page logic. */
    page.noindex = !entry.indexable;
    page.locale = entry.locale;
  });

  const seen = {};
  const aliases = {};
  pages.forEach(function (p) {
    validateRoutePath(p.path);
    if (seen[p.path]) throw new Error("Duplicate page path: " + p.path);
    seen[p.path] = true;
    const alias = routeAliasKey(p.path);
    if (aliases[alias]) throw new Error("Ambiguous route aliases: " + aliases[alias] + " and " + p.path);
    aliases[alias] = p.path;
  });

  injectRecentUpdates(pages);

  /* layout.js historically emitted the same footer stylesheet on every page.
     Extract it once into the external, hashed stylesheet and strip it at render. */
  const probe = layout.renderPage(pages[0], {
    criticalCss: criticalMin,
    cssHref: "/assets/css/probe.css",
    jsSrc: "/assets/js/probe.js"
  });
  const footerCssMatch = probe.match(/<style id=["']pf-css["']>([\s\S]*?)<\/style>/i);

  /* Long-lived assets are content-hashed so "immutable, 1 year" is true. */
  const siteCssSource = fs.readFileSync(path.join(SRC, "assets/css/site.css"), "utf8");
  const extractedFooterCss = footerCssMatch && !/\.pf\s*\{/.test(siteCssSource)
    ? "\n" + footerCssMatch[1] : "";
  const cssRaw = replaceAssetRefs(criticalMin + "\n" + siteCssSource + extractedFooterCss, assetMap);
  const cssResult = new CleanCSS({ level: 2 }).minify(cssRaw);
  if (cssResult.errors.length) throw new Error("Site CSS minification failed: " + cssResult.errors.join("; "));
  const cssMin = cssResult.styles;
  const cssHash = sha256(cssMin).slice(0, 12);
  const cssHref = "/assets/css/site." + cssHash + ".css";
  write("assets/css/site." + cssHash + ".css", cssMin);

  let jsRaw = fs.readFileSync(path.join(SRC, "assets/js/site.js"), "utf8");
  const versionTokens = jsRaw.match(/__SW_VERSION__/g) || [];
  if (versionTokens.length !== 1) throw new Error("site.js must contain exactly one __SW_VERSION__ token");
  jsRaw = jsRaw.replace("__SW_VERSION__", version);
  const jsResult = await minifyJs(jsRaw);
  if (jsResult.error || !jsResult.code) throw new Error("Site JavaScript minification failed");
  const jsMin = jsResult.code;
  const jsHash = sha256(jsMin).slice(0, 12);
  const jsSrc = "/assets/js/site." + jsHash + ".js";
  write("assets/js/site." + jsHash + ".js", jsMin);

  let jsonldCount = 0;
  for (const page of pages) {
    let html = layout.renderPage(page, { criticalCss: criticalMin, cssHref: cssHref, jsSrc: jsSrc });
    html = replaceAssetRefs(html, assetMap)
      .replace(/<style id=["']pf-css["']>[\s\S]*?<\/style>/i, "")
      .replace(/\s+onload=["']this\.onload=null;this\.rel=(?:\\?["'])stylesheet(?:\\?["'])["']/i, "");
    jsonldCount += validateJsonLd(html, page.path);
    const min = await minifyHtml(html, HTML_MIN);
    write(pathToFile(page.path), min);
  }
  log("Pages:      " + pages.length + " rendered, " + jsonldCount + " JSON-LD blocks valid");

  for (const rel of walk(imagesDir).sort()) {
    if (ASSET_EXT.indexOf(path.extname(rel).toLowerCase()) === -1) continue;
    const sourceUrl = "/assets/img/" + rel.replace(/\\/g, "/");
    const source = fs.readFileSync(path.join(imagesDir, rel));
    write(sourceUrl.slice(1), source);
    write(imageMap[sourceUrl].slice(1), source);
    assetCount += 2;
  }
  log("Assets:     1 css, 1 js, " + assetCount + " static assets");

  for (const rel of STATIC_FILES) {
    const from = path.join(SRC, "static", rel);
    if (fs.existsSync(from)) {
      let content = fs.readFileSync(from);
      if (rel === "_headers" || rel === "manifest.webmanifest") {
        content = replaceAssetRefs(content.toString("utf8"), assetMap);
      }
      if (rel === ".well-known/security.txt") {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(SITE.email)) {
          throw new Error("SITE.email is not a valid security.txt contact mailbox");
        }
        content = content.toString("utf8");
        const tokenMatches = content.match(/\{\{CONTACT_EMAIL\}\}/g) || [];
        if (tokenMatches.length !== 1) {
          throw new Error("security.txt must contain exactly one {{CONTACT_EMAIL}} token");
        }
        content = content.replace("{{CONTACT_EMAIL}}", SITE.email);
        if (!content.includes("Contact: mailto:" + SITE.email) || content.includes("{{CONTACT_EMAIL}}")) {
          throw new Error("security.txt contact did not resolve from SITE.email");
        }
      }
      write(rel, content);
    }
  }
  var indexNowKeyPath = path.join(SRC, "static", "pp-indexnow-key.txt");
  if (fs.existsSync(indexNowKeyPath)) {
    var indexNowKey = fs.readFileSync(indexNowKeyPath, "utf8").trim();
    if (!/^[A-Za-z0-9_-]{8,128}$/.test(indexNowKey)) throw new Error("Unsafe IndexNow key filename");
    write(indexNowKey + ".txt", indexNowKey);
  }

  const indexable = pages.filter(function (p) {
    return pageManifestByPath.get(p.path).indexable;
  });
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    indexable.map(function (p) {
      return "  <url><loc>" + layout.canonical(p.path) + "</loc>" +
        (p.updated ? "<lastmod>" + p.updated + "</lastmod>" : "") +
        "</url>";
    }).join("\n") +
    "\n</urlset>\n";
  write("sitemap.xml", sitemap);

  if (typeof SITE.teamSummary !== "string" || !SITE.teamSummary.trim() ||
      typeof SITE.teamWork !== "string" || !SITE.teamWork.trim()) {
    throw new Error("SITE.teamSummary and SITE.teamWork are required for AI-facing publisher output");
  }
  const llms =
    "# " + SITE.name + "\n\n" +
    "> " + SITE.tagline + ". An independent directory and guide publication for pet owners. " +
    "Editorial and informational only; not veterinary advice.\n\n## Publisher\n\n" +
    "Published by " + SITE.publisherLegalName + " under the " + SITE.publisherName + " identity. " +
    SITE.teamSummary + " " + SITE.teamWork + " Personal authorship and creator claims require " +
    "an approved route-specific responsibility record; none is currently approved.\n\n" +
    "## Editorial and evidence state\n\n" +
    "No completed anonymous-visit or verdict records are currently published. A business entry " +
    "is not an endorsement of veterinary quality; business facts are published or withheld from " +
    "dated evidence dossiers according to their explicit publication state. Regulated import and " +
    "export claims are released only through the dated primary-source claim registry and its " +
    "blocking audit. Corrections are logged at " + SITE.url + "/corrections.html.\n\n" +
    "## Key pages\n\n" +
    indexable.map(function (p) {
      return "- [" + (p.crumb || p.shortTitle || p.title) + "](" +
        layout.canonical(p.path) + "): " + (p.description || "");
    }).join("\n") + "\n";
  write("llms.txt", llms);

  const { BUSINESSES, AREAS, CATEGORIES, isPublishedBusiness } = require(path.join(SRC, "data/businesses.js"));
  const bizByPath = {};
  const heldBusinessPaths = new Set();
  BUSINESSES.filter(isPublishedBusiness).forEach(function (b) {
    bizByPath["/" + b.category + "/" + b.slug + ".html"] = b;
  });
  BUSINESSES.filter(function (b) { return !isPublishedBusiness(b); }).forEach(function (b) {
    heldBusinessPaths.add("/" + b.category + "/" + b.slug + ".html");
  });

  const { htmlToText } = require(path.join(SRC, "html-text.js"));
  function compactSearchTerms(value) {
    const words = htmlToText(value).toLowerCase()
      .replace(/[^\p{L}\p{N}+.-]+/gu, " ").split(/\s+/).filter(Boolean);
    return [...new Set(words)].slice(0, 700).join(" ");
  }

  /* A retained verification-hold URL may remain indexable only by an explicit
     search-policy decision. It must not be promoted by the site's own search. */
  const searchIndex = indexable.filter(function (p) {
    return !heldBusinessPaths.has(p.path);
  }).map(function (p) {
    var d = htmlToText(p.description || "");
    var visibleAndApproved = htmlToText(p.body || "");
    var b = bizByPath[p.path];
    if (b) {
      visibleAndApproved += " " + [
        b.name,
        b.type,
        CATEGORIES[b.category] && CATEGORIES[b.category].name,
        (b.services || []).join(" "),
        b.addressLocality,
        (b.serviceAreas || []).join(" "),
        (b.areas || []).map(function (area) { return AREAS[area] && AREAS[area].name; }).filter(Boolean).join(" ")
      ].filter(Boolean).join(" ");
    }
    return {
      t: p.crumb || p.shortTitle || p.title,
      u: p.path,
      k: pageManifestByPath.get(p.path).kind,
      d: d,
      x: compactSearchTerms(visibleAndApproved)
    };
  });
  write("search-index.json", JSON.stringify(searchIndex));
  log("Search:     " + searchIndex.length + " pages indexed");

  /* Every staged byte except the generated worker and manifest contributes to
     the cache generation. A correction to any HTML page therefore invalidates
     the old runtime cache even though regulated pages are never precached. */
  const criticalFonts = CRITICAL_FONT_URLS.map(function (sourceUrl) {
    if (!fontMap[sourceUrl]) throw new Error("Missing critical font asset: " + sourceUrl);
    return fontMap[sourceUrl];
  });
  const precache = [
    "/", "/offline", cssHref, jsSrc,
    imageMap["/assets/img/favicon.svg"], imageMap["/assets/img/og-default.png"],
    "/manifest.webmanifest", "/build-manifest.json"
  ].concat(criticalFonts);
  const precacheFiles = {
    "/": "index.html",
    "/offline": "offline.html",
    "/build-manifest.json": null
  };
  precache.forEach(function (url) {
    const rel = Object.prototype.hasOwnProperty.call(precacheFiles, url) ? precacheFiles[url] : url.slice(1);
    if (rel && !fs.existsSync(path.join(OUT, ...rel.split("/")))) {
      throw new Error("Service-worker precache entry is missing from staged output: " + url);
    }
  });
  let swRaw = fs.readFileSync(path.join(SRC, "sw.js"), "utf8");
  swRaw = swRaw.replace("__VERSION__", version)
               .replace("__PRECACHE__", JSON.stringify(precache));
  const swResult = await minifyJs(swRaw);
  if (swResult.error || !swResult.code) throw new Error("Service-worker minification failed");
  write("sw.js", swResult.code);

  const manifest = makeBuildManifest(pageManifest, layout, version);
  write("build-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
  validateBuildManifest(manifest);

  let total = 0;
  walk(OUT).forEach(function (f) { total += fs.statSync(path.join(OUT, f)).size; });
  if (process.env.NODE_ENV === "test" && process.env.PP_BUILD_FAILPOINT === "before-publish") {
    throw new Error("Intentional build-containment test failure before publish");
  }
  publishStage();
  log("Sitemap:    " + indexable.length + " indexable URLs");
  log("Service worker: " + precache.length + " precached, version " + version);
  log("Manifest:   " + manifest.routes.length + " routes, " + manifest.files.length + " files verified");
  log("Output:     " + TARGET_DIST + "  (" + (total / 1024).toFixed(0) + " KB)");
  log("Done in " + (Date.now() - t0) + " ms\n");
}

build().catch(function (e) {
  try { safeRemove(STAGE_DIST, [STAGE_DIST]); }
  catch (cleanupError) { log("Staging cleanup failed: " + cleanupError.message); }
  log("\nBUILD FAILED: " + e.message + "\n");
  process.exit(1);
});
