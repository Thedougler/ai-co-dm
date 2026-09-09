#!/bin/sh
# SessionStart: refresh the local QMD index without holding the session.
cat >/dev/null || true

ROOT="${GROK_WORKSPACE_ROOT:-}"
if [ -z "$ROOT" ]; then
  ROOT=$(CDPATH= cd -P "$(dirname "$0")/../.." && pwd -P)
fi
cd "$ROOT" || exit 0

nohup sh -c './scripts/qmd update && (./scripts/qmd embed --no-gpu 2>/dev/null || ./scripts/qmd embed)' \
  </dev/null >/dev/null 2>&1 &
exit 0
