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

Also load `.agent/skills/qmd/SKILL.md` (bootstrap → `./scripts/qmd skill show`) for CLI details.

## Collections

| Collection | Path | Use when |
|---|---|---|
| `wiki` | vault markdown (hubs, campaigns, lexicon, templates, inbox, README, AGENTS), including imported Shattered Sea session records under `campaigns/shattered-sea/sessions/` | campaign / table / wiki truth and canonical imported session evidence |
| `skills` | `.agent/skills/**/*.md` | how agents should write or search |
| `legacy-ss` | `/Users/nick/shattered-sea/wiki/shattered-sea/**` | READ-ONLY prior Shattered Sea non-session context (Ingest); not the canonical location for imported session records |

Dotdirs are not covered by the `wiki` collection — that is why `skills` is separate. Never write under the legacy path; compile into `campaigns/shattered-sea/`.

### Shattered Sea session evidence

Use `-c wiki` for imported reports and transcripts at
`campaigns/shattered-sea/sessions/<NN>/`, linked from
`[[campaigns/shattered-sea/sessions/00 Sessions]]`. The live-vault copies are
the canonical session records; `legacy-ss` remains read-only prior non-session
context when an older campaign lookup is needed. Only link or claim a transcript
when one is present beside its report.

## Protocol (stop when answered)

### 1. Known path or wikilink
```bash
./scripts/qmd get "qmd://wiki/00-Home.md" --full
./scripts/qmd get "#docid" --full
```

### 2. Exact names — BM25
```bash
./scripts/qmd search "house tone" -c wiki -n 5
./scripts/qmd search "theatre of the mind" -c skills -n 5
./scripts/qmd search "Pearl of Souls" -c legacy-ss -n 5
```

### 3. Conceptual — hybrid (write intent yourself)
```bash
./scripts/qmd query $'intent: Find the campaign hub index, not templates.\nlex: campaigns hub index\nvec: list of active D&D campaigns in the wiki' -c wiki -n 5
```

### 4. Unsure which collection
Omit `-c`, or search both: `-c wiki -c skills`.

Then:
```bash
./scripts/qmd multi-get "#abc123,#def456" --format md
```

## After writes

Prefer `./scripts/after-write "why"` (qmd update + embed + commit/push). Manual fallback:

When you add or edit vault markdown and QMD is available:

```bash
./scripts/qmd update
./scripts/qmd embed -c wiki   # or -c skills if skills changed
```

If refresh fails, keep the markdown write and report QMD status separately. The vault is source of truth.

## MCP (optional)

From the vault root: `./scripts/qmd mcp` (stdio) or `./scripts/qmd mcp --http`. See `.agent/skills/qmd/references/mcp-setup.md`.
Grok Bots should prefer CLI via Shell on macbook.lan with cwd = vault root.

## Pitfalls

- Do not invent canon when search returns nothing — say so.
- Do not answer from snippets alone.
- Prefer the collection row above for live vault facts and imported session evidence; use `-c skills` for procedure and `-c legacy-ss` only for prior non-session Shattered Sea context (read-only).
- Never paste WotC proprietary book text; follow [[AGENTS]].
