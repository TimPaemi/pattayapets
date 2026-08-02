"use strict";
/**
 * Deterministic WCAG-oriented markup gate for generated pages.
 * This protects structural properties a browser score can miss or sample only.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const findings = [];
const totals = { pages: 0, images: 0, links: 0, controls: 0, tables: 0 };

function walk(dir, out) {
  out = out || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (entry.name.endsWith(".html")) out.push(file);
  }
  return out;
}

function attr(tag, name) {
  const match = tag.match(new RegExp("\\s" + name + "\\s*=\\s*([\"'])([\\s\\S]*?)\\1", "i"));
  return match ? match[2] : null;
}

function textContent(value) {
  return String(value || "")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|zwnj|zwj);|&#(?:8204|8205);/gi, " ")
    .replace(/&[^;]+;/g, "x")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAccessibleName(tag, inner) {
  if (attr(tag, "aria-label") || attr(tag, "aria-labelledby") || attr(tag, "title")) return true;
  if (textContent(inner)) return true;
  return /<img\b[^>]*\balt\s*=\s*(["'])[^"']+\1/i.test(inner || "");
}

function add(route, code, detail) {
  findings.push(route + " [" + code + "] " + detail);
}

if (!fs.existsSync(DIST)) {
  console.error("Accessibility static audit: dist/ missing; run npm run build first");
  process.exit(1);
}

for (const file of walk(DIST)) {
  const route = "/" + path.relative(DIST, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf8");
  const structural = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "");
  totals.pages += 1;

  if (!/<html\b[^>]*\blang\s*=\s*(["'])[^"']+\1/i.test(structural)) {
    add(route, "HTML_LANG", "html element needs a non-empty lang attribute");
  }
  const mains = structural.match(/<main\b[^>]*>/gi) || [];
  if (mains.length !== 1 || attr(mains[0] || "", "id") !== "main") {
    add(route, "MAIN", "expected exactly one <main id=\"main\">");
  }
  if (!/<a\b[^>]*\bclass\s*=\s*(["'])[^"']*\bskip-link\b[^"']*\1[^>]*\bhref\s*=\s*(["'])#main\2/i.test(structural) &&
      !/<a\b[^>]*\bhref\s*=\s*(["'])#main\1[^>]*\bclass\s*=\s*(["'])[^"']*\bskip-link\b[^"']*\2/i.test(structural)) {
    add(route, "SKIP_LINK", "missing skip-link to #main");
  }

  const headings = [...structural.matchAll(/<h([1-6])\b[^>]*>/gi)].map(function (match) {
    return Number(match[1]);
  });
  if (headings.filter(function (level) { return level === 1; }).length !== 1) {
    add(route, "H1", "expected exactly one h1");
  }
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] > headings[index - 1] + 1) {
      add(route, "HEADING_ORDER", "heading level jumps h" + headings[index - 1] + " to h" + headings[index]);
      break;
    }
  }

  const ids = [...structural.matchAll(/\sid\s*=\s*(["'])([^"']+)\1/gi)].map(function (match) {
    return match[2];
  });
  const idSet = new Set();
  ids.forEach(function (id) {
    if (idSet.has(id)) add(route, "DUPLICATE_ID", "duplicate id=\"" + id + "\"");
    idSet.add(id);
  });
  for (const match of structural.matchAll(/\saria-(?:labelledby|describedby|controls)\s*=\s*(["'])([^"']+)\1/gi)) {
    match[2].trim().split(/\s+/).filter(Boolean).forEach(function (id) {
      if (!idSet.has(id)) add(route, "ARIA_REFERENCE", "ARIA reference has no matching id: " + id);
    });
  }

  for (const match of structural.matchAll(/<img\b[^>]*>/gi)) {
    totals.images += 1;
    const tag = match[0];
    if (attr(tag, "alt") === null) add(route, "IMAGE_ALT", "image missing alt attribute");
    if (!attr(tag, "width") || !attr(tag, "height")) add(route, "IMAGE_SIZE", "image missing width or height");
  }

  for (const match of structural.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    totals.links += 1;
    const tag = "<a" + match[1] + ">";
    if (!hasAccessibleName(tag, match[2])) add(route, "LINK_NAME", "link has no accessible name");
  }
  for (const match of structural.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    totals.controls += 1;
    const tag = "<button" + match[1] + ">";
    if (!hasAccessibleName(tag, match[2])) add(route, "CONTROL_NAME", "button has no accessible name");
  }
  for (const match of structural.matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
    const tag = match[0];
    if (/^<input\b/i.test(tag) && String(attr(tag, "type") || "").toLowerCase() === "hidden") continue;
    totals.controls += 1;
    const id = attr(tag, "id");
    const named = attr(tag, "aria-label") || attr(tag, "aria-labelledby") || attr(tag, "title") ||
      (id && new RegExp("<label\\b[^>]*\\bfor\\s*=\\s*([\"'])" + id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\1", "i").test(structural));
    if (!named) add(route, "CONTROL_NAME", match[1].toLowerCase() + " has no accessible label");
    const autocomplete = attr(tag, "autocomplete");
    if (autocomplete && !/^(?:on|off|section-[a-z0-9_-]+|shipping|billing|home|work|mobile|fax|pager|name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix|nickname|username|new-password|current-password|one-time-code|organization-title|organization|street-address|address-line[123]|address-level[1-4]|country|country-name|postal-code|cc-name|cc-given-name|cc-additional-name|cc-family-name|cc-number|cc-exp|cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount|language|bday|bday-day|bday-month|bday-year|sex|url|photo|email|impp|tel|tel-country-code|tel-national|tel-area-code|tel-local|tel-local-prefix|tel-local-suffix|tel-extension)$/i.test(autocomplete)) {
      add(route, "AUTOCOMPLETE", "invalid autocomplete token: " + autocomplete);
    }
  }

  for (const match of structural.matchAll(/<form\b[^>]*\brole\s*=\s*(["'])search\1[^>]*>/gi)) {
    if (!attr(match[0], "aria-label") && !attr(match[0], "aria-labelledby")) {
      add(route, "SEARCH_LANDMARK_NAME", "search landmark has no accessible name");
    }
  }

  for (const match of structural.matchAll(/<table\b[\s\S]*?<\/table>/gi)) {
    totals.tables += 1;
    for (const header of match[0].matchAll(/<th\b[^>]*>/gi)) {
      if (!/\bscope\s*=\s*(["'])(?:row|col|rowgroup|colgroup)\1/i.test(header[0])) {
        add(route, "TABLE_SCOPE", "table header missing a valid scope attribute");
      }
    }
  }
  for (const match of structural.matchAll(/<details\b[\s\S]*?<\/details>/gi)) {
    if (!/<summary\b/i.test(match[0])) add(route, "DETAILS_SUMMARY", "details element missing summary");
  }
  for (const match of structural.matchAll(/<iframe\b[^>]*>/gi)) {
    if (!attr(match[0], "title")) add(route, "IFRAME_TITLE", "iframe missing title");
  }
}

console.log("Static accessibility audit");
console.log("=".repeat(56));
console.log("Pages:    " + totals.pages);
console.log("Images:   " + totals.images);
console.log("Links:    " + totals.links);
console.log("Controls: " + totals.controls);
console.log("Tables:   " + totals.tables);
console.log("HARD:     " + findings.length);
findings.slice(0, 100).forEach(function (finding) { console.error("  " + finding); });
if (findings.length > 100) console.error("  ... " + (findings.length - 100) + " additional findings");

if (findings.length) {
  console.error("FAIL - generated accessibility structure has hard failures");
  process.exitCode = 1;
} else {
  console.log("PASS - generated accessibility structure is clean");
}
