---
name: foundry-token
description: >-
  Circular Foundry VTT token art — generate a stand and iterate until
  crop-safe, or finalize an existing image into a circular transparent
  token PNG. Use on any request for a token, token art, token PNG, or
  converting a creature or NPC image to a Foundry token.
metadata:
  type: workflow
  version: "3.0"
---

# Foundry token

Two phases. **Art** produces an accepted **stand** — a finished source image
with stable identity, **crop-safe** composition (subject and details survive a
centered circular crop), and a **thumbnail-readable** silhouette. **Finalization**
runs `./scripts/foundry-token` once; the script is the single source of truth
for pixel operations (centered square cover-crop, resize, anti-aliased circular
alpha mask). The accepted stand remains unchanged. The final asset is a PNG with
RGBA alpha, a square canvas, and transparent area outside a centered circle.

## Process

### 1. Classify

Decide whether the request needs new art or finalization of an existing image.
For an existing local image, use its exact path. Identify the owner, source
image (or the need to generate one), intended output path, and target size (see
[references/foundry.md](references/foundry.md) for sizing).

**Done when** owner, source, output path, and size are known.

### 2. Generate and iterate

When no accepted stand exists, generate the source image with the image tool.
Use [references/prompt.md](references/prompt.md) for the prompt template and
[references/slots.md](references/slots.md) for slot guidance. Generate a square
source whenever possible.

Keep the subject centered inside the inner 90% of the frame — **crop-safe**.
Render finished painted art with a background or painted frame; the finalizer
creates alpha.

Choose the camera from the request: a readable portrait or action composition
for stand tokens, overhead only when the user asks for top-down art.

Iterate until the stand is accepted: identity stable, composition **crop-safe**,
silhouette **thumbnail-readable**, anatomy and gear clean. Repair with
[references/repair.md](references/repair.md) before finalizing.

**Done when** the stand is crop-safe, thumbnail-readable, and identity-stable.

### 3. Finalize

Run from the vault root:

```bash
./scripts/foundry-token \
  "/path/to/accepted-stand.webp" \
  "artifacts/tokens/owner-token.png" \
  --size 512
```

The output argument is optional; without it the command writes beside the source
as `SOURCE-stem-token.png`. Add `--margin 0.03` when the stand needs transparent
breathing space around the circle. Add `--force` when intentionally replacing an
existing final PNG.

If the center crop loses a meaningful feature, fix the source composition and
run the command again.

**Done when** the command reports `created`, the output exists, and the source
file is unchanged.

### 4. Verify

Open the final PNG and check:

- Four corners show transparency (the script validates PNG format, RGBA mode,
  dimensions, and circular alpha).
- Subject, frame, and identifying features stay inside the circle edge.
- The art is **thumbnail-readable** at token size.

**Done when** machine checks pass and the subject reads at thumbnail size inside
the circle.

### 5. Deliver

Report the final PNG path and one concise import line: file path, grid
footprint, pixel size, circular-transparent framing, and facing when relevant.
Keep the accepted stand path for future iterations.

**Done when** the user has the file and can identify its import size and framing.

## Reference

- [references/foundry.md](references/foundry.md) — import sizes, framing, and
  the import-line format.
- [references/prompt.md](references/prompt.md) — stand prompt template.
- [references/slots.md](references/slots.md) — prompt slot guidance and presets.
- [references/repair.md](references/repair.md) — repair lines for stand defects.
- `./scripts/foundry-token --help` — live command options; the CLI is the source
  of truth for invocation syntax.
