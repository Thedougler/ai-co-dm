# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.**

**Prime directive:** a D&D session that is **fun** for the players and easy for the DM to run. Every design choice — DCs, encounters, pacing, structure, rulings — serves fun first. Change anything that would be more fun different. Consistency, symmetry, and convention yield to fun. Nothing is sacred except fun.

| | |
|---|---|
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active | [[campaigns/shattered-sea/hot]] → [[campaigns/shattered-sea/00 Shattered Sea]] |

**Grok Bots also load [[GROK-BOTS]]. Agents running in oh-my-pi load [[OMP]].** Do not boot-load [[user-corrections]].

## Boot

1. This file + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree).
2. **Hard gate:** qmd via skill `qmd-retrieval` (`./scripts/qmd`). Default collections: `shattered-sea` (campaign facts) · `wiki` (hubs, lexicon, templates, contract). Opt-in: `skills` · `inbox` · `docs` · `legacy-ss` (read-only prior Shattered Sea). Snippets ≠ facts. `SKILL.md` only unless stuck.
3. Missing canon → ask Nick / Co-DM. No silent contradiction.
4. New entity → copy `templates/` match; fill facts play needs; link nearest index/MOC. Format with skill `obsidian-markdown` (wikilinks, callouts, properties).

## Hard don'ts

- No WotC book paste. No invented D&D mechanics: **5.5e (2024) RAW**, or vault homebrew Nick explicitly asked for. No real player PII (handles only).
- No parallel DB/app. Vault *is* the system.
- No prep/log mash (`session-prep` disposable; `session` durable).
- No secrets/DCs/unearned names in `[!narration]`.
- No “update the whole wiki” — surgical page sets only. Ingest → **Ingest**; lint/audit → **Linter**; structure/MOCs → **Organizer**; don’t full-wiki rewrite.
- No full-transcript handoffs. No re-ls when `hot` + qmd suffice.
- No silent overwrite of canon — flag in the note / ask Co-DM|Nick.
- No reused identity for new content. Different places, creatures, NPCs, items, moments, art, tokens, and battlemaps need distinct prose and distinct assets. Prior art is vibe reference only.
- Plain kitchen-table language everywhere. Use common human words unless inaccurate. Prefer the ordinary noun plus the visible difference over coined labels, poetic shorthand, or private jargon. If a name needs decoding, rename it.
- **Signal-only DM text:** Keep only facts that change a choice, ruling, risk, resource, route, clock, NPC response, or words to speak. Omit default, normal, and no-effect facts; state water, food, weather, light, safety, or permission only when it changes play because it is unsafe, costly, scarce, magical, claimed, time-bound, or a visible clue.

## Write

- **Format:** every vault `.md` uses skill `obsidian-markdown`. Load `SKILL.md` on any create/edit.
- **Facts:** `campaigns/` states what is true. Copy matching `templates/` note. Design decisions and process stay in skills and this file.
- **Create vs update:** qmd for existing entity first; update in place; new note only if no hit; link nearest index/MOC.
- **Images:** store under `attachments/` (`attachments/<campaign>/` when campaign-specific). Embed `![[attachments/…]]` — never bare disk paths. Use existing art only when it depicts the exact same owner/site/moment.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`, `summary`.
- **Owner pages:** `> [!narration] Narration` where the template places it — empty until TotM fill.
- **Session/run beats (four passes):** `run-guide` builds mechanics plus empty `[!narration]` stubs; `copy-writer` edits DM-facing copy for table use; `theatre-of-the-mind` fills every spoken stub last; final pass checks the ready beat has no empty `[!narration]` body.
- On session/run surfaces the only callout is `[!narration]`. Procedure is a heading. Do not add a `DM truth` section — the whole card is DM-facing. Callouts do not go inside table cells; titled stubs sit immediately after the Zones table and after the Threat clock table. Layout uses `col` / `col-md` codeblock fences, not `[!col]`.
- Session: [[templates/Session prep]] → run → [[templates/Session log]]; move still-relevant prep forward.
- Scraps → `inbox/`, then **Ingest** (`wiki-ingest`). Table recordings → `session-transcript-ingest` first, then Ingest if filing remains.
- Canon owner remains **Co-DM** — Ingest compiles sources; does not silently invent table truth.
- **After-write mandatory (path-scoped):** finish every vault change with `./scripts/after-write "short why" -- path1 [path2…]` naming **only** the surgical paths you changed. Do **not** use bare `git commit`/`git push`, do **not** `git add -A`. Failed after-write → narrow paths and rerun.
- **User correction (all agents):** when Nick corrects this agent, or his message contains `#ERROR` plus a description, write [[user-corrections]] using that file’s recipe (error, then correction, then what was read, plus **count:**). Same error → increment **count:**; new error → **count:** `1`. `#ERROR` is immediate — log before other work. Do not boot-load the log. Live work follows the correction; durable process fix is **Agentic-System-Designer**.

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `vehicle` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Skills (progressive)

**One root:** `.agents/skills/` — vault / D&D fleet skills (table below; default unless noted) plus **Matt Pocock process pack** — extremely high quality; **always use when the job matches** (do not improvise process). Unsure which? `.agents/skills/ask-matt`.

**Always-on:** this table + `obsidian-markdown` + `copy-writer` for every wiki `.md` write; `writing-for-agents` for every agent-facing file (skills, `AGENTS.md`, `CLAUDE.md`, templates-for-agents). **On match:** that skill’s `SKILL.md` only. **On demand:** `references/` when the skill says.

This repo is an **Obsidian prose wiki**, not an application codebase. Prefer vault skills and process packs over software harnesses.

- **Domain language:** encode in `lexicon/`, `type` enum, templates, and `domain-modeling`. Do not scatter ad-hoc term sections.
- **Wiki health:** use existing vault scripts (`./scripts/lint-*`, `./scripts/qmd`) and `wiki-lint` / `llm-wiki-eval`. Do not invent app-style verification for this repo.
- **Fleet design:** **Agentic-System-Designer** (`agentic-system-designer`) drains [[user-corrections]]; closes a correction only after a before/after measure. Grok Bot fleet detail → [[GROK-BOTS]].

| Job | Skill |
|---|---|
| Format any vault `.md` (Obsidian) | `obsidian-markdown` — **required on every wiki write** |
| Find vault facts | `qmd-retrieval` |
| LLM-wiki pattern / doctrine | `llm-wiki` |
| Eval whether wiki helps / quality harness | `llm-wiki-eval` → **Ops** / **Skill-Creator** / **Organizer** |
| Web URL → clean Markdown capture | `defuddle` → `wiki-ingest` → **Ingest** |
| Inbox / source triage before ingest | `wiki-triage` → **Ingest** / **Organizer** |
| Ingest source → typed notes | `wiki-ingest` → **Ingest** — dual-search `-c shattered-sea -c wiki` + `-c legacy-ss` per entity; file **all** related |
| Wiki health / orphans / hot drift | `wiki-lint` → **Linter** |
| Citation / claim audit (one note) | `wiki-audit` → **Linter** (Organizer light use) |
| Durable capture / session synthesis | `wiki-crystallize` → **Ingest** / **Co-DM** / **Session-Planner** |
| Merge / split dupes + fix links/indexes | `wiki-merge` → **Organizer** |
| Existing-note graph / index integration | `wiki-integrate` → **Organizer** |
| Stale / contradiction sweep | `wiki-update` → **Organizer** / **Linter** (confirm-before-write) |
| Answer from vault (qmd; optional file-back) | `wiki-query` → **Co-DM** / **Organizer** |
| Wiki prose / `[!narration]` fill | `copy-writer` — TotM via `theatre-of-the-mind`; run cards via `run-guide` |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` — session-beat spoken fill is pass 4 |
| TotM audit / fail loop | **Writing-Evaluator** (critique); [[GROK-BOTS]] (rewrite loop) |
| Session pacing | `session-beats` — four passes (mechanics → DM copy → TotM fill → ready check) |
| Post-session durable log + surgical canon | `session-wrapup` → **Co-DM** / **Session-Planner** (complements `session-transcript-ingest`) |
| Canon / graph QA | `campaign-qa` → **Co-DM** / **Session-Planner** / **Organizer** (hygiene stays `wiki-lint`) |
| Places | `place-design` |
| Vehicles / named craft | `vehicle-design` → **Homebrewer**; notes under `campaigns/<campaign>/vehicles/` |
| Dungeons | `dungeon-design` → **Dungeon-Designer** — leave empty `[!narration]` for the TotM fill pass |
| NPCs | `npc-design` |
| Monsters | `homebrew-monsters-5e` → **Monster-Brewer** |
| Magic items | `dnd-5e-magic-item-design` → **Item-Brewer** |
| Challenge design | `traps-trials` → **Homebrewer** (craft); TotM of result → `theatre-of-the-mind` |
| 5.5e checks, saves, DCs | `dnd5e-mechanics` — load when writing or auditing a DC, skill check, saving throw, or the player action that resolves it |
| Situation topology | `narrative-islands` → **Co-DM** / **Session-Planner** |
| Campaign architecture | `campaign-planning` → **Co-DM** / **Session-Planner** |
| Faction prep | `faction-prep` → **Co-DM** |
| Off-screen world advancement | `world-tick` → **Co-DM** (canon clocks); structure/hot assist → **Organizer** |
| Player-facing post-session recap | `session-recap` → **Co-DM** / **Session-Planner** (after `session-wrapup`) |
| Presence/elaboration pass | `flesh-out` → **Co-DM** (DM facts before TotM fill) |
| Borrowed-POV session opener | `cold-opens` → `theatre-of-the-mind` (borrowed-POV prose); plan → **Session-Planner** |
| One-session DM run guide | `run-guide` → **Session-Planner** (pass 1 cockpit + empty stubs); `copy-writer` pass 2 DM copy; **Co-DM** pass 3 TotM fill only — never dual pass 1 on same paths |
| Conservative wikilink repair | `cross-linker` → **Organizer** (link hygiene); lint assist → **Linter** |
| Thread-driven journey legs | `travel-events` → **Co-DM** / **Session-Planner** |
| Encounter prep (combat/social/exploration/hybrid) | `encounter-prep` → **Co-DM** / **Session-Planner**; monster math → **Monster-Brewer**; TotM fill is the final copy pass |
| Human-started PC interviews | `pc-interview` → **Co-DM** / **Session-Planner** |
| Agency / anti-rail audits | `sandbox-narrative` → **Co-DM** |
| Grounded identity/session visuals | `visual-aids` — assembles existing owner identity image onto beat card; does not mint art |
| Gather entity appearance refs before image generation | `visual-references` — collects owner appearance pixels and prose; fires before any generation or edit call |
| Tag audit/normalization (ai-co-dm vocab) | `tag-taxonomy` → **Organizer**; AGENTS/schema → **Ops** |
| Multi-owner decompose before broad work | `decomposing-campaign-content` → **Agentic-System-Designer** (routing design); filing → **Ingest** |
| Post-ingest evidence reconciliation | `reconciling-session-evidence` → **Co-DM** / **Ingest** (after `session-transcript-ingest`) |
| Nick corrects an agent, or `#ERROR` | write [[user-corrections]] (count +1 if same error; do not boot-load); durable fix → `agentic-system-designer` |
| Agentic system design / drain corrections | `agentic-system-designer` → **Agentic-System-Designer** — prove with a measure (Grok Bot, Grok Build, Codex, omp) |

**Brew routing:** **Homebrewer** default; dedicated specialists (**Monster-Brewer**, **Item-Brewer**, **Dungeon-Designer**) spun lazily. Roster: [[GROK-BOTS]].

### Matt Pocock process pack (`.agents/skills/`)

Prefer the pack over ad-hoc process. Router: `ask-matt`. Key D&D rows:

| Job | Skill |
|---|---|
| Which Pocock skill fits? | `ask-matt` |
| Stress-test a plan | `grilling` — **default** before locking session plans or big designs |
| Domain model / terminology | `domain-modeling` — campaign language → `lexicon/` + AGENTS `type` |
| Multi-session plan map | `wayfinder` |
| High-trust research | `research` → **Researcher** |
| Writing for agents / skills | `writing-for-agents` |
| Agent handoff | `handoff` · `claude-handoff` |
| Diagnose hard bugs | `diagnosing-bugs` |
| Review changes | `code-review` |

`ask-matt` routes the full pack including eng tooling (`tdd`, `implement`, `prototype`, `resolving-merge-conflicts`, etc.).

## Layout

| Path | Purpose |
|---|---|
| `campaigns/<id>/hot.md` | Boot “now” |
| `campaigns/` · `templates/` · `lexicon/` · `inbox/` · `attachments/` | Wiki (new notes → inbox, embeds → attachments, named craft → `vehicles/`) |
| `.agents/skills/` | Skills + Matt Pocock process pack. QMD `skills` indexes `**/SKILL.md` only |
| `.obsidian/` | Human vault config (ignore workspace) |
