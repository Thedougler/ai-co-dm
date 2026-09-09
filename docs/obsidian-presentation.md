---
type: hub
tags: [docs, presentation]
visibility: dm
---

# Obsidian presentation (ai-co-dm)

Owned by **Wiki-UI**. Agents still follow `obsidian-markdown` + [[AGENTS]]. Grok Bots also load [[GROK-BOTS]].

## Primary: information hierarchy

Most wiki notes use the same disclosure bands. Empty sections are deleted, not filled with filler. **Location** notes use [[templates/Location]] instead.

| Band | Question it answers | When you read it |
|---|---|---|
| **At a Glance** | What is this *now*? | First 5 seconds |
| **At the table** | What do I run / say / choose? | While playing or prep-running |
| **Bank** | Links, supporting facts, history, densify | Only if At a Glance or At the table need support |
| **Constraints** | What must never appear here | Always last, quiet |

**Rules**
1. Higher bands never depend on scrolling past Bank.
2. At a Glance is bullets or one short paragraph — no essays.
3. Player-facing prose lives in `> [!narration]`. Owner pages: one block where the template places it. Session/run beats: mandatory `Initial Narration` plus titled situational stubs (zones, ticks, How the Scene Resolves, roster), never buried and never inside table cells. Conditional spoken in a table cell is `==_italic_==`.
4. On session/run surfaces the only callout is `[!narration]`. DM truth and procedure are headings.
5. Complete grammatical sentences on session/run surfaces.
6. At-table scan grammar lives in `obsidian-markdown`: **bold** = look here / mechanical noun; `` `code` `` = the number; → = what a mechanic produces; `[!narration]` = spoken. `DC 15` is inline code.
7. Canonical facts stay on owner pages. Session/run notes **embed** combat/item headings (`![[Bloodhawk#Statblock]]`) at the bottom and write scene *procedure* plus default-mode action-card numbers above. Do not retype an owner's full Multiattack/HP table into the card body. Do not dump owner essays. Embed an existing owner identity image when the owner page already lists one.

## Session / run surfaces

`cssclasses: [session-surface]` on session-prep, session logs, run guides, and beat cards.

### Session prep bands
1. **At a Glance** — stakes, strong start, pressure, spotlights, roster + opening narration
2. **At the table** — playable cards (not a railroad)
3. **Bank** — floating clues, roster links, parcels
4. **Constraints**

### Scene card stack (inside At the table)

Use the **cockpit** in `.agents/skills/run-guide/SKILL.md` (Scene ends when → Glance → Now in feet → DM truth heading → action cards → empty Initial Narration stub → procedure heading → zones plus per-place stubs → Be ready for → clock plus per-tick stubs → How the Scene Resolves (one callout plus options table) → embeds plus per-creature stubs → exit stub only if the next beat is on this file). Two passes: mechanical stubs, then TotM fill. One downward pass. One *procedure*. Exit does not ask what they do. Do not keep a second Run-now copy. Do not add a separate Ask callout. Do not add a peer round script.

### Session log bands
1. Recap narration
2. **What happened**
3. **Aftermath** (secrets / threads / rewards)
4. **Forward** (next hooks)
5. **Constraints**

### Run guide (control panel)

Glance → live cockpits in play order. Roster = heading embeds. Whole-session secrets/treasure/parachute sit after the live cards. No Scene menu that is only prep-management.

## Entity notes (template bands)

| Type | At a Glance | At the table | Bank |
|---|---|---|---|
| NPC / PC | Hook + look / player summary | Drive, public vs secret, spotlights | Relationships, resources, appearances |
| Location | — | [[templates/Location]] | — |
| Vehicle | At a Glance + aspects | Who/connections/hooks | Secrets, mechanics |
| Faction | Public goal | Methods, faces, reach | Secret goal, relations, clocks |
| Front | Impending doom | Dangers, grim portents, stakes | Cast |
| Quest | Objective + stakes | Nodes, conclusions→clues | Rewards, linked |
| Encounter | Live card | Setup, forces, objectives | Twists, treasure, ran-in |
| Monster | Statblock + narration + at-the-table | Role/dials, signature moves | Terrain, loot |
| Item | Look + what it does | Charges/limits | Hooks, provenance |
| Lore | Summary | Known to / table use | Variants, linked |
| Campaign | Premise + table | Current arc + pressure | Indexes |

## Anti-patterns
- Flat heading soup with no template bands
- Telegram shorthand on session/run surfaces
- Collapsed callouts on session/run surfaces
- Dumping bank essays into At a Glance
- CSS/theme polish as a substitute for section order
