---
type: monster
campaign: shattered-sea
role: bruiser
cr: 12
source: house (wiki creature.corpsewood; living-stock 2026-09-05)
visibility: dm
tags: [monster, aruhe]
---

```statblock
layout: Basic 5e Layout
name: "Corpsewood"
size: Gargantuan
type: plant
alignment: unaligned
ac: "16 (natural armor)"
hp: 195
hit_dice: "13d20 + 65"
speed: "20 ft."
stats: [24, 6, 20, 1, 12, 1]
damage_vulnerabilities: "fire"
damage_resistances: "bludgeoning"
condition_immunities: "frightened, prone"
senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 11"
languages: "—"
cr: 12
traits:
  - name: "Siege Monster"
    desc: "The corpsewood deals double damage to objects and structures."
  - name: "Corrupted Ground"
    desc: "The ground within 15 feet of the corpsewood is difficult terrain for creatures other than plants."
  - name: "Blight-Fed Regeneration"
    desc: "The corpsewood regains 10 hit points at the start of its turn if it has at least 1 hit point. If it took fire damage since the end of its previous turn, this trait doesn't function at the start of this turn. Fire visibly blackens the seams where the wood was knitting."
actions:
  - name: "Multiattack"
    desc: "The corpsewood makes three Slam attacks, or it makes two Slam attacks and uses Uproot if it is available."
  - name: "Slam"
    desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
  - name: "Uproot (Recharge 5–6)"
    desc: "The corpsewood tears the ground in a 20-foot-radius area centered on itself. Each creature in the area must make a DC 17 Dexterity saving throw, taking 36 (8d8) bludgeoning damage and falling Prone on a failed save, or taking half as much damage without falling Prone on a successful one."
```

# Corpsewood

> [!narration] Narration
> _Visualizer: Aruhe fauna pending._

## At the table
**Tactic:** patrol the deep Rot like a dead tree that refuses to stay broken; drag roots through the line, slam anything that blocks the beat, and uproot the ground when surrounded. **Tell:** split bark knits visibly until fire blackens the seams.

## Fiction signature
- **Fantasy:** a forty-foot dead tree walking on dragging roots.
- **Signature:** every impact tears it apart, then the wood knits back together unless fire interrupts it.
- **Goal:** keep its seasonal patrol through the deep Rot and clear anything from the beat.
- **Fear:** fire and open ground outside the tree line.
- **Counterplay:** apply fire to suppress regeneration, kite its 20-foot speed, leave the corrupted ground, and spread out before Uproot.
- **Proof:** fresh breaks close with wet wood fibers; fire leaves an obvious black, unknitting scar until the next turn.

## Role / dials
Bruiser/patrol, standard CR 12. Its strong axes are HP, regeneration, and three heavy melee attacks; AC is reduced to 16 and only bludgeoning resistance remains. For an easier encounter, reduce regeneration to 5 or let one fire hit suppress it through the end of the following turn. For a harder encounter, use the tree line and one non-body objective, not more immunities.

## Signature moves
- **Slam:** reliable patrol pressure with no rider.
- **Uproot:** recharge area answer when the party clusters around the tree.
- **Fire-gated knitting:** the encounter's central defense tell, not a hidden bonus.

## Terrain / friends
Deep Rot, always near the tree line. It follows a seasonal beat and does not leave the forest. Silence moths, thornbacks, or ordinary Rot terrain can create movement problems, but the corpsewood should remain the obvious durable target rather than gain a pile of immunities.

## Running notes
- **Opening tell and preferred position:** forty feet of split deadwood crossing the patrol line; the first visible hit begins a seam that closes unless fire is used.
- **Default choice:** three Slam attacks while one target is in reach; use Uproot instead of the third Slam when two or more creatures are in the radius or the party is trying to surround it.
- **Three-round sketch:** round 1, three Slams (60 raw before hit chance); round 2, three Slams while regeneration returns 10 unless fire-gated; round 3, two Slams plus Uproot if recharged (40 raw plus the area effect), otherwise three Slams. Fire changes the defense math every round.
- **Player-facing counterplay:** fire damage suppresses the next regeneration; spread beyond the Uproot radius; kite at more than 15 feet; leave the 15-foot corrupted ground; use forced movement only if the effect can overcome its rooted mass (it cannot be knocked prone).
- **Retreat / failure state:** it turns back at the tree line. If fire keeps the seams black or the patrol objective is blocked, it withdraws along its seasonal route rather than fight to destruction.
- **Revision knobs:** if it is a bag of hit points, lower HP by 20 and add a clear patrol objective; if its damage is too high, make Uproot a full action rather than part of Multiattack before reducing Slam damage.

## Canon ecology - living stock ingest
- A dead tree walks: forty feet of split bark and dragging roots. It patrols deep [[The Rot]] on a seasonal beat and never leaves the tree line. Fire is the one thing that stops it knitting itself back together. The wood died years ago; what moves it did not.

## Design notes
- **Path:** variant/revision, not a full redesign; the bruiser and patrol identity stay, while the defense is narrowed and the fire tell is made observable.
- **Reference gate:** [SRD v5.2.1](https://www.dndbeyond.com/srd) is the rules/notation anchor. The current [Troll](https://www.dndbeyond.com/monsters/5195241-troll) is a public regeneration peer whose CR 5 chassis uses 94 HP, AC 15, +7, three attacks, and fire/acid-gated healing; the corpsewood scales that pattern to CR 12 without copying its text. [Lazy GM Monster Builder](https://slyflourish.com/lazy_5e_monster_building_resource_document.html) supplies the bruiser trade: more HP and direct damage, less mobility/defense complexity. The independent [MCDM preview](https://files.mcdmproductions.com/FleeMortals/FleeMortalsPreview.pdf) supports giving a bruiser a clear battlefield choice and role rather than stacking passive defenses.
- **Shared pattern / deviation:** regeneration has a visible bypass and a one-turn resource window; unlike a troll-like skirmisher, Corpsewood is slow, rooted to the tree line, and uses Uproot as its positional answer.
- **Math note:** AC 16, 195 HP, only bludgeoning resistance, fire vulnerability, and 10 regeneration if fire is absent. Three Slams are 60 raw per round before hit chance; the recharge line trades one Slam for 36 area damage and prone, keeping a CR 12 bruiser pressure band without adding legendary actions.
- **2024 note / uncertainty:** current explicit save wording and condition labels used. The open question is whether 10 regeneration plus bludgeoning resistance still feels too durable for the party's damage mix; first playtest should record rounds with and without fire rather than adding immunities.

## Loot / aftermath
- When finally stopped, the corpsewood leaves black-veined deadwood, root-knots, and a warm seam that cools only after the next dawn.

## Provenance
Wiki `creature.corpsewood` + [[inbox/2026-09-05-aruhe-living-stock|living-stock 2026-09-05]]. Blight gardens pressure; does not possess. House math revised for the 2024/2025 rules basis; no WotC proprietary text copied.
