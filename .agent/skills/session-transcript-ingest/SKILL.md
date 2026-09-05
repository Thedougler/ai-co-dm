---
name: session-transcript-ingest
description: >-
  Ingest table-session transcripts (including ASR/whisper output), correct
  obvious speech-to-text errors, extract what actually happened versus what is
  only implied, and produce a reliable vault update packet: session log fields,
  entity/state diffs, clocks, and uncertainty flags. Use after a session when a
  raw or messy transcript must become durable wiki state. Do not use for live
  play narration or for inventing canon the transcript does not support.
---

# Session transcript ingest

Turn a raw table record into a bounded update packet. The durable record is
`templates/Session log.md` (`type: session`): Narration, What happened, Secrets
revealed, Loose threads, Rewards, and Next hooks. `session-prep` is disposable;
never merge it into the log as if it happened.

## Pipeline

1. **Intake.** Accept `txt`, `md`, `vtt`, `srt`, chat export, or pasted notes.
   Preserve timestamps and speaker labels when available. Record campaign and
   session IDs; retrieve missing IDs rather than guessing. Attach prior `hot`
   state and session prep only as grounding, never as an override or evidence
   that an event occurred.
2. **Retrieve before interpretation.** Run `qmd-retrieval` for campaign names,
   existing entities, rules terms, prior session state, and `hot.md`. Fetch
   full notes behind promising snippets. A transcript is evidence; vault facts
   are a contradiction check, not a license to fill silence.
3. **ASR cleanup.** Normalize punctuation, turn boundaries, obvious speaker
   swaps, dice notation, ability names, conditions, common monsters, and other
   D&D lexicon. Match campaign proper nouns through qmd. Apply a correction only
   when context and qmd support it; otherwise retain the raw wording and flag an
   unknown. Never invent a name from a garbled token.
4. **Classify each claim.** Use the epistemic layers below and attach a short
   evidence span (timestamp/speaker if known). Keep table knowledge separate
   from DM-only knowledge.
5. **Extract.** Build a chronological beat list and the structured fields in
   `references/extraction-schema.md`: actions, outcomes, places, items,
   relationships, secrets, clocks/fronts, rewards, open threads, and player
   goals. Capture failed attempts and costs, not just successes.
6. **Resolve state.** Write only claims supported by the transcript. Promote an
   Implied claim only with evidence, confidence, and a clear operational need;
   otherwise leave it Implied or Uncertain. Prefer delete/clarify over prose.
   Never overwrite a vault fact with an ASR homophone when qmd has a better
   match; report a Contradiction for human resolution.
7. **Package, do not silently write.** Default output is a packet: optional
   concise cleaned notes, a Session log draft matching the template, surgical
   entity/state patches, clock changes, uncertainty questions, and handoffs.
   A Co-DM may apply it after reviewing the packet and following the vault
   after-write flow (`qmd update`, then embed if needed, commit/push when
   committing vault writes).

## Epistemic layers

- **Said:** explicit words or an unambiguous recorded roll/result. Quote a short
  span; do not infer intent from tone alone.
- **Resolved:** a clear mechanical or social outcome established at the table
  (hit, condition removed, bargain accepted, door opened, NPC departed).
- **Implied:** a reasonable reading supported by an evidence span, but not stated
  as fact. Include rationale and confidence; do not write it as canon by default.
- **Uncertain:** audio, speaker, referent, timing, or outcome is unresolved.
  Preserve alternatives and ask Nick/Co-DM.
- **Contradiction:** transcript conflicts with a retrieved vault fact or another
  well-supported transcript claim. Preserve both references; do not choose by
  plausibility.

## World-state and safety rules

- `[!narration]` is player-facing: no secrets, DCs, unearned names, or DM-only
  implications. Hand narration to TotM/Visualizer; Co-DM owns continuity.
- New entities require the relevant place/NPC/dungeon skill, a template stub,
  and a link from the nearest index. Do not promote a one-off unknown proper
  noun merely because ASR capitalized it.
- Secrets revealed to players belong in table-visible log fields; DM-only secrets
  stay out of narration and are marked separately. Unused prep, hypothetical
  branches, and planned loot do not become events or rewards.
- Advance a clock/front only when a transcript beat clearly changes its state;
  record old/new state and evidence. A stated intention is not advancement.
- Handoffs contain the packet and short evidence spans, never the full
  transcript. Use the handoffs below and the dedicated references.

## Handoffs

| Need | Owner | Send |
|---|---|---|
| Player-facing recap/narration | TotM / Visualizer | safe narration claims, no secrets/DCs |
| Continuity, session log, clocks | Co-DM | packet, patches, contradictions, questions |
| New NPC/place/dungeon | respective skill | minimal evidence-backed stub request |
| Canon lookup | qmd-retrieval | exact terms, candidate matches, unresolved tokens |

## Output checklist

- [ ] IDs, source format, timestamps/speakers, and grounding notes recorded.
- [ ] Cleanup changes are traceable; unknowns are not silently renamed.
- [ ] Every durable claim has Said/Resolved/Implied/Uncertain/Contradiction tag
      and short evidence.
- [ ] Session log follows `templates/Session log.md`, not session prep.
- [ ] Entity/state diffs are surgical; clocks include before/after where known.
- [ ] Secrets, rewards, and narration visibility are separated.
- [ ] Uncertainty questions and handoffs are explicit; no transcript dump.

## Dual-source and noisy-table handling

When both a curated SUMMARY and RAW transcript arrive, treat the summary as a
candidate beat index, never as evidence. Verify every summary claim against one
or more raw spans before any vault patch; downgrade, split, or flag claims that
lack support. Use a two-column audit: `summary claim → raw evidence / disposition`.

Name drift (`Crissdalynn` / `Christina` / `Crysdallynn`), place drift
(`Nasria` / `Aruhe`), and unlabeled `Speaker 1` require qmd candidates plus
context; they never license a new entity. A summary self-conflict such as
`Forbin Nelson` vs `Corvin Knighton` is Uncertain/Contradiction until resolved.
Keep speaker uncertainty explicit. See
`references/sample-session-10-notes.md` for a worked dual-input audit.

Separate OOC banter, rules discussion, setup, jokes, and media/tool chatter
from diegetic events. A DM description, player declaration, roll, and final
adjudication are distinct claims. Mechanical facts (damage, DC, reach, CR,
conditions, and saves) enter the packet only when actually said and resolved;
retain speaker/source and confidence. Do not promote a proposed action, a
misheard number, or table-level threat assessment into world state.
