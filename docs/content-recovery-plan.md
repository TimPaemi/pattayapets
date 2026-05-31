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

### Import / export corridors (remaining — Batch 79+)

- [ ] EU member-state clones in `50-import-countries.js` — enrich or consolidate (Tim decision)

**EU template pages:** Either enrich with country-specific embassy links + quarantine notes, or consolidate to hub + `noindex` thin clones (Tim decision).

### Dog-friendly (remaining)

- [x] Beaches page: stretch-by-stretch table, heat/tide guidance, 5 FAQs (Batch 79)
- [x] Hotels page: named properties with official policy links, booking checklist (Batch 79)
- [x] Condos page: building vs landlord table, signing checklist, 5 FAQs (Batch 79)

### Pet health cluster

- [ ] Audit every guide for broken HTML, minimum 3 H2 sections, one FAQ each
- [ ] Cross-link to emergency and owning guides

---

## Phase 2 — Directory E-E-A-T (ongoing, human-assisted)

- [ ] Tier 1 visits: 5 vets, 2 groomers, 2 boarding (delegate kit)
- [ ] Publish first verdicts only after anonymous visits
- [ ] Resolve missing contacts: `pattaya-animal-hospital`, `mor-ja-pet-clinic-pattaya`

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
