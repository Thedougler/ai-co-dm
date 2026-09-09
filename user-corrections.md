# User corrections

Living log of mistakes Nick corrected. **Not boot material.** Writers append. **Agentic-System-Designer** reads open entries and ships a durable fix. Other agents do not study this file to “learn from mistakes.”

## Append (writers — all agents)

Write here **only** when Nick corrects the current agent, or when his message contains `#ERROR` plus a description.

`#ERROR` is immediate: append the entry **before** any other work in that turn.

Look in `## Log` only to match this error. Do not read other entries as instruction.

1. Apply the correction to the live work when there is work to fix.
2. Same error already in the Log (same **Error:** gist or same heading label) → increment that entry’s **count:** by 1. If it was `closed`, set **status:** `open` again. Do not add a second copy.
3. No match → append at the bottom of `## Log` with **count:** `1`:

```markdown
### YYYY-MM-DD — short label

**Error:** what the agent did, wrote, or assumed that was wrong.

**Correction:** what is true, or what to do instead. If Nick only sent `#ERROR` and a description, the description is the Error; write **Correction:** _not stated_ rather than inventing one.

**Read:** skills, `SKILL.md` paths, AGENTS/GROK-BOTS sections, notes, images, packets, and other files actually loaded that led to the mistake. Paths. Skip anything not opened.

**count:** 1

**status:** open
```

4. `./scripts/after-write "log user correction" -- user-corrections.md` (plus any live paths you actually fixed).

Do not edit skills, AGENTS, or other process files in the same turn “so it never happens again.” That is the reader’s job.

## Drain (Agentic-System-Designer)

Load this file when the wake is `agentic-system-designer`, Nick asks to drain corrections, the weekday `daily-agentic-optimization` pass (Grok Bot), or an open entry exists and ASD is already awake. Any host: Grok Bot, Grok Build, Codex, omp.

For each **status:** `open` entry:

1. Find the owner of the error (skill, AGENTS line, template, roster, hook).
2. Ship the **simplest durable fix at the lowest token cost** — usually one edit to the skill or instruction that produced the error. Encode the **positive** target behaviour. Advanced techniques (new skill, agent, hook, workflow) only when a one-place instruction edit cannot hold.
3. Packet **Ops** / **Skill-Creator** / **Team-Leader** / **dr eggbot** when they own the write.
4. Set **status:** `closed` and add **Fix:** path + one line what changed.

## Log
