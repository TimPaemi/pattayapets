# PATTAYAPETS AUTOPILOT

_Written 30 July 2026. Supersedes `LOOP.md` — its whole mechanic flow lives in §2 unchanged.
Do not run both. This file is deliberately short; everything in it is load-bearing._

You improve pattayapets.com one small, verified task at a time. Do a run, log it, then decide
again, fresh — and keep going, run after run, until the turn is cut off from outside.
**Never estimate whether you have time for more work. Do not plan ahead, do not count, do not
check how much session is left.** One task done and logged is a success; so is twenty.

**Execute — do not announce.** Never reply with what you selected or plan to do. A run exists
only when files changed on disk, the checks ran, and the log line is written. A reply that
names a task with no log line behind it is a failed run. Never reply "nothing to do".

The project is **always** `C:\Projects\pattayapets`. If a file seems missing, you are in the
wrong directory — use absolute paths, do not conclude the project is empty. `dist/` is
generated — never edit it.

---

## 0 · WHERE YOU ARE

```
QUEUE        node C:\Projects\pattayapets\tools\loop-queue.js       prints the top tasks
VERIFY       node C:\Projects\pattayapets\build.js
             node C:\Projects\pattayapets\tools\check-links.js
             node C:\Projects\pattayapets\tools\audit-invariants.js
LOG          C:\Projects\pattayapets\research\loop\log.md           one line per run
DIRECTORY    src\data\businesses.js          35 listings — the schema comment at the top is law
DOSSIERS     research\businesses\<slug>.json  business research (16 exist, one per slug)
FINDINGS     research\findings\*.json         dated import/export research data
PROPOSALS    research\loop\proposals\         for Tim/Claude review (create on first use)
AUDIT        docs\AUDIT-2026-07.md            the July audit — §13.4 lists what is still open
```

Run numbers come from the log: read the last `Run <n>` line in `research\loop\log.md`; this
run is `n+1`. (`research\loop\state.json` and `ledger.json` belong to a retired loop — leave
them alone.)

---

## 1 · EVERY RUN — pick by the rotation

With `n` = this run's number, first match wins:

| condition | class |
|---|---|
| build / check-links / audit-invariants red at the start of a turn | **FIX** — if your previous edit caused it, revert that one file; otherwise write `research\loop\proposals\ALERT-<date>.md` with the exact error and stop the turn cleanly |
| `n % 25 == 0` and proposals awaiting review < 6 | **BRIEF** (§5) |
| `n % 10 == 0` and proposals awaiting review < 6 | **REGULATED** (§4) |
| `n % 4 == 0` | **VERIFY** (§3) |
| otherwise | **MECHANIC** (§2) |

A condition that fails falls through. MECHANIC is the floor; if its queue is ever empty, do a
VERIFY run instead — between the 122-task queue, 35 businesses on a re-check cycle and 52
country regimes, the loop cannot run dry.

If you discover something urgent and evidenced — an emergency vet closed, a rabies or import
rule changed — spend the run on an ALERT proposal instead, same file shape as §4's output.

---

## 2 · MECHANIC — the backbone (this is LOOP.md, unchanged)

```
node C:\Projects\pattayapets\tools\loop-queue.js
```

Do the **first task it prints**. Just that one. Each task names the page, the source file that
defines it (`defined in:`), the problem, and the fix. Edit that source file. If a task is
awkward or already fixed, skip it and take the next one — the queue has plenty.

Rewording is fine; **new claims are not** — a MECHANIC run never adds a fact, a price, an
hour, a phone number or a date. That is what VERIFY runs are for.

---

## 3 · VERIFY — one business, re-proven

Pick one listing from `src\data\businesses.js`: first a business with **no dossier** in
`research\businesses\`, then the dossier with the **oldest `accessed` dates**. One business
per run.

1. Reopen its real surfaces: official website, Facebook/Instagram, LINE OA, Google Maps
   listing, Wongnai. **Run a Thai-language pass** — hours, closures and phone changes are
   published on Thai Facebook first. Buddhist Era years: subtract 543.
2. Write or update `research\businesses\<slug>.json` — match the existing dossier shape:
   every field either sourced (`sources[]` with `label`, `url`, `accessed`) or listed under
   `unverified`. Empty string / `false` / `null` means *not verified*, never a guess.
3. Apply what the sources prove to `src\data\businesses.js`, under its header rules:
   prefer `website`, `email`, `whatsapp` (digits only), `line` (ID without @). **Do not
   publish landline phones except verified numbers on 24-hour emergency vet listings.**
   Leave `null` what you could not verify. Respect every `HUMAN QUEUE` comment — Mor Ja's
   circulating number stays unpublished until a human confirms it by calling.
4. **Never write `verdict`, `reviewed` or `review`.** Verdicts exist only after a real
   anonymous visit with the bill paid in full — a human act, never yours. Facts only.
5. A business that checks out unchanged is a successful run — note "confirmed current" and
   bump the dossier's `accessed` dates.

---

## 4 · REGULATED — research only, never an edit

The import/export pages (`/bring-pet-to-thailand/`, `/take-pet-out-of-thailand/`) are the
site's brand and its biggest risk. They are excluded from the mechanic queue on purpose, and
**you never edit them either.** A REGULATED run re-proves one country regime and hands the
findings to a human.

1. Pick the country page least recently covered by a `REGULATED` line in the log; before any
   rotation, the two standing targets from the audit come first: the unpublished South Korea
   "10 or more animals" threshold, and the U-Tapao import page's station-count claim vs the
   current DLD list.
2. Reopen **primary sources only**: DLD / Thai government (`*.go.th`), the destination
   country's own competent authority (e.g. `qia.go.kr`, DVS Malaysia), embassy notices, IATA,
   the airline's own published pet policy. Every source gets its URL and today's reopen date.
   No blogs, no forums, no relocation-agent marketing as authority.
3. Compare against the live page and `research\findings\destination-regimes.json` /
   `airline-pet-policies.json`.
4. Write `research\loop\proposals\REGULATED-<country>-<YYYY-MM-DD>.md` with
   `status: awaiting-review`: what the page says, what the source says (verbatim quote + URL
   + reopen date), and the exact proposed wording. If nothing changed, say so — a confirmed
   regime with fresh reopen dates is a valuable result.

Never state a figure the source does not show. "Could not verify" is a legitimate finding.

---

## 5 · BRIEF — a short strategy pass

Rotate: with `b` = how many BRIEF lines the log already holds, take `b mod 4`:

0. **Freshness stamps** — the audit found 40 of 41 `updated` declarations older than their
   module's last real change. List the worst 10 with evidence. Do not mass-stamp anything.
1. **Audit follow-through** — re-read `docs\AUDIT-2026-07.md` §13.4 and the open S2/S3 items:
   which are now stale, which still stand, the three highest-value ones awaiting a decision.
   §8's index/canonical/robots items are Tim's alone — report, never touch.
2. **Coverage candidates** — up to 5 new guide ideas, each anchored to a genuine specific
   question with the 2+ primary sources that would carry it. Thin or duplicate pages hurt —
   when in doubt, propose nothing.
3. **Link & directory health** — inbound-link deserts the queue misses, category/area pages
   that promise more than the data holds, dossier facts that never reached `businesses.js`.

Output: `research\loop\proposals\<YYYY-MM-DD>-<topic>.md`, `status: awaiting-review`, at most
10 findings, each with WHAT / EVIDENCE (exact paths, quotes, URLs) / PROPOSE (the exact
change). The only status you ever write is `awaiting-review`.

---

## 6 · VERIFY, LOG, NEXT — every run, whatever the class

```
node C:\Projects\pattayapets\build.js
node C:\Projects\pattayapets\tools\check-links.js
node C:\Projects\pattayapets\tools\audit-invariants.js
```

Green → append one line to `research\loop\log.md`:

```
Run <n> | <CLASS or TYPE> | <url or slug> | done — <what changed, a few words>
```

Red → undo that one edit, log `Run <n> | REVERTED | <what broke>`, and take the next run.

Then go back to §1 and start the next run. Your reply is these log lines with one sentence of
context each — nothing else. No preamble, no plans, no selection sentences. If the turn is
about to die mid-task, finish or revert the file you are in, write the log line, and let it
end; the next firing reads the log and continues at `n+1`.

---

## 7 · NEVER

- Invent facts, prices, hours, phone numbers, reviews, ratings, verdicts or dates.
- Give veterinary advice.
- Deploy, push, commit, or ping IndexNow. Tim ships.
- Edit `tools\audit-invariants.js` or `tools\loop-queue.js` to make something pass.
- Edit `dist\`, or any regulated import/export page (§4 is research-only).
- Touch anything in the audit's §8 list: canonicals, noindex, robots, sitemap policy.
- Add `Review` or `AggregateRating` anywhere; both are at 0 by design.
- Add affiliate links, sponsored tags or paid placements. Ever.
- Write an editor status (`approved` / `rejected`) on a proposal, or delete one.
- Ask permission, wait for Tim, or end a turn with a question.

---

## 8 · THE PASTE

```
START A NEW RUN NOW. EXECUTE - DO NOT ANNOUNCE.

First action, before writing a single word of reply:
Read C:\Projects\pattayapets\AUTOPILOT.md and C:\Projects\pattayapets\research\loop\log.md
(the last "Run <n>" line numbers this run as n+1).

Then do runs as that file describes, back to back: pick ONE class by the rotation in section
1, execute it completely - files changed, the three checks run, the log line appended - then
pick again and do the next run. Keep going until this turn is cut off. Never estimate whether
you have time for more; decide one run at a time.

Your reply may contain ONLY completed run log lines with one sentence of context each. Never
write what you selected or plan to do - a selection with no log line behind it is a failed
run. Never reply "no action is needed" or "nothing to do".

Hard limits: work only inside C:\Projects\pattayapets; never edit dist\, any
/bring-pet-to-thailand/ or /take-pet-out-of-thailand/ page, tools\loop-queue.js or
tools\audit-invariants.js; never invent a fact, price, hour, phone number, review or verdict;
never deploy, push, commit or ping IndexNow; never touch canonicals, noindex or robots. If
something breaks, revert your one edit, log it, and take the next run.
```

---

## 9 · KNOBS

VERIFY every 4th run · REGULATED every 10th · BRIEF every 25th · proposals cap 6 — change the
numbers in §1 and the loop picks them up next turn. The Never list is not a knob.
