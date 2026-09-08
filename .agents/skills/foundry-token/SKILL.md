---
name: foundry-token
description: Generate and repair Foundry VTT overhead token images with Grok Imagine. Use when the user wants a Foundry token, top-down token, VTT token, battlemap token, token art, or token PNG. Covers humanoids, beasts, monsters, and props. Do not use for character-sheet portraits, pog face crops, battlemaps, or dungeon keys.
metadata:
  type: workflow
  version: "1.0"
---

# Foundry Token

Make one overhead Foundry token the table can drop on a grid.

Hand off sheet portraits and pog face-crops. Hand off battlemaps to **foundry-battlemap**. This skill is the token stamp, not the floor and not the actor portrait.

## Output

One Imagine image plus a short import line.

- Square 1:1 overhead stamp, south-facing
- Magenta `#FF00FF` field for key-out
- Import size named for the creature's grid footprint

Default destination `artifacts/tokens/`. Use the path the user named when they named one.

**Done when** the image is overhead and south-facing, extremities are inside the square, and the import line names file path plus target pixels.

## Process

### 1. Intake

Infer from the conversation. Ask only for slots that would force a guess.

Need:

- `SIZE` — Tiny, Small, Medium, Large, Huge, Gargantuan
- `CREATURE` — body plan plus type (biped humanoid, quadruped beast, winged, serpentine, blob)
- `IDENTITY` — colors and marks that read from above
- `GEAR` — weapons, shield, implement, pack
- `POSE` — default combat-ready if they did not name one
- `STYLE` — default painted VTT if they did not name one
- `FRAMING` — `RAW_CUTOUT` or `RING_SAFE`
- Reference image, if they have one, as identity lock only

Do not ask for face detail, backstory, or ring color.

**Done when** SIZE, CREATURE, and IDENTITY are filled.

### 2. Build

Copy the locked prompt in [references/prompt.md](references/prompt.md). Fill slots. Do not soften camera language.

Slot tables and style/pose presets live in [references/slots.md](references/slots.md).

If a portrait is attached, add this line after IDENTITY:

`Keep this identity. Same colors, armor, hair, and silhouette. Change only the camera to overhead token view.`

**Done when** every slot in the prompt is a concrete phrase, not a placeholder.

### 3. Generate

Send the filled prompt to Imagine.

- Prefer 1:1. If the tool only offers portrait or landscape, generate portrait and center-crop to 1:1 after.
- One image per token unless they asked for variants.
- Save under `artifacts/tokens/` with a slug name (`medium-human-fighter.png`).

**Done when** an image file exists.

### 4. Judge

Pass only if all of these are true:

- Camera is overhead or steep high-angle. Crown of head is visible.
- Body faces south. Chest, toes, and weapon point toward the bottom edge.
- Full body is inside the square. No cropped feet, horns, tails, wings, or weapons.
- Field is flat magenta. No floor, scenery, token ring, or UI.
- Silhouette reads at thumbnail size.

Reject a standing portrait, a 3/4 hero shot, or a face looking at the camera.

**Done when** the image is marked pass or reject, with the failing check named.

### 5. Repair

On reject, do not rewrite the prompt. Send one repair line from [references/repair.md](references/repair.md). Generate again. Cap at two repairs, then show the best frame and name what still fails.

**Done when** the image passes, or two repairs are spent.

### 6. Deliver

Give the user:

1. The image
2. One import line — path, grid size, target pixels, framing mode
3. Next cut — key `#FF00FF`, center-crop to 1:1 if needed, scale to the pixel size below

Pixel targets are in [references/foundry.md](references/foundry.md).

Do not write a tutorial. Do not add a token ring in Imagine.

**Done when** the import line is present and the file is in `artifacts/tokens/` or the path they named.
