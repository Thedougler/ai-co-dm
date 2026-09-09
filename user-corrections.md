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

Follow skill `agentic-system-designer` (Intake → Baseline → Fix → Prove → Record). Close an entry only after a before/after measure. Writers do not run this section.

## Log

### 2026-09-09 — L0 Glance heading

**Error:** L0/L1/L2 sections in vault documents (`## L0 · Glance` on [[Session-11-03-Wolfrabbits]]; copy-writer skill and spawn files treat L0/L1/L2 as production headings).

**Correction:** L0/L1/L2 are internal agent workflow steps. They must not reach production notes. Use ordinary headings (`## At a Glance`, template section names).

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-03-Wolfrabbits.md`; `skill://run-guide`; `.agents/skills/copy-writer/SKILL.md`; `.grok/agents/copy-writer.md`; `.omp/agents/copy-writer.md`

**count:** 2

**status:** closed

**Fix:** `templates/` (`## At a Glance`, `## At the table`, `## Bank` / session-log section names), `docs/obsidian-presentation.md`, `run-guide` Glance heading, `copy-writer` heading recipe, `vehicle-design` + item-note format. Measure: production `^## L0|^## L1|^## L2` files in `templates docs .agents/skills` 10 → 0. Cheap check: `rg -l '^## L0|^## L1|^## L2' templates docs .agents/skills --glob '*.md'`. SHA `83875ca`.

