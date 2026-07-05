import embedQuery from './embedQuery.js';

const embedding = await embedQuery('What is Express.js?');

console.log('Dimensions:', embedding.length);

console.log(embedding.slice(0, 10)); // Print the first 10 values of the embedding
