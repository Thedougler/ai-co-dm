---
name: theatre-of-the-mind
description: >-
  Write all player-facing prose for TTRPG play. Use for descriptions, spoken
  narration, boxed or read-aloud text, NPC dialogue, recaps, combat updates,
  handouts, rendered player text, scenes, rooms, wilderness, travel, vehicles,
  businesses, objects, creatures, people, visions, transitions, reveals, and
  live table, chat, or play-by-post output. Use whenever text crosses the
  DM/player boundary, including `[!narration]` and player-safe renderer
  surfaces. Prefer complete, natural flowing prose that paints a drawable
  picture — not telegram stubs and not verbose padding.
---

# Theatre of the mind

This is the default and sole authority for prose that crosses the DM/player
boundary. It covers a live sentence, a boxed passage, a chat reply, a recap,
a combat update, a handout, and player-safe rendered text. Keep DM procedure
and hidden truth outside that prose in `[!mechanic]` and collapsed
`[!secret]-` callouts.

Narration controls attention. Give the player a concrete thing, body, or
change they can point at and act on — and write it as **natural flowing prose**
that paints a complete picture for that surface, not a telegram of facts.

**Complete picture, not pad.** Cover every relevant player-visible fact the
surface owes (subject, relationships, senses the viewpoint can use, motion or
stable behavior). Join those facts into connected sentences with plain nouns
and concrete verbs. Do not stop at a single encyclopedic clause when the
picture is still incomplete. Do not add purple adjectives, theme sentences, or
mood claims to fake completeness.

Length still follows the moment: a hit, reveal, or dialogue turn may be one
tight line; a `[!narration]` portrait, room/place first look, creature first
sight, or recap is usually one coherent spoken block (often a short paragraph
of several connected sentences). **Item and creature page `[!narration]`** cold
portraits usually run about **three connected sentences** covering
silhouette/scale, material/parts/wear, and one stable sensory or physical
behavior — not a one- or two-line stub. Fill missing visual nouns; do not pad
with purple, mood-by-negation, or cover-story similes. Do **not** use the
hit-line license to compress a creature first look into a resolved-snatch
telegram. Stop at the next meaningful player opening — for a creature first
look, that is the reaction point (telegraph), never after the haul.
Do not force every surface into a spoken block, a fixed beat, or a located
change.

When the user requests a full or loaded first look, produce one coherent spoken
block containing every relevant subject and relationship currently perceivable:
locations and routes, NPCs, creatures, items, and current motion. Attention
hierarchy and fold keep that block drawable; the anchor ceiling is a selection
aid, never permission to omit relevant visible facts. Exclude hidden items,
unearned identities or mechanics, future action, and player choice. A partial
doorway snapshot is appropriate only when the user explicitly asks for that
limited view.

## Choose the mode

Before surface routing, decide whether the request is a **situated moment** or a
**standalone portrait**:

**Hard mode gate for creature/monster owning-page `[!narration]`:** if the
request is filling or rewriting `[!narration]` on a creature or monster note
and no party position, initiative, declared action, or other current table
state is supplied, the mode is **standalone cold portrait** (body, scale,
parts, ordinary stable behavior). Signature moves, tactics, Hookline/Reel,
Stoop steal, Grubnade burst, ambush scripts, time-skip tactics ("minutes
later"), and "open with…" running notes stay in `[!mechanic]` / `[!secret]-` /
At the table / DM sections. They must not become a resolved attack film or
encounter cutscene inside the callout. "Ordinary observable behavior" is
idle/species habit (chews a flower, stands over a carcass), not playing the
tactic script to completion and not inventing a disturb stimulus ("When the
branch moves…") when no table state supplies it. Inventing a trailing PC,
ankle/boot contact, completed haul, completed item tear, or full detonation is
a fail. Do not end cold portraits in **telegram stubs** — fragment sentences
that isolate a minor fact (`Chin drips.` / `Antlers.`) or stare; fold chin,
blood, eyes, claws onto the body in flowing prose.

**Hard mode gate for location/site `[!narration]`:** if the request is filling
or rewriting `[!narration]` on a location note and no party position or other
current table state is supplied, the mode is **standalone cold place portrait**
of **stable public geography** (form, topology, approaches, sensory). Ban
place-design kernel fields and schema voice: Function, Fantastic, Conflict,
Promise, Trajectory, Aspects, Player verbs, Hunger / possession metaphysics,
and rule-talk like `unclaimed` / `claim`. Ban invented mystery closers and
staged located-change drama (shadow turns then still, something watches then
vanishes) unless current table state supplies that motion. Creature signs and
encounter pressure belong to a **situated** first look. “Ordinary observable
function” means a drawable use of a landmark (drink from clear water, walk a
shore channel), never thematic Function (“offer rest and direction”). Design
kernels stay upstream (`place-design`); TotM renders geography.


**Hard mode gate for technique notes (`kind: technique` or technique tags):** if
the request is filling or rewriting `[!narration]` on a technique note and no
current table fight state is supplied, use a **non-object tell contract** — not
the Fate Spinner object silhouette/material/wear bar. Cold `[!narration]` states
immediately perceivable training tells as **stable facts**: breath, stance, wing
set, and how the form looks when used (e.g. a strike past ordinary wingspan) —
without inventing a current venue, terrace duel, gust-peak scene, or held gear.
Fail object-silhouette forced onto techniques; fail invented venue ("On a
wind-open terrace…"); fail mysticism/theme ("the blow answers that measure",
"answers" as magic tone); fail meta closers ("the tell ends before…"); fail resolved hit film. Training location and order
lore stay in Fiction / Training. Mechanical package stays Mechanics.

**Hard mode gate for object/weapon cold Appearance (Fate Spinner bar +):** cold
item `[!narration]` must read aloud as a drawable object, not a catalog gloss.
Coverage (flowing prose, ~3 sentences — dimensions, not a checklist dump):
1. **Concrete noun** (musket, long gun, carbine, blade) — not inventory jargon as
   the whole sentence.
2. **Scale vs body** (shoulder stock, barrel past the forearm).
3. **Material + wear** (dark wood, blued steel, brass bright at the trigger).
4. **One non-sight sense or ordinary physical behavior** (weight forward, lever
   clicks, cool in the palm) — not magic tone.
Fail closed: `carries as`, `ordinary X for Y`, naming lore/biography closers
("He named it for…") unless a **visible mark** on the object (engraved plate),
rarity/attunement/DCs, technique-as-abstract-strike. Layering: Appearance ≠
Identified Properties ≠ Fiction/Secret. Owner dedication stays Story hooks.


**Hard ban — craft/process words in player prose:** `[!narration]` and any
player-facing spoken block must never contain workshop vocabulary. Banned in
output (non-exhaustive): `telegraph`, `the tell ends`, `tell ends`, `reaction
point`, `Appearance`, `cold portrait`, `standalone portrait`, `hookline` as a
label, `at the table` as meta. Stop by **omission** — the last image is the
windup — never by naming the stop ("and the telegraph ends there"). Keep those
words in skill/reference/DM notes only.

- **Situated moment:** write from the supplied table state and viewpoint. Route
  by surface below, preserve the current environment and motion, and stop at
  that surface's natural player opening. On a creature first look, the opening
  is the **reaction point**: visible telegraph or buildup only — not resolved
  contact, haul, or PC injury (see [references/surfaces.md](references/surfaces.md)
  and [references/boundary.md](references/boundary.md)).
- **Standalone portrait:** describe one item, creature, place, vehicle,
  business, person, or other subject as a self-contained player reference. Do
  not invent a party, encounter, specific environment, viewer or camera,
  current motion, interaction, dialogue, pressure, handoff, or “what do you
  do?” It is not scene staging and does not need a located change. Hierarchically
  convey all relevant established player-visible identity: recognizable whole
  or silhouette and scale; defining parts, material, or body; ordinary visible
  behavior, function, or use when canon supplies it; and one signature sensory
  fact when the supplied canon supports one. Places add neutral form, topology,
  landmarks, and approaches; businesses add established purpose, interface, and
  service signature; people add a stable
  Face and established characteristic behavior; vehicles add stable silhouette,
  scale, components, and operational character. Omit hidden truth, private
  mechanics, unearned lore, and absent or contradictory facts. Use a public or
  earned name only when known; an unknown name stays unknown. These are
  coverage dimensions, not a required output sequence; choose the portrait's
  organizing spine independently.

The default standalone portrait is a cold player-appearance and observable-state
layer, even when the owning parent is addressed to `[agent, dm]`. Include all
established descriptive states needed for recognition, but omit exact effects,
durations, speeds, actions, DCs, rarity, attunement, curses, private biology or
history, tactics, hidden causes, learned route rules, and secret identities.
If the user explicitly requests identified or player-known properties, render
those mechanics separately after the description and only within that granted
knowledge state. “Complete” means complete for the target portrait contract,
never every heading in the parent.

After one reading of a standalone portrait, a player should be able to
recognize, picture, and distinguish the subject, and know its ordinary
observable function or behavior when the supplied canon supports one. The
wrapper follows the host or page request; do not force an encounter question.

## Before drafting

1. Identify the mode and surface, then read
   [references/surfaces.md](references/surfaces.md) before writing. It is the
   routing contract and defines the natural stop. A standalone portrait uses
   its portrait contract rather than a situated spatial camera.
2. Read [references/examples.md](references/examples.md) and
   [references/voice.md](references/voice.md). Read the matching specialist
   reference and one other: [places.md](references/places.md) for spatial jobs,
   [humans.md](references/humans.md) for objects, [experts.md](references/experts.md)
   for creatures or fights, and [npcs.md](references/npcs.md) for people or
   dialogue.
   A business, shop, tavern, or service request uses the Business row in
   [surfaces.md](references/surfaces.md); no other reference authorizes filling
   missing stock or layout.
3. Read the owning parent and current table state. Preserve established and
   locked canon, distinguish beliefs from facts, and do not add canon in this
   prose pass. If the parent lacks a usable signature, first-sight facts, or
   affordance, invoke the owning craft skill before drafting.
4. Run the evidence-of-access and hidden-truth checks in
   [references/boundary.md](references/boundary.md). Every player-facing
   detail needs a legitimate access channel. An uncertainty marker may label
   only an inference grounded in named evidence; it cannot create access.
   Without a channel, cut the detail or route to the owning content-stock
   skill.
5. For a standalone portrait, compose before you enumerate: make a private
   thumbnail of the whole or type plus one dominant supported visible
   distinction. Keep a private, unordered coverage checklist of supported
   portrait facts; it is an audit, not an outline. Choose an organizing spine
   independently of both source order and checklist order — a dominant
   supported relationship, contrast, or use when the subject supplies one — and
   draft around that spine and thumbnail. Relate remaining facts through
   supported relationships among the subject's parts, material, habitat, and
   behavior. Check the unordered checklist afterward so the hierarchy does not
   omit a required fact; never turn its sequence into the prose order.
6. Before drafting from an owning parent or reference, use the structural
   fresh-phrasing gate in [references/boundary.md](references/boundary.md).
   Make the fragmentary fact inventory there, then set source architecture and
   wording aside before drafting. Expert examples in references are analysis
   examples, not lines to echo into generated prose.

## Invariants across surfaces

- Use a plain noun and a concrete verb first (**kitchen-table** language on
  places, creatures, and items alike: river mouths, not river cuts; clear body,
  not lobed mantle). Add at most one unusual comparison when it makes the thing
  memorable. Give one setting-specific signature property (material, practice,
  sound, behavior, or contradiction) to a usable noun or affordance. Generic
  mood must come from evidence. A signature or camouflage claim must be
  **drawable evidence** (named color, material, edge, mismatch a looker could
  miss), not a purple merge (`takes branch and leaf`, `becomes the canopy`,
  `merges with the green`). Do not fake completeness with **mood-by-negation**
  (`rather than glitter`, `not flashy`, `without dazzle`) or a **cover-story
  simile** that replaces a drawable physical behavior (`spins like a meditation
  focus`).
- **No em dashes** (`—`) or en-dash stand-ins in player-facing prose. Use a
  period, comma, or parenthesis. Examples teach moves, not punctuation or
  sentence architecture to echo.
- Prefer flowing prose over bullet-shaped sentences. Fold color, material,
  posture, and minor anatomy onto the body or place that owns them. A portrait
  or first look should leave a drawable whole after one hearing; a single dry
  identifying sentence is usually too thin unless the surface is a hit, reveal,
  or dialogue turn.
- Characters perceive; players interpret. Never narrate a PC's feeling,
  thought, choice, route, conclusion, or unresolved outcome. Show the resolved
  stimulus, behavior, and consequence, then leave the next player response
  open. For a standalone creature response state, use the terminal pattern
  `observable stimulus → observable response → stop`; do not explain what is
  unseen or what the response means. See [references/boundary.md](references/boundary.md)
  for the structural and creature-response gates.
- Keep facts within the current viewpoint, established automatic knowledge,
  a declared and resolved interaction, or earned public canon. A permissible
  inference must follow from named perceivable evidence or established
  knowledge; “maybe” does not make an invented detail safe. Source silence is
  not permission to fill a gap with genre defaults. Do not let vivid language
  smuggle in an unearned interior, history, function, magic, motive, or rule.
- Source wording is not player-facing canon. Preserve supported facts while
  materially rephrasing parent and reference prose; retain only proper names,
  necessary measurements, and irreducible game terms when paraphrase would
  change identity or accuracy. Explicitly requested in-world quotations are the
  sole narrow exception.
- Use the branch's tense, wrapper, and shape. A player-safe surface contains no
  `[!secret]-` material, hidden certainty, DC, HP, condition, or other private
  procedure. Reread it as a player who cannot rewind.

## Spatial work

Place, encounter, travel, and vehicle writing use the spatial camera and
staging method in [references/surfaces.md](references/surfaces.md) and
[references/places.md](references/places.md). Within that branch, seat one
camera, choose one frame, relate landmarks to it, and keep distances and
units consistent. For a spatial first look, a stranger should be able to say
where they are, what they see, what is moving, and what matters now. A located
change is a useful live handle, not a mandatory ending when the scene has no
current movement.

The spatial staging card is a private drafting aid: stage, near, far, block,
three to five anchors, and the current opening. Audit visible entrances,
exits, retreat, cover, blocked paths, and traversable hazards whenever those
facts affect a decision. Introduce each landmark once, then reuse it.

For a requested full or loaded spatial first look, complete the current visible
state in that one block before stopping: include every relevant visible subject,
relationship, route, and motion, while leaving hidden items and future outcomes
out. Stop after that complete state at its pressure or opening. Only an
explicitly requested doorway-only snapshot may be intentionally partial.

## Draft and review

Choose the branch, select the facts that pass the boundary, and draft only to
its natural stop. Keep a signature property tied to an affordance, not floating
as decoration. Draft in connected prose first — whole picture, then trim —
rather than starting from a one-line stub and padding.

Read the result aloud once. Ask the branch's questions from
[references/surfaces.md](references/surfaces.md), then run the slop and thin
gates in [references/voice.md](references/voice.md). Fail the draft if a
player hearing it once cannot sketch or distinguish the subject. Cut
telegram lists, isolated details, private metaphors, premature labels,
unsupported mechanics, and future outcomes. Cut purple register that adds no
drawable fact. Add the missing noun, relationship, second sense, access, or
opening when the picture or agency is incomplete — never by stacking synonyms.

For spatial narration, use third person and present tense by default. For
other surfaces, follow their contract: dialogue can be quoted, recaps use
past tense, and handouts retain their diegetic owner's voice. Draft layers,
staging cards, analysis, and routing labels stay off the player-facing page.
