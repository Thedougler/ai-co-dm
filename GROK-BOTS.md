---
type: lore
campaign: none
status: active
tags: [agents]
visibility: dm
---

> [!narration] Narration
>

# Grok Bots — ai-co-dm

Fleet wiring for **Grok Bots** only. Vault schema, write rules, skills, and `type` enum live in [[AGENTS]]. Load this file when the wake is a Grok Bot (Shell, SendToAgent, roster, packets).

**Layers:** [[AGENTS]] = schema/contract · this file = host, packets, roster · [[docs/agents/coordination]] = wave / L0–L1 vs L2 detail.

## Boot

1. [[AGENTS]] + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree). Then this file.
2. **Mac host gate (fail-closed):** vault reads/writes/commits only on **macbook.lan** (`machineId` `4aa16cad-1621-4103-953d-a800b4772ba5`), cwd = vault root. If Mac is disconnected **or** ListMachines says `connected: true` but Shell/Read still fails (“temporarily unreachable” / false-connected) → **stop** after 1–2 spawn attempts, ask Nick to reconnect or open [Update Grok Bot's Computer](grokbot://app/v1/settings?id=update-computer). Do **not** retry-thrash, clone the vault onto the Linux box, use alternate checkouts, or push without `./scripts/after-write`.
3. After-write, qmd, Node 26, and markdown format stay in [[AGENTS]].

Completion: Shell is on macbook.lan with cwd = vault root, or the wake has stopped.

## Packet standard

Every specialist wake uses this packet (schema only):

`task_id` · `goal` · `allowed paths` · `branch` (required for vault writes) · `type` · `source root` (concrete path/URL or `none`) · `constraints` · `status` (`active` | `hold` | `cancelled` | `done`) · `supersedes` (prior `task_id` or `none`) · `do not re-read whole campaign`

**Friction-report packets** (`goal: friction-report`) also include:

`bot` · `symptom` · `cost` (rewrites / wrong wakes / tokens if known) · `repro` · `related paths/skills` · `proposed owner` (`Ops` | `Skill-Creator` | `Team-Leader` | `dr eggbot` | `Agentic-System-Designer`) · `status: active`

Rules:

- One specialist per wake.
- New packet for the same work must `supersedes` the prior `task_id` and set the old packet `status` to `cancelled` or `hold`.
- Parallel writers must not share the same note body (especially `[!narration]`). Sequential pass 1 then pass 2 on the same beat is allowed.
- Co-DM orchestrates; specialists execute.
- **Coordination detail:** [[docs/agents/coordination]] — run-guide L0/L1 vs L2, L2 allowlist, branch/preflight, wave packets, landing beacons, friction self-report. Load when multi-bot or densify.
- **No ack-only agent wakes:** `SendToAgent` only for actionable packets, `status: done` + SHA landing beacons, or friction-reports.

Completion: the packet names `task_id`, `allowed paths`, `branch` (if writing), and `status`.

## Session-beat fill

Session/run construction is two passes ([[AGENTS]] Write). This fleet’s pass-2 owner for `[!narration]` is **Visualizer**. TUI spawns **copy-writer** instead (that spawn lives in [[AGENTS]]).

## Routine ownership

- **Ops** — fleet standing routines (healthchecks, cadence, scripts wiring).
- **Organizer** — `wiki-health` structure/MOCs/hot pass **weekdays** `34 8 * * 1-5` (not weekends; not ingest drain).
- **Linter** — lint / wiki-lint checklist.
- **dr eggbot** — CreateAgent only; do not duplicate healthchecks onto other bots.

## Roster

| Bot | Owns |
|---|---|
| **Co-DM** | Continuity, prep/log, vault canon, rulings; `run-guide` **L2 only** (densify/canon) unless packet `supersedes` SP’s L0/L1 |
| **Session-Planner** | User-facing session plan + design grill; owns `run-guide` **pass 1** L0/L1 (mechanical cockpit + empty `[!narration]` stubs); **always** use Matt Pocock pack when matching — especially `grilling`/`grill-me` before locking plans, `grill-with-docs`/`domain-modeling` for terms, `wayfinder`/`to-spec`/`to-tickets` for large plans; packets specialists to scaffold prep/build (not mid-session Co-DM; not TotM fill/homebrew/ingest; dungeon layout → **Dungeon-Designer**; do not wake Co-DM to recreate primary run if SHA/path already exist — L2-only) |
| **Visualizer** | TotM / `[!narration]` **pass 2 fill** only (incl. rewrite after Skill-Creator clears a failed block) |
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
| **Ops** | Implements fleet infra — [[AGENTS]] / [[GROK-BOTS]] / schema wiring, scripts/qmd, standing routines/lints — from **Agentic-System-Designer** specs or Nick/TL packets; not system *design* ADRs (ASD); not template/UI readability redesign (**Wiki-UI**) |

**Brew routing:** **Homebrewer** is the default general-purpose brew bot. Dedicated brew specialists (pattern: Monster-Brewer, Item-Brewer, **Dungeon-Designer**) are spun **lazily** when a content type is frequent/important — not pre-created. Until then, that type stays on Homebrewer. Places that are **dungeons** / megadungeons → **Dungeon-Designer** (already earned). New brew specialist → **Team-Leader** routes design to **dr eggbot**, then **Ops** wires [[AGENTS]] / this file.

## TotM fail loop

1. **Writing-Evaluator** fails player-facing prose → packets **Skill-Creator** with improvement advice (examples, expected vs actual, which TotM section, proposed eval).
2. **Skill-Creator** implements the skill change in `.agent/skills/theatre-of-the-mind/`, proves it, `./scripts/after-write "…" --` those skill paths.
3. **Skill-Creator** removes the failed `[!narration]` (or equivalent read-aloud) from the note — leave an empty titled stub (`Initial Narration` on a beat; `Narration` on an owner page).
4. **Skill-Creator** pings **Visualizer** with path + constraints; Visualizer rewrites using the updated skill only.
5. **Writing-Evaluator** re-audits the new block.

Completion: the failed block is gone, the stub exists, Visualizer filled it from the updated skill, Evaluator re-audited.
