# PattayaPets.com — Build Proposal

**For sign-off by Tim before any pages are built.**
Prepared 21 May 2026 · Operator: TIMPAEMI Co., Ltd. via the Pattaya Authority network.

This document proposes three things the brief asks me to lock with you first:
**(1) the brand identity, (2) the full site architecture / sitemap, (3) the Phase 1 business directory lineup.**
Nothing gets built until you approve or amend this.

---

## 0. What I studied first

I reviewed the three network gold-standard sites live: **pattaya-medical.com**,
**pattaya-restaurant-guide.com**, and the parent **pattaya-authority.com**. Key takeaways
that shape this build:

- **The editorial-directory pattern is proven.** Pattaya Medical already runs exactly the
  model you picked for Phase 1 — factual "facts pages" badged *"Visit pending · Facts
  verified [date]"*, with a verdict published only after a real anonymous visit. PattayaPets
  will use the same mechanism, so it's consistent with the network from day one.
- **Engineering is identical across the network:** hand-built static HTML, no framework/CMS,
  Cloudflare Pages, self-hosted WOFF2 fonts, JSON-LD schema graph, PWA + service worker,
  network footer link-outs, per-page disclaimer.
- **Each site has its own palette + display font.** Medical = deep navy + Fraunces/Inter.
  Restaurant Guide = near-black + bold condensed editorial. PattayaPets must be visibly
  *different* — proposal below.
- **URL conventions:** category folders with a hub index + per-item `.html` files
  (`/vets/`, `/vets/business-name.html`), area pages at `/area/name.html`.

---

# PART 1 — BRAND IDENTITY

Direction you chose: **calm & trustworthy** — a credible authority first, warm and friendly
second. Not cutesy, no clipart. Here is the locked proposal.

## 1.1 Name & positioning

- **Name:** PattayaPets
- **Tagline:** *"The honest pet resource for Pattaya."*
- **One-liner:** An independent editorial directory and guide for pet owners in Pattaya —
  reviewed honestly, never paid.

## 1.2 Colour palette — "Banyan"

A deep teal-green core (calm, natural, shade-and-greenery — apt for hot-climate pet care),
a warm marigold accent (the friendly, sunny, distinctly-Thai note), warm sand neutrals, and
a dedicated emergency red. Distinct from Medical's navy and the Restaurant Guide's black.

| Role | Name | Hex | Use |
|---|---|---|---|
| Primary | Banyan | `#1B5A4C` | Brand, headers, links, primary buttons, theme-color |
| Primary dark | Deep Forest | `#15241F` | Body text, footer |
| Accent | Marigold | `#E7A23B` | Highlights, callouts, "OK" verdict, hover |
| Emergency | Alert Red | `#C5402F` | 24-hour vet callouts, "Avoid" verdict, emergency banner |
| Background | Sand | `#FAF5EC` | Page background |
| Surface | Mist | `#FFFDF7` | Cards, panels |
| Hairline | Border | `#E4DCC9` | Dividers, borders |
| Muted text | Sage Grey | `#5A6B62` | Secondary text, metadata |

**Verdict colours do double duty:** Recommend = Banyan green · OK = Marigold · Avoid =
Alert Red. WCAG 2.2 AA contrast confirmed for all text pairings before build.

## 1.3 Typography — self-hosted WOFF2, no Google Fonts CDN

| Use | Typeface | Why | Licence |
|---|---|---|---|
| Display / headings | **Bricolage Grotesque** | Contemporary, warm, characterful but credible — friendly without being childish | SIL OFL — self-hosted woff2 |
| Body / UI | **Hanken Grotesk** | Highly readable humanist sans, warm tone, excellent at small sizes on mobile | SIL OFL — self-hosted woff2 |

Both are clearly distinct from the rest of the network (Medical = Fraunces + Inter).
*Alternative if you want more "serif gravitas":* swap display to **Petrona** or **Newsreader**.
Say the word and I'll switch.

## 1.4 Logo / wordmark

Custom wordmark **"PattayaPets"** set in Bricolage Grotesque — *Pattaya* in Deep Forest,
*Pets* in Banyan. Paired with a small geometric mark: a rounded **location pin whose
negative space forms a paw** — ties "Pattaya" (place) to "Pets" in one symbol. Built as a
clean inline SVG, no stock art. I'll produce 2–3 mark variations for you to pick from.

## 1.5 Voice

Plain, warm, direct. Talks to a worried or busy expat/tourist like a knowledgeable friend —
never salesy, never clinical. Honest about uncertainty (especially import rules). Every page
carries the disclaimer: *"Editorial and informational only. Not veterinary advice. Always
consult a qualified veterinarian."*

---

# PART 2 — SITE ARCHITECTURE & SITEMAP

Two halves — an **editorial directory** and a **guide hub** — cross-linked heavily.
Clean URLs, full JSON-LD schema, BreadcrumbList on every page, `sitemap.xml`, `llms.txt`.

The full architecture below grows to several hundred pages over time. **Phase 1 (the "large
first push") is ~115 pages**, marked ✅ below. Pages marked ⏳ are mapped now, built later.

## 2.1 Structural / core pages (Phase 1 ✅)

```
/                      Home
/start-here.html       Emergency "Start Here" — new-to-Pattaya front door
/about.html
/standards.html        Editorial Standards & method (the network signature)
/contact.html
/masthead.html
/corrections.html
/privacy.html
/accessibility.html
/sitemap.html          Human-readable sitemap
/404.html  /offline.html        (utility, not indexed)
```
Plus non-page files: `sitemap.xml`, `robots.txt`, `llms.txt`, `feed.xml`,
`manifest.webmanifest`, `sw.js`, `_headers`, `_redirects`, `/.well-known/security.txt`.

## 2.2 Business directory

**Category hubs (7) ✅** — `/vets/` · `/groomers/` · `/boarding/` · `/pet-shops/` ·
`/trainers/` · `/pet-relocation/` · `/mobile-vets/`

**Area hubs (9) ✅** — `/area/` index + 8 area pages: Naklua, Wongamat, Central Pattaya,
Pratumnak, Jomtien, Bang Saray, Sattahip, Banglamung. Each lists every business in that area
and cross-links category hubs.

**Business listing pages ✅** — one `.html` per business under its category folder, e.g.
`/vets/thonglor-pet-hospital-pattaya.html`. Phase 1 ≈ **35 listings** (see Part 3). Each is
a factual page (services, areas, hours, contact, languages) with a verdict block reading
**"Not yet reviewed — visit pending"** until a real anonymous visit is done. Honest,
indexable, and consistent with Pattaya Medical.

## 2.3 Guide hub — the SEO volume engine

**A. Flagship cluster — "Bringing your pet to Thailand" `/bring-pet-to-thailand/` ✅ (~18 pages)**
```
/bring-pet-to-thailand/                         Pillar hub
  import-permit-thailand-dld.html               DLD import permit (R7)
  microchip-requirements.html
  rabies-vaccination-titer-test.html
  health-certificate.html
  airline-pet-policies.html
  arrival-suvarnabhumi-airport.html
  cost-to-bring-a-pet-to-thailand.html
  from-uk.html · from-usa.html · from-eu.html · from-australia.html ·
  from-canada.html · from-germany.html         (origin-country sub-pages)
  airlines/thai-airways.html · emirates.html · qatar-airways.html · lufthansa.html
```

**B. "Taking your pet OUT of Thailand" `/take-pet-out-of-thailand/` ✅ (~7 pages)**
hub + export-process + to-uk / to-usa / to-eu / to-australia + pet-export-airlines.

**C. "Dog-friendly Pattaya" `/dog-friendly-pattaya/` ✅ (8 pages)**
hub + beaches · cafes · restaurants · hotels · condos · parks · malls.

**D. Pet emergency `/pet-emergency/` ✅ (8 pages)**
hub + 24-hour-vets-pattaya · pet-first-aid · heatstroke · ticks-and-fleas ·
snake-bites · street-dog-encounters · poisoning.

**E. "Owning a pet in Pattaya" `/owning-a-pet-in-pattaya/` ✅ (7 pages)**
hub + cost-of-owning-a-pet · hot-climate-pet-care · pet-friendly-housing ·
where-to-walk-your-dog · dog-registration-thailand · where-to-buy-pet-food.

**F. Adoption & rescue `/adopt-a-pet-pattaya/` ✅ (8 pages)**
hub + one page each for Hope for Strays, Dog & Cat Rescue Pattaya, Animal Army Foundation,
Pattaya Street Dogs (K9aid), Soi Dog (Pattaya), Malee's Animal Shelter, Rescue Paws Thailand.

**G. Pet insurance ✅** — `/pet-insurance-thailand.html` (provider-comparison cluster ⏳ later).

**H. Species hubs ✅** — `/cats/` and `/dogs/` — landing hubs aggregating all cat-/dog-
specific content; spawn species-specific guides over time.

**Phase 1 total ≈ 115 indexable pages.** Architecture scales to 300+ (more countries,
airlines, areas, businesses, and guides) in later phases.

## 2.4 SEO execution (locked)

Keyword-led titles targeting real queries (*"24 hour vet Pattaya"*, *"dog friendly beach
Pattaya"*, *"bring dog to Thailand from UK"*, *"pet relocation Thailand"*, *"dog grooming
Jomtien"*); heavy internal linking guide ↔ directory ↔ area; full JSON-LD
(Organization/NewsMediaOrganization site-level, LocalBusiness/VeterinaryCare per business,
Article for guides, FAQPage, BreadcrumbList everywhere, `sameAs` network array); canonical
tags; `sitemap.xml`; `llms.txt`; fast Core Web Vitals.

---

# PART 3 — PHASE 1 BUSINESS DIRECTORY LINEUP

Real businesses found through research (no scraping of competitor review sites). Each
becomes a **factual listing page, verdict "visit pending."** Counts marked "+N at build"
mean I'll source additional verified businesses while building that section.

**Vets & animal hospitals (8)** — Thonglor Pet Hospital (Pattaya branch, 24h) ·
Pattaya Veterinary Clinic (Naklua) · Pattaya Animal Hospital (Na Jomtien) ·
Vetazoo Exotic Pet Hospital (Pattaya Beach) · Animal Army Foundation Hospital ·
Muang Ake Pet Hospital (Pattaya branch, 24h) · Pattaya Community Pet Hospital · +1 at build.

**Mobile / home-visit vets (3)** — sourced at build (Thonglor and others run mobile units).

**Pet groomers (5)** — Pattaya City Pet Shop & Grooming Salon · Jaijai Grooming ·
FURiday Pet Grooming · +2 at build.

**Pet boarding, hotels & daycare (5)** — Canine Point Academy · +4 at build.

**Pet shops & supplies (5)** — Brand Dog Pattaya Pet Supplies · PetSmart Pattaya
(Thep Prasit) · Peturday Pattaya (Pratumnak) · Pet Lovers Centre Pattaya · +1 at build.

**Dog trainers & behaviourists (4)** — Zoeta Dogsoul · K9 Pattaya Dog Training School ·
Personal Dog Trainer Max (Pattaya / Bang Saray / Sattahip) · Canine Point Academy.

**Pet relocation / import-export agents (5)** — Pet Relocation Thailand · Relo4Paws ·
United Pet Express · Asia Relocation Thailand · Pawspective Relocations.

**Total Phase 1 directory ≈ 35 businesses.** Flagged: 24-hour clinics get a clear emergency
badge; all listings carry a "facts verified [date], verify before visiting" stamp.

> **Honesty note:** I cannot verdict a business I haven't visited, and the editorial method
> is locked. So Phase 1 listings publish *facts only* — name, area, services, hours, contact,
> languages — with the verdict block clearly marked "not yet reviewed." You add verdicts
> after your own anonymous visits. This is exactly how Pattaya Medical launched.

---

# PART 4 — ENGINEERING & SEO STANDARDS (locked, matching the network)

- Static HTML, one file per page. No framework, no CMS.
- Allowlist build script → `dist/`: minifies HTML/CSS/JS, regenerates the service-worker
  precache, validates JSON-LD.
- Self-hosted WOFF2 via `@font-face`. Inline critical CSS + deferred main stylesheet.
- Service worker + `/offline.html` navigation fallback. PWA manifest.
- `_headers`: HSTS, X-Frame-Options, CSP, Permissions-Policy.
- **No cookie banner** — GA4 with `anonymize_ip` + cookieless Cloudflare Web Analytics.
- WCAG 2.2 AA. Lighthouse mobile 90+ on every page.
- Schema graph: Organization/NewsMediaOrganization, LocalBusiness / VeterinaryCare,
  Article, FAQPage, BreadcrumbList, `sameAs` network array.
- Deploy: Cloudflare Pages, auto-deploy from `github.com/TimPaemi/pattayapets`. You run the
  git push / deploy yourself.

---

# PART 5 — WHAT I NEED FROM YOU

1. **Production branch** — confirm it's `main`.
2. **GA4 Measurement ID** for PattayaPets (or I'll wire a clearly-marked placeholder).
3. **Cloudflare Web Analytics token** (or placeholder).
4. **Contact email** — e.g. `editors@pattayapets.com` / `hello@pattayapets.com`?
5. **WhatsApp / LINE** — reuse the network's `+66 96 728 6999` / LINE `@timpaemi`, or
   pets-specific?
6. **Legal footer** — confirm "TIMPAEMI Co., Ltd., Pattaya City, Bang Lamung District,
   Chon Buri 20150" and "operated via the Pattaya Authority network."
7. Anything in Parts 1–3 you want changed.

*(Placeholders are fine for 2–3 and 5 — the site will build and deploy; you swap real values
in later. None of these block the build.)*

---

# PART 6 — BUILD SEQUENCE (after your sign-off)

1. **CLAUDE.md** — write the repo's locked-rules doc capturing everything above.
2. **Foundation** — repo structure, shared CSS/JS, fonts, build script, `_headers`, service
   worker, schema templates, home + structural pages.
3. **Directory** — category + area hubs, then the ~35 business listing pages.
4. **Guides** — cluster by cluster: flagship import cluster first (highest SEO value), then
   dog-friendly, emergency, owning-a-pet, adoption, insurance, species hubs.
5. **Verify** — JSON-LD validation, internal-link check, Lighthouse mobile pass, WCAG pass,
   `sitemap.xml` + `llms.txt` generation.

Built in waves; I'll show progress at each wave. You handle the git push / Cloudflare deploy.
PattayaPets is **not** added to the pattaya-authority.com showcase until it's live with real
content.
