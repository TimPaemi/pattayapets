# Paid ads map — PattayaPets

Keyword → landing page → UTM structure. **Do not run ads until budget is set.**
Landing pages are real PattayaPets URLs — no homepage dumps for high-intent queries.

Base UTM: `utm_source=google&utm_medium=paid&utm_campaign=pattayapets-{cluster}`

---

## Google Search — import cluster

| Ad group | Keywords (phrase/exact) | Landing URL | Campaign slug |
|----------|-------------------------|-------------|---------------|
| import-checklist | bring pet to thailand checklist, pet import thailand | /bring-pet-to-thailand/checklist.html | import |
| dld-permit | thailand dld pet import permit, import permit thailand dog | /bring-pet-to-thailand/import-permit-thailand-dld.html | import |
| import-hub | how to bring dog to thailand, bring cat to thailand | /bring-pet-to-thailand/ | import |
| from-uk | bring dog to thailand from uk | /bring-pet-to-thailand/from-uk.html | import-uk |
| from-usa | bring pet to thailand from usa | /bring-pet-to-thailand/from-usa.html | import-usa |
| u-tapao | u-tapao pet import, fly pet to pattaya | /bring-pet-to-thailand/u-tapao-airport-pets.html | import |

**Example final URL:**  
`https://pattayapets.com/bring-pet-to-thailand/checklist.html?utm_source=google&utm_medium=paid&utm_campaign=pattayapets-import&utm_content=checklist`

---

## Google Search — export cluster

| Ad group | Keywords | Landing URL | Campaign slug |
|----------|----------|-------------|---------------|
| export-process | export pet from thailand, take dog out of thailand | /take-pet-out-of-thailand/export-process.html | export |
| export-checklist | pet export thailand checklist | /take-pet-out-of-thailand/checklist.html | export |
| to-uk | bring pet from thailand to uk | /take-pet-out-of-thailand/to-uk.html | export-uk |
| to-usa | export dog from thailand to usa | /take-pet-out-of-thailand/to-usa.html | export-usa |
| relocation | pet relocation thailand agent | /pet-relocation/ | relocation |

---

## Google Search — local Pattaya

| Ad group | Keywords | Landing URL | Campaign slug |
|----------|----------|-------------|---------------|
| 24h-vet | 24 hour vet pattaya, emergency vet pattaya | /pet-emergency/24-hour-vets-pattaya.html | emergency |
| vets | vet pattaya english, animal hospital pattaya | /vets/ | directory |
| groomers | dog groomer pattaya | /groomers/ | directory |
| dog-friendly | dog friendly restaurant pattaya | /dog-friendly-pattaya/restaurants.html | local |
| start | new to pattaya with dog | /start-here.html | local |

---

## Meta (Facebook / Instagram)

| Objective | Audience | Creative | Landing |
|-----------|----------|----------|---------|
| Traffic | Thailand expats, UK/US/AU interested in Thailand | Checklist carousel | /bring-pet-to-thailand/checklist.html |
| Traffic | Pattaya 25–55 pet owners | 24h vet save-this-post | /pet-emergency/24-hour-vets-pattaya.html |
| Retargeting | Site visitors 30d, import/export pages | Export checklist | /take-pet-out-of-thailand/checklist.html |

UTM: `utm_source=facebook&utm_medium=paid&utm_campaign=pattayapets-{slug}`

---

## Budget guidance (starter)

| Cluster | Suggested daily (THB) | Why |
|---------|----------------------|-----|
| Import DLD + checklist | 200–500 | Highest intent, matches content depth |
| Export UK/USA | 150–400 | Long research cycle |
| Local 24h vets | 100–250 | Emergency intent, narrow geo |
| Directory vets | 50–150 until verdicts live | Lower conversion until reviews publish |

Pause any ad group with CTR &lt; 2% after 1,000 impressions — fix landing title/meta first (AI Batch 65).

---

## Conversion events (GA4)

Already on site via `G-TX1PLBHN2K`. Mark as key events in GA4 admin:

- `page_view` on `/bring-pet-to-thailand/checklist.html`
- `page_view` on `/pet-emergency/24-hour-vets-pattaya.html`
- Outbound clicks to `/contact.html`, `wa.me`, mailto

---

## What not to advertise

- Individual vet listings until verdicts exist (pending state is honest but weak ad copy)
- Thin pages or 404s
- “Best vet” superlatives — editorial standards prohibit paid placement claims
