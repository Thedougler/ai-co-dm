---
name: faction-prep
description: >
  Create or expand a runnable faction note in an ai-co-dm campaign. Triggers: "create a page
  for [faction]", "detail [faction]", "who runs [organization]". Checks index.md for existing
  stubs before creating, and decides whether the faction warrants a clock in hot.md. Full trigger
  list in the skill body.
---


## When to use

## Faction Page Structure

**Frontmatter:** universal/entity fields auto-fill. Author the domain values: `status` (`active | dormant | dissolved`) and a `summary` of 2 sentences (what they want + how they operate).

**Required body sections:**

- **Agenda** — what they are pursuing right now, not just their long-term goal. A
  vector, not a state.
- **Membership** — who belongs, how they're organized, hierarchy shape
- **Methods** — how they operate (coercion, trade, information, violence, politics)
- **Public Face** — what common knowledge says about them (the cover story)
- **Clock** — if active: name, segments (4 or 6), trigger condition, consequence at fill

**Clock decision rule:** If the faction has an agenda that advances independently of the
party, it gets a clock in `hot.md`. Add it there after writing the page.

---

## Filing

- Page path: `campaigns/<slug>/factions/<Name>.md`
- Add to `campaigns/<slug>/factions/00 Factions.md` under `## entities/factions`
- If faction gets a clock: add entry to `hot.md` faction clocks block
- Add reciprocal links to all referenced entities

Load `obsidian-markdown` before writing any prose. **DM-facing reference** throughout — all
faction content is DM-only operational reference.


## Sibling boundaries

Use `npc-design` for faction faces, `narrative-islands` for competing forces, and `world-tick` for reviewed off-screen advancement. Do not roll or canonize a future move during faction prep. Run `./scripts/after-write` after vault writes.
