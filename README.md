# ai-co-dm

LLM wiki (Obsidian vault) for Nick's home D&D campaigns.

Humans open this folder as an Obsidian vault. Agents read and edit the same markdown over git.

## Open in Obsidian

1. Clone or sync this repo locally.
2. Obsidian → **Open folder as vault** → select the repo root.
3. Enable community plugins if prompted (**Fantasy Statblocks**, **Leaflet** ship in `.obsidian/plugins/`).
4. Start at [[00 Home]].

Vault defaults (committed in `.obsidian/app.json`): new notes → `inbox/`, attachments → `attachments/`, wikilinks on, always update links.

Local-only (gitignored): workspace layout, graph layout, plugin `data.json`, `.trash/`, `.qmd/*.sqlite`.

**Images:** drop into `attachments/` (or `attachments/<campaign>/`). In notes use `![[attachments/…]]` embeds or `[[attachments/…]]` wikilinks. See [[attachments/00 Attachments]].

## Agent conventions

See [AGENTS.md](AGENTS.md). Grok Bots also load [GROK-BOTS.md](GROK-BOTS.md), and agents running in oh-my-pi load [OMP.md](OMP.md). Short version: use wikilinks, keep notes small, update indexes when you add pages, never paste proprietary book text, no real player PII in this public repo. Agents ignore Obsidian UI chrome — markdown is the product.

## Node / QMD

Vault search is `./scripts/qmd`. Native addons in `@tobilu/qmd` must match the Node ABI pinned in [`.nvmrc`](.nvmrc) (Node 24). Do not run that CLI on Homebrew `node@26`.

```bash
nvm use
./scripts/bootstrap
./scripts/qmd --version
```

`./scripts/bootstrap` installs Node 24 when `nvm` is available, installs `@tobilu/qmd` if it is missing, rebuilds `better-sqlite3` on ABI mismatch, and smoke-tests a search. The launcher reads `.nvmrc` and prefers Homebrew `node@24`, then nvm 24, then a Node 24 binary on `PATH`.

## Layout

| Path | Purpose |
|------|---------|
| `00 Home.md` | Hub |
| `AGENTS.md` | Vault schema / write contract |
| `GROK-BOTS.md` | Grok Bot fleet: Mac host, packets, roster |
| `OMP.md` | Oh My Pi runtime and delegation guide |
| `campaigns/` | One folder per campaign |
| `templates/` | New-note templates (Obsidian Templates folder) |
| `lexicon/` | Shared terms, house rules pointers |
| `inbox/` | Scratch captures before filing (Obsidian new-note default) |
| `attachments/` | Images / embeds dropped from Obsidian |
| `.obsidian/` | Shared vault config + critical plugins |
| `.agents/skills/` | Agent procedures |
