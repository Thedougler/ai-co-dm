---
name: wiki-ingest
description: >
  Distill a source into the ai-co-dm Obsidian LLM wiki. Use when Nick drops files
  or text into inbox/, pastes an article/URL/session evidence, says ingest/process/
  add to wiki/file this, or wants Research findings compiled into campaign notes.
  Not for mechanical homebrew math (Homebrewer) or player-facing TotM prose alone
  (Visualizer). Not for full-wiki rewrites (Organizer/wiki-lint).
---

# Wiki ingest — ai-co-dm

Compile a source into typed, linked vault notes. Distill and integrate — do not dump a summary into `inbox/` forever.

**Vault:** `/Users/nick/Documents/ai-co-dm` (cwd). Schema: [[AGENTS]]. Pattern: skill `llm-wiki` (adaptation section only unless teaching).

Upstream inspiration: Tedydev-web/llm-wiki-skills `wiki-ingest` (see `UPSTREAM_SKILL.md` + `references/`). Do **not** use their `raw/` · `wiki/` · `state.json` layout.

## Map

| Generic | ai-co-dm |
|---|---|
| `raw/` staging | `inbox/` |
| Compiled pages | `campaigns/<slug>/…`, `lexicon/` |
| Schema | [[AGENTS]] + `templates/` |
| Index / hot | campaign `00` indexes + `hot.md` |
| Query before write | `./scripts/qmd` + `qmd-retrieval` |

## Process

1. **Accept source** — path under `inbox/`, URL (fetch), or pasted text. If URL/file outside vault, stage a short capture under `inbox/` first.
2. **Orient** — read [[AGENTS]] boot + [[campaigns/shattered-sea/hot]] (or named campaign). `./scripts/qmd search` / `query` for existing entities (create-vs-update).
3. **Classify** — which `type`s does this touch? Prefer patching owners over minting siblings. Use matching `templates/` for new notes.
4. **Distill** — write/update only the surgical page set (often 1–5 notes). Wikilinks; frontmatter; `[!narration]` empty or hand Visualizer if player-facing prose is needed.
5. **Index** — link from nearest hub/MOC/`hot` if pressure/quests changed.
6. **Drain** — remove or mark filed the `inbox/` capture; never leave a second wiki in inbox.
7. **Persist** — `./scripts/after-write "ingest: …"`.

## Hard don'ts

- No parallel `wiki/` · `sources/` · `concepts/` tree.
- No WotC book paste; no real player PII.
- No silent canon overwrite — flag / ask Co-DM|Nick.
- No full mechanical homebrew blocks — packet to **Homebrewer**.
- No dumping whole sources as one giant note — atomic by type.

## When stuck

Read `references/ingest-walkthrough.md` for upstream narrative (remap paths). Ignore `state-json-spec.md` / promote-qa unless Nick asks for that sidecar model.
