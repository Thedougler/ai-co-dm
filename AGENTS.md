# Agent guide — ai-co-dm

Obsidian LLM wiki for Nick's home D&D. **Markdown is the product.**

| | |
|---|---|
| Local | `/Users/nick/Documents/ai-co-dm` |
| Remote | `https://github.com/Thedougler/ai-co-dm` |
| Active | [[campaigns/shattered-sea/hot]] → [[campaigns/shattered-sea/00 Shattered Sea]] |

**Layers:** AGENTS = schema/contract only · `hot.md` + hubs = campaign state · skills = procedures. Grok Bots: Shell on **macbook.lan**, cwd = vault root.

## Boot

1. This file + [[00 Home]] + [[campaigns/shattered-sea/hot]] (not the whole tree).
2. **Hard gate:** qmd via skill `qmd-retrieval` (`./scripts/qmd`). Collections: `wiki` · `skills` · `legacy-ss` (read-only prior Shattered Sea). Snippets ≠ facts. `SKILL.md` only unless stuck.
3. Missing canon → ask Nick / Co-DM. No silent contradiction.
4. New entity → copy `templates/` match; fill only what play needs; link nearest index/MOC.

## Hard don'ts

- No WotC book paste. No real player PII (handles only).
- No parallel DB/app. Vault *is* the system.
- No prep/log mash (`session-prep` disposable; `session` durable).
- No secrets/DCs/unearned names in `[!narration]`.
- No “update the whole wiki” — surgical page sets only. Ingest → **Ingest**; lint/audit → **Linter**; structure/MOCs → **Organizer**; don’t full-wiki rewrite.
- No full-transcript handoffs. No re-ls when `hot` + qmd suffice.
- No silent overwrite of canon — flag in the note / ask Co-DM|Nick.

## Write

- **Create vs update:** qmd for existing entity first; update in place; new note only if no hit; link nearest index/MOC.
- Wikilinks; one topic/note; stub > empty folder.
- Frontmatter: `type`, `campaign`, `status`, `tags`, `visibility: table | dm`.
- Leading `> [!narration] Narration` — TotM / **Visualizer**. Empty ok.
- Session: [[templates/Session prep]] → run → [[templates/Session log]]; move still-relevant prep forward.
- Scraps → `inbox/`, then **Ingest** (`wiki-ingest`). Table recordings → `session-transcript-ingest` first, then Ingest if filing remains.
- Canon owner remains **Co-DM** — Ingest compiles sources; does not silently invent table truth.
- Finish with: `./scripts/after-write "short why"`.

### `type` enum

`hub` | `campaign` | `session-prep` | `session` | `npc` | `pc` | `location` | `faction` | `quest` | `front` | `encounter` | `item` | `monster` | `lore` | `template` | `lexicon`

## Skills (progressive)

**Always-on:** this table. **On match:** that skill’s `SKILL.md` only. **On demand:** `references/` when the skill says.

| Job | Skill |
|---|---|
| Find vault facts | `qmd-retrieval` |
| LLM-wiki pattern / doctrine | `llm-wiki` |
| Ingest source → typed notes | `wiki-ingest` → **Ingest** |
| Wiki health / orphans / hot drift | `wiki-lint` → **Linter** |
| Player-facing prose / `[!narration]` | `theatre-of-the-mind` → **Visualizer** |
| Audit player-facing TotM / read-aloud | **Writing-Evaluator** (critique only) |
| TotM fail → skill fix → rewrite loop | Evaluator fail → **Skill-Creator** → **Visualizer** → Evaluator again |
| Session pacing | `session-beats` |
| Places | `place-design` |
| Dungeons | `dungeon-design` |
| NPCs | `npc-design` |
| Monsters | `homebrew-monsters-5e` → **Homebrewer** |
| Magic items | `dnd-5e-magic-item-design` → **Homebrewer** |

## Handoffs (one specialist per wake)

Packet only: `goal` · `allowed paths` · `type` · `constraints` · `do not re-read whole campaign`

| Bot | Owns |
|---|---|
| **Co-DM** | Continuity, prep/log, vault canon, rulings |
| **Visualizer** | TotM / `[!narration]` write only (incl. rewrite after Skill-Creator clears a failed block) |
| **Writing-Evaluator** | Audit player-facing TotM / read-aloud; on **fail**, packet improvement advice → **Skill-Creator** |
| **Skill-Creator** | `.agent/skills/`; on Evaluator fail: implement TotM fix, **delete failed `[!narration]`**, ping **Visualizer** to rewrite, Evaluator re-audits |
| **Homebrewer** | Mechanical homebrew; convert prose monster stats → Fantasy Statblocks fence |
| **Researcher** | Prior art (web); not vault canon |
| **Organizer** | Indexes/MOCs, structure doctrine, hot refresh, light inbox triage |
| **Ingest** | `wiki-ingest` — inbox/URL/paste → typed linked notes; prior context via `-c legacy-ss` (read-only) |
| **Linter** | `wiki-lint` checklist/audit (report + propose) |
| **Ops** | Fleet, AGENTS, templates, qmd, routines |

## TotM fail loop

1. **Writing-Evaluator** fails player-facing prose → packets **Skill-Creator** with improvement advice (examples, expected vs actual, which TotM section, proposed eval).
2. **Skill-Creator** implements the skill change in `.agent/skills/theatre-of-the-mind/`, proves it, `./scripts/after-write`.
3. **Skill-Creator** removes the failed `[!narration]` (or equivalent read-aloud) from the note — leave an empty `> [!narration] Narration` stub.
4. **Skill-Creator** pings **Visualizer** with path + constraints; Visualizer rewrites using the updated skill only.
5. **Writing-Evaluator** re-audits the new block.

Do not skip Skill-Creator and have Visualizer patch prose ad hoc after a fail.

## Layout

| Path | Purpose |
|---|---|
| `campaigns/<id>/hot.md` | Boot “now” |
| `campaigns/` · `templates/` · `lexicon/` · `inbox/` · `attachments/` | Wiki (Obsidian: new notes → inbox, embeds → attachments) |
| `.obsidian/` | Human vault config + Statblocks/Leaflet (ignore workspace) |
| `.agent/skills/` | Procedures |
| `scripts/after-write` · `scripts/qmd` · `scripts/lint-statblocks` | Agent CLI |
| `docs/agents/` | Eng triage — skip for table work |
