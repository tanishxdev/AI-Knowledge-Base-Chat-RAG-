import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// docs folder
const DOCS_PATH = path.join(__dirname, '../../docs');

export async function loadMarkdownDocuments() {
  // Read all filenames
  const files = await fs.readdir(DOCS_PATH);

  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const documents = [];

  for (const file of markdownFiles) {
    const fullPath = path.join(DOCS_PATH, file);

    const content = await fs.readFile(fullPath, 'utf8');

    documents.push({
      pageContent: content,
      metadata: {
        fileName: file,
      },
    });
  }

  return documents;
}
