# PattayaPets baseline and drift register

Date: 2026-08-05
Project class: OWNED PUBLICATION
Mode: IMPLEMENTATION
Standard: `TP-NETWORK-2026-08-04.1`

## Pinned authority

- Authoritative RULES SHA-256: `921701a22c8ac50b71bb17cad86383b53f5035a9361f81dd3ad536440a81b588`.
- Entity contract v2 SHA-256: `be0e7f1d9b4c878efdfa764a3e2e5d3dffefbf8f56466639063e32b05ff8ff33`.
- Starting branch and HEAD: `main` at `a3c327c6b92a6729a3a11a01e87c889df9371b9b`.
- The only starting tracked change was the operator's existing `.gitignore` addition for local `NETWORK-STANDARD.json`. Its observed SHA-256 was `3c4db59c52ce89e20ae39fe4d5185aa85c0473567360c3b0225dc66c92a78d84`. This project did not modify or revert it.

## Frozen public boundary

The baseline has 209 generated routes: 205 indexable and four noindex. This implementation does not add, remove, merge, redirect, canonicalize, index, noindex or prune a route.

The four noindex routes remain exactly:

- `/404.html`
- `/offline.html`
- `/search.html`
- `/take-pet-out-of-thailand/to-new-zealand.html`

No production, Search Console, Bing, IndexNow, Cloudflare or deployment action is authorized by this work.

## Material drift found

| Area | Starting state | Decision |
| --- | --- | --- |
| Publisher/entity | Full flagship Organization, Person and `sameAs` data was repeated on the spoke | Replace with compact Organization references and a local WebSite policy only |
| Authorship | Tim and Paemi were projected as site-wide authors/editors/creators without route evidence | Remove blanket bylines, metadata, `rel=author`, Article authors and creators; use a route ledger with omission as default |
| HTML linking | Every route carried a followed publisher/author link | Keep one natural followed publisher-home link on About only; zero publisher `rel=author` and zero sister links |
| Article schema | 133 guide routes emitted Article based on page type rather than responsibility evidence | Emit Article only when an approved route author exists; current result is zero Article nodes |
| Business publication | 31 published plus four holds was described as 35 published | Adjudicate 21 PUBLISH, 12 HOLD and two REJECT while retaining all 35 existing routes |
| Business contacts | Stored contacts could be published under a legacy-unreviewed state | Add a dated field-level ledger; 76 fields approved and 29 withheld |
| Regulated claims | All 25 records carried the same 1 August check date | Preserve per-source truth: 21 rechecked on 5 August, four retained as dated/inconclusive snapshots |
| Airline policy | Thai official URL was dead; Qatar 2-30-day timing and Turkish six-hour cutoff were unsupported | Correct TG, QR and TK from current official evidence; retain five named airline enrichment holds |
| UX | Mobile/zoom quick and contact bars could remain sticky below the fixed header | Disable those sticky bars at 720 CSS pixels and below; retain the established visual system |
| Media | The portrait appeared site-wide without a rights ledger | Restrict it to masthead context and place it on HOLD for any new use pending rights evidence |
| Gate model | The old network gate enforced the superseded blanket author/link model and false-positived operator files | Replace it with exact hash, responsibility, compactness, corpus-link and adversarial fixture checks |

## Baseline evidence totals

- 208 source-defined pages plus the generated sitemap page.
- 71 regulated routes, 25 regulated claims and 17 airline snapshot records.
- 43 private business dossiers containing 239 source records.
- 35 existing public business routes plus eight dossier-only candidates that remain non-public.
- One repository portrait asset and a repo-generated SVG/PNG brand/OG asset family.

## Release status

This is a local review candidate only. Commit, push, deployment, indexing submission, production mutation and authenticated platform changes remain outside scope.
