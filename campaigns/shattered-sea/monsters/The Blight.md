---
type: monster
campaign: shattered-sea
status: active
role: controller
cr: 19
source: "house (Monster-Brewer; legacy Fantasy Statblock import; Hinewai/Death Bloom ingest 2026-09-05)"
visibility: dm
tags: [monster, aruhe, blight, hinewai]
aliases: [Hinewai, The Blight]
---

```statblock
layout: Basic 5e Layout
name: "Blight (Stage 1)"
size: Large
type: undead
alignment: "any alignment"
ac: 18
hp: 275
hit_dice: "34d10 + 102"
speed: "30 ft., climb 30 ft."
stats: [20, 14, 16, 17, 20, 15]
saves:
  - constitution: 9
  - wisdom: 11
skillsaves:
  - nature: 10
  - perception: 11
  - survival: 11
damage_resistances: "cold, necrotic, poison; bludgeoning, piercing, and slashing from nonmagical attacks"
condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned"
senses: "darkvision 120 ft., passive Perception 21"
languages: "Druidic, the languages it knew in life"
cr: "19"
traits:
  - name: "Rooted Phylactery"
    desc: "While the Death Bloom remains intact, a destroyed Blight reforms at the Death Bloom in 1d10 days. Destroying the Death Bloom prevents this permanently."
  - name: "Corrupted Ground"
    desc: "The Blight can move through nonmagical plants without spending extra movement and without being slowed by them, and difficult terrain within 1 mile of the Death Bloom costs it no extra movement."
  - name: "Turn Resistance"
    desc: "The Blight has advantage on saving throws against any effect that turns undead."
spells:
  - "Spellcasting. The Blight casts spells using Wisdom as its spellcasting ability (spell save DC 19, +11 to hit) and requires no material components."
  - "At will: Druidcraft, Produce Flame, Thorn Whip"
  - "3/day each: Entangle, Moonbeam, Plant Growth, Spike Growth"
  - "2/day each: Insect Plague, Wall of Thorns"
  - "1/day each: Circle of Death, Foresight, Sunburst"
actions:
  - name: "Multiattack"
    desc: "The Blight makes two Rotten Claw attacks."
  - name: "Rotten Claw"
    desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) slashing damage plus 10 (3d6) poison damage."
  - name: "Acid Bloom (Recharge 5-6)"
    desc: "The Blight causes corrosive sap to erupt in a 20-foot-radius sphere centered on a point it can see within 60 feet. Each creature in that area must make a DC 19 Dexterity saving throw, taking 36 (8d8) acid damage on a failed save, or half as much damage on a successful one."
legendary_actions:
  - name: ""
    desc: "The Blight can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The Blight regains spent legendary actions at the start of its turn."
  - name: "Grasping Roots"
    desc: "Roots burst from the ground in a 10-foot square the Blight can see within 60 feet. Each creature there must succeed on a DC 19 Strength saving throw or be restrained until the end of its next turn."
  - name: "Rotten Claw (Costs 2 Actions)"
    desc: "The Blight makes one Rotten Claw attack."
  - name: "Spore Burst (Costs 2 Actions)"
    desc: "One creature the Blight can see within 30 feet must succeed on a DC 19 Constitution saving throw or be poisoned until the end of its next turn."
  - name: "Feed the Bloom (Costs 3 Actions)"
    desc: "The Blight regains 20 hit points, drawn from the Death Bloom."
```

```statblock
layout: Basic 5e Layout
name: "Blight (Stage 2)"
size: Large
type: undead
alignment: "any alignment"
ac: 16
hp: 165
hit_dice: "22d10 + 44"
speed: "30 ft., climb 30 ft."
stats: [18, 12, 14, 15, 17, 12]
saves:
  - constitution: 6
  - wisdom: 7
skillsaves:
  - nature: 6
  - perception: 7
damage_resistances: "cold, necrotic, poison; bludgeoning, piercing, and slashing from nonmagical attacks"
condition_immunities: "charmed, exhaustion, frightened, paralyzed, poisoned"
senses: "darkvision 90 ft., passive Perception 17"
languages: "Druidic, the languages it knew in life"
cr: "13"
traits:
  - name: "Rooted Phylactery"
    desc: "While the Death Bloom remains intact, a destroyed Blight reforms at the Death Bloom in 1d10 days. Destroying the Death Bloom prevents this permanently."
  - name: "Corrupted Ground"
    desc: "The Blight can move through nonmagical plants without spending extra movement and without being slowed by them."
  - name: "Turn Resistance"
    desc: "The Blight has advantage on saving throws against any effect that turns undead."
spells:
  - "Spellcasting. The Blight casts spells using Wisdom as its spellcasting ability (spell save DC 15, +7 to hit) and requires no material components."
  - "At will: Druidcraft, Produce Flame, Thorn Whip"
  - "2/day each: Entangle, Moonbeam, Spike Growth"
  - "1/day each: Insect Plague, Wall of Thorns"
actions:
  - name: "Multiattack"
    desc: "The Blight makes two Rotten Claw attacks."
  - name: "Rotten Claw"
    desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage plus 7 (2d6) poison damage."
  - name: "Acid Bloom (Recharge 6)"
    desc: "The Blight causes corrosive sap to erupt in a 15-foot-radius sphere centered on a point it can see within 60 feet. Each creature in that area must make a DC 15 Dexterity saving throw, taking 22 (4d10) acid damage on a failed save, or half as much damage on a successful one."
legendary_actions:
  - name: ""
    desc: "The Blight can take 2 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The Blight regains spent legendary actions at the start of its turn."
  - name: "Grasping Roots"
    desc: "Roots burst from the ground in a 10-foot square the Blight can see within 60 feet. Each creature there must succeed on a DC 15 Strength saving throw or be restrained until the end of its next turn."
  - name: "Rotten Claw (Costs 2 Actions)"
    desc: "The Blight makes one Rotten Claw attack."
```

```statblock
layout: Basic 5e Layout
name: "Blight (Stage 3)"
size: Large
type: undead
alignment: "any alignment"
ac: 14
hp: 75
hit_dice: "10d10 + 20"
speed: "20 ft., climb 10 ft."
stats: [15, 10, 12, 12, 13, 10]
skillsaves:
  - nature: 3
damage_resistances: "poison; bludgeoning, piercing, and slashing from nonmagical attacks"
condition_immunities: "charmed, exhaustion, frightened, poisoned"
senses: "darkvision 60 ft., passive Perception 11"
languages: "Druidic, the languages it knew in life"
cr: "7"
traits:
  - name: "Rooted Phylactery"
    desc: "While the Death Bloom remains intact, a destroyed Blight reforms at the Death Bloom in 1d10 days. Destroying the Death Bloom prevents this permanently."
  - name: "Corrupted Ground"
    desc: "The Blight can move through nonmagical plants without spending extra movement and without being slowed by them."
actions:
  - name: "Rotten Claw"
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage plus 4 (1d8) poison damage."
  - name: "Acid Seep (Recharge 6)"
    desc: "A 10-foot-radius patch of ground the Blight can see within 30 feet wells up with acid. Each creature there must make a DC 12 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one. The patch remains as a hazard for 1 minute, and any creature that enters it or starts its turn there for the first time on a turn must make the same save."
```


> [!narration] Narration
> Hinewai walks the Grove as a large ivory skeleton under a mantle of moss and rotted bark. Green fire burns in the eye sockets, and long black hair tangles with fruiting vines while leafless branches rise from the shoulders. One forearm is sheathed in dark wood that ends in a clawed hand.


# The Blight / Hinewai

## At the table
**Tactic:** stand between the party and the memorial, make the approach costly, and spend off-turn roots, claws, or spores to force a choice between Hinewai and the Death Bloom. **Tell:** the tree keeps fruit at one impossible ripeness; when a component is struck, wind, sap, flowers, and roots visibly change. **Win condition:** ruin the Death Bloom, not the walking body.

## Fiction signature
- **Fantasy:** a land-fused druid's grief walking in the shape of an unfinished garden.
- **Signature:** she turns growth into stillness and uses the memorial's damage to shed power in visible stages.
- **Goal:** keep the companion's memorial and living Aruhe from being taken, wasted, or made to move on.
- **Fear:** ownership, careless change, and the loss of the Death Bloom that holds both graves and her relationship to them.
- **Counterplay:** split the party's attention; attack named memorial components, interrupt her positioning, or force the final relationship to release without treating the Bloom as a portable object.
- **Proof:** a real memorial wound makes the tree's sap darken, a flower close, a grave's soil shift, or wind cross a patch of formerly still grass.

## Role / rank / assumptions
Controller, solo/legendary boss; legacy three-stage boss chassis. Stage 1 is CR 19, Stage 2 is CR 13, and Stage 3 is CR 7. These are weakening phases of one place-bound being, not three monsters or three XP awards. Use the Death Bloom state track to choose the block.

The fences are the original legacy Fantasy Statblock import. They retain the original spell lists, Rooted Phylactery, Rotten Claw, Acid Bloom, Acid Seep, legendary actions, and Feed the Bloom. The surrounding house text adds only the Bloom objective track and current ecology constraints.

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
- **Acid Bloom:** corrosive sap erupts at the chosen point. Spread beyond the sphere, use cover if available, or move before the area is chosen. Then work on a memorial component.
- **Grasping Roots / Spore Burst:** roots burst before the save and spores cling to the target. Move out of the square, break line of effect, or accept the short condition while another creature works the Bloom.
- **Memorial counterplay:** use attacks, tools, damaging spells, digging, and declared restorative/severing actions. A character need not have a particular class, but the party must protect the people working the objective.
- **The body is a decoy objective:** it is still dangerous to leave Hinewai standing, but body damage does not advance any state. The party should assign at least one character to the Bloom when they want the fight to end.

## Three-round script

1. **Round 1 — Position:** Hinewai begins between the party and the tree. Use *Acid Bloom* if it catches two or more creatures. Otherwise use Multiattack on the character closest to a memorial component. Spend a legendary action on Grasping Roots or Spore Burst to punish overextension.
2. **Round 2 — Pressure:** if the party has not touched the Bloom, repeat pressure on the most mobile character. Use Grasping Roots to protect the path to the tree. If a component is wounded, change to Stage 2 immediately and let the visible tell announce that the party found the real fight.
3. **Round 3 — Choice:** defend the component the party is actively working without undoing any progress. At Stage 1, use Feed the Bloom only when the party has damaged Hinewai instead of the memorial. At Stage 3, use Acid Seep to make the final approach costly. Hinewai attacks the body only when it blocks access to the near-ruined Bloom.

## Lightning rods and ecology

The memorial itself is the primary lightning rod: tree, two graves, flowers, soil, and the final relationship all give the party meaningful targets besides Hinewai. The Grove's terrain is the secondary pressure: still ground, roots, and ring gaps make routes legible without becoming a second monster sheet.

Terror-birds, walking deadwood, Crown Squid, upright deer, and other established fauna remain **independent mourners** at the tree line. Their presence can split attention, block a retreat, or make a careless area effect morally and tactically costly, but they do not become Hinewai's minions, puppets, hive mind, or controlled attacks. Do not invent new fauna for this fight.

## Design notes

### Reference-gate dossier

- **Anchor / 2024 notation:** [SRD 5.2.1](https://www.dndbeyond.com/srd) supplies the public rules anchor for current save, attack, condition, and legendary-action wording. The statblocks use explicit ranges, DCs, timing, and partial effects.
- **Official numerical peer:** the public [2024 Treant](https://www.dndbeyond.com/monsters/5195236-treant) is CR 9 with AC 16, 138 HP, +10 melee attacks, and a plant-objective identity without legendary actions. Pattern: a rooted plant can trade mobility for a strong physical target and a readable terrain relationship. Hinewai starts above that chassis because she is a solo undead controller with three off-turn choices, then deliberately falls below it as the memorial fails.
- **Role peer:** [Lazy GM's Monster Builder Resource Document](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) describes controllers as movement/position pressure that trade some direct damage for battlefield choice, and notes that a solo needs more than a single bag of hit points. Pattern: make the controller's placement and player answer explicit. Hinewai's memorial is the second target rather than an ally roster.
- **Mechanic peer:** the independent [MCDM Flee, Mortals! preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) uses concise off-turn villain actions and one-use dramatic beats to keep a solo active between player turns. Pattern: give the boss a small, visible off-turn menu instead of a generic spell list. The imported blocks retain their original menus: Stage 1 has three legendary actions, Stage 2 has two, and Stage 3 has none.
- **Math note:** the imported legacy fences set the phase benchmarks: Stage 1 is AC 18 / 275 HP / CR 19, Stage 2 is AC 16 / 165 HP / CR 13, and Stage 3 is AC 14 / 75 HP / CR 7. The house state track determines when the party changes blocks. No additional Monster Manual text or replacement math was added.
- **Import boundary:** the legacy blocks remain primary. They include the original druid-lich spell list, turn resistance, Rooted Phylactery, and stage abilities. The house note adds the place-bound Bloom state track, no-puppet-fauna constraint, and destruction cross-links.
- **Counterplay:** every strong effect has a tell and at least two answers: leave/spread or act on roots; use body damage to buy space or damage a component to end the cycle; use multiple skills or declared actions for the relationship. The tree's weakening is visible, and stage changes do not heal Hinewai or erase prior Bloom progress.
- **2024/2014 note:** no mechanical 2024 rewrite was required for the imported fences. The legacy Fantasy Statblock field names and wording remain primary. The 1d10 reform timer and all stage numbers stay as written in the source.
- **Uncertainty / playtest:** the exact party level, damage mix, and willingness to split roles are unknown. Playtest whether the group can perceive that the tree is the actual win condition by the end of round 1; if the body feels irrelevant, raise one component's defensive tell rather than adding body HP, and if the memorial collapses too quickly, require the listed physical component states rather than inflating Hinewai.

## Running notes

- **Preferred position:** between the nearest party member and the tree; never hide the fact that the memorial is reachable.
- **Default choice:** Multiattack the nearest intruder, use Acid Bloom when it creates a two-target choice, and spend legendary actions on Grasping Roots first, then Rotten Claw or Spore Burst.
- **If pressured:** retreat around the tree and force the party to choose pursuit or objective work. She does not heal from the Bloom and cannot restore ruined components.
- **If the signature is answered:** use claws and roots as a lean controller/bruiser; the fight remains playable after the area action is avoided.
- **Resource tracking:** Stage 1 has Recharge 5–6, 3 legendary actions, and Feed the Bloom. Stage 2 has Recharge 6 and 2 legendary actions. Stage 3 has Recharge 6 and no legendary-action section. All stages use the external Death Bloom component track. Stage changes do not reset the track or restore the walking body.
- **Failure state:** body-only victory gives the party 1d10 days before her return. A ruined Bloom gives permanent death but not an explosive Grove; use the location note for the weeks/months/years release.

## Provenance

House fight sheet owned by Monster-Brewer. Canon constraints and ecology cross-linked from [[The Blight]] and [[The Grove - Death Bloom]]. The three runnable fences are a legacy Fantasy Statblock import from `/Users/nick/shattered-sea/wiki/shattered-sea/aruhe-hungry-isle/creature.blight.md`, restored as the primary stage blocks. No proprietary text was added beyond the legacy fences. No 2024 notation fix was required by lint.
