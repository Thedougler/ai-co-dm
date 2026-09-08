# Foundry import

The file is raw scene art. Foundry draws the grid, walls, lights, and tokens.

## Grid

Do not bake squares. Suggest a grid that fits the 9:16 frame.

Foundry default is 100 px per square. Czepeku ships 140 px per square. The user upscales after if they want Czepeku-class sharpness. This skill does not upscale.

| Suggested squares (W x H) | At 100 px | At 140 px |
|---|---|---|
| 18x32 | 1800 x 3200 | 2520 x 4480 |
| 25x45 | 2500 x 4500 | 3500 x 6300 |
| 30x54 | 3000 x 5400 | 4200 x 7560 |

If Imagine's file is smaller than the 100 px target, say so on the import line. Upscale is their job.

## Empty board

Leave tokens, walls, doors, and lights off the image. Those are Foundry layers.

## Chat

Show the saved PNG in the reply before the import line. Path-only delivery is a miss.

## Import line

One line, this shape:

`artifacts/battlemaps/tavern-common-day.png — suggested 25x45 — Foundry grid 100 px/sq (Czepeku-class 140) — no baked grid — upscale after if needed`

Swap the slug, grid, and path for the run.
