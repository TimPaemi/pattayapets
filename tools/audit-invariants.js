"use strict";
/**
 * Invariant guard for the six S1 failures found in the 2026-07 audit, plus the
 * cache and directory-schema assertions from its section 9.
 *
 * This does NOT try to encode international law. It preserves reviewed decisions
 * and forces a human back to a dated primary source when one of them changes.
 * Every check names the finding it protects and fails with an actionable message.
 *
 * Run: node tools/audit-invariants.js   (wired into build:all and CI)
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

const fails = [];
const warns = [];
const passes = [];
const fail = (id, m) => fails.push(id + ": " + m);
const warn = (id, m) => warns.push(id + ": " + m);
const pass = (m) => passes.push(m);

function walk(d, out) {
  out = out || [];
  if (!fs.existsSync(d)) return out;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
const pub = (f) => "/" + path.relative(DIST, f).split(path.sep).join("/");
const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));
const read = (f) => fs.readFileSync(f, "utf8");

if (!htmlFiles.length) {
  console.error("audit-invariants: dist/ is empty — run the build first.");
  process.exit(1);
}

/* ---------- 1. DLD airport assertion (S1.1) ---------------------------------
   U-Tapao is absent from the DLD animal-quarantine-station list, so no page may
   present it as able to clear a pet import or export. Phrase-based: it catches a
   regression of known-bad wording, not every possible new phrasing. */
const UTAPAO_BANNED = [
  /Can I export from U-Tapao/i,
  /Some routes depart U-Tapao/i,
  /U-Tapao has a separate process/i,
  /through Suvarnabhumi or U-Tapao/i,
  /DLD export permit names U-Tapao/i,
  /AQS inspection at Bangkok or U-Tapao/i,
  /Bangkok\s*\/\s*U-Tapao AQS/i,
  /routing to Suvarnabhumi or U-Tapao/i,
  /arrival at Bangkok or U-Tapao/i,
  /export through U-Tapao/i
];
{
  const hits = [];
  for (const f of htmlFiles) {
    const s = read(f);
    for (const re of UTAPAO_BANNED) if (re.test(s)) hits.push(pub(f) + "  ~  " + re.source);
  }
  if (hits.length) {
    fail("S1.1/DLD-airport", "U-Tapao is presented as usable on " + hits.length +
      " page(s). It is not on the DLD animal-quarantine-station list.\n      " + hits.join("\n      "));
  } else pass("S1.1  no page presents U-Tapao as able to clear a pet");
}

/* ---------- 2. Korea assertion (S1.2) ---------------------------------------
   Normal pet entry must not be described as requiring advance permission, an
   import licence or a quarantine reservation, and the titre threshold must stay. */
{
  const korea = ["/take-pet-out-of-thailand/to-south-korea.html",
                 "/bring-pet-to-thailand/from-south-korea.html"];
  const BANNED = [/APQA import permission/i, /quarantine booking/i,
                  /Advance <strong>import licence<\/strong>/i,
                  /advance permission are normal/i, /designated quarantine facilities/i];
  let ok = true;
  for (const rel of korea) {
    const f = path.join(DIST, rel.replace(/^\//, ""));
    if (!fs.existsSync(f)) { fail("S1.2/Korea", "missing page " + rel); ok = false; continue; }
    const s = read(f);
    for (const re of BANNED) if (re.test(s)) {
      fail("S1.2/Korea", rel + " states a prerequisite the Korean authority does not require (" +
        re.source + "). Re-verify against qia.go.kr before changing."); ok = false;
    }
    if (!/0\.5(&nbsp;| )?IU\/ml/i.test(s)) {
      fail("S1.2/Korea", rel + " no longer states the 0.5 IU/ml rabies antibody threshold."); ok = false;
    }
  }
  /* corrections.html legitimately names the old wrong link while logging the fix. */
  const citesOldKr = htmlFiles.filter((f) => pub(f) !== "/corrections.html" &&
    /href="[^"]*animal\.go\.kr/i.test(read(f))).map(pub);
  if (citesOldKr.length) {
    fail("S1.2/Korea", "animal.go.kr is linked as the quarantine authority on " +
      citesOldKr.join(", ") + "; it is qia.go.kr."); ok = false;
  }
  if (ok) pass("S1.2  Korea pages carry the 0.5 IU/ml threshold and no invented prerequisite");
}

/* ---------- 3. Emergency contact assertion (S1.3) ---------------------------- */
{
  const { BUSINESSES } = require(path.join(ROOT, "src/data/businesses.js"));
  const contactless = BUSINESSES.filter((b) => !b.phone && !b.website);
  let ok = true;
  for (const b of contactless) {
    const own = htmlFiles.find((f) => pub(f).endsWith("/" + b.slug + ".html"));
    if (!own) { fail("S1.3/contact", "no page found for contactless listing " + b.slug); ok = false; continue; }
    if (!/has not been able to confirm a contact route|no verified public phone/i.test(read(own))) {
      fail("S1.3/contact", b.slug + " has no contact channel but its page does not say so plainly."); ok = false;
    }
    const actionable = htmlFiles.filter((f) => {
      const p = pub(f);
      if (p === pub(own)) return false;
      if (!(p.startsWith("/pet-emergency/") || p.includes("getting-to-the-vet"))) return false;
      return read(f).includes(b.slug + ".html");
    }).map(pub);
    if (actionable.length) {
      fail("S1.3/contact", b.slug + " has no verified contact channel but is linked from " +
        "emergency-adjacent page(s): " + actionable.join(", ")); ok = false;
    }
  }
  if (ok) pass("S1.3  " + contactless.length + " contactless listing(s), none on an emergency path, all disclosed");
}

/* ---------- 4. Correction-state assertion (S1.5) ----------------------------- */
{
  const f = path.join(DIST, "corrections.html");
  if (!fs.existsSync(f)) fail("S1.5/corrections", "corrections.html is missing.");
  else {
    const s = read(f);
    if (/No corrections have been published yet/i.test(s)) {
      fail("S1.5/corrections", "corrections.html still claims no corrections exist.");
    } else if (!/<li><strong>\d+\s+\w+\s+20\d\d/.test(s)) {
      fail("S1.5/corrections", "corrections.html has no dated correction entries.");
    } else pass("S1.5  corrections log is populated and dated");
  }
}

/* ---------- 5. Scope-lock assertion (S2.5) ----------------------------------- */
{
  const bad = [];
  for (const f of htmlFiles) {
    const s = read(f);
    const author = (s.match(/href="https:\/\/timpaemi\.com[^"]*"/g) || []).length;
    const sister = s.match(/href="https:\/\/(?:www\.)?(?:pattaya-authority|pattaya-medical|pattaya-school|pattaya-gym|pattaya-coffee|pattayavisahelp|pattayastream|pattaya-vehicle-rentals|pattaya-restaurant-guide|pattaya-afterdark)\.[^"]+"/g) || [];
    if (author !== 1 || sister.length) bad.push(pub(f) + " (author=" + author + ", sister=" + sister.length + ")");
  }
  if (bad.length) fail("S2.5/scope-lock", bad.length + " page(s) breach one-author/no-sister:\n      " + bad.join("\n      "));
  else pass("S2.5  every page: exactly one timpaemi.com link, zero sister-site links");
}

/* ---------- 6. Blanket first-hand claim assertion (S1.4) --------------------- */
{
  const bad = htmlFiles.filter((f) => pub(f) !== "/corrections.html" &&
    read(f).includes("checked in person by people who live here")).map(pub);
  if (bad.length) fail("S1.4/blanket-claim", bad.length + " page(s) claim in-person checking without published visit records.");
  else pass("S1.4  no unsupported site-wide in-person verification claim");
}

/* ---------- 7. Deploy identity assertion (S1.6) ------------------------------ */
{
  const pkg = JSON.parse(read(path.join(ROOT, "package.json")));
  const d = pkg.scripts && pkg.scripts.deploy;
  let ok = true;
  if (!d || !/tools\/deploy\.mjs/.test(d)) {
    fail("S1.6/deploy", "npm run deploy does not route through tools/deploy.mjs."); ok = false;
  }
  for (const [k, v] of Object.entries(pkg.scripts || {})) {
    if (/wrangler/.test(v)) { fail("S1.6/deploy", "script \"" + k + "\" calls wrangler directly; use tools/deploy.mjs."); ok = false; }
  }
  for (const doc of ["docs/launch-and-maintenance.md", "HANDOFF.md"]) {
    const p = path.join(ROOT, doc);
    if (!fs.existsSync(p)) continue;
    const lines = read(p).split(/\r?\n/);
    const teaches = lines.filter((l) => /(npx\s+)?wrangler pages deploy/.test(l) && !/Never|never|do not|Do not/.test(l));
    if (teaches.length) { fail("S1.6/deploy", doc + " still teaches a raw wrangler deploy:\n      " + teaches.join("\n      ")); ok = false; }
  }
  if (ok) pass("S1.6  guarded deploy is the only documented and scripted route");
}

/* ---------- 8. Cache assertion (S2.6) ---------------------------------------
   Anything served immutable for a year must be content-addressed. Fonts are the
   one documented exception: the filename encodes family+weight and the bytes are
   never edited in place — a new weight ships as a new filename. */
{
  const referenced = new Set();
  for (const f of htmlFiles.concat([path.join(DIST, "sw.js")]).filter(fs.existsSync)) {
    for (const m of read(f).matchAll(/\/assets\/[A-Za-z0-9._\-/]+/g)) referenced.add(m[0]);
  }
  const hdrs = read(path.join(ROOT, "src/static/_headers"));
  const blocks = hdrs.split(/\n(?=\S)/);
  const IMMUTABLE_OK = [/^\/assets\/fonts\//];
  let ok = true;
  for (const b of blocks) {
    if (!/immutable/i.test(b)) continue;
    const glob = b.split(/\r?\n/)[0].trim();
    if (IMMUTABLE_OK.some((re) => re.test(glob))) continue;
    /* Judge what the built site actually references. Orphaned files from an earlier
       build are not a cache-correctness problem, and dist/ is wiped on each build. */
    const prefix = glob.replace(/\*$/, "");
    const unhashed = [...referenced].filter((u) => u.startsWith(prefix) &&
      /\.(css|js)$/.test(u) && !/\.[0-9a-f]{8,}\.(css|js)$/.test(u));
    if (unhashed.length) {
      fail("S2.6/cache", glob + " is served immutable but the site references unversioned file(s): " +
        unhashed.join(", ") + ". Content-hash them or drop immutable."); ok = false;
    }
  }
  if (ok) pass("S2.6  every immutable asset rule covers content-hashed filenames (fonts excepted by design)");
}

/* ---------- 9. Directory schema assertion (S2.3) ----------------------------- */
{
  const hubs = ["vets", "groomers", "boarding", "pet-shops", "trainers", "pet-relocation", "mobile-vets"];
  let ok = true;
  for (const h of hubs) {
    const f = path.join(DIST, h, "index.html");
    if (!fs.existsSync(f)) { fail("S2.3/schema", "missing hub /" + h + "/"); ok = false; continue; }
    const s = read(f);
    const m = s.match(/"@type":"ItemList","numberOfItems":(\d+),"itemListElement":\[(.*?)\]\}/s) ||
              s.match(/"ItemList"[\s\S]{0,40}?"itemListElement":\s*\[([\s\S]*?)\]/);
    if (!/ItemList/.test(s)) { fail("S2.3/schema", "/" + h + "/ emits no ItemList."); ok = false; continue; }
    const urls = [...s.matchAll(/"@type":"ListItem"[^}]*?"url":"([^"]+)"/g)].map((x) => x[1]);
    const phantom = urls.filter((u) => !s.includes(u.replace("https://pattayapets.com", "")));
    if (!urls.length) { fail("S2.3/schema", "/" + h + "/ ItemList is empty."); ok = false; }
    else if (phantom.length) {
      fail("S2.3/schema", "/" + h + "/ ItemList lists " + phantom.length +
        " URL(s) not visible on the page: " + phantom.join(", ")); ok = false;
    }
  }
  if (/"@type":"(Review|AggregateRating)"/.test(htmlFiles.map(read).join(""))) {
    fail("S2.3/schema", "Review or AggregateRating schema is present; there is no first-party rating corpus."); ok = false;
  }
  if (ok) pass("S2.3  all 7 category hubs emit a visible-mirroring ItemList, no invented ratings");
}

/* ---------- report ----------------------------------------------------------- */
console.log("\nInvariant guard — reviewed decisions from AUDIT-2026-07\n");
passes.forEach((p) => console.log("  ok    " + p));
warns.forEach((w) => console.log("  warn  " + w));
if (fails.length) {
  console.log("");
  fails.forEach((f) => console.log("  FAIL  " + f));
  console.log("\n" + fails.length + " invariant(s) broken. Each protects a finding that was fixed on 2026-07-29.");
  console.log("If a rule genuinely changed, update the source AND docs/AUDIT-2026-07.md, then this file.\n");
  process.exit(1);
}
console.log("\nPASS — " + passes.length + " invariants hold.\n");
