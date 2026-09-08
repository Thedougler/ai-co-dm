# Setting the DC

## Typical ability-check bands (SRD 5.2)

| Task difficulty | DC |
|---|---:|
| Very easy | 5 |
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |

Use these rungs. Default ordinary adventuring task is **15**. Write `DC 15`,
not 12, 13, 17, 18, or 19, unless a specific procedure or a creature's
`8 + PB + mod` *save* produces that number.

The GM sets *check* DCs. The effect that causes a *save* sets that *DC*
(spellcasting formula, monster stat block, or a named procedure below).

## Named 2024 procedures (use these before the band)

| Situation | Test | DC |
|---|---|---|
| Hide | Dexterity (Stealth) *check* | **15**; record the total as the find-*DC* |
| Influence (hesitant creature) | see `checks.md` | **15 or the monster's Intelligence, whichever is higher** |
| Stabilize / first aid at 0 HP | Help + Wisdom (Medicine) *check* | **10** |
| Knock out recovery first aid | action, Wisdom (Medicine) *check* | **10** |
| Long Jump, low obstacle | Strength (Athletics) *check* | **10** |
| Long Jump, land in Difficult Terrain | Dexterity (Acrobatics) *check* | **10** |
| Concentration, took damage | Constitution *save* | **10 or half damage**, max 30 |
| Death *save* | no ability | **10** to succeed |
| Grapple or Shove (Unarmed Strike) | Strength or Dexterity *save* (target's choice) | **`8 + Strength modifier + PB`** |
| Escape a grapple | Strength (Athletics) or Dexterity (Acrobatics) *check* | the grapple's *DC* |
| Spell or monster feature *save* | ability the effect names | **`8 + relevant ability modifier + PB`** |

## Save DC formula

`Spell save DC` / feature save *DC* = `8 + spellcasting (or relevant) ability modifier + Proficiency Bonus`.

Proficiency Bonus by character level or monster CR:

| Level or CR | PB |
|---|---:|
| 1–4 | +2 |
| 5–8 | +3 |
| 9–12 | +4 |
| 13–16 | +5 |
| 17–20 | +6 |
| 21–24 | +7 |
| 25–28 | +8 |
| 29–30 | +9 |

Example: a CR 5 monster with Strength 19 (+4) grapples at DC 15
(`8 + 4 + 3`). A 5th-level Cleric with Wisdom 16 (+3) has spell save DC 14
(`8 + 3 + 3`).

Use this formula for **imposed *saves***. Do not use it to invent a climb,
lock, recall, or persuasion *DC*. Those use the typical band or a named
procedure.

Monster save *numbers* on a new stat block: choose the *save* type here, then
take the number from `homebrew-monsters-5e` chassis (peer or
`8 + PB + modifier`). Do not stack both.

## Calibration while writing content

- Match the fiction: a rusty padlock is Easy (10); a vault lock is Hard (20).
- Match who is rolling: a task every trained adventurer should often make is
  10–15; a specialist showcase is 20; 25–30 is legendary.
- Detection and disable can differ. Noticing a tripwire (Search / Perception)
  is often easier than understanding the glyph (Study / Arcana).
- Do not raise the *DC* because the party failed. Change the situation
  (`traps-trials`).
- Do not gate a whole scene on one *check*. Give at least two approaches.
- Passive Perception vs Hide: compare Passive Perception to the hider's
  recorded Stealth total when nobody is Searching.

## Advantage and other modifiers

Advantage / Disadvantage: roll two d20s, use the higher or lower. Multiple
sources do not stack. Advantage and Disadvantage on the same roll cancel,
even if the counts are unequal.

Circumstances the GM grants (footing, light, time, tools, cover) should be
Advantage, Disadvantage, or a listed bonus — not a homemade +3 *DC*.

Heroic Inspiration (SRD): expend to reroll any one die just rolled. Not a
reason to skip setting a fair *DC*.
