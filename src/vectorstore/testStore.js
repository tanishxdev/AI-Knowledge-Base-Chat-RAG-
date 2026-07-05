import vectorStore from "./memoryVectorStore.js";

vectorStore.add({
  id: 1,
  content: "Hello World",
  embedding: [1, 2, 3],
  metadata: {
    source: "test.md",
  },
});

console.log(vectorStore.getAll());
console.log("Size:", vectorStore.size());
console.log("Clearing vector store...", vectorStore.clear());
console.log("Size after clearing:", vectorStore.size());