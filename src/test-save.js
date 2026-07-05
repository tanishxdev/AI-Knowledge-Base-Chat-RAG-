import saveVectors from "./persistence/saveVectors.js";

await saveVectors([
  {
    text: "hello",
    embedding: [1, 2, 3],
  },
]);