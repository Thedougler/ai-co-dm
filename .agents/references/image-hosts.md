# Host tool routing

Which image tool to call and how to pass reference files, by host. Read this
when calling any image tool.

**Generate** is the default: create a new image. **Edit** a specific frame only
when Nick likes that image and asks for it to be edited.

## Generate (default)

A new image. First frame, retry, zoom out, try again, redo, make it larger, and
any other composition or scale change.

Identity anchors from `visual-references` (vault owner files, identity sheets
Nick attached) may be image input. A previous generated output is not an
identity anchor.

Load `imagine` for prompt craft on Grok Build.

| Host | Identity anchors? | Tool | Notes |
|---|---|---|---|
| Grok Build | No | `image_gen` (`prompt`, `aspect_ratio`) | Text-only generate. |
| Grok Build | Yes | `image_edit` | This host's generate-with-identity path. `image` is the identity array (vault paths and/or `[Image #N]` identity tokens), same order the prompt names them — not the last generated frame. |
| OMP | No | `generate_image` | Text-only: `subject` describes the scene. |
| OMP | Yes | `generate_image` | Identity files in `input`; name them in `subject` as `Image 1`, `Image 2`. |
| Codex | No | `image_gen` | Both image-input fields omitted. |
| Codex | Vault files | `image_gen` | `referenced_image_paths` = those identity files. |
| Codex | Chat identity only | `image_gen` | `num_last_images_to_include` only while those identity attachments are still the latest images. After a generated frame exists in-thread, use vault paths. Never combine with `referenced_image_paths`. |

## Edit (liked frame)

Nick likes a specific image and asked to edit that image. Pass that frame.
State what changes and what must stay: identity, silhouette, palette, gear, or
location layout.

| Host | Tool | Notes |
|---|---|---|
| Grok Build | `image_edit` | `image` includes the liked frame. Single-image edits keep the source aspect ratio; pick a matching frame or pass a second image when `aspect_ratio` must change. |
| OMP | `generate_image` | Liked frame in `input`; name the change in `changes`. |
| Codex | `image_gen` | `referenced_image_paths` = the liked frame. Inspect it with `view_image` first. |

If the live schema has no image-input field for an owner that has identity
anchors, switch to an input-capable route or ask before generating.
