#!/usr/bin/env node
"use strict";
/* Fail closed if generated markup requires CSP unsafe-inline. JSON-LD is data. */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const manifestPath = path.join(DIST, "build-manifest.json");
const findings = [];

function attributes(tag) {
  const out = {};
  const regex = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let match;
  while ((match = regex.exec(tag))) out[match[1].toLowerCase()] = match[2] || match[3] || match[4] || "";
  return out;
}

function inspect(file, html) {
  if (/<style\b/i.test(html)) findings.push(file + ": inline <style> element");
  if (/\sstyle\s*=/i.test(html)) findings.push(file + ": style attribute");
  if (/\son[a-z]+\s*=/i.test(html)) findings.push(file + ": inline event-handler attribute");
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attr = attributes(match[1]);
    const type = String(attr.type || "").toLowerCase();
    if (type === "application/ld+json") {
      try { JSON.parse(match[2]); }
      catch (error) { findings.push(file + ": invalid JSON-LD data block: " + error.message); }
    } else if (!attr.src) {
      findings.push(file + ": executable inline script");
    }
  }
}

try {
  if (!fs.existsSync(manifestPath)) throw new Error("dist/build-manifest.json is missing");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  let homeHtml = "";
  (manifest.routes || []).forEach(function (route) {
    const rel = String(route.output);
    const file = path.join(DIST, ...rel.split("/"));
    if (!fs.existsSync(file)) findings.push("dist/" + rel + ": missing route output");
    else {
      const html = fs.readFileSync(file, "utf8");
      inspect("dist/" + rel, html);
      if (route.path === "/") homeHtml = html;
    }
  });
  const headers = fs.readFileSync(path.join(DIST, "_headers"), "utf8");
  const csp = headers.split(/\r?\n/).find(function (line) { return /Content-Security-Policy:/i.test(line); }) || "";
  if (/'unsafe-inline'/i.test(csp)) findings.push("dist/_headers: CSP contains unsafe-inline");
  if (!/style-src-attr\s+'none'/i.test(csp)) findings.push("dist/_headers: CSP lacks style-src-attr 'none'");
  if (!/script-src-attr\s+'none'/i.test(csp)) findings.push("dist/_headers: CSP lacks script-src-attr 'none'");
  if (/google(?:tagmanager|-analytics)|analytics\.google/i.test(csp)) {
    findings.push("dist/_headers: dormant Google Analytics origin remains in CSP");
  }

  const cssFiles = (manifest.files || []).filter(function (file) {
    return /^assets\/css\/site\.[0-9a-f]{12}\.css$/.test(file.path);
  });
  const jsFiles = (manifest.files || []).filter(function (file) {
    return /^assets\/js\/site\.[0-9a-f]{12}\.js$/.test(file.path);
  });
  if (cssFiles.length !== 1 || jsFiles.length !== 1) {
    findings.push("build manifest: expected exactly one hashed site CSS and JavaScript asset");
  } else {
    const css = fs.readFileSync(path.join(DIST, ...cssFiles[0].path.split("/")), "utf8");
    const js = fs.readFileSync(path.join(DIST, ...jsFiles[0].path.split("/")), "utf8");
    if (!/\.nav\{[^}]*display:grid/i.test(css)) {
      findings.push("generated CSS: mobile navigation lacks a visible no-JavaScript default");
    }
    if (!/\.js\s+\.nav\{[^}]*display:none/i.test(css) ||
        !/\.js\s+\.nav\.open\{[^}]*display:flex/i.test(css)) {
      findings.push("generated CSS: collapsed navigation is not scoped to the .js enhancement class");
    }
    if (!/classList\.add\(["']js["']\)/.test(js)) {
      findings.push("generated JavaScript: enhancement class is not installed after menu setup");
    }
    if (/googletagmanager|google-analytics|\bgtag\b/i.test(js)) {
      findings.push("generated JavaScript: dormant Google Analytics loader remains");
    }
  }
  if (!homeHtml || !/id=["']primary-nav["']/i.test(homeHtml) ||
      !/class=["'][^"']*nav-toggle/i.test(homeHtml)) {
    findings.push("dist/index.html: progressive mobile navigation markup is incomplete");
  }
} catch (error) {
  findings.push(error.message);
}

if (findings.length) {
  console.error("CSP markup gate: FAIL (" + findings.length + " finding(s))");
  findings.forEach(function (finding) { console.error("- " + finding); });
  process.exit(1);
}
console.log("CSP markup gate: PASS (no executable inline script/style or handler attributes)");
