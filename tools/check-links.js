"use strict";
/* Internal link + asset checker. Run: PP_DIST=/tmp/ppdist node tools/check-links.js
   Scans every built HTML file for internal href/src targets and reports any
   that do not resolve to a file in the build output. Not part of the deploy. */

const fs = require("fs");
const path = require("path");

const DIST = process.env.PP_DIST ? path.resolve(process.env.PP_DIST)
  : path.join(__dirname, "..", "dist");

function walk(dir, base, list) {
  base = base || dir; list = list || [];
  for (const n of fs.readdirSync(dir)) {
    const full = path.join(dir, n);
    if (fs.statSync(full).isDirectory()) walk(full, base, list);
    else list.push(path.relative(base, full).replace(/\\/g, "/"));
  }
  return list;
}

function exists(files, target) {
  let t = target.split("#")[0].split("?")[0];
  if (!t.startsWith("/")) return true;          // external / relative — skip
  t = t.replace(/^\//, "");
  if (t === "" || t.endsWith("/")) t += "index.html";
  if (files.has(t)) return true;
  if (files.has(t + "/index.html")) return true;
  return false;
}

const files = new Set(walk(DIST));
const htmls = [...files].filter(function (f) { return f.endsWith(".html"); });
let broken = 0, checked = 0;

htmls.forEach(function (f) {
  const html = fs.readFileSync(path.join(DIST, f), "utf8");
  const re = /(?:href|src)="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const url = m[1];
    if (!url.startsWith("/")) continue;          // only internal absolute
    checked++;
    if (!exists(files, url)) {
      broken++;
      console.log("BROKEN  " + f + "  ->  " + url);
    }
  }
});

console.log("\nChecked " + checked + " internal links across " + htmls.length +
  " pages. Broken: " + broken);
process.exit(broken ? 1 : 0);
