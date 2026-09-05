---
type: monster
campaign: 
role: # minion | skirmisher | brute | artillery | controller | leader | solo
cr: 
source: # SRD link / “house” / book+page — never paste proprietary text
visibility: dm
tags: [monster]
---

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

## Terrain / allies
Where it shines; common allies.

## Loot / aftermath
- 

## Do not
- Paste Monster Manual / proprietary stat blocks
- Put anything before the `statblock` fence (it must be first after frontmatter)
- Write house math as prose `**AC**` / `**Armor Class**` tables — use the fence (`./scripts/lint-statblocks`)
- Novel ecology essays unless the table needs them (put deep lore in [[Lore]])
