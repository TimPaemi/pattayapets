#!/usr/bin/env node
"use strict";
/* Resolve internal links, assets, relative URLs and fragments against dist/. */

const fs = require("fs");
const path = require("path");

const DIST = process.env.PP_DIST ? path.resolve(process.env.PP_DIST) : path.join(__dirname, "..", "dist");
const ORIGIN = "https://pattayapets.com";

function walk(dir, base, out) {
  base = base || dir;
  out = out || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) throw new Error("Symlink is not allowed in dist: " + full);
    if (stat.isDirectory()) walk(full, base, out);
    else out.push(path.relative(base, full).replace(/\\/g, "/"));
  }
  return out;
}

function routeForFile(file) {
  if (file === "index.html") return "/";
  if (file.endsWith("/index.html")) return "/" + file.slice(0, -"index.html".length);
  return "/" + file;
}

function candidates(pathname) {
  let decoded;
  try { decoded = decodeURIComponent(pathname); }
  catch (error) { return []; }
  const rel = decoded.replace(/^\/+/, "");
  if (!rel) return ["index.html"];
  if (decoded.endsWith("/")) return [rel + "index.html"];
  return [rel, rel + ".html", rel + "/index.html"];
}

function targetFile(files, pathname) {
  return candidates(pathname).find(function (candidate) { return files.has(candidate); }) || null;
}

function idsFor(file, cache) {
  if (cache.has(file)) return cache.get(file);
  const html = fs.readFileSync(path.join(DIST, ...file.split("/")), "utf8");
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)\s*=\s*(?:"([^"]+)"|'([^']+)')/gi)) ids.add(match[1] || match[2]);
  cache.set(file, ids);
  return ids;
}

if (!fs.existsSync(DIST)) {
  console.error("Link audit: FAIL - output directory is missing: " + DIST);
  process.exit(1);
}

const files = new Set(walk(DIST));
const htmlFiles = [...files].filter(function (file) { return file.endsWith(".html"); }).sort();
const idCache = new Map();
const findings = [];
let checked = 0;

htmlFiles.forEach(function (sourceFile) {
  const html = fs.readFileSync(path.join(DIST, ...sourceFile.split("/")), "utf8");
  const values = [];
  for (const match of html.matchAll(/\s(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) values.push(match[1] || match[2]);
  for (const match of html.matchAll(/\ssrcset\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
    String(match[1] || match[2]).split(",").forEach(function (candidate) {
      const value = candidate.trim().split(/\s+/)[0];
      if (value) values.push(value);
    });
  }

  values.forEach(function (raw) {
    if (!raw || /^(?:data|mailto|tel|javascript):/i.test(raw)) return;
    let url;
    try { url = new URL(raw, ORIGIN + routeForFile(sourceFile)); }
    catch (error) {
      findings.push(sourceFile + " -> malformed URL " + JSON.stringify(raw));
      return;
    }
    if (url.origin !== ORIGIN) return;
    checked++;
    const target = targetFile(files, url.pathname);
    if (!target) {
      findings.push(sourceFile + " -> missing " + raw);
      return;
    }
    if (url.hash && url.hash !== "#" && target.endsWith(".html")) {
      let fragment;
      try { fragment = decodeURIComponent(url.hash.slice(1)); }
      catch (error) {
        findings.push(sourceFile + " -> malformed fragment " + raw);
        return;
      }
      if (fragment && !idsFor(target, idCache).has(fragment)) {
        findings.push(sourceFile + " -> missing fragment " + raw + " in " + target);
      }
    }
  });
});

if (findings.length) {
  console.error("Link audit: FAIL (" + findings.length + " broken target(s))");
  findings.forEach(function (finding) { console.error("BROKEN  " + finding); });
  process.exit(1);
}
console.log("Link audit: PASS (" + checked + " internal link/asset references across " + htmlFiles.length + " pages)");
