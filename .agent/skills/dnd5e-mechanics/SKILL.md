---
name: dnd5e-mechanics
description: >-
  Choose and set D&D 5.5e (2024 / SRD 5.2.1) ability checks, saving throws, and
  DCs when writing or auditing wiki content. Use whenever a note needs a skill
  check, save, DC, Hide/Search/Study/Influence/Utilize resolution, grapple or
  shove DC, or a player action mapped to a roll. Do not use for monster CR
  chassis, trap telegraphing, or TotM prose.
---

# D&D 5.5e checks and saves

Adjudicate *d20 tests* as **5.5e RAW** (public SRD 5.2.1). Pick the correct
*check* or *save*, name the ability and skill or tool, and set the *DC* from a
published procedure or the typical band.

This work includes material from the System Reference Document 5.2 (“SRD 5.2”)
by Wizards of the Coast LLC, available at https://www.dndbeyond.com/srd. The
SRD 5.2 is licensed under the Creative Commons Attribution 4.0 International
License, available at https://creativecommons.org/licenses/by/4.0/legalcode.

## Success criteria

- Every written test is *uncertain*: it can fail, and failure changes play.
- Every written test is one *d20 test* (*check*, *save*, or attack) with a *DC*
  (or AC). Mark it **Wisdom (Survival) — `DC 15`** (at-table grammar in
  `obsidian-markdown`).
- The *DC* is a typical-band rung, a named 2024 procedure, or `8 + PB + ability modifier` for an imposed *save*.
- Certain outcomes stay fiction: drink the lake, start otter play, a macaw's
  Surface Echo. Those lines have no parenthetical about rolling.
- Player-facing `[!narration]` has no *DC*, save type, or unearned name.

## Workflow

### 1. Decide whether to roll

A *d20 test* is for an *uncertain* attempt: it is possible, it can fail, and
failure changes play. Write that test. Certain outcomes (willing Influence,
obvious shallows, drinking free-flowing water) stay ordinary fiction.

**Complete when:** every new parenthetical or listed test has a *DC* and a
failure that changes play. Delete `(no check…)`, `(no roll)`, `(no save)`,
and `automatic success` annotations; they are unfinished output.

### 2. Classify the *d20 test*

- The creature is trying to accomplish something → **ability *check*** (skill
  or tool if relevant).
- An effect is being imposed; the creature resists or evades → ***save***.
- A strike against Armor Class → **attack roll**. Stop. Do not turn it into
  Athletics. Combat math lives in `homebrew-monsters-5e`.

A *check* is something the creature **does**. A *save* is something that
**happens to** the creature.

**Complete when:** the note names exactly one of *check* / *save* / attack
plus the ability, and does not also ask for the other two for the same attempt.

### 3. Name skill, tool, and 2024 action (*checks* only)

Load `references/checks.md`. Prefer the action the rules already name:

| Intent | Action | Typical *check* |
|---|---|---|
| Notice, read a person, diagnose, track | Search | Wisdom (Insight, Medicine, Perception, or Survival) |
| Recall or deduce from knowledge or clues | Study | Intelligence (Arcana, History, Investigation, Nature, or Religion) |
| Alter a hesitant creature's behavior | Influence | Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) |
| Escape notice | Hide | Dexterity (Stealth) |
| Operate a nonmagical object or tool | Utilize | Ability + tool (and skill if both apply) |
| Grant Advantage, or stabilize at 0 HP | Help | Next *check* or attack; stabilize is DC 10 Wisdom (Medicine) |

Write the test as `Ability (Skill)` or `Ability (Tool)`. An unusual pairing
is `Strength (Intimidation)`, not a new skill. Load `references/leftovers.md`
when the draft still uses a 2014 contest, Investigation-to-notice, or a
Constitution *check* against poison.

**Complete when:** the *check* is written `Ability (Skill)` or `Ability (Tool)`
and names the 2024 action when one applies.

### 4. Set the *DC*

Load `references/difficulty.md`. Use this order:

1. A specific 2024 procedure for this action (Hide 15, Influence 15 or Int,
   concentration, grapple/shove, stabilize 10).
2. The typical band: 5 / 10 / 15 / 20 / 25 / 30. Default ordinary task is **15**.
3. For a creature- or spell-imposed ***save***, `8 + PB + relevant ability modifier`.
   Load `references/saves.md` for which ability. Do not use this formula to
   mint a lock, climb, or recall *DC*.

Monster save *numbers* still come from `homebrew-monsters-5e` chassis after
the save *type* is chosen here.

**Complete when:** the *DC* is a listed rung or a named formula.

### 5. Write the ruling

One attempt, one *d20 test*, unless a rule repeats the *save* (end of turn,
concentration per hit). Success, fail, and Partial (house: miss by 1–4, per
`run-guide`) are world changes, not “roll again at a higher *DC*.”

**Complete when:** each listed outcome changes position, information, time,
or cost.

### 6. Place the number

Write the test with the **at-table check grammar** in `obsidian-markdown`:

**Wisdom (Perception) — `DC 14`**
- Success → Notices claw marks beneath the window.
- Failure → Nothing appears disturbed.

Compress when the consequence is obvious: **Strength (Athletics) — `DC 13`** → Climb the wet wall. Saves: **Dexterity save — `DC 15`**. `DC n` and dice are inline code. Ability and skill are bold.

**Home:** player activities — on a location, **If the party**. Hang the mark on
the attempt they take.

**Elsewhere:** an optional, secret, or non-obvious test may sit on the section
it belongs to (a creature-imposed *save* on What, a hidden listen in
`[!secret]`). Obvious roster and fiction stay unmarked.

A *Be ready for* table is for `run-guide` only; cells still use the same
treatments (approach **Ability (Skill)**; DC column `` `DC 14` ``).
`[!narration]` stays player-safe.

**Complete when:** every written test matches that grammar; player-activity
tests live under **If the party**; only optional/secret/non-obvious tests sit
elsewhere; player prose has no *DC*, save type, or unearned name; no line
exists only to say a roll is absent.

## Handoffs

- Challenge telegraph, fail-forward, escalation of the *situation* → `traps-trials`.
- Monster attack bonus, HP, and save *number* → `homebrew-monsters-5e`.
- Encounter / cockpit structure → `encounter-prep` then `run-guide`.
- Spoken prose → `theatre-of-the-mind` after the mechanical pass.

## References

| File | Load when |
|---|---|
| `references/checks.md` | Skill, tool, 2024 action, player intent |
| `references/saves.md` | Which *save*; concentration, death, cover, grapple/shove |
| `references/difficulty.md` | Typical band, fixed procedures, `8 + PB + mod` |
| `references/leftovers.md` | Draft still reads as 2014 |
