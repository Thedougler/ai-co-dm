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

### 2026-09-09 — Do Not sections in production notes

**Error:** production vault files contain Do Not advice or Do Not sections.

**Correction:** that guidance is for the agent creating the content. Human-facing notes carry what to run, say, or know. Agent-facing Do Not stays in skills, AGENTS, and templates-for-agents — not in the compiled campaign pages.

**Read:** `AGENTS.md` (user-correction line); `user-corrections.md` (append recipe)

**count:** 1

**status:** closed

**Fix:** `.agents/skills/obsidian-markdown/SKILL.md` — production notes state what to run, say, or know; `## Do not` / author-process bans stay in skills, AGENTS, and templates-for-agents. Stripped compiled Do Not sections on Taking on Aruhe, The Unnamed Companion, Master Kyzil, Grung clans, Cosimo Verantio. Measure: production Do Not headings/`**Do not:**` files in `campaigns/` 5 → 0. Cheap check: `rg -l --glob '*.md' -e '^#{1,6}[[:space:]]+.*[Dd]o [Nn]ot' -e '^\s*[-*][[:space:]]+\*\*Do [Nn]ot' campaigns`. SHA `9baa4bb`.

### 2026-09-09 — Session beat number reused on a different card

**Error:** Session 11 plan beat 6 ran `[[Session-11-08-Farthest-Camp]]` and beat 8 ran `[[Session-11-06-Night-Watch]]`. Numbered filenames were reused for different beats instead of being renamed so the beat number is the file name. That swap was left in the live plan. This agent then started rewriting beat-card bodies while those beats were already being rewritten.

**Correction:** Agents cannot be confusing. Things must be clearly named and labelled. If a numbered card is used for a different beat, rename the file immediately. Re-use like this is a critical failing and must be noted immediately. Do not rewrite beat content in that pass. Fix the session plan so beat N is `Session-11-0N-…`.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Night-Watch.md` (now `Session-11-08-Night-Watch.md`); `campaigns/shattered-sea/sessions/11/Session-11-08-Farthest-Camp.md` (now `Session-11-06-Farthest-Camp.md`); `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `.agents/skills/run-guide/SKILL.md`; `.agents/skills/session-beats/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/qmd-retrieval/SKILL.md`

**count:** 1

**status:** open



### 2026-09-09 — Beat 6 written as watch furniture

**Error:** Beat 6 was treated as a night-watch card. The spoken scene spent attention on bedrolls and camp furniture instead of the rescued survivor and the other wreck people. Split-lip from [[Session-11-05-Otter-Hole]] was omitted. The card still handed to beat 9.

**Correction:** Beat 6 is [[Session-11-06-Farthest-Camp]], not Night Watch. It follows the otter-hole rescue. The live work is talking to Split-lip and the other survivors about the woman and the garden split. Hand to [[Session-11-07-False-Help]].

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-08-Night-Watch.md`; `skill://run-guide`; `skill://theatre-of-the-mind`; `skill://npc-design`; `skill://dnd5e-mechanics`; `skill://obsidian-markdown`

**count:** 1

**status:** open

### 2026-09-09 — Beat 6 missing required owners

**Error:** [[Session-11-06-Farthest-Camp]] danced around the most important thing in the scene, the thing the players will ask the DM to describe. Required narrative content was missing entirely, not NPCs only. This is not a literal inventory of every entity.

**Correction:** Stop and examine every required element of the task. Write the thing the table will ask about. Create missing owners when that thing needs one. Distinct texture and flavour. Do not stall on unnamed handles.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `.agents/skills/npc-design/SKILL.md`; `.agents/skills/npc-design/references/npc-templates.md`; `templates/NPC.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/wiki-ingest/SKILL.md`; `.agents/skills/decomposing-campaign-content/SKILL.md`

**count:** 1

**status:** open

### 2026-09-09 — Landing used as a full path tree

**Error:** Agents treat `## Landing` as a complete tree of every path the party might take, plus a titled narration stub per path.

**Correction:** Remove `## Landing`. Use `## How the Scene Resolves`. Write only the most likely options. Not every potential path.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `.agents/skills/run-guide/SKILL.md`; `templates/Encounter.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`; `.agents/skills/copy-writer/SKILL.md`

**count:** 1

**status:** open

### 2026-09-09 — Conditional narration shown sequentially

**Error:** Conditional narration was written as sequential `[!narration]` blocks. Tables that held conditional narration lacked `==_text_==` highlighting. Present on all session 11 beats where `## Landing` was misused, and on tables with unhighlighted conditional narration.

**Correction:** Unconditional narration stays in `[!narration]` blocks. Conditional narration goes in a table, highlighted with `==_text_==`. Use that table in addition to the unconditional blocks. Do not stack variant callouts in sequence.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `.agents/skills/run-guide/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`

**count:** 1

**status:** open

