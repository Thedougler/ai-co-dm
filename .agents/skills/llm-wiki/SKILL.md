---
name: llm-wiki
description: >-
  Foundational Karpathy LLM-wiki doctrine for ai-co-dm: compiled vault over
  re-derived answers, ingest/query/lint roles, provenance, and how to grow the
  wiki without scaffolding a parallel tree. Use when agents debate vault
  architecture, ingest vs query vs hygiene, or whether to create new structure.
  Day-to-day find = qmd-retrieval; hygiene = Organizer; schema = AGENTS.md.
  Do not create wiki/, sources/, concepts/, or _system/ trees in this repo.
---

# LLM Wiki (ai-co-dm)

This vault **is** the LLM wiki. Knowledge is distilled into markdown once and kept current — not re-derived from raw chaos on every question.

## Map (read first)

| Pattern term | In this vault |
|---|---|
| Schema | [[AGENTS]] + `templates/` + `type` enum |
| Compiled wiki | `campaigns/`, `lexicon/`, hubs, typed indexes (`00 *.md`) |
| Hot / index | `campaigns/<id>/hot.md`, [[00 Home]] |
| Raw / inbox | `inbox/` (capture → file; Organizer drains) |
| Query | `./scripts/qmd` + skill `qmd-retrieval` |
| Lint / hygiene | **Organizer** (indexes, orphans, dupes, hot drift) |
| Ingest | Co-DM / Organizer filing; design skills for new entities; `session-transcript-ingest` for session evidence |
| After write | `./scripts/after-write "why"` |

**Do not scaffold** `wiki/`, `sources/`, `concepts/`, `entities/`, `projects/`, `_raw/`, `_system/`, or a second Obsidian vault layout. Those belong to other products (Campaign OS / generic llm-wiki). If a procedure names them, **remap via the table above** or stop.

Progressive load: this file for doctrine. Open `references/karpathy-pattern.md` only when teaching the pattern. Day-to-day find/write stays on AGENTS + `qmd-retrieval`.

## Three operations

| Op | Meaning here | Who / how |
|---|---|---|
| **Ingest** | Turn evidence into surgical note updates | Session logs, inbox filing, entity stubs from templates; never “rewrite the whole wiki” |
| **Query** | Answer from compiled pages with citations | `qmd-retrieval` first; snippets ≠ facts; `qmd get --full` before claiming |
| **Lint** | Contradictions, orphans, stale hubs, missing links | **Organizer**; flag conflicts — no silent overwrite of canon |

## Doctrine

1. **Compiled over RAG-only.** Prefer updating a page over answering from raw transcript/PDF every time. The note is the artifact.
2. **Surgical page sets.** Touch what play changed. Hygiene is Organizer’s job, not a full-wiki rewrite by whoever is awake.
3. **Provenance.** Durable claims need evidence (session log, source note, player decision). Mark Implied / Uncertain when reading between lines (`session-transcript-ingest`).
4. **Schema is AGENTS.** Frontmatter `type`, `campaign`, `status`, `tags`, `visibility`. New entity → copy matching `templates/` note; link nearest index/MOC.
5. **One topic per note.** Stub beats empty folder. Wikilinks over orphan prose.
6. **Player-facing safety.** No secrets/DCs/unearned names in `[!narration]`. TotM / Visualizer owns that surface.
7. **Create vs update.** qmd for existing entity first; update in place; mint a new note only on a true miss.

## Anti-patterns (reject)

- Creating `wiki/concepts/…` or Campaign OS `kind.slug.md` layouts “because the skill mentioned them.”
- Treating this skill as a find tool (use `qmd-retrieval`).
- Dumping full transcripts into handoffs (packet only).
- Inventing canon when qmd is silent — ask Nick / Co-DM.
- Running `~/.obsidian-wiki` config protocols or inventing `OBSIDIAN_VAULT_PATH` trees for this repo — vault root is `/Users/nick/Documents/ai-co-dm`.

## When to open references

- Teaching or debating the Karpathy pattern → `references/karpathy-pattern.md`
- Session evidence → `session-transcript-ingest`
- Entity design → the matching design skill (`place-design`, `npc-design`, …)

## Minimal audit before growing structure

- [ ] Does an existing `type` + template cover this?
- [ ] Would qmd find a page to update instead?
- [ ] Is Organizer the right owner (indexes/MOCs/inbox)?
- [ ] Would a new folder duplicate `campaigns/` or `lexicon/`?
- [ ] If yes to any parallel-tree temptation → stop; remap to the table above.

## Lean world-bible habit

A useful bible has a hub for PCs, active versus past NPCs, locations, factions,
and living handouts, plus a lean junk drawer for unfiled material. Let
responsive systems (relationships, clocks, and independent faction/NPC moves) create
depth before adding lore. Organize location notes from obvious surface to deeper
interaction to secrets last. Start with one habit: within 24 hours of a session,
spend about 15 minutes capturing who, decisions, and open threads, then patch only
changed typed owners. Keep every note atomic and link the nearest Organizer MOC;
never stage unrelated vault junk.
