---
type: hub
status: live
tags: [hub, attachments]
visibility: table
---

# Attachments

Image and media assets for the vault. Obsidian drops new files here (`attachmentFolderPath`).

## Link / embed (Obsidian)

```markdown
![[attachments/shattered-sea/map.png]]           Embed (preferred in notes)
![[attachments/shattered-sea/map.png|400]]       Embed with width
[[attachments/shattered-sea/map.png]]            Wikilink to the asset (opens file)
[[attachments/shattered-sea/map.png|Campaign map]]
```

Prefer path under `attachments/` so agents and git stay unambiguous. Bare filename embeds work in Obsidian if the name is unique — agents should still write the full `attachments/…` path.

## Layout

| Path | Purpose |
|---|---|
| `attachments/` | Shared / uncategorized |
| `attachments/<campaign>/` | Campaign-specific art, maps, handouts |
| `attachments/shattered-sea/` | Active campaign |

## Rules

- Commit images with the notes that use them (`./scripts/after-write`).
- No proprietary WotC art dumps — original / CC / Nick-owned / player-ok only.
- Prefer WebP or PNG; keep files lean.
- Player-facing embeds can sit near `[!narration]`; DM-only maps → `visibility: dm` notes or `[!secret]-`.
- Lint: `./scripts/lint-obsidian-markdown` flags broken image wikilinks/embeds.

## Index

## Shattered Sea legacy ingest

Only obvious filename-to-note matches were copied from the legacy wiki. Files live under `attachments/shattered-sea/<category>/`.

| Folder | Files |
|---|---:|
| `banners` | 26 |
| `character-sheets` | 1 |
| `creatures` | 3 |
| `layouts` | 25 |
| `misc` | 1 |
| `npcs` | 3 |
| `pcs` | 3 |
| `places` | 7 |
| `portraits` | 10 |
| `reference` | 3 |
| `vehicles` | 27 |
| **Total** | **109** |

Ambiguous battlemaps, dialogue, generic misc art, session scene-art, and unmatched layouts/character material remain in the legacy vault for visual verification.
