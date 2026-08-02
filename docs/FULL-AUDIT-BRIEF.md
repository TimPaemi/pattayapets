# PATTAYAPETS — TOTAL AUDIT BRIEF

_Written 1 August 2026. Phase 1 of three: **AUDIT → FIX → IMPLEMENT**._
_This phase is READ-ONLY except for the one report file you produce._

You are auditing `C:\Projects\pattayapets` — the whole thing, to the floor. Not a checklist
pass: an investigation. Every layer, every file, every claim the site makes. Assume nothing is
correct because it looks correct, and assume nothing is broken because a previous audit said
so — that audit is nine days old and things have moved.

**Your deliverable is one file:** `docs\FULL-AUDIT-2026-08.md`. Nothing else in the repo may
change during this phase.

---

## 0 · WHAT THIS SITE IS

pattayapets.com — pet relocation, import/export regimes, airline rules, vets and pet services
in Pattaya. Custom Node static site: `build.js` renders `src\pages\*.js` + `src\data\*.js`
into `dist\`. Cloudflare Pages project `pattayapets`. ~209 HTML pages, ~205 sitemap URLs, 35
business listings, 7 categories, 8 areas.

Its editorial position: **facts only, sourced, no paid placement, no invented verdicts.** Zero
site visits have happened, so zero verdicts exist — that is deliberate, not a gap.

Two content classes carry real-world risk and must be judged hardest:

- **Regulated import/export pages** (`/bring-pet-to-thailand/`, `/take-pet-out-of-thailand/`)
  — a wrong rule here can strand a family's animal at a border.
- **Emergency and health content** — a wrong 24-hour vet number or a veterinary-advice slip is
  a safety issue.

---

## 1 · RULES FOR THIS PHASE

**You may:** read every file; run every audit, build, check and Lighthouse command; fetch the
live site and any third-party URL you need to verify a claim; write `docs\FULL-AUDIT-2026-08.md`.

**You may not:** change any other file · run `npm run deploy`, `deploy:cf`, `ship`,
`indexnow`, or `scripts\ping-indexnow.js` · run `git` in any form (no add, commit, push,
stash, checkout) · edit `dist\` · edit any validator or gate to make it pass · state a figure
you did not verify at source.

**Where you are blocked, say so precisely.** "Could not check X because Y" is a finding. A
guess dressed as a finding is worse than a gap.

---

## 2 · RUN THE MACHINERY FIRST — capture raw output

Run each, capture the real output, and treat every number as a hypothesis to verify, not a
fact to repeat:

```
npm run build
npm run check
npm run audit:invariants
npm run audit:seo
npm run audit:comprehensive
npm run audit:directory
npm run audit:country-pairs
npm run audit:orphans
npm run audit:linking
npm run audit:content
npm run audit:content:richness
npm run audit:official
npm run audit:full
npm run audit:live
npm run audit:mobile
npm run audit:lighthouse
npm run audit:lighthouse:all
npm run loop:queue
node tools\deploy.mjs --dry-run
```

Then ask the question the tools cannot: **what do these audits not check?** A gate that passes
tells you only that the gate is satisfied. `tools\audit-invariants.js` holds 9 assertions
against a site with hundreds of failure modes. Name every important property that no script
currently tests.

---

## 3 · THE FOURTEEN DIMENSIONS

Work all of them. For each finding use the §4 format.

### A · Inventory and architecture
Real page count vs sitemap vs `_redirects` vs internal links. Orphans, dead ends, depth from
home. URL taxonomy: is it consistent, guessable, stable? Any page reachable only from the
footer or a hub nobody visits? Any content duplicated across two URLs? Any URL that should
exist and does not (a hub with no index, a category with no landing page)?

### B · Technical SEO
`robots.txt` correctness and AI-crawler policy · sitemap accuracy (every indexable page
present, nothing 404 or noindexed inside it, `lastmod` honesty) · canonicals: self-referential,
absolute, no cross-canonical accidents · redirect chains and loops in `_redirects` ·
HTTP status codes on the live site for a sample of 30 URLs including edge cases · pages over
Google's 2 MB fetch cap · `_headers` cache policy vs asset fingerprinting (are immutable
assets actually content-hashed?) · `manifest.webmanifest`, `sw.js` scope and caching traps
(is a stale service worker serving old HTML?) · IndexNow: key file, `keyLocation`, and the
403/`UserForbiddedToAccessSite` history — is the domain actually verified in Bing?

### C · On-page SEO
Title and meta description: length, uniqueness, template collisions, keyword-first ordering ·
H1 uniqueness and heading hierarchy (skips) · internal-link density, anchor-text quality
(how many "click here" / bare-URL anchors?), reciprocal linking between related pages ·
keyword coverage vs what people actually search for pet relocation to Thailand — and
**cannibalisation**: which pages compete for the same intent? · content depth distribution:
list every page under 300 words with its URL and word count · the 41-word map-import stub
problem — how many remain?

### D · Structured data
Every JSON-LD block: parses, validates, correct type, no HTML inside values · publisher and
author entity graph consistent across all pages · **zero `aggregateRating`, zero `Review`** —
verify, do not assume · `LocalBusiness`/`VeterinaryCare`/`PetStore` field correctness against
each business record · FAQ markup matches visible Q&A exactly, and no FAQ on closed or
unverified entities · Breadcrumb, CollectionPage, ItemList coverage on hubs · total JSON-LD
byte weight vs value — is any of it dead weight?

### E · Content quality and E-E-A-T
Read a real sample — at least 25 pages across every section, including all regulated pages.
For each: is every factual claim sourced? Is every source reachable and does it say what the
page says? Are dates honest (`updated` stamps that predate the content's last real change)?
Do the site's trust claims match reality — the footer, About, standards and methodology pages
against the actual editorial process (zero visits, zero verdicts)? Is any sentence
veterinary advice? Are disclaimers present where they must be? Is the tone consistent?
**Fabrication hunt:** any figure, phone number, hour, price or credential you cannot trace to
a source is a finding, named individually.

### F · Regulated content accuracy — the highest-stakes section
For the import and export pages, re-prove the load-bearing rules against **primary sources
only** (DLD and other `*.go.th`, the destination country's own competent authority, embassy
notices, IATA, the airline's own policy). Cover at minimum: microchip and rabies sequencing,
titre thresholds and waiting periods, permit requirements, quarantine-station reality
(including the U-Tapao claim), airline and cargo rules, and the South Korea advance-permission
threshold. Every check gets its URL and reopen date. Where the page and the source disagree,
quote both.

### G · Business data integrity
`src\data\businesses.js` against its own header rules and against `research\businesses\*.json`
dossiers: schema conformance, duplicate slugs or names, contact-policy compliance (no landline
except verified 24-hour emergency vets), `HUMAN QUEUE` items still unpublished, category and
area validity, records whose dossier holds facts that never reached the live data, records
live on the site whose business may no longer exist. Sample-verify 8 businesses against their
current real surfaces and report which are stale.

### H · Code quality
`build.js`, `src\pages\*.js`, `src\data\*.js`, `src\layout.js`, `src\guidekit.js`,
`src\linking.js`, and every file in `tools\`. Look for: duplicated logic across page modules ·
copy-pasted blocks that should be data · hardcoded values that belong in config · dead code
and superseded scripts · missing error handling (what happens when a data file is malformed?)
· encoding handling (UTF-8 safety on Windows) · overlapping/redundant audit tools · anything
that would break if a new page type were added · the retired `index-gate.mjs` equivalent and
any other script that must never run. Assess maintainability honestly: could a new developer
add a page type in an hour?

### I · Performance
Lighthouse mobile and desktop on home, a hub, a directory listing, a guide and a regulated
page. Then the causes, not the scores: per-page HTML weight, the repeated critical-CSS block
across every page, image formats and sizes, font loading, JS execution, render-blocking
resources, LCP element per template, CLS sources, and the service worker's effect on repeat
visits.

### J · Accessibility
WCAG 2.2 AA. Colour contrast on every token pair actually used (the brand teal and coral are
suspect) · heading order · landmarks and skip links · alt text presence and quality · form
labels · focus visibility and keyboard traps · tap-target sizes · `lang` attributes including
every Thai-script run · motion and animation preferences · screen-reader sanity on the
directory and search components.

### K · Security and privacy
CSP (is `unsafe-inline` present, and what would it take to remove?) · all security headers ·
dependency vulnerabilities including the known `sharp` advisory · any secret, key or token in
the repo or in `dist\` · `.well-known/security.txt` accuracy · analytics and consent: what is
loaded before consent, what data leaves the page, is the privacy page truthful · any PII in
business data or research files · third-party embeds.

### L · Network-rules compliance
Zero sister-site links or brand names in **any** file type, including `.md`, JSON-LD and
`sameAs` · exactly one followed `timpaemi.com` credit per page · "Pattaya Authority" appears
nowhere · publisher entity correct and identical everywhere. Grep the whole tree including
`dist\`, and report every hit with file and line.

### M · Build, deploy and repo hygiene
The deploy guard and its hardcoded project name (the 11.5-hour wrong-site incident) · CI
workflows · `.gitignore` correctness — is anything sensitive or huge tracked, is anything
needed ignored? · working-tree state and uncommitted volume · `dist\` freshness vs source ·
whether the live site corresponds to any commit · build determinism and build time ·
`npm run build:all` step order.

### N · Strategy and coverage gaps
Read `docs\AUDIT-2026-07.md` §7, §8, §9, §13.4 and §14 first, then assess: which of those
items are now done, stale, or still open? Beyond that: what does a person moving to Pattaya
with a pet need that this site does not answer? Where is coverage thin against real demand?
What would you build next, and what would you retire? Name the three changes with the highest
ratio of traffic impact to effort.

---

## 4 · FINDING FORMAT — every finding, no exceptions

```
### [S1|S2|S3|S4] <short imperative title>
DIMENSION   A–N
WHERE       exact file paths with line numbers, or exact URLs
EVIDENCE    the command output, the quoted code, the source URL + date — enough that
            a reviewer can re-confirm it in one click without trusting you
IMPACT      what it costs in reader harm, traffic, or maintenance — concretely
FIX         the exact change. Not "improve X" — the file, the line, the replacement.
EFFORT      minutes / hours / days
RISK        what could break if the fix is applied badly
OWNER       LOOP (safe for automation) · SOL (needs judgement) · TIM (human decision)
```

Severity: **S1** act now — reader harm, legal exposure, indexing damage, security ·
**S2** fix next — real cost, no immediate harm · **S3** clean-up · **S4** note.

---

## 5 · THE REPORT — `docs\FULL-AUDIT-2026-08.md`

1. **Verdict** — five sentences. Is this site healthy? What is the single biggest problem?
2. **Scoreboard** — every dimension A–N rated Red / Amber / Green with a one-line reason.
3. **The numbers** — real counts, measured today, each with the command that produced it.
4. **S1 findings**, then S2, S3, S4 — full §4 format.
5. **Needs Tim's explicit yes** — anything touching indexing, canonicals, robots, pruning,
   publisher identity, deploy identity, or money. Each with the decision stated as a question
   and the trade-off in clicks, not percentages.
6. **What the automation should own** — findings marked OWNER: LOOP, phrased as tasks the
   autopilot could execute, so `AUTOPILOT.md` and `tools\loop-queue.js` can be updated to
   generate them.
7. **What no script currently tests** — the gate gaps from §2, each with the assertion that
   should exist.
8. **Could not check** — every blocked item and why.
9. **The fix plan** — ordered, with dependencies, in the sequence phase 2 should execute.

Write it for a reader who will act on it, not one who needs convincing. No padding, no
restating the brief, no praise. If something is fine, one line saying so is enough.

---

## 6 · WHEN YOU ARE DONE

Print a summary: counts by severity, the scoreboard line, and the three things phase 2 should
do first. Then stop. **Do not begin fixing.** Phase 2 is a separate session with its own
brief, and it will be built from your report.
