# Agent guide — ai-co-dm

This repo is an Obsidian LLM wiki for home D&D campaigns. Treat markdown as the product.

## Do

- Prefer wikilinks: `[[Note Name]]` or `[[path/Note Name]]`.
- One topic per note. Split when a note grows past ~screenful of actionable content.
- Put YAML frontmatter on structured notes (`type`, `campaign`, `status`, `tags`).
- When adding a note, link it from the nearest index (campaign hub, sessions list, NPC index).
- Use stubs: a short note with links beats an empty folder.
- Keep player-facing vs DM-only clear in frontmatter (`visibility: table | dm`).

## Don't

- Don't paste WotC proprietary book text. Paraphrase house rulings; link to legal sources if needed.
- Don't put real player full names, emails, phones, or addresses in this public repo. Use first names or handles.
- Don't invent a parallel database or app layer unless Nick asks. The vault *is* the system.
- Don't rename campaign folders casually; update inbound links if you must.

## Note types

`type` frontmatter values: `hub` | `campaign` | `session` | `npc` | `location` | `faction` | `quest` | `lore` | `template` | `lexicon`.

## Workflow

1. Read [[00 Home]] and the active campaign hub.
2. Capture ephemeral stuff under `inbox/`, then file into the campaign.
3. After a session, add `sessions/NNNN-title.md` and bump the campaign hub.
