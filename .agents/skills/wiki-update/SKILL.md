---
name: wiki-update
description: Sweep compiled notes for stale or contradictory claims and propose confirmed, sourced updates; use when new evidence changes existing canon.
---

# Wiki update

Update existing notes in `campaigns/` or `lexicon/` only when new evidence, a ruling, or a confirmed correction warrants it. Never invent canon and never overwrite a contradiction silently.

## Find the affected set

1. Start with `qmd-retrieval`; call `./scripts/qmd search` or `./scripts/qmd query` from the vault root. Fetch complete documents with `./scripts/qmd get --full` before making a claim. Do not substitute a second search system.
2. Read `AGENTS.md`, the target note, its campaign `hot.md` when relevant, and the nearest `00` hub/index. Search for the stale or contradicted wording and inbound `[[wikilinks]]` with qmd/`rg`.
3. Use the new evidence from `inbox/`, session logs, parent evidence notes, or an explicit player/Co-DM decision. If support is missing, mark the item unresolved and stop short of canonizing it.

## Propose, confirm, write

For each note, show one small diff before writing:

- **Current:** exact passage and path
- **Proposed:** replacement, deletion, or explicit uncertainty marker
- **Reason:** stale fact, contradiction, or newly confirmed evidence
- **Source:** evidence path, session/date, or decision owner

Ask for confirmation per note. Preserve `created`, `type`, `campaign`, `status`, `visibility`, and existing provenance unless the evidence explicitly changes them. Bump only `updated` when content changes. Never add a link that qmd has not resolved.

## Downstream sweep

Check notes that link to the updated note and every occurrence of a contradicted claim. Flag dependent notes for separate confirmation; do not batch-edit unrelated canon. If a summary or membership changed, edit the nearest `00` hub/index surgically. Do not regenerate a global index.

## After the write

Run `./scripts/after-write "skills: update <slugs>"`. Confirm qmd refresh, changed paths, and any unresolved contradictions. If after-write fails, keep the confirmed markdown changes and report the failure. Do not append dated changelog prose to the note body; use the repository's existing operation-log convention when one is present.
