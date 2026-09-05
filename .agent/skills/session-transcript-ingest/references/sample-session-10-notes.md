# Worked example: session-10 ingest

This example demonstrates the dual-input audit, not campaign canon. The curated
summary is a candidate index; the raw transcript is the evidence source.

Inputs: Nick-provided session-10 curated SUMMARY + RAW ASR transcript
(speaker-labeled). Paths vary by attach; treat whatever files are supplied.

## Summary audit

| Summary candidate | Raw evidence | Disposition |
|---|---|---|
| Gregori warned of a ship hunting the party for the carried artifact | Raw L701–741 establishes Gregori's appearance and thanks; L1013–1029 names Talon Vantyrus and says he sent the hunting ship | Verified as Said; keep exact artifact identity separate unless another raw span confirms it |
| The party broadside did 55 bludgeoning and left the ship listing | Raw L2101–2117 says 55 bludgeoning; L2117–2137 says the hull listed and took water | Verified/Resolved; mechanical number confidence high |
| Delmar's Umberlee curse became known to the group | Raw L1313–1353 discusses the curse and confirms the party had not previously been told its details | Verified as table-visible revelation; do not put DM-only implications in Narration |
| The attacking ship was disabled and the party fled | Raw L2117 says it still had movement; summary's later escape claim needs the later retreat span before writing “disabled” as final | Partially verified; use “heavily damaged and the party chose not to board” unless final state is located |
| Gregori requested harm to Corvin Knighton | Summary L9 says Corvin; Summary L29 says Forbin Nelson; this sampled raw window does not establish which name | Contradiction/Uncertain; never invent a third name or patch either entity |
| Crown Squid hit for 18 and called for DC 19 Strength saves | Raw L5837–5949 supports 80-foot reach, 18 slashing, and DC 19; L5965–6001 records grapple and a conflicting heard DC 16 before correction | Resolved with high confidence for 18/DC 19; retain the heard 16 as a correction trace, not canon |
| The table knew the threat was CR17 and fled | Raw L7081–7117 contains the OOC TPK warning, CR17 table talk, and decision to run | CR17 is a stated mechanical fact; the TPK warning is OOC context, not narration or an in-world fact |

## Extraction examples

- **Said:** `[raw L1013–1029, DM]` Gregori names Talon Vantyrus and says he
  sent the ship hunting the party. Confidence: high.
- **Resolved:** `[raw L2101–2117, DM/table]` the broadside resolves as 55
  bludgeoning and the enemy hull lists/takes water. Confidence: high.
- **Resolved:** `[raw L5933–5965, DM]` Delmar takes 18 slashing and is grappled;
  `[raw L6025–6029]` both beat the save and are no longer grappled. Confidence:
  high for the sequence.
- **Implied:** `[raw L5701–5793]` the invisible or distorted large thing is
  plausibly the later Crown Squid encounter because the attack follows; keep
  “Crown Squid” as a candidate until the identifying span is linked. Confidence:
  medium, not a new entity from this inference alone.
- **Uncertain:** `[summary L9, L29; raw evidence not found in sampled spans]`
  Gregori's requested target is Corvin Knighton or Forbin Nelson. Ask Co-DM;
  no relationship or quest patch.
- **OOC:** `[raw L7081–7117]` jokes, meta-game discussion, and “real chance this
  will TPK” are not diegetic events. Extract only the resolved retreat and its
  consequences.

## Session log draft shape

- **Narration:** “The party reached Aruhe, survived a dangerous contact, and
  retreated.” Keep names, secrets, numbers, and DM-only implications out until
  table-safe and confirmed by the owning skill.
- **What happened:** Gregori appeared aboard ship; the party learned of the
  pursuing vessel; the broadside badly damaged it; the party investigated Aruhe;
  the landing party encountered a dangerous invisible/large creature and
  retreated. Replace each sentence with exact raw evidence before writing.
- **Secrets revealed:** Delmar's curse and its associated history became known
  to the table in the Gregori conversation (raw L1313–1353). Audience and exact
  scope need Co-DM confirmation.
- **Loose threads:** Aruhe survivor search; pursuing Talon Vantyrus; Gregori's
  unresolved request; identity/state of the island threat. Do not add summary
  details that lack raw spans.
- **Rewards:** none asserted by this sampled evidence. Gregori's possible reward
  is an offer, not received loot.
- **Next hooks:** continue only from player-supported choices and unresolved
  threats; do not import unused prep.

## Patch examples

```yaml
- path: "<session-log>/What happened"
  change: "Add resolved 55 bludgeoning broadside; enemy hull listed and took water"
  evidence: "raw transcript L2101-L2117"
  layer: Resolved
  confidence: high
  visibility: table

- path: "<session-log>/Mechanical facts"
  change: "Record Crown Squid reach 80 ft, Delmar 18 slashing, DC 19 Strength save"
  evidence: "raw transcript L5837-L5949"
  layer: Resolved
  confidence: high
  visibility: table

- path: "<session-log>/Uncertainty"
  change: "Ask whether Gregori's requested target is Corvin Knighton or Forbin Nelson"
  evidence: "summary L9 and L29; target not resolved in sampled raw evidence"
  layer: Contradiction
  confidence: high
  visibility: dm
```
