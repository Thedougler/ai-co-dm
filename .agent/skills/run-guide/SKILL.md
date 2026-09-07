---
name: run-guide
description: >-
  Assemble a table-ready, DM-only cockpit for one session or one 30-minute beat
  from existing prep and owner pages. Use for "run tonight", "build a run guide",
  or a session-prep document that is hard to scan. Pass 1 writes the mechanical
  card plus empty titled [!narration] stubs (Initial Narration mandatory). Pass 2
  is theatre-of-the-mind fill. Not beat composition, canon invention, or session
  reconciliation.
---

# Run Guide

Build one **cockpit** the DM can run from Reading view without hunting the vault.
Owners stay canon. Full statblocks **embed** at the bottom (the DM scrolls).
Scene *procedure*, zones, tells, action cards, and landing are written here.
A missing owner is a diagnostic, not permission to invent canon or math.

**Two passes.** Pass 1 writes the mechanical card and **empty titled `[!narration]` stubs**. Pass 2 (`theatre-of-the-mind`; TUI **copy-writer**, Grok Bots **Visualizer**) fills every stub. Pass 1 does not write player-facing prose.

**Sole-authority:** a tired DM at minute 90 can roll and speak this slice
without opening another note. Every default-mode *ruling* lives on the card.
Combat-mode owners are heading-embedded below. A bare `[[Monster]]` with no
embed and no action-card numbers fails.

One opposition want, said once. One *procedure*, named. Nothing restated later
as a second framework.

A DM-facing line stays if Nick will use it this slice to **place** someone,
**roll** something, or **speak**. Distances, speeds, named *rulings*, the
opposition want, and the spoken block earn their keep. 5e defaults, schema
commentary, and notes to the writer stay in this skill.

## Workflow

1. **Ground.** Read `hot.md`, tonight's session prep, the latest log, and only
   the linked owners needed to interpret this slice. `qmd-retrieval`. Completion:
   every named actor, place, and item has an owner path or is marked unknown.

2. **Diagnose.** Mark each beat `ready`, `missing owner`, `missing prep`, or
   `proposal`. Missing stock → owning skill (`encounter-prep`, `session-beats`).
   Empty `[!narration]` stubs are expected on this pass; TotM fill is pass 2.
   A creature you will roll that has no owner → `homebrew-monsters-5e`. Choose
   live beats. Completion: no invented canon.

3. **Write one cockpit per live beat** in play order (below). Delete unused
   mechanical sections. Place **empty titled `[!narration]` stubs** at every
   slot in **TotM stubs**. Embed an existing owner identity image
   (`![[attachments/…]]`) when the owner page already lists one; do not mint
   art. Completion: every mechanical field this slice will use is present;
   every required stub exists and is empty; clock and Be ready for are one
   *procedure*, not two escalation tracks.

4. **Table gate.** Reading view is one downward pass of the Cockpit table.
   Completion: every item in **Table gate** below holds for this pass.

5. **File.** `obsidian-markdown` (wikilinks, `session-surface`, real newlines).
   The only callout on the card is `[!narration]`. Pass 2 fills stubs via TotM.
   `./scripts/after-write` on named paths.

## Cockpit (the only card)

Frontmatter: `type: session-prep` (or `encounter`), `cssclasses: [session-surface]`,
`visibility: dm`.

| Order | Field | Shape |
|---|---|---|
| 1 | **Scene ends when** | Heading is `## Scene ends when`. First line is the end condition. Then the 30-minute budget and **If behind** / **If ahead** *cut lines*. |
| 2 | **Glance** | `## L0 · Glance` bullets: stakes, goal, exit, danger, Silence, **situation magnets** (who is high, loud, or obvious *now*). Not a named-PC roster and not how they already move. |
| 3 | **Now** | One paragraph. Who starts where, in **feet**. Speeds that matter. What a move vs Dash reaches. Current situation once. No separate Starting state heading. |
| 4 | **DM truth** | Heading `## DM truth` (or `### DM truth` under Now). Opposition want, one sentence. **Before** Initial Narration. Not a `[!secret]` callout. |
| 5 | **Action cards** | Predator loop and compact numbers you will roll in default mode (AC, one attack, scatter/bloodied thresholds). Next to truth, not under embeds. Named owner actions (`Talon Grab`, `Sickle Claw`), not nicknames (`rake`). |
| 6 | **Initial Narration** | Empty `> [!narration] Initial Narration` stub on pass 1. Pass 2 fills *scene-setting* (see Scene-setting). If the owner already has an identity image, embed `![[attachments/…]]` beside this block. |
| 7 | **Procedure** | Heading `## Procedure`. Name *escape mode* or *combat mode*. The loop for this slice, once. Not a `[!mechanic]` callout. |
| 8 | **Zones** | Table: place \| distance in feet \| cover. Same distances as Now. No Narration column. Immediately after the table: one empty `> [!narration] {Place}` stub per row. |
| 9 | **Be ready for** | **Partial** defined once above the table (see Partial). Table: intent \| approach (skill) \| DC \| success \| partial \| failure. Name the creature, item, and place in every cell. Every cell is a *ruling*. Include **Assess the situation** when the opening could be read as “what is it hunting / doing?” Not a menu to read aloud. |
| 10 | **Threat clock** | Heading `## Threat clock`. Table: tick \| what happens. The predators’ turn. Named ticks. 3–4 ticks. Bloodied (write the HP number), cover-reached, minions, scene dials live **in this block**. Immediately after the table: one empty `> [!narration] Tick {n}` stub per tick. |
| 11 | **Secondary objective** | If Be ready for lists “save / distract X,” one line: beats required, ignore outcome, later consequence. Omit when there is no second objective. |
| 12 | **Landing** | Next scene’s opening state: where bodies are in **feet**, RAW conditions (Prone), damage already applied. Movement closes gaps. Empty `> [!narration] Landing` plus one titled stub per named variant (Scattered, Crash-landed). |
| 13 | **Exit narration** | Only when the **next** cockpit is already on this file. Empty `> [!narration] Exit` on pass 1. Spoken transition on pass 2. No “What do you do?” Omit until that beat is ready. |
| 14 | **Roster embeds** | `![[Monster#Statblock]]` for opposition you will roll in *combat mode*. Keep the full fences; the DM scrolls. After each embed: empty `> [!narration] {Creature}`. Item headings only if this slice spends charges or the item is the pressure. |
| 15 | **Travel** | Default: omit. This-beat only when the slice *is* the travel, and then one specific complication with every number on this card plus a failure endpoint. |
| 16 | **Backup** | Extra wikilinks only. |

There is no peer **Round script**. Clock ticks *are* the old R1–R3. The only `> [!` on the card is `[!narration]`.

## TotM stubs

Pass 1 places these empty titled callouts. Pass 2 fills all of them. The DM may skip a block at the table; construction may not omit a slot.

- `Initial Narration` — mandatory. After action cards, before Procedure.
- `{Place}` — one per zone row, immediately after the Zones table.
- `Tick {n}` — one per clock tick, immediately after the Threat clock table.
- `Landing` — success-condition spoken state. Plus one stub per named landing variant.
- `{Creature}` — after each combat-mode roster embed. Situated look for this scene, not the owner-page cold portrait.
- `Exit` — only when the next cockpit is already on this file.

Do not put `> [!narration]` inside a table cell. Obsidian does not render callouts there.

## Procedure

Name the mode. Default for a hunt/chase/escape slice is *escape mode*:

1. Players declare and resolve turns, checks, and movement as normal.
2. Failures impose the Be ready for *ruling* only. They never advance the clock.
3. After everyone has acted, if anyone remains exposed (the card’s magnets), advance the threat clock **once** and resolve that tick. Freeze or “we watch” still ticks once at end of round, not per failed check.
4. Several failed checks in one round still produce **one** tick.

*Combat mode:* if the party abandons escape and commits to killing the opposition, stop the clock and run the embedded statblocks. Write that switch on the card.

A skill-challenge or social slice uses the same rule: one clock, filled by the card’s named trigger, never by both a table failure *and* a separate tick for the same action.

## Partial

Define once above Be ready for:

- **Success:** meet or exceed the DC.
- **Partial:** miss by 1–4; the player may accomplish the intent at the listed cost.
- **Failure:** miss by 5 or more, or reject the partial cost.

A row may say “binary — no partial” when the fiction has no middle.

## Ruling

A *ruling* is a 5.5e (2024) action, movement in feet, opportunity attack, named condition, ability check, save, or damage; or a **named feature already on a vault owner**. This vault’s **Partial** (miss by 1–4) is house, written once above the table.

5.5e actions: Attack, Dash, Disengage, Dodge, Help, Hide, Influence, Magic, Ready, Search, Study, Utilize. Conditions include Prone, Grappled, Restrained.

An evocative label (`scattered`, `crash-landed`) is a name for a *ruling* already stated (lands 30 feet away; 2d6 bludgeoning and Prone). New action types, conditions, or resolution systems are a brew-skill job (`homebrew-monsters-5e`), not a line on this card.

## Now (positions)

Write where people are, the distances in **feet**, the speeds that matter, and what a move or Dash reaches from here, in the Now paragraph. Reuse those distances in the zone table. Do not invent a second movement model later. Named places (High air, grass, beach) label those distances; they do not replace them. There is no separate Starting state heading.

## Scene-setting (Initial Narration)

`theatre-of-the-mind` owns the prose. This skill owns **what must already be in the spoken block** before the question (Angry GM: goal, obstacle, tools; Alexandrian: all immediately perceived facts).

Pass 1 leaves `> [!narration] Initial Narration` empty. Pass 2 fills a complete *scene-setting* block: currently visible cover, routes, relative position, who is being hunted, imminent action, drawable appearance, and at least one non-sight sense, joined as flowing spoken prose. Those facts are not a later clock tick and not a DM catalog under the callout. If the owner already has an identity image, embed it beside the block; the photo does not replace the spoken look.

Stop at the reaction point after those facts, then “What do you do?” Typical filled length is two to four short spoken paragraphs.

## Time and cut lines

A 30-minute beat states expected minutes and two *cut lines* (Sly Flourish: Watch the Time):

- **If behind:** what to skip so the scene still ends on its **Scene ends when**.
- **If ahead:** one extra complication **only if** that complication is fully inlined on this card.

A hook with a cover endpoint does not also run unbounded travel. “Smoke to camp” belongs on the next cockpit.

## Action cards and embeds

Put the operational loop (Dive → Talon Grab → Haul Aloft → Sickle Claw) and default-mode compact numbers next to DM truth.

Keep full `![[Name#Statblock]]` (optional `![[Name#At the table]]`) at the bottom. Do not retype an owner’s full Multiattack/HP table into prose above the embed. Do not embed the ecology essay. How the party already moves (flight, swim, mounts, boats) is not roster.

If the owner lacks `## Statblock`, add that heading above the fence on the owner (no math rewrite), then embed. If no owner exists for a creature you will roll, stop and packet `homebrew-monsters-5e`.

## Be ready for and the clock

The spoken Initial Narration shows the situation and ends on the question, then wait. Anticipated intents live in the table so unforeseen approaches can still be ruled from want + zones + clock (intention / approach).

Clock ticks are predator **actions** (what fills the clock, what happens, what completion does — Sly Flourish progress clocks). Visible geography the viewpoint already has does not wait for tick 1. Each tick has an empty `Tick {n}` stub on pass 1 for the spoken combat-update if that tick fires.

**Tells.** Any conclusion the table must be able to reach gets three independent visible tells in Initial Narration or Now (Three Clue Rule).

**Exit narration.** Player-facing handoff into the next live card. Empty stub on pass 1 only when that card exists on this file. It does not ask what they do.

**Travel.** Omit on a 30-minute hook. When this slice *is* travel: one complication, every number on this card, a failure endpoint. Wikilink further tables only as backup, not as required procedure.

## Table gate

Completion — all of these hold, or the draft is not done:

- One named *procedure*; Be ready for failures do not also tick the clock.
- **Partial** defined once (or the table is binary on purpose).
- `## Scene ends when` is the first heading; the end condition is the first line.
- Time budget + both *cut lines* sit under that heading.
- Now states positions and speeds in feet; the zone table uses those distances.
- DM truth is a heading before Initial Narration, not a `[!secret]` callout.
- Pass 1: empty titled stubs at every TotM slot; no player-facing prose in those bodies.
- Pass 2: Initial Narration contains currently visible cover, routes, relative position, imminent action, drawable look, and a non-sight sense, then the question. Every stub is filled.
- Action cards sit with DM truth; clock holds bloodied as a number, cover-reached, minions, dials.
- Every consequence is a *ruling* (see Ruling).
- Secondary intent, if listed, has beats / ignore / later consequence.
- Combat-mode owners heading-embedded below. Default-mode rolls have numbers on the action cards.
- Existing owner identity image embedded when the owner page already lists one.
- Travel omitted, or one inlined complication with a failure endpoint.
- One cockpit: Glance once, no second Run-now, no separate Ask callout, no Scene menu, no peer Round script.
- The only `> [!` on the card is `[!narration]`. No callouts inside table cells.
- Every DM-facing line is used this slice to place, roll, or speak.

## Whole-session branch

When rendering a **full** 3–5 hour night (not a single 30-minute beat), open with
Glance for the first live card, then 5–7 cockpits in likely-play order. Put a
floating secrets bank, parachute, and treasure **after** the live cards, as
bullets that link owners — not a second card schema. Still no densify/WIP dump.
Still no Scene menu that is only prep-management.

## Handoffs

`session-beats` owns missing beat charts and *cut line* pacing. `encounter-prep`
owns reusable encounter stock that fits this cockpit. This skill owns pass 1
(mechanical card + empty stubs). `theatre-of-the-mind` owns pass 2 fill (TUI
copy-writer; Grok Bots Visualizer). `visual-aids` assembles an already-listed
owner image onto the card. Monster math → `homebrew-monsters-5e`. Do not invent
canon, copy owner essays, or write player decisions.

Finish with `./scripts/after-write "add run guide" -- path1 [path2…]`.

## Attribution

Cockpit order and sole-authority: Colville prep; Arcane Library (write for the DM).
*Procedure* / one adjudication cycle, *scene-setting*: Angry GM (Inviting PCs to Act; Art of Narration).
Intention/approach: Angry GM; Alexandrian *Art of Rulings*.
Information sequence / boxed completeness: Alexandrian *Art of the Key*.
Progress clocks and *cut lines*: Mike Shea / Sly Flourish (CC BY-NC) — Watch the Time; Harper clocks via Shea.
Action-oriented monsters: Colville via Sly Flourish (CC BY-NC).
Tells: Alexandrian Three Clue Rule. Zones: Runehammer. Strong start / silence: Lazy DM.
No WotC paste.
