---
type: monster
campaign: 
role: # minion | skirmisher | brute | artillery | controller | leader | solo
cr: 
source: # SRD link / “house” / book+page — never paste proprietary text
visibility: dm
tags: [monster]
---

## Statblock

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

## L0 · At a glance

> [!narration] Narration
> _Creature first look or cold species portrait. Theatre of the mind (Creature)._
>

### At the table

One-line tactic and tell (what players notice before math).

## L1 · At the table

### Role / dials

How to use as easy, hard, or horde. What to cut when bloodied.

### Signature moves

Two to four verbs. Paraphrase; no copyrighted block text.

## L2 · Deep

### Terrain / allies

Where it shines; common allies.

### Loot / aftermath

- 

## Constraints

- Do not paste Monster Manual or proprietary stat blocks.
- Put nothing before the `statblock` fence (it must be first after frontmatter).
- Do not write house math as prose `**AC**` tables — use the fence (`./scripts/lint-statblocks`).
- Novel ecology essays belong in [[Lore]] unless the table needs them here.
