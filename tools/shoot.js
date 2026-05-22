"use strict";
/* Screenshot helper for auditing. Run: node tools/shoot.js
   Serves the built site and screenshots key pages, desktop + mobile. Dev only. */

const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const ROOT = process.env.SHOOT_DIR || "/tmp/ppdist";
const OUT = process.env.SHOT_OUT || "/tmp/shots";
const MIME = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
  ".json": "application/json", ".webmanifest": "application/manifest+json",
  ".xml": "application/xml", ".txt": "text/plain"
};

const server = http.createServer(function (req, res) {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let f = path.join(ROOT, p);
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) {
    res.writeHead(404); res.end("404"); return;
  }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});

const SHOTS = [
  ["home", "/"],
  ["vets-hub", "/vets/"],
  ["listing", "/vets/thonglor-pet-hospital-pattaya.html"],
  ["guide-hub", "/bring-pet-to-thailand/"],
  ["guide-article", "/pet-emergency/heatstroke.html"],
  ["emergency", "/pet-emergency/24-hour-vets-pattaya.html"],
  ["directory", "/directory.html"],
  ["search", "/search.html?q=heatstroke vet"]
];

(async function () {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise(function (r) { server.listen(8099, r); });
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  for (const pair of SHOTS) {
    const name = pair[0], url = pair[1];
    for (const dev of [["desktop", 1280], ["mobile", 390]]) {
      const page = await browser.newPage();
      await page.setViewport({ width: dev[1], height: 900, deviceScaleFactor: 2 });
      await page.goto("http://localhost:8099" + url, { waitUntil: "networkidle0", timeout: 20000 });
      await new Promise(function (r) { setTimeout(r, 500); });
      await page.screenshot({ path: OUT + "/" + name + "-" + dev[0] + ".png", fullPage: true });
      await page.close();
    }
  }
  await browser.close();
  server.close();
  console.log("screenshots written to " + OUT);
})().catch(function (e) { console.error(e); process.exit(1); });
