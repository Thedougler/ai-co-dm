---
type: inbox
status: draft
visibility: dm
tags: [inbox, skills, port, campaign-os]
source: researcher-briefing-2026-09-05
---

# D&D skills port inventory (2026-09-05)

Researcher inventory for Team-Leader. Nick chose: file this note + port the full ranked shortlist over time.

Primary briefing: Researcher → Team-Leader (same day), task `search my other dnd related github repos`.

## Answer pattern

Mine Nick’s own Campaign OS stack first — not random open-web packs. Port surgically into `.agent/skills/`. Prefer **dnd-skills** (public, newest) over older duplicates. Strip Shattered-Sea path assumptions, `CLAUDE.md` / `sea` CLI / Calveno hardcodes; adapt to ai-co-dm `AGENTS.md` + `templates/`.

## Source repos (ranked)

| # | Repo | Visibility | Role |
|---|---|---|---|
| 1 | [Thedougler/dnd-skills](https://github.com/Thedougler/dnd-skills) | public | Primary port source — Campaign OS craft skills |
| 2 | [Thedougler/shattered-sea-wiki](https://github.com/Thedougler/shattered-sea-wiki) | public | prep-* family, session-recap, sandbox-narrative, cross-linker |
| 3 | [Thedougler/shattered-sea-campaign-os](https://github.com/Thedougler/shattered-sea-campaign-os) | private | wiki-dedup, reconciling-session-evidence, writing-player-prose |
| 4 | [Thedougler/campaign-os](https://github.com/Thedougler/campaign-os) | private | travel-events, world-update, recap-writer, content-type-scaffold |
| 5 | [Thedougler/dnd-wiki](https://github.com/Thedougler/dnd-wiki) | private | world-tick + extra templates |

Also seen (lower priority): `agent-skills` (mirror of TTRPG + Expo/job noise), `overture` (DM scene toolkit), `dnd-site` / `shattered-sea-site` (sites, not skills).

## Already in ai-co-dm — skip re-port

Do not duplicate these existing `.agent/skills/`:

- `theatre-of-the-mind`
- `llm-wiki`, `llm-wiki-eval`
- wiki ops: `wiki-ingest`, `wiki-query`, `wiki-lint`, `wiki-update`, `wiki-triage`, `wiki-crystallize`, `wiki-integrate`, `wiki-merge`, `wiki-audit`
- `qmd`, `qmd-retrieval`
- `session-beats`, `session-wrapup`, `session-transcript-ingest`
- design: `dungeon-design`, `place-design`, `npc-design`, `vehicle-design`, `dnd-5e-magic-item-design`, `homebrew-monsters-5e`, `campaign-qa`
- `obsidian-markdown`, `defuddle`

## Ranked shortlist to port (full)

| # | Source skill | Best repo | Suggested local slug | Fit |
|---|---|---|---|---|
| 1 | `writing-traps-trials` | dnd-skills | `traps-trials` | Hazard/trap/puzzle craft — no ai-co-dm skill |
| 2 | `writing-narrative-islands` + `prep-situation` | dnd-skills / shattered-sea-wiki | `narrative-islands` | Fronts & situation topology; Front template exists, skill does not |
| 3 | `campaign-planning` | dnd-skills | `campaign-planning` | Season/horizon/contract before prep |
| 4 | `prep-faction` + `world-update` / `world-tick` | ssw / campaign-os / dnd-wiki | `faction-prep`, `world-tick` | Faction clocks + offscreen advancement |
| 5 | `session-recap` / `recap-writer` | ssw / campaign-os | `session-recap` | Post-session cascade beyond session-wrapup |
| 6 | `fleshing-out-content` | dnd-skills | `flesh-out` | DM facts before TotM — pairs with Writing-Evaluator / Visualizer |
| 7 | `writing-cold-opens` | dnd-skills | `cold-opens` | Borrowed-POV openers |
| 8 | `writing-session-adventures` / `prep-session` | dnd-skills / ssw | `run-guide` | At-table run guide assembly |
| 9 | `cross-linker` | ssw / campaign-os | `cross-linker` | Orphan/deadend link hygiene |
| 10 | `travel-events` | campaign-os | `travel-events` | Journey design (not random encounters) |
| 11 | `prep-encounter` | ssw | `encounter-prep` | Encounter design skill gap |
| 12 | `player-character-interview` | dnd-skills | `pc-interview` | Session-zero PC pages |
| 13 | `sandbox-narrative` | ssw | `sandbox-narrative` | Agency / anti-rail doctrine |
| 14 | `visual-aids` | dnd-skills | `visual-aids` | Identity vs illustration assets |
| 15 | `tag-taxonomy` | dnd-skills | `tag-taxonomy` | Controlled tags — rewrite vocabulary for ai-co-dm |
| 16 | `decomposing-campaign-content` | dnd-skills | `decompose-content` | Multi-owner routing (ASD / Skill-Creator) |
| 17 | `reconciling-session-evidence` | ss-campaign-os | `reconcile-session` | Claim ledger after transcript ingest |
| 18 | `writing-items` | dnd-skills | (merge) | Diff/merge vs existing `dnd-5e-magic-item-design` — do not double |

## What not to take

- Live audio / table stack: `live-co-dm`, `live-transcription`, voice profiles — unless Nick wants table tooling now
- Expo / job / OpenRouter / Supabase skills from `agent-skills`
- Duplicate beat composers (`writing-*-beats`) until audited against existing `session-beats`
- Shattered-Sea-only paths, CLAUDE.md, sea CLI, Calveno run-guide hardcodes
- Proprietary WotC book paste if any slipped into references

## Optional template extras

ai-co-dm already has the core typed set under `templates/`. From **dnd-wiki/templates**, only if Nick wants those kinds: building, deity, event, chapter, crew-character, campaign-timeline.

## Port discipline

1. Prefer `dnd-skills` copy when the same skill exists in multiple repos.
2. Adapt paths to ai-co-dm; drop campaign-specific taxonomy/motif tags until rewritten.
3. Skill-Creator / Ops own the actual ports over time; this note is the durable backlog.
4. After each port: wire AGENTS.md / agent profiles as needed; commit + push.

## Provenance

- Researcher inventory + Team-Leader brief: 2026-09-05
- Nick decision (via Team-Leader packet `skill-inventory-inbox-2026-09-05`): file inbox + port full shortlist over time
