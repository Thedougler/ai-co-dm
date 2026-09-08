---
type: monster
campaign: shattered-sea
role: controller
cr: 8
source: house (wiki creature.strangler-fig; living-stock 2026-09-05)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: "Strangler Fig"
size: Huge
type: plant
alignment: unaligned
ac: "15 (natural armor)"
hp: 126
hit_dice: "12d12 + 48"
speed: "0 ft."
stats: [20, 6, 18, 1, 10, 1]
damage_vulnerabilities: "fire"
damage_resistances: "bludgeoning, piercing"
condition_immunities: "blinded, deafened, frightened"
senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
languages: "—"
cr: 8
traits:
  - name: "False Appearance"
    desc: "While the strangler fig remains motionless, it is indistinguishable from a normal tree."
  - name: "Rooted"
    desc: "The strangler fig cannot move or be moved by any effect."
actions:
  - name: "Multiattack"
    desc: "The strangler fig makes two Root Lash attacks and, if a creature is already grappled by it, uses Hollow-Trunk Engulf on one grappled creature. Alternatively, it makes three Root Lash attacks."
  - name: "Root Lash"
    desc: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage, and the target is Grappled (escape DC 16). The strangler fig can grapple up to three creatures at a time."
  - name: "Trail-Pinch (Recharge 5–6)"
    desc: "Roots erupt along a 30-foot-long, 10-foot-wide line on the ground that begins at a point within 60 feet of the fig. Each creature in the line must make a DC 16 Dexterity saving throw, taking 18 (4d8) bludgeoning damage and being pulled up to 10 feet toward the fig on a failed save, or taking half as much damage without the pull on a successful one. Until the start of the fig's next turn, the line becomes an aerial-root curtain: it is difficult terrain and lightly obscured. A creature can clear one 5-foot square of curtain as an action."
  - name: "Hollow-Trunk Engulf"
    desc: "One Large or smaller creature grappled by the strangler fig is pulled into its hollow trunk and becomes Restrained. The creature takes 14 (4d6) bludgeoning damage at the start of each of the fig's turns. As an action, the engulfed creature can make a DC 16 Strength (Athletics) or Dexterity (Acrobatics) check, ending the effect on itself on a success. An ally adjacent to the trunk can use an action to make the same check to pull the creature free. The fig can engulf one creature at a time."
```

# Strangler Fig

> [!narration] Narration
> Curtains of aerial roots hang across a game trail already pinched through stone. Old bones show in the bark of a hollow trunk. The rooted fig fills the bottleneck with wood and hanging root.


## At the table
**Tactic:** let a trail pinch itself → aerial roots reach from the curtain → one victim disappears into the hollow trunk. **Tell:** curtains of roots hang across a game trail already squeezed through stone; old bones show in the bark.

## Fiction signature
- **Fantasy:** a rooted strangler fig that turns a natural bottleneck into a feeding throat.
- **Signature:** aerial roots close the trail, then the hollow trunk takes one grappled victim.
- **Goal:** keep prey in the pinch until the trunk can digest it.
- **Fear:** fire and a cleared route that gives prey room to go around.
- **Counterplay:** break the root grapple, clear the curtain, escape or rescue the engulfed creature, or use fire.
- **Proof:** the curtain falls before the trunk opens; the bones in the bark show exactly what the tree is trying to do.

## Role / dials
Controller, standard CR 8. Rooted is a meaningful weakness: it cannot chase or reposition. For an easier encounter, remove the curtain's lightly obscured clause or reduce Engulf damage to 10. For a harder encounter, add a second fig only if the trails offer two separate routes; do not increase the number of engulfed creatures on one tree.

## Signature moves
- **Root Lash:** creates the grapple lane.
- **Trail-Pinch:** short recharge terrain control that reveals the aerial-root curtain.
- **Hollow-Trunk Engulf:** one-target payoff with two rescue routes and ongoing damage.

## Terrain / friends
Single figs grow on game trails already squeezed through stone. The tree does not walk and does not need to. A trail bend, a low ceiling, or a harmless-looking root curtain is enough; leave at least one route that can be cleared or abandoned.

## Running notes
- **Opening tell and preferred position:** false appearance at the trail's narrowest point, with its trunk within 20 feet of the first likely target.
- **Default choice:** use two Root Lashes plus Engulf when a grapple is already present; use three lashes when no target is held. Use Trail-Pinch when two or more creatures are aligned or the party is about to bypass the trunk.
- **Three-round sketch:** round 1, two Lashes and Engulf if a hit holds; round 2, three Lashes while the engulfed target takes 14 at the start of the turn; round 3, Trail-Pinch if recharged, otherwise three Lashes. Keep only one creature inside the trunk.
- **Player-facing counterplay:** escape DC 16; ally rescue with the same DC; clear a curtain square as an action; attack roots; burn the fig. Fire vulnerability is the strongest direct answer but not the only one.
- **Retreat / failure state:** it cannot retreat. If the curtain is cleared and all grapples end, the party can pass the rooted trunk; after a failed ambush it returns to false appearance.
- **Revision knobs:** if the fig is too passive, shorten Trail-Pinch to Recharge 4–6; if it locks the party down, remove the pull from the failed save before touching Engulf.

## Canon ecology - living stock ingest
- Single strangler figs grow on game trails already squeezed through stone. Aerial roots hang in curtains and reach; the trunk is hollow, with old kills showing as bones in the bark. The tree does not walk and does not need to.

## Design notes
- **Path:** full redesign of the action loop, not a new creature; the rooted fiction and CR 8 chassis stay, while the previous thin multiattack gains a clear trail setup and a single-trunk payoff.
- **Reference gate:** [SRD v5.2.1](https://www.dndbeyond.com/srd) is the rules/notation anchor. The current [Troll](https://www.dndbeyond.com/monsters/5195241-troll) provides a public numerical peer around this threat band: AC 15, 94 HP, +7, and three reliable attacks, making this fig's 126 HP and physical resistance a defensive trade for lower direct damage. [Lazy GM Monster Builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) supplies the role/mechanic peer: controllers may grapple or swallow, but need an escape DC and object/ally counterplay. The independent [MCDM preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) supports a short, visible controller effect with an end-of-effect save rather than repeated turn denial.
- **Shared pattern / deviation:** one action sets a positional problem and another action cashes in one target; the fig is deliberately rooted, so the party can solve the encounter by clearing or abandoning the trail.
- **Math note:** AC 15, 126 HP, +8 attack, DC 16, two Lashes for 24 raw plus one Engulf setup, or three Lashes for 36 raw; Engulf adds 14 at the next turn's start, and Trail-Pinch is 18 area damage on a recharge. Physical resistance raises effective durability, while fire vulnerability and immobility are the trade.
- **2024 note / uncertainty:** all ranges, target counts, saves, escape checks, and durations are explicit. Test the curtain with a party that has no fire; if the only sensible answer is damage, remove its obscuring clause rather than adding another escape rule.

## Loot / aftermath
- The hollow trunk contains old bones, resinous root-fiber, and a trail of pale sap. The tree does not yield living wood without killing the root crown.

## Provenance
Wiki `creature.strangler-fig` + [[inbox/2026-09-05-aruhe-living-stock|living-stock 2026-09-05]]. Blight gardens pressure; does not possess. House math redesigned for the 2024/2025 rules basis; no WotC proprietary text copied.
