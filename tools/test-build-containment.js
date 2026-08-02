#!/usr/bin/env node
"use strict";
/* Exercise broad-target rejection and fail-before-publish retention. */

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build.js");
const TEST_OUT = path.join(ROOT, "audit-dist-containment-test-" + process.pid);
const SENTINEL = path.join(TEST_OUT, "previous-output.txt");

function within(base, candidate) {
  const relative = path.relative(path.resolve(base), path.resolve(candidate));
  return relative !== "" && relative !== ".." && !relative.startsWith(".." + path.sep) && !path.isAbsolute(relative);
}

function run(output, extra) {
  return spawnSync(process.execPath, [BUILD], {
    cwd: ROOT,
    env: Object.assign({}, process.env, { PP_DIST: output }, extra || {}),
    encoding: "utf8",
    shell: false
  });
}

function cleanup() {
  const resolved = path.resolve(TEST_OUT);
  if (!within(ROOT, resolved) || !/^audit-dist-containment-test-\d+$/.test(path.basename(resolved))) {
    throw new Error("Refusing unsafe test cleanup target: " + resolved);
  }
  if (fs.existsSync(resolved)) fs.rmSync(resolved, { recursive: true, force: false });
}

try {
  const broadTargets = [ROOT, path.join(ROOT, "src"), path.dirname(ROOT)];
  broadTargets.forEach(function (target) {
    const result = run(target);
    if (result.status === 0 || !/Unsafe PP_DIST|protected output target/i.test(result.stdout + result.stderr)) {
      throw new Error("Build did not reject broad target: " + target);
    }
  });

  cleanup();
  fs.mkdirSync(TEST_OUT);
  fs.writeFileSync(SENTINEL, "previous release\n");
  const failed = run(TEST_OUT, { NODE_ENV: "test", PP_BUILD_FAILPOINT: "before-publish" });
  if (failed.status === 0) throw new Error("Intentional pre-publish failure unexpectedly succeeded");
  if (!fs.existsSync(SENTINEL) || fs.readFileSync(SENTINEL, "utf8") !== "previous release\n") {
    throw new Error("Previous output was not retained after staged build failure");
  }

  const success = run(TEST_OUT);
  if (success.status !== 0) throw new Error("Safe staged build failed:\n" + success.stdout + success.stderr);
  if (!fs.existsSync(path.join(TEST_OUT, "build-manifest.json")) || fs.existsSync(SENTINEL)) {
    throw new Error("Successful promotion did not replace the prior output exactly");
  }
  console.log("Build containment: PASS (broad targets rejected; failed stage retained old output; promotion exact)");
} catch (error) {
  console.error("Build containment: FAIL - " + error.message);
  process.exitCode = 1;
} finally {
  cleanup();
}
