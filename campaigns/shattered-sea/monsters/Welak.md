---
type: monster
campaign: shattered-sea
role: ambusher
cr: 5
source: house
visibility: dm
tags: [monster, maw, welak, whip-shark]
---
```statblock
name: Welak / Whip Shark
size: Large
type: Monstrosity
alignment: Unaligned
ac: 15
hp: 95
hit_dice: 10d10 + 40
speed: 10 ft., swim 60 ft.
stats: [20, 16, 18, 3, 14, 5]
saves:
  - Str: +8
  - Con: +7
skillsaves:
  - Perception: +5
  - Stealth: +6
senses: passive Perception 15
languages: —
cr: 5
pb: +3
traits:
  - name: Vibration Hunter
    desc: While in water, Welak knows the location of each moving vessel within 120 feet of it. It has Advantage on Wisdom (Perception) checks made to detect a vessel or its machinery, and it follows salvage-pump vibration more readily than blood.
  - name: Surface Ambush
    desc: Once per turn, when Welak hits a creature while it is Hidden from that creature, the attack deals an extra 7 (2d6) damage.
actions:
  - name: Multiattack
    desc: Welak makes one Bite attack and one Barb Hook attack.
  - name: Bite
    desc: Melee Attack Roll: +8, reach 5 ft., one target. Hit: 18 (2d10 + 7) piercing damage.
  - name: Barb Hook
    desc: Melee Attack Roll: +8, reach 10 ft., one target. Hit: 17 (2d8 + 8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be pulled up to 10 feet toward Welak and Grappled (escape DC 15). If the target is a vessel, its hull takes 4 extra piercing damage and the vessel's Speed is reduced by 10 feet until Welak moves.
```
# Welak / whip shark
> [!narration] Narration
> A Large whip-shark shape rides with its lower barb proud of the water. The barb sits clear before the rest of the body shows. It turns toward salvage-pump vibration more readily than blood.


## Fiction
Colonial charts call Welak “whip shark.” It surfaces once, fast, and attacks wood before a crew can reload; on the Shelfworks it follows salvage-pump vibration more than blood. A fed one rarely leaves the Maw. The specimen that struck the *Uncertainty* west of Calveno was an outlier; Kalowe fishermen keep the old name while Calveno underwriters write whip shark.

## At the table
- **Encounter job:** Surface ambusher/bruiser against ships, crews, or exposed deck positions; the hull is a valid first target.
- **Decision loop:** **Tell** — the lower barb rides high and pump vibration draws it in. **Threat** — the first barb can damage the hull or pull a crew member out of position. **Responses** — quiet or redirect the pump, move the vessel, ready attacks for the surface pass, or cut the lodged barb. **Payoff** — Welak loses its ambush angle or must fight in the open.
- Use the hull-first behavior before a crew can reload. Do not treat the *Uncertainty* strike as evidence that every Welak leaves the Maw or hunts that far from salvage work.

## Running notes
- Welak is a standard ambusher with a bruiser edge: open-water mobility and first-hit pressure, but no broad resistance or death-fight behavior.
- If it is fed, it usually turns back toward the Maw after the immediate threat; a retreat is a successful ecology outcome, not a failed combat.

## Design notes
- **Path:** Full house design rather than a direct reskin because the ship-hull decision and vibration-led ambush are the encounter loop.
- **Reference gate:** SRD 5.2.1 is the official 2024/2025 notation anchor ([SRD](https://www.dndbeyond.com/srd)); aquatic beast baselines supply ordinary attack/defense expectations. The Lazy GM/Alphastream role guidance ([builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html), [2024 guide](https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/)) supports an ambusher trading durability for a visible first strike. Blog of Holding’s 2024 math ([analysis](https://www.blogofholding.com/?p=8469)) supports a roughly 35-damage CR 5 routine; the hull rider is situational and the ambush rider is limited to once per turn.
- **Audit:** First turn reveals the barb and vibration tell; Barb Hook has two answers (break the approach/line or resist and reposition). Three-round routine is Multiattack at 35 damage before hit chance, with the ambush rider only on the opening hidden hit. AC 15 and 95 HP keep the ambusher from becoming a durable solo.
- **2024 note:** Recalibrated for 2024/2025 attack, save, and damage notation; no 2014 stat block is copied.
- **Uncertainty:** The legacy file paths named in the brief were not present on this Mac; the user-provided hull-hook/siege and outlier guidance is treated as the fiction source pending a reachable legacy copy or playtest.

## Provenance
Dump source 2026-09-05; legacy `/Users/nick/shattered-sea/wiki/shattered-sea/creature-whip-shark.md` (path not present on this Mac); house math and audit by Monster-Brewer.
