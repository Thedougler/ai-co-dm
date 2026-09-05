# Agent guide — ai-co-dm

This repo is an Obsidian LLM wiki for home D&D campaigns. Treat markdown as the product.

## Do

- Prefer wikilinks: `[[Note Name]]` or `[[path/Note Name]]`.
- One topic per note. Split when a note grows past ~screenful of actionable content.
- Put YAML frontmatter on structured notes (`type`, `campaign`, `status`, `tags`).
- When adding a note, link it from the nearest index (campaign hub, sessions list, NPC index).
- Use stubs: a short note with links beats an empty folder.
- Keep player-facing vs DM-only clear in frontmatter (`visibility: table | dm`).
- New notes: copy from `templates/` matching `type`. Fill only what play needs.
- Content notes open with `> [!narration] Narration` (player-safe). Fill via `.agent/skills/theatre-of-the-mind`; leave empty if unused. Dialogue: `Narration — speaker`.

## Don't

- Don't paste WotC proprietary book text. Paraphrase house rulings; link to legal sources if needed.
- Don't put real player full names, emails, phones, or addresses in this public repo. Use first names or handles.
- Don't invent a parallel database or app layer unless Nick asks. The vault *is* the system.
- Don't rename campaign folders casually; update inbound links if you must.
- Don't mash session prep into the session log. Prep is disposable (`session-prep`); logs are durable (`session`).

## Note types

`type` frontmatter values: `hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`.

## Workflow

1. Read [[00 Home]] and the active campaign hub.
2. Capture ephemeral stuff under `inbox/`, then file into the campaign.
3. Before a session, use [[templates/Session prep]]. After, use [[templates/Session log]] and bump the campaign hub.
4. Find content with **qmd** (see Search below) before inventing facts.

## Search (QMD)

Agents find content with **qmd** against the project-local index in `.qmd/` (not the global Shattered Sea index). Run commands from the vault root.

| Collection | Covers |
|---|---|
| `wiki` | campaign notes, hubs, lexicon, templates, inbox, AGENTS/README |
| `skills` | `.agent/skills/**` (dotdir; separate collection) |

Protocol: load `.agent/skills/qmd-retrieval/SKILL.md`. Short form:

1. `./scripts/qmd search` / `./scripts/qmd query` with `-c wiki` or `-c skills`
2. `./scripts/qmd get` / `./scripts/qmd multi-get` full docs (snippets are leads only)
3. After markdown writes: `./scripts/qmd update` then `./scripts/qmd embed` when vectors matter

Optional MCP: `./scripts/qmd mcp` from vault root — see `.agent/skills/qmd/references/mcp-setup.md`.

## Agent skills

### Issue tracker

Issues are tracked in this repository’s GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Triage uses the five default canonical labels. See `docs/agents/triage-labels.md`.

### Domain docs

This repository uses a single-context domain-doc layout. See `docs/agents/domain.md`.
