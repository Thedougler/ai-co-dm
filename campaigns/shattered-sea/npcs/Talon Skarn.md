---
type: npc
campaign: shattered-sea
status: alive
role: rival
location: Midchain
faction: Countless
visibility: dm
tags: [npc, countless, schism]
summary: Countless peregrine apprentice and CR 13 chain-weapon rival whose Rule of Two pressure points toward Talon Vantyrus.
---
# Talon Skarn

## Art
![[attachments/shattered-sea/character-references/talon-skarn-reference-sheet.png|Talon Skarn character reference sheet]]
![[attachments/shattered-sea/portraits/talon-skarn-portrait.jpg|Talon Skarn portrait]]

> [!narration] Narration
> A man-sized peregrine in dark patterned robes stands with his wings half-folded around him. Red-orange crown feathers flare above a black-and-cream face, amber-gold eyes hold steady, and the tip of his yellow beak is black. Metal chains hang from wrapped forearms, each ending in a curved hooked blade.


## Hook
Vantyrus’s apprentice is openly testing the master he intends to kill, and will only enter the fight once the crew physically reaches the Midchain.

## Identity and public function
Peregrine apprentice of [[Talon Vantyrus]] and a living expression of the [[Rule of Two]].

## Look / voice
- **Visual:** Lean, knife-folded peregrine, about five feet tall; red-orange crown feathers; black-and-cream face feathers; amber-gold eyes; a yellow beak with a black tip; and broad, dark layered wings.
- **Dress:** Dark robe with patterned trim, leather grips, and cloth wraps around the forearms and hands.
- **Weapons:** Paired curved hook-blades on long metal chains, carried one in each hand and controlled through the wrapped forearms.
- **Behavior:** Tests with stoop dives and chain-blade feints; when he commits, his wings pin close and the chains define the distance.
- **Voice principle:** Unknown; do not invent.
- **Sample line:** Unknown; do not invent.

## Drive
**Want:** Openly scheme to kill Vantyrus, as the Rule of Two requires. Personal want beyond the master’s goals is **unknown**.

## Public face vs secret
**Public:** Countless apprentice and ambush tester. **Secret:** The assassination scheme is not a betrayal of Countless doctrine; it is the doctrine’s standing threat.

## Resources
Paired chained hook-blades, flight, Countless access, and the stoop dive technique.

## Next move / interrupt point
Set stoop-dive tests along the approach, then enter the fight only when the crew physically reaches Midchain. Use the chained hook-blades to pull attention and punish exposed movement. Players can bait the ambush, protect the objective, or exploit the Rule of Two without assuming Skarn’s private motive.

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
    desc: "Skarn's paired chained hook-blade attacks are magical. He carries one curved hooked blade on a long dark metal chain in each hand and can attack with them without needing a free hand. His chained blades have a reach of 15 feet."
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
