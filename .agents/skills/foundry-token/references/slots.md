# Slots

## SIZE

| Slot | Grid | RAW pixels | RING pixels |
|---|---|---|---|
| Tiny | 0.5 | 200 | 256 |
| Small | 1 | 400 | 512 |
| Medium | 1 | 400 | 512 |
| Large | 2 | 800 | 1024 |
| Huge | 3 | 1200 | 1024 |
| Gargantuan | 4+ | 1600 | 2048 |

Use RING pixels when `FRAMING` is `RING_SAFE`.

## CREATURE

Name body plan first, type second.

- `Medium humanoid`
- `Large quadruped beast`
- `Huge winged dragon`
- `Large serpentine monstrosity`
- `Small blob ooze`

## IDENTITY

Colors, sex if it changes silhouette, hair or crest from above, marks that survive a 100 px shrink. Skip eye color and expression.

## GEAR

Long weapons on the north-south axis, point toward six o'clock. Shield on their left arm. Bow across the body east-west so the curve reads from above.

`none` is valid for beasts.

## POSE

Default:

`neutral combat-ready stance, feet planted shoulder-width, knees slightly bent, arms clear of the torso`

Presets:

- caster — `staff planted toward the bottom edge, free hand out, feet planted`
- rogue — `low crouch, blades close to the hips, arms clear of the torso`
- archer — `bow held east-west across the body, feet planted`
- quadruped — `standing four-square, head toward the bottom edge, tail toward the top edge, legs apart so each paw reads`
- flyer — `wings spread east-west, body on the north-south line, head toward the bottom edge`
- huge — `sprawl or coil filling the inner two-thirds, head toward the bottom edge`
- fallen — `prone on the square, head toward the bottom edge, limbs inside the frame`

## STYLE

Default:

`hand-painted fantasy VTT token, Forgotten Adventures style, semi-realistic digital painting, readable at thumbnail size, strong graphic silhouette, muted battlefield colors`

Presets:

- grim — `gritty oil-painted dark fantasy, limited palette, dirty metal`
- graphic — `clean graphic ink and flat color, high contrast silhouette`
- archer — `Archer TV animation style, thick graphic lines, flat cel color, uncanny`
- mini — `photoreal painted 28mm tabletop miniature, copy-stand overhead photo`

## FRAMING

- `RAW_CUTOUT` — `Subject fills about 85% of the canvas.` Use when the PNG drops on the map with no ring.
- `RING_SAFE` — `Subject fills about 65% of the canvas, centered in the inner two-thirds.` Use when Foundry dynamic rings or Tokenizer will add a ring.

Default `RAW_CUTOUT`.
