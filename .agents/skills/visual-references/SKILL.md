---
name: visual-references
description: >-
  Gather canonical visual anchors before any image generation, edit, art prompt, or art commission
  that depicts a vault PC, NPC, monster, location, vehicle, item, or named session moment. Use this
  before `image_gen`, `image_edit`, or `generate_image`, especially when vault files or chat
  attachments can lock identity. Not for placing finished art on pages; use visual-aids for that.
---

# Visual References

Generated art should preserve the vault's established look. Treat each depicted owner as having **visual anchors**: attached reference images, image embeds, and short appearance prose from the owner page. Feed those pixels into the host tool that accepts image inputs. Use a text-only generate only when the depicted owner has no usable image.

This skill gathers and maps anchors. Host prompt craft stays with that host (`imagine` on Grok Build).

## Workflow

1. **Resolve every depicted owner.** Use `qmd-retrieval` or a known path to find each PC, NPC, monster, location, vehicle, item, or named session moment that appears in the image. Completion: every named subject in the requested composition has an owner page, or the missing owner is explicitly named as missing.

2. **Collect visual anchors.** Read the owner page sections that carry appearance: `## Visual reference`, `## Art`, the identity image near the title, the first `[!narration]` portrait when it is player-safe, and frontmatter `summary` only as a fallback. Resolve each `![[...]]` embed to its actual file under `attachments/` as an **absolute path**. Note any user-attached chat images as their host token (`[Image #1]` on Grok Build); those attachments have no path to invent. Completion: each owner has a list of source lines plus resolved local image paths or chat tokens when images exist.

3. **Look at the pixels.** If a reference image exists, inspect the actual image. Filename, alt text, and stale prose yield to the pixels. Completion: each used reference image has a stated role such as `Crissdalynn identity portrait` or `Aruhe spoke-ring overview`.

4. **Choose the smallest useful reference set.** Prefer high-signal anchors:
   - **Reference/design sheets** for identity, outfit, equipment, palette, and repeated features.
   - **Portraits** for face, expression, posture, and upper-body identity.
   - **Scene or place art** for layout, material, light, and environmental silhouette.
   - **Tokens** only when no better identity image exists; they are low-detail anchors.

   Keep the strongest identity lock for each central subject before adding vibe or layout references. Grok `image_edit` prefers one clean identity lock; add a second image only when another owner or a layout must appear. Completion: no decorative or wrong-entity image is attached just because it is nearby.

5. **Feed the host image tool.** Read the live tool schema. Put files in the parameter that accepts images. The image-input field must hold the files or tokens; a filename in the prompt is not the input.

   | Host | No usable image | With vault or chat refs |
   |---|---|---|
   | Grok Build | `image_gen` (`prompt`, `aspect_ratio`) | `image_edit` — `image` is an array of absolute vault paths and/or `[Image #N]` tokens in the same order the prompt names them. A new composition of a known owner still uses `image_edit`. Single-image edits keep the source aspect ratio; pick a matching frame or pass a second image when `aspect_ratio` must change. Load `imagine` for prompt craft. |
   | OMP | `generate_image` | Same tool: files in `input`; name them in `subject` or `changes` as `Image 1`, `Image 2`. |
   | Codex | `image_gen` with empty refs | `image_gen` with `referenced_image_paths` set to absolute vault paths. |

   For an edit request, state what changes and what must stay: identity, silhouette, palette, gear, or location layout. If the live schema has no image-input field for a canon owner that has reference images, switch to an input-capable route or ask before generating.

   Completion: when reference images exist, the tool call's image-input field contains those files or tokens; when they do not, the call is a text-only generate.

6. **Stop on missing identity anchors.** If a known entity has neither appearance prose nor a usable reference image, ask for visual guidance or create the missing owner/design through the appropriate craft path before generating. Completion: no depicted canon owner is generated from an unsupported guess.

## Prompt inventory

Keep this brief as the agent's fact inventory. Render it into the host prompt field the way that host expects. On Grok Build, turn it into natural prose via `imagine`.

```text
Task: [new image | edit | scene illustration | token | battlemap]
Subject/action: ...
Scene: ...
Composition: ...
Lighting/style: ...
Aspect ratio / size: ...
Reference roles (same order as the image-input array):
- [owner + what to preserve]
Visible canon anchors:
- [owner]: [short appearance facts from source]
Constraints: player-safe only; preserve named identities; each depicted thing uses its own look.
```

Keep prose short. The image model sees the reference pixels; the text tells it what matters about them.

## Scope boundary

This skill only gathers and feeds visual anchors for generation. It does not decide whether art should exist, judge the final image, place or link finished files, or update owner pages. After generation, use `visual-aids` when the result needs to be attached, promoted, or embedded in the vault.
