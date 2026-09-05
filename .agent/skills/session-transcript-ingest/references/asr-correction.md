# ASR correction for tabletop transcripts

## Common failure patterns

| Pattern | Check | Safe treatment |
|---|---|---|
| Proper noun mangled (`Maren` → “marin”) | qmd exact/fuzzy search plus nearby context | Use the existing match only when supported; otherwise keep the token and flag it |
| Session-10 name drift (`Crissdalynn`, `Christina`, `Crysdallynn`) | speaker continuity, character roster, qmd | Candidate-match only; do not silently merge speakers |
| Place drift (`Nasria`/`Aruhe`) | route, scene, qmd, full note | Preserve both readings when context does not decide |
| Unlabeled `Speaker 1` | turn order, voice/context if available | Keep speaker unknown; do not assign an action to a PC/NPC without support |
| Spell/ability split or merged | action, target, level, rules context | Normalize to a known term; preserve raw text in evidence |
| Condition heard as ordinary word | combat state and subsequent turns | Confirm against the table result; do not add a condition from a mere mention |
| Monster/place substituted by a common word | scene, speaker, prior notes, qmd | Candidate-match and mark Uncertain if not decisive |
| Dice spoken as prose (`d20`, “twenty”) | roll syntax, modifier, result, adjudication | Record only the result actually resolved at table |
| Homophone (`rite/right`, `wight/white`) | grammar plus campaign lexicon | Prefer a retrieved campaign term; never choose a new entity by spelling |
| Crosstalk or speaker drift | timestamps, pronouns, turn continuity | Mark speaker unknown; do not assign an action to a PC/NPC without support |
| Punctuation/negation loss | adjacent words and outcome | Check “did/didn't,” “not,” and question/answer boundaries manually |

## Correction protocol

1. Keep an immutable raw reference: file name plus timestamp/line span.
2. If a curated SUMMARY is present, copy each claim into a candidate list; it is
   an index, not proof. Verify it against a raw span before extraction or write.
3. Propose the smallest correction, with the raw token, candidate, and reason.
4. Confirm proper nouns and canon terms with qmd; fetch the full matching note.
5. Apply only high-confidence, context-supported corrections. Keep the raw span
   beside the cleaned claim when it affects meaning.
6. If multiple candidates remain, do not pick one for readability. Emit an
   Uncertain item with alternatives and a question for Nick/Co-DM.
7. Re-run extraction after corrections that change an actor, place, item,
   action, or outcome.

## OOC versus diegetic

Mark rules talk, jokes, scheduling, snack/pet chatter, map or slideshow
troubleshooting, and player/DM commentary about the fiction as `ooc`. A player
proposal is not an event. A DM description, declared action, roll, and final
adjudication should be separate spans; only the resolved fictional result enters
world state. A table-level warning such as “this could TPK you” is not itself a
monster statistic or a character-world fact.

## Do not guess

Do not invent or silently resolve character names, factions, locations, spells,
items, monsters, pronouns, speakers, dice results, damage, conditions, deaths,
loot, secrets, motives, or clock changes. Do not turn “we should,” “maybe,” a
plan, a joke, table talk, or an audio artifact into a world event. Never paste
WotC book text; use a short paraphrase or a rules-term label.

## Evidence format

Use compact evidence such as `[00:17:42, Mira] “we open the east gate”` or
`[lines 88–91] “the roll succeeds.” For a correction, write:

```yaml
raw: "marin"
candidate: "Maren"
status: confirmed | likely | uncertain
basis: qmd match + surrounding dialogue
source: transcript.txt#L42
```

`likely` is not enough to create or rename an entity; route it as Uncertain.
