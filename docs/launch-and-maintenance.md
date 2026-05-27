# PattayaPets — Launch & Maintenance Handover

A plain-English guide to taking PattayaPets.com live and running it afterwards.
Written for the operator, not a developer. Last updated: May 2026.

This file lives in `docs/` and is **not** part of the deployed website.

---

## 1. Where the project stands

PattayaPets is **built and finished as a Phase 1 site**. Current state:

- **173 pages**, all generated to static HTML by the build script.
- Verified clean: every internal link works, every
  structured-data block is valid, no broken pages, accessibility and SEO
  fundamentals all in place.
- **Google Analytics is wired in** (`G-TX1PLBHN2K`, with IP anonymisation).
- The **domain `pattayapets.com` is connected** to the Cloudflare Pages project.

What the site contains:

- An **editorial directory** of 29 Pattaya pet businesses across vets, groomers,
  boarding, pet shops, trainers, pet-relocation agents and mobile vets, with category hubs
  and eight neighbourhood (area) hubs.
- A large **guide library** — clusters for bringing a pet to Thailand, taking a
  pet out, dog-friendly Pattaya, pet emergencies, owning a pet, adoption, pet
  health, and species hubs for cats and dogs.

The one honest caveat: every directory listing shows the verdict state
**"not yet reviewed"**. That is correct and intentional — see section 4.

---

## 2. How to deploy (take it live)

**Normal deploy:** push to `main` on GitHub. Cloudflare Pages rebuilds automatically
(watch the deploy in your Cloudflare dashboard). You only need the commands below
for a first-time machine setup or if GitHub deploy fails.

The site builds on your computer and uploads to Cloudflare. Open **Command
Prompt** (press the Windows key, type `cmd`, Enter) and run these lines,
one at a time:

```
cd C:\Projects\pattayapets
npm install
npm run build:all
npx wrangler pages deploy dist --project-name=pattayapets --branch=main --commit-dirty=true
```

What each line does:

1. `cd C:\Projects\pattayapets` — moves into the project folder.
2. `npm install` — fetches the build tools (slow once, instant after).
3. `npm run build:all` — regenerates the site and checks every internal link.
   The build should finish without errors; the link check should report **0 broken**.
4. `npx wrangler pages deploy ...` — uploads the finished site. **The first
   time only**, it opens a browser asking you to log in to Cloudflare — approve
   it, return to the terminal, and it finishes by printing your live URL.

After it finishes, open `pattayapets.com` and press **Ctrl+Shift+R** once (a
hard refresh) to clear any old cached version.

If `npx` ever asks "Ok to proceed? (y)", type **y** and Enter.

---

## 3. The first hour after launch

1. **Check the live site.** Open `pattayapets.com` on your phone with WiFi off
   (mobile data) — that bypasses any cache and shows you the true live site.
2. **Submit the sitemap to Google.** Go to Google Search Console
   (search.google.com/search-console), add `pattayapets.com` as a property,
   and submit `https://pattayapets.com/sitemap.xml`. This is what gets your pages
   crawled and indexed.
3. **Confirm analytics.** In Google Analytics, the Realtime report should show
   your own visit within a minute or two.

---

## 4. The editorial method and the directory verdicts (LOCKED rules)

This is the heart of what makes PattayaPets trustworthy. The rules in
`CLAUDE.md` section 2 are **locked** — do not break them:

- **No paid placements, no sponsored tags, no affiliate links. Ever.**
- A verdict (`recommend` / `OK` / `avoid`) is published **only** after a real
  **anonymous visit with the bill paid in full**.
- A verdict covers the **business experience only** — booking, communication,
  English-speaking staff, billing transparency, cleanliness, comfort. **Never**
  the veterinary medical quality.
- Until a business has had a real visit, its page shows **facts only** and the
  state **"not yet reviewed"**. Never invent a verdict or a review.

**This is the single most valuable thing you can do post-launch.** Every
anonymous visit turns one "not yet reviewed" listing into a real verdict, and
that is what makes the directory live up to its promise. The guides bring the
search traffic; the verdicts are the reason people trust and return.

To publish a verdict after a visit, the business data lives in
`src/data/businesses.js` — add the verdict and review notes there, then rebuild
and redeploy (section 2).

---

## 5. Routine maintenance

**The golden rule:** never hand-edit files in the `dist/` folder. `dist/` is
generated. You edit the source in `src/`, then run `npm run build`, then
deploy. Editing `dist/` directly is wasted work — the next build overwrites it.

**To change anything and publish it:**

1. Edit the relevant source file in `src/` (see section 6 for where things are).
2. Run `npm run build` and confirm it prints the page count with no errors.
3. Run the deploy command (section 2).

**Date-stamps.** When you update a guide, update its `updated` date in the page
source so the page and the sitemap show the change. CLAUDE.md asks every page
to be date-stamped — the build and layout handle the display.

---

## 6. Where things live

```
build.js                 The build script. Turns src/ into dist/.
CLAUDE.md                 The permanent locked rulebook. Read before editing.
src/layout.js             The shared page shell: header, footer, schema, <head>.
src/guidekit.js           Helpers that build guide pages.
src/data/businesses.js    The directory data — every business, every fact.
src/data/areas-content.js Neighbourhood write-ups for the area pages.
src/data/hub-content.js   The "how to choose" text on the category hubs.
src/pages/*.js            Page definitions, grouped by section.
src/assets/               CSS, JS, fonts, images.
dist/                     The built site. Generated. Do not edit by hand.
docs/                     Planning docs (not deployed). This file lives here.
```

- **To add or update a business:** edit `src/data/businesses.js`.
- **To edit a guide's words:** find it in `src/pages/` (the files are named by
  section, e.g. `43-emergency.js`, `40-bring-pet.js`).
- **To change the footer, header or site-wide schema:** `src/layout.js`.

---

## 7. Placeholders still to fill (optional)

These do not block launch — the site works fine without them:

- **Cloudflare Web Analytics token** — a second, privacy-friendly analytics
  layer. Optional; GA4 already covers you. To add it later, put the token in
  `src/layout.js` (the `cfBeacon` value), rebuild and deploy.
- **Contact email** — currently `hello@pattayapets.com`. If that is not the
  address you want, change `SITE.email` in `src/layout.js`.
- **Photography** — the site is illustration-only by design. Real local
  photography (storefronts, Pattaya scenes) would lift it, but only genuine
  photos — never stock pet clipart (a locked rule).

---

## 8. Growing the site — honest guidance

The site is content-comprehensive. The instinct to "add more pages" should be
resisted: **thin or duplicate pages hurt SEO rather than help it.** Google
rewards depth and trustworthiness, not page count.

The real growth levers, in order of value:

1. **Do the anonymous visits** and publish verdicts. This is the whole point of
   the directory and the strongest reason for people to trust and return.
2. **Keep guides current.** When import/export rules change, update the
   affected pages and their date-stamps. Accuracy is the brand.
3. **Add real businesses** to the directory as you verify them — only with real,
   confirmed facts.
4. **Add a guide only when there is a genuine, specific question** Pattaya pet
   owners are searching for that no existing page answers. Quality over count.

---

## 9. Quick reference

| Task | Command / location |
|---|---|
| Build the site | `npm run build` (in `C:\pattayapets`) |
| Deploy | `npx wrangler pages deploy dist --project-name=pattayapets --branch=main --commit-dirty=true` |
| Directory data | `src/data/businesses.js` |
| Site-wide shell | `src/layout.js` |
| Guide pages | `src/pages/*.js` |
| The rulebook | `CLAUDE.md` |

A healthy build prints: **"Pages: 166 rendered, 166 JSON-LD blocks valid"**.
If the page count drops unexpectedly or it reports an invalid block, something
in `src/` is broken — check the file you last edited.

---

*PattayaPets.com — the honest pet resource for Pattaya. Operated by TIMPAEMI
Co., Ltd. via the Pattaya Authority network.*
