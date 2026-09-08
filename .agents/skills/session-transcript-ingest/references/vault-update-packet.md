# Vault update packet

The packet is the boundary between messy audio and durable vault state. It is
not a transcript archive and is not a substitute for qmd retrieval.

## Session log mapping

Draft the durable record from `templates/Session log.md` only:

- **Narration:** player-safe recap; route to TotM/Visualizer if prose is needed.
- **What happened:** ordered Resolved/Said beats, with concise evidence-backed
  wording and meaningful failures/costs.
- **Secrets revealed:** only what the table learned; separate audience and keep
  DM-only material out of narration.
- **Loose threads:** unresolved questions, active dangers, and player-created
  leads—not unused prep.
- **Rewards:** received or clearly resolved rewards; distinguish promised or
  proposed rewards and do not invent treasure.
- **Next hooks:** consequences and open choices that follow from play, not a
  prewritten route.

## Surgical patch format

One patch per atomic change:

```yaml
- path: "campaigns/.../NPC.md"
  change: "Set relationship with [[PC]] from wary to cooperative"
  evidence: "[00:42:10, GM] NPC agrees after the party returns the seal"
  layer: Resolved
  confidence: high
  visibility: table
  owner: co-dm
```

Use `add`, `replace`, or `remove` only when the target and old value are clear.
For new entities, request a template-based stub and nearest-index link; do not
create an elaborate biography. For contradictions, make no replacement patch:
list both claims, the retrieved note, and the question requiring adjudication.

## Summary/raw audit

A curated SUMMARY can make extraction faster but cannot prove an event. For each
bullet, record a raw transcript line span and one of `verified`, `downgraded`,
`uncertain`, `contradicted`, or `unsupported`. If the summary says `Forbin
Nelson` but the transcript or vault points to `Corvin Knighton`, do not invent a
third person or choose the more readable name: retain both candidates and ask
Co-DM. Name drift (`Crissdalynn`/`Christina`/`Crysdallynn`, `Nasria`/`Aruhe`)
gets the same treatment.

## What not to write

- Do not turn unused prep, hypotheticals, jokes, or failed intentions into log
  facts.
- Do not put secrets, DCs, unearned names, or DM-only deductions in
  `[!narration]`.
- Do not use an ASR guess to rename an existing entity or overwrite a vault
  fact; prefer qmd's supported match or an uncertainty flag.
- Do not dump the full transcript into a handoff or send it to another bot.
  Send the packet, short evidence spans, and exact questions only.
- Do not mix `session-prep` into the durable `session` log.
- Do not paste WotC text; paraphrase rules terms.

## Apply flow

1. Retrieve target notes and `hot.md`; check each patch against full documents.
2. Review layers, evidence, visibility, and contradictions with Co-DM.
3. Apply surgical edits; hand narration and new-entity work to the owning skill.
4. Run the vault after-write flow: `./scripts/qmd update` (and `embed` if
   needed), then commit and push when committing vault writes.
5. Re-query changed notes and confirm the session log, clocks, and links are
   consistent. Report unresolved questions rather than guessing.
