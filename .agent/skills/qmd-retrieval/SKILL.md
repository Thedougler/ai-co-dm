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

Also load `.agent/skills/qmd/SKILL.md` (bootstrap → `qmd skill show`) for CLI details.

## Collections

| Collection | Path | Use when |
|---|---|---|
| `wiki` | vault markdown (hubs, campaigns, lexicon, templates, inbox, README, AGENTS) | campaign / table / wiki truth |
| `skills` | `.agent/skills/**/*.md` | how agents should write or search |

Dotdirs are not covered by the `wiki` collection — that is why `skills` is separate.

## Protocol (stop when answered)

### 1. Known path or wikilink
```bash
qmd get "qmd://wiki/00-Home.md" --full
qmd get "#docid" --full
```

### 2. Exact names — BM25
```bash
qmd search "house tone" -c wiki -n 5
qmd search "theatre of the mind" -c skills -n 5
```

### 3. Conceptual — hybrid (write intent yourself)
```bash
qmd query $'intent: Find the campaign hub index, not templates.\nlex: campaigns hub index\nvec: list of active D&D campaigns in the wiki' -c wiki -n 5
```

### 4. Unsure which collection
Omit `-c`, or search both: `-c wiki -c skills`.

Then:
```bash
qmd multi-get "#abc123,#def456" --format md
```

## After writes

When you add or edit vault markdown and `qmd` is available:

```bash
qmd update
qmd embed -c wiki   # or -c skills if skills changed
```

If refresh fails, keep the markdown write and report QMD status separately. The vault is source of truth.

## MCP (optional)

From the vault root: `qmd mcp` (stdio) or `qmd mcp --http`. See `.agent/skills/qmd/references/mcp-setup.md`.
Grok Bots should prefer CLI via Shell on macbook.lan with cwd = vault root.

## Pitfalls

- Do not invent canon when search returns nothing — say so.
- Do not answer from snippets alone.
- Prefer `-c wiki` for campaign facts; `-c skills` for procedure.
- Never paste WotC proprietary book text; follow [[AGENTS]].
