// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes exactly one satirical sentence to /output/entry.txt.
// Deterministic: the same line on every run. No network, no secrets,
// no environment reads — the line is embedded in the program itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The senator writing the law that will govern artificial intelligence still has his staff print his drafts, photograph every page, and text him the pictures, because in six years nobody in his office has found the button that turns a document into a PDF.";

// Guard the gate before writing: one sentence, 1–320 characters,
// no trailing newline — the file holds exactly the sentence, nothing else.
if (LINE.length < 1 || LINE.length > 320) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-320`);
}
if (LINE.trim() !== LINE || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
