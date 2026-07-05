import ai from "../llm/geminiClient.js";

async function embedQuery(query) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: query,
  });

  return response.embeddings[0].values;
}

export default embedQuery;