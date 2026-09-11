---
name: foundry-stage
description: >-
  Stage wiki entities into a running FoundryVTT world as playable actors,
  items, journals, and scenes. Use when the user says "push to Foundry",
  "stage this encounter", "create the NPC in Foundry", "set up tonight's
  session in Foundry", or wants any vault note converted into a live
  Foundry entity. Covers creatures (statblock → actor), items
  (magic-item → world item), journals (narrative notes → journal entries),
  quests, encounters (roster + notes → actors + journal), and session
  staging (batch all entities for a session). Not for generating images —
  hand off token art to **foundry-token** and battlemap art to
  **foundry-battlemap**. Not for in-session token movement, combat
  tracking, or player-facing chat.
---

# Foundry Stage

Push vault content into FoundryVTT so the table can play it.

Wiki is the source of truth. Foundry is the runtime. This skill reads
vault notes, translates structured data into Foundry MCP calls, and
places asset files through the symlink. Everything staged traces to a
vault note.

Image generation → **foundry-token** (stamps) and **foundry-battlemap**
(maps). This skill places existing images into Foundry.

## Two paths to Foundry

**MCP tools** — primary for entity CRUD (actors, items, journals). The
world data is LevelDB; direct file edits would corrupt it.

**Symlink** (`foundry-data/` → Foundry's Data directory) — primary for
asset placement. Copy vault images from `attachments/` into
`foundry-data/assets/` so Foundry can reference them by path. Faster
than any upload API and the files persist across restarts.

Asset paths in Foundry reference from the Data root, so a file at
`foundry-data/assets/my-map.png` is referenced as `assets/my-map.png`
in Foundry fields (biography img, scene background, token image).

## Branches

### 1. Creature (monster or NPC with statblock)

Source: vault note with ` ```statblock ` block.

Read the statblock YAML. Map fields per
[references/field-mapping.md](references/field-mapping.md). Then:

1. **Create the actor** — `dnd5e-create-npc` with identity, abilities,
   HP, AC, speeds, senses, saves, skills, immunities, languages, CR.
   Set `sourceRules: "2024"` (this campaign is 5.5e/2024).
   Set biography to the note's `[!narration]` block rendered as HTML.
2. **Add compendium features** — collect all trait and action names.
   Batch any that match SRD features (Pack Tactics, Magic Resistance,
   Multiattack, etc.) into one `dnd5e-add-features-from-compendium`
   call. Compendium versions carry correct Foundry automation.
3. **Add remaining traits** — `dnd5e-add-feature` with
   `featureType: "passive"` for each homebrew entry in `traits:` that
   the compendium did not cover.
4. **Add actions** — `dnd5e-add-feature` with appropriate `featureType`
   for each entry in `actions:` and `bonus_actions:`. Parse the
   description to determine type:
   - Attack roll present → `"attack"` or `"attack-with-save"`
   - Saving throw, no attack → `"save"`
   - No roll → `"passive"` with `activationType` set
5. **Token image** — if `attachments/` has a token image for this
   creature, copy it to `foundry-data/assets/tokens/` and note the
   path for the actor's token config.

**Done when** the actor exists in Foundry with correct HP, AC, abilities,
all traits and actions functional, and biography populated.

### 2. Item (magic item, gear, technique)

Source: vault note with `type: item` and frontmatter fields `kind`,
`rarity`, `attunement`.

1. **Create the item** — `manage-world-items` action `"create"` with:
   - `type`: map vault `kind` → Foundry item type (weapon, equipment,
     consumable, loot, tool)
   - `name`: from note title
   - `system`: rarity, attunement requirement, description as HTML
2. **Attach to actor** — if `owner` frontmatter names a creature or NPC
   already in Foundry, use `manage-world-items` action `"add-to-actor"`.

**Done when** the item exists in Foundry with correct rarity, attunement,
and description.

### 3. Journal (narrative NPC, location, faction, lore)

Source: vault note without a statblock, or any note the user wants as
reference material in Foundry.

1. **Build content** — extract the `[!narration]` block as player-visible
   HTML. DM notes (everything outside narration) become a separate GM
   page.
2. **Create journal** — `create-quest-journal` for quest-typed notes
   (it supports multi-page via `additionalPages`). For other types,
   use `create-quest-journal` with `folderName` matching the note type
   (Locations, NPCs, Factions, Lore).
3. **Link to actors** — if the journal is for a quest with a named NPC,
   use `link-quest-to-npc`.

**Done when** the journal exists with player-facing and DM-facing pages
separated.

### 4. Encounter (session beat → playable scene)

Source: session-prep or encounter note with Zones table, Roster, and
optionally a battlemap.

This is the compound branch — it stages multiple entities for one
tactical moment.

1. **Roster** — for each creature in the encounter's Roster section,
   run Branch 1 (creature) if not already in Foundry. Check first with
   `list-characters` or `search-compendium`.
2. **Journal** — create a DM encounter journal with:
   - "At a Glance" (stakes, goal, danger)
   - "Be Ready For" table (intent/approach/DC/outcomes)
   - "Threat Clock" (escalation beats)
   - "How the Scene Resolves" (branching outcomes)
3. **Battlemap** — if the note embeds a battlemap image, copy it from
   `attachments/` to `foundry-data/assets/` for scene background use.
   Report the asset path so the user can create or update a scene.
4. **Token placement** — report which actors need tokens on the scene
   and suggested positions from the Zones table. Actual placement waits
   for a live scene.

**Done when** all roster creatures exist as actors, the encounter journal
is created, and the battlemap asset is placed.

### 5. Session (batch staging)

Source: session-prep note or `hot.md` pointing to tonight's beats.

1. **Inventory** — read the session prep. List every entity needed:
   creatures, items, NPCs, locations.
2. **Diff** — check what already exists in Foundry (`list-characters`,
   `manage-world-items` action `"list"`). Stage only what's missing.
3. **Stage** — run the appropriate branch for each missing entity.
   Creatures first (other branches may reference them), then items,
   then journals, then encounters.
4. **Report** — list what was staged, what already existed, and what
   needs manual attention (missing statblocks, missing art).

**Done when** every entity referenced in the session prep exists in
Foundry, and a summary names any gaps.

## Wikilink conversion

Vault notes use `[[Target]]` wikilinks. When writing Foundry journal
HTML, convert these to `@UUID[JournalEntry.{id}]{Target}` when the
target journal exists in Foundry. When it does not exist, render as
plain bold text — a broken `@UUID` reference is worse than no link.

## Idempotency

Before creating any entity, check whether it already exists by name.
`dnd5e-create-npc` places actors in "Foundry MCP Creatures" folder —
search there first. Duplicate actors with slightly different stats
confuse the table. If an actor exists, report it and ask whether to
update or skip.

## Asset conventions

| Vault path | Foundry destination | Foundry reference path |
|---|---|---|
| `attachments/*-token.*` | `foundry-data/assets/tokens/` | `assets/tokens/{file}` |
| `attachments/*-battlemap.*` `attachments/*-foundry.*` | `foundry-data/assets/` | `assets/{file}` |
| `attachments/<campaign>/*` | `foundry-data/assets/<campaign>/` | `assets/<campaign>/{file}` |
