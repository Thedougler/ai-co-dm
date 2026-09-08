---
name: wiki-query
description: Answer questions from compiled ai-co-dm notes with wikilink citations and optionally file the answer as a typed note; use for vault-grounded questions.
---

# Wiki query

Answer from the compiled vault, not memory. This skill **must** route discovery and retrieval through `qmd-retrieval` and `./scripts/qmd` from the vault root.

## Retrieve

1. Read `AGENTS.md` and load `qmd-retrieval`.
2. Use `./scripts/qmd search` for exact names or `./scripts/qmd query` for concepts, usually `-c wiki`; include `-c skills` only when the question is about procedure. Use `./scripts/qmd get --full` or `multi-get` for every source that supports the answer. Snippets are leads, not facts.
3. Read relevant notes in full and follow one level of resolved `[[wikilinks]]` when needed. Prefer `campaigns/` and `lexicon/`; use `inbox/` only as clearly labeled evidence, not as settled canon.

## Answer

Synthesize only what retrieved notes support. Cite each note-grounded claim inline as `[[note-slug]]` (or the vault's existing wikilink target). Distinguish canon, implied/uncertain material, disagreement, and gaps. Say plainly when qmd finds no support. Match the response shape to the question: prose for facts, a table for comparisons, numbered steps for procedures, and a structured summary for broad questions. Do not fabricate a source or a resolution.

## Optional file-back

Always offer to file a useful answer. If accepted:

1. Propose a slug and choose the correct existing template/type from `AGENTS.md`.
2. File under `campaigns/<campaign>/` for campaign canon or `lexicon/` for cross-campaign terminology. Include frontmatter (`type`, `campaign` when applicable, `status`, `tags`, `visibility`, `created`, `updated`) and `[[wikilinks]]` to every supporting note. Keep uncertainty visible.
3. Show the complete diff and confirm before writing. Update the nearest `00` hub/index surgically if required.
4. Run `./scripts/after-write "skills: query file-back <slug>"` and report the path and refresh result.

If declined, leave no file and state that the answer was not filed. Never create a parallel knowledge tree or a global generated index.
