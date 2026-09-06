---
type: monster
campaign: shattered-sea
visibility: dm
source: "legacy: /Users/nick/shattered-sea/wiki/shattered-sea/creature.island-mimic.md"
tags: [monster, legacy]
---
```statblock
layout: Basic 5e Layout
name: "Island Mimic"
size: Gargantuan
type: monstrosity
alignment: Unaligned
ac: 17
hp: 122
hit_dice: "7d20 + 49"
speed: "0 ft."
stats: [24, 6, 24, 2, 13, 4]
saves:
  - Con: +11
  - Wis: +5
damage_vulnerabilities: "fire"
damage_immunities: "bludgeoning, piercing, and slashing from nonmagical attacks; poison"
condition_immunities: "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious"
senses: "tremorsense 1 mile; passive Perception 11"
languages: "understands no languages but understands when it is being burned"
cr: 12
traits:
  - name: "Legendary Resistance (3/Day)"
    desc: "If the island fails a saving throw, it can choose to succeed instead."
  - name: "Fire Release"
    desc: "Whenever the island takes fire damage, it immediately releases every creature within 30 feet of the damage's source, ending the Grappled condition on each of them."
  - name: "Adhesive Ground (Interior Only, While Triggered)"
    desc: "The ground adheres to any creature on the island's interior. When Adhesive Ground triggers, every creature already on the interior has the Grappled condition. Any creature that afterward enters or starts its turn on the interior likewise has the Grappled condition, automatically, no saving throw. Escape DC 17 Athletics or Acrobatics. Ability checks made to escape have Disadvantage."
  - name: "Total Release (0 Hit Points)"
    desc: "The island can't be killed by damage. When it is reduced to 0 hit points, it lets go completely: every creature it has Grappled is freed, Adhesive Ground ends, the heads stop closing and grind back open to their full 240-foot width, and the island goes dormant and drifts off to heal. It is not dead, and it will be somewhere else within the season."
  - name: "Wounded Resolve"
    desc: "The first time the island is reduced to 62 hit points or fewer, it stops being patient: for the rest of the encounter, its Heads Close lair action narrows the gap by 40 feet instead of 20, to the same 14-foot minimum. This doesn't stack with Close the Throat — once Wounded Resolve is active, Heads Close already narrows by 40 feet, and spending legendary actions on Close the Throat has no further effect."
actions:
  - name: "Multiattack"
    desc: "The island uses Crush twice, targeting two different creatures it is grappling."
  - name: "Crush"
    desc: "Constitution Saving Throw: DC 17, one creature Grappled by the island. Failure: 40 (6d8 + 13) Bludgeoning damage. Success: Half damage."
legendary_actions:
  - name: ""
    desc: "The island can take 3 legendary actions, choosing from the options below, but only while its Adhesive Ground trait is active. Only one legendary action can be used at a time and only at the end of another creature's turn. The island regains spent legendary actions at the start of its turn."
  - name: "Draw Under"
    desc: "One creature Grappled by the island is pulled up to 15 feet toward the island's interior."
  - name: "The Ground Breathes"
    desc: "Each creature within 20 feet of a point the island can sense must succeed on a DC 17 Strength saving throw or have the Prone condition."
  - name: "Close the Throat (Costs 2 Actions)"
    desc: "The gap between the bay's rock arms narrows by 40 feet instead of 20 the next time the Heads Close lair action resolves, to the same 14-foot minimum. This doesn't stack with Wounded Resolve — once the island has dropped to 62 hit points or fewer, Heads Close already narrows by 40 feet, and this option has no further effect."
lair_actions:
  - desc: "On initiative count 20 (losing initiative ties), the island takes a lair action to cause one of the following effects. The island can't use the same effect two rounds in a row."
  - desc: "The Heads Close. The gap between the bay's rock arms, 240 feet (eighty yards) wide when the heads begin closing, narrows by 20 feet, to a minimum of 14 feet — the width held open by a dead ship's spine, wedged in the throat long before this crew arrived."
  - desc: "Warm Water Surges. The pool at the stream's source boils over in a rush of steam, heavily obscuring a 15-foot-radius area around it until initiative count 20 on the next round."
  - desc: "Fruit Falls. Every fruit-bearing tree on the island drops its fruit at once, in a sound like applause."
```

# Island Mimic

## At the table
Use the original legacy Fantasy Statblock when this creature or combatant enters play.

## Provenance
Legacy fence imported verbatim from `/Users/nick/shattered-sea/wiki/shattered-sea/creature.island-mimic.md`.
