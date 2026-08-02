"use strict";
/* Production smoke test — fetches sitemap.xml and checks every URL + critical assets.
   Run: node tools/audit-live.js
   Override: PP_LIVE=https://pattayapets.com node tools/audit-live.js */

const https = require("https");
const http = require("http");
const crypto = require("crypto");

const BASE = (process.env.PP_LIVE || "https://pattayapets.com").replace(/\/$/, "");
const TIMEOUT = 20000;
const CONCURRENCY = 8;

const CRITICAL = [
  "/",
  "/vets/",
  "/directory.html",
  "/guides.html",
  "/bring-pet-to-thailand/",
  "/pet-emergency/24-hour-vets-pattaya.html",
  "/contact.html",
  "/sw.js",
  "/build-manifest.json",
  "/robots.txt",
  "/sitemap.xml",
  "/.well-known/security.txt",
  "/manifest.webmanifest",
  "/offline.html",
  "/404.html"
];

function fetchOnce(url, redirects) {
  redirects = redirects || 0;
  return new Promise(function (resolve, reject) {
    var mod = url.startsWith("https") ? https : http;
    var req = mod.get(url, { timeout: TIMEOUT, headers: { "User-Agent": "PattayaPets-audit/1.0" } },
      function (res) {
        if ([301, 302, 307, 308].indexOf(res.statusCode) !== -1 && res.headers.location && redirects < 8) {
          var next = res.headers.location;
          if (next.startsWith("/")) next = BASE + next;
          res.resume();
          return resolve(fetchOnce(next, redirects + 1));
        }
        var chunks = [];
        res.on("data", function (c) { chunks.push(c); });
        res.on("end", function () {
          var buffer = Buffer.concat(chunks);
          resolve({
            status: res.statusCode,
            url: url,
            body: buffer.toString("utf8"),
            buffer: buffer,
            headers: res.headers,
            type: res.headers["content-type"] || ""
          });
        });
      });
    req.on("error", reject);
    req.on("timeout", function () { req.destroy(new Error("timeout")); });
  });
}

function fetch(url, attempt) {
  attempt = attempt || 1;
  return fetchOnce(url).catch(function (err) {
    if (attempt < 3 && /timeout|ECONNRESET|ETIMEDOUT|socket hang up/i.test(err.message)) {
      return fetch(url, attempt + 1);
    }
    throw err;
  });
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(function (m) { return m[1].trim(); });
}

function tagAttributes(tag) {
  var out = {};
  var regex = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  var match;
  while ((match = regex.exec(tag))) out[match[1].toLowerCase()] = match[2] || match[3] || match[4] || "";
  return out;
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function maxAge(value) {
  var match = String(value || "").match(/(?:^|,)\s*max-age=(\d+)/i);
  return match ? Number(match[1]) : null;
}

function checkHtml(path, body, issues, socialImages) {
  if (body.indexOf("undefined") !== -1 && /<title>[^<]*undefined/i.test(body)) {
    issues.push({ kind: "BAD_TITLE", path: path, detail: "title contains 'undefined'" });
  }
  if (!/<title>[^<]+<\/title>/.test(body)) {
    issues.push({ kind: "NO_TITLE", path: path });
  }
  if (!/<h1[^>]*>/.test(body)) {
    issues.push({ kind: "NO_H1", path: path });
  }
  if (body.indexOf("Editorial and informational only") === -1 && path.indexOf("/404") === -1 &&
      path.indexOf("/offline") === -1 && path.indexOf("/search") === -1) {
    issues.push({ kind: "NO_DISCLAIMER", path: path });
  }
  var metas = [...body.matchAll(/<meta\b[^>]*>/gi)].map(function (match) {
    return tagAttributes(match[0]);
  });
  var author = metas.find(function (attr) { return String(attr.name).toLowerCase() === "author"; });
  var publisher = metas.find(function (attr) { return String(attr.name).toLowerCase() === "publisher"; });
  if (!author || author.content !== "Tim and Paemi \u2014 TimPaemi") {
    issues.push({ kind: "AUTHOR", path: path, detail: "exact author metadata missing" });
  }
  if (!publisher || publisher.content !== "TIMPAEMI CO., LTD.") {
    issues.push({ kind: "PUBLISHER", path: path, detail: "exact publisher metadata missing" });
  }
  var timPaemiLinks = [...body.matchAll(/<a\b[^>]*>/gi)].map(function (match) {
    return tagAttributes(match[0]);
  }).filter(function (attr) { return attr.href === "https://timpaemi.com/"; });
  if (timPaemiLinks.length !== 1 || !/(?:^|\s)author(?:\s|$)/.test(timPaemiLinks[0].rel || "") ||
      /(?:^|\s)nofollow(?:\s|$)/.test(timPaemiLinks[0].rel || "")) {
    issues.push({ kind: "AUTHOR_LINK", path: path, detail: "expected one followed rel=author TimPaemi link" });
  }
  metas.filter(function (attr) {
    return String(attr.property).toLowerCase() === "og:image";
  }).forEach(function (attr) {
    if (attr.content) socialImages.add(attr.content);
  });
}

function decodeCfEmail(hex) {
  if (!/^[0-9a-f]+$/i.test(hex) || hex.length < 4 || hex.length % 2) return null;
  var key = parseInt(hex.slice(0, 2), 16);
  var out = "";
  for (var i = 2; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
  return out;
}

async function pool(items, fn, n) {
  var i = 0, active = 0, results = [];
  return new Promise(function (resolve, reject) {
    function next() {
      if (i >= items.length && active === 0) return resolve(results);
      while (active < n && i < items.length) {
        var idx = i++;
        active++;
        fn(items[idx]).then(function (r) {
          results.push(r);
          active--;
          next();
        }).catch(reject);
      }
    }
    next();
  });
}

(async function () {
  console.log("Live audit — " + BASE);
  console.log("=".repeat(50));

  var issues = [];
  var advisories = [];
  var stats = { ok: 0, fail: 0, redirect: 0 };
  var socialImages = new Set();
  var releaseLedger = new Map();
  var releaseManifest;

  /* sitemap */
  var sm;
  try {
    sm = await fetch(BASE + "/sitemap.xml");
  } catch (e) {
    console.error("FAIL cannot fetch sitemap:", e.message);
    process.exit(1);
  }
  if (sm.status !== 200) {
    console.error("FAIL sitemap status", sm.status);
    process.exit(1);
  }
  var urls = parseSitemap(sm.body);
  console.log("Sitemap URLs:", urls.length);

  var criticalPaths = CRITICAL.slice();
  try {
    var manifestResponse = await fetch(BASE + "/build-manifest.json");
    if (manifestResponse.status !== 200) throw new Error("status " + manifestResponse.status);
    var manifest = JSON.parse(manifestResponse.body);
    releaseManifest = manifest;
    if (manifest.project !== "pattayapets" || manifest.site !== "https://pattayapets.com") {
      throw new Error("project identity mismatch");
    }
    (manifest.files || []).forEach(function (item) { releaseLedger.set("/" + item.path, item); });
    var releaseAssets = (manifest.files || []).map(function (item) { return item.path; })
      .filter(function (file) { return /^assets\/(?:css|js)\/site\.[0-9a-f]{8,}\.(?:css|js)$/.test(file); });
    if (releaseAssets.length !== 2) throw new Error("expected exactly one hashed CSS and JS release asset");
    criticalPaths = criticalPaths.concat(releaseAssets.map(function (file) { return "/" + file; }));
  } catch (error) {
    console.error("FAIL build manifest:", error.message);
    process.exit(1);
  }

  /* critical assets first */
  console.log("\n--- Critical paths ---");
  for (var ci = 0; ci < criticalPaths.length; ci++) {
    var cp = criticalPaths[ci];
    try {
      var cr = await fetch(BASE + cp);
      var ok = cr.status === 200;
      console.log((ok ? "OK" : "FAIL") + "  " + cp + "  →  " + cr.status);
      if (!ok) issues.push({ kind: "HTTP", path: cp, detail: "status " + cr.status });
      else {
        if (cp.endsWith(".html") || cp === "/" || cp.endsWith("/")) {
          checkHtml(cp, cr.body, issues, socialImages);
        }
        var expected = releaseLedger.get(cp);
        if (expected && (expected.bytes !== cr.buffer.length || expected.sha256 !== sha256(cr.buffer))) {
          issues.push({ kind: "RELEASE_HASH", path: cp, detail: "live bytes differ from build manifest" });
        }
      }
    } catch (e) {
      console.log("FAIL  " + cp + "  →  " + e.message);
      issues.push({ kind: "HTTP", path: cp, detail: e.message });
    }
  }

  /* every sitemap URL */
  console.log("\n--- Sitemap URLs (concurrency " + CONCURRENCY + ") ---");
  var results = await pool(urls, async function (loc) {
    var path = loc.replace(BASE, "");
    try {
      var r = await fetch(loc);
      if (r.status === 200) {
        stats.ok++;
        if (path.endsWith(".html") || path.endsWith("/")) checkHtml(path, r.body, issues, socialImages);
        return { path: path, status: r.status };
      }
      stats.fail++;
      issues.push({ kind: "HTTP", path: path, detail: "status " + r.status });
      return { path: path, status: r.status };
    } catch (e) {
      stats.fail++;
      issues.push({ kind: "HTTP", path: path, detail: e.message });
      return { path: path, error: e.message };
    }
  }, CONCURRENCY);

  var bad = results.filter(function (r) { return r.status !== 200; });
  console.log("OK:", stats.ok, "  Fail:", stats.fail);
  if (bad.length) {
    console.log("\nFailed URLs:");
    bad.slice(0, 30).forEach(function (b) {
      console.log(" ", b.path, b.status || b.error);
    });
    if (bad.length > 30) console.log(" ... and", bad.length - 30, "more");
  }

  console.log("\n--- Release contracts ---");
  if (urls.length !== releaseManifest.routes.filter(function (route) { return route.indexable; }).length) {
    issues.push({ kind: "SITEMAP_COUNT", path: "/sitemap.xml", detail: "sitemap/manifest indexable counts differ" });
  }

  var homeResponse = await fetch(BASE + "/");
  var requiredHeaders = {
    "content-security-policy": /default-src\s+'self'/i,
    "strict-transport-security": /max-age=\d+/i,
    "x-content-type-options": /^nosniff$/i,
    "referrer-policy": /\S+/,
    "permissions-policy": /\S+/,
    "x-frame-options": /^DENY$/i
  };
  Object.keys(requiredHeaders).forEach(function (name) {
    var value = homeResponse.headers[name] || "";
    if (!requiredHeaders[name].test(value)) {
      issues.push({ kind: "SECURITY_HEADER", path: "/", detail: name + " missing or invalid" });
    }
  });

  var swResponse = await fetch(BASE + "/sw.js");
  var swCache = swResponse.headers["cache-control"] || "";
  var swTtl = maxAge(swCache);
  if (!/no-cache/i.test(swCache) && (swTtl === null || swTtl > 14400)) {
    issues.push({ kind: "SW_CACHE", path: "/sw.js", detail: "unsafe cache-control " + swCache });
  } else if (!/no-cache/i.test(swCache)) {
    advisories.push({ kind: "ZONE_CACHE_OVERRIDE", path: "/sw.js", detail: swCache +
      "; version-bound registration prevents a stale worker from masking a release" });
  }
  var robotsResponse = await fetch(BASE + "/robots.txt");
  var robotsTtl = maxAge(robotsResponse.headers["cache-control"] || "");
  if (robotsTtl === null || robotsTtl > 14400) {
    issues.push({ kind: "ROBOTS_CACHE", path: "/robots.txt", detail: "cache exceeds four hours" });
  } else if (robotsTtl > 3600) {
    advisories.push({ kind: "ZONE_CACHE_OVERRIDE", path: "/robots.txt", detail:
      "custom-domain TTL " + robotsTtl + "s exceeds the 3600s Pages artifact policy" });
  }

  var contactResponse = await fetch(BASE + "/contact.html");
  var protectedEmails = [...contactResponse.body.matchAll(/data-cfemail=["']([0-9a-f]+)["']/gi)]
    .map(function (match) { return decodeCfEmail(match[1]); });
  var rawContact = /mailto:info@pattayapets\.com/i.test(contactResponse.body);
  if ((!protectedEmails.length && !rawContact) || protectedEmails.some(function (email) {
    return email !== "info@pattayapets.com";
  })) {
    issues.push({ kind: "CONTACT_EMAIL", path: "/contact.html", detail: "public mailbox mismatch" });
  }

  var imageResults = await pool([...socialImages], async function (url) {
    var parsed;
    try { parsed = new URL(url); }
    catch (error) { return { url: url, error: "invalid URL" }; }
    var nameMatch = parsed.pathname.match(/^\/assets\/immutable\/img\/.*\.([0-9a-f]{12})\.(?:png|webp|jpe?g|svg|ico|gif)$/i);
    var expected = releaseLedger.get(parsed.pathname);
    if (parsed.origin !== "https://pattayapets.com" || !nameMatch || !expected ||
        expected.sha256.slice(0, 12) !== nameMatch[1].toLowerCase()) {
      return { url: url, error: "social image is not manifest-backed and content-addressed" };
    }
    try {
      var response = await fetch(url);
      if (response.status !== 200 || response.buffer.length !== expected.bytes ||
          sha256(response.buffer) !== expected.sha256) {
        return { url: url, error: "live image differs from build manifest" };
      }
      var cache = response.headers["cache-control"] || "";
      if (!/public/i.test(cache) || !/immutable/i.test(cache) || (maxAge(cache) || 0) < 31536000) {
        return { url: url, error: "content-addressed image lacks one-year immutable caching: " + cache };
      }
      return { url: url, ok: true };
    } catch (error) {
      return { url: url, error: error.message };
    }
  }, 6);
  imageResults.filter(function (result) { return !result.ok; }).forEach(function (result) {
    issues.push({ kind: "SOCIAL_IMAGE", path: result.url, detail: result.error });
  });
  console.log("Identity: author, publisher and single followed TimPaemi link checked on live HTML");
  console.log("Contact:  " + (protectedEmails.length || (rawContact ? 1 : 0)) + " verified mailbox payload(s)");
  console.log("Headers:  security contract present; SW/robots TTL bounded at four hours");
  console.log("Images:   " + imageResults.length + " content-addressed social images match release bytes");
  if (advisories.length) {
    console.log("Advisory: " + advisories.length + " named custom-zone cache override(s)");
    advisories.forEach(function (item) {
      console.log("  " + item.path + " — " + item.detail);
    });
  }

  var byKind = {};
  issues.forEach(function (i) {
    byKind[i.kind] = (byKind[i.kind] || 0) + 1;
  });

  console.log("\n--- Content issues ---");
  if (!issues.length) {
    console.log("None detected.");
  } else {
    Object.keys(byKind).forEach(function (k) {
      console.log(k + ":", byKind[k]);
    });
    issues.slice(0, 20).forEach(function (i) {
      console.log(" ", i.kind, i.path, i.detail || "");
    });
    if (issues.length > 20) console.log(" ... and", issues.length - 20, "more");
  }

  console.log("\n" + (stats.fail || issues.length ? "FAIL" : "PASS") + " — live audit complete");
  process.exit(stats.fail || issues.length ? 1 : 0);
})();
