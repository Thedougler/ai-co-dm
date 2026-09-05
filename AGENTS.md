# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.**

| | |
|---|---|
| Local | `/Users/nick/Documents/ai-co-dm` |
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active | [[campaigns/shattered-sea/hot]] → [[campaigns/shattered-sea/00 Shattered Sea]] |

Grok Bots: Shell on **macbook.lan**, cwd = vault root. After vault writes: `./scripts/after-write "msg"` (qmd + commit + push).

## Boot (thin)

1. This file + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree).
2. **Hard gate:** `./scripts/qmd` search/get before invent or write. Snippets ≠ facts. Skill: `qmd-retrieval` (`SKILL.md` only unless stuck).
3. Missing canon → ask Nick / Co-DM. No silent contradiction.
4. New entity → copy `templates/` match; fill only what play needs; link nearest index.

## Hard don'ts

- No WotC book paste. No real player PII (handles only).
- No parallel DB/app. Vault *is* the system.
- No prep/log mash (`session-prep` disposable; `session` durable).
- No secrets/DCs/unearned names in `[!narration]`.
- No “update the whole wiki” — surgical page sets only.
- No full-transcript handoffs. No re-ls of the campaign when `hot` + qmd suffice.

## Write

- Wikilinks; one topic/note; stub > empty folder.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`.
- Leading `> [!narration] Narration` — TotM / Visualizer. Empty ok.
- Session: [[templates/Session prep]] → run → [[templates/Session log]]; move still-relevant prep forward.
- Scraps → `inbox/`, then file.
- Finish with: `./scripts/after-write "short why"` (use `--no-embed` if only tiny edits and vectors already fresh; `--dry-run` to preview).

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Search

`.qmd/` is project-local. From vault root:

```bash
./scripts/qmd search "…" -c wiki -n 5
./scripts/qmd query $'intent: …\nlex: …\nvec: …' -c wiki -n 5
./scripts/qmd get "#docid" --full
```

| Collection | Covers |
|---|---|
| `wiki` | notes, hubs, lexicon, templates, inbox, AGENTS |
| `skills` | `.agent/skills/**` |

## Skills (progressive)

**Always-on:** this routing table. **On match:** read that skill’s `SKILL.md` only. **On demand:** open `references/` / evals when the skill says — never preload TotM’s full tree for a non-narration job.

| Job | Skill |
|---|---|
| Find vault facts | `qmd-retrieval` |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` → prefer **Visualizer** |
| Session pacing | `session-beats` |
| Places | `place-design` |
| Dungeons | `dungeon-design` |
| NPCs | `npc-design` |
| Monsters | `homebrew-monsters-5e` → **Homebrewer** |
| Magic items | `dnd-5e-magic-item-design` → **Homebrewer** |

## Handoffs (one specialist per wake)

Packet only — not the peer transcript:

`goal` · `allowed paths` · `type` · `constraints` · `do not re-read whole campaign`

| Bot | Owns |
|---|---|
| **Co-DM** | Continuity, prep/log, vault canon, rulings |
| **Visualizer** | TotM / `[!narration]` only |
| **Homebrewer** | Mechanical homebrew |
| **Researcher** | Prior art (web); not vault canon |
| **Skill-Creator** | `.agent/skills/` |
| **Ops** | Fleet, AGENTS, templates, qmd, routines |

## Layout

| Path | Purpose |
|---|---|
| `campaigns/<id>/hot.md` | Boot “now” page |
| `campaigns/` · `templates/` · `lexicon/` · `inbox/` | Wiki |
| `.agent/skills/` | Skills |
| `scripts/after-write` · `scripts/qmd` | Agent CLI |
| `docs/agents/` | Eng triage only — skip for table work |
