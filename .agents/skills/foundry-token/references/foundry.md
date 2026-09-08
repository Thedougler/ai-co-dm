# Foundry import

## Facing

Foundry treats rotation 0 as south. The token file must already face south. Chest, toes, and the business end of weapons point to the bottom of the image. Rotate the file before import if Imagine missed.

Sheet portrait can stay a face. Prototype Token > Appearance gets this overhead file.

## Format

PNG or WebP with alpha. WebP is smaller. PNG is safer with old modules. Imagine will not emit alpha. Key `#FF00FF` after generation.

## Sizes

Foundry default grid is 100 px per square. Community Medium export is 400 px (4x oversample). Dynamic-ring subject art prefers power-of-two 512 / 1024 / 2048.

| Size | Grid | RAW px | RING subject px |
|---|---|---|---|
| Tiny | 0.5 | 200 | 256 |
| Small / Medium | 1 | 400 | 512 |
| Large | 2 | 800 | 1024 |
| Huge | 3 | 1200 | 1024 |
| Gargantuan | 4+ | 1600 | 2048 |

## Dynamic rings

The ring starts two-thirds out from the center. The outer third is padding. Gear that enters the padding pops over the ring. Use `RING_SAFE` framing so the body stays in the inner two-thirds.

Do not paint a ring in Imagine. Let Foundry or Tokenizer draw it.

## Import line

One line, this shape:

`artifacts/tokens/medium-human-fighter.png — Medium 1x1 — scale to 400 px — RAW_CUTOUT — key #FF00FF — rotation 0 faces south`
