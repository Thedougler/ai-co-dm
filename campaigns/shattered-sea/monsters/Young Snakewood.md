---
type: monster
campaign: shattered-sea
role: ambusher
cr: 4
source: house (wiki creature.snakewood; living-stock 2026-09-05)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: "Young Snakewood"
size: Large
type: plant
alignment: unaligned
ac: "14 (layered stems)"
hp: 68
hit_dice: "8d10 + 24"
speed: "0 ft."
stats: [18, 14, 16, 2, 13, 3]
skillsaves:
  - Perception: 3
  - Stealth: 6
condition_immunities: "prone"
senses: "blindsight 30 ft. while in contact with vegetation, passive Perception 13"
languages: "—"
cr: 4
traits:
  - name: "False Appearance"
    desc: "While the young Snakewood remains motionless among vegetation, it is indistinguishable from an ordinary mass of jungle vines."
  - name: "Root-Anchored"
    desc: "The young Snakewood cannot willingly move its root crown and can't be knocked prone or moved against its will. Its articulated body can strike anywhere within 30 feet of the root crown, provided continuous branches, trunks, or other substantial vegetation connect it to that space."
  - name: "Clonal Bundle"
    desc: "A creature grappled by the young Snakewood can attack the grasping bundle directly (AC 14; 10 hit points). Damage to the bundle doesn't reduce the young Snakewood's hit points. If the bundle is destroyed, that grapple ends; a replacement bundle forms at the beginning of the young Snakewood's next turn."
actions:
  - name: "Multiattack"
    desc: "The young Snakewood makes one Snatching Jaws attack and, if a creature began its turn grappled by it, either uses Constrict or Reel."
  - name: "Snatching Jaws"
    desc: "Melee Weapon Attack: +6 to hit, reach 30 ft., one Large or smaller creature. Hit: 11 (2d6 + 4) piercing damage, and the target is Grappled (escape DC 14). Until this grapple ends, the target is Restrained. The young Snakewood can grapple only one creature at a time."
  - name: "Reel"
    desc: "The young Snakewood pulls its grappled creature up to 10 feet toward the canopy. If this movement leaves the victim unsupported, it hangs suspended."
  - name: "Constrict"
    desc: "One creature grappled by the young Snakewood takes 13 (2d8 + 4) bludgeoning damage."
```

# Young Snakewood

> [!narration] Narration
> On the first terraces, ordinary vines hang in the low canopy. Five or six stems tighten together, and tiny flowers show inside a forming wedge. The low branches shake when the stems draw tight.


## At the table
**Tactic:** ordinary terrace vines → one braid-wedge snap → short haul into the low canopy. **Tell:** five or six stems tighten together, and tiny flowers appear inside the closing jaw.

## Fiction signature
- **Fantasy:** a juvenile clonal canopy predator on the first terraces.
- **Signature:** a smaller wedge catches one target and lifts it only as far as the low branches.
- **Goal:** practice the adult feeding loop where terrace prey is plentiful.
- **Fear:** a broken bundle or a clean gap with no connected vegetation.
- **Counterplay:** attack the visible bundle, escape DC 14, leave the 30-foot vegetation lane, or burn the stems.
- **Proof:** the low canopy shakes before the jaw closes; only one bundle can hold a creature.

## Role / dials
Ambusher/controller, standard CR 4. This is the terrace variant, not an additional Vine Lash: it has one shorter-range restraint, one target, no reaction, no acid sap, and 68 HP. For an easier encounter, lower the bundle to 8 HP or remove Restrained while grappled. For a harder encounter, use a second young Snakewood on a separate lane; do not give one young plant adult reach.

## Signature moves
- **Snatching Jaws:** one setup attack at 30 feet.
- **Reel:** a short repositioning pull that makes the low canopy matter.
- **Constrict:** a modest next-turn payoff; it cannot be paired with the opening grab.

## Terrain / friends
First terraces and orchard edges, where connected low branches provide the skeleton. Adults live farther in. Keep Vine Lashes on the narrow trail lanes and young Snakewoods on wider canopy lanes so both species retain distinct jobs.

## Running notes
- **Opening tell and preferred position:** false-appearance bundle 20–30 feet above or beside a terrace route, with one continuous branch path to the root crown.
- **Default choice:** round 1, Snatching Jaws; round 2, Jaws plus Constrict or Reel if the grapple still holds; otherwise re-establish the grab.
- **Three-round sketch:** round 1, one Jaws (11 raw on a hit); round 2, Jaws plus Constrict if the target survived and the bundle holds; round 3, repeat or Reel toward cover. The plant has one target and no off-turn attack.
- **Player-facing counterplay:** attack a bundle (AC 14, 10 HP); escape DC 14; cross a gap or leave the connected vegetation; burn it. The restraint ends when the bundle is destroyed.
- **Retreat / failure state:** it cannot chase; if the terrace lane is cleared or the root crown is exposed, it becomes harmless-looking vine cover until prey returns.
- **Revision knobs:** if the young plant replaces the Vine Lash, reduce its reach to 20 feet before reducing its damage; if it feels inert, give it one extra 10-foot Reel, not adult acid digestion.

## Canon ecology - living stock ingest
- Young snakewood starts here on the first terraces. It is the same clonal liana as the adult, but its short reach and low canopy keep it from replacing the terrace's Vine Lashes. At rest it is ordinary vines; when it strikes, stems braid into a wedge, clap shut, and lift prey.

## Design notes
- **Path:** variant derived from the adult, filed as a separate note so encounter builders can choose young or adult without hidden dual-stat math.
- **Reference gate:** [SRD v5.2.1](https://www.dndbeyond.com/srd) is the current rules anchor. The current [Giant Spider](https://www.dndbeyond.com/monsters/4775821-giant-spider) is a public numerical ambusher peer at CR 1 (AC 14, 26 HP) whose web restraint has an attackable web and an escape check. [Lazy GM Monster Builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) supplies the controller pattern of lower direct damage for grapple/restraint plus an escape DC. The independent [MCDM preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) supports one clear controller effect rather than a pile of riders.
- **Shared pattern / deviation:** one setup action unlocks one next-turn payoff; the young variant deliberately loses adult reach, second target, acid, and reaction to preserve Vine Lash's CR 3 trail-controller niche.
- **Math note:** AC 14, 68 HP, +6 attack, DC 14, one 11-damage setup hit, then 13 Constrict or a 10-foot Reel. A three-round script is 11 raw on round 1, about 24 raw on a successful round 2, then the same loop; expected damage is intentionally below a full CR 4 striker because Restrained and the bundle counterplay are the budget.
- **2024 note / uncertainty:** current grapple/restraint language is explicit, and no 2014-only mechanic is required. Playtest young plus a Vine Lash: if the two controllers over-lock one character, place them on separate lanes and remove one opening attack.

## Loot / aftermath
- A cut young bundle leaves a few sweet flowers and pale resin; the severed stems remain viable if replanted near connected terrace trees.

## Provenance
New typed note from the authoritative [[inbox/2026-09-05-aruhe-living-stock|living-stock 2026-09-05]] ecology and the existing `creature.snakewood` entry. Blight gardens pressure; does not possess. House math is a 2024/2025 variant; no WotC proprietary text copied.

## Ingest provenance
- Young terrace ecology promoted from `/Users/nick/shattered-sea/wiki/shattered-sea/aruhe-hungry-isle/creature-snakewood.md`; source paste 2026-09-05.
