class MemoryVectorStore {
  constructor() {
    this.documents = [];
  }

  add(document) {
    this.documents.push(document);
  }

  addMany(documents) {
    this.documents.push(...documents);
  }

  getAll() {
    return this.documents;
  }

  clear() {
    this.documents = [];
  }

  size() {
    return this.documents.length;
  }
}

const vectorStore = new MemoryVectorStore();

export default vectorStore;