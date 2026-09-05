---
type: monster
campaign: shattered-sea
region: aruhe
role: brute
cr: 11
source: house (2024 Roc chassis, SRD peer)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: Bloodhawk
size: Gargantuan
type: monstrosity
alignment: unaligned
ac: "15 (natural armor)"
hp: 248
hit_dice: 16d20 + 80
speed: 20 ft., fly 120 ft.
stats: [28, 10, 20, 3, 12, 9]
saves:
  - dexterity: 4
  - constitution: 9
  - wisdom: 5
skillsaves:
  - Perception: 9
senses: passive Perception 19
languages: "—"
cr: 11
traits:
  - name: Four-Winged Lift
    desc: "The bloodhawk flies at full speed while grappling one creature. It can grapple a Gargantuan creature; while doing so, its flying speed is halved."
  - name: Blood-Red Vigil
    desc: "The bloodhawk has advantage on Wisdom (Perception) checks that rely on sight."
  - name: Sculpted Predator
    desc: "The bloodhawk's weapon attacks are magical."
actions:
  - name: Multiattack
    desc: "The bloodhawk makes two attacks using Beak or Sickle Claw. It can replace one attack with Talon Grab."
  - name: Beak
    desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 28 (3d12 + 9) piercing damage, and the target must succeed on a DC 17 Constitution saving throw or take 5 (1d10) piercing damage at the start of each of its turns (serrated wound). A creature can take an action to stanch the wound, ending the effect. Magical healing also ends it."
  - name: Sickle Claw
    desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) slashing damage, or 31 (5d8 + 9) if the target is Grappled by the bloodhawk."
  - name: Talon Grab
    desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage. If the target is Huge or smaller, it has the Grappled condition (escape DC 19). Until the grapple ends, the target has the Restrained condition, and the bloodhawk can't use Talon Grab on another target."
  - name: Canopy Dive (Recharge 5–6)
    desc: "The bloodhawk flies up to its speed toward one creature it can see at least 30 feet below it. If it moves at least 40 feet straight toward that target, it makes one Beak attack against it with advantage. On a hit, the attack deals an extra 14 (4d6) piercing damage."
bonus_actions:
  - name: Haul Aloft
    desc: "If the bloodhawk is grappling a creature, it flies up to half its flying speed without provoking opportunity attacks from that creature."
reactions:
  - name: Wing Buffet
    desc: "Trigger: The bloodhawk is hit by a ranged attack while flying and isn't grappling a Gargantuan creature. Response: The attacker must reroll the attack and use the new roll."
```

# Bloodhawk of Aruhe

> [!narration] Narration
> A four-winged hawk the size of a small ship hangs above the canopy: charcoal feathers bleeding into crimson tips, a toothed beak, and sickle claws that could pin a whale. When it commits, the wings fold and the crimson tips flash before the dive.


## At the table
**Tactic:** Dive → grab → haul aloft → rake. **Tell:** wings fold and crimson tips flash before a dive.

## Role / dials
- **Easy:** no Dive recharge; Multiattack only.
- **Hard / apex:** start Dive charged; add a thrashing whale or livestock as the first grab target (lightning rod).
- **Bloodied (≤ half HP):** stop grabbing; beak and claws only, fly toward the cloud line if it can.

## Signature moves
1. **Canopy Dive** — telegraphed straight-line strike from above.
2. **Talon Grab + Haul Aloft** — snatch and climb.
3. **Sickle rake** — punish whoever is already grappled.
4. **Serrated beak** — ongoing wound until stanched or healed.

## Terrain / friends
Cloud-canopy nests and open water on [[Aruhe - Hungry Isle]]. Hungry ground below still eats careless landings. Noise/distraction: purple Grung, wolfrabbits — not damage peers.

## Loot / aftermath
- Crimson primary feathers (ritual / trophy).
- Nest material high in the canopy (surveyors may want a look).
- Optional: a branded band or fetish marking the druid lich’s sculpting (**brief-canon**; not yet on the Aruhe location note).

## Running notes
- **Default:** Dive if ready → Talon Grab → Haul Aloft → Sickle on the grappled target.
- **Answered:** if the dive is wasted or LOS breaks, Multiattack from altitude; if grounded, it’s slow and unhappy — punish that.
- **Dense canopy:** treat fly speed as halved until it clears the canopy line (terrain rule, not a trait).
- **Counterplay:** Ready the dive, stanch/heal the wound, escape DC 19, force it low, stay under cover.

## Do not
- Paste Monster Manual / proprietary Roc text.
- Treat cloud canopy or the druid lich as old Aruhe vault canon — they enter with this brief.
