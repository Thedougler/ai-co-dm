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
opposition want, and the spoken block earn their keep. House Partial, 5e
defaults, schema commentary, and notes to the writer stay in this skill.

## Workflow

1. **Ground.** Read `hot.md`, tonight's session prep, the latest log, and only
   the linked owners needed to interpret this slice. `qmd-retrieval`. Completion:
   every named actor, place, and item has an owner path or is marked unknown.

2. **Diagnose.** Mark each beat `ready`, `missing owner`, `missing prep`, or
   `proposal`. Missing mechanical stock → owning skill (`encounter-prep`,
   `session-beats`). Missing player-visible scene stock → owning page or craft
   skill before TotM fill. Empty `[!narration]` stubs are expected on this pass;
   TotM fill is pass 2. A creature you will roll that has no owner →
   `homebrew-monsters-5e`. Choose live beats. Completion: no invented canon and
   every actionable hazard, loot, monster, route, clue, lore sign, and world
   detail has an owner or is marked unknown.

3. **Write one cockpit per live beat** in play order (below). Delete unused
   mechanical sections. Place **empty titled `[!narration]` stubs** at every
   slot in **TotM stubs**. Embed an existing owner identity image
   (`![[attachments/…]]`) when the owner page already lists one; do not mint
   art. Completion: every mechanical field this slice will use is present;
   every required stub exists and is empty; clock and Be ready for are one
   *procedure*, not two escalation tracks.

4. **Table gate.** Reading view is one downward pass of the Cockpit table.
   Completion: every item in **Table gate** below holds for this pass.

5. **File.** `obsidian-markdown` (wikilinks, `session-surface`, real newlines, at-table scan).
   The only callout on the card is `[!narration]`. Pass 2 fills stubs via TotM.
   `./scripts/after-write` on named paths.

## Cockpit (the only card)

Frontmatter: `type: session-prep` (or `encounter`), `cssclasses: [session-surface]`,
`visibility: dm`.

| Order | Field | Shape |
|---|---|---|
| 1 | **Scene ends when** | Heading is `## Scene ends when`. First line is the end condition. Then the 30-minute budget. Then **If behind:** and **If ahead:** as bold-label paragraphs (not bullets). |
| 2 | **Glance** | `## L0 · Glance` bullets: stakes, goal, exit, danger, Silence, **situation magnets** (who is high, loud, or obvious *now*). Not a named-PC roster and not how they already move. |
| 3 | **Now** | One paragraph. Who starts where, in **feet**. Speeds that matter. What a move vs Dash reaches. Current situation once. No separate Starting state heading. |
| 4 | **DM truth** | Heading `## DM truth`. Opposition want, one sentence. `**Unrevealed:**` marks hidden intent the players have not yet seen. **Before** Initial Narration. Not a `[!secret]` callout. |
| 5 | **Action cards** | Predator loop and compact numbers you will roll in default mode (AC, one attack, scatter/bloodied thresholds). Next to truth, not under embeds. Named owner actions (`Talon Grab`, `Sickle Claw`), not nicknames (`rake`). |
| 6 | **Initial Narration** | Empty `> [!narration] Initial Narration` stub on pass 1. Pass 2 fills *scene-setting* (see Scene-setting), including accessible scene stock. If the owner already has an identity image, embed `![[attachments/…]]` beside this block. |
| 7 | **Battlemap** | Heading `## Battlemap`. Embed existing battlemaps and creature identity images from `attachments/`. When a battlemap exists, use the shared compass: top north, right east, bottom south, left west. Omit if none exist. Between Initial Narration and Procedure. |
| 8 | **Procedure** | Heading `## Procedure`. Name *escape mode* or *combat mode*. This slice’s clock trigger and the combat-mode switch, once. Not 5e turn order. Not a `[!mechanic]` callout. |
| 9 | **Zones** | Table: place \| distance in feet \| cover \| narration. Same distances as Now. Each row names decision-useful scene stock in that zone. The **Narration** column carries italic spoken prose for that zone (not a callout). When the Narration column is absent, one empty `> [!narration] {Place}` stub per row after the table instead. |
| 10 | **Be ready for** | Table: intent \| approach (skill) \| DC \| success \| partial \| failure. Approach is **Ability (Skill)**. DC column is `` `DC 14` ``. Dice and damage in cells are inline code. Applied conditions are **bold**. Name the creature, item, and place in every cell. Every cell is a *ruling*. Include **Assess the situation** when the opening could be read as “what is it hunting / doing?” Not a menu to read aloud. No Partial definition on the card. Body-copy checks outside this table use the at-table grammar in `obsidian-markdown`. |
| 11 | **Threat clock** | Heading `## Threat clock`. Table: tick \| what happens \| narration. The predators’ turn or pressure changes. Named ticks. 3–4 ticks. Each tick states what newly becomes visible, usable, threatened, blocked, or changed. The **Narration** column carries italic spoken prose for that tick. When the column is absent, one empty `> [!narration] Tick {n}` stub per tick after the table instead. Bloodied (write the HP number), cover-reached, scene dials live as paragraphs **after** the table. |
| 12 | **Secondary objective** | Heading `## Secondary objective`. If Be ready for lists “save / distract X,” one paragraph: beats required, ignore outcome, later consequence. Omit when there is no second objective. |
| 13 | **Landing** | Heading `## Landing`. Next scene’s opening state: where bodies are in **feet**, RAW conditions (Prone), damage already applied. Movement closes gaps. Empty `> [!narration] Landing` plus one titled stub per named variant (Scattered, Crash-landed). |
| 14 | **Exit narration** | Only when the **next** cockpit is already on this file. Empty `> [!narration] Exit` on pass 1. Spoken transition on pass 2. No “What do you do?” Omit until that beat is ready. |
| 15 | **Roster embeds** | Heading `## Roster`. `![[Monster#Statblock]]` for opposition you will roll in *combat mode*. Keep the full fences; the DM scrolls. After each embed: empty `> [!narration] {Creature}`. Item headings only if this slice spends charges or the item is the pressure. |
| 16 | **Travel** | Default: omit. This-beat only when the slice *is* the travel, and then one specific complication with every number on this card plus a failure endpoint. |
| 17 | **Backup** | Heading `## Backup`. Extra wikilinks only. |

There is no peer **Round script**. Clock ticks *are* the old R1–R3. The only `> [!` on the card is `[!narration]`.

## TotM stubs

Pass 1 places all player-facing prose slots. Pass 2 fills every one. The DM may skip a block at the table; construction may not omit a slot.

**Callout stubs** (empty titled `> [!narration]` blocks):
- `Initial Narration` — mandatory. After action cards, before Battlemap.
- `Landing` — success-condition spoken state. Plus one stub per named landing variant.
- `{Creature}` — after each combat-mode roster embed. Situated look for this scene, not the owner-page cold portrait.
- `Exit` — only when the next cockpit is already on this file.

**Table Narration columns** (italic prose in the cell, not a callout):
- Zones table — one cell per zone row. Replaces `{Place}` stubs.
- Threat clock table — one cell per tick row. Replaces `Tick {n}` stubs.

When a table has no Narration column, use callout stubs after the table instead: `{Place}` per zone, `Tick {n}` per tick.

Do not put `> [!narration]` inside a table cell. Obsidian does not render callouts there. The Narration column uses italic prose.

## Scene stock

Before pass 2, make the card able to answer follow-up questions without opening
the vault cold. Record actionable player-visible stock in Now, Zones, Be ready
for, Threat clock, Landing, or Backup as appropriate: hazards, loot, monsters,
NPCs, vehicles, doors, tracks, trails, tools, food, water, clues, inscriptions,
map features, weather, light, sound, smell, and world-building signs.

Completion: every stock item that belongs in the spoken first look has an access
channel, an owner or local ruling, and a player use. TotM weaves those items
into narration by relationship and affordance. The run card does not outsource
required first-look details to Backup links, later clock ticks, or the DM's
memory.

## Resolution cockpit

When the beat is a Resolution (*aftermath*), the cockpit shrinks. Keep: Scene
ends when, Glance, Now, DM truth, Initial Narration, Landing. Cut: Action
cards, Procedure, Threat clock, Roster embeds — the opposition is resolved.

Keep Zones when the aftermath has spatial meaning (a battlefield to search, a
collapsed structure to navigate). Keep Be ready for when players will
investigate, negotiate, or make consequential choices in the aftermath.

DM truth carries the world state after the Climax and any unrevealed
consequences. Initial Narration shows the *aftermath* — what the players see,
hear, and feel in the changed world. Landing carries what comes next.

Scene ends when the players name what they want to do next. Match scope to the
Climax — a relationship-scale climax gets a relationship-scale resolution, not
a world-state summary.

## Development cockpit

When the beat is a Development (*clue, warning, revelation, alliance,
negotiation, planning*), the cockpit trades physical pressure for information
pressure. Keep: Scene ends when, Glance, Now, DM truth, Initial Narration,
Be ready for, Landing, Backup. Cut: Action cards, Roster embeds.

Procedure: keep when the beat has a named mode (*investigation*,
*negotiation*, *audience*) and a threshold that ends it. Cut when the beat
is open conversation with no fuse.

Zones: keep when positions matter (a market to search, a divided room, a
court with a gallery). Cut when purely conversational.

Threat clock: keep when external time pressure drives the beat (patrol
approaching, tide rising, ceremony starting). Label it a **pressure clock**:
ticks are situation changes, not predator actions. Cut when the Development
has no fuse.

Secondary objective: keep when a second question runs in parallel. Cut when
there is one thread.

Travel: cut. A Development that *is* travel uses the travel beat.

**Field shifts:**
- **Scene ends when** states the *information threshold*: what the players
  know or can decide when the beat is done. **If behind / If ahead** adjust
  how much investigation fits the time, not how many zones to cut.
- **Glance** lists stakes, the question, who is present and what they want,
  and what is discoverable.
- **Now** states who is where, the social or environmental setup, and what
  is observable. Not positions in feet and speeds unless spatial.
- **DM truth** carries the hidden answer, faction intent, and what each
  present actor wants. `**Unrevealed:**` marks what investigation discovers.
- **Be ready for** lists investigative and social approaches: Insight,
  Persuasion, Investigation, Perception, Deception, History, free-form
  questioning. Same table structure (intent | approach | DC | success |
  partial | failure). Every cell is still a *ruling*.
- **Initial Narration** scope: who is present and what they are doing,
  atmosphere, discoverable detail, scene stock, and a non-sight sense.
  `theatre-of-the-mind` owns the prose. Cover, routes, and imminent physical
  action only when the Development is spatially situated.

## Hook cockpit

When the beat is a Hook (*strong start: the opening problem, offer, threat,
discovery, or crisis*), the cockpit delivers immediate momentum. Keep: Scene
ends when, Glance, Now, DM truth, Initial Narration, Be ready for, Landing,
Backup. Keep Zones when positions matter on entry. Keep Procedure when the
Hook has a named mode (*escape*, *pursuit*, *boarding*). Keep Threat clock when
an external fuse drives the opening.

Cut: Action cards, Roster embeds — unless the Hook is itself a combat
encounter. A Hook that opens with physical danger keeps these; a Hook that
opens with discovery, an offer, or social pressure cuts them.

Secondary objective: keep only when the Hook carries a parallel question from
the start. Travel: cut — a Hook with a cover endpoint does not also run
unbounded travel.

**Field shifts:**
- **Scene ends when** states the *commitment threshold*: the party has chosen
  a response to the opening pressure. **If behind:** compress the opening
  situation — fewer reveals, faster fuse — so the party still reaches a
  decision. **If ahead:** one prepared complication that enriches the chosen
  path, fully inlined.
- **Glance** leads with the immediate pressure: what is wrong, what is at
  stake, who is present, and why now. Situation magnets are the first thing
  demanding attention.
- **Now** states the opening positions, distances, and speeds. A Hook's Now
  may be shorter than a Cliffhanger's — only what the party perceives at the
  moment of first contact.
- **DM truth** carries the opposition want and what the Hook is really about
  when the surface differs. `**Unrevealed:**` marks what the party has not
  yet seen.
- **Be ready for** anticipates the party's first responses. A strong Hook
  typically produces 2–4 clear response paths; each path earns a row. Include
  **Assess the situation** when the opening is legible enough to study.
- **Initial Narration** is the **strong start**: the single most important
  spoken block of the session. `theatre-of-the-mind` owns the prose. The block
  lands the situation — who, what, why now, visible stakes, and the scene stock
  needed for the first real choice — and reaches the reaction point in one
  continuous delivery.
- **Landing** carries what follows the party's commitment: the next beat's
  opening state. Prepare the polarity handoff — if the Hook was action-heavy,
  the landing sets up a Development; if cerebral, a Cliffhanger.

## Procedure

Name the mode. Default for a hunt/chase/escape slice is *escape mode*:

1. Failures impose the Be ready for *ruling* only. They never advance the clock.
2. After everyone has acted, if anyone remains exposed (the card’s magnets), advance the threat clock **once** and resolve that tick. Freeze or “we watch” still ticks once at end of round, not per failed check.
3. Several failed checks in one round still produce **one** tick.

On the card, write this slice's trigger (who counts as exposed) and the combat-mode switch. Do not paste 5e turn order or this list.

*Combat mode:* if the party abandons escape and commits to killing the opposition, stop the clock and run the embedded statblocks. Write that switch on the card.

A skill-challenge or social slice uses the same rule: one clock, filled by the card’s named trigger, never by both a table failure *and* a separate tick for the same action.

## Partial

House for this vault, in this skill, not on the card:

- **Success:** meet or exceed the DC.
- **Partial:** miss by 1–4; the player may accomplish the intent at the listed cost.
- **Failure:** miss by 5 or more, or reject the partial cost.

Table cells assume that. A row may say “binary — no partial” when the fiction has no middle.

## Ruling

A *ruling* is a 5.5e (2024) action, movement in feet, opportunity attack, named condition, ability check, save, or damage; or a **named feature already on a vault owner**. This vault’s **Partial** (miss by 1–4) is house, here, not restated on the card. Check, save, and DC choice → `dnd5e-mechanics`. The written mark → `obsidian-markdown` at-table scan.

5.5e actions: Attack, Dash, Disengage, Dodge, Help, Hide, Influence, Magic, Ready, Search, Study, Utilize. Conditions include Prone, Grappled, Restrained.

An evocative label (`scattered`, `crash-landed`) is a name for a *ruling* already stated (lands 30 feet away; 2d6 bludgeoning and Prone). New action types, conditions, or resolution systems are a brew-skill job (`homebrew-monsters-5e`), not a line on this card.

## Now (positions)

Write where people are, the distances in **feet**, the speeds that matter, and what a move or Dash reaches from here, in the Now paragraph. Reuse those distances in the zone table. Do not invent a second movement model later. Named places (High air, grass, beach) label those distances; they do not replace them. There is no separate Starting state heading.

## Scene-setting (Initial Narration)

`theatre-of-the-mind` owns the prose. This skill owns **what must already be in the spoken block** before the question (Angry GM: goal, obstacle, tools; Alexandrian: all immediately perceived facts).

Pass 1 leaves `> [!narration] Initial Narration` empty. Pass 2 fills a complete *scene-setting* block: currently visible cover, routes, relative position, who is being hunted, imminent action, drawable appearance, accessible scene stock, and at least one non-sight sense, joined as flowing spoken prose. Those facts are not a later clock tick and not a DM catalog under the callout. If the owner already has an identity image, embed it beside the block; the photo does not replace the spoken look.
If a battlemap is present, orient routes, zones, cover, and exits with the same
compass used by the map: top north, right east, bottom south, left west. Use
cardinal words where they help the table hold the scene; do not turn Initial
Narration into a compass checklist.

Stop at the reaction point after those facts, then “What do you do?” Typical filled length is two to four short spoken paragraphs.

## Time and cut lines

A 30-minute beat states expected minutes and two *cut lines* (Sly Flourish: Watch the Time). Do not paste a minute-by-minute script of how to spend the half hour. A climax beat's "If behind" compresses the confrontation (fewer zones, faster clock) rather than skipping it; the central question still resolves on this card.

A hook with a cover endpoint does not also run unbounded travel. “Smoke to camp” belongs on the next cockpit.

## Action cards and embeds

Put the operational loop (Dive → Talon Grab → Haul Aloft → Sickle Claw) and default-mode compact numbers next to DM truth.

Keep full `![[Name#Statblock]]` (optional `![[Name#At the table]]`, or `![[Name#Tactics]]` for monster notes) at the bottom. Do not retype an owner’s full Multiattack/HP table into prose above the embed. Do not embed the ecology essay. How the party already moves (flight, swim, mounts, boats) is not roster.

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
- No house Partial lecture, 5e-default lecture, or writer note on the card.
- `## Scene ends when` is the first heading; the end condition is the first line.
- Time budget + both *cut lines* as paragraphs under that heading.
- Now states positions and speeds in feet; the zone table uses those distances.
- DM truth is a `##` heading before Initial Narration, not a `[!secret]` callout. `**Unrevealed:**` marks hidden opposition intent.
- Pass 1: empty callout stubs and empty Narration-column cells at every TotM slot; no player-facing prose in those bodies.
- Pass 2: Initial Narration contains currently visible cover, routes, relative position, imminent action, relevant scene stock, drawable look, and a non-sight sense, then the question. Every stub and Narration cell is filled.
- Action cards sit with DM truth; Bloodied, cover-reached, and scene dials are paragraphs after the Threat clock table.
- Every consequence is a *ruling* (see Ruling).
- Secondary objective, Landing, Roster, Backup are `##` headings.
- Combat-mode owners heading-embedded under Roster. Default-mode rolls have numbers on the action cards.
- Battlemap embeds existing images between Initial Narration and Procedure. Omit if none exist.
- Existing owner identity image embedded when the owner page already lists one.
- Travel omitted, or one inlined complication with a failure endpoint.
- One cockpit: Glance once, no second Run-now, no separate Ask callout, no Scene menu, no peer Round script.
- The only `> [!` on the card is `[!narration]`. Italic prose in Narration table columns, not callouts in cells.
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
owner image onto the card. Monster math → `homebrew-monsters-5e`. Check, save,
and DC → `dnd5e-mechanics`. Do not invent
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
