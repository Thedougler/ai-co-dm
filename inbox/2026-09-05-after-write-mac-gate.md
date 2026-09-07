---
type: lore
campaign: none
status: active
tags: [agents, infra, after-write]
visibility: dm
---

> [!narration] Narration

# After-write Mac gate (2026-09-05)

Design from **Agentic-System-Designer** (packets `after-write-mac-gate-2026-09-05`, `mac-false-connected-2026-09-05`). Friction: Monster-Brewer / Visualizer — Mac drop or ListMachines false-connected → after-write/qmd fail → commit hygiene skipped.

## Rules (canonical in [[GROK-BOTS]])

1. Vault work **only** on **macbook.lan**. Disconnected **or** connected-but-unreachable → stop after 1–2 attempts; ask Nick to reconnect / Update Grok Bot's Computer.
2. No clone-to-box, no alternate vault host, no push without `./scripts/after-write`.
3. After-write **mandatory**; failed after-write = write not done.
4. `./scripts/qmd` needs Node 26 on the Mac; stderr names that requirement.

## Implementers

- **Ops** — AGENTS + script messages (this note).
- Not a second Node host on the Linux box.
