"use strict";
/* One-off raster image generator. Run with: node tools/make-images.js
   Rasterises the SVG sources into the PNGs the site references
   (OG image, Apple touch icon, PWA icons). Not part of the deploy build. */

const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "src", "assets", "img");

async function run() {
  await sharp(path.join(IMG, "og-default.svg"), { density: 160 })
    .resize(1200, 630)
    .png()
    .toFile(path.join(IMG, "og-default.png"));

  for (const size of [180, 192, 512]) {
    const name = size === 180 ? "apple-touch-icon.png" : "icon-" + size + ".png";
    await sharp(path.join(IMG, "icon.svg"), { density: 384 })
      .resize(size, size)
      .png()
      .toFile(path.join(IMG, name));
  }
  console.log("Images generated: og-default.png, apple-touch-icon.png, icon-192.png, icon-512.png");
}

run().catch(function (e) { console.error(e); process.exit(1); });
