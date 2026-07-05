import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_PATH = path.join(__dirname, "../cache/vectors.json");

export default async function saveVectors(vectors) {
  await fs.mkdir(path.dirname(CACHE_PATH), {
    recursive: true,
  });

  await fs.writeFile(
    CACHE_PATH,
    JSON.stringify(vectors, null, 2),
    "utf8"
  );

  console.log("Vectors saved.");
}