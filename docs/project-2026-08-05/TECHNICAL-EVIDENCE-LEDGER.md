# Technical SEO, schema, accessibility and performance evidence

Checked: 2026-08-05
Decision: ACCEPT for the narrow implementation implications below

Only primary specifications and official documentation were used for the technical changes.

| Source | Scope used | Implementation implication |
| --- | --- | --- |
| Google Search Central, structured-data policies — https://developers.google.com/search/docs/appearance/structured-data/sd-policies | Structured data must describe visible, truthful page content | Schema is omitted when the visible responsibility/business evidence is absent |
| Google Search Central, Article structured data — https://developers.google.com/search/docs/appearance/structured-data/article | Author markup should identify the actual content author and use a canonical author URL | Article/author output is route-ledger gated; publisher ownership is not authorship |
| Schema.org WebPage — https://schema.org/WebPage | Local page identity and page relationships | Each route retains one canonical local WebPage node |
| Schema.org author — https://schema.org/author | Author is the author of the creative work | No blanket author projection |
| Schema.org creator — https://schema.org/creator | Creator identifies the creator of a CreativeWork | WebSite/WebPage creator requires project/route creation evidence |
| Schema.org publisher — https://schema.org/publisher | Publisher is distinct from author/creator | Global Organization remains the compact publisher reference |
| Schema.org publishingPrinciples — https://schema.org/publishingPrinciples | A CreativeWork can point to applicable editorial principles | Local WebSite uses only the local standards URL |
| W3C WCAG 2.2 — https://www.w3.org/TR/WCAG22/ | Reflow, target size, keyboard and focus visibility/obscuration | Mobile/zoom sticky quick/contact bars are disabled at 720px; manual keyboard/reflow review remains required |
| web.dev, Core Web Vitals thresholds — https://web.dev/articles/defining-core-web-vitals-thresholds | p75 good thresholds: LCP <=2.5s, INP <=200ms, CLS <=0.1 | Existing performance budgets are retained and must be remeasured on representative built routes |

## Holds and limitations

- Automated schema validation cannot establish authorship, veterinary competence, business operation or first-hand experience.
- Static accessibility checks do not replace assistive-technology user testing.
- Local Lighthouse is lab evidence, not field p75 data.
- Search Console, Bing, authenticated Cloudflare state and production indexing were not accessed or changed.
- No FAQ was added for search decoration. Where FAQPage exists, the local network gate requires exact visible question/answer parity.

## Local implementation verification

- Exact runtime: Node 22.12.0, npm 10.9.0, Lighthouse 12.6.1 and Chrome 150.0.7871.187.
- Deterministic double build: 314 files, aggregate SHA-256 `f44de63502e08ccbee1d0b64f59a9a5e6e2913a5a313ec863af2b5ee46edbfc0`.
- Repository non-mutation during the locked harness: 817 files, aggregate SHA-256 `cb34d71167982c6c7552facbf2b3cbe3fbcd784196a53bdd52c0ffc616b5a84e` before and after.
- Performance budgets: 18/18 representative templates passed at 390x844, 150 ms latency, 1,600 kbps down and 4x CPU slowdown. LCP ranged from 1,164 to 1,528 ms; every measured CLS was 0.0000.
- Lighthouse final bounded series on the same build: one performance-variance sample at 86, followed by two consecutive 98/100/100/100 passes for performance/accessibility/best-practices/SEO. This is lab evidence, not field p75 data.
- Responsive browser matrix: 56 final route/viewport combinations at 320, 360, 390, 768, 1024, 1440, 1920 and 844x390 produced zero overflow, undersized primary-control, unsafe-mobile-sticky or hidden-current-breadcrumb failures.
- Long Thai search input remained intact at 320 CSS pixels with no replacement character or document overflow. Built-output mojibake scan found zero suspect files.
- Reduced-motion CSS was parsed by Chrome with `1ms` animation/transition duration overrides, one iteration and automatic scrolling; no invalid `NaN` value remained.
- Sensitive service-worker navigation is functionally simulated by the manifest audit: import, export and emergency routes neither write nor read runtime navigation cache and use `/offline` on network failure; ordinary navigation retains runtime caching.

The requested Chrome DevTools MCP trace surface was not configured in this environment. The locked repository Puppeteer/CDP performance harness and official Lighthouse CLI were used instead; no production telemetry or authenticated platform state was accessed.
