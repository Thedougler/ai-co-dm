---
name: campaign-planning
description: >-
  Campaign contract, season map, horizon, and re-planning. Use when
  starting a campaign, closing a season, choosing length or level range,
  or aligning DM and agents on architecture before prep.
---

# Campaign Planning

Establish or revise the campaign's **architecture**: the shared contract
between the DM and every agent that later creates material.

Leading words:

- **anchors** — DM commitments that survive planning revisions
- **horizon** — detail decreases with distance from current play
- **season** — a campaign-scale chapter with a function and a question

The contract lives on `kind: campaign-plan` subtype `full-campaign`.
Chapters live on `kind: season` pages. This skill owns the DM
conversation that produces those decisions.

Ambiguity about the DM's intention is a defect. Uncertainty about what
players will do is a feature.

---

## Workflow

### 1. Load

For an existing campaign, read before proposing:

- the `campaign-plan` page with subtype `full-campaign`
- `kind: season` pages whose `season_status` is `active`
- active `kind: front` pages
- PC pages and the campaign-plan Party Goals

For a new campaign, begin with the DM's stated concept.

**Complete when** every campaign-level commitment is represented or
identified as uncertain.

### 2. Grill the DM

Chain-load `grilling`. Seed the design tree from
`references/campaign-contract.md` — identity, scope, runtime, and
ending intent are the root decisions.

Between rounds, apply three frames to settled answers and bring what
they surface to the next frontier:

**Classify** — every future-facing statement is an **anchor**, a
**possibility**, or **player-owned**. A player-dependent outcome
phrased as established fact goes back to the frontier.

**Season map** — build or revise seasons using
`references/season-architecture.md`. Each season needs a narrative
function, season question, approximate range, and transition
conditions. Season decisions that need the DM's call go to the
frontier.

**Horizon** — current season at high resolution, next at medium,
later at low, endgame as silhouette. A later season with more detail
than an earlier one is a violation — bring the correction to the
frontier.

**Stress-test** — *What player decision could make this false?* Many
answers → reclassify as possibility. *If the party ignores this
season, can the campaign continue coherently?* Prefer causal
structures (*If left unchecked, faction A pressures region B*).

**Complete when** the frontier is empty — every campaign-scale
decision settled or marked provisional.

### 3. Write

Decisions feed existing kinds through their schemas:

| Decision | Target | Schema |
|---|---|---|
| Premise, promise, tone, anchors, ending intent, runtime | `campaign-plan` subtype `full-campaign` | `_system/schemas/campaign-plan/` |
| Season function, question, range, transitions | `kind: season` in `campaign/` | `_system/schemas/season/` |
| Faction fronts surfaced | `kind: front` / faction pages | `_system/schemas/front/`, `_system/schemas/faction/` |
| Named place anchor with no page | spatial kind via `writing-places` | `_system/schemas/location/` (or settlement, region, route) |
| Named dungeon complex with no page | `dungeon` via `writing-dungeons` | `_system/schemas/dungeon/` |
| Named notable object with no page | `item` via `writing-items` | `_system/schemas/item/` |
| Named conveyance with no page | `vehicle` via `writing-vehicles` | `_system/schemas/vehicle/` |

Update the existing full-campaign plan in place. Never mint a second
`full-campaign` page for one campaign.

**Complete when** an unfamiliar agent could answer: what this campaign
is, what experience it promises, how long it is meant to run, how far
scope can grow, and what — if anything — is committed about its ending.

---

## Replanning

Re-plan when the architecture changes — not on every small event.
Triggers and procedure: `references/replanning.md`.

## Quality gate

`references/quality-gate.md` before declaring planning complete.

## References

| File | Content |
|---|---|
| `references/campaign-contract.md` | Identity, scope, runtime, ending intent |
| `references/season-architecture.md` | Season construction, horizon, transitions |
| `references/replanning.md` | When and how to re-plan |
| `references/quality-gate.md` | Verification checklist |
