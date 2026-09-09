---
name: foundry-battlemap
description: Generate Foundry VTT top-down TTRPG battlemap images in Czepeku painted style. Use when the user wants a battlemap, encounter map, VTT map, top-down scene, Czepeku-style map, czpeku map, or a 9:16 portrait map for Foundry. One clean 9:16 image per run, shown in chat. No grid, tokens, UI, or labels baked in. Do not use for overhead tokens, character portraits, dungeon room keys, or first-person establishing shots.
metadata:
  type: workflow
  version: "1.0"
---

# Foundry Battlemap

Make one Czepeku-grade overhead battlemap the table can drop into Foundry.

Hand off creature stamps to **foundry-token**. Hand off room keys and site spines to **dungeon-architect**. This skill is the floor, not the actors and not the key.

Each new place or tactical moment needs its own map. Existing battlemaps may
guide vibe, layout density, palette, or terrain language, but a map of a
different site is not a deliverable for this site. Reusing it makes locations
feel interchangeable and confuses players. A variant is allowed only for the
same site and same layout with a changed time, weather, damage state, or other
explicitly requested state change.

## Output

One Imagine image on disk, the same image shown in chat, plus a short import line.

- Portrait 9:16 rectangle
- Orthographic top-down, Czepeku painted style
- Clean art only — terrain, architecture, and environmental props
- No grid, no tokens, no UI, no labels, no watermark, no fog, no light overlays

Default destination `artifacts/battlemaps/`. Use the path the user named when they named one.

Never deliver a path with no picture. The user must see the map in the reply.

**Done when** the image is overhead and 9:16, the board is empty of creatures and chrome, the image is visible in chat, and the import line names file path plus a suggested Foundry grid.

## Process

### 1. Intake

Infer from the conversation. Ask only for slots that would force a guess.

Need:

- `PLACE` — what this rectangle is (tavern floor, ruined nave, creek ford, ship deck)
- `BIOME` — climate and dominant materials
- `TIME` — default daylight
- `WEATHER` — default clear
- `TACTICS` — one sentence of how a fight moves (choke, loops, elevation, cover, hide)
- `SCALE` — suggested squares on the 9:16 frame. Default `25x45` (wide x tall, 5 ft squares)
- `STYLE` — default Czepeku painted if they did not name one

Do not ask for grid color, DPI, wall-layer JSON, or token placement.

A variant of an earlier map is a new run for the same site. Reuse PLACE,
TACTICS, and SCALE only when the prior map depicts that exact site and layout.
Change only TIME, WEATHER, or damage state.

**Done when** PLACE and BIOME are filled.

### 2. Build

Copy the locked prompt in [references/prompt.md](references/prompt.md). Fill slots. Do not soften camera language.

Slot tables, style lock, and composition recipes live in [references/slots.md](references/slots.md).

If a reference map or sketch is attached, add this line after PLACE:

`Keep this layout. Same walls, paths, and major props. Change only paint, light, and weather as specified.`

**Done when** every slot in the prompt is a concrete phrase, not a placeholder.

### 3. Generate

Send the filled prompt to Imagine.

- Orientation `portrait`. One image. Do not tile. Do not stitch.
- Do not bake a grid. Do not ask Imagine for DPI.
- Save under `artifacts/battlemaps/` with a slug name (`tavern-common-day.png`).

**Done when** an image file exists.

### 4. Judge

Pass only if all of these are true. Checks live in [references/judge.md](references/judge.md).

- Camera is orthographic overhead. Roofs and tabletops read as tops.
- Frame is a tall 9:16 play-space, edge to edge, no letterbox.
- No grid, tokens, people-as-combatants, UI, text, or watermark.
- Walkable floor vs blocking terrain reads at thumbnail size.
- Style is painted hand-drawn Czepeku, not satellite photo, not isometric 30-degree city.

Reject a first-person scene, a hero illustration, an isometric diorama, or a map with a grid burned in.

**Done when** the image is marked pass or reject, with the failing check named.

### 5. Repair

On reject, do not rewrite the prompt. Send one repair line from [references/repair.md](references/repair.md). Generate again. Cap at two repairs, then show the best frame and name what still fails.

**Done when** the image passes, or two repairs are spent.

### 6. Deliver

Give the user, in this order:

1. The map image in the chat reply — preview the saved file so they see the art, not just a path
2. One import line — path, suggested grid, Foundry px/square note, upscale-after note
3. Next cut — they upscale if they want sharper squares; they draw walls and lights in Foundry

Import shape is in [references/foundry.md](references/foundry.md).

Do not write a Foundry tutorial. Do not generate a second variant unless they asked for another run.

**Done when** the image is visible in chat, the import line is present, and the file is in `artifacts/battlemaps/` or the path they named.
