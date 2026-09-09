# Measures (Agentic-System-Designer)

Objective numbers already in this vault. Pick **one** per item. Do not invent a metrics store or a parallel eval tree.

Forward progress is a **better number**, or the same number at **lower always-on tokens**.

## Corrections (every drain)

| Measure | How | Forward |
|---|---|---|
| Open entries | Count `**status:** open` in [[user-corrections]] | Down |
| Class held | That entry’s **count:** after a **Fix:** | No new increment. A later increment means the class is _red_ |

## Token (always-on and skills)

| Measure | How | Forward |
|---|---|---|
| Always-on contract | `wc -c AGENTS.md` (and `GROK-BOTS.md` only if that file is in scope) | Down or flat while a correction closes |
| Skill body | `wc -l` on the `SKILL.md` you edit | Down or flat unless a missing *step* was added |
| Duplicate homes | Same instruction in two agent-facing files | One home (`writing-for-agents`) |

Prefer cutting always-loaded [[AGENTS]] lines over adding a second copy of a rule.

## Effectiveness (wiki)

Use existing scripts and skills. One command per wake unless Nick asked for a pilot.

| Measure | How | Forward |
|---|---|---|
| Obsidian markdown | `./scripts/lint-obsidian-markdown` FAIL count | Down |
| Literal newlines | `./scripts/lint-literal-newlines` FAIL count | Down |
| Statblocks | `./scripts/lint-statblocks` FAIL count | Down |
| Retrieval | `./scripts/qmd search "<named entity>" -n 5` — hit at rank 1 | Hit @1 for the name you claimed to fix |
| Usefulness / grounding | skill `llm-wiki-eval` (bounded 2–20 questions) | `continue`, not `pause` / `redesign` |

`llm-wiki-eval` is **not** the weekday default. Run it when Nick asks, or after a large ingest. Hygiene checklists stay `wiki-lint`; canon graph stays `campaign-qa`.

## Recording

On the Log **Fix:** line (and the commit why):

`**Fix:** path — what changed. Measure: <name> <before> → <after>.`
