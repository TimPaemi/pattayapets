# CODEX — PATTAYA PETS FULL AUDIT v1

**Written 2026-07-28.** Every standard quoted in §2 was verified against a primary source on that
date, with the source's own last-updated date recorded. Nothing here is folklore, and §2.3 lists
the folklore explicitly so you do not reintroduce it.

Paste this whole file, or just:

> **Read `CODEX-FULL-AUDIT.md` in `C:\Projects\pattayapets` and run the full audit.**

---

## 0 · THE RULES

**1. This is a read-only audit. You produce a report. You change nothing.**
Not `src/`, not `dist/`, not a tool, not a typo. If you find something broken, write it down.
Tim decides and Tim ships. An audit that mutates the tree cannot be trusted, because nobody can
tell which findings were real and which you caused.

The one exception: you write your report to `docs/AUDIT-2026-07.md`. That is the only file you
create.

**2. Never deploy. Never run `npm run ship`, `npm run deploy`, `deploy:cf`, or any `wrangler`
command.** On 27 July 2026 a deploy from the pattaya-school-guide project landed on the
pattayapets Cloudflare Pages project. For **~11.5 hours** pattayapets.com served the school
guide — wrong homepage title, `rel=canonical` pointing at `pattaya-school-guide.com`, a 95-URL
foreign sitemap, and most pet URLs returning 404. The root cause is that `--project-name` is typed
by hand with no guard, and **the guard still does not exist**. You are not going to be the second
person to do this.

**3. Never edit `dist/`.** `build.js` renders `dist/` from `src/`. Anything written to `dist/`
vanishes on the next build. You are not editing anything anyway — but every recommendation you
make must name the **`src/` file** that produces the output, never the `dist/` file where you
found it.

**4. Do not run `npm run build` unless you have a reason, and never run `npm run build:all`.**
`build.js` alone is fast and offline. But `prebuild` → `tools/make-images.js` needs `sharp` (the
Windows binary is installed; it fails in a Linux VM), and `build:all` ends with
`tools/audit-linking.js`, which **`process.exit(1)`s** — see §F. Prefer auditing the committed
`dist/` as it stands and reading `src/` for cause.

**The read-only audit tools are fine and you should run them.** There are ~14 of them in `tools/`.
Confirm each is read-only before running it — a tool that writes is itself a finding.

**Scope:** `C:\Projects\pattayapets` only. Read `CLAUDE.md` and `AGENTS.md` first.

---

## 0.5 · FIVE TRAPS THAT ALREADY COST HOURS

Read these before you write a single regex. Every one of them has produced a wrong answer on this
repo before, and two of them produce *silent* wrong answers that look like clean results.

1. **The minifier reverses attribute order.** Output is `<link href="…" rel="canonical">`, not
   `<link rel="canonical" href="…">`. A regex assuming `rel` first returns **zero matches**, which
   reads as "clean". I verified this while writing this file: `rel="canonical" href=` matched
   **0** pages; `href="…" rel="canonical"` matched **209**. Same for
   `content="…" name="description"`. **Match attributes in either order, or parse the tag.**
2. **`&amp;` is 5 raw characters and renders as 1.** Title- and description-length audits over raw
   HTML produce false positives. `clampMetaTitle()` is working correctly — do not "fix" it.
3. **Always check the HTTP status code before reading page content.** A 404 body on this site looks
   like a real page and will produce entirely fictional findings.
4. **`git status` over the device bridge creates `.git/index.lock` and cannot delete it**, which
   then blocks Tim's commits. Use `git log` (does not touch the index), or read
   `.git/refs/heads/main` and `.git/refs/remotes/origin/main` directly.
5. **When checking whether something is live, use a cache-buster *and* the plain URL.** They
   disagree right now: the origin `robots.txt` is correct while the **edge cache is still serving
   the school guide's `robots.txt`** from the 27 July incident.

**Working method.** 209 pages and 27 page-definition files is small enough to check exhaustively.
Every number in your report must come from a command you actually ran, and you must paste the
command.

---

## 1 · WHAT THIS SITE IS, AND THE QUESTION THE AUDIT EXISTS TO ANSWER

pattayapets.com — *"the honest pet resource for Pattaya."* Editorial directory plus guides.
A **build system**: `build.js` (37 KB) renders `dist/` from `src/`. Publisher TimPaemi Co., Ltd.

- `src/layout.js` — head, canonical, JSON-LD graph, footer, nav
- `src/pages/*.js` — **27 files**, page definitions
- `src/linking.js`, `src/guidekit.js`, `src/data/richness-blocks.js` — shared content blocks
- `tools/` — ~20 scripts, mostly audits
- Deploy is **not** git push. `dist/` is gitignored, `ci.yml` has no deploy step.
  Deploy is `npx wrangler pages deploy dist --project-name pattayapets`, by hand.

**Measured on disk 2026-07-28 — verify these yourself:**

| | |
|---|---|
| HTML pages in `dist/` | **209** |
| Sitemap URLs | **205** (confirm the 4-page gap is deliberate) |
| Canonicals still ending `.html` | **192 of 209** — every one 308-redirects |
| `<changefreq>` in sitemap | **205** (`<priority>`: 0) |
| Pages carrying `FAQPage` | **170** |
| Country / `to-*` pages | **36** |
| Original photography | **none** — the only image on 209 pages is the footer avatar |
| git | local `main` = `e6402cf`, `origin/main` = `cdfdcee` — **local commits unpushed** |

### The question

The three sibling audits ask about content quality, scale, and strategy. **This site asks something
sharper, because of what it is about:**

> **If a page here is wrong, an animal is harmed.**

This is a **YMYL site** and the audit must treat it as one. Look at what it publishes:

- `/bring-pet-to-thailand/` — import rules. Get the rabies titre timing, the quarantine station or
  the certificate wrong and a dog is refused entry, quarantined, or destroyed at the border.
- **36 country pages** — export from Thailand to named destinations, each with a genuinely
  different regulatory regime.
- `/pet-emergency/`, `/pet-health-pattaya/`, `/mobile-vets/`, `/vets/` — animal health, including
  emergency.
- `/pet-insurance-thailand.html` — a financial product.

The site has already had to correct two errors of exactly this kind: **U-Tapao has no Animal
Quarantine Station and cannot clear an imported pet**, and **Thailand sets no 12-month rabies cap
— the rule is 21 days minimum**. Both were wrong on live pages. Both would have sent a real person
to the wrong airport or the wrong vet appointment.

**So the audit's centre of gravity is factual accuracy on regulated topics, not word counts.**
§A is the biggest section and it is where your effort goes.

The relevant standard, from the Quality Rater Guidelines — **current edition September 2025, which
specifically "Updated YMYL definitions"** — is that YMYL topics are those that could impact health,
financial stability, safety or welfare, and that inaccurate content on them warrants the lowest
ratings regardless of how well it is written. **A beautifully structured page stating the wrong
rabies interval is worse than no page.**

---

## 2 · THE 2026 BASELINE — WHAT IS TRUE, AND WHAT IS DEAD

### 2.1 Confirmed dead — do not recommend, do not "fix" back

| Thing | Status | Source + date |
|---|---|---|
| **FAQPage rich results** | **Stopped appearing 7 May 2026.** Console report + Rich Results Test support dropped Jun 2026; API support ends **Aug 2026**. **170 pages here carry it** | FAQPage doc, updated 2026-05-08 |
| **HowTo structured data** | Dead since 13 Sep 2023, docs deleted | Google blog, 2023-08 |
| **`<changefreq>` / `<priority>`** | *"Google ignores `<priority>` and `<changefreq>` values."* Verbatim. **This sitemap sets `changefreq` on all 205 URLs** | sitemap doc, updated **2026-07-08** |
| **`crawl-delay` / `noindex` in robots.txt** | Neither supported by Google | robots.txt spec, updated **2026-07-08** |
| **`rel=next` / `rel=prev`** | *"Google no longer uses these tags."* | Pagination doc, 2025-12-10 |
| **Sitemap ping endpoint** | 404s since 2023. IndexNow (Bing) is separate and still works | Google blog, 2023-06 |
| **FID** | Retired Mar 2024, replaced by INP | web.dev |
| **"Googlebot reads the first 15MB"** | **Now 2MB for Google Search**, headers included | `developers.google.com/search/blog/2026/03/crawler-blog-post`, **2026-03-31** |
| **HSTS `preload`** | hstspreload.org itself now says preloading *"is not recommended"* | hstspreload.org |
| **Helpful Content System as a separate thing** | Folded into core Mar 2024, archived Aug 2024 | Ranking systems guide |
| **llms.txt as an SEO lever** | *"Google Search ignores them"* … *"will neither harm nor help your site's visibility or rankings"* | AI optimization guide, **2026-07-10** |
| **Lighthouse `font-size`, `offscreen-images`, `preload-fonts` audits** | Removed in Lighthouse 13.0 (Oct 2025). Current is **13.3.0**. The ~6 MB of Lighthouse JSON at this repo root predates that — treat old reports as stale | Lighthouse changelog |

### 2.2 Confirmed true — the standards you audit against

**YMYL, accuracy and trust — the part that matters most here**

- **The current Quality Rater Guidelines are the September 2025 edition, 182 pages.** Its own
  change log records *"Updated YMYL definitions."* **There is no 2026 edition** — any article
  claiming to quote one is wrong.
- **QRG §5.2.1 / §4.6.6:** content that is copied, paraphrased or reposted *"with a low amount of
  effort to create value by editing, manually curating, reformatting or injecting some original
  content"* is **Low**. Zero added value is **Lowest**. On YMYL topics the bar is higher, not lower.
- **QRG §3.3.5:** *"small websites may have little or no reputation information. **This is not
  indicative of high or low quality.**"* Being small is not the problem here.
- **QRG §3.2:** effort includes *"designing page functionality or building systems that power a
  webpage"* — but explicitly **not** *"the automatic creation of thousands of pages… without any
  oversight, manual curation."* A templated country page with the country name swapped is the
  second thing, not the first.
- **E-E-A-T has not changed since Dec 2022.** Zero changelog entries Jan 2025 → Jul 2026.
  *"While E-E-A-T itself isn't a specific ranking factor."* **Trust is the most important
  component** — and on a regulated topic, trust is accuracy.
- **Google's trust question**, verbatim: *"Does the content present information in a way that makes
  you want to trust it, such as clear sourcing, evidence of the expertise involved, background
  about the author or the site that publishes it, such as through links to an author page or a
  site's About page?"* — Creating helpful content, updated 2025-12-10
- **Google's "How" guidance** asks for method disclosure *"all accompanied by evidence."*
- **Non-commodity content is the official term.** *"Don't just recycle what others on the internet
  have already said, or could easily be produced by a generative AI model."* — AI optimization
  guide, **2026-07-10**
- **Mueller's 2026 test is distinguishability:** *"sometimes you just run across websites where
  you're like, '**Anyone could have written this. This tells me nothing.**'"* — SOTR ep. 112,
  16 Jul 2026
- **Scaled content abuse**, verbatim: *"large amounts of unoriginal content that provides little to
  no value to users, **no matter how it's created**."* No page-count threshold exists in any
  Google doc. **36 near-identical country pages is squarely in scope** — see §A.
- **Doorway abuse:** *"Having multiple domain names or pages targeted at specific regions or cities
  that funnel users to one page"* and *"Creating substantially similar pages that are closer to
  search results than a clearly defined, browseable hierarchy."*
- **Thin affiliate policy names the directory's legitimate defence**, verbatim: good pages *"add
  value by offering meaningful content or features… additional information about price, original
  product reviews, rigorous testing and ratings, **navigation of products or categories, and
  product comparisons**."*
- **Deleting content is a last resort.** Verbatim from the core updates doc, which also says:
  *"if you're considering deleting entire sections of your site, that's likely a sign those
  sections were created for search engines first, and not people."*

**Structured data**

- **Review markup:** *"Ratings must be sourced directly from users. **Don't rely on human editors
  to create, curate, or compile ratings information for local businesses.**"* Plus *"Don't
  aggregate reviews or ratings from other websites"* and, added **24 Jul 2026**, *"Don't include
  fake or undisclosed incentivized reviews."* Manual-action risk. — Review snippet doc, **2026-07-24**
- **`ItemList` is the one type where a directory is the eligible party.** The handoff already
  identifies that the 7 directory category pages have none, while `CollectionPage` is used 9 times
  and all nine are guide hubs. Verify and size it. — Carousel/ItemList docs
- **LocalBusiness** requires only `address` and `name`. Use the most specific subtype —
  `VeterinaryCare` exists in schema.org and is the correct type for a vet clinic.
  **`additionalType` is explicitly unsupported** — use a `@type` array.
- **Organization:** *"You don't need to include it on every page of your site."*
- **schema.org current release is v30.0, 19 Mar 2026.**
- Audit against the HTML docs, not the `.md.txt` mirrors — the mirrors lag and still list FAQ.

**Crawling and canonicals**

- **Canonical signal strength:** redirects (strong) > `rel=canonical` (strong) > sitemap inclusion
  (weak). Use **absolute** URLs, self-referential, one per page, no conflict between HTML `<link>`
  and any HTTP `Link:` header. — Consolidate duplicate URLs doc, updated **2026-07-10**
- **301 and 308 both transfer canonical. 302 and 307 do not.** Google follows up to 10 hops.
- **A canonical pointing at a URL that redirects is a contradiction**: the page declares X
  canonical, and X tells Google to go to Y. Google will usually resolve it, but you are spending a
  signal to say something you then take back. **192 pages here do exactly that** — §C.
- **`lastmod` is used only when consistently accurate and verifiable.** Omit rather than fake.

**AI surfaces**

- **There is no AI-specific markup, file format, or schema.** *"Structured data isn't required for
  generative AI search, and there's no special schema.org markup you need to add."* Google's
  explicit "don't bother" list also covers content chunking, AI-specific rewriting, and seeking
  inauthentic brand mentions. — AI optimization guide, **2026-07-10**
- **llms.txt:** Google *"ignores them"* (changelog 15 Jun 2026). No platform has claimed to consume
  it. A 137,210-domain log study found **97% received zero requests** in May 2026, and **zero
  requests arrived for files that don't exist** — AI systems never probe for it.
- **Structured data does not lift AI citations.** Best-controlled study (Ahrefs 2026: 1,885 pages
  adding JSON-LD vs ~4,000 matched controls) found AI Overview citations **fell 4.6%** vs controls.
  Retrieval rank dominates: 43% citation rate at position 1 → 5% by position 7.
- **Ranking no longer predicts citation.** Only **37.9%** of AI Overview citations came from top-10
  URLs in Jan 2026, down from ~76% in Jul 2025. — Ahrefs, 863k SERPs, 2 Mar 2026
- **Genuine update recency correlates strongly with LLM citation.** 75% of LLM-cited pages were
  updated within the last year, over half within three months. — Seer, n=47,097 citations,
  **24 Jul 2026**. **For a site publishing regulations that change, this is not a growth hack —
  it is the product.**
- **Retrieval vs training crawlers.** `GPTBot` = training; `OAI-SearchBot` = ChatGPT citations.
  `ClaudeBot` = training; `Claude-SearchBot` = citations; `Claude-User` = user-triggered.
  **`Google-Extended` does not affect Search** — verbatim: *"Google-Extended does not impact a
  site's inclusion in Google Search nor is it used as a ranking signal in Google Search."*
  `Applebot-Extended` is likewise a training control; `Applebot` is the retrieval one.
- **Preferred Sources** extended to AI Overviews and AI Mode on 27 May 2026. Domain or subdomain
  level only.
- **Spam policies now cover generative AI responses** — changelog 15 May 2026.

**Technical**

- **Googlebot fetches up to 2MB per URL**, headers included. Google recommends externalising heavy
  CSS/JS and putting `<title>`, meta, canonical and structured data **early in the HTML**.
- **The Web Rendering Service is stateless** and clears local storage between requests. Relevant:
  this site ships a service worker (`src/sw.js`) and an `offline.html`.
- **Googlebot supports HTTP/1.1 and HTTP/2 only** (no HTTP/3), gzip/deflate/brotli (no zstd).
- **Core Web Vitals are still exactly LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75.** No new metric.
- **Cloudflare Pages:** redirects win over static assets and over `_headers`; **redirect chains do
  not resolve** (only the first hop applies); `_headers` caps at 100 rules, `_redirects` at 2,100.
  Default cacheable-asset header is `public, max-age=0, must-revalidate` unless overridden.
- **CSP:** for a static site use a **hash-based** strict CSP — nonces are impossible.
- **WCAG 2.2 is current.** WCAG 3.0 is an incomplete draft, years away. This site has an
  `/accessibility` page — hold it to 2.2 AA.

**Threat surface**

- **Spam reports can now trigger manual actions.** Changed **14 Apr 2026**; the old wording said
  reports were never used for direct action. Google also states *"we must send the submission text
  to the site owner."* On a YMYL topic with commercial relocation competitors, this is live.

### 2.3 Claims you must not make

- "E-E-A-T is a ranking factor."
- "The 2026 Quality Rater Guidelines say…" (there is no 2026 edition)
- "Google says directories should…" (Google has published nothing directory-specific)
- "Add llms.txt / FAQ schema / special markup to get into AI Overviews."
- "Structured data improves rankings." (Mueller, 13 Apr 2025: *"Structured data won't make your
  site rank better."*)
- "Low index ratio means Google thinks the site is low quality."
- "Blocking Google-Extended removes you from AI Overviews." It does not.
- "Information gain is a Google ranking signal." (2022 patent, scoped to automated assistants.)
- Any page-count threshold for scaled content abuse.
- Any confident causal claim about traffic. You have no Search Console access.
- **Any regulatory claim you have not verified against a primary source this run.** See §A.

---

## 3 · THE AUDIT — TEN DOMAINS

For each finding: **what**, **where** (`src/` file:line, and the `dist/` page it produces), **how
many** (with the command), **why it matters** (cite the dated standard from §2), **severity**,
**the smallest fix**. Do not apply it.

- **S1 — actively harmful.** Costing traffic, indexing or trust now; exposes a manual-action risk;
  **or is factually wrong on a regulated topic.**
- **S2 — blocking upside.**
- **S3 — dead weight.**
- **S4 — note.**

Index-affecting items go in a separate **"Needs Tim's explicit yes"** section, downside in
**clicks**, one recommendation per item, no bundles.

---

### A · FACTUAL ACCURACY ON REGULATED TOPICS — the biggest section

Spend most of your effort here. A wrong fact on this site costs an animal, not a ranking.

1. **The 36 country pages are the priority, and the duplication finding is worse than it looks.**
   `to-finland` and `to-ireland` measure **83.2% 5-gram Jaccard similarity**; 4 more pairs at
   75–80%, 19 at 70–75%. Re-run `npm run audit:country-pairs` and confirm.

   Then ask the question the similarity score implies but does not state: **EU third-country pet
   rules genuinely differ by member state** — the competent national authority, the approved rabies
   titre laboratory, whether an EU health certificate needs endorsement and by whom, entry-point
   restrictions, and national quarantine powers. **If two country pages are 83% identical, at least
   one of them is describing the other country's regime.** That is not a thin-content problem, it
   is an accuracy problem, and it is **S1**.

   For each of the 36, report: does the page name the destination country's **actual** competent
   authority, cite that authority's **own** URL, and state the rabies titre timing and certificate
   requirements specific to that country? Count how many do all three. Do not fix them.

2. **Verify every hard regulatory claim against a primary source, this run.** Thai DLD (Department
   of Livestock Development), Thai MFA, destination-country agriculture/veterinary ministries,
   IATA, the airline's own live pet policy. For each claim on `/bring-pet-to-thailand/` and the
   country pages, report: the claim, the source it currently cites, whether that source is primary,
   and whether the source still says what the page says it says. **Flag every claim whose cited
   source you could not re-open.**
3. **The two known corrections are the template for what to look for.** The site previously stated
   U-Tapao could clear an imported pet (it has **no** Animal Quarantine Station) and that Thailand
   caps rabies vaccination at 12 months (it does not; the rule is **21 days minimum**). Both were
   plausible, both were wrong, both were only caught by checking a primary source. **Find the next
   two.** Airports, quarantine stations, titre validity windows, microchip standards (ISO 11784/
   11785), breed restrictions and airline embargoes are where errors of this shape live.
4. **Dates on regulatory facts.** Every regulatory claim should carry the date it was checked.
   Count how many do. A rule stated without a date is unfalsifiable and, per §2.2, genuine recency
   is also this site's best AI-citation asset. Report the distribution of check dates.
5. **Vet and emergency pages.** `/pet-emergency/`, `/pet-health-pattaya/`, `/mobile-vets/`,
   `/vets/`. For every listed clinic: is there a working contact channel, an address, and stated
   hours? The handoff already flags `mobile-vets/mor-ja-pet-clinic-pattaya` as having **no contact
   channel at all** — on an emergency-adjacent page that is **S1**. Count how many others are
   incomplete.
6. **`/pet-insurance-thailand.html`.** A financial product page. Are named products, prices and
   terms dated and sourced? Is there any statement that could be read as advice rather than
   information?
7. **Never invent a fact.** Grep for hedges that stand in for research — "typically", "usually
   around", "generally requires", "should be about" — on regulatory pages specifically. On a YMYL
   topic a hedge is not caution, it is an unverified claim wearing a hat. Count them.
8. **First-hand claims.** Grep for "we visited", "we called", "we checked with", "our vet", "in
   person". If the methodology cannot back it, **S1**.
9. **Commodity test.** Sample 15 pages. One line each: **what does this say that the destination
   country's own government page and the top competing relocation-company blog do not?** Count how
   many have a real answer. The honest answers here are the site's whole moat: local Pattaya
   specifics, real costs in baht, which local vet actually issues the export paperwork.

---

### B · STRUCTURED DATA

1. **`ItemList` is missing on the 7 directory category pages** while `CollectionPage` is used 9
   times, all on guide hubs. `ItemList` is the one type where a directory is the eligible party.
   Verify both counts, name the 7 pages, and name the `src/` file that would emit it. **S2.**
2. **`FAQPage` on 170 pages is inert.** FAQ rich results died 7 May 2026; Console API support ends
   Aug 2026. Google explicitly says unused structured data causes no problems, so this is **S3 —
   report the byte cost and stop.** The handoff's position (*"Keep it, don't expand it"*) is
   correct; confirm nothing in `src/` is still adding it to new pages.
3. **Review and rating markup must be zero.** Confirm no `aggregateRating`, `ratingValue`, `review`
   or `Review` anywhere in the JSON-LD graph. This site compiles vet and service information
   editorially, and Google's rule is explicit. Any hit is **S1**.
4. **Vet clinics should be `VeterinaryCare`**, not bare `LocalBusiness`. Check which subtype
   `src/layout.js` emits per page type. Check `additionalType` is not used — it is **explicitly
   unsupported**.
5. **JSON-LD validity across all 209.** Parse every block. Report parse errors, undefined `@type`,
   broken `@id` references, dangling `sameAs`. Note the graph is assembled in `src/layout.js` — a
   defect there is a 209-page defect.
6. **Markup vs visible text.** Google's policy requires markup to match visible content. Sample 20
   pages and verify every JSON-LD claim (address, phone, hours, dateModified) appears rendered.
7. **`dateModified` honesty.** All 209 carry a `WebPage` node with `dateModified` plus
   `article:modified_time`. Verify these reflect real content change, not build time. A build that
   stamps today's date on 209 unchanged pages manufactures a freshness signal Google explicitly
   warns about — and on a regulations site it is worse, because it asserts the rules were
   re-checked when they were not. **S1 if it is build-time.**

---

### C · CANONICALS, REDIRECTS, SITEMAP, ROBOTS

1. **192 of 209 canonicals still end in `.html`, and every one of those URLs 308-redirects.**
   Match attributes in **both orders** — see §0.5 trap 1; a `rel`-first regex returns 0 and reads
   as clean. The same `canonical()` function in `src/layout.js` feeds `rel=canonical`, `og:url`,
   the schema `@id` and the sitemap entry for all 209 pages, so this is one function producing four
   contradictory signals per page.

   **This is the site's biggest single SEO item and it is deliberately GATED.** Tim's scope lock
   requires the downside stated *in clicks*, and the Search Console figure was not available. The
   agreed plan is a canary on `/area/` (8 pages) first, two weeks of data, then the rest.
   **Your job: quantify it precisely — how many pages, which signals disagree, what the redirect
   chain looks like — and put it in §8 of your report. Do not recommend executing it. Do not bundle
   it with anything.**
2. **Confirm the redirects are 308 and not 302/307.** 302 and 307 do not transfer canonical. Check
   `dist/_redirects` and the Cloudflare dashboard rules described in the repo docs. Flag any chain —
   Cloudflare does not resolve chains, only the first hop applies.
3. **`<changefreq>` on all 205 sitemap URLs.** Google ignores it — verbatim, doc updated 2026-07-08.
   **S3**, bytes only. (`<priority>` is correctly absent.)
4. **209 pages vs 205 sitemap URLs.** Identify the 4 and confirm each exclusion is deliberate
   (`404.html`, `offline.html`, `masthead.html` are plausible; verify).
5. **robots.txt — two separate problems.**
   - **The edge cache is still serving the school guide's `robots.txt`** from the 27 July incident
     (`cf-cache-status: HIT`, `max-age=86400`). Origin is correct. **Verify current state with a
     cache-buster and with the plain URL, and report both.** If the plain URL still names
     `pattaya-school-guide.com`'s sitemap, that is **S1** and it is a dashboard purge, not a code
     fix.
   - **The file omits the 2026 retrieval crawlers**: `Claude-SearchBot`, `Applebot`,
     `Perplexity-User`, `DuckAssistBot`, `Meta-WebIndexer`, `Amazonbot`, `OAI-AdsBot`. It currently
     allows `Google-Extended` and `Applebot-Extended`, which are **training controls, not retrieval
     bots** — harmless, but note the distinction so nobody reasons from it later. The handoff
     parks this with the gated migration because it is a robots directive; respect that and put it
     in §8.
6. **Service worker.** `src/sw.js` plus `offline.html`. Verify the SW cannot serve a stale page to
   a crawler, and that it does not cache `robots.txt` or `sitemap.xml`. Given this site just spent
   11.5 hours serving another site's content, a caching layer that could extend that is worth
   checking.
7. **Index state.** You have no Search Console. **Do not guess at index counts and do not fill the
   gap with plausible numbers.** Note that the homepage was canonicalising to another domain for
   11.5 hours and Google can hold a duplicate cluster up to two weeks — state what Tim should check
   and what a healthy answer looks like.

---

### D · AI SURFACES

1. **Extractability on regulated pages.** AI engines quote the first specific sentence they find.
   For 15 sampled country and import pages: does the opening contain the actual rule — a number of
   days, a named authority, a specific document — or a hedge? Count. On this topic being the source
   an AI quotes is worth more than a rank.
2. **Freshness distribution.** Report genuine last-substantive-change dates across all 209, from
   git, not from `dateModified`. Against the Seer finding, how much of the corpus sits in the band
   that gets cited? For a regulations site this doubles as a staleness audit.
3. **`llms.txt`.** Present in `dist/`. Google ignores it; 97% of such files get zero requests.
   **S4 — keep or drop, no impact.** Do not recommend expanding it. But **do** check it does not
   contradict the pages it describes, and that it is not left over from the school-guide incident.
4. **Preferred Sources.** The footer link was shipped 27 July. Confirm it is present on all 209 and
   uses the domain-level format — subdirectories are not eligible.
5. **What NOT to recommend.** No content chunking, no AI-specific rewriting, no brand-mention
   campaigns, no special markup. Google names all four as unnecessary in a doc updated 2026-07-10.

---

### E · TECHNICAL AND PERFORMANCE

1. **The Lighthouse JSON at the repo root is ~6 MB across 9 files** and dates from May–June 2026 —
   **before Lighthouse 13.0 removed 7 audits.** Confirm whether they are tracked in git, and treat
   every number in them as stale. Do not quote them as current. Report whether
   `lighthouse-reports/` is also tracked.
2. **Page weight vs the 2MB Googlebot cap.** Report the largest `dist/` pages. Check inline CSS/JS
   volume — `src/critical.css` is inlined, and Google now recommends externalising heavy CSS/JS
   because inline bytes count against the HTML budget while subresources have their own.
3. **Head order.** Are `<title>`, meta, canonical and JSON-LD in the first bytes of `<head>`,
   before inlined critical CSS? `src/layout.js` controls this for all 209.
4. **`dist/_headers`.** Cache policy — do fingerprinted assets get long-lived `immutable` caching,
   or Cloudflare's `max-age=0, must-revalidate` default? Given the robots.txt edge-cache problem,
   check what TTLs are set on `robots.txt` and `sitemap.xml` specifically — **an 86400 TTL on
   `robots.txt` turned an 11-hour incident into a multi-day one.** Check CSP is hash-based, check
   for deprecated `report-uri` without `report-to`, and whether HSTS carries `preload` (now
   discouraged).
5. **Core Web Vitals.** LCP, INP, CLS only. Two font families (`bricolage-grotesque`,
   `hanken-grotesk`) — verify both are actually used, subset, self-hosted WOFF2, and check
   `font-display`. With effectively no imagery, a font is the likely LCP element and font swap the
   likely CLS source.
6. **No photography anywhere.** 209 pages, one image, the footer avatar. Report it here as a
   technical fact and size it in §J as the opportunity it is.
7. **`npm run audit:mobile`** — `check-mobile-overflow.js`. Run it and report.
8. **Dependencies.** `puppeteer-core`, `sharp`, `clean-css`, `terser`, `html-minifier-terser`.
   `npm audit` — report actual exploitability for a static site with no server. Do not pad.

---

### F · THE BUILD, THE TOOLS AND THE DEPLOY

**This section is about the thing that actually broke.** A site that cannot deploy safely is a
bigger risk than any ranking issue, and this repo has proven it.

1. **The deploy has no guard, and the guard is item 3 on the outstanding list, unwritten.**
   `npx wrangler pages deploy dist --project-name pattayapets` is typed by hand every time. On
   27 July the project name pointed at the wrong project and pattayapets.com served the school
   guide for 11.5 hours. **Specify the guard precisely** — verify `dist/index.html` contains
   `pattayapets.com` and the expected title, hardcode the project name, abort loudly otherwise,
   ~20 lines, in-repo, single-purpose. **Describe it. Do not write it.** Note that
   `tools/deploy.mjs` and `npm run deploy:check --dry-run` already exist — read them and report
   whether they already do this, in which case the finding is "it exists and is not being used."
2. **`tools/audit-linking.js` aborts `npm run ship`.** It `process.exit(1)`s because it requires
   the string `"Pattaya Authority network"` in every footer — deliberately removed when the network
   was dismantled. It is the last step of `build:all`, and `ship` is `build:all && indexnow`, so
   **IndexNow has never pinged since the network came down.** Confirm this and report how long.
   **S1** — a broken gate silently disabling a shipping step is the exact class of failure that
   hides for months.
3. **`npm run deploy` is an alias for `npm run ship`, which does not deploy.** `ship` =
   `build:all && indexnow`. The actual deploy is a separate wrangler command. **A script named
   `deploy` that does not deploy is a trap for the next person** — report it.
4. **Tool inventory.** ~20 files in `tools/`. For each: what it does, whether it is wired into
   `package.json`, whether it writes anything, and whether it is safe to run. There are 14 audit
   tools and considerable overlap — `audit-comprehensive`, `audit-full`, `audit-seo`,
   `audit-content-depth`, `audit-content-richness`. Report which are redundant and which are the
   real gates.
5. **Gate coverage.** Name the failure each audit tool prevents. Then name the failures **not**
   covered — candidates: wrong project name on deploy; a country page describing another country's
   regime; a regulatory claim whose source no longer says it; `dateModified` bumped without content
   change; a vet listing with no contact channel; canonical disagreeing with the URL it points at.
   **Describing these precisely is your most durable output. Do not implement them.**
6. **`footerOld()` in `src/layout.js`** — ~100 lines of dead code containing the old PA-NET block
   with `pattaya-authority.com` links. Not rendered. Confirm it is genuinely unreachable, then
   report it as **S3** — dead code that names a retired brand will eventually get switched back on
   by someone who does not know it was retired.
7. **`AGENTS.md` contradicts the scope lock.** It still names `C:\Projects\pattaya-authority` as
   "Agency HQ" and `C:\Projects\NETWORK-RULES.md` as the rulebook; `src/layout.js` and `build.js`
   also mention pattaya-authority. The scope lock directly beneath forbids touching anything
   outside this repo. **Grep the whole repo and the whole of `dist/` for "pattaya-authority" and
   "Pattaya Authority" and report every hit with file and line.** Flag the managed header
   contradiction; do not edit it.
8. **Nothing is pushed.** Local `main` is `e6402cf`, `origin/main` is `cdfdcee`. Report the gap and
   what is in it. **Use `git log` or read the refs directly — `git status` over the bridge creates
   a `.git/index.lock` that cannot be deleted and will block Tim's next commit.**

---

### G · TRUST, SOURCING AND CLAIMS

1. **The site calls itself "the honest pet resource for Pattaya."** Verify that claim. Is sourcing
   visible on the page, not just present in a data file? Google's trust question asks about *"clear
   sourcing"* and the "How" guidance asks for method disclosure *"accompanied by evidence."*
2. **`/corrections.html` exists** — that is unusually good and worth saying so. Check it is
   reachable from the pages most likely to be wrong (import, country, vets), lists real
   corrections with dates, and gives a working route to report an error. The U-Tapao and rabies
   corrections should be on it.
3. **Author and publisher entities.** Do bylines resolve? Is there an on-domain About page with
   real background? Is `Organization` emitted once rather than on all 209?
4. **Expertise disclosure on YMYL pages.** The site is not a veterinary practice and must not read
   as one. Check for any language that could be read as veterinary or legal advice rather than
   information, and check that pages point to the competent authority rather than substituting for
   it.
5. **Cross-domain links.** Exactly one followed timpaemi.com credit per page, zero sister-site
   links anywhere including JSON-LD and `sameAs`. Note `audit-linking.js` currently enforces the
   **opposite** — see §F2.
6. **Official-link health.** `npm run audit:official` exists. Run it. Every link to a government or
   authority page that 404s or redirects to a generic homepage is **S1 on a regulations page** —
   it is the evidence for a claim, and if it is dead the claim is unsupported.

---

### H · ACCESSIBILITY

Target **WCAG 2.2 AA**. The site has an `/accessibility` page, so it is making a claim — hold it
to the current standard. Audit the **templates in `src/`**, not 209 pages; a template defect is a
209-page defect.

Accessibility is **not** a Google ranking factor and no primary source claims it is. Argue it as
correct for users, mechanically overlapping with SEO (headings and link text are parsed, crawlable
`<a href>` is required for discovery, CLS is both a CWV and a usability defect), and newly relevant
to agent readability since Chrome fused a11y-tree quality into Lighthouse's Agentic Browsing
category.

1. One `<h1>` per template, no skipped levels.
2. Contrast 4.5:1 body, 3:1 large text and UI.
3. Keyboard operability and visible focus, including the directory filters.
4. Link text: count "click here", "read more", "learn more", bare URLs.
5. Form labels on contact and any search.
6. `lang` correct; Thai clinic and place names marked `lang="th"` where they appear.
7. WCAG 2.2 delta specifically: focus appearance, target size minimum (24×24), dragging movements,
   consistent help, redundant entry, accessible authentication.
8. With no photography there is little alt text to check — but flag any alt text describing an
   image that does not exist.

---

### I · CODE AND SECURITY

1. **Secrets.** Scan the whole repo including `research/`, `docs/`, `.cursor/`, `.wrangler/` and
   the Lighthouse JSON dumps. `.gitignore` is 192 bytes — confirm it covers `dist/`, `.wrangler/`,
   `node_modules/` and any credential. Any hit is **S1**.
2. **What is tracked that should not be.** ~6 MB of Lighthouse JSON at the repo root plus
   `lighthouse-reports/`. `lh-tmp.json` at 835 KB. Report which are tracked and the total repo
   weight they add.
3. **Loose file at the web root:** `dist/a8f3c91e2b7046d59e1a0c4f8b2d7e63.txt`. Confirm what it is
   — it looks like a site-verification token — before suggesting anything.
4. **Client JS.** `src/area-tiles.js`, `src/guidekit.js`, `src/sw.js`. Any `innerHTML` with
   unsanitised input, any `eval`, any inline handler that breaks a hash-based CSP.
5. **Dead code.** `footerOld()` (§F6), unreferenced entries in `src/data/`, unused CSS in
   `src/critical.css`.
6. **`.github/ci.yml`.** Confirm it has no deploy step (the handoff says it does not) and report
   what it does gate.

---

### J · WHAT IS NOT BEING CLAIMED

1. **Original photography is the largest unclaimed asset and it is zero.** 209 pages, one image.
   Google's own non-commodity example is a first-hand account; first-hand imagery is the clearest
   signal an aggregator cannot copy, and for vets, quarantine facilities and paperwork it is
   directly useful — a photo of the actual export certificate, the actual DLD office, the actual
   clinic entrance. **Size it**: which pages would gain most, and what a realistic minimum is.
2. **The 36 country pages are an asset disguised as a liability.** Nobody else writes
   Thailand → *specific country* pet export with real baht costs and the name of the local vet who
   issues the paperwork. At 83.2% similarity they currently capture none of that. Report what a
   genuinely differentiated country page would contain — that specification is worth more than the
   duplication finding itself.
3. **`ItemList` on the 7 directory category pages** — §B1. The one schema type where a directory is
   the eligible party.
4. **The corrections page as a trust asset.** Few competitors have one. Is it being surfaced, or
   buried in the footer?
5. **The structural gap.** Across the 2025–26 core updates what held was verified proprietary data;
   what lost was open aggregation. Where does this site sit, honestly, and what is the smallest
   change that moves it? Do not propose review markup — it is prohibited for this model.

---

## 4 · OUTPUT

Write `docs/AUDIT-2026-07.md`. That is the only file you create.

```
# PATTAYA PETS FULL AUDIT — 2026-07-<dd>

## 0 · How to read this
<3 sentences. What you checked, what you could not check, biggest single finding.>

## 1 · Is anything on this site wrong?
<Half a page. Every regulatory claim you could not verify, every country page describing
another country's regime, every dead official link. Counts, not adjectives. This section
comes first because it is what the site is for.>

## 2 · The scoreboard
| Domain | S1 | S2 | S3 | S4 | Verdict (one line) |
<one row per domain A–J>

## 3 · S1 — act now
<each: what · where (src/ file:line → dist/ page) · count + exact command · why (dated
standard) · smallest fix. Ordered by damage. Factual errors first, then the robots.txt
edge cache, then the broken ship gate.>

## 4 · S2 — upside being left on the table
## 5 · S3 — dead weight
## 6 · S4 — notes

## 7 · The deploy problem
<The 27 July incident, the missing guard, whether tools/deploy.mjs already solves it,
and the exact specification for the guard. Do not write the guard.>

## 8 · NEEDS TIM'S EXPLICIT YES
<The .html → clean-URL migration, quantified. The robots.txt crawler additions that ship
with it. Downside in clicks. One recommendation per item, no bundles.>

## 9 · Checks that belong in a gate
<Precisely described, not implemented. Longest half-life section.>

## 10 · What I could not check
<Search Console, live CrUX, real rankings, live edge-cache state if you cannot fetch.
Say what you would need. Do not guess and do not fill gaps with plausible numbers.>

## 11 · What is already right
<Honest and specific. The corrections page, the U-Tapao and rabies fixes, the build system,
209/209 dateModified, the audit tooling. Name them so nobody removes them.>

## 12 · Commands appendix
<every command you ran, copy-pasteable.>
```

**Report discipline:**

- Every count comes with the command that produced it — and every regex must match attributes in
  **both orders** (§0.5 trap 1).
- Every "why it matters" cites a dated source from §2. If you cannot cite one, mark the finding
  **"my judgement, unevidenced"** and say so plainly.
- Where evidence is third-party measurement rather than Google guidance, say which.
- **No severity inflation.** Inert FAQ markup is S3 because Google explicitly says unused
  structured data causes no problems. A wrong rabies interval is S1. Do not flatten the difference.
- **On regulatory facts, cite the primary source you re-opened and the date you opened it.**
  A claim about Thai or EU pet rules with no primary citation does not belong in the report.
- If a domain is clean, say "clean" in one line and move on.

Then **stop**. Do not fix anything. Do not deploy. Do not run `wrangler`. Do not commit.
Do not push.
