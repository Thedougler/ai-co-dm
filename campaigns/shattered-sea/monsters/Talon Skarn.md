---
type: monster
campaign: shattered-sea
role: skirmisher
cr: 13
visibility: dm
source: "Revised from legacy: /Users/nick/shattered-sea/wiki/shattered-sea/schism-of-the-eyrie/npc.talon-skarn.md"
tags: [monster, countless, fight-sheet]
---
## Statblock

```statblock
layout: Basic 5e Layout
dice: true
columns: 2
forceColumns: true
name: Talon Skarn
size: Medium
type: humanoid
alignment: lawful evil
ac: "20 (battle-hardened defense)"
hp: 171
hit_dice: "18d8 + 90"
speed: "50 ft."
stats: [20, 20, 20, 14, 16, 18]
saves:
  - Str: +10
  - Dex: +10
  - Con: +10
  - Wis: +8
skillsaves:
  - Acrobatics: +10
  - Athletics: +15
  - Intimidation: +14
  - Perception: +8
damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks"
condition_immunities: "frightened"
senses: "darkvision 120 ft., passive Perception 18"
languages: "Common plus two others"
cr: 13
traits:
  - name: Chained Arsenal
    desc: "Skarn's chained blade attacks are magical. He carries several hooked blades attached to long black chains and can attack with them without needing a free hand. His chained blades have a reach of 15 feet."
  - name: Relentless Pursuer
    desc: "Difficult terrain doesn't cost Skarn extra movement. When a hostile creature Skarn can see moves away from him, Skarn can move up to 10 feet toward that creature. This movement does not provoke opportunity attacks and can occur only once per turn."
  - name: Legendary Resistance (3/Day)
    desc: "If Skarn fails a saving throw, he can choose to succeed instead."
  - name: Unbroken Hatred
    desc: "The first time Skarn is reduced to 85 hit points or fewer, he immediately ends the charmed, frightened, grappled, prone, and restrained conditions on himself and moves up to half his speed without provoking opportunity attacks."
actions:
  - name: Multiattack
    desc: "Skarn makes three Chained Blade attacks. He can replace one attack with Hook and Drag."
  - name: Chained Blade
    desc: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 16 (1d8 + 5 slashing plus 2d6 necrotic) damage."
  - name: Hook and Drag
    desc: "Melee Weapon Attack: +10 to hit, reach 20 ft., one Large or smaller creature. Hit: 14 (2d8 + 5) slashing damage, and the target must succeed on a DC 18 Strength saving throw or be pulled up to 15 feet toward Skarn. If pulled to within 5 feet of him, the target is also knocked prone."
  - name: Chainstorm (Recharge 5-6)
    desc: "Skarn whirls every blade in his arsenal through a murderous storm. Each other creature of his choice within 15 feet must make a DC 18 Dexterity saving throw. On a failed save, a creature takes 31 (7d8) slashing damage and is knocked prone. On a successful save, it takes half as much damage and isn't knocked prone. Skarn can then move up to half his speed without provoking opportunity attacks."
bonus_actions:
  - name: Predator's Rush
    desc: "Skarn moves up to half his speed toward a hostile creature he can see. This movement does not provoke opportunity attacks."
reactions:
  - name: Chain Snare
    desc: "When a creature Skarn can see within 20 feet moves willingly, Skarn makes one Chained Blade attack against it. On a hit, the creature's speed becomes 0 for the rest of the turn."
legendary_actions:
  - name: ""
    desc: "Skarn can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. Skarn regains spent legendary actions at the start of his turn."
  - name: Stalking Advance
    desc: "Skarn moves up to half his speed without provoking opportunity attacks."
  - name: Chain Lash
    desc: "Skarn makes one Chained Blade attack."
  - name: Scissor Chains (Costs 2 Actions)
    desc: "Skarn targets one creature within 15 feet with two chains striking from opposite directions. The target must make a DC 18 Dexterity saving throw, taking 22 (4d8 + 4) slashing damage on a failed save or half as much damage on a successful one. On a failed save, Skarn also moves the target up to 10 feet to an unoccupied space he can see within his chained blades' reach."
```

# Talon Skarn

## At the table

Skarn is Kyzil's mirror: an elite martial rival who turns movement, reach, and judgment into the fight. He is a **skirmisher** with a controller edge, not a single-purpose thief. His signature question is who in the room is good enough to make him stop performing.

### Character cues

- **Before he is hit:** Play hotshot swagger, constant scorekeeping, and the confidence that every angle already belongs to him. He cleans a blade between exchanges, never during one.
- **After he is hit:** The swagger drops. Skarn goes silent, stops explaining himself, and starts taking the shortest route to isolate the person who broke his rhythm.
- **Private pressure:** He wants a fight Master Kyzil cannot dismiss as a fluke and is always practicing for the open contest with Vantyrus. Do not turn that pressure into a speech; show it through target choice and escalation.

### Decision loop

1. Use **Chainstorm** when it catches two or more creatures or when Skarn needs to break a formation.
2. Use **Hook and Drag** to pull a priority target out of protection, punish a retreat, and create the prone follow-up.
3. Use **Chained Blade** and **Predator's Rush** to keep changing the angle. Let players feel that closing on Skarn or spreading away from him are both meaningful choices.
4. Use **Chain Snare** when a creature commits to movement, not automatically at the first opportunity. The reaction should make the party choose whether a route is worth paying for.
5. Spend legendary actions on **Stalking Advance** to change the geometry, **Chain Lash** for reliable pressure, and **Scissor Chains** when the reposition is more valuable than another attack.

### Bloodied turn

When **Unbroken Hatred** triggers, make the escape from a condition visible. Skarn breaks free, changes position, and chooses one rival to pressure. The trigger changes his priorities; it does not add another damage spike or erase the party's previous success.

### Counterplay

The party can spread out against **Chainstorm**, protect a vulnerable character from **Hook and Drag**, hold movement until **Chain Snare** is spent, force Skarn to spend legendary actions repositioning, or focus fire before **Unbroken Hatred** gives him a clean reset. His high defense is meant to buy decisions, not make attacks irrelevant.

## Terrain / allies

Use terraces, bridges, rigging, pillars, or broken ground that create lanes for chains and places for a creature to be pulled into danger. Give the party at least one route that bypasses Skarn's preferred space. Allies should be sparse and purposeful; one blocker or pressure target is enough to make his movement choices matter.

## Revision knobs

- **Easy:** Remove Legendary Resistance and start **Chainstorm** uncharged.
- **Hard:** Start **Chainstorm** charged and give Skarn a terrain lane that rewards movement, without increasing his AC.
- **Duel:** Skarn spends **Hook and Drag** and **Chain Snare** on the strongest opposing martial, while **Chainstorm** remains for a formation break.
- **Objective:** If Skarn is pursuing an object or person, keep the objective as his reason to move, but let the chain kit determine how he wins the exchange.

## Provenance

This is a narrow 5.5e table-play revision of the imported legacy fight sheet. The chain arsenal, elite chassis, legendary action structure, and Kyzil-mirror identity remain the core design.
