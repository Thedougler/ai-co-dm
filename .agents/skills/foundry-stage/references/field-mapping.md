# Statblock → Foundry field mapping

Vault statblocks use the Obsidian Fantasy Statblocks YAML format inside
` ```statblock ` fences. This reference maps each field to the
corresponding `dnd5e-create-npc` parameter or `dnd5e-add-feature` call.

## Identity fields → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter | Notes |
|---|---|---|
| `name` | `name` | |
| `size` | `size` | Lowercase: tiny, small, medium, large, huge, gargantuan |
| `type` | `creatureType` | Map to enum: humanoid, beast, monstrosity, etc. |
| `alignment` | `alignment` | Pass through |
| `cr` | `cr` | Accepts "1/4", "1/2", 0.25, 5, etc. |
| `source` | `sourceBook` | |

## Defenses → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter | Notes |
|---|---|---|
| `ac` | `acMode: "flat"`, `acValue: <number>` | Parse the number from "15 (natural armor)" |
| `hp` | `hpAverage` | Parse the number before parentheses |
| `hit_dice` | `hpFormula` | The parenthesized part, e.g. "3d8+6" |

## Ability scores → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter |
|---|---|
| `stats: [STR, DEX, CON, INT, WIS, CHA]` | `abilities: {str, dex, con, int, wis, cha}` |

The statblock array is positional: index 0=STR, 1=DEX, 2=CON, 3=INT,
4=WIS, 5=CHA.

## Movement → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter |
|---|---|
| `speed` | Parse into `walkSpeed`, `flySpeed`, `swimSpeed`, `burrowSpeed`, `climbSpeed` |

Format is usually `"30 ft., fly 60 ft., swim 30 ft."` — split on comma,
parse each segment.

## Senses → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter |
|---|---|
| `senses` | Parse into `darkvision`, `blindsight`, `tremorsense`, `truesight` (feet) |

Format: `"darkvision 60 ft., passive Perception 14"` — passive
Perception is not a sense parameter (it's derived from skills).

## Saves and skills → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter | Notes |
|---|---|---|
| `saves` | `savingThrows` | Array of `{key, mod}` → extract just the ability keys |
| `skillsaves` | `skills` | Array of `{key, mod}` → map to `{skill, proficiency}` |

For skills, the statblock uses short keys like `perception`, `stealth`.
Map to title case for Foundry: "Perception", "Stealth". Determine
proficiency vs expertise by comparing the modifier to the expected
proficiency bonus for the CR.

## Languages → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter |
|---|---|
| `languages` | `languages` (array) + `languagesCustom` (telepathy etc.) |

## Immunities and resistances → `dnd5e-create-npc`

| Statblock YAML | Foundry parameter |
|---|---|
| `damage_immunities` | `damageImmunities` |
| `damage_resistances` | `damageResistances` |
| `damage_vulnerabilities` | `damageVulnerabilities` |
| `condition_immunities` | `conditionImmunities` |

## Traits → `dnd5e-add-feature`

Each entry in `traits:` is `{name, desc}`.

**Standard SRD traits** (Pack Tactics, Magic Resistance, Spider Climb,
Keen Senses, etc.) — use `dnd5e-add-features-from-compendium` first. If
not found, fall back to manual `dnd5e-add-feature` with
`featureType: "passive"`.

## Actions → `dnd5e-add-feature`

Each entry in `actions:` is `{name, desc}`. Parse the description to
choose `featureType`:

### Attack actions

Look for: *Melee Weapon Attack:* or *Ranged Weapon Attack:*

Extract:
- `attackType`: "melee" or "ranged"
- Hit bonus → derive `abilityModifier` (compare to ability mods + PB)
- Reach/range → `reachFt` or `rangeFt`/`longRangeFt`
- Damage → `damageParts`: `{number, denomination, type}`

If the description also contains a saving throw after the hit (e.g.
"the target must succeed on a DC 13 Constitution saving throw or take
2d6 poison damage"):
- Use `featureType: "attack-with-save"`
- `saveAbility`, `saveDC`, `saveDamageParts`

### Save actions

Look for: "DC \d+ (Strength|Dexterity|...) saving throw"
No attack roll present.

Extract:
- `saveAbility`, `saveDC`
- `damageParts` from the damage on failure
- `halfOnSave` if "half as much" appears
- `areaType`/`areaSize` if area described (cone, line, etc.)
- `activationType` from action economy cues

### Passive actions

No attack roll, no saving throw. Use `featureType: "passive"` with
appropriate `activationType` (action, bonus, reaction, legendary, lair).

## Bonus actions → `dnd5e-add-feature`

Same parsing as actions, but set `activationType: "bonus"` unless the
description overrides it.

## Multiattack

Multiattack is always `featureType: "passive"` — it describes the
attack routine in its description. The actual attacks are separate
features.

## Spellcasting

If a trait named "Spellcasting" or "Innate Spellcasting" exists:

1. Call `dnd5e-add-feature` with `featureType: "spellcasting"` —
   `spellcastingClass`, `spellcastingLevel`, `spellcastingAbility`
2. Call `dnd5e-add-feature` with `featureType: "spells"` —
   `spellNames` array of all listed spells
