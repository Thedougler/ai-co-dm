---
name: run-guide
description: >-
  Assemble a table-ready, DM-only cockpit for one session or one 30-minute beat
  from existing prep and owner pages. Use for "run tonight", "build a run guide",
  or a session-prep document that is hard to scan. Not beat composition, canon
  invention, player-facing prose craft, or session reconciliation.
---

# Run Guide

Build one **cockpit** the DM can run from Reading view without hunting the vault
and without maintaining a second copy of monster math. Owners stay canon.
Combat and item numbers **embed**. Scene procedure (clock, zones, tells, landing)
is written here. A missing owner is a diagnostic, not permission to invent canon.

**Sole-authority:** a tired DM at minute 90 can run this slice without opening
another note. A bare `[[Bloodhawk]]` with no embed fails. Copied AC/HP tables fail.

## Workflow

1. **Ground.** Read `hot.md`, tonight's session prep, the latest log, and only
   the linked owners needed to interpret this slice. `qmd-retrieval`. Completion:
   every named actor, place, and item has an owner path or is marked unknown.

2. **Diagnose.** Mark each beat `ready`, `missing owner`, `missing prep`, or
   `proposal`. Missing stock → owning skill (`encounter-prep`, `session-beats`,
   `theatre-of-the-mind`). Choose live beats. Completion: no invented canon.

3. **Write one cockpit per live beat** in play order (below). Delete empty
   sections. One opposition want, said once. Completion: every field that this
   slice will use is present; nothing is restated later as a second framework.

4. **Table gate.** Reading view shows Glance, narration (question inside that
   block), Be ready for, clock, zones, round script, **embeds**, landing.
   Silence is on the dashboard. Completion: no click-away to fight; no dual
   Now/Run-now card; no Scene menu on a 30-minute card; no copied stat numbers;
   no separate Ask callout.

5. **File.** `obsidian-markdown` (wikilinks, open callouts, `session-surface`,
   real newlines). TotM for `[!narration]`. `./scripts/after-write` on named paths.

## Cockpit (the only card)

Frontmatter: `type: session-prep` (or `encounter`), `cssclasses: [session-surface]`,
`visibility: dm`.

| Order | Field | Shape |
|---|---|---|
| 1 | **Glance** | `## L0 · Glance` bullets: stakes, goal, exit, danger, Silence, **situation magnets** (airborne and visible, spectacle). Not a named-PC roster. |
| 2 | **Now** | One paragraph. Current situation once. |
| 3 | **Read aloud** | Open `> [!narration] Narration`. Three **tells** as perceivable facts. End the block on the table question (“What do you do?”). No separate Ask callout. |
| 4 | **Be ready for** | Table: intent \| approach (skill) \| DC \| success \| partial \| failure. Name the creature, item, and place in every cell (`the adult bloodhawk`, `the Great Crown Squid`, `the crew`). Pronouns (`her`, `flier`, `they`) fail. DM-private. Not a menu to read. |
| 5 | **Threat clock** | Table inside open `> [!mechanic] Threat clock`. Name the tick (round / hesitation / exposed flier). 3–4 ticks. |
| 6 | **Zones** | Table: band \| what’s there \| moves to cover. |
| 7 | **Round script** | Bullets: R1 position, R2 escape/pressure, R3 explode or grab; bloodied; cover-reached; minions. |
| 8 | **Roster embeds** | `![[Monster#Statblock]]` and item headings. Scene dials as bullets beside the embed. |
| 9 | **Landing payload** | Open `> [!success] Landing` plus `^landing` so the next card can `![[this-note#^landing]]`. |
| 10 | **Backup** | Extra wikilinks only. Combat owners already embedded. |

One open `> [!secret] DM truth` for the opposition want. Cover rules, bloodied, and
morale sit as bullets next to the embed.

**Narration vs Be ready for.** The spoken block shows the situation and ends on
the question, then wait. Anticipated intents live in the table so unforeseen
approaches can still be ruled from want + zones + clock (intention / approach).
Clock, zone, and Be ready for cells are specific and named, not terse pronouns.

**Tells.** Any conclusion the table must be able to reach gets three independent
visible tells in narration or Now (Three Clue Rule).

**Landing.** Wet, prone, separated, hidden, damage, sight of ship, where the
opposition goes — the next scene’s opening state, not a place name.

## Embed roster

- Tight heading embed: `![[Bloodhawk#Statblock]]`. Optional `![[Bloodhawk#At the table]]` for tactic/tell.
- Item limits: `![[Flying Boots#Charges / limits]]` or the whole note when that note is already short.
- Do not `![[Bloodhawk]]` the full ecology essay.
- Do not copy AC, HP, +hit, damage, or grab DCs onto the run card.
- Scene-only dials (easy Multiattack, young count, this slice’s cover rule) are bullets beside the embed.
- If the owner lacks `## Statblock`, add that heading above the fence on the owner (no math rewrite), then embed.

`theatre-of-the-mind` owns narration. `obsidian-markdown` owns embed syntax and
open callouts. This skill owns field order.

## Whole-session branch

When rendering a **full** 3–5 hour night (not a single 30-minute beat), open with
Glance for the first live card, then 5–7 cockpits in likely-play order. Put a
floating secrets bank, parachute, and treasure **after** the live cards, as
bullets that link owners — not a second card schema. Still no densify/WIP dump.
Still no Scene menu that is only prep-management.

## Handoffs

`session-beats` owns missing beat charts. `encounter-prep` owns reusable encounter
stock (clock, zones, round script, embed targets). TotM owns player-facing prose.
Do not invent canon, copy owner essays, or write player decisions.

Finish with `./scripts/after-write "add run guide" -- path1 [path2…]`.

## Attribution

Cockpit order and sole-authority: Colville prep; Arcane Library (write for the DM).
Intention/approach: Angry GM; Alexandrian *Art of Rulings*. Round script: Colville
action-oriented monsters via Sly Flourish (CC BY-NC). Tells: Alexandrian Three
Clue Rule. Zones: Runehammer. Strong start / silence: Lazy DM. No WotC paste.
