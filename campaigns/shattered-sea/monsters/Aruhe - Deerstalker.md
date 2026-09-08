---
type: monster
campaign: shattered-sea
region: aruhe
role: ambusher
cr: 5
source: house (wiki creature.deer-stalker, upgraded)
visibility: dm
tags: [monster, aruhe]
---

## Statblock

```statblock
layout: Basic 5e Layout
name: Deer-Stalker
size: Large
type: monstrosity
alignment: unaligned
ac: "15 (natural armor)"
hp: 85
hit_dice: 10d10 + 30
speed: 40 ft., climb 20 ft.
stats: [16, 20, 16, 6, 18, 6]
saves:
  - dexterity: 8
  - wisdom: 7
skillsaves:
  - Stealth: 10
  - Perception: 7
  - Survival: 7
senses: darkvision 120 ft., passive Perception 17
languages: "—"
cr: 5
traits:
  - name: Wasting Stillness
    desc: "The deer-stalker can take the Hide action as a bonus action while in dim light, darkness, or natural foliage. If it has not moved since the start of its previous turn, it has advantage on Dexterity (Stealth) checks, and a creature searching for it cannot benefit from hearing when making its Wisdom (Perception) check. While motionless, the deer-stalker is indistinguishable from a sick deer until it speaks, attacks, or a creature sees its clawed forelimbs or forward-set eyes up close."
  - name: Shadow Cover
    desc: "The deer-stalker's movement makes no sound. While in dim light or darkness, moving at half its speed or less does not reveal its position to a creature from which it is hidden unless that creature sees it. The deer-stalker will not willingly enter bright light before it has hit a creature during this hunt."
  - name: This Meal
    desc: "When the deer-stalker first notices a creature that interrupted its feeding, or when it needs a new quarry, it chooses one creature it can see as its quarry — preferring the most isolated creature or the one that last touched its meal. It knows the direction of its quarry while the quarry is within 1 mile, and it has advantage on Wisdom (Survival) checks made to track that creature and on Wisdom (Perception) checks to hear it. Once on each of the deer-stalker's turns, when it hits its quarry with an attack while fewer than two conscious creatures other than the quarry are within 10 feet of the quarry, the attack deals an extra 7 (2d6) damage. The deer-stalker chooses a new quarry when the current quarry dies, when two or more conscious creatures other than the quarry are within 10 feet of the quarry at the start of the deer-stalker's turn, or when the deer-stalker ends its turn more than 1 mile from the quarry."
  - name: Famished
    desc: "The deer-stalker is Famished until it uses Feed or spends 1 minute consuming a carcass. While it is not Famished, Lost Nerve treats two qualifying creatures as enough to force a retreat."
  - name: Lost Nerve
    desc: "At the start of its turn, if three or more hostile creatures that are not unconscious are within 30 feet of it (two or more if it is not Famished), the deer-stalker must take the Dash or Hide action and move away. It can drag one grappled creature with it without reducing its speed. This trait does not apply if the deer-stalker has reduced a creature to 0 hit points since the start of its last turn."
actions:
  - name: Multiattack
    desc: "The deer-stalker makes two Claw attacks."
  - name: Claw
    desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is Medium or smaller, the deer-stalker can grapple it (escape DC 14) instead of dealing the attack's slashing damage. The deer-stalker can grapple only one creature at a time."
  - name: Snatch from the Dim (Recharge 5–6)
    desc: "The deer-stalker can use this action only while hidden in dim light, darkness, or natural foliage. It moves up to its speed without provoking opportunity attacks and makes one Claw attack. On a hit, the attack deals its normal damage and, if the target is Medium or smaller, the target is also grappled (escape DC 14). The deer-stalker can then move up to half its speed, carrying a grappled creature with it without reducing its speed. If the target is the deer-stalker's quarry, This Meal can apply."
  - name: Feed
    desc: "The deer-stalker feeds on a carcass or on one unconscious or dead creature within 5 feet of it. It is no longer Famished. A creature the deer-stalker is feeding on that is at 0 hit points has disadvantage on death saving throws until the deer-stalker stops feeding or is moved away."
bonus_actions:
  - name: Borrowed Voice
    desc: "The deer-stalker reproduces a sound it has heard, including a voice. The sound originates from its space and does not automatically reveal the deer-stalker if it is hidden, though a creature that hears the sound knows the direction. The deer-stalker prefers sounds that previously caused a specific creature to move toward their source, and it uses them out of context, looping a word or stretching a phrase. A creature that can see the original speaker knows the sound is an imitation. A creature that heard the original sound has advantage on a DC 14 Wisdom (Insight) check to recognize the imitation. After the deer-stalker uses a given sound without drawing a creature closer, it abandons that sound."
reactions:
  - name: Silent Retreat
    desc: "When the deer-stalker is hit by an attack, if three or more hostile creatures that are not unconscious are within 30 feet of it, or if it is not Famished, it can move up to half its speed without provoking opportunity attacks. If it ends this movement in dim light, darkness, or natural foliage, it can immediately attempt to Hide."
```

# Deer-Stalker

> [!narration] Narration
> The Deer-Stalker is a tall, starving deer dragged almost upright by overlong forelimbs, with thin hind legs tucked beneath a shaggy brown hide. Bone-pale arms hang past its knees and end in black claws, often dark with blood up to the wrists. Its antlers branch above a long white face, and pale forward eyes stare over a wet muzzle while blood and spit thread from its teeth into the leaf rot.

## Behavior

**Habitat.** Deer-Stalkers keep to the dim edges of [[Aruhe - Quiet Forest|the Quiet]] and [[Aruhe - The Marshes|the Marshes]], using game trails, wet paths, root shadows, and grassland margins where a sick deer shape can stand half-hidden. They avoid [[Aruhe - Razer-Grass]] and [[Aruhe - Grubnade|Grubnades]].

**Behavior.** A Deer-Stalker holds unnaturally still until the wrong details become visible: forward-set eyes, clawed forelimbs, blood on the pale muzzle, and hips that do not sit like a grazing animal's hips. When disturbed at a meal, it crashes away too loudly, then returns through dim cover once the quarry is isolated.

**Diet.** It eats fresh kills and interrupted carcasses, tearing soft meat first and leaving sweet rot around the site. It is always hungry until it feeds, but the current Aruhe frame keeps that hunger animal and territorial rather than possessed or commanded.

**Social Structure.** Solitary. Two Deer-Stalkers in the same stretch ignore one another unless a carcass or quarry forces them too close, and neither will contest a [[Aruhe - Bear-Elk|Bear-Elk]] or [[Aruhe - Terror-Bird|terror-bird]].

## Tactics

**Signs.** Deer tracks that become handlike claw marks, blood on low leaves, a dragged carcass, torn bark at shoulder height, long pauses in ordinary forest sound, sweet rot, and a familiar voice repeated wetly from the wrong place.

**Instincts.** It wants the isolated body, the creature that touched its meal, or the one that answers a sound alone. Crowds, bright light before the first hit, and several ready threats push it back into cover.

**Tactics.** It hides as a sick deer or a still shape in foliage, waits for one target to separate, then snatches from dim cover with its long forelimbs. If the hunt turns against it, it retreats silently, changes angle, and uses a borrowed voice to pull the quarry back toward shadow.

**Weaknesses.** It loses nerve when too many conscious enemies stay close together, and feeding makes it easier to drive off. Bright light, tight formation, open ground, and refusing the voice lure all make the hunt worse for it.

**Aftermath.** A Deer-Stalker encounter leaves an interrupted kill site, blood threads on leaves and roots, clawed drag marks, hoofprints that stop making sense, and a lingering stink of sweet rot. There is usually nothing worth keeping.

![[attachments/shattered-sea/creatures/deer-stalker-of-aruhe.png|Deer-Stalker of Aruhe]]

![[attachments/shattered-sea/creatures/deer-stalker-of-aruhe-01.jpg|Deer-Stalker of Aruhe]]

![[attachments/shattered-sea/creatures/deer-stalker-of-aruhe-02.jpg|Deer-Stalker of Aruhe]]

![[attachments/shattered-sea/creatures/deer-stalker-of-aruhe-03.jpg|Deer-Stalker of Aruhe]]
