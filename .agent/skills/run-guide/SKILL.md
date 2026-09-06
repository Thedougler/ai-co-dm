---
name: run-guide
description: >-
  Assemble a table-ready, DM-only running guide for one session or adventure from existing
  session prep, beats, fronts, and owner pages. Use for "run tonight", "build a run guide",
  or a session-prep document that is hard to scan. Not beat composition, canon invention,
  player-facing prose craft, or session reconciliation.
---

# Run Guide

Build one control panel the DM can run from without hunting through the vault. The guide is a
renderer: canonical facts remain on their owner pages, while the guide supplies the walk through
those facts. A missing owner or missing prep is a diagnostic, not permission to invent canon.

## Contract

A finished guide opens with a one-screen dashboard; covers one playable session (normally 3–5
hours) in no more than 5–7 scene cards; keeps cards self-contained at the table; offers a menu
of world states and pressures rather than a plotted sequence; separates DM-only facts from
player-facing narration; and ends with reference material, surprise procedure, and unused
possibilities.

## Workflow

1. **Ground.** Read `campaigns/<campaign>/hot.md`, the relevant note from `templates/Session prep.md`,
   the latest session log, and only the linked active fronts, quests, NPCs, places, encounters,
   items, and PCs needed to interpret tonight. Use `qmd-retrieval`; do not read the whole campaign.
2. **Diagnose.** Inventory every beat and named entity. Mark each `ready`, `missing owner`,
   `missing prep`, or `proposal`; invoke the owning skill instead of inventing canon. Choose 2–3
   threads and vary register across social, exploration, danger, revelation, and aftermath.
3. **Dashboard.** Put current state, stakes, strong start, active pressure strip, overdue spotlight
   PC attached to a real pressure, optional clock/day tracker, and quick roster first. No dashboard
   image.
4. **Map.** Order 5–7 cards by likely play and label edges as world states (for example, “the gate
   is open”), never as required player decisions. Keep unused possibilities and exits last.
5. **Write cards.** Use one H2 per node and the card below; drop empty sections.

```markdown
## N. Title — [[owner|source]]
**Key:** stable table key
**Clock:** current state → advance trigger → visible sign → consequence
**When:** world-state that makes this node live
**Pressure:** what is already in motion
**Stakes:** what changes if engaged or ignored
**PC connection:** named PC and specific thread, tension, or resource
> [!narration] Narration
> Only what the table can perceive now; read or adapt.
### Immediate
- actors, exits, objects, clues, and choices available now
### Hidden
> [!secret]- DM truth, trigger, and how it can surface
### Run
- one consequential check/procedure: trigger, DC/source, success, failure, fail-forward
### If violence starts
- opening behavior, terrain, morale, retreat, and opposition goal
### If ignored
- one-step independent movement of the pressure
**Move on when:** a state changes → [[next-owner|next card]]
```

6. **Gate.** Use `theatre-of-the-mind` for every spoken change of place, first sight, or changed
   object; use `obsidian-markdown` for links/callouts; inline only compact rules or stat lines and
   link the owner for depth. Verify every card has pressure, actionable surface, PC connection,
   consequence, and a usable next state.

## DM-facing render contract

A run guide is a control panel, not a prose packet. Render a strong start, state and stakes, a clock strip, a stable key index, one real limelight angle per PC, and a parachute before the scene cards. Keep every card findable in under 30 seconds.

## Handoffs and exclusions

`session-beats` owns missing beats/charts; `encounter-prep` owns reusable or complex encounters;
`visual-aids` owns approved images; `theatre-of-the-mind` owns player-facing prose;
`session-transcript-ingest` and `reconciling-session-evidence` own post-play evidence. Do not
create a second canon copy, move Campaign Now, write player decisions/feelings, add any live table tooling
unrelated live table tooling, or turn a multi-session arc into one guide.

Finish vault writes with `./scripts/after-write "add run guide"`; a failed after-write means the
write is not complete.

## GM-prep gates

Build the guide from a 30-40 minute prep ritual, not a plot: review PC goals and
abilities, attach at least one limelight opportunity per PC, choose a strong start
from the cliffhanger or agreed plan, bank roughly ten floating secrets/clues, list
hiccups, and keep a parachute file of off-map one-shots. Render only the
skeleton needed to run tonight. Every item should be modular and recoverable in
under 30 seconds; if it is not needed at the table, leave it on the owner page.

## Table-craft gates

Add a **silence protocol** to the dashboard: present one concrete situation and
public stakes, ask what the players do, then wait. Do not fill a lull with NPC
monologue or a new beat. If the party stays silent, advance only a visible,
independent pressure and show the consequence of inaction. Preserve a limelight
opening for each PC rather than assigning one player the whole scene.

For a huge decision, state the stakes and consequence before the roll; use an
open roll when that matches the table's established convention. The audit is:
spotlight players; silence when they should drive; use PC backstory rails and
public stakes; honor tone and cinematic-but-safe framing; and give every choice
or silence an echo.

## Readability gate (before ship)

- **Hierarchy:** glance header, `Now`, scene menu, secrets/revelation, one-line strips, and cards are visually distinct; bullets beat paragraphs.
- **Progressive disclosure:** the live layer links/transcludes owners and never copies wiki essays; no unneeded detail is required to answer “what now?”
- **Throughline:** strong start → pressure → choices → consequences → next card/off-ramp is visible without jumping prep, beat index, beat files, encounters, and locations.
- **Card integrity:** every card has the universal header; `Run now` has only the five moment fields; next-card trigger and off-ramp are explicit.
- **Surface hygiene:** no densify/WIP/sync dump or multi-region archive appears in the run path; one primary run file remains findable in under 30 seconds.

## Run-surface override

The following gates override any earlier broad card example: use one primary run file; open with a
≤½-screen glance header, then `Now` for the first 5–10 minutes. Follow with a 3–6 item pressure
and exit-state scene menu, 5–10 location-agnostic secrets, a revelation strip, location/NPC
one-liners, linked combat packs, thin fronts/clocks, and treasure. This is chronological attention
order, not wiki-creation order. Ban `densify-sync`, WIP status, night-watch/specialist sync, and
multi-region dumps from the run path.

Every card uses this exact universal header:

```markdown
**Now:** what is live in this moment
**Say/show:** player-facing prompt or visible situation
**Ask/offer:** decision, routes, refusal, or retreat available now
**Opposition/pressure:** actor goal, fuse, or pressure already moving
**Resolve:** procedure and stakes before a roll or choice
**On success/partial/failure:** the three changed states
**If ignored:** one independent consequence
**Move on to:** next-card trigger, off-ramps, or end state

### Run now
### DM reference
### Optional-unused
```

After the header, no other top-level material is allowed. `Run now` contains only `Immediate`,
`Hidden`, `Run`, `If violence starts`, and `If ignored` for that moment. `DM reference` links or
transcludes owners without copying wiki essays; `Optional-unused` is collapsed or omitted. Keep
5–7 cards in chronological/likely-play order, with a mandatory next-card trigger and off-ramp on
each. Strong start content runs alone. After recompute, choose the earliest live card; if several
are live, choose strongest visible pressure, then clearest PC connection. If none is live, use the
parachute or end state—never invent a bridge scene.

## Locked L0–L2 schema

- **L0 glance (≤1 screen):** stakes; strong start that runs alone; active pressure; one real limelight per PC; parachute trigger. Keep it bullets-first.
- **L1 run:** chronological/likely-play cards with the universal header and explicit next-card/off-ramps.
- **L2 owners:** links only—locations, NPCs, encounters, fronts, rules, and lore stay on owner pages. Never copy essays into the run surface.
- **Hard caps:** one primary run file; no densify/WIP/specialist-sync material; no multi-region dump; no paragraph wall; and no Scene A information may live only under Scene C. Put shared facts at the earliest card or in an L2 owner link.
