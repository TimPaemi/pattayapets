# PATTAYAPETS LOOP

## Do this

```
node C:\Projects\pattayapets\tools\loop-queue.js
```

Do the **first task it prints**. Just that one.

Each task names the page, the source file that defines it, the problem, and the fix. Edit the
source file named in `defined in:`, relative to `C:\Projects\pattayapets\`. `dist/` is
generated — never edit it.

Then:

```
node C:\Projects\pattayapets\build.js
node C:\Projects\pattayapets\tools\check-links.js
node C:\Projects\pattayapets\tools\audit-invariants.js
```

These resolve their own project root, so they work from any working directory.

Green → append one line to `C:\Projects\pattayapets\research\loop\log.md`:

```
Run <n> | <TYPE> | <url> | done
```

Red → undo that one edit, log `Run <n> | REVERTED | <what broke>`.

**Now do another task, or stop. Both are correct.**

---

## The only rule that matters

**Never estimate whether you have time for more work.** Do not plan ahead, do not count, do not
check how much session is left. Do one task. Log it. Then decide again, fresh.

One task done and logged is a complete, successful run. There is no minimum, no batch, no
target, and no quota. Stopping after one task is a success. Stopping after twenty is a success.

If a task is awkward or already fixed, skip it and take the next one. The queue has plenty.

---

## Never

- Invent facts, prices, hours, phone numbers, reviews, ratings, verdicts or dates. Rewording is
  fine; new claims are not.
- Give veterinary advice.
- Deploy, push, commit, or ping IndexNow. Tim ships.
- Edit `tools/audit-invariants.js` or `tools/loop-queue.js` to make something pass.

The project is **always** `C:\Projects\pattayapets`. If a file seems missing, you are in the
wrong directory — use the absolute path, do not conclude the project is empty.

Regulated import/export pages are already excluded from the queue. You will not be offered one.
