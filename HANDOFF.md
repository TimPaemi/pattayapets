# PattayaPets — session handoff, 27 July 2026

Read this before touching anything. Three facts here cost several hours to learn.

---

## 1 · How this repo actually works

- **Repo:** `C:\Projects\pattayapets` — 209 HTML pages, all in `dist/`.
- **It is a BUILD SYSTEM.** `build.js` renders `dist/` from `src/`. **Never edit `dist/`** —
  it is regenerated and your changes vanish. Edit `src/` and rebuild.
  - `src/layout.js` — head, canonical, JSON-LD graph, footer, nav
  - `src/pages/*.js` — 27 files, page definitions
  - `src/linking.js`, `src/guidekit.js`, `src/data/richness-blocks.js` — shared content blocks
- **Build:** `node build.js` (fast, no network). `npm run build` also runs `prebuild`
  → `tools/make-images.js` → needs `sharp` (Windows binary installed; fails in a Linux VM).
- **Deploy is NOT git push.** `dist/` is gitignored and `ci.yml` has no deploy step.
  Deploy is a direct upload:
  ```
  npx wrangler pages deploy dist --project-name pattayapets
  ```
  `git push` is version control only.

---

## 2 · What happened today — 27 July

**A deploy from the pattaya-school-guide project landed on the pattayapets Cloudflare Pages
project.** For ~11.5 hours, `pattayapets.com` served the school guide: homepage title
*"International Schools Pattaya"*, `rel=canonical` pointing at `pattaya-school-guide.com`,
a 95-URL foreign sitemap, and most pet URLs returning 404.

Rolled back via the Cloudflare dashboard. Verified afterwards: 33/33 sampled URLs → 200,
correct identity, 205-URL sitemap with 0 foreign entries, and `pattaya-school-guide.com`
itself unharmed.

**Root cause:** the wrangler command is typed by hand every time with no guard.
`--project-name` pointed at the wrong project.

---

## 3 · OUTSTANDING — do these first

| # | Item | Notes |
|---|---|---|
| 1 | **Purge Cloudflare cache for `robots.txt`** | Origin is correct; the **edge cache still serves the school guide's robots.txt** (`cf-cache-status: HIT`, `max-age=86400`). Verify: `curl.exe -s https://pattayapets.com/robots.txt \| Select-String Sitemap` must say `pattayapets.com/sitemap.xml`. |
| 2 | **Search Console** | Resubmit `sitemap.xml`; Request Indexing on `/`, `/directory`, `/vets/`, `/guides`. The homepage was canonicalising to another domain — Google can hold a duplicate cluster up to two weeks. |
| 3 | **Guarded deploy script** | Not yet written. Should verify `dist/index.html` contains `pattayapets.com` + the expected title, then call wrangler with the project name hardcoded. Abort loudly otherwise. ~20 lines, in-repo, single-purpose. |
| 4 | **`tools/audit-linking.js` aborts `npm run ship`** | It `process.exit(1)`s because it requires the string `"Pattaya Authority network"` in every footer — deliberately removed. It is the last step of `build:all`, so **IndexNow has never pinged** since the network was dismantled. One-line fix: delete the check or repoint it at timpaemi.com. |
| 5 | **Nothing is committed** | ~12 files dirty, including Codex's `src/guidekit.js`, `src/pages/41-export.js`, `src/pages/52-export-countries.js`. `git log` HEAD is still `cdfdcee` from 22 July. No restore point exists. |

---

## 4 · GATED — needs Tim's explicit yes

**The `.html` → clean-URL migration.** 188 pages whose `rel=canonical`, `og:url`, schema `@id`
and sitemap entry all point at a URL that 308-redirects. Still the biggest single SEO item.

The fix is small now the repo is known: `canonical()` in `src/layout.js` is one function feeding
both the canonical tag and `og:url` for all 209 pages.

**Why it is parked:** Tim's scope lock requires the downside stated *in clicks*, and the Search
Console figure was not available. Plan agreed: canary on `/area/` (8 pages) first, two weeks of
data, then the rest. Do not bundle this into other work.

---

## 5 · Known findings not yet actioned

- **Near-duplicate EU country guides.** `to-finland` ~ `to-ireland` at **83.2%** 5-gram Jaccard;
  4 more pairs at 75–80%, 19 at 70–75%. Fix by adding genuinely country-specific detail
  (national authority, certificate number, real airline routes, local-currency costs).
- **No `ItemList` on the 7 directory category pages.** `CollectionPage` count is 9 and all nine
  are guide hubs. This is the one schema type where a directory is the eligible party.
- **`FAQPage` on 170 pages is inert** — Google dropped FAQ rich results 7 May 2026. Not harmful.
  Keep it, don't expand it.
- **robots.txt omits the 2026 retrieval crawlers** — Claude-SearchBot, Meta-WebIndexer,
  Amzn-SearchBot, DuckAssistBot, Applebot, Perplexity-User. Ships with the gated migration
  because it is a robots directive.
- **`mobile-vets/mor-ja-pet-clinic-pattaya` has no contact channel at all.**
- **No photography anywhere** — 209 images across 209 pages is the footer avatar.
- **`footerOld()` in `src/layout.js`** is ~100 lines of dead code containing the old PA-NET block
  with `pattaya-authority.com` links. Not rendered. Tim's call whether to delete.
- **`AGENTS.md` still points at `C:\Projects\pattaya-authority`** as "Agency HQ" and
  `C:\Projects\NETWORK-RULES.md` as the rulebook; `src/layout.js` and `build.js` also mention
  pattaya-authority. Contradicts the scope lock. Flagged, not changed.

---

## 6 · Shipped and live (verified 27 July)

New Insider-style footer on all 209 · U-Tapao correction (it has **no** Animal Quarantine Station
and cannot clear an imported pet — verified against Thai MFA and DLD primary sources) · rabies
correction (Thailand sets **no** 12-month cap; the rule is 21 days minimum and still valid) ·
Organization schema enriched · `WebPage` node with `dateModified` on all 209 ·
`article:modified_time` · Google Preferred Sources link in footer · `/accessibility` de-orphaned ·
`/press.html` press kit.

Scope-lock sections 1–5 appended to `AGENTS.md` and `CLAUDE.md` at line 26, after
`<!-- END NETWORK-HEADER -->`.

---

## 7 · Traps that wasted time today

- **`git status` over the device bridge creates `.git/index.lock`** and the bridge cannot delete
  it, which then blocks Tim's commits. Read `.git/refs/heads/main` and `.git/refs/remotes/origin/main`
  directly instead, and use `git log` (which does not touch the index).
- **`&amp;` counts as 5 raw characters but renders as 1.** Title-length audits over raw HTML
  produce false positives. `clampMetaTitle()` is working correctly.
- **The minifier reverses attribute order** — `content="…" name="description"`. Regexes assuming
  `name` first find nothing.
- **Always check the HTTP status code before reading page content.** A `404` body looks like a
  real page and will produce entirely fictional "findings".
- **Use a cache-buster when checking whether a deploy landed**, and separately check the plain URL
  to detect edge-cache staleness. They can disagree, as robots.txt does right now.
