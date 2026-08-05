# 2026-08-05 implementation changelog

Project class: OWNED PUBLICATION
Mode: IMPLEMENTATION
Standard: `TP-NETWORK-2026-08-04.1`

## Authority, entity and responsibility

- Pinned the exact entity-v2 contract locally and added standard, RULES-hash and contract-hash enforcement.
- Added a versioned route-responsibility schema and ledger with safe omission as the default and project-creation evidence on HOLD.
- Removed blanket Tim/Paemi bylines, Article authors, author metadata, publisher `rel=author`, WebSite/WebPage creator projections, repeated Person nodes and flagship social projections.
- Reduced publisher schema to compact global Organization references and kept only local publishing principles on the local WebSite.
- Reduced the corpus to one natural followed TimPaemi home link on About; removed publisher URLs from `llms.txt` and other auxiliary promotion surfaces.
- Replaced the superseded network gate and added nine intentionally broken entity-v2 fixtures.

## Regulated and airline evidence

- Reconciled all 25 regulated claim records and all 71 regulated routes against the dated registry.
- Rechecked 21 claim records on 2026-08-05 and retained four as explicit dated, absence-only or HOLD evidence.
- Corrected the Thai Airways policy URL, Qatar request timing and Turkish booking wording.
- Preserved the Korea exact-ten conflict, U-Tapao absence-only conclusion, Malaysia mode boundary, heat-treatment HOLD and five named airline enrichment holds.
- Kept all 17 airline records field-allowlisted and matched to the private evidence packet.

## Local businesses

- Re-adjudicated the unchanged 35-route corpus to 21 PUBLISH, 12 HOLD and two REJECT decisions.
- Added a default-withheld, field-level contact publication ledger covering 105 stored contact fields: 76 approved and 29 withheld.
- Corrected the K9 Pattaya Facebook and Asia Relocation operator URLs.
- Suppressed facts, services, contacts, actions, ratings and LocalBusiness-family schema for held/rejected records while retaining the frozen URLs as transparent decision pages.
- Removed held/rejected businesses from homepage updates, internal search, English-speaking-vet results, area suggestions, housing guidance and emergency destinations.
- Hardened the emergency renderer with both publication-state and field-level phone/tel gates.
- Added a generated-corpus regression that fails if a non-published business is promoted outside its retained decision page, category decision list, sitemap or explicit correction record.

## UX, accessibility and rendered behavior

- Kept the established PattayaPets visual identity while improving mobile task flow rather than cloning another site.
- Made mobile header controls at least 44 CSS pixels high.
- Repaired the mobile search drawer, including focus, Escape dismissal, focus restoration and body-scroll locking.
- Kept live directory filter announcements outside collapsed filter panels.
- Disabled secondary sticky quick/contact bars at mobile and 200%-reflow widths.
- Replaced hidden horizontal mobile breadcrumbs with wrapping breadcrumbs so the current page is visible on load.
- Replaced a minifier-unstable reduced-motion duration with a parsed `1ms` override and added a built-CSS regression against invalid `NaN` output.
- Verified search query, category filter, no-result, menu, skip-link and focus behavior in the built site.
- Captured 60 built-output screenshots: mobile and desktop top views for 26 representative route families plus eight full-page views, including refreshed final-build mobile evidence for the airline-policy and published-business pages.

## Build, PWA and dependency safety

- Preserved content-addressed assets, exact manifest generation, atomic build publication, cache-generation invalidation and the fixed deployment-target dry run.
- Made import, export and emergency navigation fresh-only in the service worker: those paths cannot enter or read runtime navigation cache and fall directly to `/offline` when the network fails.
- Extended the manifest audit with exact fresh-only-prefix checks and a functional service-worker simulation covering online/offline sensitive and ordinary navigation.
- Pinned the transitive `undici` override at 7.29.0 to remove the high-severity dependency finding without running an automatic audit fix.
- Preserved the route, canonical, redirect, robots, sitemap and index/noindex boundary.

No commit, push, deployment, indexing submission, Search Console change, Cloudflare mutation or production action was performed.
