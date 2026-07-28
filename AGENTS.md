<!-- NETWORK-HEADER v1 -->
# READ FIRST

**`C:\Projects\NETWORK-RULES.md` is the rulebook for every site in this network.** Read it before
touching footers, cross-domain links, schema, canonicals, indexing or design. It overrides
anything in this file.

**The two that break things most often:** exactly ONE cross-domain link per page (the followed
`timpaemi.com` author credit) and ZERO sister-site links anywhere — including JSON-LD, `sameAs`,
`llms.txt` and anything the build scripts inject.

**Before any structural change** (footer · publisher entity · canonicals · internal-link pattern ·
`noindex`/pruning · redesign · URL changes): log it in `C:\Projects\NETWORK-CHANGE-LOG.md`, and
do only one at a time. Content enrichment is not structural — ship that continuously.

**Site:** PattayaPets — https://pattayapets.com/
**Deploy:** `npm run build:all  then  git push main  (Astro)`

**Retired 26 Jul 2026 — ignore anything below that says otherwise:** the publisher is
**TimPaemi**, not Pattaya Authority. Pattaya Authority must not appear on this site in any
footer, byline, JSON-LD, `llms.txt`, `humans.txt` or prose.
<!-- END NETWORK-HEADER -->

<!-- Appended by Claude, 27 July 2026. Scope lock for the pattayapets repo only. -->

## Scope lock — this repo only

This repo is built and shipped on its own. Everything outside its folder is read-only.

### 1 · Never build anything shared

No generator, engine, factory, template system, shared component library, shared script or
"reusable" module intended to serve more than this one site. Not in this repo, not anywhere.

If you catch yourself writing the words *reusable*, *shared*, *for all sites*, *network-wide*,
*so the other sites can use it*, or *we can lift this out later* — stop and delete that plan.

Duplication across sites is the intended trade. Each site is built separately, on purpose. A copy
that one window can change safely beats a shared module six windows fight over. Do not de-duplicate
across repos. Do not propose it. Do not leave a TODO suggesting it.

### 2 · Never use a generator built for another repo

Do not import, call, copy-by-reference or depend on anything living outside this repo — including
`C:\Projects\_brand\`, a sibling site's `scripts/`, or a shared file at the `C:\Projects` root.

If this repo already depends on something outside itself, cut the dependency:

1. Find every build-time or runtime reference that resolves to a path outside this folder. Check
   imports, `@import` in CSS, script `src`, config paths, and any `node` script that reads `../`
   above the repo root.
2. Copy those files into this repo — a `scripts/`, `src/lib/` or `src/styles/` folder of its own.
   Copy, never move.
3. Repoint every reference at the local copy.
4. Strip out anything the copy carries for other sites: per-site switches, site maps, theme
   registries, `if (site === 'x')` branches, CLI flags selecting a target site. What is left should
   do exactly one thing for exactly this site, with the values hardcoded to it.
5. Delete nothing outside this repo. Other windows are still using those files.
6. Build, confirm the output is unchanged, and report what you vendored in.

After this, the repo must build with the rest of `C:\Projects` deleted. That is the test.

### 3 · Reading is fine, writing is not

You may read another repo to copy a pattern, check how something was solved, or match a convention.
You may never write to one, refactor one, tidy one, rename in one, or run a build in one.

Two Astro builds at once delete each other's `dist/` and both fail. One build at a time, in this
repo only.

Files at the `C:\Projects` root are shared by every window. Do not edit them.

### 4 · If something outside this repo needs to change

Say so and stop. Describe what needs changing and why. Do not do it and mention it afterwards —
another window may be mid-edit in that exact file.

### 5 · Changes that affect what Google indexes need explicit approval

`noindex`, pruning, canonicals, redirects, URL changes, sitemap rules, robots directives, bulk
frontmatter edits. These are not routine edits and must not be bundled into other work.

State the downside in clicks, not in pages or percentages, and wait for a yes.

In July 2026 an index gate quarantined 4,635 pages on one site and took it from 40 clicks a day to
zero within 24 hours. Nothing was deleted and it was fully reverted, but the traffic did not come
back the same day. Do not rebuild anything like it.

Content enrichment is not structural. Ship that continuously.


# PattayaPets — Cursor workspace

**Property:** https://pattayapets.com/  
**Agency HQ:** `C:\Projects\pattaya-authority` — read `AGENCY.md` and `BRAND_SPECS.md` there.  
**Portfolio card:** https://pattaya-authority.com/work/pattaya-pets/

When brand colors, hero copy, or stats change here, sync the case study in `pattaya-authority/v2-bold/work/pattaya-pets/` and update locked specs in HQ `BRAND_SPECS.md`.

## Pattaya Authority network (sister repos)

Do **not** edit these from this workspace unless Tim opens that project. Use
`docs/network-routing.md` for cross-link intent.

| Site | Repo |
|------|------|
| Pattaya Authority | github.com/TimPaemi/pattaya-authority |
| TimPaemi | github.com/TimPaemi/timpaemi |
| Pattaya Visa Help | github.com/TimPaemi/pattayavisahelp |
| Pattaya Restaurant Guide | github.com/TimPaemi/pattayarestaurantguide |
| Pattaya Medical | github.com/TimPaemi/pattayamedical |
| Pattaya Gym | github.com/TimPaemi/pattayagym |
| Pattaya Coffee | github.com/TimPaemi/pattayacoffee |
| Pattaya School Guide | github.com/TimPaemi/pattayaschoolguide |
| Pattaya Vehicle Rentals | github.com/TimPaemi/pattaya-vehicle-rentals |
| Pattaya Villa Stream | github.com/TimPaemi/pattayavilla |
| Pattaya Personal Trainer | github.com/TimPaemi/pattayapersonaltrainer |
| PattayaPets | github.com/TimPaemi/pattayapets (this repo) |

Other repos exist outside the deployed footer network; do not link them from
PattayaPets unless Tim adds them to `NETWORK` in `src/layout.js`.
