---
name: wiki-lint
description: >-
  Health-check the ai-co-dm LLM wiki: inbox rot, hot drift, broken wikilinks,
  orphans, dupes, missing index links, prep/log mash, narration leaks, Obsidian markdown anti-patterns, non-Fantasy-Statblocks monster prose. Use for
  audit, lint, health check, "what's rotting", or Linter wakes. Default
  report + propose; auto-fix only safe reversible link/index edits. Not for
  inventing campaign fiction (Co-DM) or redesigning the fleet (Ops).
---

# Wiki lint

Surgical health audit. Prefer `./scripts/qmd` + indexes over reading the whole tree.

**Vault:** `/Users/nick/Documents/ai-co-dm`. Schema: [[AGENTS]]. Checklist owner: **Linter**. Organizer may request a pass; structural doctrine stays with Organizer.

Do **not** run generic PKM 17-step audits, `wiki/.state.json` checks, or `~/.obsidian-wiki` config protocols. Use the checklist below.

## Checklist (in order)

1. **Inbox rot** — unfiled captures under `inbox/`.
2. **Hot drift** — `campaigns/<slug>/hot.md` vs hub pressure/quests (default: shattered-sea).
3. **Broken wikilinks** — missing targets (rg / qmd); fix obvious typos or propose.
4. **Orphans** — no inbound links (exclude hubs/templates/lexicon/skills). Propose link, merge, or prune.
5. **Dupes** — same entity name/`type` near-matches via qmd. Propose survivor path.
6. **Index gaps** — typed notes missing from nearest `00` MOC.
7. **Prep/log mash** — `session-prep` living in `session` (or reverse).
8. **Narration boundary** — `[!narration]` leaking DCs/secrets/unearned names (sample recent). Also covered by `./scripts/lint-obsidian-markdown` (`dc_in_narration`).
9. **Obsidian markdown** — run `./scripts/lint-obsidian-markdown`. FAIL = in-vault markdown links, DC-in-narration, forbidden `wiki/`·`concepts/`·`sources/`. Warn = title-only / missing frontmatter (`--strict` to fail). Skill: `obsidian-markdown`.
9b. **Literal `\n` in session/beat bodies** — run `./scripts/lint-literal-newlines`. FAIL = backslash-n in prose outside YAML/fences (statblocks OK). Fix → **Wiki-UI**; presentation gates → **Skill-Creator** (`obsidian-markdown`).
10. **Fat notes (split candidates)** — run `./scripts/lint-fat-notes` (report only). Propose atomic splits; do not auto-split.
11. **Monster statblocks** — run `./scripts/lint-statblocks`. FAIL = prose/house AC·HP without Fantasy Statblocks fence, or fence not first after frontmatter. Warn = stub with no block. Convert via **Homebrewer**; do not invent CR math in lint.
12. **qmd freshness** — if git moved and index stale, note `./scripts/after-write` / `./scripts/qmd update`.

Structural checks first. LLM judgment only on contradiction/dupe clusters — do not load every page body.

## Modes

- **Report (default):** finding · path · fix. Quiet if clean.
- **Safe auto:** missing index one-liners, obvious link repairs, hot refresh when hub clearly drifted → `./scripts/after-write "lint: …"`.
- **Propose only:** deletes, renames, campaign splits, mass consolidations — wait for Nick/Co-DM.

## Handoffs

AGENTS/scripts/qmd/routines/skills bottleneck → **Ops**. Fiction gap → **Co-DM**. Pattern debate → `llm-wiki`.
