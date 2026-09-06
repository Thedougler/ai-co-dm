---
type: monster
campaign: shattered-sea
role: skirmisher
cr: 2
source: house
visibility: dm
tags: [monster, maw, krakling, midchain]
---
```statblock
name: Krakling
size: Large
type: Monstrosity
alignment: Unaligned
ac: 14
hp: 45
hit_dice: 6d10 + 12
speed: 15 ft., swim 40 ft.
stats: [16, 15, 14, 3, 12, 5]
saves:
  - Str: +5
skillsaves:
  - Perception: +3
senses: Blindsight 30 ft., passive Perception 13
languages: —
cr: 2
pb: +2
traits:
  - name: Water Breathing
    desc: The Krakling can breathe only underwater.
  - name: Three-Way Tangle
    desc: If two or more Arm Lash attacks hit the same creature during the Krakling's turn, that creature must succeed on a DC 13 Strength saving throw or have its Speed reduced to 0 until the start of the Krakling's next turn.
actions:
  - name: Multiattack
    desc: The Krakling makes three Arm Lash attacks.
  - name: Arm Lash
    desc: Melee Attack Roll: +5, reach 10 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.
bonus_actions:
  - name: Many-Armed Scramble
    desc: Immediately after making a Multiattack, the Krakling moves up to 10 feet without provoking Opportunity Attacks.
```
# Krakling
> [!narration] Narration
> Something juvenile and many-armed moves in the Midchain water, too small for the stories and too wrong for the sea.

## Fiction
Juvenile arm-predator reported in the Midchain, part of the same displaced kind as [[Leviathan]] and [[Ridgeback]]. The report is sparse; do not promote a settled habitat or behavior beyond the Maw connection.

## At the table
- **Encounter job:** Light juvenile skirmisher that makes a small space awkward without claiming adult reach, strength, or habitat.
- **Decision loop:** **Tell** — several arms reach at once. **Threat** — concentrating two lashes on one target can stop its movement for a round. **Responses** — spread out, break line of approach, or focus it before it can scramble away. **Payoff** — the juvenile is fragile and its control is brief.
- Keep the Midchain report as a report. This sheet does not establish a breeding ground, migration, adult behavior, or a settled Midchain habitat.

## Running notes
- The Krakling is deliberately lean: three lashes, one short movement rider, and one soft control rider. Do not import adult or Leviathan abilities onto it.
- If the party counters Three-Way Tangle, run it as a low-HP mobile nuisance rather than adding new traits on the fly.

## Design notes
- **Path:** Lean full design because the many-arm decision loop needs three light attacks and a short, visible movement consequence; the sparse report does not justify a larger ecology package.
- **Reference gate:** SRD 5.2.1 ([SRD](https://www.dndbeyond.com/srd)) anchors current attack, save, and condition timing. The Lazy GM/Alphastream role guidance ([builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html), [2024 guide](https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/)) supports a low-CR skirmisher with a soft, repeatable positional effect rather than hard turn denial. Blog of Holding’s 2024 math ([analysis](https://www.blogofholding.com/?p=8469)) cross-checks the CR 2 routine at about 18 damage before hit chance.
- **Audit:** Three Arm Lash attacks average 18; Three-Way Tangle creates a one-round movement choice and requires two hits plus a save. AC 14/45 HP make the juvenile easy to pressure, and Many-Armed Scramble adds movement but no off-turn damage.
- **2024 note:** Recalibrated for 2024/2025 notation; no MM text is copied.
- **Uncertainty:** The report is intentionally sparse. Size, blindsight range, exact arm count, and the three-lash combat expression are house assumptions; habitat beyond the stated Midchain report remains open.

## Provenance
Dump source 2026-09-05; legacy `/Users/nick/shattered-sea/wiki/shattered-sea/creature-leviathan.md` and elemental-plane notes (paths not present on this Mac); house math and audit by Monster-Brewer.
