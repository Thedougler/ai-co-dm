---
type: monster
campaign: shattered-sea
role: ambusher
cr: 6
source: house (wiki creature.snakewood; living-stock 2026-09-05)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: "Snakewood"
size: Huge
type: plant
alignment: unaligned
ac: "15 (layered woody stems)"
hp: 127
hit_dice: "15d12 + 30"
speed: "0 ft."
stats: [20, 14, 15, 2, 15, 3]
skillsaves:
  - Perception: 5
  - Stealth: 5
condition_immunities: "prone"
senses: "blindsight 60 ft. while in contact with vegetation, passive Perception 15"
languages: "—"
cr: 6
traits:
  - name: "False Appearance"
    desc: "While the Snakewood remains motionless among vegetation, it is indistinguishable from an ordinary mass of large jungle vines."
  - name: "Root-Anchored"
    desc: "The Snakewood cannot willingly move its root crown and can't be knocked prone or moved against its will. Its articulated body can strike anywhere within 60 feet of the root crown, provided continuous branches, trunks, or other substantial vegetation connect it to that space."
  - name: "Distributed Body"
    desc: "A creature grappled by the Snakewood can attack the grasping bundle directly (AC 15; 15 hit points). Damage to the bundle doesn't reduce the Snakewood's hit points. If the bundle is destroyed, that grapple ends; at the beginning of the Snakewood's next turn, neighboring vines can form one replacement bundle."
  - name: "Load Sharing"
    desc: "When one of the Snakewood's grasping bundles is destroyed, another creature currently grappled by the Snakewood is pulled 5 feet toward the canopy."
actions:
  - name: "Multiattack"
    desc: "The Snakewood makes one Snatching Jaws attack and, if a creature began its turn grappled by the Snakewood, either uses Constrict on one grappled creature or uses Reel."
  - name: "Snatching Jaws"
    desc: "Melee Weapon Attack: +8 to hit, reach 60 ft., one Large or smaller creature. Hit: 12 (2d6 + 5) piercing damage, and the target is Grappled (escape DC 16). Until this grapple ends, the target is Restrained. The Snakewood can grapple no more than two creatures at a time."
  - name: "Reel"
    desc: "The Snakewood pulls each creature grappled by it up to 20 feet toward the canopy. If this movement leaves a victim unsupported, it hangs suspended."
  - name: "Constrict"
    desc: "One creature grappled by the Snakewood takes 16 (2d10 + 5) bludgeoning damage. If the target is suspended at least 10 feet above the ground, the damage increases to 21 (3d10 + 5)."
  - name: "External Digestion (Recharge 5–6)"
    desc: "One creature grappled by the Snakewood must make a DC 15 Constitution saving throw. On a failed save, the target takes 18 (4d8) acid damage, or half as much damage on a successful one. On a failed save, the target also takes 7 (2d6) acid damage at the start of each of its turns until the grapple ends or a creature uses an action to scrape or wash away the sap."
reactions:
  - name: "Reflexive Snare"
    desc: "When a creature within 60 feet of the Snakewood that the plant can sense falls prone, jumps, falls, or is forcibly moved, the Snakewood makes one Snatching Jaws attack against it. The Snakewood can use this reaction once per round."
```

# Snakewood

> [!narration] Narration
> _Visualizer: Aruhe fauna pending._

## At the table
**Tactic:** rest as a vine bundle → braid-wedge clap → haul up → digest in the canopy. **Tell:** trails swing wide around ordinary-looking canopy; antlers, boots, and feathers remain on the floor.

## Fiction signature
- **Fantasy:** a clonal liana that uses the forest canopy as a skeleton.
- **Signature:** five or six stems braid into a jaw, clap shut, and lift prey into the air.
- **Goal:** feed above the trail where the sap can work undisturbed.
- **Fear:** a broken grasping bundle and fire that exposes the anchor.
- **Counterplay:** stay out of connected vegetation, break the visible bundle, escape the grapple, or force the plant to spend its reaction on a decoy movement.
- **Proof:** tiny sweet flowers appear along the inner jaw only when the wedge forms; a suspended target swings toward the canopy before the sap appears.

## Role / dials
Ambusher/controller, standard adult at CR 6. The 60-foot reach and restraint are the strong axes; HP and AC are intentionally moderate for a rooted plant. To make it easier, remove Reflexive Snare or reduce the replacement bundle to 10 HP. To make it harder, add a second bundle only when the party has a clear aerial route to attack it; do not raise both AC and HP.

## Signature moves
- **Snatching Jaws:** one long-range setup attack that makes the adult distinct from a Vine Lash.
- **Reel:** changes position and creates the suspended-target payoff.
- **Constrict / External Digestion:** choose immediate damage or a limited sap clock, not both as free riders.

## Terrain / friends
Quiet / Rot canopy. Adults live farther in so they do not replace the vine lashes on the first terraces. Clonal stems cross trunks and branches; the plant is strongest where it has continuous vegetation and weakest over a clean gap.

## Running notes
- **Opening tell and preferred position:** motionless in connected canopy, with a clear 60-foot lane to an isolated target.
- **Default choice:** round 1, Snatching Jaws; on later turns, Jaws plus Constrict or Reel if a grapple was already established. Use External Digestion only when the target is hauled into cover and the recharge is worth the sap clock.
- **Three-round sketch:** round 1, Jaws against the most isolated Large-or-smaller target; round 2, Jaws plus Constrict or Reel; round 3, repeat, or use External Digestion if Recharge 5–6 is available and the target cannot break the bundle.
- **Player-facing counterplay:** attack a grasping bundle (AC 15, 15 HP); escape DC 16; cut the connected vegetation or cross a gap; wash/scrape sap; bait Reflexive Snare with a controlled fall or forced movement.
- **Retreat / failure state:** the root crown remains in place; if both bundles are broken or the canopy connection is severed, it becomes an ordinary-looking, immobile vine mass until prey returns.
- **Revision knobs:** if restraint is too dominant, remove the restrained rider and keep the 60-foot grapple; if it never gets a payoff, shorten the replacement delay only after the bundle counterplay is visible.

## Canon ecology - living stock ingest
- A clonal liana uses the canopy as a skeleton. At rest it is ordinary vines; when it strikes, five or six stems braid into a wedge, clap shut, and lift the body. Tiny sweet flowers line the inner jaws, and pale sap digests prey in the air. Cut one strand and neighbors take the load. Antlers, boots, and feathers are what remain on the floor.
- Young snakewood starts on the first terraces; the sixty-foot adults live farther in so they do not replace the vine lashes.

## Design notes
- **Path:** variant/revision for the adult, plus a separate young stat block; the adult's fiction and long-reach niche remain intact while its setup timing and digestion frequency are explicit.
- **Reference gate:** [SRD v5.2.1](https://www.dndbeyond.com/srd) supplies current grapple/save notation. The current [Troll](https://www.dndbeyond.com/monsters/5195241-troll) is a public numerical peer at CR 5 (AC 15, 94 HP, +7, three attacks) showing that a durable creature can spend its turn on a small number of reliable attacks. [Lazy GM Monster Builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) supplies the controller pattern: restraint needs an escape DC and a way to attack the restraining object. The independent [MCDM preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) supports a clear controller role and visible end-of-effect timing.
- **Shared pattern / deviation:** one setup action unlocks a later payoff; unlike a mobile web controller, Snakewood pays with speed 0, a vegetation requirement, and breakable bundles.
- **Math note:** adult AC 15, 127 HP, +8 attack, DC 16, 12 damage on the setup hit, then 16–21 Constrict or one limited 18-damage sap burst. Round 1 is deliberately setup-light; later rounds average roughly 28–40 raw before hit/save rates when a grapple holds, with restraint and terrain doing the rest of the CR 6 work. Reflexive Snare is one reaction per round, not an extra routine turn.
- **2024 note / uncertainty:** adult actions now state whether a grapple existed at the start of the turn, and External Digestion is Recharge 5–6 to prevent a free recurring damage clock. Test whether a party can reliably reach bundles in closed canopy.

## Loot / aftermath
- The pale sap hardens into a brittle, sweet-smelling resin when exposed to air; cut stems keep twitching until the root crown is burned or severed.

## Provenance
Wiki `creature.snakewood` + [[inbox/2026-09-05-aruhe-living-stock|living-stock 2026-09-05]]. Blight gardens pressure; does not possess. House adult math clarified for the 2024/2025 rules basis; no WotC proprietary text copied.

## Ingest provenance
- Legacy provenance: `/Users/nick/shattered-sea/wiki/shattered-sea/aruhe-hungry-isle/creature-snakewood.md`.
