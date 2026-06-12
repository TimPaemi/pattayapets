# CLAUDE.md — PattayaPets.com locked rules

This file is the permanent rulebook for the PattayaPets repository. Anything marked
**LOCKED** must not be changed without Tim's explicit say-so. Read this fully before
editing the repo.

- **Site:** PattayaPets.com — the honest pet resource for Pattaya.
- **Operator:** TIMPAEMI Co., Ltd., via the Pattaya Authority network.
- **Repo:** https://github.com/TimPaemi/pattayapets
- **Hosting:** Cloudflare Pages (project `pattayapets`). Production branch: `main`.
- **Founder/owner contact:** Tim (timpaemi@gmail.com).

---

## 1. What this site is

The complete, honest pet resource for Pattaya, written for **Western expats and tourists**
who have a pet, are bringing one to Thailand, or want to adopt one here. Two halves:

1. An **editorial directory** of pet businesses — vets, groomers, boarding, pet shops,
   trainers, pet-relocation agents, mobile vets — reviewed honestly through anonymous visits.
2. A large **guide / resource hub** answering every question a Pattaya pet owner searches.

**Primary goal:** maximum organic SEO traffic from people in and around Pattaya. Hundreds
of indexable, genuinely useful pages. Fast, mobile-first, accessible.

---

## 2. Editorial method — LOCKED (the network signature)

- **Zero paid placements. Zero sponsored tags. Zero affiliate links.** Ever.
- Reviews come from **anonymous visits with bills paid in full**. No PR visits, no comps.
- **Verdicts** are `recommend` / `ok` / `avoid`, scoped **only to the business experience**:
  booking, communication, English-speaking staff, billing transparency, cleanliness,
  comfort. **Never** verdict on veterinary medical quality.
- Until a business has had a real anonymous visit, its page publishes **facts only** and
  shows the verdict state `pending` ("Not yet reviewed — visit pending"). Never invent a
  verdict, never write a fake review.
- This is an **editorial publication about pet businesses. It is NOT a vet** and gives
  **no veterinary advice**. Every page carries the disclaimer:
  *"Editorial and informational only. Not veterinary advice. Always consult a qualified
  veterinarian."*
- Pet import/export rules change. Present the process clearly, **date-stamp it**, and tell
  readers to verify with official sources (Thailand DLD, their airline, the
  destination-country authority).
- **No scraping competitor review sites. No fake reviews. No generic stock pet clipart.**

---

## 3. Brand identity — LOCKED

Direction: calm, trustworthy, warm, approachable — a credible authority, not a cutesy blog.

**Palette "Banyan":**

| Token | Name | Hex |
|---|---|---|
| `--banyan` | Banyan (primary) | `#1B5A4C` |
| `--forest` | Deep Forest (text) | `#15241F` |
| `--marigold` | Marigold (accent) | `#E7A23B` |
| `--alert` | Alert Red (emergency) | `#C5402F` |
| `--sand` | Sand (page bg) | `#FAF5EC` |
| `--mist` | Mist (surfaces) | `#FFFDF7` |
| `--border` | Border / hairline | `#E4DCC9` |
| `--sage` | Sage Grey (muted text) | `#5A6B62` |

Verdict colours: recommend = Banyan · ok = Marigold · avoid = Alert Red.

**Typography (self-hosted WOFF2, NO Google Fonts CDN):**
- Display / headings: **Bricolage Grotesque** (weights 400, 600, 700).
- Body / UI: **Hanken Grotesk** (weights 400, 500, 700).
- Files: `src/assets/fonts/*.woff2`. Sourced from `@fontsource` (SIL OFL), self-hosted.

**Logo:** wordmark "PattayaPets" (*Pattaya* in Deep Forest, *Pets* in Banyan) + a location-pin
mark whose negative space forms a paw. Inline SVG, no raster, no stock art.

---

## 4. Engineering standards — LOCKED

- **Static HTML, one file per page** in the deployed output. No SPA, no client-side routing,
  no framework, no CMS (no WordPress / Wix / Webflow).
- **Build pipeline:** `node build.js` is the single allowlist build script. It generates
  every page to static HTML, minifies HTML/CSS/JS, copies only allowlisted assets,
  regenerates the service-worker precache, validates every JSON-LD block, and writes
  `dist/`. `dist/` is the deploy artifact and is git-ignored.
- **Authoring model:** pages are defined as data + a shared layout in `src/` (see §6). This
  is a hand-rolled static generator — it is not a framework or CMS. The *output* is plain
  static HTML, one file per URL.
- Self-hosted fonts via `@font-face`. **Never** link `fonts.googleapis.com`.
- **Inline critical CSS** in `<head>` + **deferred main stylesheet** (`/assets/css/site.css`).
- Shared CSS and JS — one `site.css`, one `site.js`. Keep JS minimal; the site must fully
  work with JavaScript disabled.
- **Service worker** (`/sw.js`) with a precache + a `/offline.html` navigation fallback.
- **`_headers`**: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP,
  Permissions-Policy.
- **No cookie banner.** Analytics = GA4 with `anonymize_ip` + cookieless Cloudflare Web
  Analytics. (GA4 ID / CF token are placeholders until Tim supplies them — see §8.)
- **WCAG 2.2 AA.** Lighthouse mobile 90+ on every page. Mobile-first.
- Clean URLs, canonical tag on every page, `sitemap.xml`, `llms.txt`, `robots.txt`.

**Schema (JSON-LD) — every page:**
- Site-level `Organization` (NewsMediaOrganization-style) with a `sameAs` array linking the
  whole Pattaya network.
- `BreadcrumbList` on every page.
- Per business: `LocalBusiness` / `VeterinaryCare`.
- Guides: `Article`. Q&A blocks: `FAQPage`.
- All JSON-LD is validated by `build.js`; the build fails if any block is invalid JSON.

---

## 5. SEO architecture

- **Directory:** category hubs (`/vets/`, `/groomers/`, `/boarding/`, `/pet-shops/`,
  `/trainers/`, `/pet-relocation/`, `/mobile-vets/`), area hubs (`/area/<area>.html` for
  Naklua, Wongamat, Central Pattaya, Pratumnak, Jomtien, Bang Saray, Sattahip, Banglamung),
  one page per business (`/<category>/<slug>.html`).
- **Guides:** flagship cluster `/bring-pet-to-thailand/` (DLD import permit, microchip,
  rabies + titer, health certificate, airlines, per-country sub-pages); `/take-pet-out-of-
  thailand/`; `/dog-friendly-pattaya/`; `/pet-emergency/`; `/owning-a-pet-in-pattaya/`;
  `/adopt-a-pet-pattaya/`; `/pet-insurance-thailand.html`; species hubs `/cats/`, `/dogs/`.
- **Structural:** `/`, `/start-here.html`, `/directory.html`, `/guides.html`, `/about.html`,
  `/standards.html`, `/contact.html`, `/masthead.html`, `/corrections.html`,
  `/privacy.html`, `/accessibility.html`, `/sitemap.html`, `/404.html`, `/offline.html`.
- Keyword-led `<title>` tags targeting real queries. Heavy internal linking:
  guide ↔ directory ↔ area. Date-stamp every page (`updated`).

---

## 6. Repo layout

```
build.js                 The allowlist build script (src -> dist).
package.json             Build dependencies (minifiers, fonts).
CLAUDE.md                This file.
docs/                    Planning docs (proposal.md). Not deployed.
tools/                   Local authoring helpers. Not deployed.
src/
  layout.js              Shared document shell: <head>, header, nav, footer, schema.
  critical.css           Inline critical CSS (small; injected into <head>).
  pages/*.js             Page definitions. Each exports an array of page objects.
  data/*.js              Structured content data (businesses, guides, areas...).
  assets/css/site.css    Full deferred stylesheet.
  assets/js/site.js      Shared progressive-enhancement JS.
  assets/fonts/*.woff2   Self-hosted fonts.
  assets/img/*           SVG logo/mark, icons, og image.
  static/                Files copied verbatim: _headers, _redirects, robots.txt,
                         manifest.webmanifest, .well-known/security.txt.
  sw.js                  Service-worker template (precache list injected at build).
dist/                    Build output. Git-ignored. Cloudflare Pages serves this.
```

**Page object shape** (returned by `src/pages/*.js`):
```
{ path, title, description, body,
  updated,            // YYYY-MM-DD, shown + used in sitemap
  breadcrumbs,        // [{name, path}]
  schema,             // optional array of JSON-LD objects (besides Org + Breadcrumb)
  ogType, image, noindex, cssExtra }
```

---

## 7. Build & deploy

- Local build: `npm install` then `npm run build` → `dist/`.
- Cloudflare Pages: build command `npm run build`, output directory `dist`,
  production branch `main`. Auto-deploys on push to GitHub. Cloudflare handles
  Brotli/gzip. **Tim runs the git push / deploy himself.**
- Do **not** add PattayaPets to the pattaya-authority.com showcase until the site is
  live with real content.

---

## 8. Network footer — LOCKED

Every page footer carries the network strapline **Built in Pattaya. For Pattaya.** and
links the other owned Pattaya Authority sites (not PattayaPets itself), each
`target="_blank" rel="noopener noreferrer"`:

pattaya-authority.com · timpaemi.com · pattaya-restaurant-guide.com · pattayavisahelp.com ·
pattaya-gym.com · pattaya-afterdark.com (Pattaya After Dark) · pattaya-school-guide.com ·
pattaya-coffee.com · pattayastream.com (Pattaya Villa Stream) · pattaya-medical.com ·
pattaya-vehicle-rentals.com.

Organization JSON-LD includes `slogan` and a matching `sameAs` array.

---

## 9. Open items / placeholders (swap when Tim supplies)

- GA4 Measurement ID — configured as `G-TX1PLBHN2K` in `src/layout.js` (set May 2026).
- Cloudflare Web Analytics token — placeholder in `src/layout.js`.
- Contact email — using `hello@pattayapets.com` (update if different).
- WhatsApp / LINE — using the network's `+66 96 728 6999` / LINE `@timpaemi`.
- OG image — `/assets/img/og-default.png`.

These do not block the build; the site builds and deploys with placeholders.
