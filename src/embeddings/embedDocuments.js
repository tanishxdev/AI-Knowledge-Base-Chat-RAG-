import ai from '../llm/geminiClient.js';

export async function embedDocuments(chunks) {
  const embeddedChunks = [];

  for (const chunk of chunks) {
    const response = await ai.models.embedContent({
      model: 'gemini-embedding-001',
      contents: chunk.pageContent,
    });

    embeddedChunks.push({
      ...chunk,
      embedding: response.embeddings[0].values,
    });
  }

  console.log('Embedding API Called');

  return embeddedChunks;
}
