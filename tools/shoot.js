"use strict";
/* Screenshot helper for auditing. node tools/shoot.js  (dev only) */
const http = require("http"), fs = require("fs"), path = require("path");
const puppeteer = require("puppeteer");
const ROOT = process.env.SHOOT_DIR || "/tmp/ppdist";
const OUT = process.env.SHOT_OUT || "/tmp/shots";
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".xml": "application/xml" };
const server = http.createServer(function (req, res) {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let f = path.join(ROOT, p);
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end("404"); return; }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});
const SHOTS = [
  ["home", "/"],
  ["directory", "/directory.html"],
  ["cat-vets", "/vets/"],
  ["cat-boarding", "/boarding/"],
  ["area-jomtien", "/area/jomtien.html"],
  ["area-wongamat", "/area/wongamat.html"],
  ["listing", "/vets/thonglor-pet-hospital-pattaya.html"],
  ["listing2", "/groomers/jaijai-grooming.html"],
  ["guidehub", "/bring-pet-to-thailand/"],
  ["country", "/bring-pet-to-thailand/from-uk.html"],
  ["article", "/pet-emergency/heatstroke.html"],
  ["emergency", "/pet-emergency/24-hour-vets-pattaya.html"],
  ["standards", "/standards.html"],
  ["about", "/about.html"],
  ["contact", "/contact.html"],
  ["starthere", "/start-here.html"],
  ["search", "/search.html?q=vet"],
  ["notfound", "/404.html"],
  ["sitemap", "/sitemap.html"]
];
(async function () {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise(function (r) { server.listen(8099, r); });
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  for (const pair of SHOTS) {
    for (const dev of [["desktop", 1280], ["mobile", 390]]) {
      const page = await browser.newPage();
      var _f=OUT+"/"+pair[0]+"-"+dev[0]+".png"; if(fs.existsSync(_f)){await page.close();continue;}
      await page.setViewport({ width: dev[1], height: 900, deviceScaleFactor: 2 });
      await page.goto("http://localhost:8099" + pair[1], { waitUntil: "networkidle0", timeout: 20000 });
      await new Promise(function (r) { setTimeout(r, 450); });
      await page.screenshot({ path: OUT + "/" + pair[0] + "-" + dev[0] + ".png", fullPage: true });
      await page.close();
    }
  }
  await browser.close();
  server.close();
  console.log("done: " + SHOTS.length + " pages x 2");
})().catch(function (e) { console.error(e); process.exit(1); });
