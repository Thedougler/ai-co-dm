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

## Handoffs and exclusions

`session-beats` owns missing beats/charts; `encounter-prep` owns reusable or complex encounters;
`visual-aids` owns approved images; `theatre-of-the-mind` owns player-facing prose;
`session-transcript-ingest` and `reconciling-session-evidence` own post-play evidence. Do not
create a second canon copy, move Campaign Now, write player decisions/feelings, add any live table tooling
unrelated live table tooling, or turn a multi-session arc into one guide.

Finish vault writes with `./scripts/after-write "add run guide"`; a failed after-write means the
write is not complete.
