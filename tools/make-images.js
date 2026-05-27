"use strict";
/* One-off raster image generator. Run with: node tools/make-images.js
   Rasterises the SVG sources into the PNGs the site references
   (OG image, Apple touch icon, PWA icons). Not part of the deploy build. */

const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "src", "assets", "img");

async function run() {
  const ogSvgs = fs.readdirSync(IMG).filter(function (f) {
    return f.startsWith("og-") && f.endsWith(".svg");
  });
  for (const svg of ogSvgs) {
    const out = svg.replace(".svg", ".png");
    await sharp(path.join(IMG, svg), { density: 160 })
      .resize(1200, 630)
      .png()
      .toFile(path.join(IMG, out));
  }

  for (const size of [180, 192, 512]) {
    const name = size === 180 ? "apple-touch-icon.png" : "icon-" + size + ".png";
    await sharp(path.join(IMG, "icon.svg"), { density: 384 })
      .resize(size, size)
      .png()
      .toFile(path.join(IMG, name));
  }
  console.log("Images generated: " + ogSvgs.map(function (f) {
    return f.replace(".svg", ".png");
  }).join(", ") + ", apple-touch-icon.png, icon-192.png, icon-512.png");
}

run().catch(function (e) { console.error(e); process.exit(1); });
