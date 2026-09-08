# Karpathy LLM-wiki pattern

Source gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

## Core insight

The wiki is a persistent, compounding artifact. Knowledge is compiled once and kept current — not re-derived on every query.

Human curates sources and asks questions; the LLM maintains the knowledge system. Obsidian is the IDE; the wiki is the codebase.

## Why this beats pure RAG

RAG rediscovers from raw chunks every time. An LLM wiki answers from maintained, cross-linked pages. In ai-co-dm the compiled wiki is `campaigns/` + `lexicon/` + hubs; search is qmd, not a second store.

## Three operations

| Operation | Does | Here |
|---|---|---|
| **Ingest** | Distill sources into wiki pages | Surgical note updates; session log; inbox → file |
| **Query** | Answer from compiled wiki | `qmd-retrieval` |
| **Lint** | Contradictions, orphans, staleness | **Organizer** |

## Do not import

Ignore gist-adjacent tooling fantasies (graph DBs, `~/.obsidian-wiki` multi-vault routers, `concepts/` trees) unless Nick asks. This vault already has schema (AGENTS), search (qmd), and hygiene (Organizer).
