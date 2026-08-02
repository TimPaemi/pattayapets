"use strict";
/* Explicit raster image generator.
   --check validates committed outputs without writing to src/. */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMG = path.resolve(__dirname, "..", "src", "assets", "img");
const CHECK = process.argv.includes("--check");

function assertImagePath(name) {
  if (!/^[a-z0-9][a-z0-9-]*\.(?:svg|png)$/.test(name)) {
    throw new Error("Unsafe image filename: " + name);
  }
  const out = path.resolve(IMG, name);
  const rel = path.relative(IMG, out);
  if (!rel || rel.startsWith(".." + path.sep) || path.isAbsolute(rel)) {
    throw new Error("Image path escapes src/assets/img: " + name);
  }
  return out;
}

async function validatePng(name, width, height) {
  const file = assertImagePath(name);
  if (!fs.existsSync(file)) throw new Error("Required generated image is missing: " + name);
  const meta = await sharp(file).metadata();
  if (meta.format !== "png" || meta.width !== width || meta.height !== height) {
    throw new Error(name + " must be a " + width + "x" + height + " PNG");
  }
}

async function render(sourceName, outputName, width, height, density) {
  const source = assertImagePath(sourceName);
  const output = assertImagePath(outputName);
  if (!fs.existsSync(source)) throw new Error("Image source is missing: " + sourceName);
  const bytes = await sharp(source, { density: density }).resize(width, height).png().toBuffer();
  fs.writeFileSync(output, bytes);
}

async function run() {
  const ogSvgs = fs.readdirSync(IMG).filter(function (f) {
    return /^og-[a-z0-9-]+\.svg$/.test(f);
  }).sort();
  if (!ogSvgs.length) throw new Error("No og-*.svg image sources found");

  if (CHECK) {
    for (const svg of ogSvgs) await validatePng(svg.replace(/\.svg$/, ".png"), 1200, 630);
    await validatePng("apple-touch-icon.png", 180, 180);
    await validatePng("icon-192.png", 192, 192);
    await validatePng("icon-512.png", 512, 512);
    console.log("Images verified: " + (ogSvgs.length + 3) + " committed PNG files");
    return;
  }

  for (const svg of ogSvgs) await render(svg, svg.replace(/\.svg$/, ".png"), 1200, 630, 160);
  await render("icon.svg", "apple-touch-icon.png", 180, 180, 384);
  await render("icon.svg", "icon-192.png", 192, 192, 384);
  await render("icon.svg", "icon-512.png", 512, 512, 384);
  console.log("Images generated explicitly: " + (ogSvgs.length + 3) + " PNG files");
}

run().catch(function (e) {
  console.error("Image task failed: " + e.message);
  process.exit(1);
});
