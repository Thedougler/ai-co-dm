---
type: hub
tags: [templates]
---

# Templates

Copy one (or use Obsidian Templates → folder `templates/`). One note per entity. Delete unused sections rather than leaving filler. Campaign notes are facts; design decisions and process stay in skills / [[AGENTS]].

Most templates use disclosure bands — see [[docs/obsidian-presentation]]:

1. **L0 · At a glance** — first five seconds
2. **L1 · At the table** — what you run or choose
3. **L2 · Deep** — bank, links, densify
4. **Constraints** — what never belongs here

**Exceptions** — these templates use purpose-driven sections instead of L0/L1/L2:

- **NPC:** [[templates/NPC]] — at-a-glance table, DM thesis, Running section, History, Relationships table, Combat (exemplar: [[campaigns/shattered-sea/npcs/Aruhe - Hinewai]]).
- **Location:** [[templates/Location]] (site: [[campaigns/shattered-sea/locations/Aruhe - Clear Lake]]; region: [[campaigns/shattered-sea/locations/Aruhe - Hungry Isle]]).
- **Monster:** [[templates/Monster]] — `## Behavior` + `## Tactics` with bold-label paragraphs (exemplar: [[campaigns/shattered-sea/monsters/Aruhe - Bear-Elk]]).
- **Item:** [[templates/Item]] — flat: image → narration → type-line → mechanics. No L0/L1/L2. Complex items add flat sections below mechanics when needed (exemplar: [[campaigns/shattered-sea/items/Aruhe - Ghost Plum]]).

## Core

- [[templates/Campaign]]
- [[templates/Session prep]]
- [[templates/Session log]]
- [[templates/PC]]
- [[templates/NPC]]
- [[templates/Location]]
- [[templates/Vehicle]]
- [[templates/Faction]]
- [[templates/Quest]]

## Pressure & play

- [[templates/Front]]
- [[templates/Encounter]]
- [[templates/Monster]]
- [[templates/Item]]
- [[templates/Lore]]

## Rules

See [[AGENTS]] — `visibility`, no WotC paste, no prep/log mash. Specs that seeded these: `inbox/template-specs/`.

## Narration block

Owner pages keep `> [!narration] Narration` where the template places it. Player-safe only — no DCs, HP, secrets, or unearned names. Leave empty until TotM fill. NPC dialogue uses `Narration — speaker`.

Session/run beats use **two passes**: mechanical cockpit plus empty titled stubs (`Initial Narration` mandatory, then per zone, per clock tick, landing / variants, per roster embed), then TotM fill (TUI copy-writer). The cockpit must name actionable scene stock before fill: visible hazards, loot, monsters, routes, clues, lore signs, and world details players can act on now. Use descriptive, specific, plain language everywhere; no opaque internal labels. Do not put callouts inside table cells. See `run-guide` and [[templates/Encounter]].

Different things need distinct text and distinct media. Reuse existing prose,
art, tokens, or battlemaps only for the exact same owner/site/moment; otherwise
use them as vibe reference and make or request a new asset.

## Presentation

- Session/run notes: `cssclasses: [session-surface]`, open callouts only, complete grammatical sentences, at-table scan grammar (`obsidian-markdown`).
- Hierarchy doctrine: [[docs/obsidian-presentation]].
