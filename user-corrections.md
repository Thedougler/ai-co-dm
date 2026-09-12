---
summary: Nick's correction log. Writers append on #ERROR; ASD drains. Open: replaced-wrong Beat 1 image; token subject isolation; visual-references image-to-reference template; claimed works on unclaimed Aruhe; TotM hawk-stoop force; PC token framing; battlemap zoom too tight; battlemap no image-input refs.
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

### 2026-09-11 — Talon owner page carries the statblock

**Error:** Treated Talon Skarn's NPC identity page and monster combat page as two owners and began updating both.

**Correction:** Talon Skarn's NPC page is the single owner page; NPCs now carry their statblocks. Condense the duplicate monster page into the NPC owner, then remove the duplicate monster page.

**Read:** `AGENTS.md`; `.agents/skills/wiki-ingest/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `.agents/skills/qmd/SKILL.md`; `campaigns/shattered-sea/npcs/Talon Skarn.md`; `campaigns/shattered-sea/monsters/Talon Skarn.md`; `templates/Monster.md`; `campaigns/shattered-sea/npcs/Master Kyzil.md`; `campaigns/shattered-sea/monsters/Aruhe - Bloodhawk.md`; `/Users/nick/Downloads/ChatGPT Image Sep 11, 2026, 01_47_47 AM.png`; `/Users/nick/Downloads/grok_image_1789115953924.jpg`

**count:** 2

**status:** closed

**Fix:** Consolidate this ingest on `campaigns/shattered-sea/npcs/Talon Skarn.md`; remove the duplicate `campaigns/shattered-sea/monsters/Talon Skarn.md` after verifying its statblock is present on the NPC owner.

### 2026-09-10 — Professional-grade battlemap quality bar

**Error:** Generated Foundry battlemaps have been judged mainly on whether they depict the requested scene, without a professional battlemap quality bar for composition, tactical readability, depth, environmental storytelling, and finish.

**Correction:** The supplied reference sets the bar: a purpose-built, top-down, grid-readable map with a strong visual read across distinct tactical zones; irregular but intentional land and water shapes; multiple connected routes, crossings, chokepoints, and flanking lanes; large cover and line-of-sight blockers that remain legible at grid scale; open staging spaces; layered depth through canopy, banks, cliffs, structures, bridges, and shallow water; focal landmarks within an asymmetrical but balanced composition; coherent lighting, shadows, edge blending, texture scale, and color contrast; and environmental details that make the place feel inhabited without obscuring movement. The finished map should fill its canvas with no accidental seams, dead space, generic repetition, labels, tokens, UI, or other non-map clutter. Every major shape should read immediately as terrain, cover, route, elevation, or landmark. This entry records the quality bar only; no skill upgrade is being made in this turn.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/mjdWReS.jpeg`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md`; `references/design.md`; `references/judge.md`; `references/slots.md`; `references/prompt.md`; `references/modes.md` — v2.0 adds Design step with tactical brief (zone plan, route grammar, cover inventory, staging, material ladder, authored identity), three-scale judging (thumbnail, normal-zoom, grid-scale), flexible aspect ratio from tactical footprint, vehicle/deck-plan mode, multi-level mode. Quality bar: beautiful-but-generic fails; technically-clean-but-no-tactical-reads fails. Measure: agent-facing files with tactical-design step in `.agents/skills/foundry-battlemap` 0 → 1; judge check categories 5 → 7. Cheap check: `rg -l --glob '*.md' 'tactical brief' .agents/skills/foundry-battlemap`.

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

**count:** 5

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

### 2026-09-10 — Replaced wrong Session 11 Beat 1 image

**Error:** Replaced the Session 11 Beat 1 overview image when Nick meant the other one of the two images on the beat card.

**Correction:** Distinguish the overview illustration from the battlemap before replacing a Session 11 Beat 1 image. Restore the overview asset until the intended target is confirmed.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `.agents/skills/visual-aids/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `user-corrections.md`; `attachments/shattered-sea/sessions/session-11-01-angry-birds-overview.jpg`.

**count:** 3

**status:** open

### 2026-09-10 — Passed non-PC art into scene generation

**Error:** Passed monster and environment reference images into the image-generation call when Nick's standing preference is to pass through the PCs and describe everything else.

**Correction:** Always pass the PC reference images through. Describe monsters, locations, and other non-PC elements in the prompt instead of passing their art as image references.

**Read:** `/Users/nick/.codex/skills/.system/imagegen/SKILL.md`; `.agents/skills/visual-references/SKILL.md`; `.agents/skills/visual-references/references/hosts.md`; `.agents/skills/visual-references/references/prompt-inventory.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `.agents/skills/qmd/SKILL.md`; `campaigns/shattered-sea/pcs/Delmar-Fisk.md`; `campaigns/shattered-sea/pcs/Jean-Claude-Tabarnack.md`; `campaigns/shattered-sea/pcs/Perrin-Black-Jaw.md`; `campaigns/shattered-sea/pcs/Crissdalynn-Khinriss.md`; `campaigns/shattered-sea/monsters/Aruhe-Spiguar.md`; `campaigns/shattered-sea/monsters/Aruhe-Wolfrabbit.md`; `campaigns/shattered-sea/monsters/Aruhe-Terror-Bird.md`; `attachments/shattered-sea/creatures/spiguar-of-aruhe.jpg`; `attachments/shattered-sea/creatures/wolfrabbit-of-aruhe-v2.png`; `attachments/shattered-sea/creatures/terror-bird-of-aruhe-v4.png`

**count:** 1

**status:** closed

### 2026-09-10 — Compressed player-character references

**Error:** Considered consolidating image references to work around the image tool's input limit without preserving the rule that every player-character reference must remain a distinct input.

**Correction:** Never combine, collage, or compress player-character images. Pass each PC reference as its own separate image input; describe non-PC subjects in the prompt when the tool limit requires it.

**Read:** `/Users/nick/.codex/skills/.system/imagegen/SKILL.md`; `.agents/skills/visual-references/SKILL.md`; `.agents/skills/visual-references/references/hosts.md`; `.agents/skills/visual-references/references/prompt-inventory.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `.agents/skills/qmd/SKILL.md`; `campaigns/shattered-sea/pcs/Delmar-Fisk.md`; `campaigns/shattered-sea/pcs/Jean-Claude-Tabarnack.md`; `campaigns/shattered-sea/pcs/Perrin-Black-Jaw.md`; `campaigns/shattered-sea/pcs/Crissdalynn-Khinriss.md`

**count:** 1

**status:** closed

### 2026-09-10 — New battlemap reference became an old entry

**Error:** Treated a newly supplied battlemap reference as an earlier battlemap-quality reference and edited that existing correction entry instead of creating a new entry for the distinct image and request.

**Correction:** Each distinct reference image and distinct quality-bar request gets its own correction-log entry. Leave the earlier entry unchanged, and analyze `FWcxS5a.jpeg` as a fresh professional-battlemap benchmark.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/FWcxS5a.jpeg`; `/Users/nick/Downloads/UpKwx5O.jpeg`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 2

**status:** closed

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md` v2.0; `references/design.md`; `references/judge.md`; `references/modes.md`; `references/slots.md`; `references/prompt.md` — quality bars from FWcxS5a and UpKwx5O integrated into the v2.0 upgrade (shared root cause with all five battlemap quality-bar corrections). Measure: see FWcxS5a entry Fix.

### 2026-09-10 — Reusable circular token finalization

**Error:** Agents were left to improvise how to turn finished stand images into Foundry VTT token art, so circular transparent-background crops were not produced by a repeatable method.

**Correction:** Provide a simple, reusable, agent-shaped script that accepts a finalized stand image and performs the token operations: preserve the finished image as the source, crop it into the necessary circular transparent token, and make the output suitable for Foundry VTT. The `foundry-token` skill must teach the workflow as image generation and iteration first, script finalization second, with writing-for-agents constructions and explicit verification.

**Read:** `user-corrections.md`; `.agents/skills/foundry-token/SKILL.md`; `.agents/skills/writing-for-agents/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `/Users/nick/Downloads/SkeletonGuardMedium (17).webp`; `/Users/nick/Downloads/SpiderSwarm (6).webp`; `/Users/nick/Downloads/EagleJungle (1).webp`; `/Users/nick/Downloads/ZephyrHawk (1).webp`; `/Users/nick/Downloads/GiantEagleMountains (5).webp`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/foundry-token/SKILL.md` v3.0; `references/prompt.md`; `references/slots.md` — rewritten with `writing-for-agents` constructions: leading words (stand, crop-safe, thumbnail-readable) anchor every step and completion criterion; negation replaced with positive targets; duplication with `references/foundry.md` pruned; output contract inlined as shape only. `scripts/foundry-token` already existed. Measure: negation instances in foundry-token skill files 4 → 0; leading-word completion criteria 0 → 3. Cheap check: `rg -c 'crop-safe\|thumbnail-readable' .agents/skills/foundry-token/SKILL.md`; `rg -c 'Do not' .agents/skills/foundry-token/`.

### 2026-09-10 — FWcxS5a professional battlemap quality bar

**Error:** Foundry battlemap generation guidance does not yet capture the image-specific design qualities that make `/Users/nick/Downloads/FWcxS5a.jpeg` a professional, highly usable TTRPG battlemap rather than merely a polished overhead illustration.

**Correction:** Treat this image as a new, separate quality bar. Its strength comes from deliberate encounter composition and tactical communication:

- **Macro plan:** The unusually tall `2380x6720` canvas supports a long ceremonial hall with three immediately readable zones: a sparse approach lane, a central circular arena, and a raised sanctum/throne. A continuous red-carpet axis links the zones and gives the eye and the encounter a clear primary route.
- **Tactical grammar:** The map offers more than one way to move through the space: a strong toe-to-toe central lane, lateral edge lanes, side recesses, threshold crossings, and flanking opportunities around the central landmark. Stairs, risers, platforms, side structures, and large equestrian statuary communicate elevation, cover, blockers, and line-of-sight breaks through shape and shadow rather than labels.
- **Staging and negative space:** Landmark clusters and ornament are concentrated at the edges, thresholds, and focal arena, while broad clean floor remains available for tokens. The decoration creates decisions without sealing the play space or making every square visually noisy.
- **Authored identity:** Repeated architectural language, heraldic motifs, framed side panels, ceremonial carpet, statues, plant groupings, and a unique central medallion make the room feel built for a specific culture and function. Details are coherent and placed with intent; they do not read as generic repeated clutter or a tile collage.
- **Visual hierarchy:** Neutral cream stone keeps the walkable floor readable. Saturated red, teal, green, and gold reserve attention for routes, focal zones, and landmarks. Bilateral symmetry makes orientation and fairness legible, while small painterly variations keep the scene from feeling mechanically mirrored.
- **Depth and materials:** Stone, fabric, painted tile or glass, metal gilding, carved relief, and shallow architectural changes each have distinct texture and value. Crisp inked boundaries define stairs, carpet, platforms, and floor motifs; soft cast shadows, edge blending, and restrained highlights supply depth without muddying movement.
- **Scale discipline:** The faint grid aligns consistently to the architecture, and major props occupy believable multi-square footprints. Route width, step depth, statue scale, and open staging areas all communicate a stable combat scale. Grid readability must survive at thumbnail and ordinary VTT zoom without requiring a baked grid.
- **Finish and deliverable discipline:** The image fills the canvas edge to edge, has no accidental seam or dead zone, and uses the architectural border as in-world framing rather than page padding. Future generated maps should preserve the clarity and finish while still removing watermark, text, tokens, UI, and other non-map clutter. Aspect ratio should be chosen from the tactical footprint: this reference is approximately `17x48` squares at `140` pixels per square, so a fixed `9:16` requirement should not prevent a longer axial map when the scene needs it.

Future skill upgrades should require a zone plan, primary and alternate routes, a blocker/cover inventory, readable elevation changes, open token staging, a material and value hierarchy, and separate thumbnail/grid-zoom judging. A beautiful image that lacks those tactical reads should fail; a generic map should fail even when it is technically overhead and clean. This entry records the quality bar only; no skill upgrade is being made in this turn.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/FWcxS5a.jpeg`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/foundry-battlemap/references/foundry.md`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md` v2.0; `references/design.md`; `references/judge.md`; `references/modes.md`; `references/slots.md`; `references/prompt.md`; `references/repair.md`; `references/foundry.md` — Design step with tactical brief (zone plan, route grammar, cover/blocker inventory, staging, material ladder, authored identity, FRAME); three-scale judging (thumbnail, normal-zoom, grid-scale); flexible aspect ratio from tactical footprint; vehicle/deck-plan and multi-level modes; no-DPI-constraint and no-grid messaging. Measure: agent-facing files with tactical-design step in `.agents/skills/foundry-battlemap` 0 → 1; judge check categories 5 → 7; FRAME ratio presets 1 → 4. Cheap check: `rg -l --glob '*.md' 'tactical brief' .agents/skills/foundry-battlemap`; `rg -c 'Thumbnail read\|Normal-zoom read\|Grid-scale read' .agents/skills/foundry-battlemap/references/judge.md`.

### 2026-09-10 — UpKwx5O professional battlemap quality bar

**Error:** Foundry battlemap generation guidance does not yet capture the image-specific design qualities that make `/Users/nick/Downloads/UpKwx5O.jpeg` a professional, highly usable TTRPG battlemap rather than merely a polished overhead illustration.

**Correction:** This is a new, separate issue. No new image is requested or generated in this turn. Use `UpKwx5O.jpeg` as a benchmark for integrating tactical usability with authored visual detail:

- **Macro composition:** The portrait frame is full-bleed and deliberately staged. Dense stalls, tents, trees, supplies, and structures frame the edges and corners; a broad central meadow remains available for tokens. The eye travels through an upper activity band, an open middle, a warm central campfire landmark, and a lower bank-and-water transition. The composition is asymmetrical but balanced, with no accidental dead rectangle.
- **Tactical topology:** The open center is not featureless. Hay bales, tables, stalls, fences, banks, bridges, water, tents, and edge structures create obstacle islands, cover pockets, approach lanes, crossings, narrow thresholds, loops, and flanking routes. The map supports more than one way between important areas while keeping a clear place to stand and fight.
- **Spatial hierarchy:** Major landmarks read first, tactical blockers second, and lived-in micro-detail third. At thumbnail size, open ground, water, vegetation, structures, and large blockers separate by silhouette and value. At ordinary VTT zoom, the player can identify walkable squares, cover, line-of-sight breaks, crossings, and terrain changes without decoding the illustration.
- **Multi-scale detail:** Small props reward closer inspection—food, crates, tables, cloth, tools, hay, planted edges, and camp furniture—without contaminating the movement lanes. Detail is concentrated at the perimeter and around landmarks, so density communicates place instead of becoming visual noise.
- **Depth and grounding:** Canopy, banks, tents, structures, bridges, shallow water, and overlapping edge masses create layered depth while keeping the camera overhead. Contact shadows, cast shadows, consistent light direction, soft blended boundaries, and material-specific texture keep every prop anchored to the terrain rather than pasted onto it.
- **Color and material language:** Muted green ground provides the play surface; blue-green water, warm wood and canvas, yellow hay, orange firelight, and small saturated accents zone the scene and guide attention. Inked contours, painterly fill, wood grain, cloth, dirt, water, and vegetation each have a distinct but coherent treatment.
- **Authored identity:** The combination of fairground or camp structures, bunting, stalls, supplies, fire, water, and border vegetation explains what kind of place this is. Props vary in shape, orientation, and use; they do not read as repeated generic stamps. The map feels inhabited while remaining a combat space.
- **Deliverable discipline:** The map fills its canvas edge to edge; boundaries, banks, vegetation, and structures blend naturally into the frame rather than ending as clipped tiles or page padding. The visible grid and Patreon watermark in the reference are overlays for presentation and must not be copied into generated art; preserve the existing clean Foundry contract of no baked grid, tokens, UI, labels, watermark, fog, or light overlay.

Future `foundry-battlemap` upgrades should require a pre-prompt zone and route plan, an explicit cover/blocker/elevation inventory, a reserved token-staging area, a value-and-material hierarchy, controlled edge density, and separate thumbnail, normal-zoom, and imagined-grid-scale judging. Reject maps with a generic center, dead space, accidental seams, ambiguous terrain, repeated props, incoherent shadows, ungrounded objects, or decoration that blocks play. This entry records the quality bar only; no skill upgrade is being made in this turn.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/UpKwx5O.jpeg`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/foundry.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** Shared root cause with FWcxS5a correction. `.agents/skills/foundry-battlemap/` v2.0 upgrade integrates this quality bar into the Design step (zone plan, route grammar, cover inventory, staging, material ladder), three-scale judging, and edge-density control. See FWcxS5a Fix for measure and cheap check.

### 2026-09-10 — XHC2P6q linked-layer battlemap quality bar

**Error:** Foundry battlemap generation guidance treats each deliverable as one isolated 9:16 scene and does not capture the professional quality of `/Users/nick/Downloads/XHC2P6q.jpeg`: a coherent multi-level map set in which battlements, ground floor, and underground tunnels share one registered site footprint and communicate vertical topology.

**Correction:** Treat this as a new, separate quality bar. No new image is requested or generated in this turn. The reference is strong because it solves a different problem from a single battlemap:

- **Registered layers:** The shoreline, island silhouette, detached rocks, fortification footprint, towers, wall runs, and major openings recur in the same positions across the three states. A DM can move from one level to another without mentally redrawing the site. Future multi-level output should preserve anchor points and orientation exactly; a different floor must be a true layer of the same place, not a visually similar replacement.
- **Clear layer roles:** The upper panel communicates exposed battlements and defensible wall-top space; the middle panel reveals the furnished ground floor and room functions; the lower panel reveals the dark underground tunnel network. Each layer adds information instead of repeating the previous image with a superficial paint change.
- **Vertical topology:** The map makes above/below relationships legible through shared walls, courtyards, towers, shore edges, and the central rocky mass. Tunnels read as a deliberate network under the inhabited structure, with larger chambers, branching passages, constrictions, and exits that can support exploration, pursuit, ambush, and alternate routes.
- **Tactical variety by level:** The battlements provide broad exposed floors, wall walks, towers, parapets, and approach lines; the ground floor provides furnished rooms, corridors, thresholds, and cover; the tunnels provide low-light chambers, irregular passages, hidden movement, and chokepoints. Each layer has its own combat grammar while remaining part of one encounter space.
- **Information staging:** The faint site image behind the tunnel layer acts as an orientation reference: it preserves the surface footprint while visually demoting it beneath the subterranean information. A future map-set workflow should support a clean player-facing layer and, when useful, a separate DM orientation overlay or keyed reference sheet rather than forcing hidden topology into every battle layer.
- **Tactical readability:** Walkable stone, grass, cliffs, beach, water, walls, doors or openings, furniture, and tunnel voids separate by value and texture. At thumbnail size the site shape and level identity are obvious; at ordinary VTT zoom, rooms, walls, routes, blockers, and transitions remain readable. Detail supports decisions instead of becoming a decorative collage.
- **Consistent authored world:** The island water, pale rock, green vegetation, dark masonry, timber, and underground earth share one inked, hand-painted visual language. The same coastline and materials make the three panels feel like one place with different elevations, not three unrelated maps stacked together.
- **Context and framing:** The irregular island and surrounding water give the fort a clear boundary and approach context. Natural shorelines, detached rocks, cliff faces, and wall geometry fill the frame with meaningful edge information while leaving playable areas open. The site reads as a place in the world before the viewer studies individual rooms.
- **Presentation versus import:** The sample intentionally includes the labels `BATTLEMENTS`, `GROUND FLOOR`, and `UNDERGROUND TUNNELS`, separator rules, and Patreon marks to explain the map set. Those are presentation aids, not battlemap art. Individual Foundry layers must retain the existing clean-art contract: no baked grid, captions, watermark, UI, tokens, fog, or light overlay.

Future `foundry-battlemap` upgrades should add an explicit multi-level or map-set mode: define a shared site footprint and north/orientation anchors; name each layer's tactical role; inventory vertical connections and shared landmarks; generate aligned clean layers as separate importable files; and provide an optional orientation/reference sheet outside the battle layers. Judge both each layer on its own and the registration of the set as a whole. Reject layers that drift in shoreline, wall, tower, room, or tunnel alignment; hide vertical connections; repeat the same tactical grammar on every level; lose readability at thumbnail or normal zoom; or use the collage's labels and branding as baked map content. This entry records the quality bar only; no skill upgrade is being made in this turn.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/XHC2P6q.jpeg`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/foundry.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** Shared root cause with FWcxS5a correction. `.agents/skills/foundry-battlemap/references/modes.md` adds multi-level/map-set mode with shared site footprint, orientation anchors, per-layer zone plans, vertical connection inventory, and set-registration judging. See FWcxS5a Fix for measure and cheap check.

### 2026-09-10 — SilY2cu airship battlemap quality bar

**Error:** Foundry battlemap guidance does not yet capture the image-specific qualities that make `/Users/nick/Downloads/SilY2cu.jpeg` a professional, highly usable airship battlemap rather than a polished overhead vehicle illustration.

**Correction:** Treat this as a new, separate quality bar. The reference is excellent because it turns a flying vessel into a readable encounter architecture:

- **Vehicle as dungeon:** The hull is not just a silhouette. A continuous central deck axis runs through distinct playable zones: a broad open lower deck for staging and movement, a furnished midship enclosure, narrower upper rooms, and a raised circular mechanism or helm beneath a bright magical landmark. The footprint, walls, thresholds, and changes in floor material communicate how the ship is occupied and fought over.
- **Tactical route grammar:** The central spine gives the fight an obvious toe-to-toe lane, while side cabins, lateral openings, edge platforms, and room thresholds create branching choices, cover pockets, and flanking pressure. Doors, steps, hatches, railings, and deck breaks are visible enough to become real movement decisions rather than decorative marks. Broad deck space remains available for tokens instead of being consumed by furniture.
- **Playable floor versus contextual envelope:** The solid hull and deck read as the true play surface; sails, rigging, wing-like spars, lanterns, and outer framework expand the vessel's scale without pretending every translucent or delicate shape is walkable terrain. Future maps should distinguish playable surface, dangerous edge, and scenic silhouette through value, contour, and material—not labels.
- **Layered verticality from overhead:** Raised superstructure, enclosed rooms, lower deck, circular machinery, mast or rigging, and deck openings create above/below and high/low information without tilting the camera. Thick painted boundaries, contact shadows, floor changes, and readable transitions make elevation and enclosure legible at imagined grid scale.
- **Stable orientation with lived-in variation:** Strong bilateral organization makes the long craft easy to orient and keeps its tactical plan fair; small differences in props, furniture, rugs, crates, lamps, ropes, and fittings keep the vessel inhabited instead of mechanically mirrored. The ship reads as one coherent designed object, not repeated room stamps.
- **Material and color hierarchy:** Warm timber planks and hull framing establish the walkable base. Burgundy carpets and upholstered areas mark important interiors; cool blue rooms separate enclosed functions; pale sails recede into the surrounding air; saturated blue-violet magic reserves the strongest contrast for a landmark. Wood grain, cloth, metal, glass, rope, and sail fabric have distinct texture scales while remaining one painted visual language.
- **Scale and silhouette discipline:** The entire elongated craft fits the canvas with its bow, stern, lateral sails, and rigging intact, so the player can understand the vessel before studying individual rooms. Major furniture and architectural elements have believable multi-square footprints, route widths are consistent, and the ship's silhouette itself supplies orientation. Vehicle maps should choose the aspect ratio from the craft's tactical footprint instead of shrinking a long ship into a generic fixed rectangle.
- **Environmental storytelling that serves play:** The wheel or mechanism, cabin furnishings, chart or table, bedding, lanterns, storage, vents or hatches, rigging, and magical propulsion imply command, crew life, navigation, and danger. Details are concentrated where they explain function and create cover; they reward closer inspection without obscuring the routes.
- **Finish and presentation separation:** Consistent inked edges, soft grounded shadows, restrained translucency, clean material transitions, and full-bleed background integration make the image feel authored and finished. The visible square grid and `PATREON | CZEPEKU` mark are presentation overlays in the supplied reference, not part of the importable art; generated maps must retain the existing clean contract of no baked grid, labels, watermark, UI, tokens, fog, or light overlay.

Future `foundry-battlemap` upgrades should add a vehicle or deck-plan mode with a hull-and-deck inventory, a central route plus alternate route plan, a room and threshold map, explicit vertical-transition and dangerous-edge reads, a reserved token-staging area, and a separate distinction between playable floor and scenic rigging or sail silhouette. Judge at thumbnail, ordinary VTT zoom, and imagined grid scale for vessel orientation, route widths, doors, stairs, cover, and usable open floor. Reject a map that is merely a ship-shaped illustration, has an unarticulated deck, hides its transitions, mistakes decorative sails for terrain, repeats generic cabins, or lets micro-detail bury movement. This entry records the quality bar only; no skill upgrade is being made in this turn.

**Read:** `user-corrections.md`; `/Users/nick/Downloads/SilY2cu.jpeg`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/foundry-battlemap/references/foundry.md`; `.agents/skills/obsidian-markdown/SKILL.md`

**count:** 1

**status:** closed

**Fix:** Shared root cause with FWcxS5a correction. `.agents/skills/foundry-battlemap/references/modes.md` adds vehicle/deck-plan mode with hull-and-deck inventory, room/threshold map, vertical transitions, dangerous edges, and playable-floor vs scenic-envelope distinction. See FWcxS5a Fix for measure and cheap check.

### 2026-09-10 — Bloodhawk replacement owner

**Error:** Treated the supplied `Aruhe - Bloodhawk - Revised.md` as an additive design layer over the existing adult Bloodhawk owner instead of as the adult's replacement revision.

**Correction:** Use the supplied revised note as the adult Bloodhawk owner revision. Preserve only the live encounter references needed to keep Session 11 runnable; do not append a second adult design.

**Read:** `/Users/nick/Downloads/Aruhe%20-%20Bloodhawk%20-%20Revised.md`; `campaigns/shattered-sea/monsters/Aruhe - Bloodhawk.md`; `.agents/skills/homebrew-monsters-5e/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/qmd-retrieval/SKILL.md`; `.agents/skills/homebrew-monsters-5e/references/reference-gate.md`; `.agents/skills/homebrew-monsters-5e/references/chassis-and-budget.md`; `.agents/skills/homebrew-monsters-5e/references/audit-and-revise.md`; `.agents/skills/dnd5e-mechanics/SKILL.md`; `user-corrections.md`

**count:** 1

**status:** closed

**Fix:** `campaigns/shattered-sea/monsters/Aruhe - Bloodhawk.md` — treat the supplied revised document as the adult owner replacement and keep the result single-owner and single-adult. No skill change in this turn.

### 2026-09-10 — User instructions shape the wiki

**Error:** Resisted Nick's explicit instructions to fit the wiki, treating existing wiki conventions and prior structure as reasons to push back instead of applying the requested direction.

**Correction:** Nick's explicit instructions and supplied documents are authoritative inputs that shape the wiki. Apply the requested fit directly, preserve only constraints that do not conflict with that instruction, and continue the requested task without counterproductive resistance.

**Read:** `user-corrections.md`; `AGENTS.md`; `.agents/skills/homebrew-monsters-5e/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; Nick's current `#ERROR` correction message.

**count:** 1

**status:** closed

**Fix:** Apply the user's requested wiki shape and content directly in the young Bloodhawk owner task that follows. No skill change in this turn.

### 2026-09-11 — Token subject isolation

**Error:** Foundry token finalization treated a circular crop of painted scenery as a transparent token. The Bloodhawk token kept storm sky and cliff inside the circle; only the corners outside the circle were transparent.

**Correction:** The finished token isolates the subject on full transparency. Remove the entire background — sky, ground, and scenery inside the circle — not only the pixels outside the circular mask.

**Read:** `.agents/skills/foundry-token/SKILL.md`; `.agents/skills/foundry-token/references/prompt.md`; `.agents/skills/foundry-token/references/slots.md`; `.agents/skills/foundry-token/references/repair.md`; `.agents/skills/foundry-token/references/foundry.md`; `.agents/skills/foundry-token/assets/prompt-template.txt`; `scripts/foundry-token`; `.agents/skills/writing-for-agents/SKILL.md`; `artifacts/tokens/aruhe-bloodhawk-token.png`

**count:** 1

**status:** open

**Fix:** `.agents/skills/foundry-token/SKILL.md` v4.0; `references/prompt.md`; `references/slots.md`; `references/repair.md`; `references/foundry.md`; `assets/prompt-template.txt`; `scripts/foundry-token` — stands generate on a flat key color; the CLI chroma-keys that field (sampling imperfect screens, despilling the edge), refuses painted scenery, then circular-crops. Verify requires interior isolation, not corner transparency alone. Bloodhawk token re-keyed. Measure after drain. Cheap check: `rg -n 'key color|subject isolated' .agents/skills/foundry-token/SKILL.md scripts/foundry-token`.

### 2026-09-11 — Image-reference prompt left unintegrated

**Error:** Added `.agents/skills/visual-references/references/image-to-reference-sheet-prompt.md` with the supplied image-to-reference-sheet prompt, then stopped after creating and publishing the file. Did not update `.agents/skills/visual-references/SKILL.md` or its routing so a later agent knows when and how to use this template for converting an image into a reference image.

**Correction:** In a later session, integrate the new template into the `visual-references` skill. Define its image-to-reference conversion trigger, add a clear workflow pointer, distinguish it from `references/prompt-inventory.md`, and verify the skill references the file. Preserve the supplied prompt verbatim.

**Read:** `.agents/skills/visual-references/SKILL.md`; `.agents/skills/visual-references/references/prompt-inventory.md`; `.agents/skills/visual-references/references/image-to-reference-sheet-prompt.md`; `.agents/skills/writing-for-agents/SKILL.md`; `/Users/nick/.codex/attachments/d44bb194-dc6f-4ae0-9dff-9ebd5e2c4915/pasted-text.txt`; `user-corrections.md`

**count:** 1

**status:** open

**Fix:** _No fix in this turn._ Future integration belongs in `.agents/skills/visual-references/SKILL.md` and its reference routing; the later agent should add a measurable trigger and usage pointer without rewriting the verbatim prompt.

### 2026-09-11 — Battlemap default zoom too tight

**Error:** Session 11 beat 1 battlemaps were generated at a tight encounter zoom: a small landing spit, then a stacked collage of existing tight maps, then the same-size trees, grass, river, and ruins after a zoom-out request. The perceptual grid stayed large, so the canvas could not hold forests behind and a grassland river leading north. 9:20 was used after Nick wanted 9:16. Session 11 beat 4 Line Bank was generated the same way: a close-up fruiting strip filling the canvas, suggested `36×64`, no room to explore the scene. Session 11 beat 5 Slack Basin shipped the same miss: a river corridor and otter hole filling the canvas at `720×1280`. Nick: way too small; make it big enough. Session 11 beat 9 Star Cut shipped the same miss: a tight Paper Mario aisle filling the canvas.

**Correction:** Default Foundry battlemap scale is zoomed out unless Nick asks for a tight board. Do not default to the smallest SCALE in the table. Suggested grid smallest edge is `100` or larger. Shrink the perceptual grid so more of the place fits: more forest, more grass, more river, and more land left and right. Keep 9:16. Do not bake a grid. The board must be large enough to explore — a landmark in a valley, not a postcard of the hole. Nick upscales after. The accepted [[session-11-01-angry-birds-canopy-valley.jpg]] is the scale bar.

**Read:** `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/design.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/foundry-battlemap/references/foundry.md`; `.agents/skills/visual-references/SKILL.md`; `.agents/references/image-hosts.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `campaigns/shattered-sea/sessions/11/Session-11-03-Wolfrabbits.md`; `campaigns/shattered-sea/sessions/11/Session-11-04-What-They-Ate.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`; `campaigns/shattered-sea/locations/Aruhe - Grasslands Torn Crossing.md`; `campaigns/shattered-sea/locations/Aruhe - River Line Bank.md`; `campaigns/shattered-sea/locations/Aruhe - River Slack Basin.md`; `attachments/shattered-sea/battlemaps/session-11-01-angry-birds-base.jpg`; `attachments/shattered-sea/battlemaps/session-11-01-angry-birds-canopy-valley.png`; `attachments/shattered-sea/battlemaps/session-11-01-angry-birds-river-landing-portrait.png`; `attachments/shattered-sea/battlemaps/session-11-03-wolfrabbits-base.jpg`; `attachments/shattered-sea/battlemaps/session-11-04-what-they-ate-base.jpg`; `attachments/shattered-sea/battlemaps/session-11-05-otter-hole-base.jpg`; `attachments/shattered-sea/battlemaps/aruhe-old-gardens-day.jpg`; `attachments/shattered-sea/battlemaps/aruhe-grasslands-day.jpg`; `attachments/shattered-sea/battlemaps/aruhe-river-day.jpg`

**count:** 5

**status:** open

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md`; `references/design.md`; `references/slots.md`; `references/judge.md`; `references/foundry.md`; `references/repair.md`; `assets/prompt-template.txt` — Default SCALE is zoomed-out `36×64` on 9:16; tight `18×32`/`25×45` only when asked; judge fails room-scale props on large places and nearby ratios such as 9:20. Measure: files teaching `25×45` as default SCALE 2 → 0. Cheap check: `rg -n 'Default \`25×45\`|default \| 25×45 \| standard encounter' .agents/skills/foundry-battlemap`. `after-write` SHA: `1ec9622`.

### 2026-09-11 — Invented claimed works on unclaimed Aruhe

**Error:** The zoomed-out Session 11 beat 1 map invented a stone bridge and cobbled path, then a square paved courtyard ruin, on Aruhe.

**Correction:** Aruhe is unclaimed jungle. Read the owner pages before placing architecture. [[Aruhe - Old Gardens]] are abandoned stacked fruiting terraces swallowed by canopy, not roads, bridges, or buildings. River crossings are wild fords over pale stone.

**Read:** `campaigns/shattered-sea/locations/Aruhe-Old-Gardens.md`; `campaigns/shattered-sea/locations/Aruhe-Grasslands.md`; `campaigns/shattered-sea/locations/Aruhe-River.md`; `campaigns/shattered-sea/locations/Aruhe-River-Landing-Bank.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `.agents/skills/foundry-battlemap/references/prompt.md`

**count:** 2

**status:** open

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md`; `references/design.md`; `references/slots.md`; `references/judge.md`; `references/prompt.md`; `references/repair.md`; `assets/prompt-template.txt` — Intake reads the PLACE owner page; identity and judge place only architecture that page names; unclaimed land stays wild (terraces, canopy, grass, river, pale-stone fords). Measure: files requiring owner-page architecture 0 → 3. Cheap check: `rg -l --glob '*.md' 'Architecture and crossings are what that page names' .agents/skills/foundry-battlemap`. `after-write` SHA: `1ec9622`. Reopened: Session 11 beat 2 map used twin wagon ruts and a mowed dirt lane instead of muddy footprints crushed through eight-foot unclaimed grass.

### 2026-09-11 — Battlemap from the whole session beat

**Error:** Battlemaps were generated from place and terrain alone, without considering the session beat type they serve or that beat's purpose.

**Correction:** Generating a battlemap must take the entire session beat into consideration. Design the map holistically and harmoniously for that beat's goals and at the appropriate scale. Agents must consider the session beat type they are building the map for. Development beats typically have things to explore and learn, and those should be on the map.

**Read:** `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/design.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`

**count:** 1

**status:** closed

**Fix:** `.agents/skills/foundry-battlemap/SKILL.md`; `references/design.md`; `references/slots.md`; `references/judge.md`; `references/prompt.md`; `references/repair.md`; `assets/prompt-template.txt` — Intake loads the whole session beat; Design writes Beat jobs from type and purpose (Development puts things to explore and learn on the map); judge category 8 fails terrain-only boards. Measure: `## Beat jobs` heading in foundry-battlemap 0 → 1. Cheap check: `rg -l --glob '*.md' '## Beat jobs' .agents/skills/foundry-battlemap`. `after-write` SHA: `1ec9622`.

### 2026-09-11 — TotM misses speed, impact, and force

**Error:** [[Session-11-01-Angry-Birds]] theatre-of-the-mind text fails to communicate the speed, impact, and force of a very fast and violent action: the adult Bloodhawk swooping down and hitting the Crown Squid. Initial Narration and tick 1 describe pose and aim ("falling out of the sun", "pins all four wings and drops", "pale hook drives") without the hit landing as a fast, violent strike.

**Correction:** TotM of a fast violent action must carry speed, impact, and force so the table feels the stoop and the hit, not only the pose.

**Read:** `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`

**count:** 1

**status:** open

**Fix:** _No fix in this turn._ Durable change belongs in `theatre-of-the-mind`: spoken prose for a fast violent action must carry speed, impact, and force. Live rewrite of beat 1 is not this turn.

### 2026-09-11 — PC token framing mismatch

**Error:** Created Crissdalynn Khinriss as a full-body Foundry token without checking the framing of the other PC tokens, while Delmar Fisk's token is chest-up.

**Correction:** Match the PC token set: regenerate Crissdalynn as a chest-up portrait token so it belongs with the other PCs.

**Read:** `user-corrections.md`; `.agents/skills/foundry-token/SKILL.md`; `.agents/skills/foundry-token/references/foundry.md`; `.agents/skills/foundry-token/references/prompt.md`; `.agents/skills/foundry-token/references/slots.md`; `.agents/skills/foundry-token/references/repair.md`; `.agents/references/image-hosts.md`; `campaigns/shattered-sea/pcs/Crissdalynn Khinriss.md`; `attachments/shattered-sea/character-references/crissdalynn-khinriss-reference-sheet.png`; `attachments/shattered-sea/banners/crissdalynn-khinriss-banner.jpg`; `attachments/shattered-sea/pcs/crissdalynn-khinriss-banner-alt.jpg`

**count:** 1

**status:** open

**Fix:** _No durable process fix in this turn._ Apply the chest-up framing correction to the live token work; future token work should check the owner's peer-token framing before generating new art.

### 2026-09-11 — Battlemap prior output used as reference

**Error:** On the Session 11 beat 2 Landing Bank redo, zoom-out and extra-space requests were sent through `image_edit` with the previous generated map as an input image. That locked the composition, so later frames stayed the same tight board. Default behavior was treat a follow-up as an edit of the last image.

**Correction:** Default is to generate a new image. Do not edit an existing image unless Nick likes that image and asks for it to be edited.

**Read:** `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/references/image-hosts.md`; `campaigns/shattered-sea/sessions/11/Session-11-02-Landing-Sign.md`; `campaigns/shattered-sea/locations/Aruhe - River Landing Bank.md`; `attachments/shattered-sea/battlemaps/session-11-02-landing-sign-base.jpg`

**count:** 3

**status:** closed

**Fix:** `.agents/references/image-hosts.md` — Generate is the default (new image; identity anchors only). Edit a specific frame only when Nick likes that image and asks. Pointers: `foundry-battlemap` Generate+Repair and `references/repair.md`; `visual-references` feed step; `foundry-token` retries and repair. Measure: files stating Generate-is-the-default 0 → 1. Cheap check: `rg -n '\*\*Generate\*\* is the default' .agents/references/image-hosts.md`. `after-write` SHA: `4b70905`.

### 2026-09-11 — Battlemap distorted perspective

**Error:** Session 11 beat 6 Spoke Ring and beat 9 Star Cut battlemaps were generated through `image_edit` with vault reference images passed as model input. Ground-level identity photos pulled the camera into 3/4 or first-person: vanishing-point aisles, tilted mats, oval fire rings, and tree trunks as columns.

**Correction:** Do not pass reference images to the image model when generating a Foundry battlemap. Read owner pages, identity art, and prior maps yourself; put those facts into the text prompt. Generate text-only. A battlemap must be true orthographic top-down with no vanishing point: canopies as flat discs, mats as rectangles, the fire ring as a circle of stones.

**Read:** `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/repair.md`; `.agents/skills/visual-references/SKILL.md`; `.agents/references/image-hosts.md`; `campaigns/shattered-sea/sessions/11/Session-11-06-Farthest-Camp.md`; `campaigns/shattered-sea/sessions/11/Session-11-09-Theft-on-the-Watch.md`; `campaigns/shattered-sea/locations/Aruhe - Quiet Forest Spoke Ring.md`; `campaigns/shattered-sea/locations/Aruhe - Quiet Forest Star Cut.md`; `attachments/shattered-sea/places/aruhe-spoke-ring.jpg`; `attachments/shattered-sea/places/aruhe-star-cut.jpg`; `attachments/shattered-sea/items/aruhe-giants-guava.jpg`; `attachments/shattered-sea/battlemaps/session-11-06-farthest-camp-base.jpg`; `attachments/shattered-sea/battlemaps/session-11-09-theft-on-the-watch-base.jpg`; `attachments/shattered-sea/battlemaps/aruhe-spoke-ring-battlemap.jpg`; `attachments/shattered-sea/battlemaps/aruhe-star-cut-battlemap.jpg`

**count:** 3

**status:** open

**Fix:** _No durable process fix in this turn._ Live beat 6 map was regenerated text-only. Durable change belongs in `foundry-battlemap` / `visual-references` / `image-hosts`: battlemap generate is text-only; references are read, not passed as image input.

### 2026-09-11 — Star Cut as a star icon / Paper Mario board

**Error:** Session 11 beat 9 Star Cut battlemap painted a five-pointed star-shaped pool at the north mouth, corner tree-stump cross-sections, giant pumpkin fruit, and a tight cartoon board-game scale.

**Correction:** Star Cut is a linear slit in the leaf roof where night sky shows, not a star-shaped pond or icon. Generate a zoomed-out Czepeku painted overhead of a large Quiet rainforest with a thin packed-dirt aisle. Text-only. No Paper Mario, no cute cutouts, no geometric star.

**Read:** `.agents/skills/foundry-battlemap/SKILL.md`; `.agents/skills/foundry-battlemap/references/prompt.md`; `.agents/skills/foundry-battlemap/references/judge.md`; `.agents/skills/foundry-battlemap/references/slots.md`; `campaigns/shattered-sea/sessions/11/Session-11-09-Theft-on-the-Watch.md`; `campaigns/shattered-sea/locations/Aruhe - Quiet Forest Star Cut.md`; `attachments/shattered-sea/battlemaps/session-11-01-angry-birds-canopy-valley.png`

**count:** 1

**status:** open

**Fix:** _No durable process fix in this turn._ Live beat 9 map is being regenerated text-only at zoomed-out Czepeku scale.

### 2026-09-11 — Same-location scenes may reuse battlemaps

**Error:** Treated scenes in the same location as requiring distinct battlemap assets and treated the already-large Session 11 beat 5 file as needing a new high-resolution map reference.

**Correction:** Scenes that share a location may reuse the same battlemap. Session 11 beat 5 is already large enough; do not add or replace its map solely for this asset-refresh pass.

**Read:** `AGENTS.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`

**count:** 1

**status:** open

**Fix:** _No durable process fix in this turn._ When refreshing battlemap references, map location ownership and existing file sufficiency before assuming one unique high-resolution asset per scene.

### 2026-09-11 — session-surface cssclasses

**Error:** Wrote `cssclasses: [session-surface]` on [[Session-11-05-Otter-Hole]] so session CSS would apply, copying the same frontmatter flag from [[Session-11-01-Angry-Birds]].

**Correction:** CSS that requires a frontmatter value is a glitch waiting to happen. All vault CSS applies with normal CSS, not frontmatter values that enable it.

**Read:** `AGENTS.md`; `.agents/skills/run-guide/SKILL.md`; `.agents/skills/obsidian-markdown/SKILL.md`; `.agents/skills/copy-writer/SKILL.md`; `.agents/skills/obsidian-markdown/references/COLUMNS.md`; `campaigns/shattered-sea/sessions/11/Session-11-01-Angry-Birds.md`; `campaigns/shattered-sea/sessions/11/Session-11-05-Otter-Hole.md`

**count:** 1

**status:** closed

**Fix:** Session-surface styles were already promoted to global selectors in `ttrpg-styles.css` (identical values). Removed `cssclasses: [session-surface]` from all templates (`Session prep`, `Session log`, `Encounter`), all live session notes (11-00 through 11-06), `templates/00 Templates.md`, `docs/obsidian-presentation.md`, and `.agents/skills/run-guide/SKILL.md`. Measure: files with active `session-surface` cssclass reference outside archive and correction log 14 → 0. Cheap check: `grep -rn 'session-surface' --include='*.md' --include='*.css' | grep -v snippet-archive | grep -v user-corrections`.

### 2026-09-11 — Initial narration does not orient the table

**Error:** Initial narration is not resetting the scene. It does not initially describe the environment so players can orient themselves in the space, which is necessary for theatre of the mind.

**Correction:** Initial narration must reset the scene by describing the environment and spatial orientation before the players act, so the table can understand where they are and what surrounds them.

**Read:** `user-corrections.md`

**count:** 1

**status:** open

**Fix:** _No fix in this turn. Another agent will determine and implement the durable process fix from this report._
