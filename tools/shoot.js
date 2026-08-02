#!/usr/bin/env node
"use strict";
/* Local screenshot helper. Serves only a contained directory over loopback. */

const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer-core");

const REPO = path.resolve(__dirname, "..");
const SERVE_ROOT = fs.realpathSync(path.resolve(process.env.SHOOT_DIR || path.join(REPO, "dist")));
const OUTPUT_ROOT = path.resolve(process.env.SHOT_OUT || path.join(REPO, ".artifacts", "shots"));
const MIME = {
  ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".png": "image/png",
  ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2", ".xml": "application/xml; charset=utf-8"
};
const SHOTS = [
  ["home", "/"], ["directory", "/directory.html"], ["cat-vets", "/vets/"],
  ["cat-boarding", "/boarding/"], ["area-jomtien", "/area/jomtien.html"],
  ["area-wongamat", "/area/wongamat.html"],
  ["listing", "/vets/thonglor-pet-hospital-pattaya.html"],
  ["listing2", "/groomers/jaijai-grooming.html"],
  ["guidehub", "/bring-pet-to-thailand/"],
  ["country", "/bring-pet-to-thailand/from-uk.html"],
  ["article", "/pet-emergency/heatstroke.html"],
  ["emergency", "/pet-emergency/24-hour-vets-pattaya.html"],
  ["standards", "/standards.html"], ["about", "/about.html"],
  ["contact", "/contact.html"], ["starthere", "/start-here.html"],
  ["search", "/search.html?q=vet"], ["notfound", "/404.html"],
  ["sitemap", "/sitemap.html"]
];

function within(base, candidate) {
  const relative = path.relative(path.resolve(base), path.resolve(candidate));
  return relative !== "" && relative !== ".." && !relative.startsWith(".." + path.sep) && !path.isAbsolute(relative);
}

if (!within(REPO, SERVE_ROOT)) throw new Error("SHOOT_DIR must be a directory inside this repository");
if (!within(REPO, OUTPUT_ROOT)) throw new Error("SHOT_OUT must be a directory inside this repository");

function assertContainedOutputRoot(candidate) {
  let existing = candidate;
  while (!fs.existsSync(existing)) {
    const parent = path.dirname(existing);
    if (parent === existing) throw new Error("No existing ancestor for screenshot output");
    existing = parent;
  }
  const stat = fs.lstatSync(existing);
  if (stat.isSymbolicLink()) throw new Error("Screenshot output ancestor must not be a symbolic link: " + existing);
  const realAncestor = fs.realpathSync(existing);
  if (realAncestor !== REPO && !within(REPO, realAncestor)) {
    throw new Error("Screenshot output resolves outside this repository");
  }
}

assertContainedOutputRoot(OUTPUT_ROOT);

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
    process.env["PROGRAMFILES(X86)"] && path.join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe"),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"
  ].filter(Boolean);
  const found = candidates.find(fs.existsSync);
  if (!found) throw new Error("Chrome was not found; set CHROME_PATH to a trusted executable");
  return found;
}

function fileFor(rawUrl) {
  let pathname;
  try { pathname = decodeURIComponent(new URL(rawUrl, "http://127.0.0.1").pathname); }
  catch (error) { return null; }
  if (pathname.includes("\0") || pathname.includes("\\")) return null;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.some(function (part) { return part === "." || part === ".."; })) return null;
  if (!segments.length || pathname.endsWith("/")) segments.push("index.html");
  let candidate = path.resolve(SERVE_ROOT, ...segments);
  if (!within(SERVE_ROOT, candidate)) return null;
  if (!fs.existsSync(candidate) && fs.existsSync(candidate + ".html")) candidate += ".html";
  if (!fs.existsSync(candidate) || !fs.statSync(candidate).isFile()) return null;
  const real = fs.realpathSync(candidate);
  return within(SERVE_ROOT, real) ? real : null;
}

const server = http.createServer(function (request, response) {
  const file = fileFor(request.url || "/");
  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", "X-Content-Type-Options": "nosniff" });
    response.end("404");
    return;
  }
  response.writeHead(200, {
    "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff"
  });
  fs.createReadStream(file).on("error", function () { response.destroy(); }).pipe(response);
});

async function listen() {
  await new Promise(function (resolve, reject) {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  return server.address().port;
}

(async function () {
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  const realOutputRoot = fs.realpathSync(OUTPUT_ROOT);
  if (!within(REPO, realOutputRoot)) throw new Error("Screenshot output escaped this repository");
  const port = await listen();
  const args = process.env.PP_CHROME_NO_SANDBOX === "1" ? ["--no-sandbox", "--disable-setuid-sandbox"] : [];
  const browser = await puppeteer.launch({ executablePath: chromePath(), headless: true, args: args });
  try {
    for (const pair of SHOTS) {
      for (const device of [["desktop", 1280], ["mobile", 390]]) {
        const output = path.resolve(realOutputRoot, pair[0] + "-" + device[0] + ".png");
        if (!within(realOutputRoot, output)) throw new Error("Screenshot path escaped the output directory");
        const page = await browser.newPage();
        try {
          await page.setViewport({ width: device[1], height: 900, deviceScaleFactor: 2 });
          await page.goto("http://127.0.0.1:" + port + pair[1], { waitUntil: "networkidle0", timeout: 30000 });
          await page.screenshot({ path: output, fullPage: true });
        } finally {
          await page.close();
        }
      }
    }
  } finally {
    await browser.close();
    await new Promise(function (resolve) { server.close(resolve); });
  }
  console.log("Screenshots complete: " + SHOTS.length + " pages x 2 in " + OUTPUT_ROOT);
})().catch(function (error) {
  server.close();
  console.error("Screenshot task failed: " + error.message);
  process.exit(1);
});
