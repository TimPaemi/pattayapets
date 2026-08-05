# PattayaPets review-branch handoff

Date: 2026-08-05
Project class: OWNED PUBLICATION
Mode: RELEASE
Release state: review branch `codex/pattayapets-evidence-v2-review-2026-08-05` published for inspection; not merged, deployed or indexed

## Authority and compliance

- Standard: `TP-NETWORK-2026-08-04.1`.
- Network manifest SHA-256: `d02047dc22662d10521a8efe5047dc220fcc8b084428a1663b9cbef879cb761f`.
- RULES SHA-256: `921701a22c8ac50b71bb17cad86383b53f5035a9361f81dd3ad536440a81b588`.
- Pinned entity-contract v2 SHA-256: `be0e7f1d9b4c878efdfa764a3e2e5d3dffefbf8f56466639063e32b05ff8ff33`.
- Entity-v2 network gate: PASS, zero hard findings; nine deliberately broken fixtures rejected.
- Responsibility ledger: zero approved route records; project creation remains HOLD; personal attribution defaults to omission.

Current output has zero Person, Article, personal author/creator, `meta[name=author]`, `rel=author`, Review or aggregate-rating projection. It has one natural followed TimPaemi home link on About, no sister links, no flagship social `sameAs`, and only compact global publisher references. All publisher ownership, visible copy, metadata, auxiliary output and schema are aligned with the v2 boundary.

## Git baseline and review-branch state

Starting branch/HEAD: `main` at `a3c327c6b92a6729a3a11a01e87c889df9371b9b`. The only starting tracked change was the operator-owned `.gitignore` modification.

The review branch `codex/pattayapets-evidence-v2-review-2026-08-05` was created directly from that baseline and contains the reviewed implementation, evidence ledgers, schemas, fixtures and visual evidence. `origin/main` remains untouched. `.gitignore` was neither edited, staged nor committed by this project; its preserved SHA-256 is `3c4db59c52ce89e20ae39fe4d5185aa85c0473567360c3b0225dc66c92a78d84`.

Expected post-commit working-tree status:

```text
 M .gitignore
```

`git diff --check` passes. Its only output is the existing Windows LF-to-CRLF checkout warning; there is no whitespace error. Source diffs for the frozen `src/page-manifest.js`, `src/static/_redirects` and `src/static/robots.txt` files are empty.

## Reviewed corpus and decisions

- Routes: 208 source pages plus generated sitemap; 209 built routes, 205 indexable and four unchanged noindex.
- Regulated content: all 25 claim records, 469 rendered citations and all 71 regulated routes.
- Regulated sources: 21 unique current URLs; 21 records checked 2026-08-05 and four retained from 2026-08-01. Rechecks are one on 2026-08-19, two on 2026-09-05 and 22 on 2026-11-01.
- Airlines: all 17 records and 81 private source records; three refreshed to 2026-08-05 and 14 retained at 2026-07-20.
- Businesses: all 35 existing routes plus all 43 private dossiers containing 239 source records; eight dossier-only candidates remained non-public.
- Business decisions: 21 PUBLISH, 12 HOLD, two REJECT; 105 stored contact fields reviewed, with 76 approved and 29 withheld.
- Media: 43 project media files inventoried. Brand/vector/raster derivatives retain current-project use; the single portrait is HOLD_NEW_USES pending rights confirmation. No external venue/review image or AI-generated image was imported.

Accepted corrections include the current Thai Airways URL, Qatar's at-least-48-hour request language, Turkish booking language, the current EU source, two business operator-action URLs, compact publisher projection and default-omitted authorship. Held conclusions remain explicit for Korea at exactly ten animals, current U-Tapao handling, Malaysia passenger modes, heat-treatment/first-aid algorithms, five airline enrichments, Mor Ja and other non-admitted businesses. No rating, recommendation, medical-quality verdict or unsupported coordinate/Maps action was added.

## Product, UX, SEO and PWA result

- Held/rejected businesses no longer appear in homepage updates, internal search, English-speaking-vet results, area/housing suggestions or emergency destinations. Their frozen routes remain only as transparent decision records and category/sitemap entries.
- Mobile header targets meet 44 CSS pixels; search drawer and menu support Escape, focus restoration and body locking; skip link focus is visible; live filter status remains outside collapsed controls.
- Mobile breadcrumbs wrap and expose the current page. Secondary quick/contact bars are non-sticky at mobile/200%-reflow widths.
- Search query/filter/no-result states, directory query filters and keyboard interactions were manually verified in built output.
- Import/export/emergency navigations are fresh-only: no sensitive runtime cache write/read; offline failures use the neutral offline page. Ordinary navigation retains versioned runtime caching.
- Reduced-motion output parses correctly after minification and is protected against invalid duration output.
- Schema inventory: 209 WebSite, 209 WebPage, 208 BreadcrumbList, 134 visible-parity FAQPage, 903 Question/Answer pairs and exactly 21 admitted business nodes. There are zero unresolved schema IDs.
- Link inventory: 15,241 internal anchors, 8,126 unique internal route edges, zero broken routes and zero broken fragments in the independent census.
- Screenshots: 60 true PNGs under `artifacts/screenshots/2026-08-05`, covering 26 representative families at mobile/desktop plus eight full-page captures, including refreshed final-build mobile evidence for the airline-policy and published-business pages. All 60 files pass PNG signature and decoder-format verification.

The browser skill directly influenced six fixes: homepage non-promotion, header target size, mobile search drawer display/focus, filter announcement placement, breadcrumb visibility and reduced-motion output verification.

## Final commands and results

| Command | Result |
| --- | --- |
| `npm ci` | PASS; 235 packages audited, zero vulnerabilities |
| `npm run build:all` | PASS; 209 routes, 313 manifest files, 191 internal-search pages, 205 sitemap URLs |
| `npm run check` | PASS; 16,914 internal route/asset references |
| `npm run audit:manifest` | PASS; manifest, immutable assets, reduced motion and functional sensitive/ordinary service-worker cache simulation |
| `npm run audit:csp` | PASS; no executable inline script/style or handler attributes |
| `npm run audit:a11y` | PASS; 209 pages, 1 image, 16,719 links, 1,049 controls, 148 tables, zero hard findings |
| `npm run audit:seo` | PASS; 209-page metadata structure clean |
| `npm run audit:comprehensive` | PASS; zero metadata/heading/keyword hard errors or advisories |
| `npm run audit:business` | PASS; zero hard findings, 14 explicit human/migration advisories |
| `npm run audit:regulated` | PASS; 25 claims, 469 citations, 71 routes, 18 broken fixtures rejected |
| `npm run audit:airlines` | PASS; 17/17 current source-matched publication-safe records |
| `npm run audit:network` | PASS; zero hard findings, nine entity-v2 fixtures rejected |
| `npm run audit:dependencies` | PASS; zero vulnerabilities |
| `npm run test:build-containment` | PASS; broad targets rejected, failed stage preserved prior output, promotion exact |
| `npm run audit:local` | PASS; Node 22.12.0, two identical 314-file builds, SHA-256 `f44de63502e08ccbee1d0b64f59a9a5e6e2913a5a313ec863af2b5ee46edbfc0`, repository non-mutation, 18/18 performance templates |
| `npm run audit:lighthouse` | Two consecutive final PASS samples at 98/100/100/100 after one same-build performance outlier at 86; all 18 throttled template budgets separately passed |
| `npm run deploy:check` | PASS; exact `pattayapets` target, dry run only, nothing uploaded |
| `git diff --check` | PASS; checkout line-ending warnings only |

The locked performance run used 390x844, 150 ms latency, 1,600 kbps down and 4x CPU slowdown. All 18 templates passed; LCP was 1,164-1,528 ms and CLS was 0.0000 throughout. The final responsive matrix covered 56 route/viewport pairs at 320, 360, 390, 768, 1024, 1440, 1920 and mobile landscape with zero failures. A long Thai input remained intact at 320px with no replacement character or document overflow. The full source/dist/project-ledger mojibake scan found zero suspect files.

The Chrome DevTools MCP surface named by the web-performance skill was unavailable, so that exact trace route is inconclusive. The repository's locked Puppeteer/CDP harness and Lighthouse 12.6.1 supplied the local lab evidence instead. No CrUX/field p75 evidence was claimed.

## Remaining human and external decisions

- Licensed veterinarian review for heatstroke, toxicity, first-aid and emergency orientation.
- Thai legal/bilingual review and any future native Thai publication.
- Korean APQA clarification for exactly ten animals.
- Thai DLD/AQS case-specific confirmation for U-Tapao.
- Malaysia DVS clarification for accompanied/cabin/checked-baggage modes.
- Operating-airline confirmation for the actual pet, breed, container, route, aircraft, sector, transfer, embargo, quota and price.
- Tim/operator decisions for Mor Ja, other held businesses, eight dossier-only candidates and the Better Pets evidence conflict.
- Portrait rights/consent before any new use.
- Separate authorization for any later canonical/index/pruning decision, including the two outside-scope retained routes.
- Authenticated GSC, Bing, Cloudflare and production-release evidence; none was accessed or changed.
- The non-blocking content-richness report still lists 58 pages below its 1,400-word/5-FAQ/5-section editorial heuristic; proposals are separated in `CONTENT-GAPS-AND-PROPOSALS.md` rather than padded into this release.
- Field performance data remains unavailable; the documented lab variance should be watched after an authorized production release.

## Local review

From `C:\Projects\pattayapets`:

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:8765/`.

A commit and push to the isolated review branch occurred after the user's explicit 2026-08-05 authorization. No merge, deployment, upload, IndexNow call, Search Console/Bing action, Cloudflare change, indexing submission or production mutation occurred.
