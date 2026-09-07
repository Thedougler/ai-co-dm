---
name: run-guide
description: >-
  Assemble a table-ready, DM-only cockpit for one session or one 30-minute beat
  from existing prep and owner pages. Use for "run tonight", "build a run guide",
  or a session-prep document that is hard to scan. Not beat composition, canon
  invention, player-facing prose craft, or session reconciliation.
---

# Run Guide

Build one **cockpit** the DM can run from Reading view without hunting the vault.
Owners stay canon. Full statblocks **embed** at the bottom (the DM scrolls).
Scene *procedure*, zones, tells, action cards, and landing are written here.
A missing owner is a diagnostic, not permission to invent canon or math.

**Sole-authority:** a tired DM at minute 90 can roll and speak this slice
without opening another note. Every default-mode *ruling* lives on the card.
Combat-mode owners are heading-embedded below. A bare `[[Monster]]` with no
embed and no action-card numbers fails.

One opposition want, said once. One *procedure*, named. Nothing restated later
as a second framework.

## Workflow

1. **Ground.** Read `hot.md`, tonight's session prep, the latest log, and only
   the linked owners needed to interpret this slice. `qmd-retrieval`. Completion:
   every named actor, place, and item has an owner path or is marked unknown.

2. **Diagnose.** Mark each beat `ready`, `missing owner`, `missing prep`, or
   `proposal`. Missing stock → owning skill (`encounter-prep`, `session-beats`,
   `theatre-of-the-mind`). A creature you will roll that has no owner →
   `homebrew-monsters-5e`. Choose live beats. Completion: no invented canon.

3. **Write one cockpit per live beat** in play order (below). Delete empty
   sections. Completion: every field this slice will use is present; clock and
   Be ready for are one *procedure*, not two escalation tracks.

4. **Table gate.** Reading view is one downward pass of the Cockpit table.
   Completion: every item in **Table gate** below holds.

5. **File.** `obsidian-markdown` (wikilinks, open callouts, `session-surface`,
   real newlines). TotM for `[!narration]`. `./scripts/after-write` on named paths.

## Cockpit (the only card)

Frontmatter: `type: session-prep` (or `encounter`), `cssclasses: [session-surface]`,
`visibility: dm`.

| Order | Field | Shape |
|---|---|---|
| 1 | **Scene ends when** | Heading is `## Scene ends when`. First line is the end condition. Then the 30-minute budget and **If behind** / **If ahead** *cut lines*. |
| 2 | **Starting state** | Who starts where, in **feet**. Speeds that matter this slice. What a move vs Dash actually reaches. Positions and speeds only. |
| 3 | **Glance** | `## L0 · Glance` bullets: stakes, goal, exit, danger, Silence, **situation magnets** (who is high, loud, or obvious *now*). Not a named-PC roster and not how they already move. |
| 4 | **Now** | One paragraph. Current situation once. |
| 5 | **DM truth** | Open `> [!secret] DM truth` — opposition want, one sentence. **Before** narration. |
| 6 | **Action cards** | Predator loop and compact numbers you will roll in default mode (AC, one attack, scatter/bloodied thresholds). Next to truth, not under embeds. Named owner actions (`Talon Grab`, `Sickle Claw`), not nicknames (`rake`). |
| 7 | **Open** | `> [!narration] Narration`. *Scene-setting*: currently visible threat, relative position, cover/routes, imminent action, then “What do you do?” Three **tells**. No separate Ask callout. |
| 8 | **Procedure** | Open `> [!mechanic] Procedure`. Name *escape mode* or *combat mode*. The loop for this slice, once. |
| 9 | **Zones** | Table: place \| distance in feet \| cover. Uses Starting state’s movement grammar. Named places are fine; abstract “bands” are not a substitute for distance. |
| 10 | **Be ready for** | **Partial** defined once above the table. Table: intent \| approach (skill) \| DC \| success \| partial \| failure. Name the creature, item, and place in every cell. Every cell is a *ruling*. Include **Assess the situation** when the opening could be read as “what is it hunting / doing?” Not a menu to read aloud. |
| 11 | **Threat clock** | Table inside open `> [!mechanic] Threat clock`. The predators’ turn. Named ticks. 3–4 ticks. Bloodied (write the HP number), cover-reached, minions, scene dials live **in this block**. |
| 12 | **Secondary objective** | If Be ready for lists “save / distract X,” one line: beats required, ignore outcome, later consequence. Omit when there is no second objective. |
| 13 | **Landing** | Next scene’s opening state (bodies, wet, separated, where opposition goes). |
| 14 | **Exit narration** | Only when the **next** cockpit is already on this file. `> [!narration] Exit` is the spoken transition. No “What do you do?” Omit until that beat is ready. |
| 15 | **Roster embeds** | `![[Monster#Statblock]]` for opposition you will roll in *combat mode*. Keep the full fences; the DM scrolls. Item headings only if this slice spends charges or the item is the pressure. |
| 16 | **Travel** | Default: omit. This-beat only when the slice *is* the travel, and then one specific complication with every number on this card plus a failure endpoint. |
| 17 | **Backup** | Extra wikilinks only. |

There is no peer **Round script**. Clock ticks *are* the old R1–R3.

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

Every Be ready for cell and every clock tick names an implementation the DM can roll or apply: attack bonus and damage with a **named action**, or a condition plus a distance in feet, or HP. “Takes one hit,” “arrives hurt,” “scattered,” “crash-landed,” “a pack is lost,” “rough landing,” and “rake” fail until mapped.

## Starting state

State it in compact lines before Glance, then reuse it in the zone table. Do not invent a second movement model later.

Write where people are, the distances in **feet**, the speeds that matter, and what a move or Dash reaches from here. Named places (High air, grass, beach) label those distances; they do not replace them. That is the whole field.

## Scene-setting (Open)

`theatre-of-the-mind` owns the prose. This skill owns **what must already be in the spoken block** before the question (Angry GM: goal, obstacle, tools; Alexandrian: all immediately perceived facts).

Currently visible cover, routes, relative position, and who is being hunted belong in Open. They are not a later clock tick. Prioritize those facts over ornamental scale. One second sense (sound/feel) as a clause in the block or a one-line DM note under it. Appearance catalog (wingspan, beak, talons) may be a DM reference line the table can ask about.

Stop at the reaction point after those facts, then “What do you do?”

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

The spoken block shows the situation and ends on the question, then wait. Anticipated intents live in the table so unforeseen approaches can still be ruled from want + zones + clock (intention / approach).

Clock ticks are predator **actions** (what fills the clock, what happens, what completion does — Sly Flourish progress clocks). Visible geography the viewpoint already has does not wait for tick 1.

**Tells.** Any conclusion the table must be able to reach gets three independent visible tells in narration or Now (Three Clue Rule).

**Exit narration.** Player-facing handoff into the next live card. Write it only when that card exists. It does not ask what they do.

**Travel.** Omit on a 30-minute hook. When this slice *is* travel: one complication, every number on this card, a failure endpoint. Wikilink further tables only as backup, not as required procedure.

## Table gate

Completion — all of these hold, or the draft is not done:

- One named *procedure*; Be ready for failures do not also tick the clock.
- **Partial** defined once (or the table is binary on purpose).
- `## Scene ends when` is the first heading; the end condition is the first line.
- Time budget + both *cut lines* sit under that heading.
- Starting state present in feet; zone table uses those distances.
- DM truth before Open.
- Open contains currently visible cover, routes, relative position, and imminent action, then the question.
- Action cards sit with DM truth; clock holds bloodied as a number, cover-reached, minions, dials.
- Every consequence is a *ruling*.
- Secondary intent, if listed, has beats / ignore / later consequence.
- No Round script peer field; no dual Now/Run-now; no separate Ask callout; no Scene menu on a 30-minute card.
- Combat-mode owners heading-embedded below. Default-mode rolls have numbers on the action cards.
- Travel omitted, or one inlined complication with a failure endpoint.

## Whole-session branch

When rendering a **full** 3–5 hour night (not a single 30-minute beat), open with
Glance for the first live card, then 5–7 cockpits in likely-play order. Put a
floating secrets bank, parachute, and treasure **after** the live cards, as
bullets that link owners — not a second card schema. Still no densify/WIP dump.
Still no Scene menu that is only prep-management.

## Handoffs

`session-beats` owns missing beat charts and *cut line* pacing. `encounter-prep`
owns reusable encounter stock that fits this cockpit. TotM owns player-facing
prose. Copy-writer fills words inside this schema. Monster math →
`homebrew-monsters-5e`. Do not invent canon, copy owner essays, or write player
decisions.

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
