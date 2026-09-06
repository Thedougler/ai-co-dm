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

Use `templates/Encounter.md` for reusable notes. A session-only scene that will be
run tonight is a **cockpit** (`run-guide`); emit the stock that cockpit inlines:

1. **Brief:** who, where, why now, visible pressure and fuse.
2. **Roster embeds:** `![[Monster#Statblock]]` targets, roles, morale/retreat thresholds;
   route new creatures to `homebrew-monsters-5e`. Do not copy AC/HP onto the encounter
   card and do not leave a bare `[[Monster]]` as the only combat reference.
3. **Zones:** 3–5 named bands (not a grid); moves to cover; features both sides can use.
4. **Threat clock:** named tick; 3–4 ticks; what opposition does if the party delays.
5. **Round script:** R1 position, R2 escape/pressure, R3 explode or grab; bloodied; cover-reached; minion line.
6. **Tells:** three independent player-visible clues for any conclusion the table must reach.
7. **Be ready for:** likely intents with approach, DC, success/partial/failure — not a menu to read aloud.
8. **Landing payload:** the next scene’s opening state (bodies, wet, separated, where opposition goes).
9. **If ignored:** one-step independent consequence (also tick 1 of the clock).

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

## Table-prep gate

For a session-only encounter, include at least one possible limelight angle per
PC when the fiction supports it, a strong/purposeful entry from the current
cliffhanger or agreed plan, and a short hiccup/fallback note. Keep the encounter as a modular cockpit findable in under 30 seconds; do not
script a sequence of player choices. Secrets remain DM-only and out of
`[!narration]`. Hand the finished scene to `run-guide` for field order and OFM.

## Public-stakes roll gate

When a decision is huge, declare the stakes and consequences before rolling. Use
an open roll when that matches the table's established convention, so everyone
can see what the decision risks; never hide a decisive outcome behind an
unannounced DC or secret punishment. The roll changes the situation either way,
and the players retain the choice to act, wait, bargain, or walk away.
