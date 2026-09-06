# Skill library (vendor / co-opt)

**Not live skills.** Live procedures stay in `.agent/skills/`. This folder is a downloaded reference library for Skill-Creator / Ops to adapt into ai-co-dm without scaffolding a parallel `wiki/`/`raw/` tree (see live `llm-wiki` skill).

## Sources (downloaded 2026-09-05)

| Dir | Upstream | Why |
|---|---|---|
| `kfchou-wiki-skills/` | https://github.com/kfchou/wiki-skills | Best Karpathy-pattern skill pack: wiki-audit, wiki-merge, wiki-update, wiki-query (plus ingest/lint/init overlap) |
| `Astro-Han-karpathy-llm-wiki/` | https://github.com/Astro-Han/karpathy-llm-wiki | Single installable Agent Skills wiki skill + scripts/references |
| `danjdewhurst-story-skills/` | https://github.com/danjdewhurst/story-skills | Story bible / factions / continuity — co-opt for campaign fiction hygiene |
| `anthropics-skills/` | https://github.com/anthropics/skills | Official examples + skill-creator / doc-coauthoring / pdf |
| `Ar9av-obsidian-wiki/` | https://github.com/Ar9av/obsidian-wiki | Obsidian-oriented Karpathy wiki framework (if present) |
| `NicholasSpisak-second-brain/` | https://github.com/NicholasSpisak/second-brain | Obsidian second-brain patterns (if present) |
| `karpathy-llm-wiki-gist.md` | Karpathy gist | Original pattern essay |

## Co-opt priority (do not blindly install)

1. **wiki-audit** / **wiki-merge** / **wiki-update** / **wiki-query** from kfchou — remap paths to `campaigns/` + `inbox/` + qmd; do not create `wiki/` or `raw/`.
2. Story-skills faction/continuity patterns → possible new live skills after remap.
3. Anthropic `skill-creator` / `doc-coauthoring` / `pdf` — tooling only.
4. Skip duplicating live: wiki-ingest, wiki-lint, llm-wiki, TotM, design skills.

## License

Respect each upstream LICENSE. Prefer MIT/Apache. No WotC book paste into the public vault.
