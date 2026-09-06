---
name: wiki-integrate
description: >-
  Connect an existing ai-co-dm campaign or lexicon note to its nearest index and
  genuine related notes. Use after a direct creation or substantial revision.
  Complements wiki-ingest, wiki-update, and wiki-merge; it adds graph edges and
  index entries, not new canon. Use qmd before writing and after-write when done.
---

# Wiki integrate

Weave one already-compiled note into the local knowledge graph with the smallest
useful set of index entries and bidirectional links.

**Vault:** `/Users/nick/Documents/ai-co-dm`  
**Contract:** `AGENTS.md`  
**Find:** `qmd-retrieval` via `./scripts/qmd`  
**After write:** `./scripts/after-write "integrate: <short reason>"`

## Boundaries

- Target one existing compiled page under `campaigns/` or `lexicon/`; do not
  integrate an inbox capture, raw evidence, template, archive, or attachment.
- Read `AGENTS.md`, the target with `qmd get --full`, its campaign `hot.md` when
  relevant, and the nearest `00` hub/index. Never invent a generic `wiki/` or
  `raw/` tree.
- `wiki-ingest` handles source-to-note compilation. `wiki-update` handles
  evidence-backed claim corrections. `wiki-merge` handles duplicate/split note
  decisions. This skill only connects an existing page; do not substitute it for
  those workflows.
- Do not duplicate `llm-wiki` doctrine, `wiki-lint` hygiene, or Organizer fleet
  procedure. Do not rewrite canon or perform a global index regeneration.

## Procedure

1. **Validate the target.** Confirm the path is in `campaigns/` or `lexicon/`,
   fetch the full note with qmd, and identify its `type`, title, topic, existing
   wikilinks, campaign, and provenance. Preserve frontmatter; if required AGENTS
   fields are missing, report the issue rather than silently redesigning the note.
2. **Update the nearest index surgically.** Read the relevant campaign `00` hub,
   typed index, or lexicon MOC. Add one concise entry only if the target is
   absent and belongs there; correct a materially stale entry only when necessary.
   Do not create a global `index.md`, `wiki/`, or `raw/` artifact.
3. **Select genuine neighbors.** Use qmd/indexes to choose roughly 3–8 plausible
   candidates, then read each candidate in full. Keep only real relationships:
   shared entity/arc, dependency, direct contrast, or a reader-useful handoff.
   Keyword coincidence is not enough. Exclude blacklisted/archive/template paths.
4. **Add graph edges.** Add the target link to each confirmed candidate where it
   reads naturally, and each candidate link to the target where it reads
   naturally. Add only the new wikilink; do not restructure bodies or rewrite
   claims. Update `updated` only on pages actually changed, leaving all other
   frontmatter and provenance intact.
5. **Persist and verify.** Run `./scripts/after-write` with a short reason.
   Report whether the nearest index changed, links added in each direction, and
   candidates ruled out with brief reasons. If after-write fails, report it while
   preserving confirmed edits.

## Completion check

- [ ] Exactly one compiled target was integrated.
- [ ] No `wiki/`, `raw/`, inbox, archive, or generic global index was created.
- [ ] Index change is nearest-hub and surgical, if any.
- [ ] Every added backlink reflects a genuine relationship and resolves.
- [ ] Candidate page edits are limited to a new wikilink plus `updated` when required.
- [ ] `after-write` ran (or its failure is reported).
