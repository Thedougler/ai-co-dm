# Oh My Pi — ai-co-dm

Fleet wiring for agents running this repository through **oh-my-pi (omp)**. Vault schema, canon ownership, note format, skills, and write contract live in [[AGENTS]]. Load this file when the wake is an omp session or a task delegated through `.omp/agents/`.

**Layers:** [[AGENTS]] = vault contract · this file = omp runtime and delegation · `.agents/skills/` = reusable procedures · `.omp/agents/` = named omp specialists.

## Boot

1. Read [[AGENTS]], [[00 Home]], and [[campaigns/shattered-sea/hot]]. Then read this file. Do not scan the whole vault.
2. Use `./scripts/qmd` through `qmd-retrieval` before answering from or changing campaign facts. Treat snippets as leads, not canon.
3. Load the matching `.agents/skills/<name>/SKILL.md` before craft, ingest, audit, or process work. Read references only when that skill requires them.
4. Find the existing entity with qmd before creating a note. Patch the owner page when one exists; create only when no suitable owner exists.

Completion: the task has the smallest grounded file set, the applicable skill is loaded, and no campaign fact was inferred from an unverified snippet.

## Omp surface

- Root [[AGENTS]] remains the authority. This file adds omp-specific routing; it does not restate the vault schema.
- `.omp/agents/<name>.md` is the omp subagent definition. Keep names lowercase kebab-case, descriptions concrete, and tool grants narrow.
- `.agents/skills/` is the shared skill root for this repo. A matching skill is the procedure; the subagent file only supplies the omp role and handoff.
- `.omp/agents/agentic-system-designer.md` owns the correction-drain and measured fleet-improvement loop through `.agents/skills/agentic-system-designer/SKILL.md`.
- `.omp/agents/copy-writer.md` owns table-ready D&D copy through `.agents/skills/copy-writer/SKILL.md`; it does not invent canon, monster math, or ingest sources.

## Delegation

- Keep the outcome with the parent agent. Delegate only a genuinely independent slice with a named target, allowed paths, source context, and observable completion test.
- Keep shared note bodies sequential. Two agents must not edit the same note or the same `[!narration]` block concurrently.
- A delegated task skips formatters, linters, and project-wide test suites. The parent runs targeted verification after all edits land.
- Use the existing named specialist when its boundary matches. Do not create a second role for a skill already covered by `.omp/agents/` or `.agents/skills/`.
- Pass findings back as a short landing beacon: changed paths, result, evidence, and any unresolved gate. No ack-only wake.

## Writes and landing

- Read the relevant owner, template, and nearby index before editing. Keep campaign truth in `campaigns/`; keep process in skills or agent guides.
- Use `obsidian-markdown` for every vault Markdown write. Keep wikilinks internal, callouts intentional, and player-facing narration free of secrets, DCs, and unearned names.
- Make surgical edits. Preserve unrelated user work. Do not create parallel `wiki/`, `concepts/`, or `sources/` trees.
- Finish every changed path with `./scripts/after-write "short why" -- path1 [path2 …]`. Name only the paths changed in this task. Do not use bare `git commit`, `git push`, or `git add -A`.
- A task is not landed while it contains a placeholder, silent canon contradiction, missing index integration, or an unrun after-write.

## Verification

1. Re-read every changed file and inspect the exact diff surface.
2. Run the narrowest applicable repository check, such as `./scripts/lint-obsidian-markdown` for Markdown changes or `./scripts/qmd` for retrieval-dependent work. Do not substitute a full-vault rewrite for a targeted check.
3. For omp context, skill, or agent-definition changes, start a fresh omp session (or `/new`), inspect `/extensions` for Context Files and Skills, and inspect `/agents` for the named specialist. Confirm the expected path is active rather than shadowed.
4. Report only checks actually run, with exact paths and any remaining human gate.

Completion: the intended omp surface is active, the changed files pass the targeted check, and the landing command succeeded for exactly those files.
