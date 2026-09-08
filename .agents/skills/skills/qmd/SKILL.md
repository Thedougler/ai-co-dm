---
name: qmd
description: Bootstrap QMD search instructions from the installed qmd CLI. Use when users ask to find notes, retrieve documents, inspect a wiki, or answer from indexed local markdown.
license: MIT
compatibility: Requires QMD CLI. Run `./scripts/qmd skill show` from the vault root for version-matched instructions.
allowed-tools: Bash(./scripts/qmd:*), mcp__qmd__*
---

# QMD - Query Markdown Documents

This installed skill is intentionally a small bootstrap so it does not go stale
when the qmd package updates.

Load the full, version-matched QMD instructions from the CLI:

!`./scripts/qmd skill show`

If your agent does not support bang-command expansion, run:

```bash
./scripts/qmd skill show
```

Then follow those instructions. In short: search first, fetch full sources with
`./scripts/qmd get` or `./scripts/qmd multi-get`, and answer from retrieved text rather than snippets.
