> **SUPERSEDED for daily runs — use `LOOP.md`.** This file is kept as background reference
> only (scoring model, source list, quality rationale). Do not run from it.

# CODEX PATTAYAPETS ENRICHMENT LOOP — paste once per run, 200–300 runs

**One paste = ONE run.** You choose the mission yourself using §3. Do the work, run the gate,
append one log block, then **STOP**. Do not ask what to do next — §3 decides.

Read `CLAUDE.md` fully before your first action. Its **LOCKED** sections are absolute and
override this file wherever they disagree. `CODEX-PETS-LOOP.md` is the older, hand-driven loop;
this file supersedes it for enrichment and discovery work.

---

## 1. What this loop is for

Two jobs, and you pick which one each run:

1. **ENRICH** pages that already exist — make them the most complete, most specific, most
   citable answer on the internet for their query. Depth wins traffic; more thin pages do not.
2. **DISCOVER + CREATE** new directory entries and place pages — every genuinely new,
   verifiable business or place is a new keyword surface.

You are optimising for two audiences at once: classic Google ranking, and AI retrieval
(ChatGPT, Claude, Perplexity, AI Overviews). They want the same thing — specific, sourced,
well-structured, entity-rich facts — so write once for both.

---

## 2. State — read this first, every run

All loop state lives in `research/loop/`. Create it on run 1 if missing.

| File | Purpose |
|---|---|
| `state.json` | `{runNumber, mode, lastMission, consecutiveDryDiscovers, newUrlsCreatedTotal}` |
| `candidates.json` | Discovered entities not yet published. Each with source URLs + confidence. |
| `ledger.json` | Per published URL: `{lastEnrichedRun, score, factsAdded, sourcesChecked, updated}` |
| `sources.json` | `{url: {lastFetched, status, note}}` — never refetch a 404 twice in 10 runs. |
| `wip.json` | **Banked partial work.** Facts sourced but not yet applied, per URL. |
| `log.md` | Append-only. One compact block per run. Newest at the bottom. |

**Run 1 bootstrap:** create the directory and files, seed `ledger.json` from every URL in
`dist/sitemap.xml`, and run a DISCOVER mission. Do not enrich on run 1.

---

## 3. Choose the mission — deterministic, no dithering

Compute the scores below, then apply the ladder. Write the chosen mission and the deciding
numbers into the log.

### 3a. Page Priority Score (0–100) for every published URL

- **Opportunity (0–40).** If `research/loop/gsc-export.csv` exists (Search Console → Pages,
  last 3 months), score by average position: **6–20 → 40**, 21–30 → 30, 3–5 → 20, 31+ → 12,
  zero impressions → 5. If the file does not exist, use the proxy: flagship guide or category
  hub → 30, country/destination page → 22, business page → 15, utility page → 0.
- **Thinness (0–25).** Distance below the **enrichment bar** in §5 — *not* the audit floor.
  Every page already clears `words≥1400 / faqs≥5 / sections≥5`; that floor is not a target.
- **Staleness (0–20).** Days since the page object's `updated`: >180 → 20, 91–180 → 14,
  31–90 → 8, ≤30 → 0.
- **Entity gaps (0–15).** 3 points each, max 15: no coordinates on a place page; no opening
  hours; no price signal with a date; no outbound primary-source citation; fewer than 4
  inbound internal links.

Skip any page whose `lastEnrichedRun` is within the last **25 runs** unless its score ≥ 80.

### 3b. Candidate Value Score (0–100) for every unpublished candidate

- **Category scarcity (0–30).** Fewer than 4 live entries in that category → 30; 4–7 → 18; 8+ → 6.
- **Area scarcity (0–25).** No entry yet in that area for that category → 25; one → 12; else 4.
- **Source confidence (0–30).** Two independent sources agreeing on name + address + a contact
  channel → 30. Two sources, no contact channel → 15. **One source only → 8.**
- **Keyword headroom (0–15).** A distinct search intent the site does not already answer → 15;
  partial overlap → 7; near-duplicate of an existing page → **0, and drop the candidate.**

### 3c. The ladder — first match wins

1. Any gate in §7 currently failing, or an invariant broken → **REPAIR**.
2. `wip.json` holds banked facts for a page → **ENRICH that page first.** Banked work is the
   cheapest finished unit available and it is why the previous run was worth doing.
3. `mode` is not `ENRICH_ONLY` **and** `candidates.json` holds fewer than **20** scored
   candidates → **DISCOVER**.
4. `newUrlsCreatedTotal` ≥ **60** → **ENRICH** (the create budget is spent; see §6).
5. Top Candidate Value ≥ 70 **and** ≥ top Page Priority → **CREATE**.
6. Otherwise → **ENRICH**, stepping down §3e if you cannot source in the time you have.

### 3d. Per-run budget — ceilings, not quotas

| Mission | Ceiling for a run with time to spare | **A complete run is** |
|---|---|---|
| **DISCOVER** | 40 candidates queued | **one source swept, whatever it yielded scored** |
| **ENRICH** | 3 pages | **one page fully enriched** |
| **CREATE** | 2 new entries | **one entry published** |
| **POLISH** | 6 pages | **one page improved** |
| **REPAIR** | the failing gate only | the gate passing again |

**One finished unit is a complete, successful run.** The ceiling is what you may do with
plenty of time; it is never a quota you must hit.

Size the work to the time you actually have. Pick the smallest unit you can finish, finish it,
gate it, log it. A run that fully enriches **one** page is a success. A run that enriches
**none** because it was aiming at three is a failure — and it is worse than a failure, because
it leaves the next run to hit the same wall.

---

### 3e. Never no-op — the fallback ladder

A run that changes nothing and logs nothing is the worst possible outcome. It burns a paste,
banks no progress, and guarantees run n+1 hits the identical wall. **Every run must end with a
committed change to the repo or to `research/loop/`.**

Never fabricate to achieve that. Step down this ladder instead — the first rung you can reach
is your run:

1. Can't do three enrichments? → **do one.**
2. Can't fully source even one page? → **bank what you did find** in `wip.json` (facts
   confirmed, sources opened, what is still missing and where to look), then drop to POLISH.
   The next run finishes that page cheaply from the bank. Partial sourcing is progress; throwing
   it away is not.
3. Sources unreachable, network slow, or too little time to source anything? → **POLISH**
   (§5B). It needs no external fetching and is always available.
4. A gate is red? → **REPAIR.**
5. Genuinely nothing legal left? → append a **BLOCKED** log block naming the exact obstacle and
   the one concrete thing that would unblock it, and still advance `runNumber`.

Blocked is an acceptable outcome. Blocked **and silent** is not.

If the last two runs were both BLOCKED on the same mission, you **must** choose a different
mission this run. Repeating a known-blocked mission is not diligence, it is a loop.

---

## 4. Where the data comes from

Respect `robots.txt`. One request per second per host. Set a real User-Agent:
`PattayaPetsResearchBot/1.0 (+https://pattayapets.com/about.html)`. Record every fetch in
`sources.json` with the date.

### 4a. OpenStreetMap Overpass — the workhorse for new entries

Free, no key, and the best single source of pet-related POIs in Chon Buri. POST the body as
`data=` to `https://overpass-api.de/api/interpreter`:

```overpassql
[out:json][timeout:90];
(
  nwr["amenity"="veterinary"](12.60,100.80,13.10,101.10);
  nwr["shop"="pet"](12.60,100.80,13.10,101.10);
  nwr["shop"="pet_grooming"](12.60,100.80,13.10,101.10);
  nwr["amenity"="animal_boarding"](12.60,100.80,13.10,101.10);
  nwr["amenity"="animal_shelter"](12.60,100.80,13.10,101.10);
  nwr["amenity"="animal_training"](12.60,100.80,13.10,101.10);
);
out center tags;
```

That bbox covers Sattahip through Banglamung. Useful tags: `name`, `name:en`, `name:th`,
`phone`, `contact:phone`, `website`, `contact:facebook`, `opening_hours`, `addr:*`, `lat/lon`.
On later DISCOVER runs, widen one axis at a time or add tags (`healthcare=veterinary`,
`shop=animal_feed`) rather than resweeping the identical query.

### 4b. Everything else

- **Nominatim** (`nominatim.openstreetmap.org`) — normalise addresses, reverse-geocode to an
  area key. 1 req/sec, hard limit.
- **Wikidata / Wikipedia** — entity IDs for chains and organisations; useful for `sameAs`.
- **The business's own website, Facebook page or LINE account** — the *primary* source for
  hours, phone and services. Prefer this over any aggregator, always.
- **Thai DBD business registry** (`dbd.go.th`) — confirms a company legally exists.
- **Search Console / Bing Webmaster export** — if Tim drops a CSV at
  `research/loop/gsc-export.csv`, it drives the Opportunity score. This is the single highest-value
  input to the whole loop; if it is missing, say so in the log so he knows what it is costing.
- **Google Places API** — *only* if `GOOGLE_PLACES_KEY` is set in the environment, and only to
  **confirm** a phone number or opening hours you already have a source for. Never import review
  text, ratings or photos.

### 4d. When OSM goes dry — widen what counts as an entry

OSM coverage of Thai businesses is patchy, so a dry Overpass sweep means *that query* is
exhausted, not that Pattaya is. Before declaring discovery dead, work down this list:

1. **Search in Thai, not English.** `สัตวแพทย์ พัทยา`, `โรงพยาบาลสัตว์ พัทยา`,
   `อาบน้ำตัดขน สุนัข พัทยา`, `รับฝากสุนัข พัทยา`. Most Thai businesses have no English
   web presence at all — this is where the missing half lives.
2. **Facebook Pages** — the primary shopfront for most small Thai businesses. Search by Thai
   category term plus district. Use it to confirm existence, hours and phone from the
   business's *own* page. That is a primary source, not an aggregator.
3. **Places are entries too.** This site does not only list businesses. Dog-friendly beaches,
   parks, walking routes, cafés and restaurants that allow dogs, pet-friendly condo buildings,
   pet-friendly hotels, vet-adjacent services like pet taxis — each is a real page with real
   search intent and none of them depend on OSM having a `veterinary` node.
4. **Adjacent categories** — `shop=animal_feed`, `healthcare=veterinary`, `amenity=marketplace`
   with pet stalls, and aquarium/exotics shops.
5. **Neighbouring areas** — Sri Racha, Rayong, Chonburi city. Only if a Pattaya owner would
   plausibly travel there, and label the distance honestly.
6. **Ask Tim.** If a sweep is dry, put a one-line request in the log: the categories and areas
   still thin, and that a local knows names Google does not.

### 4c. Sources that are off-limits

- **Scraping Google, Bing or any SERP.** Against their terms, unreliable, and it is the thing
  `CLAUDE.md` §2 forbids. There is no free SERP API — do not invent a workaround.
- **Competitor review sites** (TripAdvisor, Wongnai, Yelp, Google reviews). Never copy review
  text, star ratings or aggregate scores. You may use a listing to confirm that a business
  *exists* and note the date checked — nothing more.
- **Any aggregator as the sole source for a phone number.** One unconfirmed number is how the
  Mor Ja problem happened. See §6.

---

## 5. What "enriched" actually means

The audit floor (`words≥1400, faqs≥5, sections≥5`) is a **floor, not a target**. Every page
already clears it. A page counts as enriched this run only if you added **all** of:

1. **Three or more specific, sourced facts that were not there before.** A price with the date
   it was checked. A named street, soi or landmark. A real travel time. An opening-hours
   reality ("closed 12:00–14:00"). A rule with its government citation. A distance in minutes.
   *"Pattaya is hot and humid" is not a fact. "Beach sand on Jomtien reaches paw-burning
   temperature by 10:00 from March to May" — with a source — is.*
2. **One new internal link in each direction** — this page links somewhere new, and one
   relevant existing page links here. Never orphan, never dead-end.
3. **Metadata that passes:** decoded `<title>` ≤ 60 characters, decoded meta description
   140–160, both containing the real query, neither keyword-stuffed.
4. **FAQ answers that answer in the first sentence.** AI retrieval extracts the opening
   sentence; a paragraph that warms up for two lines gets skipped. Front-load the answer, then
   qualify it.
5. **`updated` bumped only if the change is substantive.** Never stamp a date for a cosmetic
   edit — that is finding S2.4 and the invariant guard's freshness intent.

Also do, where it applies: add coordinates and `areaServed` to place schema; add the Thai name
in a `lang="th"` span; convert a wall of prose into a scannable table when it is genuinely
tabular; add a dated "last verified" line to any figure.

**Regulated pages** — anything under `/bring-pet-to-thailand/` or `/take-pet-out-of-thailand/`:
do not touch a single rule, timing, fee or requirement unless you have **reopened the primary
government source this run** and recorded the URL and date in `sources.json`. If the source is
unreachable, leave the page alone and log it. Never replace an unverified claim with a
different unverified claim.

---

## 5B. POLISH — the always-available mission

POLISH improves what is already in the repo, using only what is already in the repo. No
fetching, no waiting on a slow source, no external dependency that can fail. It is real
ranking and AI-retrieval work — not busywork — and it exists so there is always something
legal and useful to do.

Take up to 6 pages by Priority Score and do any of:

- **Rewrite FAQ answers so the first sentence *is* the answer.** AI retrieval extracts the
  opening sentence; an answer that warms up for two lines gets skipped. Front-load, then
  qualify. This is the single highest-leverage edit available on this site.
- **Internal linking.** Add a genuinely relevant link in each direction. Kill dead-ends. Move
  thin pages toward 4+ inbound links.
- **Metadata.** Decoded `<title>` ≤ 60, decoded description 140–160, both carrying the real
  query without stuffing.
- **Schema fields already derivable from repo data** — `areaServed`, coordinates for an address
  you already store, `openingHours` from an hours string you already sourced.
- **Thai strings** wrapped in `lang="th"`.
- **Tables.** Convert genuinely tabular prose into a table.
- **Scannability.** Break a wall of text into real sections with real headings.

POLISH must not invent facts, must not touch any regulated claim, and must **not** bump
`updated` — it is structure and presentation, not new substance. Log exactly which pages and
which kinds of edit, so 250 runs of it stay auditable.

---

## 6. Creating a new entry

New business records match the existing field shape in `src/data/businesses.js` exactly:

```js
{
  slug: "", name: "", category: "", areas: [""], type: "", c24: false,
  address: "", phone: null, tel: null, website: null, hours: null,
  languages: "", services: [""], summary: ""
}
```

Rules, all of them hard:

- **`verdict` stays `pending`.** You never assign, upgrade or invent a verdict. Only Tim's
  anonymous visit with the bill paid can move it. Facts only until then.
- **Unknown stays `null`.** Do not guess a phone number, do not copy one from an aggregator
  without a second independent confirmation. A record with `phone: null` is honest; a record
  with a wrong number is a person driving to a closed door with a sick animal. If a number
  appears in exactly one place, put it in a `// HUMAN QUEUE:` comment, not in the field.
- **Two independent sources** for name + address before publishing. One source → leave it in
  `candidates.json` with confidence 8 and move on.
- **Exactly one category, correct area keys** from: `naklua`, `wongamat`, `central-pattaya`,
  `pratumnak`, `jomtien`, `bang-saray`, `sattahip`, `banglamung`.
- **No duplicate slug, and no near-duplicate name** — check transliteration variants of Thai
  names before adding (`Mor Ja` / `Mhor Ja` / `หมอจ๋า`).
- **A new page must clear the enrichment bar in §5 on the day it ships.** If you cannot write a
  genuinely useful page from what you sourced, the candidate is not ready. Leave it queued.
- **Total new URL budget for this entire loop: 60.** Track it in `state.json`. This is a
  deliberate brake — 250 runs × 2 pages would triple the site with thin content and is exactly
  the index bloat that `CLAUDE.md` §5 exists to prevent. When you hit 60, switch to ENRICH and
  tell Tim in the log that further expansion needs his explicit yes.

---

## 7. The gate — every run, before you log

```
node build.js
node tools/check-links.js
node tools/audit-invariants.js
node tools/audit-comprehensive.js
node tools/audit-content-richness.js
node tools/audit-directory.js
node tools/deploy.mjs --dry-run
```

All must pass. `audit-invariants.js` protects the six S1 findings fixed on 2026-07-29 — if it
fails, you broke something that was deliberately repaired. **Revert your change and switch to
REPAIR.** Never edit the invariant guard to make your change pass.

---

## 8. Never, under any circumstances

- Deploy, push, commit, submit IndexNow, purge caches, or touch Cloudflare. **Tim ships.**
- Invent or alter: reviews, ratings, verdicts, contact details, prices, opening hours,
  correction history, dates, coordinates, or evidence of a visit.
- Touch anything in §8 of `docs/AUDIT-2026-07.md`: canonical migration, the New Zealand
  `noindex`, robots policy, robots/sitemap cache rules.
- Add `Review` or `AggregateRating` schema. There is no first-party rating corpus.
- Bulk-stamp `updated` dates, bulk-edit frontmatter, or mass-rewrite pages to change wording.
- Add affiliate links, sponsored tags, or paid placements. Ever.
- Give veterinary advice. Symptoms and emergencies route to "see a vet now" with the 24-hour
  options named.
- Generate an image and present it as documentary evidence of a place.

---

## 9. The log block — append to `research/loop/log.md`

**Append a block on every single run, without exception** — including PARTIAL and BLOCKED ones.
The log is how run n+1 knows not to repeat run n. A run with no log entry is a run that never
happened, and the loop will walk into the same wall forever.

Keep it tight. This file has to stay readable at run 250.

```
### Run <n> — <MISSION> — <COMPLETE | PARTIAL | BLOCKED> — <YYYY-MM-DD>
Decided by: <top page score X vs top candidate score Y, ladder rule N>
Banked: <what went into wip.json, or none>
Did: <3 bullets max — which URLs, which facts added, which entries created>
Sources: <new primary sources opened this run, with dates>
Queue: <candidates in / out / total remaining>
Budget: newUrlsCreatedTotal <n>/60
Gate: build <pages> · links <broken> · invariants <pass|fail> · dry-run <pass|fail>
Blocked: <anything needing Tim — unconfirmed phone, unreachable source, a call to make>
Next: <what run n+1 will likely pick, one line>
```

---

## 10. Convergence — know when to stop asking for runs

- A **BLOCKED** run never counts toward any convergence counter. Only runs that actually swept
  a source count as dry discovers; only runs that actually enriched count toward saturation.
- `ENRICH_ONLY` is not permanent. Every **20 runs**, clear it and allow one DISCOVER run using a
  source or entry type you have not tried yet (§4d). Local supply changes; a mode set at run 3
  should not still be binding at run 200.
- **3 consecutive DISCOVER runs adding 0 new candidates** → set `mode: "ENRICH_ONLY"` in
  `state.json` and stop sweeping OSM with the same query. Widen the bbox or add tags once; if
  that is also dry, the local POI supply is genuinely exhausted — say so.
- **5 consecutive runs where no page scores ≥ 40** → the site is saturated at this depth.
  Write `research/loop/HARVEST.md`: what was added, what improved, what is still blocked on a
  human, and what Tim should decide next. Then stop.
- **Every 25 runs** → write a short checkpoint into `HARVEST.md`: pages enriched, entries added,
  categories and areas still thin, and the single highest-value thing a human could do next.

**The honest measure of this loop is not how many runs it completed.** It is whether a Pattaya
pet owner — or an AI answering for one — finds a specific, correct, sourced answer that was not
there before. Ten genuinely enriched pages beat a hundred padded ones, and a wrong phone number
on an emergency listing costs more than every ranking gain combined.
