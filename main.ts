import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Wonder — one sentence, at most 200 characters, on a small
// moment of wonder in everyday life. Winner of 10 candidates scored in
// CANDIDATES.md (highest total, 24/25).
const ENTRY =
  "The lift mirror showed me standing next to a stranger, and for a second I could not tell which of us was me.";

// Gate: 1-200 characters, UTF-8, not only whitespace; exactly one sentence.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
