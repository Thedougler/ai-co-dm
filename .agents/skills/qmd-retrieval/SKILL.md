---
name: qmd-retrieval
description: >
  Find and retrieve content in the ai-co-dm Obsidian wiki via QMD (BM25 + vector).
  Use whenever you need to locate campaigns, NPCs, sessions, lexicon, templates,
  inbox captures, AGENTS.md rules, or agent skills before answering or writing.
---

# QMD Retrieval — ai-co-dm

Project-local index lives at `.qmd/` in the vault root. Always `cd` to
`/Users/nick/Documents/ai-co-dm` (or rely on that cwd) so the local index is used
instead of other QMD indexes on the machine.

Snippets are leads only. Fetch full docs before claiming facts.

Also load `.agents/skills/qmd/SKILL.md` (bootstrap → `./scripts/qmd skill show`) for CLI details.

## Collections

Default search (omit `-c`) hits only `shattered-sea` and `wiki`. Other collections are opt-in.

| Collection | Path | Default | Use when |
|---|---|---|---|
| `shattered-sea` | `campaigns/shattered-sea/**/*.md` (not `session-transcript*`) | yes | live Shattered Sea facts, session reports/recaps, `hot.md` |
| `wiki` | root hubs, `lexicon/`, `templates/`, `campaigns/*.md`, `attachments/**/*.md` | yes | contract, hubs, lexicon, templates — not campaign owner pages |
| `skills` | `.agents/skills/**/SKILL.md` | no | how agents should write or search; open `references/` on disk if stuck |
| `inbox` | `inbox/**/*.md` | no | uncompiled captures; triage/ingest only, not canon |
| `docs` | `docs/**/*.md` | no | fleet/eng notes, not table facts |
| `legacy-ss` | `/Users/nick/shattered-sea/wiki/shattered-sea/**` | no | READ-ONLY prior Shattered Sea context (Ingest); never write here |

Dotdirs are not covered by `wiki`. Never write under the legacy path; compile into `campaigns/shattered-sea/`.

New campaign folder `campaigns/<slug>/`: add a same-named collection on that path (`**/*.md`), give it collection context, then `./scripts/qmd-refresh`. Keep `wiki` as hubs/lexicon/templates only.

### Shattered Sea session evidence

Use `-c shattered-sea` for reports and recaps under
`campaigns/shattered-sea/sessions/<NN>/`, linked from
`[[campaigns/shattered-sea/sessions/00 Sessions]]`. Transcripts are not indexed;
open a known `session-transcript*.md` path directly. The live-vault copies are
the canonical session records; `legacy-ss` is prior non-session context only
when an older lookup is needed.

## Protocol (stop when answered)

### 1. Known path or wikilink
```bash
./scripts/qmd get "qmd://wiki/00-Home.md" --full
./scripts/qmd get "qmd://shattered-sea/hot.md" --full
./scripts/qmd get "#docid" --full
```

### 2. Exact names — BM25
```bash
./scripts/qmd search "Pearl of Souls" -c shattered-sea -n 5
./scripts/qmd search "house tone" -c wiki -n 5
./scripts/qmd search "theatre of the mind" -c skills -n 5
./scripts/qmd search "Pearl of Souls" -c legacy-ss -n 5
```

### 3. Conceptual — hybrid (write intent yourself)
```bash
./scripts/qmd query $'intent: Find the campaign hub index, not templates.\nlex: campaigns hub index\nvec: list of active D&D campaigns in the wiki' -c wiki -n 5
```

### 4. Unsure which collection
Omit `-c` for compiled facts (`shattered-sea` + `wiki`). Add `-c skills` for procedure. Add `-c inbox` / `-c docs` / `-c legacy-ss` only when that corpus is in play.

Then:
```bash
./scripts/qmd multi-get "#abc123,#def456" --format md
```

## After writes

Do not run `qmd update` / `embed` yourself. Session-start and post-write hooks, plus `./scripts/after-write`, refresh the index in the background via `./scripts/qmd-refresh`.

Path-scoped commit/push: `./scripts/after-write "why" -- path1 [path2…]`.

If search looks stale, wait a few seconds or run `./scripts/qmd-refresh` again. Vault markdown is source of truth; a failed refresh does not undo a write.

## MCP (optional)

From the vault root: `./scripts/qmd mcp` (stdio) or `./scripts/qmd mcp --http`. See `.agents/skills/qmd/references/mcp-setup.md`.
Grok Bots should prefer CLI via Shell on macbook.lan with cwd = vault root.

## Pitfalls

- Do not invent canon when search returns nothing — say so.
- Do not answer from snippets alone.
- Campaign facts: `-c shattered-sea`. Hubs/lexicon/templates: `-c wiki`. Procedure: `-c skills`. Prior Shattered Sea: `-c legacy-ss` only (read-only). Inbox and docs are not canon.
- Never paste WotC proprietary book text; follow [[AGENTS]].
