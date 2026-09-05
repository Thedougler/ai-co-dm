---
type: monster
campaign: shattered-sea
region: aruhe
role: solo
cr: 17
source: house (wiki creature.aruhe-crown-squid, upgraded)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: Great Crown Squid
size: Gargantuan
type: monstrosity
alignment: unaligned
ac: "17 (rubbery hide)"
hp: 283
hit_dice: 21d20 + 63
speed: 20 ft., climb 50 ft.
stats: [24, 20, 17, 7, 20, 6]
saves:
  - dexterity: 11
  - constitution: 9
  - wisdom: 11
skillsaves:
  - Athletics: 13
  - Perception: 17
  - Stealth: 11
senses: darkvision 120 ft., passive Perception 27
languages: "—"
cr: 17
traits:
  - name: Canopy Camouflage
    desc: "Among foliage, branches, or hanging roots, the squid can take the Hide action even when only lightly obscured. If it hasn't moved since the end of its previous turn, it has advantage on Dexterity (Stealth) checks."
  - name: Eight-Eyed Awareness
    desc: "The squid has advantage on Wisdom (Perception) checks that rely on sight. It can't be surprised while conscious unless the surpriser is in its Mouth-Blind Zone."
  - name: Mouth-Blind Zone
    desc: "The squid can't see a creature within 10 feet directly beneath the center of its mantle unless that creature is Grappled by it or touching one of its arms. Such a creature is unseen to the squid, and the squid can't make opportunity attacks against it."
  - name: Spider-Braced
    desc: "While at least three primary arms touch solid surfaces, the squid can't be knocked Prone or moved against its will."
  - name: Buoyant Mantle
    desc: "The squid takes no falling damage while its gas mantle is intact and falls no faster than 60 feet per round. This is not flight."
  - name: Siege Predator
    desc: "The squid deals double damage to objects and structures. Nonmagical plant growth never costs it extra movement."
  - name: Selected Prey
    desc: "The squid has advantage on its first Hookline Tentacle attack each turn against a creature that has no conscious ally within 10 feet of it."
actions:
  - name: Multiattack
    desc: "The squid makes three attacks, only one of which may be Beak."
  - name: Hookline Tentacle
    desc: "Melee Weapon Attack: +13 to hit, reach 80 ft., one creature. Hit: 18 (2d10 + 7) slashing damage, and the target has the Grappled condition (escape DC 19). Until the grapple ends, the target also has the Restrained condition. The squid can maintain up to four Hookline grapples. A Hookline can be attacked (AC 15, 15 HP; immune to poison and psychic). Destroying one ends that grapple only."
  - name: Crushing Arm
    desc: "Melee Weapon Attack: +13 to hit, reach 20 ft., one target. Hit: 25 (4d8 + 7) bludgeoning damage, and the squid either grapples the target (escape DC 19) or pushes it 20 feet."
  - name: Beak
    desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one creature Grappled by the squid. Hit: 33 (4d12 + 7) piercing damage."
  - name: Reel
    desc: "Each creature Grappled by a Hookline is pulled up to 30 feet straight toward the squid."
  - name: Canopy Pounce (Recharge 5–6)
    desc: "The squid moves up to its climb speed without provoking opportunity attacks, provided it ends that movement touching a tree or similarly massive structure. At any two points during this movement, it can make one Hookline Tentacle attack."
  - name: Rip Through (Recharge 5–6)
    desc: "The squid tears a 10-foot cube of nonmagical wood or vegetation within reach. Each creature in that area must make a DC 19 Dexterity saving throw, taking 18 (4d8) bludgeoning damage and falling Prone on a failed save, or half damage on a successful one. The area becomes difficult terrain."
legendary_actions:
  - name: ""
    desc: "The Great Crown Squid can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The squid regains spent legendary actions at the start of its turn."
  - name: Skitter
    desc: "The squid moves up to 20 feet using its climb speed without provoking opportunity attacks."
  - name: Hookline
    desc: "The squid makes one Hookline Tentacle attack."
  - name: Reel
    desc: "One Grappled creature is pulled up to 20 feet toward the squid."
```

# Great Crown Squid

> [!narration] Narration
> The great crown squid hangs sixty to eighty feet across the crowns: a swollen clear body of gas chambers, eight thick arms braced on trunks with gripping pads and hooked suckers, and a forest of finer hunting lines under the beak — some finger-thin, some rope-thick, dozens of feet long. It flows from tree to tree almost silently. When something moves below, the huge principal eyes roll inside the translucent head toward it without the body shifting.



## At the table
**Tactic:** watch → select isolated prey → Hookline → Reel → Beak. **Tell:** principal eyes roll inside the translucent mantle toward a target without the body moving.

Escape is geography (open grass, deep water, low cover), not a DPS race. It hunts like a predator, not a villain.

## Role / dials
- **Elite scare (not full solo):** cut legendary actions; one Hookline + Reel loop.
- **Apex solo:** full block below.
- **Bloodied (≤ half HP):** stops treating the party as snacks — canopy pursuit, Canopy Pounce, route anticipation. It **likes** a chase.
- **Juvenile:** Old Gardens terraces only — drop to Huge, CR ~8–10 provisional (not statted here).

## Signature moves
1. **Hookline** — 80 ft snatch, restrain, severable line.
2. **Reel** — haul prey to the beak.
3. **Canopy Pounce** — silent tree-to-tree commit.
4. **Mouth-Blind Zone** — safest place is horrifyingly close under the beak.

## Terrain / friends
Prime: Quiet canopy. Oldest: Rot. Avoids open Grasslands and deep otter water. River Otters are an ecological boundary. Fleeing into grass trades this for Terror-Bird territory.

## Loot / aftermath
Sucker scars 70 ft up; polished antler with no carcass; prey tracks that end going **up**. No treasure expected.

## Running notes
- Open with surveillance, not a fair fight on the ground.
- Prefer isolated / trailing / wounded prey (Selected Prey).
- If a line is cut: relocate and pick a different target — interest, not rage.
- Counterplay: stay clustered, sever Hooklines, stand in the Mouth-Blind Zone, force open ground or deep water, Ready the tell (eye-roll).
- Signs beforehand: upward bark strips, sucker scar circles high in trunks, prey trails that vanish upward (Survival DC 14 notice / 17 identify).

## Provenance
Wiki `creature.aruhe-crown-squid` (provisional). Upgraded: Hookline to-hit aligned to +13; Rip Through moved off 2-cost legendary onto Recharge to match 2024 1-cost LA pattern.
