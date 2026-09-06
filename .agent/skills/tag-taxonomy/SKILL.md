---
name: tag-taxonomy
description: >-
  Audit, normalize, or choose the controlled tag vocabulary for ai-co-dm notes. Use for tag
  cleanup, audits, choosing tags for a new note, or adding a genuinely reusable tag. Prefer type
  fields, folders, frontmatter, and wikilinks over tags; never import raw setting motifs.
---

# ai-co-dm Tag Taxonomy

Tags are lightweight retrieval texture, not a second ontology. `type`, `campaign`, `status`,
`visibility`, folders, and wikilinks carry structure and identity. Keep tags small, canonical, and
portable across campaigns.

## Controlled vocabulary

Use only when meaningful: workflow `inbox`, `index`, `lexicon`, `template`, `draft`, `review`;
play shape `exploration`, `travel`, `combat`, `social`, `intrigue`, `mystery`, `horror`, `survival`,
`politics`, `ritual`, `trade`, `discovery`; table behavior `recurring`, `consumable`,
`player-hook`, `faction-pressure`, `clock`.

Structural type tags may remain for legacy compatibility, but new notes should rely on `type`:
`campaign`, `session`, `session-prep`, `npc`, `pc`, `location`, `faction`, `front`, `item`,
`monster`, `encounter`, `quest`, `vehicle`, `lore`. Do not invent visibility tags; use
`visibility: table | dm`.

Never add campaign names, place/faction/person names, PC/NPC names, deity/motif names, regions,
sessions, seasons, habitat adjectives, or facts already carried by a field. Migrate those tags to
owner wikilinks, `campaign`, `type`, `status`, `within`, `factions`, or a portable play-shape tag.
This excludes raw setting-specific motif names and any future campaign-specific vocabulary. Limit to five non-structural tags; empty is fine.

## Audit and normalize

Inventory frontmatter `tags:` for canonical notes, skipping attachments, generated output, archives,
and inbox scraps. Classify canonical, legacy structural, setting-specific migration, or unknown;
report over-tagged notes and a carrier for each dropped fact. For normalization, read enough body
to identify the carrier, replace aliases, drop setting tags only after preserving their fact, and
ask before adding unknown vocabulary. Untagged is not a defect without clear reusable texture.

Before proposing a new tag, prove it is not a type, name, place, faction, habitat, status, session
identifier, or frontmatter axis and that it will recur across campaigns. Run frontmatter lint and
finish edits with `./scripts/after-write "normalize ai-co-dm tags"`.
