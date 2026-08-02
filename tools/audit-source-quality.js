"use strict";

/*
 * Source-level quality gate. Build-output audits cannot catch duplicate object
 * keys, malformed source metadata, or two source modules declaring the same
 * route before the renderer normalises them.
 */

const fs = require("fs");
const path = require("path");
const acorn = require("acorn");

const ROOT = path.join(__dirname, "..");
const SOURCE_DIRS = ["src", "tools", "scripts"];
const TOP_LEVEL_JS = ["build.js"];
const todayArg = process.argv.find(function (arg) { return arg.indexOf("--today=") === 0; });
const TODAY = todayArg ? todayArg.slice("--today=".length) : new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(TODAY)) {
  throw new Error("--today must be YYYY-MM-DD");
}

function walk(dir, out) {
  out = out || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(absolute, out);
    else if (entry.isFile() && entry.name.endsWith(".js")) out.push(absolute);
  }
  return out;
}

function rel(file) {
  return path.relative(ROOT, file).replace(/\\/g, "/");
}

function lineAt(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function staticKey(property) {
  if (property.computed || property.type === "SpreadElement" || !property.key) return null;
  if (property.key.type === "Identifier") return property.key.name;
  if (property.key.type === "Literal") return String(property.key.value);
  return null;
}

function visit(node, source, file, issues) {
  if (!node || typeof node !== "object") return;
  if (node.type === "ObjectExpression") {
    const seen = new Map();
    for (const property of node.properties || []) {
      const key = staticKey(property);
      if (key == null) continue;
      if (seen.has(key)) {
        issues.push(rel(file) + ":" + lineAt(source, property.start) +
          " duplicate object key " + JSON.stringify(key) +
          " (first at line " + lineAt(source, seen.get(key).start) + ")");
      } else {
        seen.set(key, property);
      }
    }
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(function (child) { visit(child, source, file, issues); });
    else if (value && typeof value === "object" && typeof value.type === "string") {
      visit(value, source, file, issues);
    }
  }
}

function balanced(value) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const char of String(value || "")) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else if (pairs[char] && stack.pop() !== pairs[char]) return false;
  }
  return stack.length === 0 &&
    (String(value || "").match(/[“”]/g) || []).length % 2 === 0;
}

function loadPages() {
  const pageDir = path.join(ROOT, "src", "pages");
  const pages = [];
  for (const name of fs.readdirSync(pageDir).sort()) {
    if (!name.endsWith(".js")) continue;
    const mod = require(path.join(pageDir, name));
    const entries = Array.isArray(mod) ? mod : (mod.pages || []);
    for (const page of entries) pages.push({ page: page, file: "src/pages/" + name });
  }
  return pages;
}

const syntaxIssues = [];
const duplicateKeyIssues = [];
const jsFiles = SOURCE_DIRS.flatMap(function (dir) { return walk(path.join(ROOT, dir)); })
  .concat(TOP_LEVEL_JS.map(function (name) { return path.join(ROOT, name); }))
  .sort();

for (const file of jsFiles) {
  const source = fs.readFileSync(file, "utf8");
  try {
    const tree = acorn.parse(source, {
      ecmaVersion: "latest",
      sourceType: "script",
      allowHashBang: true
    });
    visit(tree, source, file, duplicateKeyIssues);
  } catch (error) {
    syntaxIssues.push(rel(file) + ":" + (error.loc ? error.loc.line : 1) + " " + error.message);
  }
}

const metadataIssues = [];
const routeMap = new Map();
const titleMap = new Map();
const descriptionMap = new Map();
let pages = [];
try {
  pages = loadPages();
} catch (error) {
  metadataIssues.push("page modules could not be loaded: " + error.message);
}

for (const record of pages) {
  const page = record.page || {};
  const where = record.file + " (" + (page.path || "missing path") + ")";
  if (!/^\/(?:$|[^?#]*)$/.test(String(page.path || ""))) {
    metadataIssues.push(where + " has an invalid route path");
  } else if (routeMap.has(page.path)) {
    metadataIssues.push(where + " duplicates route declared in " + routeMap.get(page.path));
  } else {
    routeMap.set(page.path, record.file);
  }

  const title = String(page.title || "").trim();
  const description = String(page.description || "").trim();
  if (title.length < 10 || title.length > 60) {
    metadataIssues.push(where + " title length is " + title.length + " (required 10-60)");
  }
  if (description.length < 50 || description.length > 160) {
    metadataIssues.push(where + " description length is " + description.length + " (required 50-160)");
  }
  if (!balanced(title)) metadataIssues.push(where + " title has unbalanced punctuation");
  if (!balanced(description)) metadataIssues.push(where + " description has unbalanced punctuation");
  if (/\bundefined\b|\[object Object\]/i.test(title + " " + description)) {
    metadataIssues.push(where + " contains a serialization placeholder");
  }
  if (title) {
    if (titleMap.has(title)) metadataIssues.push(where + " duplicates title from " + titleMap.get(title));
    else titleMap.set(title, where);
  }
  if (description) {
    if (descriptionMap.has(description)) {
      metadataIssues.push(where + " duplicates description from " + descriptionMap.get(description));
    } else descriptionMap.set(description, where);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(page.updated || ""))) {
    metadataIssues.push(where + " has no valid reviewed date");
  } else if (page.updated > TODAY) {
    metadataIssues.push(where + " has a future reviewed date " + page.updated);
  }
}

try {
  const richness = require(path.join(ROOT, "src", "data", "richness-blocks.js"));
  const exported = Object.keys(richness).sort();
  if (exported.join(",") !== "mergeFaqs") {
    metadataIssues.push("src/data/richness-blocks.js may export only mergeFaqs; found " + exported.join(", "));
  }
} catch (error) {
  metadataIssues.push("richness helper could not be loaded: " + error.message);
}

function printGroup(label, issues) {
  console.log(label + ": " + issues.length);
  issues.slice(0, 50).forEach(function (issue) { console.log("  " + issue); });
  if (issues.length > 50) console.log("  ... +" + (issues.length - 50));
}

console.log("SOURCE QUALITY AUDIT");
console.log("=".repeat(52));
console.log("JavaScript files parsed:", jsFiles.length);
console.log("Source pages loaded:", pages.length);
printGroup("Syntax failures", syntaxIssues);
printGroup("Duplicate object keys", duplicateKeyIssues);
printGroup("Route/metadata failures", metadataIssues);

const failures = syntaxIssues.length + duplicateKeyIssues.length + metadataIssues.length;
console.log(failures ? "FAIL — source quality gate failed" : "PASS — source syntax, keys, routes, and metadata are clean");
process.exit(failures ? 1 : 0);
