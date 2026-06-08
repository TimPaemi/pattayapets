"use strict";
const fs = require("fs");
const path = require("path");
const dist = path.join(__dirname, "..", "dist");

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const files = walk(dist);
const longDesc = [];
const longTitle = [];
files.forEach(function (f) {
  const h = fs.readFileSync(f, "utf8");
  const rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (h.match(/name="description"\s+content="([^"]*)"/) ||
    h.match(/content="([^"]*)"\s+name="description"/) || [])[1];
  if (desc && desc.length > 160) longDesc.push({ rel, l: desc.length, desc });
  if (title && title.length > 60) longTitle.push({ rel, l: title.length, title });
});
longDesc.sort((a, b) => b.l - a.l);
longTitle.sort((a, b) => b.l - a.l);
console.log("longDesc:", longDesc.length);
longDesc.slice(0, 20).forEach(function (x) {
  console.log(" ", x.l, x.rel);
});
console.log("longTitle:", longTitle.length);
longTitle.slice(0, 20).forEach(function (x) {
  console.log(" ", x.l, x.rel);
});
