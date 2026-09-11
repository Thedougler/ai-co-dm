---
type: monster
campaign: shattered-sea
region: aruhe
role: skirmisher
cr: 11
source: house (2024 Roc chassis, SRD peer)
visibility: dm
tags: [monster, aruhe, apex-predator, aerial]
summary: CR 11 adult aerial skirmisher that telegraphs a stoop, seizes exposed prey, and breaks off when cover denies its dive.
---
# Bloodhawk
![[attachments/shattered-sea/creatures/bloodhawk-of-aruhe-flight.png|Bloodhawk over Aruhe]]
> [!narration] Narration
> Nothing screams. Nothing circles low enough to see. Then: **THUMP-thump.** A pause. Wind over grass. **THUMP-thump.** Closer. The shadow reaches you before the bird does. When you find it against the cloud, four wings have already folded tight against a body big enough to make a whale look like prey.

## Statblock

```statblock
layout: Basic 5e Layout
name: Bloodhawk
size: Gargantuan
type: monstrosity
alignment: unaligned
ac: "15 (natural armor)"
hp: 248
hit_dice: 16d20 + 80
speed: 20 ft., fly 160 ft.
stats: [28, 18, 20, 3, 16, 9]
saves:
  - dexterity: 8
  - constitution: 9
  - wisdom: 7
skillsaves:
  - Perception: 11
senses: passive Perception 21
languages: "—"
cr: 11
traits:
  - name: Blood-Red Vigil
    desc: "The bloodhawk has advantage on Wisdom (Perception) checks that rely on sight."
  - name: Four-Winged Lift
    desc: "The bloodhawk can grapple Gargantuan creatures. When it moves a creature it has Grappled, that creature doesn't cause the bloodhawk's movement to cost extra movement. The bloodhawk's Fly Speed is halved while it is Grappling a Gargantuan creature."
actions:
  - name: Multiattack
    desc: "The bloodhawk makes two attacks: one Serrated Beak attack and one Hook Talons attack."
  - name: Serrated Beak
    desc: "Melee Attack Roll: +13, reach 10 feet, one target. Hit: 28 (3d12 + 9) Piercing damage. If the target is Grappled by the bloodhawk, the attack deals an extra 7 (2d6) Slashing damage as the recurved teeth inside the beak saw through the held prey."
  - name: Hook Talons
    desc: "Melee Attack Roll: +13, reach 10 feet, one target. Hit: 23 (4d6 + 9) Slashing damage. If the target is a Gargantuan or smaller creature, it has the Grappled condition (escape DC 19). Until the grapple ends, the target has the Restrained condition, and the bloodhawk can't use Hook Talons against another target."
  - name: Terminal Stoop (Recharge 5–6)
    desc: "The bloodhawk flies up to its Fly Speed in a straight line toward one creature it can see at least 60 feet below it. This movement doesn't provoke Opportunity Attacks. At the end of this movement, the bloodhawk makes one Hook Talons attack against that creature with Advantage. On a hit, the attack deals an extra 27 (6d8) Bludgeoning damage from the impact. The target must then succeed on a DC 17 Constitution saving throw or have the Stunned condition until the start of the bloodhawk's next turn."
bonus_actions:
  - name: Haul Aloft
    desc: "If the bloodhawk has a creature Grappled, it flies up to half its Fly Speed without provoking Opportunity Attacks from that creature. It can release the creature at any point during this movement."
reactions:
  - name: Break Turn
    desc: "Trigger: The bloodhawk is hit by an attack it can see while flying. Response: The bloodhawk adds 3 to its AC against the triggering attack, potentially causing it to miss. If the attack misses, the bloodhawk can fly up to 30 feet without provoking Opportunity Attacks."
```

---
## Biology

Bloodhawks are not oversized hawks so much as an Aruhe branch of avian dinosaur that never surrendered some of its older predatory hardware. Recurved teeth hide behind the pale beak, the feet are built to close around heavy prey, and the lower wing-pair carries weight during the climb. The second pair also lets an adult change pitch and roll violently for its size. Adults can lift a whale clear of the water; they use the same motion on a lone body in open sky.

## Behavior

- **Habitat.** Bloodhawks own the open sky above [[Aruhe - Hungry Isle]], especially sea channels, lake bowls, reef gaps, river openings, cliff faces, canopy breaks, and grassland rims.
- **Behavior.** At altitude, an adult is almost silent, riding lift in wide patient circles. Once it commits, the two wing-pairs beat out of phase. The paired **thump-thump** carries ahead of the dive, warning prey that the bird has chosen a line.
- **Diet.** Whales are preferred coastal prey. Inland adults take [[Aruhe - Bear-Elk|Bear-Elk]], [[Aruhe - Terror-Bird|terror-birds]], large reptiles, and anything else forced into the open. Canoes and small boats are not meaningfully different from prey.
- **Social Structure.** Solitary adults control enormous sky lanes. Juveniles sometimes shadow an adult hunt and take whatever the first strike flushes.
---

## Tactics

- **Signs.** A moving wing-shadow with no call, crushed grass circles with no exit trail, bear-elk bones on terrace stone with no approach tracks, whale blood in open water, crimson primary feathers, and the paired **thump-thump** during an active chase.
- **Instincts.** It keys on height, noise, exposed movement, open water, and prey already flushed from cover. It breaks off when the target vanishes under closed canopy, deep grass, or protected water.
- **Tactics.** Start high and outside ordinary weapon range. Let the table hear the **thump-thump** before Terminal Stoop. The Bloodhawk stoops on the most exposed large target, tries to seize it with Hook Talons, and uses Haul Aloft to turn altitude into the threat. On the next turn, it tears into the held body with Serrated Beak or releases the body to regain distance.
- **Weaknesses.** Break the dive line with closed canopy, tall grass, a cliff overhang, ship rigging, or a broken sightline. Force low altitude, ready attacks for the committed pass, or ground it; its land speed is poor and Break Turn cannot answer an attack after it has spent its reaction. It will not put its feet into occupied [[Aruhe - River Otter|otter]] water.
- **Aftermath.** A Bloodhawk strike leaves torn feathers, falling blood, cracked branches, dropped nest fiber from high canopy, and sometimes a carcass placed where no ground trail reaches it.

---
## Art 

![[attachments/shattered-sea/creatures/bloodhawk-token.jpg|Bloodhawk FoundryVTT token]]
