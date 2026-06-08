"use strict";
/* One-off safe title shortening on title: lines only */
const fs = require("fs");
const path = require("path");

const files = [
  "src/pages/40-bring-pet.js",
  "src/pages/41-export.js",
  "src/pages/47-import-extra.js",
  "src/pages/50-import-countries.js",
  "src/pages/52-export-countries.js"
];

files.forEach(function (rel) {
  var fp = path.join(__dirname, "..", rel);
  var t = fs.readFileSync(fp, "utf8");
  var o = t;
  t = t.replace(/title: "Bring a Pet to Thailand from /g, 'title: "Bring Pet to Thailand from ');
  t = t.replace(/title: "Export a Pet from Thailand to /g, 'title: "Export Pet from Thailand to ');
  t = t.replace(/(title: "[^"]+)\([^)]*& DLD 2026\)/g, "$1(2026)");
  if (t !== o) {
    fs.writeFileSync(fp, t);
    console.log("updated", rel);
  }
});
