# Network routing — Pattaya Authority

Reference for **contextual cross-links** between sister sites. PattayaPets implements
its outbound links in `src/pages/`; each other repo should add the mirror link in its
own Cursor window when Tim is ready.

**Not deployed.** Do not edit other repos from the PattayaPets workspace.

Last updated: 30 May 2026.

---

## Intent matrix (who sends traffic where)

| User intent | Entry site | Should link to PattayaPets |
|-------------|------------|---------------------------|
| Moving to Thailand + pet | pattayavisahelp.com | `/bring-pet-to-thailand/` |
| Moving to Thailand + pet | pattaya-authority.com | `/bring-pet-to-thailand/checklist.html` |
| Living in Pattaya, new expat | pattaya-authority.com | `/start-here.html` |
| Dog-friendly dining | pattaya-restaurant-guide.com | `/dog-friendly-pattaya/restaurants.html` |
| Dog-friendly dining | pattayapets.com | pattaya-restaurant-guide.com (done) |
| Pet emergency / vet | pattayapets.com | `/pet-emergency/24-hour-vets-pattaya.html` |
| Human medical (not pets) | pattaya-medical.com | — (do not conflate) |
| No car, vet transport | pattaya-vehicle-rentals.com | `/owning-a-pet-in-pattaya/getting-to-the-vet.html` |
| School + family + pet | pattayaschoolguide.com | `/start-here.html` |
| Gym + dog walks | pattayagym.com | `/owning-a-pet-in-pattaya/where-to-walk-your-dog.html` |

---

## PattayaPets outbound (live after Batch 65)

| PattayaPets page | Links to | Anchor text idea |
|------------------|----------|------------------|
| `/bring-pet-to-thailand/` | pattayavisahelp.com | Pattaya Visa Help |
| `/start-here.html` (§3) | pattayavisahelp.com | Pattaya Visa Help |
| `/dog-friendly-pattaya/` | pattaya-restaurant-guide.com | Pattaya Restaurant Guide |
| `/owning-a-pet-in-pattaya/getting-to-the-vet.html` | pattaya-vehicle-rentals.com | Pattaya Vehicle Rentals |
| `/owning-a-pet-in-pattaya/where-to-walk-your-dog.html` | pattayagym.com | Pattaya Gym |
| `/start-here.html` (§3) | pattayaschoolguide.com | Pattaya School Guide (families) |
| `/dog-friendly-pattaya/cafes.html` | pattaya-coffee.com | Pattaya Coffee |
| `/pet-emergency/` | pattaya-medical.com | Pattaya Medical (human care — disambiguation) |
| Footer (all pages) | Full `NETWORK` in `layout.js` | Locked |

---

## Suggested mirrors (implement in each repo’s window)

### pattayavisahelp
- Long-stay / retirement / Elite visa guides → paragraph + link to
  `https://pattayapets.com/bring-pet-to-thailand/`

### pattaya-restaurant-guide
- Dog-friendly / outdoor dining hub → link to
  `https://pattayapets.com/dog-friendly-pattaya/restaurants.html`

### pattaya-authority
- “Moving to Pattaya” hub → pets card linking to
  `https://pattayapets.com/start-here.html`
- Portfolio: ensure `pattaya-pets` case study is live

### pattaya-vehicle-rentals
- Expat / family / long-rental pages → one line on vet trips →
  `https://pattayapets.com/owning-a-pet-in-pattaya/getting-to-the-vet.html`

### pattayaschoolguide
- Family relocation → `https://pattayapets.com/start-here.html`

---

## Rules

- Contextual links only where **intent matches** — no footer spam on every page.
- `target="_blank" rel="noopener noreferrer"` on cross-site editorial links.
- **Do not** nofollow network links (footer policy is locked).
- Never link non-network repos from PattayaPets footer without Tim updating `layout.js`.
