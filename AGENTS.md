# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.**

| | |
|---|---|
| Local | `/Users/nick/Documents/ai-co-dm` |
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active | [[campaigns/shattered-sea/hot]] → [[campaigns/shattered-sea/00 Shattered Sea]] |

**Layers:** AGENTS = schema/contract · `campaigns/` = facts · `hot.md` + hubs = now · skills = procedures. **Grok Bots also load [[GROK-BOTS]]** (Mac host, packets, roster, TotM fail loop). Do not boot-load [[user-corrections]].

## Boot

1. This file + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree).
2. **Hard gate:** qmd via skill `qmd-retrieval` (`./scripts/qmd`). Default collections: `shattered-sea` (campaign facts) · `wiki` (hubs, lexicon, templates, contract). Opt-in: `skills` · `inbox` · `docs` · `legacy-ss` (read-only prior Shattered Sea). Snippets ≠ facts. `SKILL.md` only unless stuck. Needs **Node 26** on the Mac (Homebrew `node@26`).
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
- No reused identity for new content. Different places, creatures, NPCs, items,
  moments, art, tokens, and battlemaps need distinct prose and distinct assets.
  Existing prose or media may guide vibe only; it is not the deliverable for a
  different thing.
- No opaque internal labels. Use normal kitchen-table names in DM notes and
  player prose; if a name needs decoding, rename or describe the ordinary thing.
- Descriptive, specific, plain language is the default everywhere. Use common,
  normal human words unless the common word would be inaccurate. Prefer the
  ordinary noun plus the visible difference over coined labels, poetic
  shorthand, fancy terminology, or private campaign jargon.
- **Signal-only DM text:** Keep only facts that change a choice, ruling, risk, resource, route, clock, NPC response, or words to speak. Omit default, normal, and no-effect facts; state water, food, weather, light, safety, or permission only when it changes play because it is unsafe, costly, scarce, magical, claimed, time-bound, or a visible clue.

## Write

- **Format:** every vault `.md` uses skill `obsidian-markdown` (Obsidian Flavored Markdown — wikilinks, embeds, callouts, properties, at-table scan). Load `SKILL.md` on any create/edit; `references/` only if stuck.
- **Facts:** `campaigns/` states what is true in the world. Copy the matching `templates/` note. Design decisions, justifications, and process stay in skills and this file. Locations: `templates/Location` on create or edit.
- **Create vs update:** qmd for existing entity first; update in place; new note only if no hit; link nearest index/MOC.
- Wikilinks; one topic/note; stub > empty folder.
- **Images:** store under `attachments/` (use `attachments/<campaign>/` when campaign-specific). Embed `![[attachments/…]]` or wikilink `[[attachments/…]]` — never bare disk paths or `![](file:///…)` for vault art. Use an existing image, token, or battlemap only when it depicts the exact same owner/site/moment. For new content, make or request a distinct asset; prior art is vibe reference only.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`.
- **Owner pages:** `> [!narration] Narration` where the template places it — empty until TotM fill.
- **Session/run beats (two passes):**
  1. **Mechanical cockpit** (`run-guide`): sole-authority card plus **empty titled `[!narration]` stubs** at every slot (mandatory `Initial Narration`, then per zone, per clock tick, How the Scene Resolves for the most likely options only, per roster embed, `Exit` only if the next cockpit is on this file). Do not write player-facing prose in this pass. Embed an existing owner identity image (`![[attachments/…]]`) when the owner page already lists one.
  2. **Copy fill:** `theatre-of-the-mind` fills **every** stub. Spawn **copy-writer** (`copy-writer` skill; `.grok/agents/` · `.codex/agents/` · `.omp/agents/`). Grok Bots: **Visualizer** (same skill). Weave drawable appearance and a non-sight sense into the spoken sentences. A `ready` beat has no empty `[!narration]` body.
- On session/run surfaces the only callout is `[!narration]`. DM truth and procedure are headings. Callouts do not go inside table cells; titled stubs sit immediately after the Zones table and after the Threat clock table.
- Session: [[templates/Session prep]] → run → [[templates/Session log]]; move still-relevant prep forward.
- Scraps → `inbox/`, then **Ingest** (`wiki-ingest`). Table recordings → `session-transcript-ingest` first, then Ingest if filing remains.
- Canon owner remains **Co-DM** — Ingest compiles sources; does not silently invent table truth.
- **After-write mandatory (path-scoped):** finish every vault change with `./scripts/after-write "short why" -- path1 [path2…]` naming **only** the surgical paths you changed. That command commits and pushes those paths; leftover unstaged WIP stays in the working tree. Extra paths in the index abort the commit (Ops `--allow-unrelated-dirty` only). Do **not** use bare `git commit`/`git push`, do **not** `git add -A`. QMD index/embed is automatic (session-start and post-write hooks); after-write does not wait on it. Failed after-write means the commit did not land — narrow paths and rerun.
- **User correction (all agents):** when Nick corrects this agent, or his message contains `#ERROR` plus a description, write [[user-corrections]] using that file’s recipe (error, then correction, then what was read, plus **count:**). Same error → increment **count:**; new error → **count:** `1`. `#ERROR` is immediate — log before other work. Do not boot-load the log. Live work follows the correction; durable process fix is **Agentic-System-Designer**.

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `vehicle` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Skills (progressive)

**Two roots:**
- `.agent/skills/` — vault / D&D fleet skills (table below; default path unless noted).
- `.agents/skills/` — **Matt Pocock process pack** — extremely high quality; **always use when the job matches** (do not improvise process). Unsure which? `.agents/skills/ask-matt`. Do not confuse with `.agent/skills/`.

**Always-on:** this table + `obsidian-markdown` for every wiki `.md` write. **On match:** that skill’s `SKILL.md` only. **On demand:** `references/` when the skill says.

This repo is an **Obsidian prose wiki**, not an application codebase. Prefer vault skills and process packs over software harnesses.

- **Author / change fleet skills:** Skill-Creator owns `.agent/skills/`; follow managed skill-authoring (lean `SKILL.md` + when-to-use description; progressive `references/`). Ops wires AGENTS rows after ship.
- **Model the domain:** encode campaign language in `lexicon/`, AGENTS `type` enum, templates, and `.agents/skills/domain-modeling` — not scattered ad-hoc sections. Prefer Matt Pocock `domain-modeling` / `grill-with-docs` when sharpening terms.
- **Prove wiki health:** use existing vault scripts (`./scripts/lint-*`, `./scripts/qmd`, `./scripts/after-write`) and `wiki-lint` / `llm-wiki-eval` — do **not** invent app-style UI verification skills for this repo unless Nick asks.
- **Cursor/plugin skills** (`skill-authoring`, `principle-model-the-domain`, etc.): use when the wake matches; adapt to prose/wiki outcomes, not code refactors.
- **Fleet / agentic-system design review:** **Agentic-System-Designer** (`agentic-system-designer`) on any host — Grok Bot, Grok Build, Codex, omp. Drains [[user-corrections]] and runs the improvement loop; closes a correction only after a before/after measure. This host implements unless Nick names another owner. Grok Bot packets **Ops** / **Skill-Creator** / **Team-Leader** / **dr eggbot**. Spawn files: `.grok/agents/` · `.codex/agents/` · `.omp/agents/`.
- **Template / Obsidian readability:** **Wiki-UI** — human scan of `templates/`, run surfaces look, `.obsidian` presentation patterns. **Organizer** keeps MOCs/indexes/hot structure.

`session-wrapup` / `campaign-qa`: AntTheLimey/gm-apprentice (CC-BY-SA). `wiki-triage` / `llm-wiki-eval`: po4yka-llm-wiki-skills (MIT). `wiki-crystallize` / `wiki-integrate`: vanillaflava (MIT). `defuddle`: kepano adapt — see skill. See each skill’s attribution block.

| Job | Skill |
|---|---|
| Format any vault `.md` (Obsidian) | `obsidian-markdown` — **required on every wiki write**; one Markdown treatment = one at-table meaning (`DC n` is inline code) |
| Find vault facts | `qmd-retrieval` |
| LLM-wiki pattern / doctrine | `llm-wiki` |
| Eval whether wiki helps / quality harness | `llm-wiki-eval` → **Ops** / **Skill-Creator** / **Organizer** |
| Web URL → clean Markdown capture | `defuddle` → `wiki-ingest` → **Ingest** |
| Inbox / source triage before ingest | `wiki-triage` → **Ingest** / **Organizer** |
| Ingest source → typed notes | `wiki-ingest` → **Ingest** — decompose checklist → organize → dual-search `-c shattered-sea -c wiki` + `-c legacy-ss` per named entity → file **all** related (not thin skim) |
| Wiki health / orphans / hot drift | `wiki-lint` → **Linter** |
| Citation / claim audit (one note) | `wiki-audit` → **Linter** (Organizer light use) |
| Durable capture / session synthesis | `wiki-crystallize` → **Ingest** / **Co-DM** / **Session-Planner** |
| Merge / split dupes + fix links/indexes | `wiki-merge` → **Organizer** |
| Existing-note graph / index integration | `wiki-integrate` → **Organizer** |
| Stale / contradiction sweep | `wiki-update` → **Organizer** / **Linter** (confirm-before-write) |
| Answer from vault (qmd; optional file-back) | `wiki-query` → **Co-DM** / **Organizer** |
| Wiki prose / D&D copy, including session-beat `[!narration]` fill | `copy-writer` — Grok Build / Codex / omp spawn; Grok Bot **Visualizer**; TotM via `theatre-of-the-mind`; run cards fill the `run-guide` cockpit |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` — session-beat fill is pass 2 (`copy-writer`). Grok Bots: [[GROK-BOTS]] (**Visualizer**) |
| Audit player-facing TotM / read-aloud | **Writing-Evaluator** (critique only) |
| TotM fail → skill fix → rewrite loop | [[GROK-BOTS]] |
| Session pacing | `session-beats` — live beats `run-guide` will render are two passes (mechanical stubs → TotM fill) |
| Post-session durable log + surgical canon | `session-wrapup` → **Co-DM** / **Session-Planner** (complements `session-transcript-ingest`) |
| Canon / graph QA | `campaign-qa` → **Co-DM** / **Session-Planner** / **Organizer** (hygiene stays `wiki-lint`) |
| Places | `place-design` |
| Vehicles / named craft (ships, boats) | `vehicle-design` → **Homebrewer** (vehicle math); TotM vehicle surface → `theatre-of-the-mind`; notes under `campaigns/<campaign>/vehicles/` (**Organizer**) |
| Dungeons | `dungeon-design` → **Dungeon-Designer** — leave empty `[!narration]` for pass 2 fill |
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
| One-session DM run guide | `run-guide` → **Session-Planner** (pass 1 cockpit + empty stubs); **Co-DM** L2 only — never dual L0/L1 packets on same paths |
| Conservative wikilink repair | `cross-linker` → **Organizer** (link hygiene); lint assist → **Linter** |
| Thread-driven journey legs | `travel-events` → **Co-DM** / **Session-Planner** |
| Encounter prep (combat/social/exploration/hybrid) | `encounter-prep` → **Co-DM** / **Session-Planner**; monster math → **Monster-Brewer**; TotM fill is pass 2 |
| Human-started PC interviews | `pc-interview` → **Co-DM** / **Session-Planner** |
| Agency / anti-rail audits | `sandbox-narrative` → **Co-DM** |
| Grounded identity/session visuals | `visual-aids` — run-guide pass 1 **assembles** an already-listed owner identity image onto the beat card when present; does not mint identity during beat construction |
| Tag audit/normalization (ai-co-dm vocab) | `tag-taxonomy` → **Organizer**; AGENTS/schema → **Ops** |
| Multi-owner decompose before broad work | `decomposing-campaign-content` → **Agentic-System-Designer** (routing design); filing → **Ingest** |
| Post-ingest evidence reconciliation | `reconciling-session-evidence` → **Co-DM** / **Ingest** (after `session-transcript-ingest`) |
| Nick corrects an agent, or `#ERROR` | write [[user-corrections]] (count +1 if same error; do not boot-load); durable fix → `agentic-system-designer` |
| Agentic system design / drain corrections | `agentic-system-designer` → **Agentic-System-Designer** — prove with a measure (Grok Bot, Grok Build, Codex, omp) |

**Brew routing:** **Homebrewer** is the default general-purpose brew bot. Dedicated brew specialists (pattern: Monster-Brewer, Item-Brewer, **Dungeon-Designer**) are spun **lazily** when a content type is frequent/important — not pre-created. Until then, that type stays on Homebrewer. Places that are **dungeons** / megadungeons → **Dungeon-Designer** (already earned). New brew specialist → **Team-Leader** routes design to **dr eggbot**, then **Ops** wires AGENTS. Roster detail: [[GROK-BOTS]].

### Matt Pocock process pack (`.agents/skills/`)

**Rule:** if a skill below matches the wake, load it. Prefer the pack over ad-hoc process. Router: `ask-matt`.

| Job | Skill (under `.agents/skills/`) |
|---|---|
| Which Pocock skill fits? | `ask-matt` |
| Design grill / stress-test a plan | `grilling` (entry `grill-me`) — **default** before locking session plans or big designs → **Session-Planner** / **Co-DM** |
| Grill + write glossary / ADRs as you go | `grill-with-docs` (= grilling + domain-modeling) |
| Domain model / terminology / ADR | `domain-modeling` → **Co-DM** / **Organizer** / **Session-Planner** — campaign language → `lexicon/` + AGENTS `type`; eng `CONTEXT.md`/`docs/adr/` only if Nick asks |
| Huge multi-session plan map | `wayfinder` |
| Specs for workflows in this workspace | `loop-me` |
| Compact handoff to another agent | `handoff` · `claude-handoff` |
| Conversation → spec (no interview) | `to-spec` |
| Plan/spec → tracer-bullet tickets | `to-tickets` |
| Decision → questionnaire for someone else | `to-questionnaire` |
| Issue / PR triage state machine | `triage` → **Organizer** / **Team-Leader** / eng |
| High-trust research → markdown capture | `research` → **Researcher** (vault filing still via Ingest) |
| Interactive human-only steps wizard | `wizard` |
| Last message didn’t land — re-pitch | `wait-what` |
| Writing for agents / skills / AGENTS.md | `writing-for-agents` → **Skill-Creator** / **Ops** |
| Writing explore → exploit → article | `writing-fragments` · `writing-beats` · `writing-shape` |
| Teach a concept in-workspace | `teach` |
| Session retrospective | `retro` |
| Debug / diagnose hard bugs | `diagnosing-bugs` |
| Test-first / red-green-refactor | `tdd` |
| Review changes vs a fixed point | `code-review` |
| Deep-module interface design | `codebase-design` · `improve-codebase-architecture` |
| Implement from spec / tickets | `implement-spec` · `implement` |
| Throwaway prototype for a design question | `prototype` |
| Resolve in-progress merge/rebase conflict | `resolving-merge-conflicts` |
| One-time pack setup (tracker / labels / domain layout) | `setup-matt-pocock-skills` |
| Eng tooling (only when coding this repo) | `setup-pre-commit` · `setup-ts-deep-modules` · `git-guardrails-claude-code` · `migrate-to-shoehorn` · `scaffold-exercises` · `qmd` (Pocock bootstrap — vault search still `.agents/skills/qmd-retrieval`) |

## Layout

| Path | Purpose |
|---|---|
| `campaigns/<id>/hot.md` | Boot “now” |
| `campaigns/` · `campaigns/<id>/vehicles/` · `templates/` · `lexicon/` · `inbox/` · `attachments/` | Wiki (Obsidian: new notes → inbox, embeds → attachments; named craft → vehicles/) |
| `GROK-BOTS.md` | Grok Bot fleet: Mac host, packets, roster, TotM fail loop |
| `user-corrections.md` | Nick’s correction log — write on correction or `#ERROR`; increment **count:** on repeats; do not boot-load |
| `.grok/agents/` · `.codex/agents/` · `.omp/agents/` | Host spawn adapters; bodies are skills (`agentic-system-designer`, `copy-writer`) |
| `.obsidian/` | Human vault config + Statblocks/Leaflet (ignore workspace) |
| `.agents/skills/` | Vault / D&D fleet procedures + Matt Pocock process pack. QMD `skills` indexes `**/SKILL.md` only. |
| `scripts/after-write` · `scripts/qmd` · `scripts/qmd-refresh` · `scripts/lint-statblocks` · `scripts/lint-obsidian-markdown` · `scripts/lint-fat-notes` · `scripts/lint-literal-newlines` | Agent CLI |
| `docs/agents/` | Eng triage — skip for table work. Wave detail: [[docs/agents/coordination]] |

## Region subfolder policy (proposal)

- Prefer flat typed buckets: `campaigns/<slug>/{npcs,locations,factions,...}/Note.md`.
- Record NPC/place location and region in frontmatter (for example, `location:` and `region:`), not nested folders.
- Treat region clusters such as Aruhe and Verdant Teeth as MOC/hub notes plus tags/frontmatter, rather than `locations/aruhe/...` nesting.
- Leave existing nested notes in place for now; migrate opportunistically when touching them. No mass rename or move in this pass.
