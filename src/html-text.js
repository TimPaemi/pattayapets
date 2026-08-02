"use strict";

const ENTITIES = Object.freeze({
  amp: "&", apos: "'", gt: ">", lt: "<", quot: '"', nbsp: " ",
  mdash: "—", ndash: "–", hellip: "…", middot: "·", bull: "•",
  lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”",
  le: "≤", ge: "≥", times: "×", rarr: "→", darr: "↓",
  auml: "ä", copy: "©", deg: "°"
});

function decodeEntity(match, token) {
  if (token[0] === "#") {
    var hex = token[1] && token[1].toLowerCase() === "x";
    var value = parseInt(token.slice(hex ? 2 : 1), hex ? 16 : 10);
    return Number.isFinite(value) ? String.fromCodePoint(value) : match;
  }
  var key = token.toLowerCase();
  return Object.prototype.hasOwnProperty.call(ENTITIES, key) ? ENTITIES[key] : match;
}

function htmlToText(value) {
  return String(value == null ? "" : value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#x?[0-9a-f]+|[a-z][a-z0-9]+);/gi, decodeEntity)
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = { htmlToText };
