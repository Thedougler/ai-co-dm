---
name: cross-linker
description: >-
  Find and conservatively repair missing wikilinks between related ai-co-dm notes. Use when
  asked to connect pages, find missing links, repair orphans, or weave newly filed notes into
  the campaign graph. Report-only scans are allowed; writing requires an explicit repair request.
---

# Cross-Linker

Tighten the vault graph without inventing relationships or rewriting campaign prose. This is
link repair, not duplicate resolution (`wiki-merge`) or MOC/index integration (`wiki-integrate`).

## Scope and registry

Resolve campaign scope from the request and `campaigns/<campaign>/hot.md`. Use `qmd-retrieval` for
named pages; otherwise inspect indexes and frontmatter before bodies. Scan only canonical markdown
under `campaigns/`, plus explicitly named `lexicon/` or `templates/` pages. Skip attachments,
generated output, archives, and inbox scraps. Build a registry from filenames/frontmatter:
`display name -> {path, aliases, type, campaign, tags, summary}`.

## Candidates

Inspect existing `[[wikilinks]]`, then look for exact distinctive titles/aliases in body text that
are not linked, explicit owner references, and broken links resolvable to a known page. Ignore
frontmatter, code blocks, generic words, uncertain partial matches, self-links, and links based
only on shared tags or folder proximity. Apply only high-confidence candidates; report weaker
semantic candidates for review.

## Apply

Before the first write, capture `git status` and keep edits limited to the named campaign pages;
never stage unrelated inbox or canon work. Prefer the shortest unambiguous link and preserve display
text with `[[path|display text]]`. Add one inline link at the first useful mention, or a small
`## Related` list only when the relationship is explicit. Do not copy summaries or add a new
relationship schema. Preserve frontmatter, callouts, and prose.

Run link/frontmatter lint after repairs and finish vault writes with:

```bash
./scripts/after-write "repair missing campaign wikilinks"
```

## Report and handoffs

Report pages scanned, links added, broken links fixed, candidates deferred, and remaining orphans;
explain every deferred inference. `wiki-merge` owns duplicates, `wiki-integrate` owns index/MOC
integration, `wiki-lint` owns report-only hygiene, and `wiki-ingest` owns new source filing.
