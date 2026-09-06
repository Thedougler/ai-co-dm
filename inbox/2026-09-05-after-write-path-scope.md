---
type: lore
campaign: none
status: active
tags: [agents, infra, after-write]
visibility: dm
---

> [!narration] Narration

# After-write path scope (2026-09-05)

Design from **Agentic-System-Designer** (`after-write-path-scope-2026-09-05`). Friction: Visualizer — `git add -A` in `scripts/after-write` scooped parallel WIP (`7f2ddc3` symptom). Fix forward; no history rewrite.

## Contract

```sh
./scripts/after-write "short why" -- path1 [path2…]
```

- Paths required for real commits.
- Only named paths staged/committed.
- Unrelated dirty/staged → **fail closed** (exit 3).
- Ops rare escape: `--allow-unrelated-dirty`.
- qmd update/embed + Mac gate unchanged.
