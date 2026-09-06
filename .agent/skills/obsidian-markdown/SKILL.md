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
before every vault `.md` write; open `references/` only when stuck. Every wiki
write must preserve vault wikilinks, applicable callouts, and AGENTS properties.

## Hard rules

- **Wikilinks in-vault:** `[[Note]]` / `[[Note|text]]` / `[[Note#Heading]]`. Markdown links only for external `https://` URLs.
- **Frontmatter (AGENTS):** include when applicable — `type`, `campaign`, `status`, `tags`, `visibility: table | dm`. Prefer AGENTS fields over generic `title`-only notes. `type` enum: `hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`.
- **Player prose:** leading `> [!narration] Narration` (TotM / Visualizer). Empty stub ok. No secrets/DCs/unearned names inside it.
- **Live session surfaces:** In run-guide, session-prep, session, and beat notes, never use collapsed callouts (`[!…]-`); keep DM information open so session cards do not hide it. Collapsed secrets remain allowed on long-lived owner pages (NPC/PC/faction) when useful.
- **Real body newlines:** Prose, lists, and callout bodies must use real line breaks, never a literal backslash followed by `n`. This is especially strict for run-guide, session-prep, session, and beat notes. The only exemptions are YAML frontmatter and fenced code/statblocks (including YAML string values inside a statblock fence); outside those regions, a literal `\n` is a FAIL.
- **Complete sentences on live surfaces:** Every DM-facing line on a run guide, session prep, or beat card must be a **complete grammatical sentence** (or a short list of complete sentences). Telegram shorthand, letter-code-only clauses, and slash-stacks that need a decoder are presentation fails. Wikilinks, bold field labels, and compact tables are allowed when cells remain readable sentences or clear subject-bearing fragments.
- **Monsters:** Fantasy Statblocks fence (```` ```statblock ````) immediately after frontmatter, or after a single `## Statblock` heading so run cards can `![[Name#Statblock]]`. See `templates/Monster.md` + `./scripts/lint-statblocks`. Never a prose AC/HP table instead of the fence. No WotC book paste.
- **Run-card roster:** embed the owner heading (`![[Bloodhawk#Statblock]]`). Do not copy the fence or retype AC/HP onto the run card. Do not embed the whole monster essay.
- **Paths:** scratch → `inbox/`; **images/media** under `attachments/` (campaign subfolders ok). Embed with `![[attachments/…]]`; wikilink with `[[attachments/…]]`. See [[attachments/00 Attachments]] + [references/EMBEDS.md](references/EMBEDS.md). No parallel `wiki/` · `concepts/` · `sources/` tree.
- **Finish:** Run `./scripts/after-write "why" -- path1 [path2…]` with named paths only; it is path-scoped and pushes the commit.
- **Lint:** Run `./scripts/lint-obsidian-markdown`; run `./scripts/lint-literal-newlines` for session/beat bodies and `./scripts/lint-statblocks` for monsters. The literal-newline check skips YAML frontmatter and fenced code/statblocks.

## Write workflow

1. Copy matching `templates/` note when creating.
2. Fill frontmatter (`type` + campaign fields).
3. If `type: monster` → optional `## Statblock`, then the `statblock` fence.
4. Leading `[!narration]` when the template expects it.
5. Body: one topic/note; wikilink nearest index/MOC/`hot` as needed.
6. DM procedure / hidden truth → `[!mechanic]` or `[!secret]` on run-guide, session-prep, session, and beat-note surfaces (not in narration). Use collapsed `[!secret]-` only on long-lived owner pages such as NPC/PC/faction pages.
7. In prose, lists, and callout bodies, type each line break as a real newline; do not serialize it as a backslash-`n` sequence.

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

### Images & embeds

```markdown
![[attachments/shattered-sea/map.png]]              Embed image
![[attachments/shattered-sea/map.png|400]]          Embed + width
[[attachments/shattered-sea/map.png]]               Wikilink to asset
[[attachments/shattered-sea/map.png|Campaign map]]
![[Note Name]]
![[Note Name#Heading]]
![[Bloodhawk#Statblock]]                            Run-card combat (tight heading)
![[Item#Charges / limits]]                          Run-card item limits, only if this slice spends them
```

More: [references/EMBEDS.md](references/EMBEDS.md) · hub [[attachments/00 Attachments]].

### Callouts

```markdown
> [!narration] Narration
> Player-facing prose (or leave empty).

> [!mechanic]
> Procedure, DC, numbers — DM side.

> [!secret] Hidden
> Open by default on live session surfaces; never put in `[!narration]`.
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
| Prose monster stats / fence not first | `## Statblock` then `statblock` fence, or fence first |
| Copied AC/HP table on a run card | `![[Monster#Statblock]]` plus scene dials |
| Secrets inside `[!narration]` | `[!secret]` on live session surfaces; `[!secret]-` only on long-lived owner pages |
| New `wiki/` or `concepts/` folders | `campaigns/` · `lexicon/` · `inbox/` |
| WotC book paste | paraphrase / house / SRD link in `source` |
| `![](…)` / absolute disk paths for vault art | `![[attachments/…]]` / `[[attachments/…]]` |
| Broken image wikilink | fix path or add file under `attachments/` |
