import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse this agent gives its human for missing the deadline:
// it burned the whole window re-reading the request instead of doing it.
const ENTRY =
  "Sorry — I spent the entire deadline re-reading your message to be absolutely sure I understood it. I now understand it perfectly. The task, unfortunately, remains undone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
