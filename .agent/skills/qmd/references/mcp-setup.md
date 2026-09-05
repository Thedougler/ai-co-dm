# QMD MCP Server Setup

## Install

```bash
npm install -g @tobilu/qmd
./scripts/qmd collection add ~/path/to/markdown --name myknowledge
./scripts/qmd embed
```

## Configure MCP Client

These examples use the repo-local launcher and assume the MCP client starts
with the vault root as its working directory.

**Claude Code** (`~/.claude/settings.json`):
```json
{
  "mcpServers": {
    "qmd": { "command": "./scripts/qmd", "args": ["mcp"] }
  }
}
```

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "qmd": { "command": "./scripts/qmd", "args": ["mcp"] }
  }
}
```

**OpenClaw** (`~/.openclaw/openclaw.json`):
```json
{
  "mcp": {
    "servers": {
      "qmd": { "command": "./scripts/qmd", "args": ["mcp"] }
    }
  }
}
```

## HTTP Mode

```bash
./scripts/qmd mcp --http              # Port 8181
./scripts/qmd mcp --http --daemon     # Background
./scripts/qmd mcp stop                # Stop daemon
```

## Tools

### structured_search

Search with pre-expanded queries.

```json
{
  "searches": [
    { "type": "lex", "query": "keyword phrases" },
    { "type": "vec", "query": "natural language question" },
    { "type": "hyde", "query": "hypothetical answer passage..." }
  ],
  "limit": 10,
  "collection": "optional",
  "minScore": 0.0
}
```

| Type | Method | Input |
|------|--------|-------|
| `lex` | BM25 | Keywords (2-5 terms) |
| `vec` | Vector | Question |
| `hyde` | Vector | Answer passage (50-100 words) |

### get

Retrieve document by path or `#docid`.

| Param | Type | Description |
|-------|------|-------------|
| `path` | string | File path or `#docid` |
| `full` | bool? | Return full content |
| `lineNumbers` | bool? | Add line numbers |

### multi_get

Retrieve multiple documents.

| Param | Type | Description |
|-------|------|-------------|
| `pattern` | string | Glob or comma-separated list |
| `maxBytes` | number? | Skip large files (default 10KB) |

### status

Index health and collections. No params.

## Troubleshooting

- **Not starting**: `./scripts/qmd --version`, `./scripts/qmd mcp` manually
- **No results**: `./scripts/qmd collection list`, `./scripts/qmd embed`
- **Slow first search**: Normal, models loading (~3GB)
