---
type: hub
tags: [docs, presentation]
visibility: dm
---

# Obsidian presentation (ai-co-dm)

Owned by **Wiki-UI**. Agents still follow `obsidian-markdown` + `AGENTS`.

## Primary: information hierarchy

Every wiki note uses the same disclosure bands. Empty sections are deleted, not filled with filler.

| Band | Question it answers | When you read it |
|---|---|---|
| **L0 · At a glance** | What is this *now*? | First 5 seconds |
| **L1 · At the table** | What do I run / say / choose? | While playing or prep-running |
| **L2 · Deep** | Links, bank, history, densify | Only if L0/L1 need support |
| **Constraints** | What must never appear here | Always last, quiet |

**Rules**
1. Higher bands never depend on scrolling past L2.
2. L0 is bullets or one short paragraph — no essays.
3. Player-facing prose lives in `> [!narration]` near the top of L0/L1, never buried.
4. DM truth on session/run surfaces uses open `> [!secret]` / `> [!mechanic]` — never collapsed (`[!…]-`).
5. Complete grammatical sentences on session/run surfaces.
6. Canonical facts stay on owner pages. Session/run notes **embed** combat/item headings (`![[Bloodhawk#Statblock]]`) at the bottom and write scene *procedure* plus default-mode action-card numbers above. Do not retype an owner's full Multiattack/HP table into the card body. Do not dump owner essays.

## Session / run surfaces

`cssclasses: [session-surface]` on session-prep, session logs, run guides, and beat cards.

### Session prep bands
1. **L0 · Dashboard** — stakes, strong start, pressure, spotlights, roster + opening narration
2. **L1 · Scene menu** — playable cards (not a railroad)
3. **L2 · Bank** — floating clues, roster links, parcels
4. **Constraints**

### Scene card stack (inside L1)

Use the **cockpit** in `.agent/skills/run-guide/SKILL.md` (Time + Scene ends when → starting state → Glance → Now → DM truth → action cards → Open → procedure → zones → Be ready for → clock → landing → embeds → exit narration only if the next beat is ready). One downward pass. One *procedure*. Exit does not ask what they do. Do not keep a second Run-now copy. Do not add a separate Ask callout. Do not add a peer round script.

### Session log bands
1. Recap narration
2. **What happened** (L1 record)
3. **Aftermath** (secrets / threads / rewards)
4. **Forward** (next hooks)
5. **Constraints**

### Run guide (L0 control panel)

Glance → live cockpits in play order. Roster = heading embeds. Whole-session secrets/treasure/parachute sit after the live cards. No Scene menu that is only prep-management.

## Entity notes (same bands)

| Type | L0 | L1 | L2 |
|---|---|---|---|
| NPC / PC | Hook + look / player summary | Drive, public vs secret, spotlights | Relationships, resources, appearances |
| Location / Vehicle | At a glance + aspects | Who/connections/hooks | Secrets, mechanics |
| Faction | Public goal | Methods, faces, reach | Secret goal, relations, clocks |
| Front | Impending doom | Dangers, grim portents, stakes | Cast |
| Quest | Objective + stakes | Nodes, conclusions→clues | Rewards, linked |
| Encounter | Live card | Setup, forces, objectives | Twists, treasure, ran-in |
| Monster | Statblock + narration + at-the-table | Role/dials, signature moves | Terrain, loot |
| Item | Look + what it does | Charges/limits | Hooks, provenance |
| Lore | Summary | Known to / table use | Variants, linked |
| Campaign | Premise + table | Current arc + pressure | Indexes |

## Anti-patterns
- Flat heading soup with no L0/L1/L2
- Telegram shorthand on session/run surfaces
- Collapsed callouts on session/run surfaces
- Dumping L2 essays into L0
- CSS/theme polish as a substitute for section order
