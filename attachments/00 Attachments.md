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

Prefer path under `attachments/` so agents and git stay unambiguous. Bare `![[map.png]]` works in Obsidian if the name is unique — still prefer the full vault-relative path when writing as an agent.

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

_Add wikilinks to notable assets as they land._
