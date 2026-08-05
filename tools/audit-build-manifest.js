#!/usr/bin/env node
"use strict";
/* Verify that dist/ is exactly the staged build described by its manifest. */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadPageManifest, indexPageManifest } = require("../src/page-manifest.js");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const MANIFEST = path.join(DIST, "build-manifest.json");

function walk(dir, base, out) {
  base = base || dir;
  out = out || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) throw new Error("Symlink is not allowed: " + full);
    if (stat.isDirectory()) walk(full, base, out);
    else out.push(path.relative(base, full).replace(/\\/g, "/"));
  }
  return out;
}

function hash(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function safeRelative(rel) {
  if (typeof rel !== "string" || !rel || rel.includes("\0") || rel.includes("\\") ||
      rel.startsWith("/") || path.isAbsolute(rel)) return false;
  return rel.split("/").every(function (part) { return part && part !== "." && part !== ".."; });
}

function sourceHash() {
  const files = [".node-version", "build.js", "package.json", "package-lock.json"];
  walk(path.join(ROOT, "src")).forEach(function (rel) { files.push("src/" + rel); });
  const digest = crypto.createHash("sha256");
  files.sort().forEach(function (rel) {
    const full = path.join(ROOT, ...rel.split("/"));
    digest.update(rel + "\0");
    digest.update(fs.readFileSync(full));
    digest.update("\0");
  });
  return digest.digest("hex");
}

function canonicalOf(html) {
  const tag = html.match(/<link\b[^>]*\brel=["']?canonical["']?[^>]*>/i) ||
    html.match(/<link\b[^>]*\bhref=["'][^"']+["'][^>]*\brel=["']?canonical["']?[^>]*>/i);
  const href = tag && tag[0].match(/\bhref=["']([^"']+)["']/i);
  return href ? href[1] : null;
}

function tagAttributes(tag) {
  const out = {};
  const regex = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let match;
  while ((match = regex.exec(tag))) out[match[1].toLowerCase()] = match[2] || match[3] || match[4] || "";
  return out;
}

function publicImageReferences(text) {
  return [...String(text).matchAll(/(?:https:\/\/pattayapets\.com)?(\/assets\/(?:immutable\/img|img)\/[A-Za-z0-9_./-]+\.(?:png|webp|jpe?g|svg|ico|gif))/gi)]
    .map(function (match) { return match[1]; });
}

async function auditServiceWorkerNavigation(worker) {
  var fetchHandler = null;
  var fetchImplementation = null;
  var writes = [];
  var matches = [];
  var cache = {
    addAll: function () { return Promise.resolve(); },
    put: function (request) {
      writes.push(request.url || request);
      return Promise.resolve();
    }
  };
  var context = {
    URL: URL,
    location: { origin: "https://pattayapets.com" },
    self: {
      addEventListener: function (type, handler) {
        if (type === "fetch") fetchHandler = handler;
      },
      skipWaiting: function () { return Promise.resolve(); },
      clients: { claim: function () { return Promise.resolve(); } }
    },
    caches: {
      open: function () { return Promise.resolve(cache); },
      keys: function () { return Promise.resolve([]); },
      delete: function () { return Promise.resolve(true); },
      match: function (request) {
        var key = request.url || request;
        matches.push(key);
        return Promise.resolve(key === "/offline" ? { offline: true } : { cached: true });
      }
    },
    fetch: function (request) { return fetchImplementation(request); }
  };
  vm.runInNewContext(worker, context, { filename: "dist/sw.js" });
  if (typeof fetchHandler !== "function") throw new Error("Service-worker fetch handler is missing");

  async function dispatch(pagePath, succeeds) {
    writes = [];
    matches = [];
    var response = {
      ok: true,
      type: "basic",
      clone: function () { return this; }
    };
    fetchImplementation = function () {
      return succeeds ? Promise.resolve(response) : Promise.reject(new Error("simulated offline"));
    };
    var waits = [];
    var responded = null;
    fetchHandler({
      request: {
        method: "GET",
        mode: "navigate",
        url: "https://pattayapets.com" + pagePath
      },
      waitUntil: function (promise) { waits.push(promise); },
      respondWith: function (promise) { responded = promise; }
    });
    if (!responded) throw new Error("Service-worker navigation did not call respondWith");
    var result = await responded;
    await Promise.all(waits);
    return { result: result, writes: writes.slice(), matches: matches.slice() };
  }

  var sensitive = [
    "/bring-pet-to-thailand/checklist.html",
    "/take-pet-out-of-thailand/checklist.html",
    "/pet-emergency/24-hour-vets-pattaya.html"
  ];
  for (const pagePath of sensitive) {
    var online = await dispatch(pagePath, true);
    if (online.writes.length || online.matches.length) {
      throw new Error("Fresh-only navigation touched runtime cache while online: " + pagePath);
    }
    var offline = await dispatch(pagePath, false);
    if (!offline.result || !offline.result.offline ||
        JSON.stringify(offline.matches) !== JSON.stringify(["/offline"]) || offline.writes.length) {
      throw new Error("Fresh-only navigation did not fall back directly to /offline: " + pagePath);
    }
  }
  var ordinaryOnline = await dispatch("/about.html", true);
  if (ordinaryOnline.writes.length !== 1 || ordinaryOnline.matches.length) {
    throw new Error("Ordinary navigation no longer updates the runtime cache");
  }
  var ordinaryOffline = await dispatch("/about.html", false);
  if (!ordinaryOffline.result || !ordinaryOffline.result.cached ||
      ordinaryOffline.matches.length !== 1 || ordinaryOffline.writes.length) {
    throw new Error("Ordinary offline navigation no longer uses its runtime cache");
  }
}

async function main() {
  if (!fs.existsSync(MANIFEST)) throw new Error("dist/build-manifest.json is missing");
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  if (manifest.schemaVersion !== 1 || manifest.project !== "pattayapets" ||
      manifest.site !== "https://pattayapets.com") throw new Error("Manifest identity is invalid");
  const pinnedNode = fs.readFileSync(path.join(ROOT, ".node-version"), "utf8").trim();
  if (!manifest.runtime || manifest.runtime.node !== "v" + pinnedNode || process.versions.node !== pinnedNode) {
    throw new Error("Build manifest/runtime differs from the exact .node-version pin");
  }
  if (!manifest.source || manifest.source.sha256 !== sourceHash()) {
    throw new Error("dist is stale: manifest source hash does not match the current source tree");
  }
  if (manifest.source.packageLockSha256 !== hash(fs.readFileSync(path.join(ROOT, "package-lock.json")))) {
    throw new Error("Manifest package-lock hash is stale");
  }

  if (!/^[0-9a-f]{12}$/.test(manifest.serviceWorkerVersion || "") ||
      manifest.serviceWorkerVersion !== sourceHash().slice(0, 12)) {
    throw new Error("Service-worker version is not the exact build-source fingerprint");
  }

  const actualFiles = walk(DIST).filter(function (rel) { return rel !== "build-manifest.json"; }).sort();
  if (actualFiles.includes("pp-indexnow-key.txt")) {
    throw new Error("Raw IndexNow helper filename is published; only the protocol key-named file is allowed");
  }
  if (!Array.isArray(manifest.files)) throw new Error("Manifest file ledger is missing");
  manifest.files.forEach(function (item) {
    if (!item || !safeRelative(item.path) || !Number.isSafeInteger(item.bytes) || item.bytes < 0 ||
        !/^[0-9a-f]{64}$/.test(item.sha256 || "")) throw new Error("Invalid manifest file entry");
  });
  const ledger = new Map(manifest.files.map(function (item) { return [item.path, item]; }));
  if (ledger.size !== manifest.files.length) throw new Error("Manifest file ledger contains duplicate paths");
  if (ledger.size !== actualFiles.length || actualFiles.some(function (rel) { return !ledger.has(rel); })) {
    throw new Error("Manifest file set does not exactly match dist");
  }
  actualFiles.forEach(function (rel) {
    if (rel.includes("..") || rel.startsWith("/") || rel.includes("\\")) throw new Error("Unsafe manifest path: " + rel);
    const bytes = fs.readFileSync(path.join(DIST, ...rel.split("/")));
    const expected = ledger.get(rel);
    if (expected.bytes !== bytes.length || expected.sha256 !== hash(bytes)) {
      throw new Error("Manifest hash/size mismatch: " + rel);
    }
  });

  const routeOutputs = new Set();
  const routePaths = new Set();
  const sourceManifest = indexPageManifest(loadPageManifest());
  if (!Array.isArray(manifest.routes) || !manifest.routes.length) throw new Error("Manifest route list is missing");
  manifest.routes.forEach(function (route) {
    if (!route || !safeRelative(route.output) || typeof route.path !== "string" ||
        typeof route.canonical !== "string" || typeof route.kind !== "string" ||
        typeof route.category !== "string" || typeof route.indexable !== "boolean" ||
        typeof route.locale !== "string" || !Array.isArray(route.auditScopes)) {
      throw new Error("Invalid manifest route entry");
    }
    if (routePaths.has(route.path) || routeOutputs.has(route.output)) throw new Error("Duplicate manifest route");
    routePaths.add(route.path);
    routeOutputs.add(route.output);
    const sourceEntry = sourceManifest.get(route.path);
    if (!sourceEntry || ["kind", "category", "indexable", "locale"].some(function (field) {
      return route[field] !== sourceEntry[field];
    }) || JSON.stringify(route.auditScopes) !== JSON.stringify(sourceEntry.auditScopes)) {
      throw new Error("Generated route classification differs from source page manifest: " + route.path);
    }
    const file = path.join(DIST, ...route.output.split("/"));
    if (!fs.existsSync(file)) throw new Error("Missing route output: " + route.output);
    if (canonicalOf(fs.readFileSync(file, "utf8")) !== route.canonical) {
      throw new Error("Canonical mismatch: " + route.path);
    }
    if (new URL(route.canonical).origin !== manifest.site) throw new Error("Foreign route canonical: " + route.path);
  });
  if (routePaths.size !== sourceManifest.size) {
    throw new Error("Generated routes do not exactly cover the source page manifest");
  }
  const htmlOutputs = actualFiles.filter(function (rel) { return rel.endsWith(".html"); }).sort();
  if (JSON.stringify([...routeOutputs].sort()) !== JSON.stringify(htmlOutputs)) {
    throw new Error("Manifest routes do not exactly cover generated HTML");
  }

  /* Every generated image reference must name the bytes it expects. Stable
     aliases are retained only for old external links; current HTML, CSS, PWA
     metadata and the worker must never depend on a mutable image cache key. */
  const imageReferenceFiles = htmlOutputs.concat(actualFiles.filter(function (rel) {
    return /^assets\/css\/site\.[0-9a-f]{12}\.css$/i.test(rel) ||
      /^assets\/js\/site\.[0-9a-f]{12}\.js$/i.test(rel) ||
      rel === "manifest.webmanifest" || rel === "sw.js";
  }));
  let imageReferenceCount = 0;
  imageReferenceFiles.forEach(function (rel) {
    const contents = fs.readFileSync(path.join(DIST, ...rel.split("/")), "utf8");
    publicImageReferences(contents).forEach(function (url) {
      imageReferenceCount++;
      const nameMatch = url.match(/^\/assets\/immutable\/img\/.*\.([0-9a-f]{12})\.(?:png|webp|jpe?g|svg|ico|gif)$/i);
      if (!nameMatch) throw new Error("Mutable public image reference in " + rel + ": " + url);
      const assetRel = url.slice(1);
      const entry = ledger.get(assetRel);
      if (!entry || entry.sha256.slice(0, 12) !== nameMatch[1].toLowerCase()) {
        throw new Error("Image filename/content hash mismatch in " + rel + ": " + url);
      }
    });
  });
  if (!imageReferenceCount) throw new Error("No generated public image references were audited");

  const sitemapUrls = [...fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8")
    .matchAll(/<loc>([^<]+)<\/loc>/g)].map(function (match) { return match[1]; }).sort();
  const routeUrls = manifest.routes.filter(function (route) { return route.indexable; })
    .map(function (route) { return route.canonical; }).sort();
  if (JSON.stringify(sitemapUrls) !== JSON.stringify(routeUrls)) throw new Error("Sitemap and route manifest differ");
  const home = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  const markupFontPreloads = [...home.matchAll(/<link\b[^>]*>/gi)].map(function (match) {
    return tagAttributes(match[0]);
  }).filter(function (attr) {
    return String(attr.rel).toLowerCase() === "preload" && String(attr.as).toLowerCase() === "font";
  }).map(function (attr) { return attr.href; }).sort();
  const headers = fs.readFileSync(path.join(DIST, "_headers"), "utf8");
  const rootHeaderBlock = headers.split(/\r?\n\s*\r?\n/).find(function (block) {
    return /^\/\r?\n/.test(block);
  }) || "";
  const headerBlocks = headers.split(/\r?\n\s*\r?\n/);
  const cachePolicies = {
    "/assets/immutable/*": "public, max-age=31536000, immutable",
    "/sw.js": "no-cache",
    "/robots.txt": "public, max-age=3600, must-revalidate",
    "/sitemap.xml": "public, max-age=3600, must-revalidate",
    "/llms.txt": "public, max-age=3600, must-revalidate",
    "/search-index.json": "public, max-age=3600, must-revalidate",
    "/manifest.webmanifest": "public, max-age=86400, must-revalidate"
  };
  Object.entries(cachePolicies).forEach(function (entry) {
    const block = headerBlocks.find(function (candidate) {
      return candidate.split(/\r?\n/, 1)[0].trim() === entry[0];
    }) || "";
    const cache = (block.match(/^\s*Cache-Control:\s*(.+)$/im) || [])[1];
    if (!cache || cache.trim() !== entry[1]) {
      throw new Error("Missing or incorrect cache policy for " + entry[0]);
    }
  });
  const headerFontPreloads = [...rootHeaderBlock.matchAll(/<([^>]+)>;\s*rel=preload;\s*as=font/gi)]
    .map(function (match) { return match[1]; }).sort();
  if (markupFontPreloads.length !== 2 ||
      JSON.stringify(markupFontPreloads) !== JSON.stringify(headerFontPreloads)) {
    throw new Error("Root Link header font preloads must exactly match the two markup font preloads");
  }
  if (markupFontPreloads.some(function (url) {
    return !/^\/assets\/fonts\/[a-z0-9-]+\.[0-9a-f]{12}\.woff2$/i.test(url);
  })) throw new Error("Font preload is not content-addressed");
  if (!fs.readFileSync(path.join(DIST, "sw.js"), "utf8").includes(manifest.serviceWorkerVersion)) {
    throw new Error("Service-worker and manifest versions differ");
  }
  const siteStyles = actualFiles.filter(function (rel) {
    return /^assets\/css\/site\.[0-9a-f]{12}\.css$/i.test(rel);
  });
  if (siteStyles.length !== 1) throw new Error("Expected exactly one content-addressed site stylesheet");
  const siteStyle = fs.readFileSync(path.join(DIST, ...siteStyles[0].split("/")), "utf8");
  if (/NaN/i.test(siteStyle) || !siteStyle.includes("@media(prefers-reduced-motion:reduce)") ||
      !siteStyle.includes("animation-duration:1ms!important") ||
      !siteStyle.includes("transition-duration:1ms!important")) {
    throw new Error("Built reduced-motion duration overrides are missing or invalid");
  }
  const siteScripts = actualFiles.filter(function (rel) {
    return /^assets\/js\/site\.[0-9a-f]{12}\.js$/i.test(rel);
  });
  if (siteScripts.length !== 1) throw new Error("Expected exactly one content-addressed site script");
  const siteScript = fs.readFileSync(path.join(DIST, ...siteScripts[0].split("/")), "utf8");
  if (!siteScript.includes("/sw.js?v=") || !siteScript.includes(manifest.serviceWorkerVersion) ||
      !siteScript.includes("updateViaCache") || !siteScript.includes("none")) {
    throw new Error("Service-worker registration is not bound to the build version with cache bypass");
  }
  const worker = fs.readFileSync(path.join(DIST, "sw.js"), "utf8");
  const precacheMatch = worker.match(/\bPRECACHE=(\[[^\]]*\])/);
  if (!precacheMatch) throw new Error("Service-worker precache array is missing or malformed");
  const workerPrecache = JSON.parse(precacheMatch[1]);
  const freshOnlyMatch = worker.match(/\bFRESH_ONLY_NAVIGATION_PREFIXES=(\[[^\]]*\])/);
  if (!freshOnlyMatch) throw new Error("Service-worker fresh-only navigation boundary is missing");
  const freshOnlyPrefixes = JSON.parse(freshOnlyMatch[1]);
  const expectedFreshOnlyPrefixes = [
    "/bring-pet-to-thailand/",
    "/take-pet-out-of-thailand/",
    "/pet-emergency/"
  ];
  if (JSON.stringify(freshOnlyPrefixes) !== JSON.stringify(expectedFreshOnlyPrefixes)) {
    throw new Error("Service-worker fresh-only navigation boundary has drifted");
  }
  if (workerPrecache.includes("/search-index.json")) {
    throw new Error("Service worker must load the noncritical search index on demand, not during install");
  }
  const builtFonts = actualFiles.filter(function (rel) {
    return /^assets\/fonts\/[a-z0-9-]+\.[0-9a-f]{12}\.woff2$/i.test(rel);
  }).map(function (rel) { return "/" + rel; });
  const noncriticalFonts = builtFonts.filter(function (url) { return !markupFontPreloads.includes(url); });
  if (noncriticalFonts.some(function (url) { return worker.includes(url); })) {
    throw new Error("Service worker precaches a noncritical font weight");
  }
  if (markupFontPreloads.some(function (url) { return !worker.includes(url); })) {
    throw new Error("Service worker omits a critical font preload from its app shell");
  }
  if (workerPrecache.some(function (url) {
    return freshOnlyPrefixes.some(function (prefix) {
      return url === prefix.slice(0, -1) || url.indexOf(prefix) === 0;
    });
  })) {
    throw new Error("Regulated or emergency HTML is present in the service-worker precache");
  }
  const workerSource = fs.readFileSync(path.join(ROOT, "src", "sw.js"), "utf8");
  if (!workerSource.includes("if (!freshOnly && res.ok") ||
      !workerSource.includes('if (freshOnly) return caches.match("/offline")')) {
    throw new Error("Fresh-only navigation must bypass runtime cache writes and reads");
  }
  await auditServiceWorkerNavigation(worker);

  console.log("Build manifest: PASS (" + manifest.routes.length + " routes, " + actualFiles.length + " files)");
}

main().catch(function (error) {
  console.error("Build manifest: FAIL\n- " + error.message);
  process.exit(1);
});
