import loadVectors from './persistence/loadVectors.js';
import saveVectors from './persistence/saveVectors.js';
import { loadMarkdownDocuments } from './loaders/markdownLoader.js';
import splitDocuments from './splitters/recursiveSplitter.js';
import { embedDocuments } from './embeddings/embedDocuments.js';
import embedQuery from './embeddings/embedQuery.js';
import vectorStore from './vectorstore/memoryVectorStore.js';
import similaritySearch from './retrieval/similaritySearch.js';
import buildPrompt from './prompts/buildPrompt.js';
import generateAnswer from './llm/generateAnswer.js';
import askQuestion from './chat/chatLoop.js';

async function main() {
  let embeddedChunks = await loadVectors();

  if (!embeddedChunks) {
    console.log('Building knowledge base...\n');

    const docs = await loadMarkdownDocuments();

    const chunks = await splitDocuments(docs);

    embeddedChunks = await embedDocuments(chunks);

    await saveVectors(embeddedChunks);
  } else {
    console.log('Using cached embeddings.\n');
  }

  vectorStore.clear();
  vectorStore.addMany(embeddedChunks);

  while (true) {
    const question = askQuestion();

    if (!question.trim()) {
      console.log('Please enter a question.\n');
      continue;
    }

    if (question.toLowerCase() === 'exit') {
      console.log('\nGoodbye 👋');
      break;
    }

    const queryEmbedding = await embedQuery(question);

    const results = similaritySearch(queryEmbedding, vectorStore.getAll(), 3);

    console.log(
      results.map((r) => ({
        file: r.metadata.fileName,
        score: r.score,
      }))
    );

    if (results.length === 0 || results[0].score < 0.55) {
      console.log('\nNo relevant documents found.\n');
      continue;
    }

    const prompt = buildPrompt(question, results);

    const answer = await generateAnswer(prompt);

    console.log('\n==============================');
    console.log('QUESTION');
    console.log('==============================');
    console.log(question);

    console.log('\nRetrieved Chunks:\n');

    results.forEach((chunk, index) => {
      console.log(`Chunk ${index + 1}`);
      console.log('File:', chunk.metadata.fileName);
      console.log('Score:', chunk.score.toFixed(4));
      console.log(chunk.pageContent.slice(0, 150));
      console.log('----------------------------');
    });

    console.log('\n==============================');
    console.log('ANSWER');
    console.log('==============================');
    console.log(answer);

    console.log('\n------------------------------');
    console.log('SOURCES');
    console.log('------------------------------');

    results.forEach((result, index) => {
      console.log(
        `${index + 1}. ${result.metadata.fileName} (Score: ${result.score.toFixed(4)})`
      );
    });

    console.log();
  }
}

await main();
