"use strict";
/* Area neighbourhood tiles with filtered directory shortcuts. */

const { BUSINESSES, CATEGORIES } = require("./data/businesses.js");

const AREA_TILE_CATS = [
  "vets", "groomers", "boarding", "pet-shops", "trainers", "mobile-vets"
];

const AREA_TILE_CHIP_LABEL = {
  vets: "Vets",
  groomers: "Groomers",
  boarding: "Boarding",
  "pet-shops": "Pet shops",
  trainers: "Trainers",
  "mobile-vets": "Mobile vets"
};

function areaTileHtml(name, slug, subFallback) {
  var list = BUSINESSES.filter(function (b) { return b.areas.indexOf(slug) !== -1; });
  var n = list.length;
  var sub = n
    ? n + (n === 1 ? " business listed" : " businesses listed")
    : subFallback;
  var tile = '<a class="tile" href="/area/' + slug + '.html">' +
    '<span class="tile-name">' + name + "</span>" +
    '<span class="tile-count">' + sub + "</span></a>";
  var chips = AREA_TILE_CATS.filter(function (ck) {
    return list.some(function (b) { return b.category === ck; });
  }).map(function (ck) {
    var cat = CATEGORIES[ck];
    var label = AREA_TILE_CHIP_LABEL[ck] || (cat ? cat.name : ck);
    var n = list.filter(function (b) { return b.category === ck; }).length;
    return '<a class="tile-sub chip chip-link" href="/' + ck + "/?filter=" +
      encodeURIComponent("area:" + slug) + '">' + label + " in " + name +
      " (" + n + ")</a>";
  }).join("");
  if (!chips) return tile;
  return '<div class="tile-wrap">' + tile + '<div class="tile-subs">' + chips + "</div></div>";
}

function areaChipLabel(ck) {
  if (AREA_TILE_CHIP_LABEL[ck]) return AREA_TILE_CHIP_LABEL[ck];
  var cat = CATEGORIES[ck];
  return cat ? cat.name : ck;
}

module.exports = { areaTileHtml, areaChipLabel };
