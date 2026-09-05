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

## Agent conventions

See [AGENTS.md](AGENTS.md). Short version: use wikilinks, keep notes small, update indexes when you add pages, never paste proprietary book text, no real player PII in this public repo. Agents ignore Obsidian UI chrome — markdown is the product.

## Layout

| Path | Purpose |
|------|---------|
| `00 Home.md` | Hub |
| `campaigns/` | One folder per campaign |
| `templates/` | New-note templates (Obsidian Templates folder) |
| `lexicon/` | Shared terms, house rules pointers |
| `inbox/` | Scratch captures before filing (Obsidian new-note default) |
| `attachments/` | Images / embeds dropped from Obsidian |
| `.obsidian/` | Shared vault config + critical plugins |
| `.agent/skills/` | Agent procedures |
