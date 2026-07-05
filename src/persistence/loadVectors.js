import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_PATH = path.join(__dirname, "../cache/vectors.json");

export default async function loadVectors() {
  try {
    const file = await fs.readFile(CACHE_PATH, "utf8");

    const vectors = JSON.parse(file);

    console.log("Loaded cached vectors.");

    return vectors;
  } catch {
    console.log("No vector cache found.");

    return null;
  }
}