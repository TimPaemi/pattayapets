"use strict";
/* Pages with zero inbound internal links (discovery risk). Run after build. */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const SKIP = { "/404.html": 1, "/offline.html": 1, "/search.html": 1, "/sitemap.html": 1 };

function walk(dir, base, list) {
  base = base || dir;
  list = list || [];
  for (const n of fs.readdirSync(dir)) {
    const full = path.join(dir, n);
    if (fs.statSync(full).isDirectory()) walk(full, base, list);
    else if (n.endsWith(".html")) {
      list.push("/" + path.relative(base, full).replace(/\\/g, "/"));
    }
  }
  return list;
}

function toPath(href) {
  var t = href.split("#")[0].split("?")[0];
  if (t.endsWith("/")) t += "index.html";
  if (!t.endsWith(".html") && t !== "/") {
    if (fs.existsSync(path.join(dist, t.slice(1) + ".html"))) return t + ".html";
    if (fs.existsSync(path.join(dist, t.slice(1), "index.html"))) return t + "/index.html";
  }
  return t;
}

var files = walk(dist);
var paths = {};
files.forEach(function (f) { paths[f] = 0; });
if (paths["/index.html"]) paths["/"] = paths["/index.html"];

files.forEach(function (f) {
  var html = fs.readFileSync(path.join(dist, f), "utf8");
  var re = /href="(\/[^"]+)"/g;
  var m;
  while ((m = re.exec(html))) {
    var target = toPath(m[1]);
    if (paths[target] !== undefined) paths[target]++;
    else if (target.endsWith("/index.html")) {
      var alt = target.replace("/index.html", "/");
      if (paths[alt] !== undefined) paths[alt]++;
    }
  }
});

var orphans = Object.keys(paths).filter(function (p) {
  return !SKIP[p] && p !== "/index.html" && paths[p] === 0;
}).sort();

console.log("HTML pages:", files.length);
console.log("Orphans (0 inbound internal links):", orphans.length);
orphans.forEach(function (p) { console.log(" ", p); });
process.exit(orphans.length ? 1 : 0);
