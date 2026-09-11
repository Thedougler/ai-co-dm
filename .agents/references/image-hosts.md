# Host tool routing

Which image tool to call and how to pass reference files, by host environment. Read this
when calling any image tool to generate or edit art. The host determines the tool; the
presence of usable reference images determines the mode.

## Grok Build

| Refs available? | Tool | Notes |
|---|---|---|
| No | `image_gen` (`prompt`, `aspect_ratio`) | Text-only generate. |
| Yes | `image_edit` | `image` is an array of absolute vault paths and/or `[Image #N]` chat tokens, in the same order the prompt names them. A new composition of a known owner still uses `image_edit`. Single-image edits keep the source aspect ratio; pick a matching frame or pass a second image when `aspect_ratio` must change. Load `imagine` for prompt craft. |

## OMP

| Refs available? | Tool | Notes |
|---|---|---|
| No | `generate_image` | Text-only: `subject` describes the scene. |
| Yes | `generate_image` | Files in `input`; name them in `subject` or `changes` as `Image 1`, `Image 2`. |

## Codex native

| Refs available? | Tool | Notes |
|---|---|---|
| No | `image_gen` | Both image-input fields omitted. |
| Yes (local files) | `image_gen` | `referenced_image_paths` set to absolute vault paths. |
| Yes (chat images only) | `image_gen` | `num_last_images_to_include` with the smallest count that covers every needed image (up to five). Name images in the prompt by conversation order. Never combine with `referenced_image_paths`. |

For a local edit target on Codex, inspect it with `view_image` before generating. If
references span both local files and chat images and cannot all be supplied through one
mode, ask for the missing image before generating.

## Edit requests (all hosts)

State what changes and what must stay: identity, silhouette, palette, gear, or location
layout. If the live schema has no image-input field for an owner that has reference images,
switch to an input-capable route or ask before generating.
