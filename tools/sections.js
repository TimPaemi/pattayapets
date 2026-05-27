"use strict";
/* Per-section screenshots for detailed auditing. node tools/sections.js */
const http = require("http"), fs = require("fs"), path = require("path");
const puppeteer = require("puppeteer");
const ROOT = process.env.SHOOT_DIR || "/tmp/ppdist";
const OUT = "/tmp/shots";
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".xml": "application/xml" };
const server = http.createServer(function (q, s) {
  let p = decodeURIComponent(q.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let f = path.join(ROOT, p);
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
  if (!fs.existsSync(f)) { s.writeHead(404); s.end(); return; }
  s.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(s);
});
const PAGES = [
  ["home", "/"],
  ["dir", "/directory.html"],
  ["vets", "/vets/"],
  ["list", "/vets/thonglor-pet-hospital-pattaya.html"],
  ["art", "/pet-emergency/heatstroke.html"],
  ["std", "/standards.html"]
];
(async function () {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise(function (r) { server.listen(8094, r); });
  const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const W = process.env.W ? parseInt(process.env.W) : 390;
  const tag = W < 700 ? "m" : "d";
  for (const pg of PAGES) {
    const page = await b.newPage();
    await page.setViewport({ width: W, height: 850, deviceScaleFactor: 2 });
    await page.goto("http://localhost:8094" + pg[1], { waitUntil: "networkidle0", timeout: 20000 });
    await new Promise(function (r) { setTimeout(r, 350); });
    const els = await page.$$("body > header, main > section, body > footer");
    for (let i = 0; i < els.length; i++) {
      try { await els[i].screenshot({ path: OUT + "/" + tag + "-" + pg[0] + "-" + i + ".png" }); }
      catch (e) {}
    }
    await page.close();
  }
  await b.close();
  server.close();
  console.log(tag + ": " + PAGES.length + " pages done");
})().catch(function (e) { console.error(e); process.exit(1); });
