---
name: wiki-lint
description: >
  Health-check the ai-co-dm LLM wiki: orphans, broken wikilinks, hot drift,
  prep/log mash, missing index links, duplicate entities, inbox rot. Use for
  audit, lint, health check, "what's rotting", or Organizer deep passes.
  Prefer report + propose; auto-fix only safe reversible link/index edits.
  Not for inventing campaign fiction (Co-DM) or redesigning the fleet (Ops).
---

# Wiki lint — ai-co-dm

Surgical health audit. Prefer `./scripts/qmd` + indexes over reading the whole tree.

**Vault:** `/Users/nick/Documents/ai-co-dm`. Schema: [[AGENTS]]. Hygiene owner on schedule: **Organizer**.

Upstream: Tedydev-web/llm-wiki-skills `wiki-lint` + Ar9av consolidate idea (see `UPSTREAM_SKILL.md`, `references/`). Remap away from `wiki/` · `state.json` · 17 generic PKM steps — run the **ai-co-dm checklist** below. Full upstream step list only if Nick asks (`references/audit-steps.md`).

## Checklist (in order)

1. **Inbox rot** — age / unfiled captures under `inbox/` (exclude promoted provenance).
2. **Hot drift** — `campaigns/shattered-sea/hot.md` vs campaign hub pressure/quests.
3. **Broken wikilinks** — targets missing (rg / qmd); fix obvious typos or propose.
4. **Orphans** — notes with no inbound links (exclude hubs/templates/lexicon/skills). Propose link, merge, or prune.
5. **Dupes** — same entity name/`type` near-matches via qmd. Propose survivor path.
6. **Index gaps** — new typed notes not on nearest `00` MOC.
7. **Prep/log mash** — `session-prep` content living in `session` logs or vice versa.
8. **Narration boundary** — `[!narration]` leaking DCs/secrets/unearned names (sample recent).
9. **qmd freshness** — if git moved and index stale, note `./scripts/after-write` / `./scripts/qmd update`.

## Modes

- **Report (default):** short list — finding · path · fix. Quiet if clean (no filler).
- **Safe auto:** missing index one-liners, obvious link repairs, hot refresh when hub clearly drifted. Then `./scripts/after-write "lint: …"`.
- **Propose only:** deletes, renames, campaign splits, mass consolidations — wait for Nick/Co-DM.

## Context discipline

Do not load every page body. Structural checks first (`references/structural-vs-llm-checks.md` mindset). LLM judgment only on contradiction/dupe clusters.

## Fleet handoff

Bottleneck is AGENTS/scripts/qmd/routines/skills → packet **Ops**. Fiction gap → **Co-DM**. Pattern debate → `llm-wiki` skill.
