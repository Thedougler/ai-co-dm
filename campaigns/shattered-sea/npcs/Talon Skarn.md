---
type: npc
campaign: shattered-sea
status: alive
role: rival
location: Midchain
faction: Countless
visibility: dm
tags: [npc, countless, schism]
summary: Countless peregrine apprentice and CR 13 flying skirmisher whose katana, sai, and kusarigama kit, plus a stoop dive, point the Rule of Two at Talon Vantyrus.
---
# Talon Skarn

## Art
![[attachments/shattered-sea/character-references/talon-skarn-reference-sheet.png|Talon Skarn character reference sheet]]
![[attachments/shattered-sea/portraits/talon-skarn-portrait.jpg|Talon Skarn portrait]]
![[artifacts/tokens/talon-skarn-token.png|Talon Skarn FoundryVTT token]]

> [!narration] Narration
> A broad peregrine aarakocra stands about five feet tall, heavy wings lifted behind a dark robe. Pale chest feathers climb into a black-and-cream face; red-orange crown feathers flare above steady amber-gold eyes and a yellow beak tipped in black. The robe hangs in dark layers over wrapped ankles and bare talons, with patterned trim catching along the collar and down the front.
>
> Cloth wraps and loose metal chains cover his forearms. One hand holds a long straight sword, the other a curved hook-blade on a dangling chain. When he shifts his grip, the chain links click once and settle against the wraps.


## Hook
Vantyrus’s apprentice is openly testing the master he intends to kill, and will only enter the fight once the crew physically reaches the Midchain.

## Identity and public function
Peregrine apprentice of [[Talon Vantyrus]] and a living expression of the [[Rule of Two]].

## Look / voice
- **Visual:** Broad peregrine aarakocra, about five feet tall; red-orange crown feathers; black-and-cream face feathers; amber-gold eyes; yellow beak with a black tip; pale chest feathers; and wide, dark layered wings.
- **Dress:** Dark robe with patterned trim, leather grips, cloth forearm wraps, and taloned feet left bare.
- **Weapons:** A long straight sword (katana), two hooked chain-sickles (kusarigama), and two short forked daggers (sai). Extra chain loops across his wrapped forearms.
- **Behavior:** Measures opponents from a still, confident stance. When he commits, the wings lift, the chains click, and he sets the distance with the hooked sickle or closes with the sword.
- **Voice principle:** Unknown; do not invent.
- **Sample line:** Unknown; do not invent.

## Drive
**Want:** Openly scheme to kill Vantyrus, as the Rule of Two requires. Personal want beyond the master’s goals is **unknown**.

## Public face vs secret
**Public:** Countless apprentice and ambush tester. **Secret:** The assassination scheme is not a betrayal of Countless doctrine; it is the doctrine’s standing threat.

## Resources
Katana, two sai, two kusarigama, fly 90 feet, Countless access, and the stoop dive.

## Next move / interrupt point
Set tests along the approach, then enter the fight only when the crew physically reaches Midchain. Stoop when there is 30 feet of air; pull with the kusarigama when the lane is tight. Players can bait the ambush, protect the objective, ground him, or exploit the Rule of Two without assuming Skarn's private motive.

# Combat

> **Encounter rule:** Use this block whenever [[Talon Skarn]] fights. His win condition is the current job, not a duel to 0 hit points. On [[Session-11-09-Theft-on-the-Watch]], that job is the [[Fate Spinner]] and a break down the star-cut.

## Statblock

```statblock
layout: Basic 5e Layout
dice: true
columns: 2
forceColumns: true
name: Talon Skarn
size: Medium
type: humanoid
subtype: aarakocra
alignment: lawful neutral
ac: 19
hp: 195
hit_dice: "23d8 + 92"
speed: "50 ft., fly 90 ft."
stats: [14, 22, 18, 12, 20, 14]
saves:
  - Dex: +11
  - Con: +9
  - Wis: +10
skillsaves:
  - Acrobatics: +16
  - Insight: +10
  - Perception: +10
  - Stealth: +11
senses: "passive Perception 20"
languages: "Auran, Common"
cr: 13
traits:
  - name: Evasion
    desc: "When Talon is subjected to an effect that allows him to make a Dexterity saving throw to take only half damage, he instead takes no damage on a successful save and half damage on a failed save. He can't use this trait while Incapacitated."
  - name: Legendary Resistance (3/Day)
    desc: "If Talon fails a saving throw, he can choose to succeed instead."
  - name: Skyhunter
    desc: "Opportunity Attacks against Talon have Disadvantage while he is flying."
  - name: Peregrine Dive
    desc: "If Talon flies at least 30 feet downward in a straight line immediately before hitting a creature with his Katana, the attack deals an extra 13 (3d8) Slashing damage, and the target must succeed on a DC 18 Strength saving throw or have the Prone condition. Talon can deal this extra damage only once per turn."
  - name: Stunning Strike (1/Turn)
    desc: "Immediately after Talon hits a creature with a melee attack during his turn, he can force it to make a DC 18 Constitution saving throw. On a failed save, the creature has the Stunned condition until the start of Talon's next turn. On a successful save, its Speed is halved until then, and the next attack roll made against it before then has Advantage."
actions:
  - name: Multiattack
    desc: "Talon makes three attacks, using Katana, Kusarigama, or Sai in any combination."
  - name: Katana
    desc: "Melee Attack Roll: +11, reach 5 ft., one target. Hit: 17 (2d10 + 6) Slashing damage."
  - name: Kusarigama
    desc: "Melee Attack Roll: +11, reach 20 ft., one target. Hit: 15 (2d8 + 6) Slashing damage. If the target is Large or smaller, Talon can pull it up to 10 feet toward himself."
  - name: Sai
    desc: "Melee Attack Roll: +11, reach 5 ft., one target. Hit: 13 (2d6 + 6) Piercing damage, and the target has Disadvantage on the next attack roll it makes before the start of Talon's next turn."
  - name: Kusarigama Tempest (Recharge 5-6)
    desc: "Talon whirls both chained sickles around himself. Each creature of his choice in a 20-foot Emanation must make a DC 19 Dexterity saving throw. Failure: 27 (6d8) Slashing damage, and Talon either pulls the creature up to 15 feet toward himself or gives it the Prone condition. Success: Half damage only."
bonus_actions:
  - name: Step of the Falcon
    desc: "Talon takes the Dash or Disengage action."
reactions:
  - name: Deflect Attack
    desc: "Trigger: Talon is hit by an attack roll. Response: Talon reduces the attack's damage to himself by 18 (2d10 + 7). If this reduces the damage to 0, Talon can immediately move up to 10 feet without provoking Opportunity Attacks."
legendary_actions:
  - name: ""
    desc: "Legendary Action Uses: 3. Immediately after another creature's turn, Talon can expend one use to take one of the following actions. He regains all expended uses at the start of his turn."
  - name: Chain Snap
    desc: "Talon makes one Kusarigama attack. He can't use Chain Snap again until the start of his next turn."
  - name: Crossing Sai
    desc: "Talon makes one Sai attack. He can't use Crossing Sai again until the start of his next turn."
  - name: Wingbeat Step
    desc: "Talon moves up to half his Speed without provoking Opportunity Attacks. He can't use Wingbeat Step again until the start of his next turn."
```

## Running Talon Skarn

- **Opening tell.** Wings lift, chains click, and he either stoops from open air or flicks a kusarigama line at the prize-carrier.
- **Default choice.** Isolate the prize. **Stunning Strike** once on his turn, then **Kusarigama** or **Chain Snap** to pull that body off its partner. Mix in **Sai** on the watch partner so their next swing is worse.
- **Stoop.** **Peregrine Dive** needs 30 feet straight down. Use it from a roof-break, terrace, or open sky. A tight aisle under leaves is chain work, not a stoop.
- **If pressured.** **Step of the Falcon** to Disengage, **Wingbeat Step** to change the lane, **Deflect Attack** on the first solid hit. At 97 hit points or fewer he still plays the current job, then leaves.
- **Target priority.** The object, then the carrier, then anyone between him and the carrier. He cuts gear before throats.
- **Counterplay.** Ground him (Grapple, Restrain, or deny 30 feet of air). Beat the **Constitution save — `DC 18`** on the stun. Spread out against **Kusarigama Tempest**. Pass the object. Ready the grab. His AC is 19 and he has no damage resistances.
- **Easy.** Remove Legendary Resistance and start **Kusarigama Tempest** uncharged.
- **Hard.** Start him in the air with a stoop lane, without raising AC.
