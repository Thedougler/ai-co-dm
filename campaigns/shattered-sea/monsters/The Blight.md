---
type: monster
campaign: shattered-sea
status: active
role: controller
cr: 15
source: house (Monster-Brewer; Hinewai/Death Bloom ingest 2026-09-05)
visibility: dm
tags: [monster, aruhe, blight, hinewai]
aliases: [Hinewai, The Blight]
---

```statblock
layout: Basic 5e Layout
name: "Hinewai, the Blight (Stage 1 — Bloom Whole)"
size: Large
type: undead
alignment: unaligned
ac: "17 (land-fused form)"
hp: 210
hit_dice: "20d10 + 100"
speed: "30 ft., climb 30 ft."
stats: [18, 14, 20, 14, 20, 16]
saves:
  - dexterity: 7
  - constitution: 10
  - wisdom: 10
skillsaves:
  - nature: 7
  - perception: 10
  - survival: 10
damage_resistances: "cold, necrotic"
condition_immunities: "charmed, exhaustion, frightened, poisoned"
senses: "darkvision 120 ft., passive Perception 20"
languages: "the languages it knew in life"
cr: 15
traits:
  - name: "Rooted Return"
    desc: "If Hinewai's walking form is destroyed while the Death Bloom is not ruined, she reforms at the tree in 1d10 days (the handful-of-days table assumption). This trait does not function after the Death Bloom is ruined."
  - name: "Land-Fused Movement"
    desc: "Hinewai can move through nonmagical plants without extra movement. Nonmagical plants don't impede her movement, and difficult terrain in the Grove costs her no extra movement."
  - name: "Bloom-Linked Weakness"
    desc: "Hinewai uses this stage only while the Death Bloom is whole. Damage to her walking form never advances the Death Bloom state track."
actions:
  - name: "Multiattack"
    desc: "Hinewai makes three Gravewood Claw attacks."
  - name: "Gravewood Claw"
    desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) slashing damage."
  - name: "Stillness Takes Root (Recharge 5–6)"
    desc: "Hinewai gathers the Grove's unfinished rot in a 20-foot-radius sphere centered on a point she can see within 90 feet. Each creature in the area makes a DC 18 Constitution saving throw. On a failed save, a creature takes 27 (6d8) necrotic damage and has Speed 0 until the end of Hinewai's next turn. On a successful save, it takes half as much damage and its Speed is halved until the end of Hinewai's next turn."
legendary_actions:
  - name: ""
    desc: "Hinewai can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. She regains spent legendary actions at the start of her turn."
  - name: "Rootstep (Costs 1 Action)"
    desc: "Hinewai moves up to 20 feet without provoking Opportunity Attacks. She can move through nonmagical plants during this movement."
  - name: "Gravewood Claw (Costs 1 Action)"
    desc: "Hinewai makes one Gravewood Claw attack."
  - name: "Root Tangle (Costs 2 Actions)"
    desc: "One creature Hinewai can see within 60 feet makes a DC 18 Strength saving throw. On a failed save, the creature's Speed is 0 until the end of its next turn. On a successful save, the creature's Speed is halved until the end of its next turn."
```

```statblock
layout: Basic 5e Layout
name: "Hinewai, the Blight (Stage 2 — Bloom Wounded)"
size: Large
type: undead
alignment: unaligned
ac: "16 (land-fused form)"
hp: 136
hit_dice: "16d10 + 48"
speed: "30 ft., climb 20 ft."
stats: [16, 12, 16, 12, 18, 14]
saves:
  - dexterity: 5
  - constitution: 7
  - wisdom: 8
skillsaves:
  - nature: 6
  - perception: 8
  - survival: 8
damage_resistances: "cold, necrotic"
condition_immunities: "charmed, exhaustion, frightened, poisoned"
senses: "darkvision 90 ft., passive Perception 18"
languages: "the languages it knew in life"
cr: 11
traits:
  - name: "Rooted Return"
    desc: "If Hinewai's walking form is destroyed while the Death Bloom is not ruined, she reforms at the tree in 1d10 days (the handful-of-days table assumption). This trait does not function after the Death Bloom is ruined."
  - name: "Land-Fused Movement"
    desc: "Hinewai can move through nonmagical plants without extra movement. Nonmagical plants don't impede her movement, and difficult terrain in the Grove costs her no extra movement."
  - name: "Bloom-Linked Weakness"
    desc: "Hinewai uses this stage while the Death Bloom is wounded. Damage to her walking form never advances the Death Bloom state track."
actions:
  - name: "Multiattack"
    desc: "Hinewai makes two Gravewood Claw attacks."
  - name: "Gravewood Claw"
    desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
  - name: "Stillness Takes Root (Recharge 5–6)"
    desc: "Hinewai gathers the Grove's unfinished rot in a 15-foot-radius sphere centered on a point she can see within 60 feet. Each creature in the area makes a DC 16 Constitution saving throw. On a failed save, a creature takes 22 (5d8) necrotic damage and has Speed 0 until the end of Hinewai's next turn. On a successful save, it takes half as much damage and its Speed is halved until the end of Hinewai's next turn."
legendary_actions:
  - name: ""
    desc: "Hinewai can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. She regains spent legendary actions at the start of her turn."
  - name: "Rootstep (Costs 1 Action)"
    desc: "Hinewai moves up to 15 feet without provoking Opportunity Attacks. She can move through nonmagical plants during this movement."
  - name: "Gravewood Claw (Costs 1 Action)"
    desc: "Hinewai makes one Gravewood Claw attack."
  - name: "Root Tangle (Costs 2 Actions)"
    desc: "One creature Hinewai can see within 45 feet makes a DC 16 Strength saving throw. On a failed save, the creature's Speed is 0 until the end of its next turn. On a successful save, the creature's Speed is halved until the end of its next turn."
```

```statblock
layout: Basic 5e Layout
name: "Hinewai, the Blight (Stage 3 — Bloom Near Ruin)"
size: Large
type: undead
alignment: unaligned
ac: "14 (failing land-fusion)"
hp: 78
hit_dice: "12d8 + 24"
speed: "20 ft., climb 10 ft."
stats: [14, 10, 14, 10, 15, 10]
saves:
  - constitution: 5
  - wisdom: 5
skillsaves:
  - nature: 5
  - perception: 5
damage_resistances: "necrotic"
condition_immunities: "charmed, exhaustion, frightened, poisoned"
senses: "darkvision 60 ft., passive Perception 15"
languages: "the languages it knew in life"
cr: 7
traits:
  - name: "Rooted Return"
    desc: "If Hinewai's walking form is destroyed while the Death Bloom is not ruined, she reforms at the tree in 1d10 days (the handful-of-days table assumption). This trait does not function after the Death Bloom is ruined."
  - name: "Failing Land-Fusion"
    desc: "Hinewai can move through nonmagical plants without extra movement, but difficult terrain affects her normally. Damage to her walking form never advances the Death Bloom state track."
  - name: "Near Ruin"
    desc: "Hinewai uses this stage while the Death Bloom is near ruin. She cannot restore a damaged memorial component."
actions:
  - name: "Multiattack"
    desc: "Hinewai makes two Gravewood Claw attacks."
  - name: "Gravewood Claw"
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 3) slashing damage."
  - name: "Stillness Breaks (Recharge 5–6)"
    desc: "Hinewai cracks the ground in a 15-foot-radius sphere centered on a point she can see within 60 feet. Each creature in the area makes a DC 13 Dexterity saving throw, taking 14 (4d6) bludgeoning damage and falling Prone on a failed save, or half as much damage without falling Prone on a successful one."
legendary_actions:
  - name: ""
    desc: "Hinewai can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. She regains spent legendary actions at the start of her turn."
  - name: "Rootstep (Costs 1 Action)"
    desc: "Hinewai moves up to 10 feet without provoking Opportunity Attacks."
  - name: "Gravewood Claw (Costs 1 Action)"
    desc: "Hinewai makes one Gravewood Claw attack."
  - name: "Root Tangle (Costs 2 Actions)"
    desc: "One creature Hinewai can see within 30 feet makes a DC 13 Strength saving throw. On a failed save, the creature's Speed is 0 until the end of its next turn. On a successful save, the creature's Speed is halved until the end of its next turn."
```

> [!narration] Narration
> _Visualizer: Hinewai fight sheet pending._

# The Blight / Hinewai

## At the table
**Tactic:** stand between the party and the memorial, make stillness costly, and spend off-turn movement to force a choice between Hinewai and the Death Bloom. **Tell:** the tree keeps fruit at one impossible ripeness; when a component is struck, wind, sap, flowers, and roots visibly change. **Win condition:** ruin the Death Bloom, not the walking body.

## Fiction signature
- **Fantasy:** a land-fused druid's grief walking in the shape of an unfinished garden.
- **Signature:** she turns growth into stillness and uses the memorial's damage to shed power in visible stages.
- **Goal:** keep the companion's memorial and living Aruhe from being taken, wasted, or made to move on.
- **Fear:** ownership, careless change, and the loss of the Death Bloom that holds both graves and her relationship to them.
- **Counterplay:** split the party's attention; attack named memorial components, interrupt her positioning, or force the final relationship to release without treating the Bloom as a portable object.
- **Proof:** a real memorial wound makes the tree's sap darken, a flower close, a grave's soil shift, or wind cross a patch of formerly still grass.

## Role / rank / assumptions
Controller, solo/legendary boss; full design rather than a reskin or small variant. The fight has a place-bound win condition, three objective-driven stages, and no generic spell battery, so a bespoke chassis is the smallest clear design. Numbers assume a four-character tier-3 party; Stage 1 is the opening hard solo dial, and Stages 2 and 3 are weakening phase dials, not three monsters or three XP awards.

The statblocks use the 2024/2025 notation and the house rule from the homebrew skill: each stage has 3 Legendary Actions, spent one at a time at the end of another creature's turn, returning at the start of Hinewai's turn. The roots' short movement lock is written as Speed 0 rather than the full Restrained condition.

## Death Bloom / phylactery state track

The Death Bloom is **the tree, both graves, black-flower ring, bound soil, and the ritual relationship between them**. It is not a detachable item and never gets carried, pocketed, or smashed as a single object. Do not give it an initiative. Keep the following component track beside Hinewai's hit points.

| Component | Intact → wounded → ruined | What counts at the table |
|---|---|---|
| Fruit tree | intact → first scar → split → fallen | The tree is AC 16 with 30 Integrity. The first successful deliberate attack, damaging spell, or suitable tool marks a scar and wounds the Bloom immediately; subsequent damage uses its normal Integrity. At 20 total Integrity, roots show and the Bloom is near ruin; at 30, the tree is fallen. Tree damage never transfers to Hinewai's HP. |
| Companion's grave | sealed → opened → emptied/broken | A creature adjacent can attack the grave (AC 13, 15 Integrity) or spend an action to open and disturb it with DC 15 Athletics, Nature, or Survival. Do not let a single failed check end the attempt; the grave is an exposed objective. |
| Hinewai's grave | sealed → opened → emptied/broken | Use the companion grave's AC, Integrity, and action options. The second grave is the mechanism, not a hidden portable phylactery. |
| Black-flower ring | whole → a visible gap → ring broken | The ring is AC 14, 20 Integrity. Damaging a section or clearing a five-foot gap marks it wounded; breaking the ring into several gaps ruins this component. Flowers do not become attacking creatures. |
| Bound soil | held → loosened → ordinary soil | The soil is not a separate item. A creature adjacent can use an action for DC 16 Athletics, Nature, or Survival to loosen it, or damage the exposed ground (AC 15, 20 Integrity) with an appropriate tool or effect. The tell is that roots begin crossing a grave. |
| Ritual relationship | holding → interrupted → severed | This cannot be solved by damage. After the five physical components are ruined, two different creatures must each spend an action at the tree/graves and succeed on DC 17 Nature, Religion, or Insight, or present a declared act that lets the memorial resume a living cycle. A failure wastes that action; a second success severs the relationship. No single check, object, or spell is the whole solution. |

### Stage mapping

1. **Stage 1 — Bloom Whole:** all components intact. Hinewai uses the Stage 1 block.
2. **Stage 2 — Bloom Wounded:** the first meaningful wound to the tree, or the first other memorial component becoming wounded. Switch to Stage 2 at the end of the triggering creature's turn. A hit on the walking form alone never does this.
3. **Stage 3 — Bloom Near Ruin:** the tree reaches 20 Integrity, **or** three physical components are wounded, whichever comes first. Switch immediately after the trigger and show the failure: wind crosses the grass, the tree's roots show, or the flowers close in a line.
4. **Death Bloom Ruined:** the tree, both graves, flower ring, bound soil, and ritual relationship are all ruined/severed. Hinewai's current walking form collapses if still present, and she stays dead permanently. There is no Stage 4 and no replacement phylactery.

**Striking the tree:** target the tree or its roots, not Hinewai. A hit is a visible scar and applies the tree's Integrity damage; a miss can still make a useful tell if the players describe cutting, burning, or digging at a component. **Wounding the Bloom:** move any component from intact to wounded; this drops Hinewai to Stage 2. **Ruining the Bloom:** finish every listed component and sever the relationship; partial destruction can weaken Hinewai but cannot grant permanent victory.

### Reform and failure state

If the walking body reaches 0 hit points while any part of the Death Bloom still holds, the body is destroyed but the encounter is not won. Hinewai reforms at the tree in **1d10 days** (house assumption for “a handful of days”), using the stage that the memorial has reached when she returns. If the party only focuses her body, they have bought time, not killed her; the Grove remains the real target. If the Bloom is ruined first, body destruction is permanent and the Grove follows the slower release timeline in [[The Grove - Death Bloom#Destruction timeline]].

## Tells and counterplay

- **Opening tell:** fruit hangs at a single perfect ripeness, no wind crosses the clearing, and the mourner line stays outside the black flowers. Hinewai begins near the tree and does not need a surprise round.
- **Stillness Takes Root:** dark roots visibly draw a circle before the save. Spread beyond the circle, move before it closes, or use the brief Speed lock to reach a memorial component rather than trading attacks with Hinewai.
- **Root Tangle:** the ground cracks first. Break line of effect, move out of plant cover, or spend an attack/action on the roots; it is a short movement lock, not a turn deletion.
- **Memorial counterplay:** use attacks, tools, damaging spells, digging, and declared restorative/severing actions. A character need not have a particular class, but the party must protect the people working the objective.
- **The body is a decoy objective:** it is still dangerous to leave Hinewai standing, but body damage does not advance any state. The party should assign at least one character to the Bloom when they want the fight to end.

## Three-round script

1. **Round 1 — Position:** Hinewai begins between the party and the tree. Use *Stillness Takes Root* if it catches two or more creatures; otherwise use Multiattack on the character closest to a memorial component. Spend Rootstep to keep the tree behind her and a Gravewood Claw or Root Tangle to punish overextension.
2. **Round 2 — Pressure:** if the party has not touched the Bloom, repeat pressure on the most mobile character and use Root Tangle when it stops a clean path. If a component is wounded, change to Stage 2 immediately and let the visible tell announce that the party found the real fight.
3. **Round 3 — Choice:** defend the component the party is actively working without undoing any progress. Use *Stillness Takes Root* / *Stillness Breaks* when it creates a choice between helping an ally and reaching the memorial. At Stage 3 she is desperate and slower; she attacks the body only when it blocks access to the near-ruined Bloom.

## Lightning rods and ecology

The memorial itself is the primary lightning rod: tree, two graves, flowers, soil, and the final relationship all give the party meaningful targets besides Hinewai. The Grove's terrain is the secondary pressure: still ground, roots, and ring gaps make routes legible without becoming a second monster sheet.

Terror-birds, walking deadwood, Crown Squid, upright deer, and other established fauna remain **independent mourners** at the tree line. Their presence can split attention, block a retreat, or make a careless area effect morally and tactically costly, but they do not become Hinewai's minions, puppets, hive mind, or controlled attacks. Do not invent new fauna for this fight.

## Design notes

### Reference-gate dossier

- **Anchor / 2024 notation:** [SRD 5.2.1](https://www.dndbeyond.com/srd) supplies the public rules anchor for current save, attack, condition, and legendary-action wording. The statblocks use explicit ranges, DCs, timing, and partial effects.
- **Official numerical peer:** the public [2024 Treant](https://www.dndbeyond.com/monsters/5195236-treant) is CR 9 with AC 16, 138 HP, +10 melee attacks, and a plant-objective identity without legendary actions. Pattern: a rooted plant can trade mobility for a strong physical target and a readable terrain relationship. Hinewai starts above that chassis because she is a solo undead controller with three off-turn choices, then deliberately falls below it as the memorial fails.
- **Role peer:** [Lazy GM's Monster Builder Resource Document](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) describes controllers as movement/position pressure that trade some direct damage for battlefield choice, and notes that a solo needs more than a single bag of hit points. Pattern: make the controller's placement and player answer explicit. Hinewai's memorial is the second target rather than an ally roster.
- **Mechanic peer:** the independent [MCDM Flee, Mortals! preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) uses concise off-turn villain actions and one-use dramatic beats to keep a solo active between player turns. Pattern: give the boss a small, visible off-turn menu instead of a generic spell list. Hinewai uses the requested 3 Legendary Actions, with movement, a basic attack, and one limited control option.
- **Math note:** Stage 1 uses AC 17/210 HP, +9 attacks, DC 18, and three 16-damage claws plus three one-use-per-turn off-turn choices; its recharge area is pressure, not an automatic full turn. Stage 2 is AC 16/136 HP, +7, DC 16, two 13-damage claws; Stage 3 is AC 14/78 HP, +5, DC 13, two 9-damage claws and a prone burst. Rough raw routine pressure falls from 96 to 78 to 54 before accuracy and saves; the party's objective work, movement, and lost turns are deliberately not hidden in DPR.
- **Deliberate deviation:** this is a full house design rather than a generic lich reskin. It has no stock lich spell battery, no detachable phylactery, no undead turn-resistance package, and no fauna command. The place-bound state track is the encounter's main mechanic.
- **Counterplay:** every strong effect has a tell and at least two answers: leave/spread or act on roots; use body damage to buy space or damage a component to end the cycle; use multiple skills or declared actions for the relationship. The tree's weakening is visible, and stage changes do not heal Hinewai or erase prior Bloom progress.
- **2024/2014 note:** legacy CRs and formulas were not copied. The 1d10 reform timer is retained as an explicit house assumption from the legacy pattern; attack, DC, HP, and action economy were rebuilt for 2024/2025 notation. 
- **Uncertainty / playtest:** the exact party level, damage mix, and willingness to split roles are unknown. Playtest whether the group can perceive that the tree is the actual win condition by the end of round 1; if the body feels irrelevant, raise one component's defensive tell rather than adding body HP, and if the memorial collapses too quickly, require the listed physical component states rather than inflating Hinewai.

## Running notes

- **Preferred position:** between the nearest party member and the tree; never hide the fact that the memorial is reachable.
- **Default choice:** Multiattack the nearest intruder, use the recharge action when it creates a two-target choice, and spend legendary actions on movement first, then one claw or Root Tangle.
- **If pressured:** retreat around the tree and force the party to choose pursuit or objective work. She does not heal from the Bloom and cannot restore ruined components.
- **If the signature is answered:** use claws and roots as a lean controller/bruiser; the fight remains playable after the area action is avoided.
- **Resource tracking:** each stage has Recharge 5–6, 3 Legendary Actions returning at the start of Hinewai's turn, and the external Death Bloom component track. Stage changes do not reset recharge or restore HP.
- **Failure state:** body-only victory gives the party 1d10 days before her return. A ruined Bloom gives permanent death but not an explosive Grove; use the location note for the weeks/months/years release.

## Provenance

House fight sheet owned by Monster-Brewer. Canon constraints and ecology cross-linked from [[The Blight]] and [[The Grove - Death Bloom]]. Legacy structure was consulted read-only at `/Users/nick/shattered-sea/wiki/shattered-sea/aruhe-hungry-isle/creature.blight.md`; no legacy stat math or proprietary WotC text was copied.
