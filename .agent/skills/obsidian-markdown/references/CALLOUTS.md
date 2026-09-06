# Callouts

## ai-co-dm house callouts

```markdown
> [!narration] Narration
> Player-facing TotM prose. Empty stub ok.

> [!mechanic]
> Table procedure, DCs, HP, conditions — not player-safe.

> [!secret] Title
> Open on run-guide, session-prep, and session-note surfaces. Hidden truth / unearned lore; never inside narration.
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

Do not use collapsed callouts (`[!…]-`) in run-guide, session-prep, or session
notes; live DM information must remain visible in the session surface.

## Built-in types

`note` · `abstract`/`summary`/`tldr` · `info` · `todo` · `tip`/`hint`/`important` · `success`/`check`/`done` · `question`/`help`/`faq` · `warning`/`caution`/`attention` · `failure`/`fail`/`missing` · `danger`/`error` · `bug` · `example` · `quote`/`cite`
