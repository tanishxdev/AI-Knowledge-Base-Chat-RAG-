function buildPrompt(question, retrievedChunks) {
  const context = retrievedChunks
    .map((chunk, index) => {
      return `Document ${index + 1}

${chunk.pageContent}`;
    })
    .join("\n\n----------------------\n\n");

  return `
You are a helpful AI assistant.

Answer ONLY using the provided context.

If the answer cannot be found in the context, reply:

"I don't know based on the provided documents."

========================

CONTEXT

${context}

========================

QUESTION

${question}

========================

ANSWER
`;
}

export default buildPrompt;