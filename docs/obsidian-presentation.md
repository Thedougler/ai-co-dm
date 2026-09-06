---
type: hub
tags: [docs, presentation]
visibility: dm
---

# Obsidian presentation (ai-co-dm)

Human-facing design notes. Agents still follow `obsidian-markdown` + `AGENTS`. Owned by **Wiki-UI**.

## Feel
Professional wiki site: clear measure, quiet chrome, semantic colour — not a decorative theme. D&D wiki inspiration pending Researcher brief.

## CSS
Snippet `.obsidian/snippets/ai-co-dm-wiki.css` (enabled in Appearance):
- Reading measure ~72ch (Wikimedia / MDN-style measure)
- House callouts: `narration` · `mechanic` · `secret`
- `cssclasses: [session-surface]` → callout bodies never stay hidden

Reload snippets in Obsidian if colours do not appear: Settings → Appearance → CSS snippets.

## Session / run surfaces
- Use `cssclasses: [session-surface]` on session-prep, session logs, and run guides.
- **Never** collapsed callouts (`[!…]-`) on these notes — all DM info stays visible.
- Prefer open `> [!secret]` for DM truth; `> [!mechanic]` for procedure/numbers; `> [!narration]` for table-facing prose.

## Scene card section order (scan)
1. Title + owner link (+ Key / Clock when used)
2. Live when · Pressure/stakes · Spotlight
3. Narration (player surface)
4. On the table
5. DM truth (open — never folded)
6. Procedure
7. If violence / If ignored
8. Advance when

Session prep template mirrors this under **Scene menu** after a **Dashboard**; bank (clues, roster links) sits below.

## Spacing & hierarchy (session notes)

Session prep / log use explicit bands:

| Band | Role |
|---|---|
| **L0 · Dashboard** | One-screen glance before play |
| **L1 · Scene menu** | Playable cards (H3 panels, `---` between) |
| **L2 · Bank** | Drop-in secrets / roster links |
| **Constraints** | Anti-patterns (quiet) |

Each L1 card stacks: header fields → narration → on the table → open `secret` → open `mechanic` → branch lines → advance.

CSS gives H3 scene titles a left-accent panel, extra margin between H2 bands, and looser list/paragraph rhythm on `session-surface`.

## Prose on session / run surfaces

Every DM-facing line on a run guide, session prep, or beat card must be a **complete grammatical sentence** (or a short list of complete sentences). Telegram shorthand, letter-code-only clauses, and slash-stacks that need a decoder are presentation fails.

Allowed: `[[Wikilinks]]`, bold field labels, and compact tables whose cells are still readable sentences or clear sentence fragments that include the subject.

Bad: `field LR + watches; after LR ask if ate → warn`  
Good: `After the Long Rest, ask whether anyone ate; warn once; if they went without food that day, they take 1 exhaustion next.`

