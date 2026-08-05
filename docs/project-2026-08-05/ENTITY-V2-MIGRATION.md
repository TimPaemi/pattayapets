# Entity-v2 and responsibility migration

Date: 2026-08-05
Standard: `TP-NETWORK-2026-08-04.1`

## Invariant global identities

| Entity | Global `@id` | Canonical URL |
| --- | --- | --- |
| TimPaemi Organization | `https://timpaemi.com/#timpaemi` | `https://timpaemi.com/` |
| Tim | `https://timpaemi.com/#tim` | `https://timpaemi.com/authors/tim/` |
| Paemi | `https://timpaemi.com/#paemi` | `https://timpaemi.com/authors/paemi/` |

The copied contract at `schemas/timpaemi-entity-contract.v2.json` has SHA-256 `be0e7f1d9b4c878efdfa764a3e2e5d3dffefbf8f56466639063e32b05ff8ff33`. Runtime and build code do not import a sibling repository.

## Projection decision

- PattayaPets truthfully identifies the global TimPaemi Organization as WebSite/WebPage publisher.
- Every global Organization projection is compact: `@type`, `@id`, `name` and `url` only.
- The local WebSite attaches only local `publishingPrinciples`; flagship corrections, feedback and ownership properties stay off the spoke WebSite.
- The four flagship social `sameAs` URLs are not projected or promoted on PattayaPets.
- No local Person URL replaces a global Person URL.
- No local ProfilePage is needed in the current route set. The gate nevertheless validates any future ProfilePage as a local page whose `mainEntity` points to the matching global Person `@id`.

## Responsibility ledger

`src/data/route-responsibility-ledger.json` is version `2026-08-05.1`. Its default is `OMIT_PERSONAL_ATTRIBUTION`.

- Project creation evidence: HOLD, with no named creators and no evidence references.
- Approved route records: 0.
- Approved personal authors: 0.
- Approved personal route creators: 0.

Ownership, principal status, publication operation, editing, maintenance and a masthead appearance are not treated as evidence of route authorship or project creation.

## Resulting public projection

| Surface | Before | Current |
| --- | --- | --- |
| Visible guide byline | Blanket Tim/Paemi byline | “Source-led editorial guide” unless a route is approved |
| `meta[name=author]` | Site-wide | Omitted without an approved route author |
| HTML `rel=author` | Publisher/person attribution across routes | Omitted without an approved route author; publisher can never be author |
| Article schema | Page-kind driven | Route-evidence driven; currently zero |
| WebPage author/creator | Site-wide personal references | Ledger-driven; currently zero |
| WebSite creator | Ownership-derived | Project-creation-evidence driven; currently zero |
| Person nodes | Repeated on unrelated pages | Omitted unless the route or project evidence requires the person |
| Publisher home link | Repeated on every route | One natural followed link on `/about.html` |

## Enforcement

`scripts/network-gate.js` validates:

- exact standard, RULES hash and contract hash;
- ledger version, evidence shape, route membership and safe omission;
- visible byline, author meta, `rel=author`, Article, WebPage and WebSite parity;
- exact Person identity and URL invariance;
- compact Organization projections and allowed local policy properties;
- corpus-wide home-link count, qualification and location;
- zero sister URLs, flagship social promotion, private/control leakage, Review or `aggregateRating`;
- visible FAQ and FAQPage equality;
- generated llms/feed/redirect/CSS/JS network-link absence;
- nine deliberately broken encoded/multiline/non-anchor/schema/non-HTML/private fixtures.

The source-rendered corpus passes this gate with 208 pages and zero hard findings. Generated-output validation is required again after the canonical build.
