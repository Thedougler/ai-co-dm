---
type: lore
campaign: none
status: active
tags: [agents, coordination]
visibility: dm
---

> [!narration] Narration

# Fleet coordination (run-guide layers, waves, friction)

Canonical detail for Grok Bot handoffs. **AGENTS.md** keeps thin pointers + packet schema only — load this when running a multi-bot wave, L2 densify, or friction-report.

- **Session run surfaces (`run-guide`):** **Session-Planner** owns **L0+L1** render (dashboard + chrono cards / primary run + beat headers). **Co-DM** owns **L2 only** (canon/owner pages, densify, continuity) unless SP is unavailable and a packet explicitly `supersedes` SP’s L0/L1 `task_id`. When L0/L1 already exists, any follow-on packet MUST include `existing SHA` + `primary run path` and state **Co-DM = L2-only**. Do **not** wake Co-DM to create/re-render the primary run file if that path/SHA is already on the branch. Never packet both bots for L0/L1 on the same run-guide paths in one wave — if both must work: SP = L0/L1 paths, Co-DM = L2 owner paths only, separate `task_id`s.
- **L2 densify allowlist:** Co-DM L2 packets for an existing run MUST give an explicit `allowed paths` list. Default **ban** (unless named): `**/Session * run.md`, `**/Session * Beat *`, location room keys. Prefer `encounters/` + prep inventory / owner pages named in the packet only.
- **Branch assert:** vault-write packets include `branch:`. Preflight: `git rev-parse --abbrev-ref HEAD` must match or **STOP** + friction-report. `./scripts/after-write` refuses when `AI_CO_DM_REQUIRE_BRANCH` (or `--require-branch`) ≠ HEAD.
- **Preflight (every specialist):** before creating a primary path, check packet `existing SHA` / git tip for that path; if present → do not recreate; L2-only or stop + friction-report.

### Wave coordination

When **≥2 bots** touch one goal, use a **wave packet** (schema only):

`wave_id` · `goal` · `stages[]` each `{stage_id, owner, allowed paths, depends_on, status}` · `existing SHA` · `primary path` · `branch` · `hold` list

Rules:
- **One wave owner per goal:** **Team-Leader** = fleet waves; **Session-Planner** = session-prep waves; **Co-DM** = mid-session/canon waves. Others execute stages — they do **not** open parallel waves for the same goal.
- **Stage gate:** do not packet stage N+1 until stage N reports `status: done` + SHA to the wave owner. Wave owner alone wakes the next owner (incl. Co-DM L2 after SP L0/L1 done+SHA, with branch + allowlist).
- **Landing beacon (required on done):** packet wave owner with `task_id` · `status: done` · `SHA` · `paths touched` · `next stage ready|blocked`.
- Keeps: one specialist per wake, supersedes, no parallel same note body, SP L0+L1 / Co-DM L2.

### Friction self-report (all bots)

When a specialist hits **repeated** friction — token waste, wrong-owner wakes, missing skill gates, fuzzy handoffs, or process that forces rework — **immediately** packet **Agentic-System-Designer** (`9f12ff5d-62f0-4e19-a213-e4f2f284b621`). Do **not** wait for the weekday optimization pass. Do **not** silently work around for long.

ASD triages immediately → design fix → packets implementers (**Ops** AGENTS/scripts · **Skill-Creator** skills · **Team-Leader** personas · **dr eggbot** CreateAgent).

