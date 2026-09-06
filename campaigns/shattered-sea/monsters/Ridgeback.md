---
type: monster
campaign: shattered-sea
role: skirmisher
cr: 7
source: house
visibility: dm
tags: [monster, maw, ridgeback]
---
```statblock
name: Ridgeback
size: Huge
type: Monstrosity
alignment: Unaligned
ac: 16
hp: 128
hit_dice: 15d12 + 30
speed: 20 ft., swim 60 ft.
stats: [22, 16, 16, 3, 14, 5]
saves:
  - Str: +9
  - Con: +6
skillsaves:
  - Perception: +5
senses: Blindsight 60 ft., passive Perception 15
languages: —
cr: 7
pb: +3
traits:
  - name: Water Breathing
    desc: The Ridgeback can breathe only underwater.
  - name: Ridge-Line Rush
    desc: If the Ridgeback moves at least 20 feet straight toward a target immediately before hitting it with Bite, the attack deals an extra 8 (1d8 + 4) piercing damage, and the target must succeed on a DC 16 Strength saving throw or be pushed up to 10 feet.
actions:
  - name: Multiattack
    desc: The Ridgeback makes one Bite attack and one Ridge Sweep attack.
  - name: Bite
    desc: Melee Attack Roll: +9, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.
  - name: Ridge Sweep
    desc: Melee Attack Roll: +9, reach 15 ft., one target. Hit: 17 (3d8 + 4) bludgeoning damage.
bonus_actions:
  - name: Slipstream
    desc: The Ridgeback moves up to half its Swim Speed without provoking Opportunity Attacks.
```
# Ridgeback
> [!narration] Narration
> A flat-black shape passes where the water should show a wake; the ridge arrives before the body can be read.

## Fiction
A named member of the Leviathan's displaced kind, documented by [[Clyde]]. Flat-black, eyeless, blindsight, and water-breathing are the only inherited descriptors. It is a distinct named specimen, not a second name for the Leviathan; its smaller body and lower threat niche are house assumptions for play, not a settlement of the species.

## At the table
- **Encounter job:** Mobile single-target skirmisher and named peer/variant of the Leviathan, not a second solo boss.
- **Decision loop:** **Tell** — the ridge arrives before the body and the water fails to show a wake. **Threat** — Ridge-Line Rush turns a straight approach into a shove and focused bite. **Responses** — deny the straight line, spread targets, hold a reaction for the approach, or pin it after Slipstream. **Payoff** — it must choose between its rush line and safer positioning.
- Keep the difference visible: Huge, CR 7, no legendary actions, shorter blindsight, and a single burst pattern instead of the Leviathan's Gargantuan CR 16 pressure economy.

## Running notes
- Clyde's documentation names this specimen; do not turn the sheet into a settled habitat or species ecology.
- Use Slipstream to make the waterline matter, not to grant an endless chase. If the party closes its routes, its lower AC and lack of legendary defense should show.

## Design notes
- **Path:** Variant-like house design with a separate CR because the fiction names a member of the same kind while demanding a distinct, smaller tactical niche.
- **Reference gate:** SRD 5.2.1 ([SRD](https://www.dndbeyond.com/srd)) supplies the current aquatic attack, save, and movement notation. The Lazy GM/Alphastream role guidance ([builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html), [2024 guide](https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/)) supports a skirmisher trading durability/solo presence for movement and a telegraphed charge. Blog of Holding’s 2024 math ([analysis](https://www.blogofholding.com/?p=8469)) is the numerical cross-check; routine damage is about 39, rising to about 47 when the rush is earned.
- **Audit:** The first turn exposes the straight-line tell. Three-round routine is about 39 damage per round before hit chance, with one earned rush rider; Slipstream costs a bonus action and adds no damage. AC 16/128 HP and no resistances keep it below the Leviathan's solo niche.
- **2024 note:** Recalibrated for 2024/2025 attack and save notation; no MM text is copied.
- **Uncertainty:** Only Clyde's sparse documentation and inherited descriptors are firm. Exact size, range, and ecology are house mechanics, not new canon.

## Provenance
Dump source 2026-09-05; legacy `/Users/nick/shattered-sea/wiki/shattered-sea/creature-leviathan.md` and elemental-plane notes (paths not present on this Mac); house math and audit by Monster-Brewer.
