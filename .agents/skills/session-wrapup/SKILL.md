---
name: session-wrapup
description: >-
  Turn a completed campaign session into a durable, reviewable log and
  surgical canon updates under campaigns/<slug>/sessions/. Use after play or
  after session-transcript-ingest has produced a bounded packet; do not use
  for session prep or live narration.
---

# Session wrap-up

Turn what actually happened into the campaign's durable session record. This
skill complements `session-transcript-ingest`: when the source is a raw,
messy, or timestamped transcript, hand it to that skill first and consume its
bounded packet. Do not duplicate transcript cleanup or pass the full transcript
between specialists.

## Procedure

1. **Orient.** Use `./scripts/qmd` to retrieve the campaign hub, `hot.md`, the
   relevant session note, and any existing entities named in the notes. Confirm
   campaign and session identifiers; ask Nick/Co-DM rather than guessing a
   missing ID. Read `templates/Session log.md` before creating a log.
2. **Separate sources.** Read the play notes or the ingest packet and the
   session-prep note for comparison. Only play-supported events become canon.
   Keep unused prep, proposed actions, and unresolved audio separate from the
   durable record. Preserve Said/Resolved/Implied/Uncertain/Contradiction
   labels and short evidence spans when the ingest packet supplies them.
3. **Write the session log.** Create or update the smallest file under
   `campaigns/<slug>/sessions/`, following the existing session-log naming and
   `templates/Session log.md` structure. Fill the actual beats in order,
   player-safe `> [!narration] Narration`, `## Secrets revealed`, `## Loose
   threads`, `## Rewards`, and `## Next hooks`. Do not put DM-only facts,
   DCs, or unearned names in narration. Do not turn silence into an event.
4. **Apply surgical canon changes.** For an existing NPC, PC, place, faction,
   quest, front, encounter, item, monster, or lore note, run qmd first and
   update that note in place only when the source supports the change. For a
   genuinely new entity, use the matching file in `templates/`, the AGENTS
   `type` enum, and a nearest campaign index link. Use a stub rather than
   inventing missing canon. Do not create `wiki/`, `pages/`, or `raw/` trees.
5. **Hand off and finish.** Return a bounded receipt: log path, changed entity
   paths, unresolved contradictions, and any next-owner handoffs. Run
   `./scripts/after-write "skills: session wrap-up for <campaign>/<session>"`
   after writes. If the GM defers review, leave the log clearly draft rather
   than silently promoting it.

## Boundaries

- Session logs are durable; `templates/Session prep.md` remains disposable.
- `session-transcript-ingest` owns raw transcript/ASR cleanup and evidence
  packets; this skill owns the post-session log and approved surgical updates.
- Use `qmd-retrieval` for lookup and `obsidian-markdown` for every vault note
  write. Never paste WotC text or invent setting canon.

## Post-session ritual

Aim to capture the durable dump within 24 hours and keep the first pass to about
15 minutes: **who acted, what decisions landed, and which threads remain**. Then
update the vault bible surgically: improvised NPCs, places, loot, and other
lasting facts become typed atomic notes or updates on their existing owners. Keep
unused prep disposable, compare the short player recap when available, and hand
reviewed faction clocks or off-screen movement to `world-tick`. The session log
is the evidence spine; it is not a raw transcript.

> **Attribution and license.** Adapted from AntTheLimey/gm-apprentice's
> `session-wrapup` skill under **CC BY-SA 4.0**. Adapted for ai-co-dm by
> Nick Davenock, including path/schema remapping and local handoff rules.
> This adapted material remains available under **CC BY-SA 4.0**; see the
> vendor `LICENSE` and `ATTRIBUTION.md` for the license and attribution terms.

## Echo capture

In the durable log, retain the consequences of action **and inaction**: what the
party changed, what they left unattended, and which living faction or pressure
moved in response. Keep those echoes as evidence-backed threads for `world-tick`,
not as a retrofitted plot or hidden punishment.
