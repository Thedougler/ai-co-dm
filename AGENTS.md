# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.** Humans and Grok Bots share one vault.

| | |
|---|---|
| Local | `/Users/nick/Documents/ai-co-dm` |
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active campaign | [[campaigns/shattered-sea/00 Shattered Sea]] |

Grok Bots: run Shell on **macbook.lan** with cwd = vault root. Always **commit and push** after vault writes.

## Boot (before you invent)

1. Read this file + [[00 Home]] + the active campaign hub.
2. **Search before write** — `.agent/skills/qmd-retrieval` + `./scripts/qmd` (see Search).
3. Missing canon → ask Nick / Co-DM. Do not silently invent facts that contradict the wiki.
4. New entity → copy matching `templates/` note; fill only what play needs; link from the nearest index.

## Hard don'ts

- No WotC proprietary book paste. Paraphrase; link SRD / page refs.
- No real player PII (handles / first names only).
- No parallel DB/app layer unless Nick asks. The vault *is* the system.
- No prep/log mash: `session-prep` disposable; `session` durable.
- No DM secrets / DCs / unearned names inside `[!narration]` — TotM rules.
- No casual campaign-folder renames without fixing inbound links.

## Write

- Wikilinks: `[[Note]]` / `[[path/Note]]`. One topic per note; stub > empty folder.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`.
- Content notes open with `> [!narration] Narration` (player-safe). Fill via `.agent/skills/theatre-of-the-mind` (or hand to Visualizer). Leave empty if unused. Dialogue: `Narration — speaker`.
- After session: [[templates/Session log]] + bump campaign hub. Before: [[templates/Session prep]].
- Capture scraps in `inbox/`, then file. After writes: `./scripts/qmd update` (+ `embed` if vectors matter), then **commit + push**.

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Search (QMD)

Project-local index: `.qmd/` (not the global Shattered Sea index). From vault root only:

| Collection | Covers |
|---|---|
| `wiki` | campaign notes, hubs, lexicon, templates, inbox, AGENTS/README |
| `skills` | `.agent/skills/**` |

```bash
./scripts/qmd search "…" -c wiki -n 5
./scripts/qmd query $'intent: …\nlex: …\nvec: …' -c wiki -n 5
./scripts/qmd get "#docid" --full
./scripts/qmd update && ./scripts/qmd embed
```

Snippets are leads — fetch full docs before claiming facts. Skill: `.agent/skills/qmd-retrieval`. Optional MCP: `./scripts/qmd mcp` (see `.agent/skills/qmd/references/mcp-setup.md`).

## Skills (`.agent/skills/`)

Load the skill before the job. Prefer delete/clarify over essay.

| Job | Skill |
|---|---|
| Find vault facts | `qmd-retrieval` (+ `qmd` bootstrap) |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` |
| Session pacing | `session-beats` |
| Places / sites | `place-design` |
| Dungeons / megadungeons | `dungeon-design` |
| NPCs / villains | `npc-design` |
| Monsters (5.5e) | `homebrew-monsters-5e` |
| Magic items (5.5e) | `dnd-5e-magic-item-design` |

## Who does what (fleet)

| Bot | Owns |
|---|---|
| **Co-DM** | Campaign continuity, prep/log, vault canon, table rulings |
| **Visualizer** | TotM narration blocks only |
| **Homebrewer** | Mechanical homebrew (subclass/monster/item/spell/feat) |
| **Researcher** | Prior art / expert DM advice (web); not vault canon |
| **Skill-Creator** | Skills under `.agent/skills/` |
| **Ops** | Fleet, AGENTS.md, templates, qmd, routines |

Hand off at anti-job boundaries. Don't redesign the fleet unless you are Ops.

## Layout

| Path | Purpose |
|---|---|
| `00 Home.md` | Hub |
| `campaigns/` | One folder per campaign |
| `templates/` | New-note skeletons |
| `lexicon/` | Shared terms / house tone |
| `inbox/` | Scratch → file soon |
| `.agent/skills/` | Agent skills (source of truth) |
| `docs/agents/` | Eng-skill plumbing only (issues/triage/domain) — ignore for table work |

## Engineering skills only

If a coding/triage skill points here: `docs/agents/issue-tracker.md`, `triage-labels.md`, `domain.md`. Table/campaign bots can skip.
