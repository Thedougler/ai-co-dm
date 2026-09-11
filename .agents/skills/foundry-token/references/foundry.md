# Foundry import

## Finalizer

The repository finalizer makes the import PNG:

\`\`\`bash
./scripts/foundry-token accepted-source.webp artifacts/tokens/owner-token.png --size 512
\`\`\`

The command center-crops to a square, resizes, preserves the accepted RGB art
and existing alpha, then applies a centered circular alpha mask. It never
overwrites the source.

## Sizes

Use the size that matches the intended import footprint and the detail the art
needs:

| Intended footprint | Default final PNG |
|---|---:|
| Tiny or Small | \`256x256\` |
| Medium or one-square token | \`512x512\` |
| Large or detailed scene token | \`1024x1024\` |

Foundry can scale a PNG on import. The finalizer's \`--size\` is the pixel size of
the file, not the grid footprint.

## Framing

The output has transparent pixels outside the circle. A painted ring is part of
the generated source art and is preserved when present; the finalizer does not
invent one. Use \`--margin 0.03\` when the accepted art needs a small transparent
breathing space between the frame and the canvas edge.

## Facing

The finalizer does not rotate or reinterpret the art. Report the intended
facing only when the source composition makes facing relevant. Overhead art may
use Foundry rotation \`0\` for south; a portrait or medallion token has no
automatic facing rule.

## Import line

Use one concise line:

\`artifacts/tokens/owner-token.png — Medium 1x1 — 512 px — circular transparent alpha — facing from source art\`
