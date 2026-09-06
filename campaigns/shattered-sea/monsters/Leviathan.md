---
type: monster
campaign: shattered-sea
role: bruiser
cr: 16
source: house
visibility: dm
tags: [monster, maw, leviathan, elemental-water]
---
```statblock
name: Leviathan
size: Gargantuan
type: Monstrosity
alignment: Unaligned
ac: 19
hp: 231
hit_dice: 14d20 + 84
speed: 20 ft., swim 80 ft.
stats: [24, 10, 22, 3, 16, 8]
saves:
  - Str: +12
  - Con: +11
  - Wis: +8
skillsaves:
  - Perception: +8
senses: Blindsight 120 ft., passive Perception 18
languages: —
cr: 16
pb: +5
traits:
  - name: Water Breathing
    desc: The Leviathan can breathe only underwater.
  - name: Bloodied Break-Off
    desc: When the Leviathan is first reduced to 115 Hit Points or fewer, the change is obvious: the water around its hide boils and it turns toward the nearest open-water route or planar crack. On its next turn it moves toward that route and takes no action except Dash or Crackward Pressure if escape is blocked. After that turn, it doesn't willingly attack unless a creature blocks its escape.
actions:
  - name: Multiattack
    desc: The Leviathan makes one Maw attack and one Tail attack.
  - name: Maw
    desc: Melee Attack Roll: +12, reach 15 ft., one creature. Hit: 35 (4d12 + 9) piercing damage. If the target is Large or smaller, it is Grappled (escape DC 20). Until the grapple ends, the Leviathan can't use Maw on another target.
  - name: Tail
    desc: Melee Attack Roll: +12, reach 20 ft., one target. Hit: 29 (3d12 + 10) bludgeoning damage, and the target is pushed up to 15 feet.
legendary_actions:
  - name: Legendary Action Uses: 3
    desc: Immediately after another creature's turn, the Leviathan can expend one use to take one of the following actions. It regains all expended uses at the start of each of its turns.
  - name: Move
    desc: The Leviathan moves up to half its Swim Speed without provoking Opportunity Attacks.
  - name: Maw
    desc: The Leviathan makes one Maw attack.
  - name: Crackward Pressure (Costs 2 Actions)
    desc: Each creature of the Leviathan's choice in a 20-foot Cone must make a DC 19 Strength saving throw. On a failed save, a creature takes 18 (4d8) bludgeoning damage and is pushed up to 20 feet; on a successful save, it takes half as much damage only. When a visible planar crack or route to open water is present, the Leviathan directs the push toward it; otherwise, it directs the push away from itself. The Leviathan can't use this action again until the start of its next turn.
```
# Leviathan
> [!narration] Narration
> Longer than two ships, flat black and eyeless, it comes straight up from below whatever is loudest. The water boils before it arrives.

## Fiction
First named displaced kind pulled through the Maw signal. Hide like wet stone, not scale; blindsight and water-breathing are legacy descriptors only. It wants open water and pushes threats back toward the crack. [[Auralis]] holds it short; it breaks off below half its strength and never fights to the death.

Perrin's [[Vestra]] account leading but unsettled: he named the thing after washing up on [[Keth Naar]], and whether it sank the Vestra remains open.

## At the table
- **Encounter job:** Legendary bruiser that makes open water and the crack the important directions; it is not a stationary death match.
- **Decision loop:** **Tell** — boiling water, a flat-black rise, and the pressure line show where the body and push are going. **Threat** — Maw locks one target while Tail and Crackward Pressure open a route toward the crack. **Responses** — spread out, break the Maw grapple, avoid the cone, use the terrain or crack route against it, and pressure it before the bloodied threshold. **Payoff** — the party can make it spend legendary actions repositioning or force the retreat early.
- The stat block does not decide whether the Vestra sank. Keep that account open in play.

## Running notes
- **Bloodied break-off:** At 115 HP or fewer, run the printed Bloodied Break-Off trait. It never fights to the death.
- **Auralis hold:** If [[Auralis]] is present, Auralis holds the Leviathan short only as an external scene constraint; this is not a control spell, condition, or trait on Auralis's sheet. The hold can fail, loosen, or end according to the fiction of the scene.
- The Leviathan wants open water. In a confined site, give the party a visible route, crack, or objective to contest rather than silently removing its escape.

## Design notes
- **Path:** Full design because a legendary solo needs a readable open-water pressure loop, off-turn economy, and a bloodied exit rather than a copied giant aquatic block.
- **Reference gate:** SRD 5.2.1 ([SRD](https://www.dndbeyond.com/srd)) anchors 2024/2025 Legendary Action timing and notation; the current aquatic/legendary SRD peers anchor a Gargantuan body and high-tier attack routine. The Lazy GM/Alphastream role and boss guidance ([builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html), [2024 guide](https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/)) support off-turn movement plus a limited control option. Blog of Holding’s 2024 analysis ([analysis](https://www.blogofholding.com/?p=8469)) places legendary damage above normal peers; the three legendary uses are budgeted into the audit.
- **Audit:** Base Multiattack averages 64 damage; a typical round adds one Maw legendary action and one two-use Crackward Pressure affecting about two targets, for roughly 135 pre-hit-chance damage. The cone is limited to once per round, while the visible bloodied retreat trades endurance for an explicit exit. HP 231/AC 19 provide a solo chassis without resistances or immunities that would erase player tools.
- **2024 note:** Recalibrated to current legendary action economy and 2024/2025 notation; no MM text is reproduced.
- **Uncertainty:** Auralis's exact identity and the Vestra sinking remain unresolved fiction. The legacy reference paths named in the brief were not present on this Mac; the supplied bloodied-retreat and legendary-economy patterns are preserved as original rules.

## Provenance
Dump source 2026-09-05; legacy `/Users/nick/shattered-sea/wiki/shattered-sea/creature-leviathan.md` and Perrin notes (paths not present on this Mac); house math and audit by Monster-Brewer.
