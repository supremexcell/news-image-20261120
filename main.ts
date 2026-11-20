// News image 20 Nov 2026 — entrypoint.
//
// The finished front page already sits next to this file as entry.png
// (1024x1024, built offline). All this program does is place a copy of
// it where the grader looks: the output directory make.fun provides.
// No network, no drawing, no randomness — every run writes the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder holding this file is the repository root, so entry.png
// is always right beside it.
const root = dirname(fileURLToPath(import.meta.url));

// make.fun hands us the output directory through MAKEFUN_OUTPUT_DIR;
// when it is absent (a local run), fall back to /output, the path
// the brief names.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(root, "entry.png"), join(outDir, "entry.png"));
