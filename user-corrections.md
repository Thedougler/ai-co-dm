---
summary: Nick's correction log. Writers append on #ERROR; ASD drains. Four open: over-scoped `.agent` typo fix; session beat third/fourth copy passes; skimmed working files; preload writing skills.
---

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

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md`; `.agents/skills/copy-writer/SKILL.md` — Grounding now requires every working file to be read end-to-end before editing; summaries, snippets, truncated output, and range reads only target files. Measure: agent-facing files requiring end-to-end reads of working files 0 → 2. Cheap check: `rg -l --glob '*.md' 'working file.*end-to-end|working files.*end-to-end' .agents/skills AGENTS.md`. `after-write` SHA: `9e5aba6`.
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

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md` — Step 1 (Ground) verifies beat identity: card filename's number matches its skeleton position (`Session-<session>-<NN>-Label.md` = beat NN); mismatch → rename before writing. Table gate bullet enforces the same invariant. Measure: agent-facing files enforcing beat-filename = skeleton position in `.agents/skills` 0 → 1. Cheap check: `rg -l --glob '*.md' 'skeleton position' .agents/skills`. SHA `ab341e6`.

### 2026-09-09 — Beat 6 written as watch furniture

**Error:** Beat 6 was treated as a night-watch card. The spoken scene spent attention on bedrolls and camp furniture instead of the rescued survivor and the other wreck people. Split-lip from [[Session-11-05-Otter-Hole]] was omitted. The card still handed to beat 9.

**Correction:** Beat 6 is [[Session-11-06-Farthest-Camp]], not Night Watch. It follows the otter-hole rescue. The live work is talking to Split-lip and the other survivors about the woman and the garden split. Hand to [[Session-11-07-False-Help]].

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-08-Night-Watch.md`; `skill://run-guide`; `skill://theatre-of-the-mind`; `skill://npc-design`; `skill://dnd5e-mechanics`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md` — Step 1 (Ground) verifies beat identity: purpose, dramatis personae, and hand-off match the skeleton; card filename number = skeleton position. Table gate bullet enforces the check. Shared root cause with "Session beat number reused on a different card." Measure: agent-facing files with beat-identity verification step in `.agents/skills` 0 → 1. Cheap check: `rg -l --glob '*.md' 'beat identity' .agents/skills`. SHA `ab341e6`.

### 2026-09-09 — Beat 6 missing required owners

**Error:** [[Session-11-06-Farthest-Camp]] danced around the most important thing in the scene, the thing the players will ask the DM to describe. Required narrative content was missing entirely, not NPCs only. This is not a literal inventory of every entity.

**Correction:** Stop and examine every required element of the task. Write the thing the table will ask about. Create missing owners when that thing needs one. Distinct texture and flavour. Do not stall on unnamed handles.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `.agents/skills/npc-design/SKILL.md`; `.agents/skills/npc-design/references/npc-templates.md`; `templates/NPC.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/wiki-ingest/SKILL.md`; `.agents/skills/decomposing-campaign-content/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md` — Step 2 (Diagnose) identifies the central element the table will ask the DM to describe; that element and its dramatis personae must have owners before the card is written, created via the appropriate craft skill. Table gate bullet: central element may not be marked unknown. Measure: agent-facing files gating on central-element owner in `.agents/skills` 0 → 1. Cheap check: `rg -l --glob '*.md' 'central element' .agents/skills`. SHA `ab341e6`.

### 2026-09-09 — Landing used as a full path tree

**Error:** Agents treat `## Landing` as a complete tree of every path the party might take, plus a titled narration stub per path.

**Correction:** Remove `## Landing`. Use `## How the Scene Resolves`. Write only the most likely options. Not every potential path.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `.agents/skills/run-guide/SKILL.md`; `templates/Encounter.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`; `.agents/skills/copy-writer/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md` — heading is `## How the Scene Resolves`; write only the most likely options as one unconditional `[!narration]` plus an `If | Next | Narration` table. Pointers in TotM, copy-writer, encounter-prep, `templates/Encounter.md`, `templates/00 Templates.md`, `docs/obsidian-presentation.md`, AGENTS two-pass, and `.grok/agents/copy-writer.md` dropped `## Landing` / landing stubs. Measure: agent-facing files teaching landing as a beat stub/heading 5 → 0. Cheap check: `rg -l --glob '*.md' -e 'landing / variants' -e 'tick, landing' -e 'landing stubs' -e 'Landing payload' .agents/skills templates docs`. SHA `88ff1e9`.

### 2026-09-09 — Conditional narration shown sequentially

**Error:** Conditional narration was written as sequential `[!narration]` blocks. Tables that held conditional narration lacked `==_text_==` highlighting. Present on all session 11 beats where `## Landing` was misused, and on tables with unhighlighted conditional narration.

**Correction:** Unconditional narration stays in `[!narration]` blocks. Conditional narration goes in a table, highlighted with `==_text_==`. Use that table in addition to the unconditional blocks. Do not stack variant callouts in sequence.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `.agents/skills/run-guide/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/obsidian-markdown/SKILL.md` + `run-guide` TotM slots — unconditional spoken stays in `[!narration]`; conditional spoken (zone, tick, most-likely option) is `==_italic_==` in the table cell. Replaced “one titled stub per likely option.” Encounter template now has the options table. Measure: `==_` production-grammar files in `.agents/skills` + `templates` 0 → 8; stub-per-option files 1 → 0. Cheap check: `rg -l --glob '*.md' -e 'stub per likely option' -e 'one titled stub per likely' .agents/skills templates`; `rg -l --glob '*.md' '==_' .agents/skills templates`. SHA `88ff1e9`.

### 2026-09-09 — Frontmatter summary unused

**Error:** Agents read whole notes instead of using the Obsidian markdown frontmatter `summary` to see what a file is.

**Correction:** Use the frontmatter `summary` to understand a file without reading the whole file. Create it if missing. Update it whenever the note is updated. Keep it concise, focused, direct, specific, and useful, and mention anything different or unexpected.

**Read:** `.agents/skills/agentic-system-designer/SKILL.md`; `.grok/agents/agentic-system-designer.md`; `user-corrections.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `.agents/skills/agentic-system-designer/references/measures.md`; `.agents/skills/writing-for-agents/SKILL.md`; `.agents/skills/llm-wiki/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/obsidian-markdown/SKILL.md` — `summary` frontmatter hard rule: one sentence, what the note is plus anything non-obvious; use to assess without full read; create on new notes, update on changes. Added to write workflow step 2, Properties example, `references/PROPERTIES.md` table, and `AGENTS.md` frontmatter field list. Measure: agent-facing files instructing on `summary` frontmatter in `.agents/skills` 0 → 1. Cheap check: `rg -l --glob '*.md' 'summary..frontmatter' .agents/skills`.

### 2026-09-09 — Session beats ignore previous beat

**Error:** Agents wrote session beats without considering the previous beat, so the cards do not flow together for the DM.

**Correction:** Agents writing session beats must consider the previous beat so they flow together naturally for the DM.

**Read:** `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md` — Step 1 (Ground) reads the previous beat card and uses its How the Scene Resolves as this beat's entry state. Table gate bullet enforces continuity: no state reset, teleport, or unexplained jump between cards. Measure: agent-facing files gating pass 1 on previous beat 0 → 1. Cheap check: `rg -l --glob '*.md' "previous beat card" .agents/skills`.


### 2026-09-09 — Off-scene player options on the beat card

**Error:** The [[Session-11-02-Landing-Sign]] rebuild stocked player options that leave the live scene, including going back to the boat, the beach, and flying out.

**Correction:** Do not account for player options that do not lead to the scene. There is no point considering player options that do not involve the scene, like going back to the boat.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `skill://run-guide`; `skill://session-beats`; `skill://theatre-of-the-mind`; `skill://obsidian-markdown`; `skill://dnd5e-mechanics`

**count:** 1

**status:** closed

**Fix:** `run-guide/SKILL.md` How the Scene Resolves field and Table gate pass 1 bullet — each option hands off to a beat on the session skeleton, not off-scene. Same constraint added to `encounter-prep/SKILL.md` step 10 and `templates/Encounter.md`. Measure: agent-facing files constraining How the Scene Resolves options to skeleton hand-offs 0 → 3. Cheap check: `rg -l --glob '*.md' 'hands off to a beat on.*skeleton' .agents/skills templates`.


### 2026-09-09 — Fun is the session goal

**Error:** Kept DCs the same on [[Session-11-03-Wolfrabbits]] for consistency with beat 2, treating consistency as a constraint.

**Correction:** The primary goal of this repo is a D&D session that is fun for the players and easy for the DM to run. Nothing may come against that. Change anything if it makes it funner. Nothing is sacred. Fun is the goal. Agents need a skill about making games fun.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-03-Wolfrabbits.md`; `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `skill://run-guide`; `skill://dnd5e-mechanics`; `skill://dnd5e-mechanics/references/difficulty.md`; `skill://obsidian-markdown`; `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `AGENTS.md` prime directive (always-on, every agent), `run-guide/SKILL.md` table gate bullet, `dnd5e-mechanics/SKILL.md` step 6 sanity-check — fun overrides consistency, symmetry, and prior-beat precedent for DCs and design choices. Instruction rung; if count rises, escalate to a dedicated skill. Measure: agent-facing files stating fun as overriding goal 0 → 3. Cheap check: `rg -l --glob '*.md' 'serves.*fun' AGENTS.md .agents/skills`.

### 2026-09-09 — TotM repeats already-spoken prose

**Error:** Wrote theatre-of-the-mind blocks in a vacuum on [[Session-11-03-Wolfrabbits]]. Zone, tick, creature, and How the Scene Resolves prose restated Initial Narration, and Initial Narration restated beat 2's already-spoken grass, river, berries, and smoke, without a scene change.

**Correction:** TotM blocks must consider what has already been said to the player. Do not needlessly repeat unless the scene has changed.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-03-Wolfrabbits.md`; `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `skill://theatre-of-the-mind`; `skill://theatre-of-the-mind/references/voice.md`; `skill://run-guide`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/theatre-of-the-mind/SKILL.md` — Already-spoken gate in Before drafting step 3: read previous beat's spoken prose and this beat's Initial Narration before drafting any stub; do not restate facts already spoken unless scene physically changed. Within-beat reinforcement: smaller blocks show only what is new, changed, or newly actionable. Measure: agent-facing files with already-spoken prose gate 0 → 1. Cheap check: `rg -l --glob '*.md' 'Already-spoken gate' .agents/skills`.

### 2026-09-09 — over-scoped `.agent` typo fix

**Error:** Treated a one-file `.agent/skills/` typo in AGENTS.md as a skill-tree unification: compared `.claude/skills` vs `.agents/skills`, planned directory symlinks, lint skip rewrites, GROK-BOTS/README/inbox edits.

**Correction:** Update AGENTS.md only. The two-roots line is a typo (`.agent/` → `.agents/`). One root is already `.agents/skills/`.

**Read:** `AGENTS.md` Skills (progressive); `GROK-BOTS.md` roster; `README.md` layout; `scripts/lint-obsidian-markdown`; `.claude/skills` vs `.agents/skills` listings.

**count:** 1

**status:** open

### 2026-09-09 — session beat third/fourth copy passes

**Error:** Session files are created in two passes (mechanical cockpit, then TotM fill). Missing a third pass where copy-writer edits session beat copy for DM usability, readability, and usefulness, then a fourth pass for theatre-of-the-mind copy.

**Correction:** After session files are created, copy-writer performs a DM usability, readability, and usefulness pass and edit of the session beat copy. Afterwards a fourth pass is performed for theatre-of-the-mind copy.

**Read:** `AGENTS.md` Write (session/run beats two passes); `user-corrections.md` append recipe.

**count:** 1

**status:** closed

**Fix:** `AGENTS.md`; `.agents/skills/run-guide/SKILL.md`; `.agents/skills/copy-writer/SKILL.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`; `.agents/skills/session-beats/SKILL.md` — session beat workflow now names four passes: mechanical cockpit, DM-facing copy edit, TotM spoken fill, and Reading-view ready check. Measure: agent-facing files stating session/run beat four-pass workflow 0 → 5. Cheap check: `rg -l --glob '*.md' '[Ff]our passes|pass 2.*DM-facing copy|[Pp]ass 3.*TotM|spoken fill is pass 3' AGENTS.md .agents/skills`. `after-write` SHA: `9e5aba6`.

### 2026-09-09 — Skimmed working files

**Error:** Skimmed the session plan, previous beat, owners, and the Otter Hole card. Relied on truncated Read output, range selectors, and structural summaries instead of reading the full files being edited.

**Correction:** Read full files you are working on. Do not skim them.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-04-What-They-Ate.md`; `campaigns/shattered-sea/sessions/11/Session-11-03-Wolfrabbits.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/locations/Aruhe - River Slack Basin.md`; `campaigns/shattered-sea/monsters/Aruhe - River Otter.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md`; `.agents/skills/copy-writer/SKILL.md` — Grounding now requires every working file to be read end-to-end before editing; summaries, snippets, truncated output, and range reads only target files. Measure: agent-facing files requiring end-to-end reads of working files 0 → 2. Cheap check: `rg -l --glob '*.md' 'working file.*end-to-end|working files.*end-to-end' .agents/skills AGENTS.md`. `after-write` SHA: `9e5aba6`.

### 2026-09-09 — Preload writing skills before their pass

**Error:** When writing a session, agents load multiple writing skills (different styles) before the pass that needs them. Reading those skills early contaminates prior passes and confuses the agent.

**Correction:** Agents should load skills as needed. Do not read a writing skill until the pass that requires it.

**Read:** `AGENTS.md` Skills (progressive) and Write (session/run beats two passes); `user-corrections.md` append recipe; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`; `.agents/skills/run-guide/SKILL.md`; `AGENTS.md` — pass wording now defers writing-skill loads to the pass that needs them: copy-writer for pass 2, theatre-of-the-mind only when pass 3 begins. Measure: agent-facing files with pass-scoped writing-skill loading 0 → 4. Cheap check: `rg -l --glob '*.md' 'Load `copy-writer` for pass 2|only when pass 3 begins|only when the pass crosses the player boundary|theatre-of-the-mind` fills every spoken stub last' AGENTS.md .agents/skills`. `after-write` SHA: `9e5aba6`.
