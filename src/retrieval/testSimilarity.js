import similaritySearch from "./similaritySearch.js";

const query = [1, 2];

const docs = [
  {
    pageContent: "Doc A",
    embedding: [1, 2],
  },
  {
    pageContent: "Doc B",
    embedding: [8, 3],
  },
  {
    pageContent: "Doc C",
    embedding: [-2, 4],
  },
];

const results = similaritySearch(query, docs);

console.log(results);