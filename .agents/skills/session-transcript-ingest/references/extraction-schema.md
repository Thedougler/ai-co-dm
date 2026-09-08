# Extraction schema

Use this as a working structure for the ingest packet. Every non-empty claim
has an epistemic tag and a short evidence span. Keep table-visible and DM-only
knowledge separate. Mark banter, setup, and rules talk `ooc`; do not extract it
as a diegetic outcome.

```yaml
session:
  campaign_id: ""
  session_id: ""
  source:
    summary: "optional path"
    raw: "required path"
  time_range: ""
  speakers: []
  grounding:
    hot: []
    prep: []
summary_audit:
  - summary_claim: ""
    raw_evidence: ""
    disposition: verified | downgraded | uncertain | contradicted | unsupported
    reason: ""
beats:
  - id: beat-01
    order: 1
    time: "00:00:00"
    mode: diegetic | ooc | mixed
    summary: ""
    claims:
      - text: ""
        layer: Said | Resolved | Implied | Uncertain | Contradiction
        evidence: ""
        confidence: high | medium | low
    consequences: []
entities:
  - kind: pc | npc | place | item | faction | monster | dungeon | quest | front
    raw_names: []
    name: ""
    status: existing | new-stub | unknown
    changes:
      - field: ""
        before: ""
        after: ""
        layer: Said | Resolved | Implied | Uncertain | Contradiction
        evidence: ""
        confidence: high | medium | low
items:
  gained: []
  lost: []
  used: []
secrets:
  - secret: ""
    revealed_to: table | subset | dm-only | unknown
    layer: Said | Resolved | Implied | Uncertain | Contradiction
    evidence: ""
    confidence: high | medium | low
mechanics:
  - fact: damage | dc | save | reach | cr | condition | roll | other
    value: ""
    status: stated | resolved | proposed | contradicted | uncertain
    evidence: ""
    confidence: high | medium | low
clocks:
  - name: ""
    before: ""
    after: ""
    change: ""
    evidence: ""
    layer: Resolved | Uncertain | Contradiction
relationships:
  - parties: ["", ""]
    change: ""
    evidence: ""
    layer: Resolved | Implied | Uncertain | Contradiction
rewards:
  - recipient: ""
    reward: ""
    status: received | promised | proposed | uncertain
    evidence: ""
open_threads: []
player_goals_stated: []
uncertainties:
  - question: ""
    alternatives: []
    evidence: ""
contradictions:
  - transcript_claim: ""
    vault_claim: ""
    references: []
```

## Field rules

- **Beats:** order by fictional sequence, retaining timestamps as clues rather
  than treating file order as canon. Record failed approaches and costs.
- **Summary audit:** every curated summary bullet gets a raw span or an explicit
  unsupported/uncertain disposition before it can inform a patch.
- **Mode:** separate OOC banter and rules talk from diegetic action. Mixed beats
  retain both spans but only the adjudicated fictional result changes state.
- **Entities:** an unknown token stays `unknown` until qmd confirms it. A
  `new-stub` request includes only evidence-backed fields and routes to the
  place/NPC/dungeon skill as appropriate.
- **Items/rewards:** distinguish gained, used, lost, offered, and merely
  discussed. No planned or improvised loot without a resolved table event.
- **Secrets:** “revealed” means characters/players learned it in play, not that
  the transcript mentions a DM plan. Mark audience precisely.
- **Mechanics:** record damage, DCs, CR, reach, saves, and conditions only when
  said and resolved. Preserve conflicting numbers as Contradiction/Uncertain;
  do not select the cleaner homophone or value.
- **Clocks:** intentions do not advance clocks. Record a before value only when
  known; otherwise use `unknown` and flag the needed adjudication.
- **Implied:** include the evidence and confidence, but keep it out of durable
  canon unless the Co-DM explicitly promotes it. Contradictions never auto-win.
