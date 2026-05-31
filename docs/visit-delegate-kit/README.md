# Visit delegate kit — PattayaPets

Operator guide for **hired or delegated field visits**. PattayaPets cannot publish a
verdict until someone completes an anonymous visit with the bill paid in full. AI
prepares these briefs; a human executes the visit and returns notes; AI drafts the
published review for operator approval.

**Not deployed.** Lives in `docs/` only.

---

## How the pipeline works

1. **AI** generates a visit brief from `src/data/businesses.js` + this kit.
2. **Delegate** visits anonymously, pays full price, fills in `post-visit-template.md`.
3. **Delegate** sends completed template to `hello@pattayapets.com` (or operator channel).
4. **AI** turns notes into `verdict`, `reviewed` and `review` fields in `businesses.js`.
5. **Operator** approves (must not verdict on veterinary medical quality).
6. **AI** runs `npm run build:all`, commit, push → Cloudflare deploys.

---

## Rules the delegate must follow (LOCKED)

- **Anonymous** — no mention of PattayaPets, no PR visit, no “we’re reviewing you.”
- **Pay full bill** — keep receipt; no comps or discounts.
- **Verdict scope** — booking, communication, English, billing transparency, cleanliness,
  comfort only. **Never** comment on diagnosis, treatment or surgical outcomes.
- **Honest** — if the visit was bad, say so; if good, say so. No inflation.

---

## Files in this kit

| File | Purpose |
|------|---------|
| `tier-1-briefs.md` | Printable briefs for the first five priority visits |
| `post-visit-template.md` | Blank form delegate fills after each visit |

Priority order matches `docs/visit-priorities.md` Tier 1.

---

## Paying a delegate

Budget roughly **500–2,000 THB per visit** depending on category (grooming vs vet consult).
Tier 1 five-visit day in central Pattaya: allow one full day + transport + meals.

---

## After the first five verdicts

Update homepage and category hubs automatically show real verdict badges. Submit changed
listing URLs in Google Search Console → URL Inspection → Request indexing.
