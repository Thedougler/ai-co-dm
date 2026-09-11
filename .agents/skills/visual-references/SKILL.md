---
name: visual-references
description: >-
  Gather canonical visual anchors before any image generation, edit, art prompt, or art commission
  that depicts a vault PC, NPC, monster, location, vehicle, item, or named session moment. Use this
  before native image-generation models and the generate_image tool, especially when reference images
  can be attached as inputs. Not for placing finished art on pages; use visual-aids for that.
---

# Visual References

Generated art should preserve the vault's established look. Treat each depicted owner as having **visual anchors**: attached reference images, image embeds, and short appearance prose from the owner page. Native image-generation models can use those anchors directly, so prefer feeding the image files over re-describing them from memory.

## Workflow

1. **Resolve every depicted owner.** Use `qmd-retrieval` or a known path to find each PC, NPC, monster, location, vehicle, item, or named session moment that appears in the image. Completion: every named subject in the requested composition has an owner page, or the missing owner is explicitly named as missing.

2. **Collect visual anchors.** Read the owner page sections that carry appearance: `## Visual reference`, `## Art`, the identity image near the title, the first `[!narration]` portrait when it is player-safe, and frontmatter `summary` only as a fallback. Resolve each `![[...]]` embed to its actual file under `attachments/`. Completion: each owner has a list of source lines plus resolved local image paths when images exist.

3. **Look at the pixels.** If a reference image exists, inspect the actual image or pass it as a native generation input. Do not rely on filename, alt text, or stale prose when the pixels are available. Completion: each used reference image has a stated role such as `Image 1: Crissdalynn identity portrait` or `Image 2: Aruhe spoke-ring overview`.

4. **Choose the smallest useful reference set.** Prefer high-signal anchors:
   - **Reference/design sheets** for identity, outfit, equipment, palette, and repeated features.
   - **Portraits** for face, expression, posture, and upper-body identity.
   - **Scene or place art** for layout, material, light, and environmental silhouette.
   - **Tokens** only when no better identity image exists; they are low-detail anchors.

   If a backend limits inputs, keep the strongest identity reference for each central subject before adding vibe or layout references. Completion: no decorative or wrong-entity image is attached just because it is nearby.

5. **Compose a native-generation brief.** State the image task in ordinary fields: subject, action, scene, composition, lighting, style, and aspect ratio. Include only visible, player-safe appearance facts. Then map references by role:
   - For OMP `generate_image`, put the files in the `input` array and name them in `subject` or `changes` as `Image 1`, `Image 2`, etc.
   - For a model with native image generation in chat, attach the local files as image inputs and tell the model which entity each image anchors.
   - For an edit request, say exactly what should change and what must remain consistent: identity, silhouette, palette, gear, or location layout.
   - If the selected generation route cannot accept image inputs for a canon owner that has reference images, switch to an input-capable route or ask the user before proceeding.

   Completion: the generation request contains both the prompt text and the image inputs when reference images exist; it does not merely link filenames in prose.

6. **Stop on missing identity anchors.** If a known entity has neither appearance prose nor a usable reference image, ask for visual guidance or create the missing owner/design through the appropriate craft path before generating. Do not invent canonical looks from a name alone. Completion: no depicted canon owner is generated from an unsupported guess.

## Prompt shape

Use this compact brief when calling a native generator:

```text
Task: [new image | edit Image N | scene illustration | token | battlemap]
Subject/action: ...
Scene: ...
Composition: ...
Lighting/style: ...
Aspect ratio / size: ...
Reference roles:
- Image 1: [owner + what to preserve]
- Image 2: [owner/place + what to preserve]
Visible canon anchors:
- [owner]: [short appearance facts from source]
Constraints: player-safe only; preserve named identities; do not borrow another entity's look.
```

Keep prose short. The image model sees the reference pixels; the text tells it what matters about them.

## Scope boundary

This skill only gathers and feeds visual anchors for generation. It does not decide whether art should exist, judge the final image, place or link finished files, or update owner pages. After generation, use `visual-aids` when the result needs to be attached, promoted, or embedded in the vault.
