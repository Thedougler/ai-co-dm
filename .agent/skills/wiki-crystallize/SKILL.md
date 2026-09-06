---
name: wiki-crystallize
description: >-
  Compile a meaningful chat, research session, or working document into durable,
  typed ai-co-dm notes. Use for session wrap-up or an explicit request to capture
  decisions/findings. Complements wiki-ingest and session-transcript-ingest; it
  does not replace them. Use qmd before writing and after-write when done.
---

# Wiki crystallize

Turn messy capture or evidence into a concise, durable compiled note. The note is
shorter and more useful than the conversation; do not transcribe the thread.

**Vault:** `/Users/nick/Documents/ai-co-dm`  
**Contract:** `AGENTS.md`  
**Find:** `qmd-retrieval` via `./scripts/qmd`  
**After write:** `./scripts/after-write "crystallize: <short reason>"`

## Boundaries

- Read `AGENTS.md` first, then the relevant campaign `hot.md` and nearest `00`
  hub/index. Use qmd search, then `qmd get --full` before asserting existing facts.
- A table recording, ASR transcript, or session evidence packet goes first to
  `session-transcript-ingest`; file its resulting claims here only afterward.
- A source dropped in `inbox/` goes through `wiki-ingest` when source processing
  is the main task. Crystallize is for durable synthesis of already-understood
  work, not an inbox drain.
- Preserve evidence and epistemic status. Never silently canonize a contradiction;
  mark it unresolved or escalate to Co-DM/Nick.
- Never create `wiki/`, `raw/`, `sources/`, `concepts/`, `entities/`, or a
  second vault layout. Never dump a transcript into a note.
- Do not duplicate `llm-wiki` doctrine, `wiki-lint` hygiene, or Organizer fleet
  procedure here. This skill only defines crystallization steps.

## Procedure

1. **Orient.** Read `AGENTS.md`; identify the campaign/domain and inspect its
   `hot.md` plus nearest `00` hub/index. Query qmd for the topic and likely
   existing owner. Fetch candidate notes in full.
2. **Distil.** Keep decisions, established findings, durable patterns, current
   state, provenance, and specific open questions. Drop exploratory chatter,
   dead ends, superseded drafts, and process narration. Keep player-facing
   `[!narration]` content empty unless Visualizer owns it.
3. **Choose the home.** Update the strongest existing note in
   `campaigns/` or `lexicon/`; do not mint a sibling merely because a new title
   is convenient. If no real match exists, create one from the matching
   `templates/` note using the AGENTS `type` enum. Keep the page atomic and put
   it in the campaign's existing typed bucket. If placement or canon is unclear,
   stop and ask Co-DM/Nick.
4. **Write surgically.** Merge the durable claims into the relevant sections;
   preserve `created`, `type`, `campaign`, `status`, `visibility`, and existing
   provenance. On changed notes bump only `updated` (and the repository's
   established provenance/change field when appropriate). Add useful wikilinks;
   do not rewrite unrelated prose or create a global index.
5. **Index only when warranted.** For a new page, add one concise entry to the
   nearest campaign `00` hub/index. Refresh `hot.md` only when current pressure,
   quests, or active state actually changed. Do not regenerate indexes or touch
   unrelated hubs.
6. **Persist and verify.** Run `./scripts/after-write` with a short reason.
   Report paths changed, evidence/open questions retained, and any unresolved
   conflict or handoff. If the command fails, keep confirmed markdown changes
   and report the failure.

## Completion check

- [ ] Existing note searched with qmd before creating anything.
- [ ] Output is a concise typed note under `campaigns/` or `lexicon/`.
- [ ] No `wiki/`, `raw/`, or parallel generic-wiki paths were created.
- [ ] Provenance and uncertainty are visible; contradictions are not silently overwritten.
- [ ] Nearest index/hot changed only when the content warrants it.
- [ ] `after-write` ran (or its failure is reported).

## World-bible spine

Use crystallization to make one small habit durable: after play, capture who,
decisions, and open threads within 24 hours, then patch only the affected typed
owners. Keep a lean hub with PCs, active versus past NPCs, locations, factions,
and living handouts; put expendable material in a junk drawer or inbox rather
than bloating the hub. For locations, file information from obvious surface to
deeper use to secrets last. Responsive systems (relationships, clocks, and
independent moves) supply depth; do not manufacture lore to fill sections.

Keep notes atomic and modular, link the nearest Organizer MOC, and preserve an
empty `[!narration]` block for Visualizer. Never crystallize a raw transcript.
