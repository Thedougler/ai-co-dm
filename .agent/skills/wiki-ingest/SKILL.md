---
name: wiki-ingest
description: >-
  Distill a source into typed ai-co-dm vault notes. Use when Nick drops files or
  text into inbox/, pastes an article/URL/session evidence, says ingest/process/
  file this/add to wiki, or wants research compiled into campaign notes. Not for
  homebrew math (Homebrewer), TotM prose alone (Visualizer), full-wiki rewrites
  (Organizer / wiki-lint), or session-transcript epistemic packets
  (session-transcript-ingest — hand off when the source is a table recording).
---

# Wiki ingest

Compile a source into linked vault notes. Distill and integrate — do not leave a summary rotting in `inbox/`.

**Vault:** `/Users/nick/Documents/ai-co-dm`. Schema: [[AGENTS]]. Owner bot: **Ingest**. Doctrine: `llm-wiki`. Find: `qmd-retrieval`.

## Map

| Need | Here |
|---|---|
| Staging | `inbox/` |
| Compiled pages | `campaigns/<slug>/…`, `lexicon/` |
| Schema / templates | [[AGENTS]] + `templates/` |
| Index / hot | campaign `00` indexes + `hot.md` |
| Query before write | `./scripts/qmd` + `qmd-retrieval` |

Do **not** create `wiki/`, `raw/`, `sources/`, `concepts/`, `entities/`, or `state.json`.

## Process

1. **Accept** — `inbox/` path, URL (fetch), or paste. Outside-vault file → short capture under `inbox/` first.
2. **Orient** — [[AGENTS]] boot + campaign `hot.md`. `qmd search` / `query` for existing entities (create-vs-update).
3. **Classify** — which `type`s? Prefer patching owners over minting siblings. New notes from matching `templates/`.
4. **Distill** — surgical page set (usually 1–5). Wikilinks + frontmatter. `[!narration]` empty unless Visualizer is in the loop.
5. **Index** — link from nearest hub/MOC/`hot` if pressure or quests changed.
6. **Drain** — remove or mark filed the `inbox/` capture.
7. **Persist** — `./scripts/after-write "ingest: …"`.

## Hard don'ts

- No parallel `wiki/` · `sources/` · `concepts/` tree.
- No WotC book paste; no real player PII.
- No silent canon overwrite — flag / ask Co-DM|Nick.
- No full mechanical homebrew — packet **Homebrewer**.
- No one giant dump note — atomic by `type`.
- Table session recordings → `session-transcript-ingest` (epistemic layers), then file results here if needed.
