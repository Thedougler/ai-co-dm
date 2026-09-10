---
name: run-guide
description: >-
  Assemble a table-ready, DM-only cockpit for one session or one 30-minute beat
  from existing prep and owner pages in the vault's lean style: flat, direct,
  and only as sectioned as play requires. Use for "run tonight", "build a run
  guide", or a session-prep document that is hard to scan. Pass 1 writes the
  mechanical card plus empty titled [!narration] stubs. Later passes edit
  DM-facing copy, fill theatre-of-the-mind prose, and run the ready check. Not
  beat composition, canon invention, or session reconciliation.
---

# Run Guide

Build one **cockpit** the DM can run from Reading view without hunting the vault.
Owners stay canon. Full statblocks **embed** at the bottom (the DM scrolls).
Scene *procedure*, zones, tells, action cards, and how the scene resolves are written here.
A missing owner is a diagnostic, not permission to invent canon or math.

**Four passes.** Pass 1 writes the mechanical card and **empty titled `[!narration]` stubs**. Pass 2 (`copy-writer`) edits DM-facing copy for usability, readability, and table usefulness. Pass 3 TotM (`theatre-of-the-mind`; TUI **copy-writer**, Grok Bots **Visualizer**) fills every spoken stub. Pass 4 checks Reading view. Pass 1 does not write player-facing prose.

**Sole-authority:** a tired DM at minute 90 can roll and speak this slice
without opening another note. Every default-mode *ruling* lives on the card.
Combat-mode owners are heading-embedded below. A bare `[[Monster]]` with no
embed and no action-card numbers fails.

One opposition want, said once. One *procedure*, named. Nothing restated later
as a second framework.

**Lean contract.** Run guides use the same default style as the rest of the
vault: flat, direct, and only as sectioned as play requires. Preserve the
existing heading spine, section names, and order when editing. Add a section
only when the DM will use it to run this beat.

**Image anchors.** If the beat has an overview or identity image, keep it near
the top of the file as the visual first look. If the beat has battlemap art,
keep it fixed at the bottom of the file after the runnable card. These anchors
are placement rules for existing art, not permission to add unused sections.

**Concrete measure.** Spatial and travel notes use concrete units: north,
south, east, west, feet for tactical 5.5e distances, and days, hours, or
minutes for travel time. Do not use distance bands, range bands, or abstract
labels such as near, far, close, inner, outer, nearby, or distant as the
measurement. A label may name a place only when the concrete direction,
distance, or travel time is also present.

**Recap boundary.** Only the first beat of a session may recap the previous
session. Every later beat starts from the immediate current situation and does
not summarize earlier beats, prior-session events, or how the party got here.

**No coy DM text.** The card is for the DM. If the DM needs to know who or what
is present, name it plainly in DM-facing text. If the players have not earned
that knowledge, keep it out of `[!narration]`; do not write vague placeholders
such as "a figure may be there" or instructions such as "do not call that out."

A DM-facing line stays only if Nick will use it this slice to **place** someone,
**roll** something, **speak**, or decide a changed risk, route, clock, resource,
or NPC response. Distances, speeds, named *rulings*, the opposition want, and
the spoken block earn their keep. Default safety, ordinary permission, Partial
rules, 5e defaults, schema commentary, and notes to the writer stay out.
Negative facts earn space only when they change a current choice or ruling.
Use descriptive, specific, plain language on the DM card too. Use common,
normal human words unless the common word would be inaccurate. If a name or
field needs decoding, replace it with the ordinary thing and visible action.

## Workflow

1. **Ground.** Read `hot.md`, tonight's session prep, the latest log, the
   previous beat card when one exists, and only the linked owners needed to
   interpret this slice. Read each working file end-to-end before editing it;
   summaries, snippets, truncated output, and range reads may help target the
   file but do not satisfy grounding. `qmd-retrieval`. The previous beat's How the Scene
   Resolves is this beat's entry state — the situation, position, and changed
   world the party walks in with. Verify beat identity: the card filename's
   number matches its skeleton position (`Session-<session>-<NN>-Label.md` =
   beat NN), its purpose and dramatis personae match the skeleton, and its
   hand-off targets the skeleton's next beat. Mismatch → rename the file
   before writing. Completion: beat identity confirmed; entry state known from
   the previous beat; every working file has been read end-to-end; every named
   actor, place, and item has an owner path or is marked unknown.

2. **Diagnose.** Mark each beat `ready`, `missing owner`, `missing prep`, or
   `proposal`. Identify the central element the table will ask the DM to
   describe — the skeleton's Purpose and Table sees name it. That element and
   its dramatis personae must have owners before the card is written; create
   via the appropriate craft skill (`npc-design`, `place-design`,
   `vehicle-design`). Missing mechanical stock → owning skill (`encounter-prep`,
   `session-beats`). Missing player-visible scene stock → owning page or craft
   skill before TotM fill. Empty `[!narration]` stubs are expected on this pass;
   TotM fill is pass 3. A creature you will roll that has no owner →
   `homebrew-monsters-5e`. Choose live beats. Completion: no invented canon;
   the central element has an owner; every actionable hazard, loot, monster,
   route, clue, lore sign, and world detail has an owner or is marked unknown.

3. **Write mechanics.** Load `dnd5e-mechanics` before writing or auditing any
   player-interaction mechanics: checks, saves, DCs, Hide/Search/Study/Influence/
   Utilize resolution, grapples, shoves, attacks, damage, quality ladders, or
   player actions mapped to a roll. Completion: every player interaction is a
   5.5e ruling with a consequence that changes play, or it stays ordinary
   fiction with no roll language.

4. **Write one cockpit per live beat** in play order. Keep only sections that
   this beat spends at the table. Place **empty titled
   `[!narration]` stubs** at the required slots in **TotM stubs**. Embed an
   existing owner identity image (`![[attachments/…]]`) when the owner page
   already lists one; do not mint art. Completion: every mechanical field this
   slice will use is present; unused sections are absent; clock and Be ready for
   are one *procedure*, not two escalation tracks.

5. **Edit DM copy.** Load `copy-writer` for pass 2 and edit the DM-facing
   cockpit text for usability, readability, and table usefulness before any
   spoken prose fill. Completion: Scene ends when, Glance, Now, Procedure,
   Be ready for, clocks, and How the Scene Resolves are complete sentences the
   DM can scan and use without inventing missing rulings.

6. **Fill narration.** Load `theatre-of-the-mind` for pass 3 before filling
   `Initial Narration` or any other `[!narration]` slot. Initial Narration is
   one concise, complete scene-setting block for the players: perceivable
   subjects, relationships, routes or cover, relative position, imminent
   pressure, actionable scene stock, drawable appearance, and a non-sight sense.
   Completion: it reaches the first real player opening without hidden truth,
   DCs, mechanics talk, or padded mood.

7. **Table gate.** Pass 4 is one downward pass of the Cockpit table in Reading
   view.
   Completion: every item in **Table gate** below holds for this pass.

8. **File.** `obsidian-markdown` (wikilinks, `session-surface`, real newlines, at-table scan).
   The only callout on the card is `[!narration]`. Pass 3 fills stubs via TotM.
   `./scripts/after-write` on named paths.

## Lean Surface

Frontmatter: `type: session-prep` (or `encounter`), `cssclasses: [session-surface]`,
`visibility: dm`.

Use this as a section catalog, not a template to fill completely. A section
earns space only when it changes a ruling, route, clock, resource, NPC response,
or words to speak. The stable spine is:
`Scene ends when`, `Glance`, `Initial Narration`, `How the Scene Resolves`.

Add other sections only as the beat needs them. Keep the order already present
in an existing file unless moving a section makes the card easier to run.

| Field | Keep when | Shape |
|---|---|---|
| **Scene ends when** | Every live beat needs a stop condition. | Heading is `## Scene ends when`. First line is the end condition. Then the time budget. Add **If behind:** and **If ahead:** only when the pacing choice is not obvious. |
| **Glance** | Every live beat needs a short at-table scan. | Heading is `## At a Glance`. Bullets: stakes, goal or exit, danger, Silence, and situation magnets. Not a recap except on the session's first beat. |
| **Overview image** | An exact overview or identity image exists. | Embed the image near the top of the file before the runnable sections, usually just after the title or frontmatter. Omit if none exists. |
| **Now** | Positions, distances, speeds, current possession, or starting state would otherwise clutter Glance. | One paragraph. Who starts where, in **feet** when tactical distance matters. Use north, south, east, and west for orientation. Speeds that matter. What a move vs Dash reaches. Current situation once. Do not add a separate Starting state heading. |
| **Action cards** | The DM will roll compact default-mode numbers or follow an opposition loop. | `### Action cards`. The operational loop and compact numbers you will roll in default mode: AC, hit points when needed, one attack, thresholds, grab, scatter, or bloodied rule. Use owner action names. |
| **Initial Narration** | Every live beat needs the first spoken look. | Empty `> [!narration] Initial Narration` stub on pass 1. Pass 2 fills scene-setting, accessible scene stock, and the first real choice. If the owner already has an identity image, embed `![[attachments/…]]` near this block. |
| **Battlemap** | A battlemap or exact-scene image exists. | Heading `## Battlemap` at the bottom of the file after the runnable card. Embed existing battlemap art from `attachments/`. Use the shared compass: top north, right east, bottom south, left west. Omit if none exists. |
| **Procedure** | The beat has a named mode, fuse, clock trigger, combat switch, pursuit rule, or repeated resolution loop. | Heading `## Procedure`. Name the mode and this slice's trigger once. Not 5e turn order. Not a `[!mechanic]` callout. |
| **Zones** | Positions, routes, cover, distance, search areas, or scene stock matter. | Table: place \| distance in feet \| cover \| narration. Same concrete distances and compass directions as Now. Each row names decision-useful scene stock in that zone. The **Narration** column carries conditional spoken prose as `==_italic_==`, not a callout. When the Narration column is absent, one empty `> [!narration] {Place}` stub per row after the table instead. |
| **Be ready for** | Players are likely to attempt consequential actions, checks, tactics, or negotiations. | Selective ruling table — include only intents that change a ruling, risk, route, clock, resource, NPC response, or information the party gains. Omit ordinary, boring, or redundant actions; unforeseen approaches are ruled from procedure, zones, and clock. Table: intent \| approach \| DC \| success \| partial \| failure. Approach is **Ability (Skill)** when a check applies. DC column is `` `DC 14` ``. Dice and damage in cells are inline code. Applied conditions are **bold**. Name the creature, item, and place in every cell. Every cell is a *ruling*. Include **Assess the situation** only when success and failure both say what changes. No Partial definition on the card. |
| **Threat clock** | A fuse or opposition turn changes the situation. | Heading `## Threat clock`. Table: tick \| what happens \| narration. Named ticks. 3-4 ticks. Each tick states what newly becomes visible, usable, threatened, blocked, or changed. The **Narration** column carries conditional spoken prose as `==_italic_==`. When the column is absent, one empty `> [!narration] Tick {n}` stub per tick after the table instead. Bloodied, cover-reached, and scene dials live as paragraphs after the table. |
| **Secondary objective** | A second question runs in parallel and changes outcome or later consequence. | Heading `## Secondary objective`. One paragraph: beats required, ignore outcome, later consequence. Omit when there is no second objective. |
| **How the Scene Resolves** | Every live beat needs the next state. | Heading is `## How the Scene Resolves`. Write only the most likely options, usually one or two. Each option hands off to a beat on this session's skeleton — it advances the scene, not exits it. Next state, damage already applied, relevant conditions, and what follows. One empty `> [!narration] How the Scene Resolves` for the unconditional spoken state, plus a table for those likely options (`If` \| `Next` \| `Narration`). Narration cells use `==_spoken_==`. Do not stack a titled callout per option. |
| **Exit narration** | The next cockpit is already on this file. | Empty `> [!narration] Exit` on pass 1. Spoken transition on pass 2. Omit until that beat is ready. |
| **Roster embeds** | The DM will roll a creature or item in this beat. | Heading `## Roster`. `![[Monster#Statblock]]` for opposition you will roll in combat mode. Keep the full fences; the DM scrolls. After each embed: empty `> [!narration] {Creature}`. Item embeds only if this slice spends charges or the item is the pressure. |
| **Backup** | Extra owner links would save table hunting. | Heading `## Backup`. Extra wikilinks only. Omit when all required owners are already embedded or linked above. |
| **Previous-session recap** | Only this file is the first beat of the session. | Keep it brief and player-facing. Omit from every other beat file. |

There is no peer **Round script**. Clock ticks *are* the old R1–R3. The only `> [!` on the card is `[!narration]`.

## TotM stubs

Pass 1 places the player-facing prose slots this beat can actually use. Pass 3
fills every placed slot. The DM may skip a block at the table; construction
should not create slots for outcomes the beat cannot produce.

**Callout stubs** (empty titled `> [!narration]` blocks):
- `Initial Narration` — before the first player choice.
- `How the Scene Resolves` — one unconditional spoken state for what is always true when this beat ends.
- `{Creature}` — after each combat-mode roster embed. Situated look for this scene, not the owner-page cold portrait.
- `Exit` — only when the next cockpit is already on this file.

**Table Narration columns** (conditional spoken as `==_italic_==` in the cell, not a callout):
- Zones table — one cell per zone row. Replaces `{Place}` stubs.
- Threat clock table — one cell per tick row. Replaces `Tick {n}` stubs.
- How the Scene Resolves options table — one cell per most likely option, usually one or two. This table sits with the one unconditional How the Scene Resolves callout.

When a Zones or Threat clock table has no Narration column, use callout stubs after the table instead: `{Place}` per zone, `Tick {n}` per tick.

Do not put `> [!narration]` inside a table cell. Obsidian does not render callouts there. Conditional spoken in a cell is `==_italic_==` (`obsidian-markdown`).

## Scene stock

Before pass 3, make the card able to answer follow-up questions without opening
the vault cold. Record actionable player-visible stock wherever the leanest
surface can hold it: a paragraph, table row, clock tick, how the scene
resolves, or backup link.

Completion: every stock item that belongs in the spoken first look has an access
channel, an owner or local ruling, and a player use. TotM weaves those items
into narration by relationship and affordance. Required first-look details live
on the card, not only in Backup links.

Distinct things need distinct text and media. Existing narration, art, tokens,
and battlemaps are valid only for the exact same owner/site/moment. For new
content, use prior assets as vibe reference and make or request a distinct
asset.

## Beat Type Trimming

Beat type changes which catalog sections earn space. It does not create a
second template.

**Resolution:** keep the aftermath state, Initial Narration, How the Scene Resolves, and any
Zones or Be ready for rows the players can still act on. Cut combat sections
when the opposition is resolved.

**Development:** keep the information pressure: what can be learned, who wants
what, and the consequential approaches. Keep Procedure or Threat clock only
when there is a named mode or external fuse. Cut combat-only sections.

**Hook:** keep the immediate pressure, first response paths, and How the Scene Resolves into
the next state. Keep combat sections only when the hook is itself a combat
encounter. A hook with a cover endpoint does not also run unbounded Travel.

**Travel:** use this skill only when travel is the live slice. Inline one
specific complication, travel time in days, hours, or minutes, every number
needed to run it, and a failure endpoint. Otherwise omit Travel entirely.

## Procedure

Name the mode. Default for a hunt/chase/escape slice is *escape mode*:

1. Failures impose the Be ready for *ruling* only. They never advance the clock.
2. After everyone has acted, if anyone remains exposed (the card’s magnets), advance the threat clock **once** and resolve that tick. Freeze or “we watch” still ticks once at end of round, not per failed check.
3. Several failed checks in one round still produce **one** tick.

On the card, write this slice's trigger (who counts as exposed) and the combat-mode switch. Do not paste 5e turn order or this list.

*Combat mode:* if the party abandons escape and commits to killing the opposition, stop the clock and run the embedded statblocks. Write that switch on the card.

A skill-challenge or social slice uses the same rule: one clock, filled by the card’s named trigger, never by both a table failure *and* a separate tick for the same action.

## Partial

Ruling convention for this skill, not text for the card:

- **Success:** meet or exceed the DC.
- **Partial:** miss by 1–4; the player may accomplish the intent at the listed cost.
- **Failure:** miss by 5 or more, or reject the partial cost.

Table cells assume that. A row may say “binary — no partial” when the fiction has no middle.

## Ruling

A *ruling* is a 5.5e (2024) action, movement in feet, opportunity attack, named condition, ability check, save, or damage; or a **named feature already on a vault owner**. Partial success is defined here, not restated on the card. Check, save, and DC choice → `dnd5e-mechanics`. The written mark → `obsidian-markdown` at-table scan.

5.5e actions: Attack, Dash, Disengage, Dodge, Help, Hide, Influence, Magic, Ready, Search, Study, Utilize. Conditions include Prone, Grappled, Restrained.

An evocative label (`scattered`, `crash-landed`) is a name for a *ruling* already stated (lands 30 feet away; 2d6 bludgeoning and Prone). New action types, conditions, or resolution systems are a brew-skill job (`homebrew-monsters-5e`), not a line on this card.

## Now (positions)

Write where people are, the distances in **feet**, the compass directions that
matter, the speeds that matter, and what a move or Dash reaches from here, in
the Now paragraph. Reuse those distances and directions in the zone table. Do
not invent a second movement model later. Place labels do not replace concrete
measurements. There is no separate Starting state heading.

## Scene-setting (Initial Narration)

`theatre-of-the-mind` owns the prose. This skill owns **what must already be in the spoken block** before the question (Angry GM: goal, obstacle, tools; Alexandrian: all immediately perceived facts).

Pass 1 leaves `> [!narration] Initial Narration` empty. Pass 3 fills a complete *scene-setting* block: currently visible cover, routes, relative position, who is being hunted, imminent action, drawable appearance, accessible scene stock, and at least one non-sight sense, joined as flowing spoken prose. Those facts are not a later clock tick and not a DM catalog under the callout. If the owner already has an identity or overview image, keep it as the top visual anchor; the image does not replace the spoken look.
If a battlemap is present, orient routes, zones, cover, and exits with the same
compass used by the map: top north, right east, bottom south, left west. Use
cardinal words where they help the table hold the scene; do not turn Initial
Narration into a compass checklist.

Stop at the reaction point after those facts, then “What do you do?” Typical filled length is two to four short spoken paragraphs.

## Time and cut lines

A 30-minute beat states expected minutes and two *cut lines* (Sly Flourish: Watch the Time). Do not paste a minute-by-minute script of how to spend the half hour. A climax beat's "If behind" compresses the confrontation (fewer zones, faster clock) rather than skipping it; the central question still resolves on this card.

A hook with a cover endpoint does not also run unbounded travel. “Smoke to camp” belongs on the next cockpit.

## Action cards and embeds

Put the operational loop and default-mode compact numbers in the first section
that needs them. Hidden intent, opposition wants, and canon constraints are
ordinary DM-facing facts; write them inline where they change a ruling or
choice. Do not create a `DM truth` section.

Keep full `![[Name#Statblock]]` (optional `![[Name#At the table]]`, or `![[Name#Tactics]]` for monster notes) at the bottom. Do not retype an owner’s full Multiattack/HP table into prose above the embed. Do not embed the ecology essay. How the party already moves (flight, swim, mounts, boats) is not roster.

If the owner lacks `## Statblock`, add that heading above the fence on the owner (no math rewrite), then embed. If no owner exists for a creature you will roll, stop and packet `homebrew-monsters-5e`.

## Be ready for and the clock

A selective ruling table, not a catalog. Include only intents that change a ruling, risk, route, clock, resource, NPC response, or information. Omit ordinary or boring actions — unforeseen approaches are ruled from procedure, zones, and clock (intention / approach). The spoken Initial Narration shows the situation and ends on the question, then wait.

Clock ticks are pressure **actions**: what fills the clock, what happens, and
what completion changes. Visible geography the viewpoint already has does not
wait for tick 1. When the table has a Narration column, that cell is the spoken
update slot as `==_italic_==`; otherwise use `Tick {n}` callout stubs.

**Tells.** Any conclusion the table must be able to reach gets three independent visible tells in Initial Narration or Now (Three Clue Rule).
Tells are for actionable conclusions, not hidden teaser content. If a clue has
no clear success result, failure result, and player use, cut it.

**Exit narration.** Player-facing handoff into the next live card. Empty stub on pass 1 only when that card exists on this file. It does not ask what they do.

**Travel.** Omit on a 30-minute hook. When this slice *is* travel: one
complication, travel time in days, hours, or minutes, every number needed to
run it, and a failure endpoint. Wikilink further tables only as backup, not as
required procedure.

## Table gate

Completion — all of these hold, or the draft is not done:

- One named *procedure*; Be ready for failures do not also tick the clock. Be ready for is selective — no ordinary, boring, or redundant rows.
- Beat identity: the card filename's number matches its skeleton position; the card's purpose, dramatis personae, and hand-off match the skeleton.
- This beat's opening follows from the previous beat's How the Scene Resolves — no state reset, teleport, or unexplained jump between cards.
- The central element the table will ask about has an owner and appears on the card. Background detail may be marked unknown; the central element may not.
- No Partial lecture, 5e-default lecture, or writer note on the card.
- `dnd5e-mechanics` was loaded for every check, save, DC, grapple, shove, attack, damage, quality ladder, or player action mapped to a roll.
- Previous-session recap appears only on the first beat of the session. Every later beat starts from the immediate current situation.
- `## Scene ends when` is the first heading; the end condition is the first line.
- Time budget is present. Cut lines appear only when they change a pacing choice.
- If `## Now` is present, it states positions and speeds in feet; the zone table uses those distances.
- Spatial and travel measurements use north, south, east, west, feet for tactical 5.5e distance, and days, hours, or minutes for travel time; no range bands or abstract distance labels stand in for measurement.
- No `DM truth` section. Hidden intent, opposition wants, and canon constraints live inline where the DM uses them.
- No coy placeholders, mystery hedges, or "do not reveal this" notes in DM-facing text. Name the DM fact plainly or omit it.
- No naked checks. Every check says what success reveals or changes, what failure changes, and why the result matters now.
- Pass 1: empty callout stubs and empty Narration-column cells at the TotM slots this beat can actually use; no player-facing prose in those bodies. How the Scene Resolves is one unconditional stub plus an options table, not a stack of variant callouts. Each option hands off to a beat on the skeleton, not off-scene.
- Pass 2: `copy-writer` was loaded after pass 1, and DM-facing copy is usable, readable, useful, complete, and signal-only before spoken prose is filled.
- Pass 3: `theatre-of-the-mind` was loaded after pass 2, and Initial Narration concisely sets the scene with perceivable subjects, relationships, routes or cover, relative position, imminent pressure, actionable scene stock, drawable appearance, and a non-sight sense, then the first real player opening. Every stub is filled. Every Narration cell that is spoken is `==_italic_==`.
- Pass 4: Reading view was checked top to bottom; no `[!narration]` body or Narration table cell that should be spoken is empty.
- Action cards sit near the procedure or ruling they support. Bloodied, cover-reached, and scene dials are paragraphs after the Threat clock table when a Threat clock exists.
- Every consequence is a *ruling* (see Ruling).
- Optional sections stay absent unless this beat spends them at the table.
- Secondary objective, How the Scene Resolves, Roster, and Backup use `##` headings when present.
- Combat-mode owners are heading-embedded under Roster when the DM will roll them. Default-mode rolls have numbers on the action cards.
- Existing overview or identity image is embedded near the top when exact art exists. Omit if none exists.
- Battlemap art is embedded at the bottom when exact-scene art exists. Omit if none exists.
- Travel omitted, or one inlined complication with a failure endpoint.
- One cockpit: Glance once, no second Run-now, no separate Ask callout, no Scene menu, no peer Round script.
- The only `> [!` on the card is `[!narration]`. Conditional spoken in Narration table columns is `==_italic_==`, not a callout in the cell.
- Every DM-facing line is signal-only: it changes placement, a roll, spoken words, risk, route, clock, resource, or NPC response.
- Every ruling, DC, and design choice on this card serves **fun** first. Change a DC, drop a constraint, or reshape a beat when the alternative is more fun — consistency, symmetry, and prior-beat precedent yield to fun.

## Whole-session branch

When rendering a **full** 3-5 hour night (not a single 30-minute beat), write
one lean card per live beat in likely-play order. Put overflow material after
the live cards as owner links or short bullets only when it will save table
hunting. Do not add a second card schema or prep-management menu.

## Handoffs

`session-beats` owns missing beat charts and *cut line* pacing. `encounter-prep`
owns reusable encounter stock that fits this cockpit. This skill owns pass 1
(mechanical card + empty stubs). `copy-writer` owns pass 2 DM copy.
`theatre-of-the-mind` owns pass 3 spoken fill (TUI copy-writer; Grok Bots Visualizer).
Pass 4 is the ready check. `visual-aids` assembles an already-listed
owner image onto the card. Monster math → `homebrew-monsters-5e`. Check, save,
DC, and player-interaction mechanics → `dnd5e-mechanics`. Do not invent canon,
copy owner essays, or write player decisions.

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
