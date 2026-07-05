import loadVectors from "./persistence/loadVectors.js";

const vectors = await loadVectors();

console.log(vectors);