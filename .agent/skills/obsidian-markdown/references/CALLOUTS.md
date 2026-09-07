# Callouts

## ai-co-dm house callouts

```markdown
> [!narration] Narration
> Player-facing TotM prose. Empty stub ok.

> [!mechanic]
> Table procedure, DCs, HP, conditions — not player-safe.

> [!secret] Title
> Open on run-guide, session-prep, and session-note surfaces. Hidden truth / unearned lore. Never inside narration.
```

On long-lived owner pages such as NPC, PC, or faction pages, collapse a secret when
that page benefits from progressive disclosure:

```markdown
> [!secret]- Title
> Collapsed hidden truth / unearned lore.
```

## Syntax

```markdown
> [!note]
> Body.

> [!warning] Custom Title
> Body.

> [!faq]- Collapsed by default
> Body.

> [!faq]+ Expanded by default
> Body.

> [!question] Outer
> > [!note] Nested
> > Inner
```

## Session-surface rules

On run-guide, session-prep, session, and beat notes, keep DM callouts open:
use `[!mechanic]` or `[!secret]`, never the collapsed `[!…]-` form. Collapsed
secrets remain allowed on long-lived owner pages such as NPC, PC, or faction
pages when progressive disclosure is useful.

## Body line breaks

Callout bodies use real line breaks: continue each rendered line as its own
quoted line, and keep list items on separate lines. Never serialize a line
break as a literal backslash followed by `n`. This rule is especially strict
for run-guide, session-prep, session, and beat notes. YAML frontmatter and
fenced code/statblocks are the only exemptions (including YAML string values
inside a statblock fence); elsewhere, a literal `\n` is a FAIL.

```markdown
> [!mechanic]
> First procedure step.
> Second procedure step.
>
> - One list item.
> - Another list item.
```

## Built-in types

`note` · `abstract`/`summary`/`tldr` · `info` · `todo` · `tip`/`hint`/`important` · `success`/`check`/`done` · `question`/`help`/`faq` · `warning`/`caution`/`attention` · `failure`/`fail`/`missing` · `danger`/`error` · `bug` · `example` · `quote`/`cite`
