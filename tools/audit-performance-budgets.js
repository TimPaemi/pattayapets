#!/usr/bin/env node
"use strict";

/* Deterministic local performance-budget gate. The caller owns the loopback server;
 * `audit-local-harness.js` supplies one and is the normal entry point. */

const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(process.env.PP_AUDIT_DIST || path.join(ROOT, "dist"));
const BASE = process.env.PP_AUDIT_BASE || "http://127.0.0.1:8787";
const REPORT_ONLY = process.argv.includes("--report-only");
const configArg = process.argv.indexOf("--budgets");
const CONFIG = path.resolve(configArg === -1 ?
  path.join(__dirname, "performance-budgets.json") : process.argv[configArg + 1] || "");
const REQUIRED_BUDGETS = [
  "htmlBytes", "totalLocalTransferBytes", "criticalCssBytes",
  "lcpMs", "cls", "renderBlockingResources"
];

function within(base, candidate) {
  const relative = path.relative(path.resolve(base), path.resolve(candidate));
  return relative !== "" && relative !== ".." && !relative.startsWith(".." + path.sep) &&
    !path.isAbsolute(relative);
}

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.PP_CHROME,
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
    process.env["PROGRAMFILES(X86)"] && path.join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Microsoft", "Edge", "Application", "msedge.exe"),
    process.env["PROGRAMFILES(X86)"] && path.join(process.env["PROGRAMFILES(X86)"], "Microsoft", "Edge", "Application", "msedge.exe"),
    "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"
  ].filter(Boolean);
  const found = candidates.find(function (candidate) {
    return fs.existsSync(candidate) && fs.statSync(candidate).isFile();
  });
  if (!found) throw new Error("Chrome/Chromium was not found; set CHROME_PATH to a trusted executable");
  return found;
}

function routeOutput(routePath, manifest) {
  const route = manifest.routes.find(function (item) { return item.path === routePath; });
  if (!route || typeof route.output !== "string") throw new Error("Budget route is absent from build manifest: " + routePath);
  const file = path.resolve(DIST, ...route.output.split("/"));
  if (!within(DIST, file) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    throw new Error("Budget route output is missing or escaped dist: " + routePath);
  }
  return file;
}

function validateConfig(config, manifest) {
  if (!config || config.schemaVersion !== 1 || !config.profile || !Array.isArray(config.templates) ||
      !config.templates.length) throw new Error("Performance budget config has an invalid schema");
  const profileKeys = [
    "viewportWidth", "viewportHeight", "deviceScaleFactor", "latencyMs", "downloadKbps",
    "uploadKbps", "cpuSlowdownMultiplier", "settleMs"
  ];
  profileKeys.forEach(function (key) {
    if (!Number.isFinite(config.profile[key]) || config.profile[key] <= 0) {
      throw new Error("Performance profile value must be positive: " + key);
    }
  });
  const ids = new Set();
  const routes = new Set();
  config.templates.forEach(function (item) {
    if (!item || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id || "") || ids.has(item.id)) {
      throw new Error("Performance template has a missing, malformed or duplicate id");
    }
    if (typeof item.path !== "string" || !item.path.startsWith("/") || routes.has(item.path)) {
      throw new Error("Performance template has a missing or duplicate route: " + item.id);
    }
    ids.add(item.id);
    routes.add(item.path);
    routeOutput(item.path, manifest);
    REQUIRED_BUDGETS.forEach(function (key) {
      if (!Number.isFinite(item.budgets && item.budgets[key]) || item.budgets[key] < 0) {
        throw new Error("Invalid " + key + " budget for " + item.id);
      }
    });
    if (!Number.isInteger(item.budgets.renderBlockingResources)) {
      throw new Error("renderBlockingResources must be an integer for " + item.id);
    }
  });
}

function staticBlockingCount(html) {
  const head = (html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i) || [])[1] || "";
  const stylesheets = [...head.matchAll(/<link\b[^>]*>/gi)].filter(function (match) {
    const tag = match[0];
    return /\brel=["']?stylesheet\b/i.test(tag) && !/\bmedia=["']?(?:print|not all)\b/i.test(tag) &&
      !/\bdisabled\b/i.test(tag);
  }).length;
  const scripts = [...head.matchAll(/<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>/gi)].filter(function (match) {
    return !/\b(?:async|defer)\b/i.test(match[0]) && !/\btype=["']module["']/i.test(match[0]);
  }).length;
  return stylesheets + scripts;
}

function formatMetric(key, value) {
  if (key === "cls") return Number(value).toFixed(4);
  return Math.round(value).toLocaleString("en-US");
}

async function measureTemplate(browser, item, profile, manifest, criticalCssBytes, baseUrl) {
  const file = routeOutput(item.path, manifest);
  const html = fs.readFileSync(file, "utf8");
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();
  const origin = new URL(baseUrl).origin;
  const failedLocalRequests = [];
  try {
    await page.setViewport({
      width: profile.viewportWidth,
      height: profile.viewportHeight,
      deviceScaleFactor: profile.deviceScaleFactor,
      isMobile: true,
      hasTouch: true
    });
    await cdp.send("Network.enable");
    await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
    await cdp.send("Network.setBypassServiceWorker", { bypass: true });
    await cdp.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: profile.latencyMs,
      downloadThroughput: profile.downloadKbps * 1024 / 8,
      uploadThroughput: profile.uploadKbps * 1024 / 8,
      connectionType: "cellular3g"
    });
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: profile.cpuSlowdownMultiplier });
    await page.setRequestInterception(true);
    page.on("request", function (request) {
      let allowed = false;
      try {
        const url = new URL(request.url());
        allowed = url.origin === origin || ["data:", "blob:"].includes(url.protocol);
      } catch (error) {
        allowed = false;
      }
      if (allowed) request.continue();
      else request.abort("blockedbyclient");
    });
    page.on("requestfailed", function (request) {
      try {
        if (new URL(request.url()).origin === origin) failedLocalRequests.push(request.url());
      } catch (error) { /* ignore malformed browser-internal URLs */ }
    });
    await page.evaluateOnNewDocument(function () {
      window.__PP_BUDGET_METRICS__ = { lcp: 0, cls: 0 };
      new PerformanceObserver(function (list) {
        list.getEntries().forEach(function (entry) {
          window.__PP_BUDGET_METRICS__.lcp = Math.max(window.__PP_BUDGET_METRICS__.lcp, entry.startTime);
        });
      }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver(function (list) {
        list.getEntries().forEach(function (entry) {
          if (!entry.hadRecentInput) window.__PP_BUDGET_METRICS__.cls += entry.value;
        });
      }).observe({ type: "layout-shift", buffered: true });
    });
    const url = new URL(item.path, baseUrl).href;
    const response = await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    if (!response || response.status() !== 200) throw new Error("HTTP " + (response ? response.status() : "no response"));
    await new Promise(function (resolve) { setTimeout(resolve, profile.settleMs); });
    const runtime = await page.evaluate(function () {
      const navigation = performance.getEntriesByType("navigation")[0];
      const resources = performance.getEntriesByType("resource");
      const local = [navigation].concat(resources).filter(Boolean).filter(function (entry) {
        return new URL(entry.name).origin === location.origin;
      });
      const blocking = resources.filter(function (entry) {
        return new URL(entry.name).origin === location.origin && entry.renderBlockingStatus &&
          entry.renderBlockingStatus !== "non-blocking";
      });
      return {
        lcpMs: window.__PP_BUDGET_METRICS__.lcp,
        cls: window.__PP_BUDGET_METRICS__.cls,
        totalLocalTransferBytes: local.reduce(function (total, entry) {
          return total + (entry.transferSize || entry.encodedBodySize || 0);
        }, 0),
        renderBlockingResources: blocking.length,
        renderBlockingApiAvailable: resources.some(function (entry) {
          return typeof entry.renderBlockingStatus === "string";
        })
      };
    });
    if (failedLocalRequests.length) throw new Error("local request failures: " + failedLocalRequests.join(", "));
    if (!Number.isFinite(runtime.lcpMs) || runtime.lcpMs <= 0) throw new Error("LCP was not observed");
    if (!Number.isFinite(runtime.cls) || runtime.cls < 0) throw new Error("CLS was not observed");
    if (!Number.isFinite(runtime.totalLocalTransferBytes) || runtime.totalLocalTransferBytes <= 0) {
      throw new Error("local transfer size was not observed");
    }
    if (!runtime.renderBlockingApiAvailable) {
      runtime.renderBlockingResources = staticBlockingCount(html);
      runtime.renderBlockingFallback = true;
    }
    return {
      htmlBytes: Buffer.byteLength(html),
      totalLocalTransferBytes: Math.round(runtime.totalLocalTransferBytes),
      criticalCssBytes: criticalCssBytes,
      lcpMs: Math.round(runtime.lcpMs),
      cls: Number(runtime.cls.toFixed(4)),
      renderBlockingResources: runtime.renderBlockingResources,
      renderBlockingFallback: Boolean(runtime.renderBlockingFallback)
    };
  } finally {
    await page.close();
  }
}

async function main() {
  const parsedBase = new URL(BASE);
  if (parsedBase.protocol !== "http:" || !["127.0.0.1", "localhost", "[::1]"].includes(parsedBase.hostname) ||
      parsedBase.username || parsedBase.password) {
    throw new Error("PP_AUDIT_BASE must be an unauthenticated loopback HTTP URL");
  }
  if (!fs.existsSync(DIST) || !fs.statSync(DIST).isDirectory()) throw new Error("Audit dist directory is missing: " + DIST);
  if (!fs.existsSync(CONFIG) || !fs.statSync(CONFIG).isFile()) throw new Error("Budget config is missing: " + CONFIG);
  const manifestPath = path.join(DIST, "build-manifest.json");
  if (!fs.existsSync(manifestPath)) throw new Error("Audit build manifest is missing");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (!Array.isArray(manifest.routes)) throw new Error("Audit build manifest has no routes");
  const config = JSON.parse(fs.readFileSync(CONFIG, "utf8"));
  validateConfig(config, manifest);
  const critical = new CleanCSS({ level: 1 }).minify(fs.readFileSync(path.join(ROOT, "src", "critical.css"), "utf8"));
  if (critical.errors.length) throw new Error("Critical CSS minification failed: " + critical.errors.join("; "));
  const criticalCssBytes = Buffer.byteLength(critical.styles);
  const executablePath = chromePath();
  const puppeteerModule = await import("puppeteer-core");
  const puppeteer = puppeteerModule.default || puppeteerModule;
  const args = [
    "--disable-background-networking", "--disable-component-update", "--disable-default-apps",
    "--disable-sync", "--metrics-recording-only", "--no-first-run"
  ];
  if (process.env.PP_CHROME_NO_SANDBOX === "1") args.push("--no-sandbox", "--disable-setuid-sandbox");
  const browser = await puppeteer.launch({ executablePath: executablePath, headless: true, args: args });
  const failures = [];
  try {
    console.log("Performance budgets");
    console.log("Profile: " + config.profile.viewportWidth + "x" + config.profile.viewportHeight +
      ", " + config.profile.latencyMs + "ms, " + config.profile.downloadKbps + "kbps down, " +
      config.profile.cpuSlowdownMultiplier + "x CPU");
    console.log("Browser: " + await browser.version());
    console.log("Templates: " + config.templates.length + " | critical CSS: " + criticalCssBytes + " bytes");
    console.log("=".repeat(110));
    for (const item of config.templates) {
      let actual;
      try {
        actual = await measureTemplate(browser, item, config.profile, manifest, criticalCssBytes, BASE);
      } catch (error) {
        failures.push({ id: item.id, metric: "measurement", detail: error.message });
        console.log("FAIL " + item.id.padEnd(22) + " measurement: " + error.message);
        continue;
      }
      const over = REQUIRED_BUDGETS.filter(function (key) {
        return actual[key] > item.budgets[key];
      });
      over.forEach(function (key) {
        failures.push({
          id: item.id,
          metric: key,
          detail: formatMetric(key, actual[key]) + " > " + formatMetric(key, item.budgets[key])
        });
      });
      console.log((over.length ? "FAIL " : "PASS ") + item.id.padEnd(22) +
        " html " + formatMetric("htmlBytes", actual.htmlBytes) + "/" + formatMetric("htmlBytes", item.budgets.htmlBytes) +
        " | local " + formatMetric("totalLocalTransferBytes", actual.totalLocalTransferBytes) + "/" +
          formatMetric("totalLocalTransferBytes", item.budgets.totalLocalTransferBytes) +
        " | critical " + formatMetric("criticalCssBytes", actual.criticalCssBytes) + "/" +
          formatMetric("criticalCssBytes", item.budgets.criticalCssBytes) +
        " | LCP " + formatMetric("lcpMs", actual.lcpMs) + "/" + formatMetric("lcpMs", item.budgets.lcpMs) + "ms" +
        " | CLS " + formatMetric("cls", actual.cls) + "/" + formatMetric("cls", item.budgets.cls) +
        " | blockers " + actual.renderBlockingResources + "/" + item.budgets.renderBlockingResources +
        (actual.renderBlockingFallback ? " (static fallback)" : ""));
    }
  } finally {
    await browser.close();
  }
  if (failures.length) {
    console.error("\nPerformance budget failures: " + failures.length);
    failures.forEach(function (failure) {
      console.error("- " + failure.id + " " + failure.metric + ": " + failure.detail);
    });
    if (!REPORT_ONLY) process.exitCode = 1;
  } else {
    console.log("\nPerformance budgets: PASS (" + config.templates.length + " templates)");
  }
  if (REPORT_ONLY && failures.length) console.log("Report-only mode: failures did not set the exit code");
}

main().catch(function (error) {
  console.error("Performance budgets: FAIL - " + error.message);
  process.exit(1);
});
