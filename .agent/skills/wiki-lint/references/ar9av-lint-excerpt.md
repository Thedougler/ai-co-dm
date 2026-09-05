---
name: wiki-lint
description: >
  Audit and maintain the health of the Obsidian wiki. Use this skill when the user wants to check their
  wiki for issues, find orphaned pages, detect contradictions, identify stale content, fix broken wikilinks,
  or perform general maintenance on their knowledge base. Also triggers on "clean up the wiki",
  "what needs fixing", "audit my notes", or "wiki health check". Add --consolidate to switch from
  report-only to act-and-report mode (the "dream cycle"): fixes broken links, adds missing cross-references
  for orphans, corrects lifecycle states, demotes stale peripheral pages, normalizes tag aliases, and adds
  contradiction callouts — all with a dry-run preview and explicit user confirmation before any writes.
---

# Wiki Lint — Health Audit

You are performing a health check on an Obsidian wiki. Your goal is to find and fix structural issues that degrade the wiki's value over time.

**Before scanning anything:** follow the Retrieval Primitives table in `llm-wiki/SKILL.md`. Prefer frontmatter-scoped greps and section-anchored reads over full-page reads. On a large vault, blindly reading every page to lint it is exactly what this framework is built to avoid.

## Before You Start

**Writing profile:** Before drafting or rewriting natural-language Markdown, read and apply the `Writing Profile Resolution` section in `llm-wiki/SKILL.md`. Framework schema, provenance, safety, and operation-specific requirements take precedence.
Apply `WRITING.md` preferences only to generated consolidation reports; deterministic findings and fixes keep their existing formats.

1. **Resolve config** — follow the Config Resolution Protocol in `llm-wiki/SKILL.md` (inline `@name` override → walk up CWD for `.env` → global config → prompt setup). This gives `OBSIDIAN_VAULT_PATH` plus any `OBSIDIAN_ALLOWED_LIFECYCLES`, `OBSIDIAN_ALLOWED_RELATIONSHIP_TYPES`, `OBSIDIAN_REQUIRED_TRUST_FIELDS`, and `OBSIDIAN_SCHEMA_SOURCE` values.
2. **Read owner rules** — if `$OBSIDIAN_VAULT_PATH/AGENTS.md` exists, read it before interpreting any schema. Owner rules override framework defaults.
3. **Form the effective schema** — record the schema source locator plus effective required/optional frontmatter, lifecycle values, relationship types, and provenance markers. Framework values are defaults; preserve owner extensions and relaxed requiredness exactly. Never coerce an owner type to a framework type.
4. Read `index.md` for the full page inventory
5. Read `log.md` for recent activity context

Pass the effective schema to deterministic checks explicitly. For example, add each owner extension with `--allow-lifecycle` / `--allow-relationship-type`, replace trust requiredness with repeatable `--required-trust-field`, and identify the authority with `--schema-source "$OBSIDIAN_VAULT_PATH/AGENTS.md"`. The JSON report's `schema` block must match the schema you formed before findings are accepted.

Schema precedence is CLI flags > resolved environment/config values > framework defaults; lifecycle and relationship extensions remain additive. Strip every override before use. An explicitly configured empty or whitespace-only value—and any empty comma-separated list entry—fails closed; never treat it as a valid lifecycle, relationship type, required field, or authority locator. Remove the variable instead when defaults are intended.

## Lint Checks

Run these checks in order. Report findings as you go.

**Scope:** skip `_archives/`, `_raw/`, `_readouts/`, and `.obsidian/` in every check. These hold frozen snapshots, unprocessed staging drafts, and derived readouts (saved by `wiki-narrate`) — they are not knowledge-graph pages, so orphan, frontmatter, and link checks don't apply to them.

### 1. Orphaned Pages

Find pages with zero incoming wikilinks. These are knowledge islands that nothing connects to.

**How to check:**
- Glob all `.md` files in the vault
- For each page, Grep the rest of the vault for `[[page-name]]` references
- Pages with zero incoming links (except `index.md` and `log.md`) are orphans

**How to fix:**
- Identify which existing pages should link to the orphan
- Add wikilinks in appropriate sections

### 2. Broken Wikilinks

Find `[[wikilinks]]` that point to pages that don't exist.

**How to check:**
- Grep for `\[\[.*?\]\]` across all pages
- Extract the link targets
- Check if a corresponding `.md` file exists

**How to fix:**
- If the target was renamed, update the link
- If the target should exist, create it
- If the link is wrong, remove or correct it

### 3. Missing Frontmatter

Every page should have: title, category, tags, sources, created, updated.

**How to check:**
- Grep frontmatter blocks (scope to `^---` at file heads) instead of reading every page in full
- Flag pages missing required fields

**How to fix:**
- Add missing fields with reasonable defaults

### 3a. Missing Summary (soft warning)

Every page *should* have a `summary:` frontmatter field — 1–2 sentences, ≤200 chars. This is what cheap retrieval (e.g. `wiki-query`'s index-only mode) reads to avoid opening page bodies.
