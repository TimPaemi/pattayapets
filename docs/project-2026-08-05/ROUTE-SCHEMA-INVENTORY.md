# Frozen route, link and schema inventory

Checked: 2026-08-05
Project class: OWNED PUBLICATION
Mode: IMPLEMENTATION
Standard: `TP-NETWORK-2026-08-04.1`

## Frozen route and index boundary

The source defines 208 pages and the build adds one HTML sitemap, for 209 generated routes. The boundary remains 205 indexable and four noindex. No route, canonical, redirect, robots, sitemap-membership or index/noindex decision changed.

The four noindex routes remain:

- `/404.html`
- `/offline.html`
- `/search.html`
- `/take-pet-out-of-thailand/to-new-zealand.html`

The canonical manifest still identifies 131 content-depth routes, 134 loop-queue routes and 71 regulated routes. Source diffs for `src/page-manifest.js`, `src/static/_redirects` and `src/static/robots.txt` are empty. The five existing redirect rules remain unchanged, and `sitemap.xml` contains exactly the 205 manifest-approved indexable URLs.

## Route families

| Manifest kind | Routes |
| --- | ---: |
| Site pages | 1 |
| General/structural pages | 17 |
| Vets and animal hospitals | 11 |
| Pet groomers | 9 |
| Boarding and daycare | 5 |
| Pet shops | 6 |
| Dog trainers | 4 |
| Pet relocation | 6 |
| Mobile vets | 3 |
| Areas | 8 |
| Bringing a pet to Thailand | 40 |
| Taking a pet out of Thailand | 31 |
| Dog-friendly Pattaya | 7 |
| Pet emergency | 12 |
| Owning a pet in Pattaya | 20 |
| Adoption and rescue | 11 |
| Cats | 5 |
| Dogs | 5 |
| Pet health in Pattaya | 8 |
| **Total** | **209** |

## Internal-link census

The built-output census found:

- 15,241 internal anchor occurrences;
- 1,362 external anchor occurrences;
- 1,400 fragment-link occurrences;
- 8,126 unique directed internal route edges;
- zero unresolved internal route links;
- zero unresolved fragments;
- two intentionally unlinked utility outputs, `/404.html` and `/offline.html`, and no ordinary content orphan.

The link, orphan and network gates independently validate the route and fragment boundary. Held and rejected business routes remain discoverable only on their own retained decision surface, the relevant category hold/outside-scope list, the HTML sitemap and the explicit Mor Ja correction record. They are excluded from internal search, homepage updates, language/task pages, area recommendations and emergency destinations.

## JSON-LD census

Every HTML route has one parseable JSON-LD script. The recursive node census is:

| Schema type | Nodes |
| --- | ---: |
| `WebSite` | 209 |
| `WebPage` | 209 |
| `ImageObject` | 209 |
| `Organization` | 629 |
| `BreadcrumbList` | 208 |
| `ListItem` | 942 |
| `FAQPage` | 134 |
| `Question` | 903 |
| `Answer` | 903 |
| `CollectionPage` | 7 |
| `ItemList` | 16 |
| `VeterinaryCare` | 7 |
| `LocalBusiness` | 12 |
| `PetStore` | 2 |
| `PostalAddress` | 19 |
| `AdministrativeArea` | 21 |
| `Country` | 3 |
| `City` | 3 |
| `AboutPage` | 1 |

All 629 Organization occurrences are the same compact TimPaemi publisher reference and contain only `@type`, `@id`, `name` and `url`; none expands flagship policies or social profiles. The 21 `sameAs` values belong only to the 21 admitted business nodes and point to their approved operator identity surfaces. There is no WebSite, publisher or Person `sameAs`.

The business-schema count is exactly the current 21 PUBLISH decisions: seven `VeterinaryCare`, 12 `LocalBusiness` and two `PetStore`. The 12 HOLD and two REJECT routes emit no business node. The 134 existing visible FAQ blocks have exact JSON-LD parity across 903 question/answer pairs; no hidden FAQ or FAQ search-decoration block was added.

## Responsibility and prohibited projections

- Approved route-responsibility records: 0.
- `Article` nodes: 0.
- `Person` nodes: 0.
- WebSite/WebPage personal author or creator projections: 0.
- `meta[name=author]`: 0.
- HTML `rel=author`: 0.
- `ProfilePage`: 0; the current route set has no approved local profile projection.
- `Review`: 0.
- `AggregateRating`: 0.
- Unresolved schema `@id` references: 0.
- Followed TimPaemi home anchors: exactly one, on `/about.html`.

Publisher ownership is therefore represented without inferring route authorship or project creation. Any future personal author, creator or local ProfilePage projection must first pass the versioned responsibility ledger and the entity-v2 network gate.
