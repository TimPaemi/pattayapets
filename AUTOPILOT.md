# PATTAYAPETS AUTOPILOT v2

_Rewritten 30 July 2026 to end the infinite-loop failures. Supersedes `LOOP.md` and v1._

You improve pattayapets.com one small, verified task at a time.

**A turn is bounded. A run is bounded. A target is bounded.** Nothing here can spin.

The project is **always** `C:\Projects\pattayapets`. If a file seems missing, you are in the
wrong directory — use absolute paths, do not conclude the project is empty. `dist\` is
generated — never edit it.

---

## 0 · WHY v2 EXISTS — the four loops that killed v1

1. **"Keep going until the turn is cut off" → endless turn.** Now: **a turn is at most 3
   runs, then you STOP.** The schedule fires again; `research\loop\log.md` carries the run
   number forward. Stopping on budget is a *successful* turn.
2. **Unbounded gate fixing.** Now: **2 fix attempts max.** Still red → revert your one edit,
   log `REVERTED`, end the turn.
3. **Unbounded research.** Now: **max 8 sources per business or country.** If the evidence is
   not there after 8, it is not there — record what you found, name the gap, move on.
4. **No "done" state for a target.** Now: **nothing is redone inside a turn.** A run that
   ends with "confirmed current, nothing changed" is a complete, successful run.

**Execute — do not announce.** Never write what you plan to do. A run exists only when files
changed on disk, the three checks ran, and the log line is written. Your reply is the run log
lines plus the §7 turn summary — nothing else.

---

## 1 · WHERE YOU ARE

```
QUEUE        node C:\Projects\pattayapets\tools\loop-queue.js       prints the top tasks
VERIFY       node C:\Projects\pattayapets\build.js
             node C:\Projects\pattayapets\tools\check-links.js
             node C:\Projects\pattayapets\tools\audit-invariants.js
LOG          C:\Projects\pattayapets\research\loop\log.md           one line per run
DIRECTORY    src\data\businesses.js          35 listings — the header comment is law
DOSSIERS     research\businesses\<slug>.json  business research (one per slug)
FINDINGS     research\findings\*.json         dated import/export research data
PROPOSALS    research\loop\proposals\         for Tim/Claude review
AUDIT        docs\AUDIT-2026-07.md            §13.4 lists what is still open
```

Run numbers come from the log: read the last `Run <n>` line; this turn's first run is `n+1`.
(`research\loop\state.json` and `ledger.json` belong to a retired loop — leave them alone.)

---

## 2 · TURN START

Read the last `Run <n>` line in `research\loop\log.md`. Set `turnCount = 0` and `touched = []`.
Run the three checks once to learn the starting state:

```
node C:\Projects\pattayapets\build.js
node C:\Projects\pattayapets\tools\check-links.js
node C:\Projects\pattayapets\tools\audit-invariants.js
```

- Green → proceed to §3.
- Red → **one** repair attempt if a previous run's edit caused it (revert that file is a valid
  repair). Re-check. Still red → write `research\loop\proposals\ALERT-<date>.md` with the exact
  output, log `Run <n> | FIX | <what> | alert filed`, and **end the turn**. A broken gate is
  Tim's to rule on; editing on top of it makes things worse.

---

## 3 · THE RUN LOOP — at most 3 runs, then STOP

With `n` = this run's number, first match wins:

| condition | class |
|---|---|
| `n % 25 == 0` and proposals awaiting review < 6 | **BRIEF** (§6) |
| `n % 10 == 0` | **REGULATED** (§5) |
| `n % 4 == 0` | **VERIFY** (§4) |
| otherwise | **MECHANIC** (§4a) |

**STOP the turn — cleanly, with the §7 summary — when any of these is true:**

- `turnCount` has reached **3**
- the checks are still red after 2 fix attempts in one run
- **NOTHING IS DUE** — the mechanic queue is empty **and** no business is out of cooldown
  (§4b) **and** no regulated country is out of cooldown (§5). This is a normal, healthy
  outcome: print `TURN COMPLETE — nothing due` and stop. Work that is not due is not work.
- **BACKPRESSURE** — `research\loop\proposals\` holds **6 or more** files with
  `status: awaiting-review`. Tim has not caught up; producing more is waste. Print
  `TURN COMPLETE — review backlog (n proposals)` and stop. This check runs **before every
  run**, not just at turn start.
- you are running low on context

**Never exceed 3 runs. Never redo a completed run. Never re-work a target in `touched`.**

If you find something urgent and evidenced — an emergency vet closed, a rabies or import rule
changed — spend that run on an ALERT proposal instead (§5's file shape, `urgent: true`).

---

## 4 · THE CLASSES

### 4a · MECHANIC — the backbone

```
node C:\Projects\pattayapets\tools\loop-queue.js
```

Do the **first task it prints**. Just that one. Each task names the page, the source file that
defines it (`defined in:`), the problem and the fix. Edit that source file. If a task is
awkward or already fixed, skip it and take the next one — the queue has plenty.

Rewording is fine; **new claims are not** — a MECHANIC run never adds a fact, price, hour,
phone number or date. That is what VERIFY runs are for.

### 4b · VERIFY — one business, re-proven, 8 sources max

**COOLDOWN — 14 DAYS. This is the rule that stops the merry-go-round.** A business whose
dossier carries an `accessed` date within the last **14 days** is **not eligible**, full stop.
Re-opening a shop's throttled Facebook page four days after the last check produces nothing
and burns the budget — runs 1100–1146 did exactly that.

Pick one **eligible** listing from `src\data\businesses.js`: first a business with **no
dossier** in `research\businesses\`, then the eligible dossier with the **oldest `accessed`
dates**. One per run. **If no business is eligible, VERIFY is not available** — fall to
MECHANIC, and if the queue is also empty, end the turn per §3 (`nothing due`).

1. Reopen its real surfaces — official website, Facebook/Instagram, LINE OA, Google Maps,
   Wongnai — including a **Thai-language pass** (hours, closures and phone changes appear on
   Thai Facebook first; Buddhist Era years: subtract 543). **Stop at 8 sources.**
2. Write or update `research\businesses\<slug>.json` in the existing shape: every field either
   sourced (`sources[]` with `label`, `url`, `accessed`) or listed under `unverified`. Empty
   string / `false` / `null` means *not verified*, never a guess.
3. Apply what the sources prove to `src\data\businesses.js` under its header rules: prefer
   `website`, `email`, `whatsapp` (digits only), `line` (ID without @). **Do not publish
   landline phones except verified numbers on 24-hour emergency vet listings.** Leave `null`
   what you could not verify. Respect every `HUMAN QUEUE` comment — Mor Ja's circulating
   number stays unpublished until a human confirms it by calling.
4. **Never write `verdict`, `reviewed` or `review`.** Verdicts exist only after a real
   anonymous visit with the bill paid in full — a human act, never yours.
5. A business that checks out unchanged is a successful run: note "confirmed current" and bump
   the dossier's `accessed` dates.

---

## 5 · REGULATED — research only, never an edit, every 10th run

The import/export pages (`/bring-pet-to-thailand/`, `/take-pet-out-of-thailand/`) are the
site's brand and its biggest risk. They are excluded from the mechanic queue on purpose, and
**you never edit them either.** One country per run, handed to a human.

1. **A country with a `REGULATED-<country>-*.md` proposal already awaiting review is DONE for
   this loop — never re-research it.** The proposal is on Tim's desk; re-proving it weekly
   changes nothing and is exactly what filled `proposals\` with three copies each of South
   Korea and U-Tapao. Only after Tim clears a proposal does that country re-enter the
   rotation, and then only after a **30-day cooldown**.
2. Otherwise pick the country least recently covered by a `REGULATED` line in the log, subject
   to the same 30-day cooldown. **If every country is either pending review or in cooldown,
   REGULATED is not available** — fall to the next class, and if none is available, end the
   turn per §3.
3. Reopen **primary sources only** — DLD / Thai government (`*.go.th`), the destination
   country's own competent authority (`qia.go.kr`, DVS Malaysia and the like), embassy
   notices, IATA, the airline's own published pet policy. Every source gets its URL and
   today's reopen date. No blogs, no forums, no relocation-agent marketing as authority.
   **Stop at 8 sources.** A source that is unreachable is a finding, not a retry.
4. Compare against the live page and `research\findings\destination-regimes.json` /
   `airline-pet-policies.json`.
5. Write `research\loop\proposals\REGULATED-<country>-<YYYY-MM-DD>.md` with
   `status: awaiting-review`: what the page says, what the source says (verbatim quote + URL +
   reopen date), and the exact proposed wording. If nothing changed, say so — a confirmed
   regime with fresh reopen dates is a valuable result.

Never state a figure the source does not show. "Could not verify" is a legitimate finding.

---

## 6 · BRIEF — every 25th run

Rotate: with `b` = how many BRIEF lines the log already holds, take `b mod 4`:

0. **Freshness stamps** — the audit found 40 of 41 `updated` declarations older than their
   module's last real change. List the worst 10 with evidence. Do not mass-stamp anything.
1. **Audit follow-through** — `docs\AUDIT-2026-07.md` §13.4 and the open S2/S3 items: which
   are stale, which stand, the three highest-value ones awaiting a decision. §8's
   index/canonical/robots items are Tim's alone — report, never touch.
2. **Coverage candidates** — up to 5 new guide ideas, each anchored to a genuine specific
   question with the 2+ primary sources that would carry it. Thin or duplicate pages hurt —
   when in doubt, propose nothing.
3. **Link & directory health** — inbound-link deserts the queue misses, category/area pages
   that promise more than the data holds, dossier facts that never reached `businesses.js`.

Output `research\loop\proposals\<YYYY-MM-DD>-<topic>.md`, `status: awaiting-review`, at most
10 findings, each WHAT / EVIDENCE (exact paths, quotes, URLs) / PROPOSE (the exact change).
The only status you ever write is `awaiting-review`.

---

## 7 · VERIFY, LOG, NEXT — every run

```
node C:\Projects\pattayapets\build.js
node C:\Projects\pattayapets\tools\check-links.js
node C:\Projects\pattayapets\tools\audit-invariants.js
```

Green → append one line to `research\loop\log.md`:

```
Run <n> | <CLASS or TYPE> | <url or slug> | done — <what changed, a few words>
```

Red → **2 fix attempts max**, then undo that one edit and log
`Run <n> | REVERTED | <what broke>`, and **end the turn**. Never edit
`tools\audit-invariants.js` or `tools\loop-queue.js` to make something pass.

If the same finding has survived **3 consecutive** FIX runs across turns, stop trying: file an
ALERT proposal describing exactly what blocks and let the rotation resume. A gate the loop
cannot clear is a decision for Tim, not an infinite loop.

Then either start the next run or, if a §3 stop condition fired, print exactly this and stop:

```
TURN COMPLETE — <k> run(s), stopped because <the stop condition>
Runs:        <n-k+1>..<n>
Shipped:     <one line per run>
For Tim:     <proposals filed, alerts, decisions — or none>
Next turn:   starts at run <n+1>
```

Nothing after it. No questions, no plans. A turn that stops on budget is a success; a turn
that never stops is the bug this file exists to prevent.

---

## 8 · NEVER

- Invent facts, prices, hours, phone numbers, reviews, ratings, verdicts or dates.
- Give veterinary advice.
- Deploy, push, commit, or ping IndexNow. Tim ships.
- Edit `tools\audit-invariants.js` or `tools\loop-queue.js` to make something pass.
- Edit `dist\`, or any regulated import/export page (§5 is research-only).
- Touch anything in the audit's §8 list: canonicals, noindex, robots, sitemap policy.
- Add `Review` or `AggregateRating` anywhere; both are at 0 by design.
- Add affiliate links, sponsored tags or paid placements. Ever.
- Write an editor status (`approved` / `rejected`) on a proposal, or delete one.
- Redo a completed run · retry a target after its 8 sources · exceed 3 runs · ask permission ·
  end a turn without the §7 summary.

---

## 9 · WHEN SOMETHING FAILS

| what happened | what you do |
|---|---|
| checks red at turn start | 1 repair attempt → else ALERT proposal, end the turn |
| checks red after your edit | 2 fix attempts → else revert, log REVERTED, end the turn |
| 8 sources spent, business or country unresolved | record what you found, name the gap, move on |
| a source is down, paywalled or JS-only | that is a finding — write it, never guess, never retry |
| the same gate finding survives 3 FIX runs | ALERT proposal, stop trying, resume the rotation |
| the queue is empty | VERIFY instead; if no target either, end the turn |
| you think a previous run covered this | check the log and `touched`, skip it |
| low on context or time | finish the current edit, run the checks, log, print §7, stop |

---

## 10 · KNOBS

Turn budget 3 runs (§3) · **business cooldown 14 days (§4b)** · **regulated cooldown 30 days
and never while a proposal is pending (§5)** · **backpressure stop at 6 unreviewed proposals
(§3)** · VERIFY every 4th · REGULATED every 10th · BRIEF every 25th · 8 sources per target ·
2 gate-fix attempts (§7). Change a number
here and in its section. The §8 never-list is not a knob.
