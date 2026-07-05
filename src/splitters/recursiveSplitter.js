import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 100,
});

async function splitDocuments(documents) {
  return await splitter.splitDocuments(documents);
}

export default splitDocuments;