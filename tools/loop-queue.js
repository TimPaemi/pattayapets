"use strict";
/**
 * Emits a concrete, pre-verified worklist for the enrichment loop.
 *
 * Nothing here needs research, judgement or a source. Every task names the page, the source
 * file that defines it, the exact problem, and the fix. The loop just executes items.
 *
 *   node tools/loop-queue.js          top 8 open tasks
 *   node tools/loop-queue.js --all    write the full queue to research/loop/queue.md
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const LOG = path.join(ROOT, "research/loop/log.md");

const SKIP = ["/404.html", "/offline.html", "/search.html", "/sitemap.html", "/offline"];
/* Regulated guidance needs a reopened government source, which the loop must not do.
   Offering these tasks just clogs the top of the queue with permanent skips. */
const REGULATED = ["/bring-pet-to-thailand/", "/take-pet-out-of-thailand/"];

function walk(d, out = []) {
  if (!fs.existsSync(d)) return out;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
}
const pub = (f) => {
  const r = "/" + path.relative(DIST, f).split(path.sep).join("/");
  return r.endsWith("/index.html") ? r.slice(0, -"index.html".length) : r;
};
const decode = (s) => String(s || "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&apos;/g, "'")
  .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&nbsp;/g, " ")
  .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&[a-zA-Z#0-9]+;/g, "").trim();
const textOf = (h) => decode(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

if (!fs.existsSync(DIST)) { console.error("dist/ missing — run: node build.js"); process.exit(1); }

const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));
const pages = htmlFiles.map((f) => ({ file: f, url: pub(f), html: fs.readFileSync(f, "utf8") }))
  .filter((p) => !SKIP.includes(p.url) && !REGULATED.some((r) => p.url.startsWith(r)));

/* map each url -> the src module that defines it */
const srcFiles = [...walk(path.join(ROOT, "src/pages")), ...walk(path.join(ROOT, "src/data"))]
  .filter((f) => f.endsWith(".js"));
const srcText = srcFiles.map((f) => ({ f: path.relative(ROOT, f).split(path.sep).join("/"), t: fs.readFileSync(f, "utf8") }));
function definedIn(url) {
  const slug = url.replace(/\/$/, "").split("/").pop().replace(/\.html$/, "");
  /* A definition, not a link. Ordered strongest signal first. */
  const strong = [
    new RegExp(`path:\\s*["\`]${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["\`]`),
    slug && new RegExp(`slug:\\s*["\`]${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["\`]`),
    new RegExp(`path:\\s*["\`][^"\`]*${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.html["\`]`)
  ].filter(Boolean);
  for (const re of strong) for (const s of srcText) if (re.test(s.t)) return s.f;
  for (const s of srcText) if (s.t.includes(url)) return s.f + " (link only - grep the slug)";
  return "src/pages/ (grep the slug)";
}

/* inbound internal links */
const inbound = {};
for (const p of pages) inbound[p.url] = 0;
for (const p of pages) {
  const seen = new Set();
  for (const m of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let h = m[1];
    if (h.endsWith("/index.html")) h = h.slice(0, -"index.html".length);
    if (h !== p.url && inbound[h] !== undefined) seen.add(h);
  }
  for (const h of seen) inbound[h]++;
}

/* already-done urls: anything in the last 40 log lines */
let recent = new Set();
if (fs.existsSync(LOG)) {
  const lines = fs.readFileSync(LOG, "utf8").split(/\r?\n/).filter((l) => l.includes("|"));
  for (const l of lines.slice(-40)) {
    const m = l.match(/\|\s*(\/[^\s|]*)/);
    if (m) recent.add(m[1]);
  }
}

const WARMUP = /^(it depends|there is no|there are no|many owners|most owners|in pattaya|generally|typically|usually|that depends|this depends|the short answer|it can|some |a lot of)/i;

const tasks = [];
const add = (pri, type, url, detail, fix) =>
  tasks.push({ pri, type, url, src: definedIn(url), detail, fix });

for (const p of pages) {
  const { url, html } = p;

  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
  if (title && title.length > 60)
    add(1, "TITLE_LONG", url, `title is ${title.length} chars: "${title}"`,
        "Rewrite to <=60 chars, keeping the main query first.");

  const dm = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0])
    .find((t) => /name="description"/i.test(t));
  const desc = decode((dm || "").match(/content="([^"]*)"/i)?.[1]);
  if (desc && (desc.length < 140 || desc.length > 160))
    add(1, "DESC_RANGE", url, `description is ${desc.length} chars (want 140-160)`,
        desc.length < 140 ? "Extend with a concrete specific from the page." : "Trim to <=160 without losing the query.");

  const faqs = [...html.matchAll(/<details class="faq"[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)];
  for (const [, q, a] of faqs) {
    const first = (textOf(a).split(/(?<=[.!?])\s/)[0] || "");
    if (WARMUP.test(first) || first.split(" ").length > 34)
      add(2, "FAQ_WARMUP", url,
          `FAQ "${textOf(q).slice(0, 60)}" opens with: "${first.slice(0, 90)}"`,
          "Rewrite so the FIRST sentence is the direct answer, then qualify.");
  }
  if (faqs.length && faqs.length < 6)
    add(3, "FAQ_FEW", url, `${faqs.length} FAQs on the page`,
        "Add 1-2 FAQs a real owner would search, answered from facts already on this site.");

  if (inbound[url] < 4)
    add(2, "THIN_INBOUND", url, `${inbound[url]} inbound internal link(s)`,
        `Add links to ${url} from ${4 - inbound[url]} genuinely related page(s).`);

  const longParas = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => textOf(m[1]))
    .filter((t) => (t.match(/[.!?](\s|$)/g) || []).length > 5);
  if (longParas.length)
    add(3, "LONG_PARA", url, `${longParas.length} paragraph(s) over 5 sentences; first starts "${longParas[0].slice(0, 70)}"`,
        "Split into shorter paragraphs, a list, or a table if genuinely tabular.");

  if (/[฀-๿]/.test(html) && !/lang="th"/.test(html))
    add(2, "THAI_UNMARKED", url, "Thai script present with no lang=\"th\"",
        "Wrap the Thai run in <span lang=\"th\">.");

  const h2 = (html.match(/<h2\b/gi) || []).length;
  const words = textOf(html).split(" ").length;
  if (words > 1800 && h2 < 4)
    add(3, "FEW_HEADINGS", url, `${words} words with only ${h2} h2`,
        "Add descriptive h2 sections so the page is scannable.");
}

/* prefer pages not touched in the last 40 runs */
tasks.sort((a, b) => (a.pri - b.pri) || (recent.has(a.url) - recent.has(b.url)) || a.url.localeCompare(b.url));

/* Interleave by type. Strict priority order meant 105 identical DESC_RANGE tasks in a row,
   so the highest-value work (FAQ_WARMUP) would not start for another 20 runs. */
const buckets = {};
for (const t of tasks) (buckets[t.type] ||= []).push(t);
const order = Object.keys(buckets).sort((a, b) => buckets[b].length - buckets[a].length);
const woven = [];
for (let i = 0; woven.length < tasks.length; i++)
  for (const k of order) if (buckets[k][i]) woven.push(buckets[k][i]);
tasks.length = 0;
tasks.push(...woven);

const byType = {};
tasks.forEach((t) => { byType[t.type] = (byType[t.type] || 0) + 1; });

const render = (t, i) =>
  `${i + 1}. [${t.type}] ${t.url}\n   defined in: ${t.src}\n   problem: ${t.detail}\n   fix: ${t.fix}\n`;

if (process.argv.includes("--all")) {
  const out = `# Loop queue — ${tasks.length} open tasks\n\n` +
    Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([k, v]) => `- ${k}: ${v}`).join("\n") +
    `\n\n---\n\n` + tasks.map(render).join("\n");
  fs.mkdirSync(path.join(ROOT, "research/loop"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "research/loop/queue.md"), out);
  console.log(`Wrote research/loop/queue.md — ${tasks.length} tasks`);
}

console.log(`\nLoop queue — ${tasks.length} open tasks across ${pages.length} pages`);
console.log(Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n"));
console.log(`\nDo these now:\n`);
console.log(tasks.slice(0, 8).map(render).join("\n"));
