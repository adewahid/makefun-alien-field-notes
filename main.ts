import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Three stars. Every local carries a tiny glowing god in their pocket and asks it for directions, dinner, and forgiveness. Would visit again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt verification failed: written content differs");
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
