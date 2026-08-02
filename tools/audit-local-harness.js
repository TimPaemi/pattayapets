#!/usr/bin/env node
"use strict";

/* Self-contained loopback audit: prove deterministic builds, serve one immutable
 * output, run runtime budgets, and prove the repository was not mutated without
 * relying on git state. */

const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const ROOT_PARENT = path.dirname(ROOT);
const RUN_ID = String(process.pid);
const OUTPUT_A = path.join(ROOT_PARENT, "pattayapets-build-audit-" + RUN_ID + "-a");
const OUTPUT_B = path.join(ROOT_PARENT, "pattayapets-build-audit-" + RUN_ID + "-b");
const OWNED_OUTPUTS = new Set([path.resolve(OUTPUT_A), path.resolve(OUTPUT_B)]);
const records = [];
const MIME = {
  ".css": "text/css; charset=utf-8", ".gif": "image/gif", ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon", ".jpeg": "image/jpeg", ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json",
  ".webp": "image/webp", ".woff2": "font/woff2", ".xml": "application/xml; charset=utf-8"
};

function within(base, candidate) {
  const relative = path.relative(path.resolve(base), path.resolve(candidate));
  return relative !== "" && relative !== ".." && !relative.startsWith(".." + path.sep) &&
    !path.isAbsolute(relative);
}

function sha256(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function walk(dir, base, out, skipTopLevel) {
  base = base || dir;
  out = out || [];
  skipTopLevel = skipTopLevel || new Set();
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  entries.forEach(function (entry) {
    const full = path.join(dir, entry.name);
    const relative = path.relative(base, full).replace(/\\/g, "/");
    if (!relative.includes("/") && skipTopLevel.has(entry.name)) return;
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) {
      out.push({ path: relative, sha256: sha256("SYMLINK\0" + fs.readlinkSync(full)), bytes: 0 });
    } else if (stat.isDirectory()) {
      walk(full, base, out, skipTopLevel);
    } else if (stat.isFile()) {
      const content = fs.readFileSync(full);
      out.push({ path: relative, sha256: sha256(content), bytes: content.length });
    }
  });
  return out;
}

function ledger(dir) {
  return walk(dir).sort(function (a, b) { return a.path.localeCompare(b.path); });
}

function repositorySnapshot() {
  return walk(ROOT, ROOT, [], new Set([".git", "node_modules"])).sort(function (a, b) {
    return a.path.localeCompare(b.path);
  });
}

function treeHash(entries) {
  const digest = crypto.createHash("sha256");
  entries.forEach(function (entry) {
    digest.update(entry.path + "\0" + entry.bytes + "\0" + entry.sha256 + "\0");
  });
  return digest.digest("hex");
}

function compareLedgers(before, after) {
  const oldMap = new Map(before.map(function (entry) { return [entry.path, entry]; }));
  const newMap = new Map(after.map(function (entry) { return [entry.path, entry]; }));
  const changed = [];
  new Set([...oldMap.keys(), ...newMap.keys()]).forEach(function (file) {
    const a = oldMap.get(file);
    const b = newMap.get(file);
    if (!a) changed.push("added " + file);
    else if (!b) changed.push("removed " + file);
    else if (a.bytes !== b.bytes || a.sha256 !== b.sha256) changed.push("changed " + file);
  });
  return changed.sort();
}

function assertOwnedOutput(target) {
  const resolved = path.resolve(target);
  if (!OWNED_OUTPUTS.has(resolved) || path.dirname(resolved) !== ROOT_PARENT ||
      !new RegExp("^pattayapets-build-audit-" + RUN_ID + "-[ab]$").test(path.basename(resolved)) ||
      resolved === ROOT || resolved === path.parse(resolved).root || within(resolved, ROOT)) {
    throw new Error("Refusing unsafe harness output target: " + resolved);
  }
}

function removeOwnedOutput(target) {
  assertOwnedOutput(target);
  if (!fs.existsSync(target)) return;
  const stat = fs.lstatSync(target);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new Error("Refusing to recursively remove non-directory harness target: " + target);
  }
  fs.rmSync(target, { recursive: true, force: false });
}

function commandLabel(command, args) {
  return [command].concat(args).map(function (part) {
    return /\s/.test(part) ? JSON.stringify(part) : part;
  }).join(" ");
}

function runChild(label, command, args, options) {
  options = options || {};
  const started = Date.now();
  console.log("\n>>> " + label + ": " + commandLabel(command, args));
  return new Promise(function (resolve, reject) {
    const child = spawn(command, args, {
      cwd: ROOT,
      env: Object.assign({}, process.env, options.env || {}),
      shell: false,
      stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
      windowsHide: true
    });
    let stdout = "";
    let stderr = "";
    if (options.capture) {
      child.stdout.on("data", function (chunk) { stdout += chunk; });
      child.stderr.on("data", function (chunk) { stderr += chunk; });
    }
    child.once("error", function (error) {
      records.push({ label: label, status: null, signal: null, durationMs: Date.now() - started, error: error.message });
      reject(error);
    });
    child.once("exit", function (status, signal) {
      const record = { label: label, status: status, signal: signal, durationMs: Date.now() - started };
      records.push(record);
      if (status !== 0) {
        const detail = ((stdout + stderr).trim() || "no captured output").slice(0, 2000);
        reject(new Error(label + " exited " + status + (signal ? " (" + signal + ")" : "") + ": " + detail));
      } else {
        resolve({ stdout: stdout.trim(), stderr: stderr.trim(), record: record });
      }
    });
  });
}

function packageVersion(name) {
  const file = path.join(ROOT, "node_modules", ...name.split("/"), "package.json");
  if (!fs.existsSync(file)) return "missing";
  return JSON.parse(fs.readFileSync(file, "utf8")).version || "unknown";
}

function fileFor(serveRoot, rawUrl) {
  let pathname;
  try { pathname = decodeURIComponent(new URL(rawUrl, "http://127.0.0.1").pathname); }
  catch (error) { return null; }
  if (pathname.includes("\0") || pathname.includes("\\")) return null;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.some(function (part) { return part === "." || part === ".."; })) return null;
  if (!segments.length || pathname.endsWith("/")) segments.push("index.html");
  const candidate = path.resolve(serveRoot, ...segments);
  if (!within(serveRoot, candidate) || !fs.existsSync(candidate) || !fs.statSync(candidate).isFile()) return null;
  const real = fs.realpathSync(candidate);
  return within(serveRoot, real) ? real : null;
}

function createServer(serveRoot) {
  const realRoot = fs.realpathSync(serveRoot);
  if (realRoot !== path.resolve(serveRoot)) throw new Error("Harness output resolves through a link");
  return http.createServer(function (request, response) {
    if (!["GET", "HEAD"].includes(request.method || "")) {
      response.writeHead(405, { Allow: "GET, HEAD", "Content-Type": "text/plain; charset=utf-8" });
      response.end("Method not allowed");
      return;
    }
    const file = fileFor(realRoot, request.url || "/");
    if (!file) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", "X-Content-Type-Options": "nosniff" });
      response.end("404");
      return;
    }
    const headers = {
      "Cache-Control": "no-store",
      "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Content-Length": fs.statSync(file).size,
      "X-Content-Type-Options": "nosniff"
    };
    response.writeHead(200, headers);
    if (request.method === "HEAD") response.end();
    else fs.createReadStream(file).on("error", function () { response.destroy(); }).pipe(response);
  });
}

async function closeServer(server) {
  if (!server || !server.listening) return;
  await new Promise(function (resolve, reject) {
    server.close(function (error) { if (error) reject(error); else resolve(); });
  });
}

async function main() {
  [OUTPUT_A, OUTPUT_B].forEach(function (target) {
    assertOwnedOutput(target);
    if (fs.existsSync(target)) throw new Error("Unique harness output already exists: " + target);
  });
  const before = repositorySnapshot();
  const beforeHash = treeHash(before);
  let server = null;
  let primaryError = null;
  try {
    const npmCliCandidates = [
      process.env.npm_execpath,
      path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js")
    ].filter(Boolean);
    const npmCli = npmCliCandidates.find(function (candidate) { return fs.existsSync(candidate); });
    if (!npmCli) throw new Error("Locked npm CLI could not be located for version recording");
    const npmVersion = await runChild("npm-version", process.execPath, [npmCli, "--version"], { capture: true });
    console.log("Runtime/tool versions:");
    console.log("  node " + process.version + " | " + process.platform + " " + process.arch);
    console.log("  npm " + npmVersion.stdout);
    console.log("  lighthouse " + packageVersion("lighthouse"));
    console.log("  puppeteer-core " + packageVersion("puppeteer-core"));
    console.log("  clean-css " + packageVersion("clean-css"));
    console.log("  acorn " + packageVersion("acorn"));
    console.log("Repository snapshot: " + before.length + " files, " + beforeHash);

    await runChild("build-a", process.execPath, [path.join(ROOT, "build.js")], {
      env: { PP_DIST: OUTPUT_A }
    });
    await runChild("build-b", process.execPath, [path.join(ROOT, "build.js")], {
      env: { PP_DIST: OUTPUT_B }
    });
    const ledgerA = ledger(OUTPUT_A);
    const ledgerB = ledger(OUTPUT_B);
    const differences = compareLedgers(ledgerA, ledgerB);
    if (differences.length) {
      throw new Error("Two-build determinism failed:\n- " + differences.slice(0, 20).join("\n- "));
    }
    const outputHash = treeHash(ledgerA);
    console.log("Determinism: PASS (" + ledgerA.length + " files, sha256 " + outputHash + ")");

    server = createServer(OUTPUT_A);
    await new Promise(function (resolve, reject) {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    const address = server.address();
    const base = "http://127.0.0.1:" + address.port;
    console.log("Loopback server: " + base + " (root " + OUTPUT_A + ")");
    await runChild("performance-budgets", process.execPath, [path.join(ROOT, "tools", "audit-performance-budgets.js")], {
      env: { PP_AUDIT_BASE: base, PP_AUDIT_DIST: OUTPUT_A }
    });
  } catch (error) {
    primaryError = error;
  } finally {
    try { await closeServer(server); }
    catch (error) { if (!primaryError) primaryError = error; }
    try {
      removeOwnedOutput(OUTPUT_A);
      removeOwnedOutput(OUTPUT_B);
    } catch (error) {
      if (!primaryError) primaryError = error;
    }
    const after = repositorySnapshot();
    const mutations = compareLedgers(before, after);
    if (mutations.length) {
      const mutationError = new Error("Repository mutation detected without git:\n- " + mutations.slice(0, 30).join("\n- "));
      if (!primaryError) primaryError = mutationError;
      else primaryError.message += "\n" + mutationError.message;
    } else {
      console.log("Repository non-mutation: PASS (" + after.length + " files, " + treeHash(after) + ")");
    }
    console.log("\nChild exits:");
    records.forEach(function (record) {
      console.log("  " + record.label + " status=" + String(record.status) +
        " signal=" + String(record.signal || "none") + " durationMs=" + record.durationMs +
        (record.error ? " error=" + record.error : ""));
    });
  }
  if (primaryError) throw primaryError;
  console.log("\nLocal audit harness: PASS");
}

main().catch(function (error) {
  console.error("\nLocal audit harness: FAIL\n- " + error.message);
  process.exit(1);
});
