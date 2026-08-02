#!/usr/bin/env node
"use strict";
/* Hardcoded PattayaPets network/entity gate. This repository must stand alone. */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const TEXT_EXT = new Set(["", ".css", ".html", ".js", ".json", ".md", ".mjs", ".txt", ".webmanifest", ".xml", ".yml", ".yaml"]);
const EXCLUDED_DIRS = new Set([
  ".git", ".artifacts", ".cache", ".wrangler", "node_modules", "lighthouse-reports", "_to_delete"
]);
const TRANSIENT_ROOT_FILES = /^(?:lh-tmp\.json|lighthouse-(?:audit|.+)\.(?:json|txt))$/i;
const EVIDENCE_ALLOWLIST = [
  /^RULES\.md$/,
  /^docs\/(?:FULL-AUDIT(?:-BRIEF|-\d{4}-\d{2})?|AUDIT-\d{4}-\d{2})\.md$/,
  /^research\//
];
const DEFENSIVE_IDENTITY_ALLOWLIST = new Set([
  "scripts/network-gate.js",
  "tools/deploy.mjs",
  "tools/audit-invariants.js"
]);
const DEFENSIVE_RATING_ALLOWLIST = new Set([
  "scripts/network-gate.js",
  "tools/audit-invariants.js",
  "src/pages/30-directory.js",
  "docs/visit-delegate-kit/README.md",
  "AUTOPILOT.md",
  "AUTOPILOT-PASTE.txt"
]);
const FORBIDDEN_IDENTITIES = [
  /pattaya[- ]school[- ]guide/gi,
  /pattaya[- ]authority/gi,
  /pattaya[- ]afterdark/gi,
  /pattayaafterdark\.com/gi,
  /mrweoutside\.com/gi,
  /pattayaolympian\.com/gi,
  /pattayapersonaltrainer\.com/gi,
  /yannispagiannidis\.com/gi,
  /pattaya[\s._-]*expat[\s._-]*hub(?:\.com)?/gi,
  /pattaya[\s._-]*food[\s._-]*guide(?:\.com)?/gi,
  /pattaya[\s._-]*health[\s._-]*hub(?:\.com)?/gi
];
const FORBIDDEN_NETWORK_WORDING = [
  /\bsister (?:sites?|publications?)\b/gi,
  /\bTimPaemi (?:publishing )?network\b/gi
];
const EXPECTED_SOCIALS = [
  "https://www.youtube.com/@timpaemi",
  "https://www.instagram.com/timpaemi/",
  "https://www.tiktok.com/@timpaemi.com",
  "https://www.facebook.com/timpaemi"
].sort();
const SITE_PERSON_IDS = [
  "https://timpaemi.com/#tim",
  "https://timpaemi.com/#paemi"
];

function walk(dir, out) {
  out = out || [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const file = rel(full);
    if (entry.isDirectory() && (EXCLUDED_DIRS.has(entry.name) ||
        /^\.?audit-dist(?:[-_.].*)?$/i.test(entry.name) ||
        /^\..*\.(?:stage|backup)-/i.test(entry.name) || file === "tools/shots")) continue;
    if (!entry.isDirectory() && path.dirname(full) === ROOT && TRANSIENT_ROOT_FILES.test(entry.name)) continue;
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) throw new Error("Symlink is not allowed in gate scope: " + full);
    if (stat.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function rel(file) { return path.relative(ROOT, file).replace(/\\/g, "/"); }
function lineOf(text, offset) { return text.slice(0, offset).split(/\r?\n/).length; }
function allowedEvidence(file) { return EVIDENCE_ALLOWLIST.some(function (pattern) { return pattern.test(file); }); }

function addMatches(findings, file, text, label, regexes) {
  regexes.forEach(function (original) {
    const regex = new RegExp(original.source, original.flags);
    let match;
    while ((match = regex.exec(text))) {
      findings.push(file + ":" + lineOf(text, match.index) + " " + label + ": " + JSON.stringify(match[0]));
      if (!match[0].length) regex.lastIndex++;
    }
  });
}

function attrs(tag) {
  const out = {};
  const regex = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let match;
  while ((match = regex.exec(tag))) out[match[1].toLowerCase()] = match[2] || match[3] || match[4] || "";
  return out;
}

function objects(value, out) {
  out = out || [];
  if (!value || typeof value !== "object") return out;
  if (Array.isArray(value)) value.forEach(function (item) { objects(item, out); });
  else {
    out.push(value);
    Object.keys(value).forEach(function (key) { objects(value[key], out); });
  }
  return out;
}

function validateHtml(file, html, findings) {
  const authorLinks = [...html.matchAll(/<a\b[^>]*>/gi)].map(function (match) { return attrs(match[0]); })
    .filter(function (a) {
      try { return a.href && new URL(a.href).hostname.toLowerCase() === "timpaemi.com"; }
      catch (error) { return false; }
    });
  if (authorLinks.length !== 1) findings.push(file + ": expected exactly one timpaemi.com author link; found " + authorLinks.length);
  else {
    const link = authorLinks[0];
    const relTokens = new Set(String(link.rel || "").toLowerCase().split(/\s+/));
    if (link.href !== "https://timpaemi.com/" || !relTokens.has("author") || !relTokens.has("noopener")) {
      findings.push(file + ": author link must be https://timpaemi.com/ with rel=\"author noopener\"");
    }
  }

  const nodes = [];
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { objects(JSON.parse(match[1]), nodes); }
    catch (error) { findings.push(file + ": invalid JSON-LD: " + error.message); }
  }
  const expected = [
    ["https://timpaemi.com/#tim", "Person", "Tim"],
    ["https://timpaemi.com/#paemi", "Person", "Paemi"],
    ["https://timpaemi.com/#timpaemi", "Organization", "TimPaemi"]
  ];
  expected.forEach(function (item) {
    const matches = nodes.filter(function (node) { return node["@id"] === item[0]; });
    if (!matches.length) findings.push(file + ": missing entity node " + item[0]);
    const definitions = matches.filter(function (node) {
      return Object.prototype.hasOwnProperty.call(node, "@type") ||
        Object.prototype.hasOwnProperty.call(node, "name");
    });
    if (!definitions.length) findings.push(file + ": missing entity definition " + item[0]);
    definitions.forEach(function (node) {
      const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
      if (!types.includes(item[1]) || node.name !== item[2]) findings.push(file + ": malformed entity node " + item[0]);
    });
  });

  const webPage = nodes.find(function (node) { return node["@type"] === "WebPage"; });
  const creators = webPage && Array.isArray(webPage.creator)
    ? webPage.creator.map(function (item) { return item && item["@id"]; }).sort()
    : [];
  if (JSON.stringify(creators) !== JSON.stringify(SITE_PERSON_IDS.slice().sort())) {
    findings.push(file + ": WebPage creator must reference Tim and Paemi");
  }
  if (!webPage || !webPage.copyrightHolder ||
      webPage.copyrightHolder["@id"] !== "https://timpaemi.com/#timpaemi") {
    findings.push(file + ": WebPage copyrightHolder must reference TimPaemi");
  }
  nodes.filter(function (node) { return node["@type"] === "Article"; }).forEach(function (article) {
    const authorIds = Array.isArray(article.author)
      ? article.author.map(function (item) { return item && item["@id"]; }).sort()
      : [];
    if (JSON.stringify(authorIds) !== JSON.stringify(SITE_PERSON_IDS.slice().sort())) {
      findings.push(file + ": Article author must reference Tim and Paemi");
    }
  });

  const fullEntityFiles = new Set([
    "dist/index.html"
  ]);
  if (fullEntityFiles.has(file)) {
    const publisher = nodes.find(function (node) { return node["@id"] === "https://timpaemi.com/#timpaemi" && node.legalName; });
    if (!publisher || publisher.legalName !== "TIMPAEMI CO., LTD.") findings.push(file + ": entity page lacks the full legal publisher node");
    const socialNode = nodes.find(function (node) {
      return node["@id"] === "https://timpaemi.com/#timpaemi" && Array.isArray(node.sameAs);
    });
    const socials = socialNode ? socialNode.sameAs.slice().sort() : [];
    if (JSON.stringify(socials) !== JSON.stringify(EXPECTED_SOCIALS)) {
      findings.push(file + ": publisher sameAs must contain exactly the four approved social profiles");
    }
    SITE_PERSON_IDS.forEach(function (id) {
      const person = nodes.find(function (node) {
        return node["@id"] === id && node["@type"] === "Person" && node.spouse && node.worksFor;
      });
      if (!person) findings.push(file + ": entity page lacks the full married-team Person node " + id);
    });
  } else {
    const expanded = nodes.filter(function (node) {
      if (!expected.some(function (item) { return node["@id"] === item[0]; })) return false;
      return Object.prototype.hasOwnProperty.call(node, "legalName") ||
        Object.prototype.hasOwnProperty.call(node, "sameAs") ||
        Object.prototype.hasOwnProperty.call(node, "jobTitle") ||
        Object.prototype.hasOwnProperty.call(node, "spouse") ||
        Object.prototype.hasOwnProperty.call(node, "worksFor");
    });
    if (expanded.length) findings.push(file + ": full entity properties are homepage-only; compact nodes required here");
  }
}

function main() {
  const findings = [];
  const warnings = [];
  const files = walk(ROOT);
  files.forEach(function (full) {
    const file = rel(full);
    if (!TEXT_EXT.has(path.extname(file).toLowerCase()) || allowedEvidence(file)) return;
    const bytes = fs.readFileSync(full);
    if (bytes.includes(0)) return;
    const content = bytes.toString("utf8");
    if (!DEFENSIVE_IDENTITY_ALLOWLIST.has(file)) {
      addMatches(findings, file, content, "forbidden identity", FORBIDDEN_IDENTITIES);
      addMatches(findings, file, content, "forbidden network wording", FORBIDDEN_NETWORK_WORDING);
    }
    if (!DEFENSIVE_RATING_ALLOWLIST.has(file)) {
      addMatches(findings, file, content, "aggregateRating is prohibited", [/aggregateRating/gi]);
    }
  });

  const contactScope = files.filter(function (full) {
    const file = rel(full);
    return /^(?:src\/(?:layout|site-config|pages\/10-structural)\.js|src\/static\/\.well-known\/security\.txt|docs\/(?:launch-and-maintenance|distribution\/social-kit|visit-delegate-kit\/[^/]+)\.md|dist\/(?:about|contact|corrections|masthead|privacy|standards)\.html|dist\/\.well-known\/security\.txt)$/.test(file);
  });
  let ownContactFound = false;
  const configuredContactFiles = new Set([
    "src/site-config.js",
    "dist/.well-known/security.txt",
    "dist/about.html", "dist/contact.html", "dist/corrections.html",
    "dist/masthead.html", "dist/privacy.html", "dist/standards.html"
  ]);
  contactScope.forEach(function (full) {
    const file = rel(full);
    const content = fs.readFileSync(full, "utf8");
    if (/info@pattayapets\.com/i.test(content)) ownContactFound = true;
    if (!configuredContactFiles.has(file)) {
      addMatches(findings, file, content, "uncentralized interim site contact", [/hello@pattayapets\.com/gi]);
    }
  });
  const siteConfig = fs.readFileSync(path.join(ROOT, "src", "site-config.js"), "utf8");
  const configuredEmail = (siteConfig.match(/\bemail\s*:\s*["']([^"']+)["']/) || [])[1];
  const deliveryPending = /contactDeliveryStatus\s*:\s*["']operator-verification-required["']/.test(siteConfig);
  const securityTemplate = fs.readFileSync(path.join(ROOT, "src", "static", ".well-known", "security.txt"), "utf8");
  if ((securityTemplate.match(/\{\{CONTACT_EMAIL\}\}/g) || []).length !== 1) {
    findings.push("src/static/.well-known/security.txt: Contact must contain exactly one {{CONTACT_EMAIL}} token");
  }
  const builtSecurityPath = path.join(DIST, ".well-known", "security.txt");
  if (fs.existsSync(builtSecurityPath) && configuredEmail) {
    const builtSecurity = fs.readFileSync(builtSecurityPath, "utf8");
    if (!builtSecurity.includes("Contact: mailto:" + configuredEmail)) {
      findings.push("dist/.well-known/security.txt: Contact does not match SITE.email");
    }
  }
  if (!ownContactFound) {
    if (deliveryPending && /email\s*:\s*["']hello@pattayapets\.com["']/.test(siteConfig)) {
      warnings.push("Rule 6 gap: info@pattayapets.com delivery is not operator-verified; centralized hello@ fallback remains active");
    } else {
      findings.push("publisher/contact scope: info@pattayapets.com is missing without an explicit operator-verification gap");
    }
  }

  if (!fs.existsSync(DIST)) findings.push("dist/: generated output is missing; per-page rules were not checked");
  else {
    const manifestPath = path.join(DIST, "build-manifest.json");
    if (!fs.existsSync(manifestPath)) findings.push("dist/build-manifest.json: missing route manifest");
    else {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      (manifest.routes || []).forEach(function (route) {
        const file = "dist/" + route.output;
        const full = path.join(DIST, ...String(route.output).split("/"));
        if (!fs.existsSync(full)) findings.push(file + ": route output missing");
        else validateHtml(file, fs.readFileSync(full, "utf8"), findings);
      });
    }
  }

  if (findings.length) {
    console.error("Network gate: FAIL (" + findings.length + " finding(s))");
    findings.forEach(function (finding) { console.error("- " + finding); });
    process.exit(1);
  }
  warnings.forEach(function (warning) { console.warn("Network gate: ADVISORY - " + warning); });
  console.log("Network gate: PASS (" + files.length +
    " authored/generated files considered; network wording, entity, author-link, rating and contact rules)");
}

try { main(); }
catch (error) {
  console.error("Network gate: FAIL\n- " + error.message);
  process.exit(1);
}
