---
name: llm-wiki-eval
description: >-
  Evaluate whether the ai-co-dm vault improves grounded retrieval and real work.
  Use for layered quality measurement, bounded pilots, citation/support checks,
  operational health, and continue/pause/redesign decisions; not for hygiene or
  campaign canon QA.
license: MIT
compatibility: Requires qmd-retrieval, read access to the vault, and optional report write access.
metadata:
  adapted_from: po4yka-llm-wiki-skills
  version: "1.0.0-ai-co-dm"
---

# LLM-wiki evaluation

Measure whether this vault helps real work rather than merely accumulating
notes. Evaluate the live ai-co-dm layout and preserve uncertainty; do not turn
evaluation into a second lint checklist or a campaign rewrite.

**Vault:** `/Users/nick/Documents/ai-co-dm`  
**Schema:** `AGENTS.md`  
**Retrieve:** load `qmd-retrieval`, then use `./scripts/qmd` from the vault root
and fetch full documents before scoring claims.

## When to use

- Measure retrieval, grounding, usefulness, freshness, provenance, or security.
- Run a bounded 2–20 question local pilot or compare with-wiki to a real baseline.
- Decide `continue`, `continue with gates`, `pause`, or `redesign`.

Use `wiki-lint` for markdown/inbox/link/index hygiene and `campaign-qa` for
canon contradictions, timelines, and graph integrity. Route tool/CI framework
selection to Ops; do not invent a parallel evaluator or storage tree.

## Local scope and evidence

Read `AGENTS.md`, relevant `campaigns/`, `lexicon/`, `inbox/` evidence, existing
query/eval reports, and the active campaign `hot.md` as needed. Discover notes
with `./scripts/qmd search` or `query` and retrieve them with `get --full` or
`multi-get`; snippets are not evidence. `inbox/` is evidence, not settled canon.

Choose and record one scope: whole vault, campaign, project, recent activity,
pre/post change, or a bounded pilot. Label evidence `local operational` unless
the result is genuinely external; external benchmarks never prove local success.
Record the git/source revision and dataset/qrel revision before comparing runs.

## Procedure

1. **Define the question and risk tier.** State the adoption claim, scope,
   question set, baseline availability, and whether sensitive material is in
   scope. Do not fabricate a baseline.
2. **Build a small evidence set.** Use 2–20 realistic questions when piloting,
   covering lookup, synthesis, provenance, current/stale state, context
   recovery, and output generation where applicable. For each record:

```yaml
id: ""
question: ""
query_type: exact|conceptual|synthesis|multi-hop|recent|sensitive
required_pages: []
required_sources: []
forbidden_sources: []
used_pages: []
used_sources: []
support_level: extracted|inferred|ambiguous|synthesis|unsupported|conflicting
citation_coverage: 0.0
unsupported_claims: 0
rating: useful|partial|miss
risk_tier: low|medium|high|critical
time_saved_estimate: none|small|medium|large
```

3. **Evaluate layers separately.** Report retrieval (hit/recall@k, MRR or
   nDCG when labels exist), grounding (citation coverage, unsupported claims,
   valid support), answer quality (correctness, completeness, actionability),
   usefulness (retrieval hit/reuse, read/write, context recovery, output beyond
   vault), operations (staleness, review backlog, provenance, broken links), and
   security (injection, leakage, forbidden-source use). Never collapse these
   into a vanity note-count score.
4. **Audit grounding.** Split sampled answers into claims; label each as
   source-backed, wiki-backed, inferred, missing, or conflicting. Verify the
   cited note/source exists and supports the claim. Oversample high-risk answers.
   Starting gates are citation coverage `>= .80/.90/.95/.98` for low/medium/high/
   critical risk and unsupported-claim rates `<= .10/.05/.02/0` respectively.
5. **Check the living loop.** Look for evidence of
   `capture -> triage -> ingest -> query -> file-back -> lint -> review -> refresh -> eval`.
   Hand lint findings to `wiki-lint`, graph/canon findings to `campaign-qa`, and
   workflow/structure findings to Organizer rather than re-running their jobs.
6. **Recommend a decision.** Use `continue` only when utility and grounding
   improve without critical security failures; otherwise choose gates, pause, or
   redesign and identify the smallest next measurement.
7. **Report.** On request, write `inbox/eval-YYYY-MM-DD.md` (or a specifically
   approved existing report location), then run
   `./scripts/after-write "skills: evaluate <scope>"`. Never write results to
   `wiki/`, `raw/`, `pages/`, or campaign canon by default.

## Output

```markdown
## Evaluation summary
## Scope and evidence level
## Dataset/source revision
## Layered metrics
## Query test results
## Grounding and citation audit
## Living-wiki loop check
## Operational and security findings
## Failure modes and handoffs
## Continue / pause / redesign decision
## Next measurement date
```

For a pilot also include baseline comparison only when comparable data exists;
otherwise say `baseline unavailable`, plus the rubric and unanswered questions.
Keep failed examples and sensitive findings appropriately redacted. Do not mark
pages trusted, alter canon, expose protected content, or rely solely on an LLM
judge; retain human calibration samples.
