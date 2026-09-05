# Callouts

## ai-co-dm house callouts

```markdown
> [!narration] Narration
> Player-facing TotM prose. Empty stub ok.

> [!mechanic]
> Table procedure, DCs, HP, conditions — not player-safe.

> [!secret]- Title
> Collapsed (`-`). Hidden truth / unearned lore. Never inside narration.
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

## Built-in types

`note` · `abstract`/`summary`/`tldr` · `info` · `todo` · `tip`/`hint`/`important` · `success`/`check`/`done` · `question`/`help`/`faq` · `warning`/`caution`/`attention` · `failure`/`fail`/`missing` · `danger`/`error` · `bug` · `example` · `quote`/`cite`
