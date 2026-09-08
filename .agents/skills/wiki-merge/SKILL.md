---
name: wiki-merge
description: Merge duplicate campaign notes or split an overloaded note while preserving provenance, links, and nearest indexes; use after a dupe finding.
---

# Wiki merge

Use for deliberate merge or split work on compiled notes under `campaigns/`. Align candidates with `wiki-lint` dupe findings and qmd evidence. These operations rewrite links or remove notes, so never make them automatic.

## Orient

1. Read `AGENTS.md`, the relevant campaign `hot.md`, nearest `00` hub/index, and the full candidate notes.
2. Use `./scripts/qmd` through `qmd-retrieval` to confirm both notes describe the same entity or that one note contains distinct senses.
3. Inventory inbound `[[wikilinks]]` with `rg` across markdown, including `campaigns/`, `lexicon/`, and `inbox/`. Preserve citation and frontmatter provenance.

## Merge

1. Propose a survivor and loser, with evidence: specificity, completeness, inbound links, and canon status.
2. Show the proposed survivor body and frontmatter. Union sources/evidence, deduplicate claims, retain the earliest `created`, and bump `updated`.
3. Ask for confirmation before writing the fold, any link rewrite, or deletion.
4. After confirmation, write the survivor, rewrite every inbound `[[loser]]` to `[[survivor]]` with surrounding wording fixed, and update the nearest `00` hub/index surgically if its entry changed.
5. Ask again immediately before deleting the loser. Never leave a redirect stub unless explicitly requested.
6. Sweep with qmd and `rg`; there must be no remaining loser links and every survivor link must resolve.

## Split

1. Describe each distinct sense and propose qualified slugs. Decide whether the original slug is retired or remains the primary sense.
2. Show each new note with the matching `type`, `campaign`, `status`, `visibility`, sources/evidence, and dates. Carry only claims and citations belonging to that sense.
3. Confirm before writing. Repoint each inbound link by context, not blanket replacement; show ambiguous links for a decision.
4. Update the nearest `00` hub/index by hand, then confirm before deleting or trimming the original.
5. Sweep for dangling links and confirm each new link resolves.

## Safety and finish

- No invented canon: conflicting claims become an explicit open question or are escalated to Co-DM.
- Do not rewrite unrelated notes or regenerate a global index.
- Keep the operation surgical and reversible until the final deletion confirmation.
- Run `./scripts/after-write "skills: merge/split <slugs>"` after all writes and report changed paths, link counts, and unresolved decisions.
