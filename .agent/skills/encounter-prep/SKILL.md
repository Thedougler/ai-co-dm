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
  House **Partial** (for the Be ready for table): miss by 1–4; the player may
  take the listed cost. Full definition lives in `run-guide`.

Do not use a hidden step → damage punishment as the scene's substance. The
opposition and world continue acting during delay, travel, shopping, or rest; a
clock is only suspense when players can perceive and influence its direction.

## Output

Use `templates/Encounter.md` for reusable notes. A session-only scene that will be
run tonight is a **cockpit** (`run-guide`); emit the stock that cockpit inlines.
Field order and *procedure* live in `run-guide`; this skill supplies the stock:

1. **Brief:** who, where, why now, visible pressure and fuse.
2. **Starting state:** who starts where, in feet from cover; speeds that matter; what a move vs Dash reaches; carrier vs individual.
3. **Action cards:** opposition loop with named actions; compact default-mode numbers (AC, one attack, scatter/bloodied HP). Missing owner → `homebrew-monsters-5e`.
4. **Roster embeds:** `![[Monster#Statblock]]` targets for *combat mode*. Full fences stay on the card; do not retype the owner’s Multiattack/HP table into the brief.
5. **Zones:** 3–5 named places with distances in feet (not a grid and not abstract bands); uses Starting state’s grammar; features both sides can use.
6. **Procedure + threat clock:** one loop. Clock **is** the opposition’s turn (the old R1–R3 live as ticks). Bloodied as an HP number; cover-reached; minion line; scene dials. Failures impose listed *rulings* and do not also tick.
7. **Tells:** three independent player-visible clues for any conclusion the table must reach. Currently visible cover/routes belong in the opening, not on tick 1.
8. **Be ready for:** **Partial** = miss by 1–4 (or mark the row binary). Likely intents including **Assess the situation** when the opening is readable as “what is it hunting?” Every cell is a *ruling*. Not a menu to read aloud.
9. **Secondary objective:** if “save X” is listed, beats required, ignore outcome, later consequence.
10. **Landing payload:** the next scene’s opening state (bodies, wet, separated, where opposition goes).
11. **If ignored:** one-step independent consequence (tick 1 of the clock after a freeze round).
12. **Time:** 30-minute budget and *cut lines* (If behind / If ahead). Unbounded travel is the next beat, not this stock.

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
