import { resolve } from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

export default function qmdRefresh(pi: ExtensionAPI): void {
  pi.on("session_start", async (_event, ctx) => {
    await pi.exec(resolve(ctx.cwd, "scripts/session-start"), [], {
      cwd: ctx.cwd,
    });
  });

  pi.on("session_shutdown", async (_event, ctx) => {
    await pi.exec(resolve(ctx.cwd, "scripts/session-end"), [], {
      cwd: ctx.cwd,
    });
  });
}
