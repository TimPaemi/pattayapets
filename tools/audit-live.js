"use strict";
/* Production smoke test — fetches sitemap.xml and checks every URL + critical assets.
   Run: node tools/audit-live.js
   Override: PP_LIVE=https://pattayapets.com node tools/audit-live.js */

const https = require("https");
const http = require("http");

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
  "/assets/css/site.css",
  "/assets/js/site.js",
  "/sw.js",
  "/robots.txt",
  "/sitemap.xml",
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
          resolve({
            status: res.statusCode,
            url: url,
            body: Buffer.concat(chunks).toString("utf8"),
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

function checkHtml(path, body, issues) {
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
  var stats = { ok: 0, fail: 0, redirect: 0 };

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

  /* critical assets first */
  console.log("\n--- Critical paths ---");
  for (var ci = 0; ci < CRITICAL.length; ci++) {
    var cp = CRITICAL[ci];
    try {
      var cr = await fetch(BASE + cp);
      var ok = cr.status === 200;
      console.log((ok ? "OK" : "FAIL") + "  " + cp + "  →  " + cr.status);
      if (!ok) issues.push({ kind: "HTTP", path: cp, detail: "status " + cr.status });
      else if (cp.endsWith(".html") || cp === "/" || cp.endsWith("/")) checkHtml(cp, cr.body, issues);
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
        if (path.endsWith(".html") || path.endsWith("/")) checkHtml(path, r.body, issues);
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
