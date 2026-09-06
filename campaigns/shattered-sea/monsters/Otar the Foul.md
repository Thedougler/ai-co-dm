---
type: monster
campaign: shattered-sea
visibility: dm
source: "legacy: /Users/nick/shattered-sea/wiki/shattered-sea/npc.otar-the-foul.md"
tags: [monster, legacy, fight-sheet]
---
```statblock
layout: Basic 5e Layout
name: "Otar the Foul"
size: Large
type: aberration
alignment: "chaotic neutral"
ac: 16
ac_note: "natural armor"
hp: 135
hit_dice: "12d10 + 69"
speed: "40 ft., climb 20 ft."
stats: [20, 12, 22, 5, 8, 6]
saves:
  - strength: 9
  - constitution: 10
skillsaves:
  - athletics: 9
  - perception: 3
damage_resistances: "cold, lightning, thunder"
condition_immunities: "charmed, frightened, poisoned"
senses: "darkvision 60 ft., passive Perception 13"
languages: "Slaad (does not communicate)"
cr: 9
sim:
  abilities:
    - kind: periodic_effect
      trigger: start_of_turn_self
      effect: regen
      amount: 12
      suppressed_if_damaged_by: [fire, acid]
    - kind: periodic_effect
      trigger: start_of_turn_others
      effect: damage
      dice: "1d6"
      damage_type: poison
traits:
  - name: Foul Miasma
    desc: "Otar exudes a 10-foot radius of noxious fumes — the byproduct of a stalled caste transformation. The area is lightly obscured. Creatures other than Otar that start their turn in the miasma take 4 (1d6) poison damage."
  - name: Entropic Regeneration
    desc: "Otar regains 12 hit points at the start of its turn if it has at least 1 hit point. If Otar takes fire or acid damage, this trait doesn't function at the start of its next turn."
  - name: Legendary Resistance (2/Day)
    desc: "If Otar fails a saving throw, it can choose to succeed instead."
  - name: Magic Resistance
    desc: "Otar has advantage on saving throws against spells and other magical effects."
  - name: Unstable Form
    desc: "When Otar is reduced to half its hit points (68 HP) or fewer, its skin splits and weeps iridescent fluid. Its melee attacks deal an additional 2d6 acid damage, and any creature that hits it with a melee attack within 5 feet takes 9 (2d8) acid damage."
actions:
  - name: Multiattack
    desc: "Otar makes five attacks: one Bite attack, three Claw attacks, and one Tongue Lash attack. It can replace the Tongue Lash attack with a fourth Claw attack."
  - name: Bite
    desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage. On a hit, the target must succeed on a DC 16 Constitution saving throw or be infected with a Slaad egg (Slaad Tadpole disease — no immediate effect; 3 months to manifest)."
  - name: Claw
    desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
  - name: Tongue Lash
    desc: "Melee Weapon Attack: +8 to hit, reach 40 ft., one target. Hit: 10 (1d8 + 5) bludgeoning damage, and the target must succeed on a DC 16 Strength saving throw or be pulled up to 35 feet toward Otar and grappled (escape DC 16). Otar can grapple one creature this way at a time."
  - name: "Chaos Pulse (Recharge 6)"
    desc: "Otar slams both fists into the ground. Each creature within 20 feet must make a DC 16 Dexterity saving throw. On a failure, a creature takes 22 (4d10) force damage and is knocked prone. On a success, a creature takes half damage and isn't knocked prone. Rubble and debris in the area become difficult terrain."
reactions:
  - name: Rubble Surge
    desc: "When a creature Otar can see moves more than 15 feet in a single turn while within 30 feet of it, Otar can use its reaction to hurl a chunk of plaza rubble. The target must succeed on a DC 16 Dexterity saving throw or take 11 (2d10) bludgeoning damage and have its speed reduced to 0 until the end of its current turn. This reaction can target flying creatures."
legendary_actions:
  - name: ""
    desc: "Otar can take 1 legendary action, choosing from the options below, only at the end of another creature's turn. Otar regains its spent legendary action at the start of its turn."
  - name: Lash
    desc: "Otar makes one Tongue Lash attack."
  - name: Thrash
    desc: "Otar thrashes violently. Each creature within 5 feet must succeed on a DC 16 Strength saving throw or be pushed 10 feet and knocked prone."
  - name: "Bile Spray (Costs 2 Actions)"
    desc: "Otar vomits a 15-foot cone of caustic bile. Each creature in the cone must succeed on a DC 16 Constitution saving throw or take 14 (4d6) acid damage. With only 1 legendary action/round, this effectively takes Otar two full rounds to save up for."
  - name: "Spawn Tadpoles — suppressed in Phase 1, reachable in Phase 2"
    desc: "Otar's rotting hide splits open, spilling 1d4 slaad tadpoles (see Slaad Tadpole) — his general kit's option when fought alone. Costs 2 legendary actions, which his reduced 1/round pool can no longer reach in Phase 1; he's already flanked by 5 minor slaad there anyway (further along the same molt Otar's own hide sheds, narrated as slaad tadpoles that already fed on the sewer's grung dead) — the escort fills this trait's role instead. Once Phase 2's Rattle Surge restores his 3/round legendary economy, the cost is reachable again, and Phase 2's own calibration prices it in — the engine can't spawn a combatant mid-fight, so the spawned brood is fielded from the opening instead, 2 tadpoles standing in for the 1d4."
```

# Otar the Foul

## At the table
Use the original legacy Fantasy Statblock when this creature or combatant enters play.

## Provenance
Legacy fence imported verbatim from `/Users/nick/shattered-sea/wiki/shattered-sea/npc.otar-the-foul.md`.
