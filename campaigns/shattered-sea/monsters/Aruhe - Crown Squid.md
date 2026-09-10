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
# Great Crown Squid

## Statblock
````col
```col-md
flexGrow=3
===
![[attachments/shattered-sea/creatures/great-crown-squid-of-aruhe-01.jpg|Great Crown Squid of Aruhe]]
> [!narration] Narration
> The Great Crown Squid hangs high between the trees, a house-sized clear mantle swollen with pale violet light and veined like a wet leaf. Thick arms brace against trunks around it, while dozens of thinner hooklines trail down through the mist like roots looking for the forest floor. Its rubbery skin carries bark-dark ridges, thorny suckers, and hanging water, and the whole body barely bends the canopy until one eye turns inside the crown.
```

```col-md
```statblock
layout: Basic 5e Layout
name: "Great Crown Squid"
size: Gargantuan
type: monstrosity
alignment: unaligned
ac: "17 (rubbery hide)"
hp: 283
hit_dice: "21d20 + 63"
speed: "20 ft., climb 50 ft."
stats: [24, 20, 17, 7, 20, 6]
saves:
  - dexterity: 11
  - constitution: 9
  - wisdom: 11
skillsaves:
  - Athletics: 13
  - Perception: 17
  - Stealth: 11
senses: "darkvision 120 ft., passive Perception 27"
languages: "—"
cr: 17
traits:
  - name: "Canopy Camouflage"
    desc: "Among foliage, branches, or hanging roots, the squid can take the Hide action even when only lightly obscured. If it hasn't moved since the end of its previous turn, it has advantage on Dexterity (Stealth) checks."
  - name: "Eight-Eyed Awareness"
    desc: "The squid has advantage on Wisdom (Perception) checks that rely on sight. It can't be surprised while conscious unless the surpriser is in its Mouth-Blind Zone."
  - name: "Mouth-Blind Zone"
    desc: "The squid can't see a creature within 10 feet directly beneath the center of its mantle unless that creature is Grappled by it or touching one of its arms. Such a creature is unseen to the squid, and the squid can't make opportunity attacks against it."
  - name: "Spider-Braced"
    desc: "While at least three primary arms touch solid surfaces, the squid can't be knocked prone or moved against its will."
  - name: "Buoyant Mantle"
    desc: "The squid takes no falling damage while its gas mantle is intact and falls no faster than 60 feet per round. This is not flight."
  - name: "Siege Predator"
    desc: "The squid deals double damage to objects and structures. Nonmagical plant growth never costs it extra movement."
  - name: "Selected Prey"
    desc: "The squid has advantage on its first Hookline Tentacle attack each turn against a creature that has no conscious ally within 10 feet of it."
actions:
  - name: "Multiattack"
    desc: "The squid makes three attacks, only one of which can be Beak. It can replace one attack with Reel."
  - name: "Hookline Tentacle"
    desc: "Melee Weapon Attack: +13 to hit, reach 80 ft., one creature. Hit: 18 (2d10 + 7) slashing damage, and the target has the Grappled condition (escape DC 19). Until the grapple ends, the target also has the Restrained condition. The squid can maintain up to four Hookline grapples. A Hookline can be attacked (AC 15, 15 HP; immune to poison and psychic). Destroying one ends that grapple only."
  - name: "Crushing Arm"
    desc: "Melee Weapon Attack: +13 to hit, reach 20 ft., one target. Hit: 25 (4d8 + 7) bludgeoning damage, and the squid either grapples the target (escape DC 19) or pushes it 20 feet."
  - name: "Beak"
    desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one creature Grappled by the squid. Hit: 33 (4d12 + 7) piercing damage."
  - name: "Reel"
    desc: "Each creature Grappled by a Hookline is pulled up to 30 feet straight toward the squid."
  - name: "Canopy Pounce (Recharge 5–6)"
    desc: "The squid moves up to its climb speed without provoking opportunity attacks, provided it ends that movement touching a tree or similarly massive structure. At any two points during this movement, it can make one Hookline Tentacle attack."
  - name: "Rip Through (Recharge 5–6)"
    desc: "The squid tears a 10-foot cube of nonmagical wood or vegetation within reach. Each creature in that area must make a DC 19 Dexterity saving throw, taking 18 (4d8) bludgeoning damage and falling prone on a failed save, or half as much damage on a successful one. The area becomes difficult terrain."
legendary_actions:
  - name: "Legendary Actions"
    desc: "The Great Crown Squid can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The squid regains spent legendary actions at the start of its turn."
  - name: "Skitter"
    desc: "The squid moves up to 20 feet using its climb speed without provoking opportunity attacks."
  - name: "Hookline"
    desc: "The squid makes one Hookline Tentacle attack."
  - name: "Reel"
    desc: "One Grappled creature is pulled up to 20 feet toward the squid."
```
```
````

## Behavior

- **Habitat.** The Great Crown Squid owns high, wet canopy in [[Aruhe - Quiet Forest|the Quiet]], [[Aruhe - The Marshes|the Marshes]], and the roof of [[Aruhe - The Mangroves|the Mangroves]]. It favors massive trunks, hanging roots, mist, and broken light where its clear mantle and bark-dark arms can read as part of the trees.
- **Behavior.** It waits above trails and waterways with its mantle braced between trunks and its finer hooklines hanging below. It watches before it commits, choosing isolated prey and shifting through the canopy with almost no weight on the branches. The one the crew saw after the spore plant disturbance stopped at the tree line instead of following into open ground.
- **Diet.** It eats large animals, travelers, and anything it can draw up into the canopy. [[Aruhe - Bear-Elk|Bear-Elk]], wounded hunters, climbing creatures, and people who trail behind a group are good meals. Juveniles sometimes work the upper terraces, while the oldest sit heavier in the Marshes where food is easy and walkers cannot easily reach the roof.
- **Social Structure.** Solitary apex predator. Each adult holds a stretch of canopy and treats other large Aruhe hunters as boundaries rather than allies. Adults do not share a kill unless one is already beaten and leaving.

## Tactics

- **Signs.** Sucker scars high on trunks, bark stripped upward, shredded sixty-foot vines, broken branches that never fell, prey tracks that end going up, polished antler caught in the canopy, wet hookline cuts, and long rootlike lines hanging where no root should move.
- **Instincts.** It wants isolated prey, trailing bodies, wounded creatures, and targets that step under open canopy. It avoids open grassland, occupied [[Aruhe - River Otter|river otter]] water, and prey that clusters tightly enough to cut hooklines or hide under its mouth.
- **Tactics.** It stays above the fight, sends hooklines down through leaves and mist, reels prey toward the mantle, and shifts tree to tree when a line is cut. It uses Canopy Pounce to cross the roof and put fresh lines on separated targets, then bites only once prey is already held. If the chase becomes more interesting than the meal, it stays ahead by the canopy route rather than dropping to the ground.
- **Weaknesses.** Open grass, deep occupied water, clustered targets, severed hooklines, and the blind space directly beneath the mantle all interfere with its hunt. Fire, loud cutting, and heavy blows on the hooklines do not scare it, but they make the meal expensive. Dead, the gas mantle loses its lift and the body becomes tons of wet weight.
- **Aftermath.** A Crown Squid encounter leaves torn canopy, sucker rings, sap-wet bark, broken vines, blood high overhead, and trails that simply stop beneath the trees. There is no treasure expected, though severed hooklines, rubbery hide, and mantle tissue may interest a careful harvester.
