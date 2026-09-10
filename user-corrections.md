---
summary: Nick's correction log. Writers append on #ERROR; ASD drains. Open: over-scoped `.agent` typo.
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

**status:** closed

**Fix:** `AGENTS.md` — typo already fixed (`.agents/skills/` correct at line 56). Root cause shared with "Non-surgical image embed rewrite": scope creep. Durable fix in obsidian-markdown + copy-writer surgical-scope constraints. Measure: agent-facing files with surgical-scope edit constraint 0 → 2. Cheap check: `rg -l --glob '*.md' -e 'Surgical edits only' -e 'Surgical scope' .agents/skills AGENTS.md`.

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

### 2026-09-10 — Scenery shorthand

**Error:** Used scenery shorthand in [[Session-11-01-Angry-Birds]], including "grass cut," "river cut," and "make a track."

**Correction:** Use specific, pictureable scenery. Do not use vague scenery shorthand or empty verbs that force the DM to decode the place. Prefer visible nouns and actions such as footprints pressed into mud, grass beside the river, moving water, terrace steps, trees, and branches.

**Read:** `user-corrections.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/copy-writer/SKILL.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`

**count:** 3

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-10 — TotM is not poetry

**Error:** Wrote poetic, workshop TotM on [[Session-11-06-Farthest-Camp]], including "Last sun is gone from this leaf roof. The two stories are still in the mouths around the coals. From the north dark, the same garden words come back in a whisper."

**Correction:** Do not add a poetic edge. TotM is not poetry. Use ordinary kitchen-table words a listener can picture on one hearing. Do not use workshop metonymy or coined labels (mouths for people, stories in mouths, last sun, garden words, north dark, leaf roof).

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `skill://theatre-of-the-mind`; `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Wound used as a person-handle

**Error:** Session 11 cards referred to [[Matteo Scola]] as "Split-lip" the way a person would say "the man." A visible wound was treated as a normal referring term for a human.

**Correction:** Use ordinary human words for a person: the man, that person, he. After he introduces himself when the party rescues him, use his name. Do not use a wound, garment, or other feature as if it were a name.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `campaigns/shattered-sea/npcs/Matteo Scola.md`; `.agents/skills/copy-writer/SKILL.md`; `.agents/skills/theatre-of-the-mind/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `lexicon/House tone.md`; `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Useless non-info on the card

**Error:** Wrote this on a session card as if it were usable information: "**[[Aruhe - Hinewai]] is not standing at this fire.** The woman in their mouths is her. Her name, the graves, and how far the garden is stay unknown."

**Correction:** Do not write useless non-info. Do not tell the DM that someone is not present, that a name or distance stays unknown, or that "the woman in their mouths is her." If a line does not change a choice, ruling, risk, or words to speak, do not write it.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `campaigns/shattered-sea/sessions/11/Session-11-08-Night-Watch.md`; `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Off-stage NPC obsessed on the session card

**Error:** Session 11 kept naming and stocking [[Aruhe - Hinewai]] even though she never appears this session.

**Correction:** She does not show up this session. Mention her only if she does. She is a rumour about a woman in the woods. Do not obsess over people or things that do not show up in the session at all.

**Read:** `user-corrections.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Birds-of-a-Feather.md`; `campaigns/shattered-sea/sessions/11/Session-11-00-Random-Tables.md`; `campaigns/shattered-sea/sessions/11/Session-11-08-Night-Watch.md`; `campaigns/shattered-sea/sessions/11/Session-11-10-Aftermath.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Dedicated copy-writer skill

**Error:** There is no dedicated copy-writer skill saved in `.agents/skills/`.

**Correction:** Need a dedicated copy-writer skill saved in `.agents/skills/`.

**Read:** `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Uncommon scenery word

**Error:** Used an uncommon word such as "shingle" instead of an immediately picturable phrase such as "pebble beach."

**Correction:** Prefer ordinary, concrete words that a listener can picture on one hearing. Replace uncommon or technical scenery terms with a visible description, such as "pebble beach."

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Clunky, hard-to-picture prose

**Error:** Wrote clunky language and sentence structure that was hard to picture and did not paint a vivid picture with words: "You see the charcoal hawk already falling out of the sun, four wings pinning into a narrow body, crimson feathers flashing on the black undersides. The ragged red crest streams." Additional examples: "Smaller charcoal hawks drop on that same line, crimson tips flashing."; "Straight down, gold-green grass stands higher than a person along a clear turquoise river, and you hear water pulling through those stems. You feel the buffet off the folding wings slap the last leaves flat, and warm sugar-sour air comes up off the fruiting steps."; and "Over the last trees the adult hawk is a falling charcoal body, four wings pinned, crimson feathers flashing on the black undersides. The pale hook and boat-length talons open together toward the squid's violet bulk, and smaller charcoal hawks follow the same dive. Wind from that fall slaps the last leaves flat."
**Additional example:** "You see a crushed corridor of gold-green stems around you, and you feel mud sucking at a double line of footprints that still hold water."
**Additional example:** "You see pale rock under the current, and the flow folds the underwater grass against your calves."
**Additional example:** "You see three wolf-sized hunters already mid-leap down this flood-torn corridor at torso height, long ears laid back, hooked black claws open. Dark stripes run the tan-brown hides. A torn left ear, a white blaze down a muzzle, and a kinked tail mark the three as they come. Spit trails from wet muzzles."
**Additional example:** "You see three fruiting bushes standing in reach along this wet margin, tawny orange globes still heavy on the living wood. Whole fruit and split skins heap at the roots: tawny orange ten feet toward the water, pale green twenty feet south along this bank, and a darker heap twenty-five feet west toward the jungle wall. The dirt under what has already fallen is clean. Dark red mud packs only around the living roots, where snapped stems hang over fruit still on the branch."
**Additional example:** "You smell the split skins where they have gone sharp and sweet. You hear water pulling at the line, and you feel the wet sand sucking at the prints underfoot."
**Additional example:** "You leave the fruiting margin on the north prints, following the crushed corridor toward the smoke. Stems rasp at your legs,"
**Additional example:** "You see wet river stones ringing live coals in the middle of a round clearing. You feel heat off those stones, and you smell woodsmoke under the leaves. Four woven mats sit about ten feet out. Heavy pear-shaped fruit hangs from the mossy branches, grey-green plates chipped pale, and more of that fruit already sits by the coals."
**Additional example:** "West, you hear water through hanging roots. North, packed trails go darker between the big roots. A branch moves that way. The people who want the garden look into the trees and stop talking."
**Additional example:** "You hear a whisper from the packed trail twenty feet north of this fire: come admire her garden, this way, leave the living plants. The same words come again, stretched, from that darker wood. You see no matching feet on that dirt. Nothing shows with them."
**Additional example:** "Night has this fire."
**Additional example:** "ou see the same river-stone coals still burning on this packed dirt. Night has this fire. Smoke still pools into the leaf roof, and no stars show through those leaves. Heat comes off the stones. The people in this light keep the garden words going, worse now: admire her garden, this way, do not take the living plants. Some look north whenever a branch moves."

**Correction:** _Not stated._

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 15

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Conditional narration repeated

**Error:** Repeated conditional player-facing narration verbatim in the main narration blocks and in the conditional narration sections of the table, making the DM say the same language twice.

**Correction:** Do not repeat conditional narration. Specific conditional language belongs only in the conditional table. By definition, it must not also appear in Initial Narration or How the Scene Resolves narration. Treat these optional player-facing segments as having happened or as relied-on context when later narration runs.

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Awkward NPC dialogue narration

**Error:** Narrated dialogue between NPCs as an awful, indirect summary instead of giving the DM a usable way to speak it: "You hear three or four people arguing in low voices around a fire on packed dirt under the trees. One of them says a woman in the woods asked them to come admire her garden, this way, and not to take the living plants. Another says she is leading them into danger, and anyone who listens is mad."

**Correction:** _Not stated._

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Repeated “still” wording

**Error:** Used the word "still" twice in a short narration passage, a symptom of a deeper prose error: "> Matteo sits five feet from the fire, his lip still split and wet, one boot still missing. He stays close to whoever pulled him. He does not look at the trails going north."
**Additional example:** "Fallen stonepears still sit by the coals, grey-green plates chipped pale, and two spears still lie on the dirt south of the ring. Mats sit about ten feet out, some kicked crooked. You smell woodsmoke trapped under the leaves. You feel packed dirt hard underfoot."

**Correction:** Never use "still" in narration. Each sentence must add new descriptive information or be omitted.

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 3

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Unnecessary DM warning

**Error:** Gave the DM strange, over-explained information in a warning whose necessity and phrasing were unclear: "**Warning.** This fire is a talk-and-commit slice. There is no fight on this card. When the ship-versus-garden split is on the table and the party stays, plays along, waits, or breaks, the scene ends. If they stall, keep [[Matteo Scola]] and the two stories visible, then ask. Leave the argument unfinished on purpose."

**Correction:** _Not stated._

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Later encounter spoiled by narration

**Error:** Wrote prose that ruins the later encounter by narrating other people going toward it, even though the deer stalker attacks isolated targets:
> Some of the people at this fire look north. Heat still comes off the river-stone coals. Woodsmoke hangs under the leaves. Fallen stonepears sit by the coals, grey-green plates chipped pale, and two spears lie on the dirt south of the ring.
>
> South, gold-green grass still shows between the last trees. West, you hear water through hanging roots, cool and close. You smell wet leaf on the woodsmoke. You feel packed dirt hard underfoot.

**Correction:** Do not narrate other people going toward the deer stalker. It attacks isolated targets; preserve that later encounter setup.

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Telegraphing scene spoilers

**Error:** Used narration that telegraphs spoilers and takes control of player interaction: "You see Crissdalynn Khinriss and one other watcher at the fire's north edge. Her blue-black feathers catch coal-light. Geometric leather and a chart satchel sit close against half-folded wings."
**Additional example:** "You see Crissdalynn Khinriss still at the fire's north edge. The peregrine is gone from this mouth. Living pink-gold fruit still hangs over the west wall, ribbed and heavy, and fallen fruit still sits in the wet leaves. Heat still comes off the east coals. You smell woodsmoke. You hear drip off leaf, and west of the wall a thin river still talks through the roots."

**Correction:** Narration must not depend on the players. Describe the scene, then let the DM handle interaction when the players engage with it. End this narration by asking Cryssdalyn what she is doing right now and calling for a Perception check to notice Talon Skarn; put that specific conditional narration in the conditional section instead.

**Read:** `AGENTS.md`; `user-corrections.md`; `skill://agentic-system-designer`; `skill://obsidian-markdown`

**count:** 2

**status:** closed

**Fix:** `.agents/skills/copy-writer/SKILL.md`; `AGENTS.md` — three prose principles (Hear it, Earn it, Place it) added as always-on quality gate for all production wiki text; copy-writer elevated to always-on alongside obsidian-markdown; preserving bad copy declared critical failure. Measure: root prose principles in `.agents/skills/copy-writer` 0 → 3; always-on production-text skills in AGENTS.md 1 → 2. Cheap check: `rg -c 'Hear it\.|Earn it\.|Place it\.' .agents/skills/copy-writer/SKILL.md`. SHA `04de6f7`.

### 2026-09-09 — Unquoted colon in frontmatter summary

**Error:** Updated `summary` frontmatter to an unquoted YAML scalar containing `: `, breaking the note's frontmatter.

**Correction:** Quote frontmatter strings that contain a colon followed by a space, or rewrite them without that YAML-breaking sequence.

**Read:** `skill://obsidian-markdown`; `skill://qmd-retrieval`; `00 Home.md`; `campaigns/shattered-sea/hot.md`; `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `skill://theatre-of-the-mind`; `skill://theatre-of-the-mind/references/surfaces.md`; `skill://theatre-of-the-mind/references/voice.md`; `skill://theatre-of-the-mind/references/examples.md`; `skill://theatre-of-the-mind/references/boundary.md`; `skill://theatre-of-the-mind/references/vision.md`; `attachments/shattered-sea/items/aruhe-redheart-berry.jpg`; `attachments/shattered-sea/battlemaps/session-11-02-landing-sign-base.jpg`; `user-corrections.md`.

**count:** 1

**status:** closed

**Fix:** `.agents/skills/obsidian-markdown/SKILL.md` — `summary` frontmatter rule now says to quote values containing `: ` (colon-space). Measure: agent-facing files with YAML quoting guidance for frontmatter 0 → 1. Cheap check: `rg -l --glob '*.md' 'colon-space' .agents/skills`.

### 2026-09-09 — Non-surgical image embed rewrite

**Error:** Rewrote existing image embeds while doing a copy pass, which removed or broke the overview image in Obsidian.

**Correction:** Be surgical in all edits. Edit only what is in scope. Do not rewrite whole pages, embeds, frontmatter, paths, or unrelated structure unless that exact thing is broken and verified. When fixing image embeds, preserve the known file extension; these session images exist as `.jpg` files.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `user-corrections.md`; `attachments/shattered-sea/items/aruhe-redheart-berry.jpg`; `attachments/shattered-sea/battlemaps/session-11-02-landing-sign-base.jpg`.

**count:** 4

**status:** closed

**Fix:** `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/copy-writer/SKILL.md` — surgical-scope edit constraint: edit only in-scope elements for the current pass; preserve existing image embeds, wikilink paths, frontmatter fields, and file extensions unless that exact element is broken and verified. Measure: agent-facing files with surgical-scope edit constraint 0 → 2. Cheap check: `rg -l --glob '*.md' -e 'Surgical edits only' -e 'Surgical scope' .agents/skills`.
### 2026-09-09 — Exhaustive `Be ready for` tables

**Error:** Agents are using the `Be ready for` section as an exhaustive list of everything players could possibly do. Session 11 beat 06, `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`, demonstrates the problem: redundant, boring, and non-informational rows reduce signal-to-noise and make the card harder for the DM to scan.

**Correction:** `Be ready for` is a selective ruling table, not a catalog of every possible player action. Include only likely, relevant, interesting intents that change a ruling, risk, route, clock, resource, NPC response, or information, and keep rows non-redundant. Do not enumerate ordinary or boring actions. Unforeseen approaches should be ruled from the procedure, scene stock, zones, and NPC wants.

**Read:** `AGENTS.md`; `user-corrections.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `skill://run-guide`; `skill://obsidian-markdown`; `skill://copy-writer`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/run-guide/SKILL.md`; `.agents/skills/encounter-prep/SKILL.md` — Be ready for field, section, and table gate now say "selective ruling table"; include only intents that change a ruling, risk, route, clock, resource, NPC response, or information; omit ordinary, boring, or redundant actions. Measure: agent-facing files with selective Be ready for constraint 0 → 2. Cheap check: `rg -l --glob '*.md' -e 'selective ruling table' -e 'Omit ordinary' .agents/skills`.

### 2026-09-10 — Bear-Elk missed peer layout details

**Error:** Updated Bear-Elk to the multi-column identity/statblock layout but missed the Deerstalker page's bullet formatting for Behavior and Tactics and its multi-column layout for additional art.

**Correction:** When matching the Deerstalker monster layout, use bullet paragraphs for every Behavior and Tactics field and put additional art under `## Art` in the same multi-column wrapper.

**Read:** `campaigns/shattered-sea/monsters/Aruhe - Bear-Elk.md`; `campaigns/shattered-sea/monsters/Aruhe - Deerstalker.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/homebrew-monsters-5e/SKILL.md`; `.agents/skills/writing-for-agents/SKILL.md`; `user-corrections.md`.

**count:** 1

**status:** closed

**Fix:** `campaigns/shattered-sea/monsters/Aruhe - Bear-Elk.md` — converted Behavior and Tactics fields to bullets and grouped the three additional art embeds under `## Art` with columns. Measure: Bear-Elk peer-layout details missing 2 → 0.

### 2026-09-10 — Crown Squid columns removed

**Error:** Removed the Crown Squid's existing multi-column identity/statblock layout while simplifying its mechanics.

**Correction:** Preserve the existing columns when revising the Crown Squid statblock.

**Read:** `AGENTS.md`; `campaigns/shattered-sea/monsters/Aruhe - Crown Squid.md`; `campaigns/shattered-sea/monsters/Aruhe - Bloodhawk.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/homebrew-monsters-5e/SKILL.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `templates/Monster.md`; `user-corrections.md`.

**count:** 1

**status:** closed

**Fix:** `campaigns/shattered-sea/monsters/Aruhe - Crown Squid.md` — restore the two-column identity/statblock presentation while retaining the CR 11 simplification.

### 2026-09-10 — Deerstalker combat statblock kept the approach fiction

**Error:** Put the Deer-Stalker's sick-deer disguise and borrowed voice in the committed combat statblock, even though that statblock is for the point when it has stopped hiding and is fully attacking.

**Correction:** Keep approach and lure fiction in encounter prose. The committed combat statblock should express the fight through isolation damage, the long-reach grab and drag, and the retreat reaction when the group closes.

**Read:** `AGENTS.md`; `campaigns/shattered-sea/monsters/Aruhe - Deerstalker.md`; `campaigns/shattered-sea/sessions/11/Session-11-07-False-Help.md`; `.agents/skills/homebrew-monsters-5e/SKILL.md`; `.agents/skills/dnd5e-mechanics/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `user-corrections.md`

**count:** 1

**status:** closed
