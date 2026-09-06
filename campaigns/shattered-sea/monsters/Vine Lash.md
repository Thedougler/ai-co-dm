---
type: monster
campaign: shattered-sea
role: controller
cr: 3
source: house (wiki creature.vine-lash; living-stock 2026-09-05)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: "Vine Lash"
size: Medium
type: plant
alignment: unaligned
ac: "12 (natural armor)"
hp: 52
hit_dice: "8d8 + 16"
speed: "10 ft., climb 10 ft."
stats: [14, 8, 14, 1, 10, 1]
damage_vulnerabilities: "fire"
condition_immunities: "blinded, deafened, frightened"
senses: "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
languages: "—"
cr: 3
traits:
  - name: "False Appearance"
    desc: "While the vine lash remains motionless, it is indistinguishable from ordinary jungle vines."
  - name: "Spider Climb"
    desc: "The vine lash can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  - name: "Distributed Grip"
    desc: "A creature grappled by the vine lash can use its action to attack the grasping bundle (AC 12; 8 hit points). Damage to the bundle doesn't damage the vine lash; reducing the bundle to 0 hit points ends that grapple."
actions:
  - name: "Multiattack"
    desc: "The vine lash makes two Tendril attacks, or it makes one Tendril attack and uses Constrict against one creature it already grapples."
  - name: "Tendril"
    desc: "Melee Weapon Attack: +4 to hit, reach 15 ft., one creature. Hit: 7 (2d4 + 2) bludgeoning damage, and the target is Grappled (escape DC 12). The vine lash can grapple up to two creatures at a time."
  - name: "Constrict"
    desc: "One creature grappled by the vine lash takes 9 (2d6 + 2) bludgeoning damage. The grapple remains until the target escapes or the grasping bundle is destroyed."
```

# Vine Lash

> [!narration] Narration
> Shoulder-thick leafless hangers drape over a trail like ordinary rope. Five or six rope-thick stems hang together from the canopy in one grasping bundle. The tendrils twitch only after something enters the trail lane.


## At the table
**Tactic:** hang as ordinary rope → whip → wrap → squeeze. **Tell:** shoulder-thick, leafless hangers over a trail. The first round establishes a grapple; the next round chooses between more reach and a squeeze.

## Fiction signature
- **Fantasy:** a living ambush vine in the first terraces.
- **Signature:** five or six rope-thick stems whip around a passerby and drink through their roots.
- **Goal:** hold prey under the canopy long enough to feed.
- **Fear:** fire and losing the anchored bundle.
- **Counterplay:** spot the false rope, break the visible grasping bundle, escape the grapple, or use fire.
- **Proof:** its tendrils twitch only after a creature enters the trail lane; fire makes the whole hanger recoil.

## Role / dials
Controller, standard ambusher; CR 3. For an easier encounter, use one Tendril on the opening turn or halve the bundle's hit points. For a harder encounter, place a second vine on a separate trail lane, not on the same target. Do not add damage while the fire vulnerability is active.

## Signature moves
- **Tendril:** setup attack that creates the visible grapple.
- **Constrict:** one-target payoff that costs the second attack when paired with a new grab.
- **Distributed Grip:** the trapped creature has a concrete object to attack instead of waiting for an escape check.

## Terrain / friends
First terraces. Young snakewood starts here; adult snakewood lives farther in. A narrow trail, low branches, and ordinary hanging vines are enough terrain; the plant does not need a prepared trap.

## Running notes
- **Opening tell and preferred position:** motionless over the most natural-looking trail crossing; false appearance ends when it attacks.
- **Default choice:** two Tendrils against separate targets or one target if the party is already split; use Constrict on a grappled target on the following turn.
- **Three-round sketch:** round 1, two Tendrils; round 2, one Tendril plus Constrict if a grapple holds, otherwise two Tendrils; round 3, repeat the choice, prioritizing a target that has not seen the bundle counterplay.
- **Player-facing counterplay:** escape DC 12; attack a grasping bundle (AC 12, 8 HP); burn the plant; move around the visible trail lane. Fire damage also exploits its vulnerability.
- **Retreat / failure state:** if both bundles are broken or the trail is burning, it withdraws toward its root mass at 10 feet per round.
- **Revision knobs:** if the loop is too weak, raise Constrict to 10 (3d4 + 2); if it dominates, reduce the reach to 10 feet before reducing the escape DC.

## Canon ecology - living stock ingest
- Shoulder-thick, leafless, fruitless canopy ropes wait over trails. They whip, wrap, and squeeze what passes beneath, drinking through their roots. The first terrace lesson is simple: some vines grab.

## Design notes
- **Path:** variant/revision, not a full redesign; the fiction and CR 3 chassis already worked, so the smallest fix was to make the setup/payoff loop explicit and add a breakable grasp.
- **Reference gate:** [SRD v5.2.1](https://www.dndbeyond.com/srd) is the rules/notation anchor. The current [Giant Spider](https://www.dndbeyond.com/monsters/4775821-giant-spider) is a public numerical ambush peer at CR 1 (AC 14, 26 HP) whose limited restraint has a visible break/escape answer. [Lazy GM Monster Builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) is the role/mechanic peer: controllers trade direct damage for grapple/restraint and must provide an escape DC. An independent [MCDM preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) reinforces concise controller conditions with an observable save/escape window.
- **Shared pattern / deviation:** setup once, then pressure one target; this vine uses a lower DC and fire vulnerability because it is a CR 3 trail ambusher, not a durable web controller.
- **Math note:** +4 attack, DC 12, AC 12, 52 HP, two 7-damage attacks. A likely three-round script is 14 raw on round 1, 7 + 9 raw on round 2 if one grab holds, then 16–18 raw per later round before hit chances; the control and vulnerability carry the rest of the budget. The bundle's 8 HP is a deliberate counterweight.
- **2024 note / uncertainty:** uses current `Grappled`, explicit escape DCs, and fence-first Fantasy Statblocks notation. Playtest whether the bundle attack is discovered quickly; if not, make the bundle visibly exposed rather than adding damage.

## Loot / aftermath
- A burned grasping bundle leaves sweet-smelling ash and a tough, wet cord; do not harvest it while it is still twitching.

## Provenance
Wiki `creature.vine-lash` + [[inbox/2026-09-05-aruhe-living-stock|living-stock 2026-09-05]]. Blight gardens pressure; does not possess. House math revised for the 2024/2025 rules basis; no WotC proprietary text copied.
