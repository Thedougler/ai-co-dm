---
name: encounter-prep
description: >-
  Design a runnable combat, social, exploration, skill-challenge, or hybrid encounter grounded
  in the party, location, opposition, and desired stakes. Use for encounter design, fight balance,
  tense obstacle scenes, and travel-event handoffs. Not pasted rules tables, statblock authoring,
  reconciliation, or a scripted sequence of player choices.
---

# Encounter Prep

An encounter is a situation with an active problem, opposition or obstacle with its own agenda, a
meaningful choice surface, and consequences. Calibrate to the actual party and current rules;
never paste proprietary rules text or copyrighted challenge tables.

## Ground and type

Read `hot.md`, session prep, location, front/quest, PC hooks, and existing opposition owners. Use
`qmd-retrieval` for party level, resources, tactics, and constraints. Classify before writing:
combat (initiative/tactics), social (leverage/concessions), skill challenge (obstacle and progress),
or hybrid (name the primary mode). If PC connection, place, opposition, or difficulty is unknown
and consequential, ask rather than guess.

Record: `primary_goal` (what changes, not merely win), `consistent_method` (opposition behavior),
`active_problem` (already in motion), `performance_hooks` (observable tell and handle),
`link_of_relevance` (named PC and connection), and `terrain_shift` (timed escalation).

## Suspense gate

Do not confuse the modes: **mystery** hides information for investigation;
**surprise** withholds the bomb until it lands; **suspense** reveals that a bad
thing is already moving, then makes choices matter under a fuse. For sustained
pressure, default to suspense rather than an opaque mystery or a one-beat
surprise.

Before the scene is ready, answer:

- What bad thing is already in motion, and how do players learn early enough?
- What is the fuse; what worsens if they do nothing?
- What remains unknown (hide the clean answer, not the problem)?
- What real cost attaches to each route: time, HP, spells, relationship, gear,
  future leverage, or moral position?
- Are there at least three materially different response paths?
- What does partial success change, and will an unplanned clever solution be
  accepted? **Always yes**; adjudicate from the fiction and let opposition adapt.

Do not use a hidden step → damage punishment as the scene's substance. The
opposition and world continue acting during delay, travel, shopping, or rest; a
clock is only suspense when players can perceive and influence its direction.

## Output

Use `templates/Encounter.md` for reusable notes; inline this structure in session prep/run guides
for one-time scenes:

1. **Brief:** who, where, why now, visible pressure and fuse.
2. **Roster:** existing statblock links, roles, tactics, morale, and retreat/negotiation thresholds;
   route new creatures to `homebrew-monsters-5e`.
3. **Terrain:** 2–3 actionable features available to more than one side.
4. **Opening/escalation:** what opposition does before and after engagement; show the fuse advancing on delay.
5. **Pressure valve:** party weakness that creates tension without removing agency.
6. **Advantage window:** party strength that can matter if noticed or exploited.
7. **Resolution:** checks/DC source, information, success, failure, and fail-forward.
8. **Stakes:** specific durable changes for broad outcomes.
9. **If ignored/bypassed:** one-step independent consequence.

For combat compare action economy, burst/sustained damage, control, terrain, escape, and party
resources against the actual group. Cite the current public rules source or approved benchmark;
summarize only needed procedure and mark untested tuning. Never include a generic CR table or
WotC book paste.

## Sandbox and filing

Opposition has goals that predate the party. Support multiple approaches and at least one
non-combat resolution where fiction permits; do not write PC decisions, feelings, or success. For
hidden conclusions, seed three distinct clues, at least two reachable without combat. Reusable/
complex encounters live under the campaign's established encounters bucket; session-only scenes
stay inline. Use `sandbox-narrative` for an anti-railroading pass and `obsidian-markdown` for
structure. Finish writes with `./scripts/after-write "add encounter procedure"`.

`npc-design`, `place-design`, `dungeon-design`, `dnd-5e-magic-item-design`, `run-guide`, and
`homebrew-monsters-5e` own their respective handoffs.
