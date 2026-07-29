# PATTAYAPETS LOOP — one paste, one run

Pick one page. Do the **five-item bundle** on it. Log one line. Stop.

Nothing in the bundle needs research, a source, or the internet. A run takes a few minutes.
"Tightened the introduction" is **not** a run.

---

## 1. Pick the page

Open `research/loop/log.md`. Take any URL from `dist/sitemap.xml` not in the last 40 log lines.
Prefer: guide pages → category hubs → country pages → business pages.
Skip `/404`, `/offline`, `/search`, `/sitemap.html`.

**Pages are defined in `src/pages/*.js` and `src/data/*.js`, not in `dist/`.** Find the page
object by grepping its path string, e.g. `rg -n '"/dogs/puppy-care-pattaya.html"' src/`. Editing
the module that defines a page — including a shared hub or data file — is **normal, expected and
in scope**. It is not an "unverified cross-file change". Just read the surrounding code first.

---

## 2. The bundle — do all five

All five are research-free. If one genuinely does not apply to this page, do the other four and
say so in the log.

1. **FAQ first sentences.** Go through every FAQ on the page. Rewrite each answer so the
   **opening sentence is the answer itself**, then qualify. No warm-up clauses. This is what AI
   assistants extract and it is the highest-value edit on the site.
2. **Add one new FAQ** a real Pattaya owner would search for, answered from facts already on
   this site or already in `src/data/`. Never invent a new fact to answer it.
3. **Internal links — at least 3.** Two new relevant links out of this page, and one new link
   *into* this page from a genuinely related page. No dead ends, no orphans.
4. **Metadata.** Decoded `<title>` ≤ 60 characters, decoded description 140–160, both carrying
   the real search query. Fix if out of range.
5. **Structure.** Any paragraph longer than about five sentences gets split, turned into a list,
   or turned into a table if it is genuinely tabular. Add real descriptive `<h2>`/`<h3>` where
   a wall of text has no heading.

**Extras, only if quick:** wrap Thai text in `<span lang="th">`; add schema fields derivable
from data already in the repo (`areaServed`, coordinates for an address you already store,
`openingHours` from an hours string you already have); cut genuine filler.

Bump the page's `updated` date only if you changed substance, not wording.

**Do not repeat the same edit type three runs in a row.** Check the last three log lines. If
they all say the same thing, this page gets a different emphasis.

---

## 3. Optional — new entries

Only with spare time and network. Never required, never a reason to stop.

Search in **Thai** (`สัตวแพทย์ พัทยา`, `รับฝากสุนัข พัทยา`, `อาบน้ำตัดขน สุนัข พัทยา`), the
business's own Facebook page, or OpenStreetMap Overpass. Dog-friendly beaches, parks, cafés,
pet-friendly condos and hotels count as entries too.

New records match the shape in `src/data/businesses.js`. Unknown fields stay `null`. Unvisited
businesses stay `pending`, facts only. Cap: 60 new URLs total across the whole loop.

---

## 4. Never

- Invent or alter facts, prices, hours, phone numbers, reviews, ratings, verdicts, dates or
  evidence of a visit. Unknown stays `null`.
- Give veterinary advice. Symptoms and emergencies route to "see a vet now".
- Change any rule, fee or timing under `/bring-pet-to-thailand/` or `/take-pet-out-of-thailand/`
  unless you opened the government source **this run**.
- Add `Review` or `AggregateRating` schema, affiliate links or sponsored tags.
- Deploy, push, commit, ping IndexNow, or touch Cloudflare. **Tim ships.**
- Edit `tools/audit-invariants.js` to make something pass.

---

## 5. Check and log

```
node build.js
node tools/check-links.js
node tools/audit-invariants.js
```

All three green → append **one line** to `research/loop/log.md`:

```
Run <n> | <url> | faqs:<n> newfaq:<y/n> links:<out/in> meta:<fixed/ok> structure:<what> | build <pages> links <broken>
```

Any red → undo, log `Run <n> | REVERTED | <what broke>`, stop.

Then **STOP**. Do not ask what to do next.

---

## 6. You are not blocked

Every item in §2 works with no sources, no network and no research. A page's defining module
being in another file is not a blocker — open it and read it.

If something in the bundle truly cannot be done on this page, **do the rest and log it**. Never
end a run with no change. Never end a run having only reworded one paragraph.
