---
name: obsidian-markdown
description: >-
  Format every ai-co-dm vault `.md` with Obsidian Flavored Markdown (wikilinks,
  embeds, callouts, properties). Required on any create or edit of wiki notes —
  campaigns/, lexicon/, templates/, inbox/, hubs, indexes — before or while
  writing. Use whenever writing Obsidian markdown in this vault.
---

# Obsidian markdown (ai-co-dm)

Vault: `/Users/nick/Documents/ai-co-dm`. Schema: [[AGENTS]]. Load this `SKILL.md`
on every vault `.md` write; open `references/` only when stuck.

## Hard rules

- **Wikilinks in-vault:** `[[Note]]` / `[[Note|text]]` / `[[Note#Heading]]`. Markdown links only for external `https://` URLs.
- **Frontmatter (AGENTS):** include when applicable — `type`, `campaign`, `status`, `tags`, `visibility: table | dm`. Prefer AGENTS fields over generic `title`-only notes. `type` enum: `hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`.
- **Player prose:** leading `> [!narration] Narration` (TotM / Visualizer). Empty stub ok. No secrets/DCs/unearned names inside it.
- **Monsters:** Fantasy Statblocks fence (```` ```statblock ````) **first** after frontmatter — see `templates/Monster.md` + `./scripts/lint-statblocks`. Never prose AC/HP tables before the fence. No WotC book paste.
- **Paths:** scratch → `inbox/`; media embeds from `attachments/`. No parallel `wiki/` · `concepts/` · `sources/` tree.
- **Finish:** `./scripts/after-write "why"`.

## Write workflow

1. Copy matching `templates/` note when creating.
2. Fill frontmatter (`type` + campaign fields).
3. If `type: monster` → `statblock` fence immediately after `---`.
4. Leading `[!narration]` when the template expects it.
5. Body: one topic/note; wikilink nearest index/MOC/`hot` as needed.
6. DM procedure / hidden truth → `[!mechanic]` or collapsed `[!secret]-` (not in narration).

## Syntax (day-to-day)

### Wikilinks

```markdown
[[Note Name]]
[[Note Name|Display]]
[[Note Name#Heading]]
[[Note Name#^block-id]]
[[#Heading in same note]]
```

Block id on a paragraph: `text ^block-id`. For lists/quotes, put `^id` on its own line after the block.

### Embeds

```markdown
![[Note Name]]
![[Note Name#Heading]]
![[attachments/image.png|300]]
```

More: [references/EMBEDS.md](references/EMBEDS.md).

### Callouts

```markdown
> [!narration] Narration
> Player-facing prose (or leave empty).

> [!mechanic]
> Procedure, DC, numbers — DM side.

> [!secret]- Hidden
> Collapsed by default; never put in `[!narration]`.
```

Other types (`note`, `tip`, `warning`, …): [references/CALLOUTS.md](references/CALLOUTS.md).

### Properties

```yaml
---
type: npc
campaign: shattered-sea
status: live
tags: [npc]
visibility: dm
aliases: [Optional other name]
---
```

Types and tags: [references/PROPERTIES.md](references/PROPERTIES.md).

### Also supported (use when needed)

`==highlight==` · `%%comment%%` · `$math$` / `$$` · ` ```mermaid ` · footnotes `[^1]`

## Anti-patterns

| Fail | Do instead |
|---|---|
| `[text](Campaign Note.md)` for vault notes | `[[Campaign Note]]` |
| Frontmatter with only `title`/`date` | AGENTS `type` + campaign fields |
| Prose monster stats / fence not first | `statblock` fence immediately after frontmatter |
| Secrets inside `[!narration]` | `[!secret]-` or DM sections |
| New `wiki/` or `concepts/` folders | `campaigns/` · `lexicon/` · `inbox/` |
| WotC book paste | paraphrase / house / SRD link in `source` |
