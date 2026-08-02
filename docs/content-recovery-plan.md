# Content quality and recovery plan — PattayaPets

**Status:** superseded implementation record  
**Current baseline:** `docs/FULL-AUDIT-2026-08.md`  
**Reviewed:** 2026-08-01

The former batch checklist in this file mixed completed work, stale page counts, and claims that were not preserved at source. It is not a release certificate. The August full audit and current automated gates are the only local implementation baseline.

## Quality contract

A page is publishable only when its useful purpose, evidence, and approval state are clear. Word count and FAQ count are diagnostics, not proof of quality.

- The page answers one distinct reader intent without doorway-style variation or filler.
- Consequential claims are supported beside the claim, at the correct jurisdiction, species, movement direction, and date.
- Regulated pages consume approved claim records; emergency treatment or triage language has the required clinical-review state.
- Business facts come from the approved business model. Held records, restricted contacts, fabricated FAQ, and implied reviews are absent.
- The visible reviewed date, metadata, structured data, search record, and sitemap derive from the same editorial date.
- The title and description accurately preview the visible answer and contain balanced, valid text.
- Internal links help the reader continue within PattayaPets and do not create cross-project associations.
- The page passes keyboard, zoom/reflow, contrast, dynamic-state, security/privacy, performance, and structured-data gates appropriate to its template.

## Recovery queue

Create a queue item only from evidence. Each item needs:

| Field | Requirement |
|---|---|
| URL / source | Exact path and source file |
| Reader intent | One sentence |
| Evidence | Dated Search Console data, source defect, user correction, or failed gate |
| Risk class | General / business / regulated / clinical |
| Required reviewer | LOOP / SOL / TIM, plus external professional where required |
| Proposed action | Improve / consolidate / hold / remove from discovery / leave unchanged |
| Success measure | Defined before editing |
| Review date | YYYY-MM-DD |

Do not infer demand from an empty queue, lexical similarity, or a keyword tool alone. Do not merge, prune, redirect, or noindex from this document without a dated search baseline and an explicit operator decision.

## Priority order

1. Reader-safety corrections and expired regulated evidence.
2. False identity, review, operating-status, locality, contact, or freshness signals.
3. Index/canonical inconsistencies after the required baseline and canary decision.
4. Accessibility, security/privacy, offline-cache, and build-integrity failures.
5. Pages with demonstrated query overlap, lost clicks, or unsatisfied reader intent.
6. New content only when evidence shows a durable in-scope gap and source capacity exists.

## Verification

For each accepted change, preserve the evidence, run the complete local suite, inspect the rendered page at representative mobile and desktop widths, and record remaining external gates. Deployment, IndexNow, canonical migration, noindex changes, and authenticated account work are separate authorised operations.
