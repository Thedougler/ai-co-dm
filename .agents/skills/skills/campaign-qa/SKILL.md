---
name: campaign-qa
description: >-
  Audit campaign canon and graph integrity in campaigns/<slug>/, with scoped
  contradiction, timeline, duplicate-name, clue-path, and relationship checks.
  Use for campaign QA; use wiki-lint for vault hygiene.
---

# Campaign QA

Find and explain canon/graph problems without inventing content. This is the
campaign integrity pass, not a general wiki-health checklist.

## Procedure

1. **Set scope first.** Ask whether to inspect the full campaign, the current
   campaign chapter/area, or named files. Respect an explicit scope supplied by
   Nick/Co-DM. Use `./scripts/qmd` to locate the campaign hub, `hot.md`, and
   only the requested notes; snippets are leads, so read the source note before
   claiming a finding.
2. **Choose checks.** Run only the requested mode: canon contradictions,
   timeline/state order, confusing duplicate names, clue-path redundancy, or
   relationship/graph integrity. A full pass runs those modes in that order.
   For graph checks, inspect links, orphan-like entities, missing reciprocal or
   required edges, and stale status/type fields in `campaigns/<slug>/`; use the
   AGENTS schema and `type` enum as authority.
3. **Report evidence.** For every finding, cite the exact campaign file and
   field/section, use `[[wiki-links]]` for entity references, assign `Critical`,
   `Warning`, or `Info`, explain the table impact, and propose the smallest fix.
   Group only closely related low-risk findings. Do not infer a contradiction
   from a search snippet or from an intentional DM-only/spoiler section.
4. **Get a decision.** Present findings one at a time or in small batches and
   wait for `fix`, `fix differently`, `skip`, or `not a problem`. Never silently
   rewrite canon. Record skips/dismissals in the QA result so the same issue is
   not repeatedly raised without new evidence.
5. **Repair surgically.** On approval, use qmd to find the existing note and
   update it in place. If a new stub is explicitly approved, use the matching
   `templates/` file and an AGENTS `type`; do not create `wiki/`, `pages/`, or
   `raw/` paths. Re-check the affected links/fields, return changed paths and
   before/after values, then run `./scripts/after-write "skills: campaign QA
   repair for <campaign>"`.

## Boundaries and ownership

- `wiki-lint` owns inbox rot, hot drift, broken-link hygiene, index gaps,
  prep/log mash, narration lint, markdown/statblock checks, and qmd freshness.
  Do not replace or duplicate that checklist; hand hygiene findings to Linter.
- `campaign-qa` owns canon/graph QA and coordinates approved repairs. It does
  not invent NPCs, clues, timelines, or relationships; hand content creation
  to Co-DM and structural redesign to Organizer.
- Read `AGENTS.md` and use `qmd-retrieval`; do not walk or rewrite the whole
  vault, and do not treat `inbox/` captures as campaign canon unless they have
  been ingested and linked.

> **Attribution and license.** Adapted from AntTheLimey/gm-apprentice's
> `campaign-qa` skill under **CC BY-SA 4.0**. Adapted for ai-co-dm by Nick
> Davenock, including path/schema remapping and local ownership boundaries.
> This adapted material remains available under **CC BY-SA 4.0**; see the
> vendor `LICENSE` and `ATTRIBUTION.md` for the license and attribution terms.
