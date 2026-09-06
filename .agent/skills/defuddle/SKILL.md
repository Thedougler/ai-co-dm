---
name: defuddle
description: >-
  Extract clean markdown from standard web pages for ai-co-dm Ingest.
  Use for URL-based research or article capture before handing the result to wiki-ingest.
  Use WebFetch directly for URLs ending in .md.
---

# Defuddle (web capture for ai-co-dm Ingest)

Use Defuddle CLI to turn a standard web page into readable Markdown, then hand the capture to wiki-ingest.
This is capture only: it does not replace wiki-ingest or wiki-crystallize, and it does not mint canon.

## When to use
- Standard article, documentation, blog, or research URLs.
- URLs ending in .md: use WebFetch directly; do not run Defuddle.
- Table recordings or transcripts: hand off to session-transcript-ingest.

## Procedure
1. Orient with AGENTS.md and use qmd-retrieval / ./scripts/qmd for existing-entity checks.
2. Extract Markdown with --md:

   defuddle parse "https://example.com/article" --md
3. For a durable capture, save the clean result under inbox/web-<slug>.md with source URL and retrieval date.
4. Hand the capture to wiki-ingest for classification, create-vs-update, and filing.
5. Typed notes belong under campaigns/<slug>/ or lexicon/ using templates and obsidian-markdown.
6. Finish vault edits with ./scripts/after-write; qmd is retrieval, not a notes directory.

## Commands

Save clean Markdown to an inbox capture:

   defuddle parse "https://example.com/article" --md -o inbox/web-example-article.md

Read selected metadata:

   defuddle parse "https://example.com/article" -p title
   defuddle parse "https://example.com/article" -p description
   defuddle parse "https://example.com/article" -p domain

Never create wiki/, raw/, sources/, concepts/, entities/, or state.json. Use inbox/ for captures, campaigns/ and lexicon/ for filed notes, and qmd for retrieval.
