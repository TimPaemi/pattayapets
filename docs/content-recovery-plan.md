# Content recovery plan — PattayaPets

**Created:** 31 May 2026  
**Trigger:** Quality audit — too many batches were metadata/CTR only; several clusters are thin or broken.

This document replaces the old “title/meta batch” queue until Phase 3 is complete.

---

## What went wrong

| Problem | Evidence |
|---------|----------|
| Metadata churn without substance | Batches 60–74 mostly titles, dates, internal links |
| Thin indexed pages | Dog-friendly cafes/restaurants were etiquette + “help us build the list” |
| Boilerplate country corridors | EU import/export pages share 2-section templates |
| Design FOUC | Footer, tiles, callouts, prose only in deferred CSS |
| HTML bugs | Broken list markup in pet-health skin guide |
| Zero directory verdicts | 35/35 listings still `pending` (correct editorially, weak E-E-A-T) |

---

## Phase 0 — Bugs & design (Batch 75) ✅

- [x] Fix `<ul>` in `/pet-health-pattaya/skin-and-ear-infections.html`
- [x] Promote footer, tiles, callouts, verdict, prose, FAQ to critical CSS
- [x] Tablet nav: mobile drawer from 1080px (was 860px)
- [x] Wrap 24h vet tables in `.table-wrap`
- [x] Dog-friendly cafes & restaurants: named venues with “confirm policy” framing
- [x] Parks page: named routes (Dongtan, Pratumnak, Na Jomtien)

---

## Phase 1 — Thin clusters (Batches 76–78)

### Import corridors (priority) — Batch 76 ✅ UK / USA / Australia

- [x] `/bring-pet-to-thailand/from-uk.html` — EHC 2917, timeline table, document checklist, return planning
- [x] `/bring-pet-to-thailand/from-usa.html` — USDA/APHIS, 10-day window, CDC return rules
- [x] `/bring-pet-to-thailand/from-australia.html` — DAFF NOI, 72-hour export window, return warning

### Import / export corridors — Batch 77 ✅ export mirrors

- [x] `/take-pet-out-of-thailand/to-uk.html` — timeline, GOV.UK unlisted rules, DLD export table, tapeworm window
- [x] `/take-pet-out-of-thailand/to-usa.html` — CDC high-rabies timeline, DLD export table, failure points
- [x] `/take-pet-out-of-thailand/to-australia.html` — non-approved country pathway, Mickleham quarantine, phases table

### Import / export corridors — Batch 78 ✅ Germany + UAE

- [x] `/bring-pet-to-thailand/from-germany.html` — EU export certificate, Veterinäramt, timeline, checklist
- [x] `/bring-pet-to-thailand/from-uae.html` — MOCCAE export + DLD dual permit timeline
- [x] `/take-pet-out-of-thailand/to-germany.html` — EU titer wait, designated entry points
- [x] `/take-pet-out-of-thailand/to-uae.html` — MOCCAE import permit, vaccines, breed rules, IATA cargo
- [x] Fixed broken MOCCAE links (`moec.gov.ae` → `moccae.gov.ae`)
- [x] Table FOUC fix in critical CSS

### Import / export corridors — Batch 82 ✅ South Africa

- [x] `/bring-pet-to-thailand/from-south-africa.html` — DALRRD state vet export, hub routing, manifest cargo notes
- [x] `/take-pet-out-of-thailand/to-south-africa.html` — VIP timeline, dog quarantine, five blood tests, cargo terminal rules
- [x] Pet-health cluster date-stamps updated to 31 May 2026

### Import / export corridors — Batch 83 ✅ EU member states

- [x] Import depth (8): Sweden, Norway, Denmark, Finland, Netherlands, France, Switzerland, Ireland — timeline tables, DLD checklist, authority links, 5 FAQs each
- [x] Export mirror depth (8): same countries — EU titer timeline, DLD export table, tapeworm notes where applicable
- [x] Shared helpers: `euImportTimeline`, `euExportSections`, `EU_IMPORT_FAILS`, `EU_ENTRY_REQ_LIST`

### Import / export corridors — Batch 84 ✅ NZ + Russia

- [x] `/bring-pet-to-thailand/from-new-zealand.html` — MPI export timeline, DLD checklist, MPI return/quarantine warning, 5 FAQs
- [x] `/bring-pet-to-thailand/from-russia.html` — FSVPS export timeline, DLD checklist, titer advisory, 5 FAQs
- [x] `/take-pet-out-of-thailand/to-new-zealand.html` — MPI pathway timeline (Australia-style depth), quarantine, 5 FAQs
- [x] `/take-pet-out-of-thailand/to-russia.html` — FSVPS entry + DLD export timeline, 5 FAQs
- [x] Official links verified live: `mpi.govt.nz/import/bringing-pets-to-nz/importing-dogs-and-cats/`, `fsvps.gov.ru`

### Import / export corridors — Batch 85 ✅ Canada + CFIA link fix

- [x] `/bring-pet-to-thailand/from-canada.html` — CFIA timeline, DLD checklist, snowbird notes, 5 FAQs
- [x] `/take-pet-out-of-thailand/to-canada.html` — DLD export timeline, CFIA entry checklist, 5 FAQs
- [x] Fixed dead CFIA URL (`importing-food-plants-or-animals` → `importing-food-plants-animals`, was 410) site-wide in `41-export.js`, `47-import-extra.js`, `52-export-countries.js`

### Import / export corridors — Batch 86 ✅ EU hubs + official-link audit

- [x] `/bring-pet-to-thailand/from-eu.html` — timeline table, TH docs, member-state links, EU failure points, 5 FAQs
- [x] `/take-pet-out-of-thailand/to-eu.html` — export timeline, DLD table, BCP/member-state links, 5 FAQs
- [x] `tools/audit-official-links.js` — HEAD-checks 96 external URLs; wired into `audit:full`
- [x] Fixed 14 dead official URLs (MPI NZ, Jordbruksverket, Mattilsynet, Fødevarestyrelsen, Ruokavirasto, NVWA, France mesdemarches, gov.ie pet-travel, India AQCS, Muang Ake branch, Zoeta, Soi Dog adopt, Pattaya Authority footer)
- [x] Pattaya Animal Hospital: phone `038 373 290` from public directory listing

### Import / export corridors

- [x] All 23 import / 23 export country pairs at full depth; EU hub pages now match corridor depth (Batch 86)

### Pet health cluster — Batch 85 ✅ audit pass

- [x] `updated: 2026-05-31` on all pet-health articles via `health()` helper
- [x] Dental + healthy-weight: emergency cross-links, `updated` stamps, extra H2 sections
- [x] Heartworm related links to `/pet-emergency/`
- [x] Spot-check: all hub + 7 guides ≥3 H2 sections, ≥3 FAQs each; no broken HTML found in build

---

## Phase 2 — Directory E-E-A-T (ongoing, human-assisted)

- [ ] Tier 1 visits: 5 vets, 2 groomers, 2 boarding (delegate kit)
- [ ] Publish first verdicts only after anonymous visits
- [x] Pattaya Animal Hospital contact (`038 373 290`)
- [ ] Mor Ja Pet Clinic — no verified public phone; leave WARN until found

### Import / export step pages — Batch 87 ✅

- [x] `/bring-pet-to-thailand/microchip-requirements.html` — failure points, 5 FAQs
- [x] `/bring-pet-to-thailand/health-certificate.html` — failure points, 5 FAQs
- [x] `/take-pet-out-of-thailand/export-permit-thailand-dld.html` — timeline table, AQS confirmation, failure points, 5 FAQs
- [x] Import + export checklists — common-mistakes section, 5 FAQs each
- [x] Germany BMEL URL fix (`bmleh.de` → `bmel.de`)
- [x] `tools/audit-content-depth.js` — guide section/FAQ depth WARN audit wired into `audit:full`

---

## Phase 3 — Measure again

- Run `npm run audit:full` + `npm run audit:live` after every batch
- Manual spot-check 5 random URLs (mix directory + guide + corridor)
- GSC CTR pass only **after** content phases — not before

---

## Definition of done (per page)

1. **Substance:** ≥3 meaningful sections OR equivalent guide depth; no “placeholder only” pages indexed  
2. **Honesty:** No fake reviews; policies marked “confirm when visiting” where unverified  
3. **Design:** No FOUC on above-the-fold + footer; tables wrapped; mobile nav usable on tablet  
4. **Technical:** Valid JSON-LD, no broken internal links, dated `updated` field  
5. **Legal:** Editorial disclaimer present; not veterinary advice  

---

## Sister sites

Pattaya Authority, Restaurant Guide, Visa Help, etc. are **separate repos**. Each needs its own recovery pass in its own Cursor window — not from this project.
