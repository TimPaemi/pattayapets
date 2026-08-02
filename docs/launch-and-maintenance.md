# PattayaPets — operator and maintenance runbook

**Reviewed:** 2026-08-01  
**Scope:** local source, verification and operator hand-off; this file is not deployed

This runbook deliberately contains no fixed page, business, schema or audit counts. The current source registry and build output are authoritative, and every release must reproduce its own figures.

## Non-negotiable boundaries

- Read `CLAUDE.md`, `AGENTS.md`, `RULES.md` and the current audit before changing the project.
- Never hand-edit `dist/`; it is generated output.
- Never run a Cloudflare deployment command directly from this repository.
- Never parameterise or bypass the hard-coded project guard in `tools/deploy.mjs`.
- Never send IndexNow as part of an ordinary build or local audit.
- Never publish a business verdict without its approved first-hand record.
- Never publish a regulated number, sequence, deadline, threshold, port, cost or exception without the approved claim record for that exact scope.
- Never present medical treatment or triage as clinically reviewed unless the named qualified reviewer and review date exist.

## Local setup

From `C:\Projects\pattayapets`, use the Node version required by `package.json`, then install the lockfile exactly:

```powershell
npm ci
```

Do not substitute an unreviewed dependency update for `npm ci`. Dependency upgrades are isolated changes with their own generated-asset and audit review.

## Normal editing workflow

1. Change source files in `src/`, approved evidence in `research/`, schemas in `schemas/`, or gates in `tools/` and `scripts/`.
2. If an SVG source or image-generation dependency changed, run `npm run images` and inspect the regenerated source assets.
3. Run `npm run build:all`.
4. Run `npm run deploy:check` to exercise the guarded preflight without uploading.
5. Inspect representative rendered pages at mobile and desktop widths. Include the homepage, a hub, a guide, a published business record, a held business route, search/filter behavior, an emergency page and a regulated route.
6. Record structural work in `CHANGELOG-STRUCTURAL.md` on the same day.

A green command proves only the assertions implemented by that command. Read warnings and unresolved external gates; do not summarize an incomplete or rate-limited check as a pass.

## Command reference

The current command graph lives in `package.json`. Important entry points are:

| Purpose | Command |
|---|---|
| Build plus release-blocking local gates | `npm run build:all` |
| Exact build-manifest check | `npm run audit:manifest` |
| CSP/source-markup check | `npm run audit:csp` |
| Business dossier/publication check | `npm run audit:business` |
| Cross-project scope gate | `npm run audit:network` |
| Dependency advisory gate | `npm run audit:dependencies` |
| Build containment fixtures | `npm run test:build-containment` |
| Guarded non-upload preflight | `npm run deploy:check` |
| Local Lighthouse batch | start a loopback-only static server, then `npm run audit:lighthouse:all` |

`audit:official` and `audit:live` require network access and can return an unverified state for throttling, denial or timeout. Authenticated Search Console, Bing, Cloudflare and analytics checks are operator tasks and are not implied by local output.

## Generated output and build integrity

The build stages output under a validated project-local path, writes an exact manifest and promotes the complete result only after validation. If a build is interrupted or fails, treat the prior `dist/` as the only candidate output and investigate the failure; do not copy individual staged files into it.

Run two builds and compare manifests when testing determinism, a dependency upgrade, hashing, service-worker behavior or release machinery. A change to regulated/emergency HTML must change the content-derived service-worker generation. Regulated and emergency pages must not be pinned in an unsafe long-lived offline cache.

## Business records

`src/data/businesses.js` is the approved publication model. `research/businesses/` contains dossiers and unresolved evidence; a dossier is not automatically publishable.

Every record needs explicit operating status, publication state, service scope and locality. The business gate must suppress held records from cards, schema, FAQ, search enrichment, verified copy and restricted contacts. Do not use a generic all-Thailand area fallback. Resolve HUMAN QUEUE items through documented human verification and a TIM publish/hold/reject decision.

Future visit evidence remains private until reviewed. Follow `docs/visit-delegate-kit/README.md`; do not publish receipts, private contact data, raw notes or clinical judgments.

## Regulated and clinical content

The regulated claim registry is the source of record for high-consequence travel assertions. A reachable authority homepage is not proof of a sentence. Preserve exact jurisdiction, species, movement direction, quoted support, checked date and recheck/expiry state, then cite the evidence beside the claim.

Government permission never proves airline carriage. Confirm carrier, route, aircraft, breed, crate, embargo, cargo/cabin mode and price independently before publication.

No licensed-veterinarian review record is currently published for the health collection. Until a qualified reviewer approves a page, it must remain general orientation, avoid dosing/treatment algorithms and direct a reader to live veterinary instructions.

## Identity, contact and privacy

`src/site-config.js` is the single public identity/contact source. The publisher legal name and entity IDs must match `RULES.md` exactly. Do not add an address, shared phone, LINE or WhatsApp to publisher markup.

Do not change the configured mailbox merely to satisfy a string rule. First test delivery and escalation, then record the operator decision and update the central configuration. Security contact delivery must also be tested externally.

The source does not load Google Analytics. Production Cloudflare Web Analytics behavior and retention must be checked in the authenticated dashboard before changing the privacy notice. Do not add a new beacon, form processor or third-party embed without a data-flow and CSP review.

## Canonicals, indexing and content pruning

Canonical shape, redirects, internal links, sitemap locations, search records and service-worker routes must change together. Before any migration, noindex, merge or deletion:

1. export a dated Search Console query/page and index-coverage baseline;
2. record the exact URLs and expected outcome;
3. obtain TIM’s explicit decision;
4. use a small canary where appropriate;
5. wait the structural observation window in `RULES.md` before the next index-shape change.

Do not treat lexical similarity or an empty content queue as evidence to merge or expand pages.

## Release boundary

Building and auditing do not authorize release. When the operator separately authorizes deployment, leave this repository and use only the wrapper named by `CLAUDE.md`:

```powershell
cd C:\Projects
.\deploy.ps1 -Only pets
```

After release, the operator records the immutable deployment and rollback identifiers, verifies representative live pages/headers/canonicals/structured data/service-worker behavior, and compares the live manifest to the approved local manifest.

IndexNow is a separate operator decision. Send it only after Bing ownership is verified, the deployed manifest is confirmed and explicit submission authority is given. The local script requires an explicit domain confirmation; do not weaken that guard.

## External release checklist

- Authenticated GSC baseline and index decision recorded.
- Bing ownership verified before any IndexNow call.
- Cloudflare project, deployment target, cache rules, analytics behavior and rollback ID verified.
- Configured public and security mailboxes tested end to end.
- Required clinical/legal/bilingual review records present.
- Current carrier acceptance rechecked for any promoted travel route.
- Full local suite and representative visual/keyboard tests complete.
- Exact pre-release manifest retained and matched after release.

If any item cannot be checked, name it as an unresolved release gate. Do not replace evidence with a confidence statement.
