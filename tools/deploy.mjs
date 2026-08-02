#!/usr/bin/env node
/**
 * Guarded deploy for pattayapets.
 *
 *   node tools/deploy.mjs            deploy dist/ to Cloudflare Pages
 *   node tools/deploy.mjs --dry-run  run every check, deploy nothing
 *
 * Exists because 27 July 2026: a hand-typed `--project-name` pointed at the
 * wrong Cloudflare project and pattayapets.com served the school guide for
 * 11.5 hours. The project name below is hardcoded and is never read from argv.
 *
 * .mjs on purpose: always parsed as ESM regardless of package.json "type".
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SRC = join(ROOT, 'src');

const PROJECT = 'pattayapets';        // <-- hardcoded. Do not parameterise.
const SITE = 'pattayapets.com';
const EXPECT_TITLE = 'PattayaPets | Pet Care, Local Services & Travel Guidance';
const EXPECT_CANONICAL = 'https://pattayapets.com/';
const BLOCK = ['pattaya-school-guide'];   // hard abort — the actual incident
const WARN = ['pattaya-authority'];       // report legacy identity residue

const DRY = process.argv.includes('--dry-run');
const problems = [];
const warnings = [];
const ok = [];

const pass = (m) => ok.push(m);
const fail = (m) => problems.push(m);
const warn = (m) => warnings.push(m);

// The minifier reverses attribute order and titles carry &amp;. Both of those
// have produced false results before, so decode entities and never assume
// attributes appear in source order.
const decode = (s) => s
  .replace(/&amp;/g, '&').replace(/&#0*38;/g, '&')
  .replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&apos;/g, "'");

const titleOf = (html) => {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1]).trim() : null;
};

const canonicalOf = (html) => {
  const tag = html.match(/<link\b[^>]*\brel=["']?canonical["']?[^>]*>/i);
  if (!tag) return null;
  const href = tag[0].match(/\bhref=["']([^"']+)["']/i);
  return href ? decode(href[1]).trim() : null;
};

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

const newestMtime = (dir) => walk(dir).reduce((n, f) => Math.max(n, statSync(f).mtimeMs), 0);

// ---------------------------------------------------------------- checks ---

// 0. Nobody gets to override the target from the command line.
if (process.argv.some((a) => /^--project(-name)?/.test(a))) {
  console.error('\n  DEPLOY ABORTED\n  --project-name is not accepted. The target is hardcoded to "' + PROJECT + '".\n');
  process.exit(1);
}

if (!existsSync(DIST)) {
  console.error('\n  DEPLOY ABORTED\n  dist/ does not exist. Run: node build.js\n');
  process.exit(1);
}

const manifestAudit = spawnSync(process.execPath, [join(ROOT, 'tools', 'audit-build-manifest.js')], {
  cwd: ROOT, encoding: 'utf8', shell: false,
});
if (manifestAudit.status === 0) pass('build manifest hashes match current source and dist');
else fail('build manifest audit failed: ' + (manifestAudit.stderr || manifestAudit.stdout || 'unknown error').trim());

// Contact delivery must be proven by the operator before a production release.
// Dry runs keep validating the artifact while reporting the external blocker.
const siteConfigText = readFileSync(join(SRC, 'site-config.js'), 'utf8');
const contactStatus = (siteConfigText.match(/\bcontactDeliveryStatus\s*:\s*["']([^"']+)["']/) || [])[1];
if (contactStatus !== 'verified') {
  const message = 'contact delivery is not operator-verified (SITE.contactDeliveryStatus=' +
    JSON.stringify(contactStatus || 'missing') + ')';
  DRY ? warn(message + '; production deploy remains blocked') : fail(message);
} else {
  pass('contact delivery has operator-verified status');
}

const files = walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
const index = join(DIST, 'index.html');
const manifestPath = join(DIST, 'build-manifest.json');
let manifest = null;

if (!existsSync(manifestPath)) {
  fail('dist/build-manifest.json is missing. Build output identity cannot be proven.');
} else {
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    if (manifest.project !== PROJECT || manifest.site !== 'https://' + SITE) {
      fail('build manifest identity does not match pattayapets.');
    } else if (!Array.isArray(manifest.routes) || !Array.isArray(manifest.files)) {
      fail('build manifest is incomplete.');
    } else {
      pass('build manifest identity matches the hardcoded project');
    }
  } catch (error) {
    fail('build manifest is invalid JSON: ' + error.message);
  }
}

// 1. The generated route manifest, rather than a stale hard-coded count, is
// the source of truth for complete output.
if (manifest && Array.isArray(manifest.routes)) {
  const routeOutputs = new Set(manifest.routes.map((route) =>
    resolve(DIST, ...String(route.output).split('/'))));
  const htmlFiles = new Set(pages.map((file) => resolve(file)));
  const missing = [...routeOutputs].filter((file) => !htmlFiles.has(file));
  const extra = [...htmlFiles].filter((file) => !routeOutputs.has(file));
  if (missing.length || extra.length || routeOutputs.size !== manifest.routes.length) {
    fail(`route manifest mismatch (${missing.length} missing, ${extra.length} unexpected HTML files)`);
  } else {
    pass(`${pages.length} HTML pages exactly match the route manifest`);
  }
}

// 2. Homepage identity.
if (!existsSync(index)) {
  fail('dist/index.html is missing.');
} else {
  const home = readFileSync(index, 'utf8');
  const title = titleOf(home);
  const canon = canonicalOf(home);

  title === EXPECT_TITLE
    ? pass(`homepage title matches`)
    : fail(`homepage title is "${title}"\n     expected           "${EXPECT_TITLE}"`);

  canon === EXPECT_CANONICAL
    ? pass('homepage canonical matches')
    : fail(`homepage canonical is "${canon}" (expected "${EXPECT_CANONICAL}")`);

  home.includes(SITE)
    ? pass(`homepage mentions ${SITE}`)
    : fail(`homepage never mentions ${SITE}.`);
}

// 3. No foreign project anywhere in the build. This is the check that would
//    have caught 27 July before it went out rather than 11.5 hours after.
for (const needle of [...BLOCK, ...WARN]) {
  const hits = files.filter((f) => {
    try { return readFileSync(f, 'utf8').includes(needle); } catch { return false; }
  });
  if (!hits.length) { pass(`no "${needle}" in dist/`); continue; }
  const list = hits.slice(0, 5).map((f) => '       ' + relative(ROOT, f)).join('\n')
    + (hits.length > 5 ? `\n       …and ${hits.length - 5} more` : '');
  const msg = `"${needle}" found in ${hits.length} file(s):\n${list}`;
  BLOCK.includes(needle) ? fail(msg) : warn(msg);
}

// 4. Sitemap sanity.
const sitemap = join(DIST, 'sitemap.xml');
if (!existsSync(sitemap)) {
  fail('dist/sitemap.xml is missing.');
} else {
  const locs = [...readFileSync(sitemap, 'utf8').matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1]);
  const foreign = locs.filter((u) => !u.includes(SITE));
  if (!locs.length) fail('dist/sitemap.xml contains no <loc> entries.');
  else if (foreign.length) fail(`sitemap has ${foreign.length} foreign URL(s), e.g. ${foreign[0]}`);
  else pass(`sitemap: ${locs.length} URLs, all on ${SITE}`);
}

// 5. Is dist/ actually current? Deploying a stale build is its own silent bug.
if (existsSync(SRC) && existsSync(index)) {
  const srcTime = Math.max(newestMtime(SRC), existsSync(join(ROOT, 'build.js')) ? statSync(join(ROOT, 'build.js')).mtimeMs : 0);
  srcTime > statSync(index).mtimeMs
    ? fail('src/ is newer than dist/. Run `node build.js` first, then deploy.')
    : pass('dist/ is newer than src/');
}

// ---------------------------------------------------------------- report ---

console.log('');
for (const m of ok) console.log(`  ok    ${m}`);
for (const m of warnings) console.log(`  warn  ${m}`);

if (problems.length) {
  console.error(`\n  DEPLOY ABORTED — ${problems.length} check(s) failed:\n`);
  for (const m of problems) console.error(`   x  ${m}`);
  console.error(`\n  Nothing was uploaded. Fix the above and re-run.\n`);
  process.exit(1);
}

if (DRY) {
  console.log(`\n  All checks passed. --dry-run set, nothing uploaded.`);
  console.log(`  Would run the locked local Wrangler for project ${PROJECT}\n`);
  process.exit(0);
}

console.log(`\n  All checks passed. Deploying dist/ -> Cloudflare Pages project "${PROJECT}"\n`);
const wrangler = join(ROOT, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
if (!existsSync(wrangler)) {
  console.error('\n  DEPLOY ABORTED\n  Locked local Wrangler is missing. Run `npm ci` first.\n');
  process.exit(1);
}
const r = spawnSync(process.execPath, [wrangler, 'pages', 'deploy', 'dist', '--project-name', PROJECT], {
  cwd: ROOT, stdio: 'inherit', shell: false,
});
process.exit(r.status ?? 1);
