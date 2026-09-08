---
name: decomposing-campaign-content
description: >-
  Decompose a broad, cross-note, multi-kind, evidence, runtime, or batch campaign request into
  the smallest dependency-ordered operations and route each to its owner skill. Use before broad
  writes, source classification, batch filing, or when a page may be patched versus created. For
  play evidence, load reconciling-session-evidence first; do not duplicate ingest.
---

# Decompose Campaign Content

Translate the requested outcome into an executable work graph. Store truth once: distinguish
Knowledge (canon), Work (prep/proposals), Runtime (derived running material), evidence, renderers,
and assets before planning writes.

## Work graph

Before writing, make an internal graph with `operation | owner | authority (AUTO/GRILL/GATE) |
dependencies | specialist | completion test`. Resolve outcome, source/evidence, campaign/scope,
audience, horizon, constraints, and intent from the request and `AGENTS.md`. Ask only about
creative intent or authority; resolve paths and architecture from templates and existing notes.

## Procedure

1. **Retrieve.** Inventory every input in a batch before processing any one. Use exact paths,
   aliases, `qmd-retrieval`, then narrow lexical search. Read the relevant `templates/` file and
   narrowest owner skill. For each concept decide: patch owner, create justified node, keep inside
   an existing page, retain as evidence, render/derive, attach asset, or no durable write.
2. **Classify.** Use the representation chain `kind -> subtype -> schema trait -> component ->
   evidence -> renderer -> asset`. A running guide is a renderer, a transcript is evidence, and
   PC state is a component unless the vault contract says otherwise.
3. **Assign autonomy.** `AUTO` covers established structure, extraction, routing, normalization,
   link repair, validation, deterministic compilation, and reversible connective tissue. `GRILL`
   covers missing creative intent for major campaign/session architecture. `GATE` protects locked
   canon, contradictions, retcons, protected runtime, Campaign Now, event lifecycle, promotions,
   and player-owned choices. Complete safe work before a gate.
4. **Order.** Patch before mint; canonical owner before projection; link before copy; specialist
   craft before generic prose; deterministic consequence before LLM derivation; durable node only
   when future citation/retrieval justifies it.
5. **Batch.** Each input ends exactly as represented, intentionally merged, retained raw/evidence,
   skipped with reason, or blocked by a specific diagnostic/gate. No thin skim or unaccounted input.
6. **Execute and validate.** Pass each specialist its owner, accepted inputs, satisfied dependencies,
   audience, constraints, provenance, and completion test. Run required link/index/derived-state
   checks and repair safe failures. Use `obsidian-markdown` for notes.

## Evidence boundary

For transcript, notes, ASR, audio, or generated session summaries, hand to
`reconciling-session-evidence` first. `session-transcript-ingest` owns capture, raw preservation,
manifest, index, log, and filing bookkeeping; this skill owns only the resulting multi-owner graph.
Never create a second transcript or duplicate ingest procedure.

Finish vault changes with `./scripts/after-write "execute decomposed campaign work"`. Report the
campaign result first, then merged/skipped inputs, diagnostics, and exact human gates; do not expose
the full graph unless requested.
