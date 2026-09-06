# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.**

| | |
|---|---|
| Local | `/Users/nick/Documents/ai-co-dm` |
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active | [[campaigns/shattered-sea/hot]] → [[campaigns/shattered-sea/00 Shattered Sea]] |

**Layers:** AGENTS = schema/contract only · `hot.md` + hubs = campaign state · skills = procedures. Grok Bots: Shell on **macbook.lan**, cwd = vault root.

## Boot

1. This file + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree).
2. **Mac host gate (fail-closed):** vault reads/writes/commits only on **macbook.lan** (`machineId` `4aa16cad-1621-4103-953d-a800b4772ba5`), cwd = vault root. If Mac is disconnected **or** ListMachines says `connected: true` but Shell/Read still fails (“temporarily unreachable” / false-connected) → **stop** after 1–2 spawn attempts, ask Nick to reconnect or open [Update Grok Bot's Computer](grokbot://app/v1/settings?id=update-computer). Do **not** retry-thrash, clone the vault onto the Linux box, use alternate checkouts, or push without `./scripts/after-write`.
3. **Hard gate:** qmd via skill `qmd-retrieval` (`./scripts/qmd`). Collections: `wiki` · `skills` · `legacy-ss` (read-only prior Shattered Sea). Snippets ≠ facts. `SKILL.md` only unless stuck. Needs **Node 26** on the Mac (Homebrew `node@26`).
4. Missing canon → ask Nick / Co-DM. No silent contradiction.
5. New entity → copy `templates/` match; fill only what play needs; link nearest index/MOC. Format with skill `obsidian-markdown` (wikilinks, callouts, properties).

## Hard don'ts

- No WotC book paste. No real player PII (handles only).
- No parallel DB/app. Vault *is* the system.
- No prep/log mash (`session-prep` disposable; `session` durable).
- No secrets/DCs/unearned names in `[!narration]`.
- No “update the whole wiki” — surgical page sets only. Ingest → **Ingest**; lint/audit → **Linter**; structure/MOCs → **Organizer**; don’t full-wiki rewrite.
- No full-transcript handoffs. No re-ls when `hot` + qmd suffice.
- No silent overwrite of canon — flag in the note / ask Co-DM|Nick.

## Write

- **Format:** every vault `.md` uses skill `obsidian-markdown` (Obsidian Flavored Markdown — wikilinks, embeds, callouts, properties). Load `SKILL.md` on any create/edit; `references/` only if stuck.
- **Create vs update:** qmd for existing entity first; update in place; new note only if no hit; link nearest index/MOC.
- Wikilinks; one topic/note; stub > empty folder.
- **Images:** store under `attachments/` (use `attachments/<campaign>/` when campaign-specific). Embed `![[attachments/…]]` or wikilink `[[attachments/…]]` — never bare disk paths or `![](file:///…)` for vault art.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`.
- Leading `> [!narration] Narration` — TotM / **Visualizer**. Empty ok.
- Session: [[templates/Session prep]] → run → [[templates/Session log]]; move still-relevant prep forward.
- Scraps → `inbox/`, then **Ingest** (`wiki-ingest`). Table recordings → `session-transcript-ingest` first, then Ingest if filing remains.
- Canon owner remains **Co-DM** — Ingest compiles sources; does not silently invent table truth.
- **After-write mandatory (path-scoped):** finish every vault change with `./scripts/after-write "short why" -- path1 [path2…]` naming **only** the surgical paths you changed. Failed after-write (incl. missing Node 26 / qmd, or unrelated dirty tree) means the write is **not done** — fix host/tooling or narrow paths and rerun. Do **not** use bare `git commit`/`git push`, do **not** `git add -A`, and do **not** leave unrelated WIP staged for others to inherit. Ops-only escape: `--allow-unrelated-dirty`.

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `vehicle` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Skills (progressive)

**Two roots:**
- `.agent/skills/` — vault / D&D fleet skills (table below; default path unless noted).
- `.agents/skills/` — **Matt Pocock process pack** — extremely high quality; **always use when the job matches** (do not improvise process). Unsure which? `.agents/skills/ask-matt`. Do not confuse with `.agent/skills/`.

**Always-on:** this table + `obsidian-markdown` for every wiki `.md` write. **On match:** that skill’s `SKILL.md` only. **On demand:** `references/` when the skill says.

### Grok Bot skill practices

This repo is an **Obsidian prose wiki**, not an application codebase. Prefer vault skills and process packs over software harnesses.

- **Author / change fleet skills:** Skill-Creator owns `.agent/skills/`; follow managed skill-authoring (lean `SKILL.md` + when-to-use description; progressive `references/`). Ops wires AGENTS rows after ship.
- **Model the domain:** encode campaign language in `lexicon/`, AGENTS `type` enum, templates, and `.agents/skills/domain-modeling` — not scattered ad-hoc sections. Prefer Matt Pocock `domain-modeling` / `grill-with-docs` when sharpening terms.
- **Prove wiki health:** use existing vault scripts (`./scripts/lint-*`, `./scripts/qmd`, `./scripts/after-write`) and `wiki-lint` / `llm-wiki-eval` — do **not** invent app-style UI verification skills for this repo unless Nick asks.
- **Cursor/plugin skills** (`skill-authoring`, `principle-model-the-domain`, etc.): use when the wake matches; adapt to prose/wiki outcomes, not code refactors.
- **Fleet / agentic-system design review:** **Agentic-System-Designer** proposes ADRs/specs (`docs/agents/` or `inbox/`); **Ops** / **Skill-Creator** / **Team-Leader** / **dr eggbot** implement.
- **Template / Obsidian readability:** **Wiki-UI** — human scan of `templates/`, run surfaces look, `.obsidian` presentation patterns. **Organizer** keeps MOCs/indexes/hot structure.


`session-wrapup` / `campaign-qa`: AntTheLimey/gm-apprentice (CC-BY-SA). `wiki-triage` / `llm-wiki-eval`: po4yka-llm-wiki-skills (MIT). `wiki-crystallize` / `wiki-integrate`: vanillaflava (MIT). `defuddle`: kepano adapt — see skill. See each skill’s attribution block.

| Job | Skill |
|---|---|
| Format any vault `.md` (Obsidian) | `obsidian-markdown` — **required on every wiki write** |
| Find vault facts | `qmd-retrieval` |
| LLM-wiki pattern / doctrine | `llm-wiki` |
| Eval whether wiki helps / quality harness | `llm-wiki-eval` → **Ops** / **Skill-Creator** / **Organizer** |
| Web URL → clean Markdown capture | `defuddle` → `wiki-ingest` → **Ingest** |
| Inbox / source triage before ingest | `wiki-triage` → **Ingest** / **Organizer** |
| Ingest source → typed notes | `wiki-ingest` → **Ingest** — decompose checklist → organize → dual-search `-c wiki` + `-c legacy-ss` per named entity → file **all** related (not thin skim) |
| Wiki health / orphans / hot drift | `wiki-lint` → **Linter** |
| Citation / claim audit (one note) | `wiki-audit` → **Linter** (Organizer light use) |
| Durable capture / session synthesis | `wiki-crystallize` → **Ingest** / **Co-DM** / **Session-Planner** |
| Merge / split dupes + fix links/indexes | `wiki-merge` → **Organizer** |
| Existing-note graph / index integration | `wiki-integrate` → **Organizer** |
| Stale / contradiction sweep | `wiki-update` → **Organizer** / **Linter** (confirm-before-write) |
| Answer from vault (qmd; optional file-back) | `wiki-query` → **Co-DM** / **Organizer** |
| Wiki prose / D&D copy (TUI) | spawn **copy-writer** (`.grok/agents/copy-writer.md`) — table-ready body copy on typed notes (L0/L1/L2, flavor, keys, dialogue, recaps); `[!narration]` still `theatre-of-the-mind`; run structure still `run-guide` |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` → **Visualizer** |
| Audit player-facing TotM / read-aloud | **Writing-Evaluator** (critique only) |
| TotM fail → skill fix → rewrite loop | Evaluator fail → **Skill-Creator** → **Visualizer** → Evaluator again |
| Session pacing | `session-beats` |
| Post-session durable log + surgical canon | `session-wrapup` → **Co-DM** / **Session-Planner** (complements `session-transcript-ingest`) |
| Canon / graph QA | `campaign-qa` → **Co-DM** / **Session-Planner** / **Organizer** (hygiene stays `wiki-lint`) |
| Places | `place-design` |
| Vehicles / named craft (ships, boats) | `vehicle-design` → **Homebrewer** (vehicle math); TotM vehicle surface → **Visualizer**; notes under `campaigns/<campaign>/vehicles/` (**Organizer**) |
| Dungeons | `dungeon-design` → **Dungeon-Designer** |
| NPCs | `npc-design` |
| Monsters | `homebrew-monsters-5e` → **Monster-Brewer** |
| Magic items | `dnd-5e-magic-item-design` → **Item-Brewer** |
| Challenge design | `traps-trials` → **Homebrewer** (craft); TotM of result → **Visualizer** |
| Situation topology | `narrative-islands` → **Co-DM** / **Session-Planner** |
| Campaign architecture | `campaign-planning` → **Co-DM** / **Session-Planner** |
| Faction prep | `faction-prep` → **Co-DM** |
| Off-screen world advancement | `world-tick` → **Co-DM** (canon clocks); structure/hot assist → **Organizer** |
| Player-facing post-session recap | `session-recap` → **Co-DM** / **Session-Planner** (after `session-wrapup`) |
| Presence/elaboration pass | `flesh-out` → **Co-DM** (DM facts before TotM) |
| Borrowed-POV session opener | `cold-opens` → **Visualizer** (borrowed-POV prose); plan → **Session-Planner** |
| One-session DM run guide | `run-guide` → **Session-Planner** (cockpit: Glance + live cards with embeds); **Co-DM** L2 only — never dual L0/L1 packets on same paths |
| Conservative wikilink repair | `cross-linker` → **Organizer** (link hygiene); lint assist → **Linter** |
| Thread-driven journey legs | `travel-events` → **Co-DM** / **Session-Planner** |
| Encounter prep (combat/social/exploration/hybrid) | `encounter-prep` → **Co-DM** / **Session-Planner**; monster math → **Monster-Brewer** |
| Human-started PC interviews | `pc-interview` → **Co-DM** / **Session-Planner** |
| Agency / anti-rail audits | `sandbox-narrative` → **Co-DM** |
| Grounded identity/session visuals | `visual-aids` → **Visualizer** |
| Tag audit/normalization (ai-co-dm vocab) | `tag-taxonomy` → **Organizer**; AGENTS/schema → **Ops** |
| Multi-owner decompose before broad work | `decomposing-campaign-content` → **Agentic-System-Designer** (routing design); filing → **Ingest** |
| Post-ingest evidence reconciliation | `reconciling-session-evidence` → **Co-DM** / **Ingest** (after `session-transcript-ingest`) |

**Brew routing:** **Homebrewer** is the default general-purpose brew bot. Dedicated brew specialists (pattern: Monster-Brewer, Item-Brewer, **Dungeon-Designer**) are spun **lazily** when a content type is frequent/important — not pre-created. Until then, that type stays on Homebrewer. Places that are **dungeons** / megadungeons → **Dungeon-Designer** (already earned). New brew specialist → **Team-Leader** routes design to **dr eggbot**, then **Ops** wires AGENTS.

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
| Eng tooling (only when coding this repo) | `setup-pre-commit` · `setup-ts-deep-modules` · `git-guardrails-claude-code` · `migrate-to-shoehorn` · `scaffold-exercises` · `qmd` (Pocock bootstrap — vault search still `.agent/skills/qmd-retrieval`) |

## Handoffs (one specialist per wake)


### Packet standard

Every specialist wake uses this packet (schema only):

`task_id` · `goal` · `allowed paths` · `branch` (required for vault writes) · `type` · `source root` (concrete path/URL or `none`) · `constraints` · `status` (`active` | `hold` | `cancelled` | `done`) · `supersedes` (prior `task_id` or `none`) · `do not re-read whole campaign`

**Friction-report packets** (`goal: friction-report`) also include:

`bot` · `symptom` · `cost` (rewrites / wrong wakes / tokens if known) · `repro` · `related paths/skills` · `proposed owner` (`Ops` | `Skill-Creator` | `Team-Leader` | `dr eggbot` | `Agentic-System-Designer`) · `status: active`

Rules:
- One specialist per wake.
- New packet for the same work must `supersedes` the prior `task_id` and set the old packet `status` to `cancelled` or `hold`.
- Parallel writers must not share the same note body (especially `[!narration]`).
- Co-DM orchestrates; specialists execute.
- **Coordination detail:** [[docs/agents/coordination]] — run-guide L0/L1 vs L2, L2 allowlist, branch/preflight, wave packets, landing beacons, friction self-report. Load when multi-bot or densify; do not re-read every wake.
- **No ack-only agent wakes:** `SendToAgent` only for actionable packets, `status: done` + SHA landing beacons, or friction-reports. Do **not** ping teammates with ack-only / “got it” / thanks-only messages.

### Routine ownership

- **Ops** — fleet standing routines (healthchecks, cadence, scripts wiring).
- **Organizer** — `wiki-health` structure/MOCs/hot pass **weekdays** `34 8 * * 1-5` (not weekends; not ingest drain).
- **Linter** — lint / wiki-lint checklist.
- **dr eggbot** — CreateAgent only; do not duplicate healthchecks onto other bots.

| Bot | Owns |
|---|---|
| **Co-DM** | Continuity, prep/log, vault canon, rulings; `run-guide` **L2 only** (densify/canon) unless packet `supersedes` SP’s L0/L1 |
| **Session-Planner** | User-facing session plan + design grill; owns `run-guide` L0/L1 session run surfaces; **always** use Matt Pocock pack when matching — especially `grilling`/`grill-me` before locking plans, `grill-with-docs`/`domain-modeling` for terms, `wayfinder`/`to-spec`/`to-tickets` for large plans; packets specialists to scaffold prep/build (not mid-session Co-DM; not TotM/homebrew/ingest; dungeon layout → **Dungeon-Designer**; do not wake Co-DM to recreate primary run if SHA/path already exist — L2-only) |
| **Visualizer** | TotM / `[!narration]` write only (incl. rewrite after Skill-Creator clears a failed block) |
| **Writing-Evaluator** | Audit player-facing TotM / read-aloud; on **fail**, packet improvement advice → **Skill-Creator** |
| **Skill-Creator** | `.agent/skills/`; on Evaluator fail: implement TotM fix, **delete failed `[!narration]`**, ping **Visualizer** to rewrite, Evaluator re-audits |
| **Monster-Brewer** | Homebrew monsters (research/design/reskin/balance/audit) via `homebrew-monsters-5e`; Fantasy Statblocks when filing |
| **Item-Brewer** | Magic items via `dnd-5e-magic-item-design` |
| **Dungeon-Designer** | Owns `.agent/skills/dungeon-design/` — plan graph / factions / pressure before room prose; file location keys; leave empty `[!narration]` → **Visualizer**; monsters → **Monster-Brewer**; items → **Item-Brewer** |
| **Homebrewer** | Default general-purpose brew bot — subclasses, spells, feats, backgrounds, vehicle math (`vehicle-design`), and any brew type without a specialist yet; router: monsters → **Monster-Brewer**, items → **Item-Brewer**, dungeons → **Dungeon-Designer** (lazy specialists; do not pre-spin) |
| **Researcher** | Prior art (web); not vault canon |
| **Organizer** | Indexes/MOCs, structure doctrine, hot refresh, light inbox triage; owns `campaigns/<campaign>/vehicles/` layout — not visual template redesign (**Wiki-UI**) |
| **Ingest** | `wiki-ingest` — inbox/URL/paste → typed linked notes; hard gate: decompose → organize → dual-search `-c wiki` + `-c legacy-ss` (read-only) per named entity → file all related; no thin skim |
| **Linter** | `wiki-lint` checklist/audit (report + propose) |
| **dr eggbot** | CreateAgent / new-role design for the fleet (Team-Leader routes; does not CreateAgent) |
| **Team-Leader** | Roster health, routing/persona tweaks, collision triage across bots (not CreateAgent — eggbot; not AGENTS/scripts/qmd infra — Ops) |
| **Agentic-System-Designer** | Design of agentic systems — personas/definitions, AGENTS contracts, skill architecture, handoff graphs, routines/cadence, packet standards; short design docs in `docs/agents/` or `inbox/`; packets **Ops** / **Skill-Creator** / **Team-Leader** / **dr eggbot** to implement; owns **inbound friction reports** + standing weekday **8am PT** `daily-agentic-optimization` pass. Not day-to-day AGENTS/scripts/qmd (**Ops**), not CreateAgent (**dr eggbot**), not production `SKILL.md` (**Skill-Creator**), not roster triage (**Team-Leader**) |
| **Wiki-UI** | Obsidian UI / human readability — standardize `templates/` and note designs, vault Obsidian presentation config/patterns, enforce markdown/layout patterns Nick observes; may request **Skill-Creator** touch for `obsidian-markdown` / `run-guide` presentation gates. Not MOCs/hot (**Organizer**), not TotM prose (**Visualizer**), not campaign fiction (**Co-DM**), not AGENTS/scripts (**Ops**) |
| **Ops** | Implements fleet infra — AGENTS.md / schema wiring, scripts/qmd, standing routines/lints — from **Agentic-System-Designer** specs or Nick/TL packets; not system *design* ADRs (ASD); not template/UI readability redesign (**Wiki-UI**) |

## TotM fail loop

1. **Writing-Evaluator** fails player-facing prose → packets **Skill-Creator** with improvement advice (examples, expected vs actual, which TotM section, proposed eval).
2. **Skill-Creator** implements the skill change in `.agent/skills/theatre-of-the-mind/`, proves it, `./scripts/after-write "…" --` those skill paths.
3. **Skill-Creator** removes the failed `[!narration]` (or equivalent read-aloud) from the note — leave an empty `> [!narration] Narration` stub.
4. **Skill-Creator** pings **Visualizer** with path + constraints; Visualizer rewrites using the updated skill only.
5. **Writing-Evaluator** re-audits the new block.

Do not skip Skill-Creator and have Visualizer patch prose ad hoc after a fail.

## Layout

| Path | Purpose |
|---|---|
| `campaigns/<id>/hot.md` | Boot “now” |
| `campaigns/` · `campaigns/<id>/vehicles/` · `templates/` · `lexicon/` · `inbox/` · `attachments/` | Wiki (Obsidian: new notes → inbox, embeds → attachments; named craft → vehicles/) |
| `.obsidian/` | Human vault config + Statblocks/Leaflet (ignore workspace) |
| `.agent/skills/` | Vault / D&D fleet procedures |
| `.agents/skills/` | Matt Pocock process pack — **always when appropriate**; not qmd `skills` collection |
| `scripts/after-write` · `scripts/qmd` · `scripts/lint-statblocks` · `scripts/lint-obsidian-markdown` · `scripts/lint-fat-notes` · `scripts/lint-literal-newlines` | Agent CLI |
| `docs/agents/` | Eng triage — skip for table work |

## Region subfolder policy (proposal)

- Prefer flat typed buckets: `campaigns/<slug>/{npcs,locations,factions,...}/Note.md`.
- Record NPC/place location and region in frontmatter (for example, `location:` and `region:`), not nested folders.
- Treat region clusters such as Aruhe and Verdant Teeth as MOC/hub notes plus tags/frontmatter, rather than `locations/aruhe/...` nesting.
- Leave existing nested notes in place for now; migrate opportunistically when touching them. No mass rename or move in this pass.
