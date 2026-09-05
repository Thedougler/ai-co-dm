---
type: monster
campaign: 
role: # minion | skirmisher | brute | artillery | controller | leader | solo
cr: 
source: # SRD link / “house” / book+page — never paste proprietary text
visibility: dm
tags: [monster]
---

# {{name}}

> [!narration] Narration
> _Creature first look or cold species portrait. Theatre of the mind (Creature)._
>
## At the table
One-line tactic + tell (what players notice before math).

## Role / dials
How to use as easy / hard / horde. What to cut when bloodied.

## Signature moves
2–4 verbs. Paraphrase; no copyrighted block text.

## Terrain / friends
Where it shines; common allies.

## Loot / aftermath
- 

## Stats (Fantasy Statblocks)
House creatures: one `statblock` code fence (Obsidian Fantasy Statblocks plugin). SRD-only: link, no paste.

```statblock
name: {{name}}
size: Medium
type: beast
alignment: unaligned
ac: 10
hp: 10
hit_dice: 2d8
speed: 30 ft.
stats: [10, 10, 10, 10, 10, 10]
cr: 0
traits:
  - name: Example Trait
    desc: Short house paraphrase.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."
```

## Do not
- Paste Monster Manual / proprietary stat blocks
- Write house math as prose `**AC**` / `**Armor Class**` tables — use the fence above (`./scripts/lint-statblocks` flags those)
- Novel ecology essays unless the table needs them (put deep lore in [[Lore]])
