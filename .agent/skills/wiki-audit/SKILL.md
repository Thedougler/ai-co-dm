---
name: wiki-audit
description: Audit one compiled vault note for citation coverage and claim support; use for factual confidence checks without changing canon.
---

# Wiki audit

Audit exactly one note in `campaigns/` or `lexicon/`. The live schema is `AGENTS.md`; the compiled note is canon and the audit is evidence review, not a rewrite.

## Inputs and evidence

1. Resolve the target by path, slug, or filename with `qmd-retrieval` and `./scripts/qmd`. Read the full note before judging it.
2. Read `AGENTS.md` and the note's frontmatter (`type`, `campaign`, `status`, `visibility`, `sources` when present).
3. Resolve evidence only from the note's cited footnotes, `inbox/` captures, session logs, or a parent evidence note. Do not use general knowledge as support. If evidence is absent, say so.
4. Record the audit date and keep the target note unchanged unless a later, separately confirmed update is requested.

## Phase A — uncited claims

List every non-common-knowledge factual claim that lacks a footnote or an explicit evidence pointer. Report the note line, claim, and the best matching inbox/session/parent source, or `unknown`. Treat implied or uncertain canon as a finding, not as fact.

## Phase B — cited claims

For each footnote or evidence pointer:

- resolve its target with qmd or a direct vault read;
- check that the evidence actually supports the claim at the stated locator;
- label it `supported`, `unsupported`, `partial`, or `source-missing`;
- quote the relevant evidence briefly, or explain the mismatch;
- preserve the note's existing citation style and never invent a locator.

If there are no footnotes, skip verification but still report all Phase A findings. Keep paragraph- or claim-level granularity; do not demand citations for common knowledge.

## Optional strong pass

If the request explicitly asks for strong mode, send the bounded note plus the evidence excerpts to one second agent for an adversarial pass. Do not require or invoke a provider CLI. Keep only new disagreements (overreach, internal contradiction, or cross-note contradiction) and label them as a second-agent signal.

## Report

Always produce a concise report at `inbox/audit-<slug>-<date>.md` when local audit reports are normally gitignored; otherwise write there and tell Organizer to triage it. If the user asked for propose-only, return the same report plan without writing. Use this shape:

```markdown
---
type: lore
status: draft
tags: [audit, maintenance]
visibility: dm
---
# Audit — <slug> — <date>

## Summary
- Note: `campaigns/...` or `lexicon/...`
- Cited claims: N; supported: N; unsupported: N; partial: N; source-missing: N
- Uncited factual claims: N

## Findings
- `L42`: <claim> — evidence: <path/locator or unknown>; disposition: <fix or leave>

## Second-agent review
- Omit unless strong mode; otherwise list disagreements or `none`.
```

Keep reports out of campaign canon. Do not silently patch claims, citations, frontmatter, or indexes. Offer concrete fixes and show a diff before any later write.

## Finish

Run `./scripts/after-write "skills: audit <slug>"` after a report write, and report the path plus counts. If qmd refresh fails, keep the report and state the refresh failure.
