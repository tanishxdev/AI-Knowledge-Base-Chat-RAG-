# 📚 AI Knowledge Base Chat (RAG)

An end-to-end Retrieval-Augmented Generation (RAG) application built from scratch using Node.js.

Instead of relying solely on an LLM's pretrained knowledge, this application retrieves relevant information from a custom Markdown knowledge base using semantic search before generating responses.

---

## 🚀 Features

- Chat with Markdown documents
- Semantic Search using Embeddings
- Cosine Similarity Retrieval
- Recursive Text Chunking
- Vector Embedding Cache
- Source Citation
- Interactive CLI Chat
- Hallucination Reduction using Retrieval
- Modular Architecture
- Groq LLM Integration
- Gemini Embedding API

---

## 🏗 Architecture

```

                Markdown Files
                      │
                      ▼
             Markdown Loader
                      │
                      ▼
         Recursive Text Splitter
                      │
                      ▼
          Gemini Embedding Model
                      │
                      ▼
          In-Memory Vector Store
                      │
                      ▼
             Similarity Search
                      │
                      ▼
             Prompt Construction
                      │
                      ▼
                 Groq LLM
                      │
                      ▼
                 Final Answer

```

---

## 🛠 Tech Stack

Backend

- Node.js
- JavaScript (ES Modules)

AI

- Gemini Embeddings API
- Groq LLM

Libraries

- @google/genai
- groq-sdk
- @langchain/textsplitters

Concepts

- Embeddings
- Semantic Search
- Cosine Similarity
- RAG
- Prompt Engineering
- Chunking
- Vector Search

---

## 📂 Project Structure

```

project-01-rag-chat/
│
├── docs/
│   ├── express.md
│   ├── jwt.md
│   └── nodejs.md
│
├── src/
│   ├── loaders/
│   ├── splitters/
│   ├── embeddings/
│   ├── retrieval/
│   ├── prompts/
│   ├── llm/
│   ├── persistence/
│   ├── cache/
│   ├── vectorstore/
│   ├── chat/
│   └── index.js
│
├── package.json
└── README.md

```

---

## ⚙ Pipeline

### 1. Load Documents

Reads all Markdown files from the docs directory.

↓

### 2. Split Documents

Uses Recursive Character Text Splitter to create overlapping chunks.

↓

### 3. Generate Embeddings

Each chunk is converted into a high-dimensional embedding vector using Gemini.

↓

### 4. Cache Embeddings

Embeddings are stored locally to avoid recomputation.

↓

### 5. Embed User Query

The user's question is embedded using the same embedding model.

↓

### 6. Semantic Search

Cosine Similarity retrieves the most relevant chunks.

↓

### 7. Prompt Construction

Retrieved context + user question are combined into a structured prompt.

↓

### 8. Answer Generation

Groq generates the final grounded response.

---

## 🧠 Concepts Implemented

- Retrieval-Augmented Generation
- Embeddings
- Vector Space
- Cosine Similarity
- Semantic Search
- Chunking
- Metadata
- Retrieval Pipeline
- Prompt Engineering
- Hallucination Reduction
- Embedding Cache

---

## 💻 Example

Question

```

What is JWT?

```

Retrieved Context

```

jwt.md

Score: 0.71

```

Answer

```

JWT is a compact, URL-safe token format used for securely transferring claims between parties.

```

---

## 🚀 Future Improvements

- PDF Loader
- Website Loader
- Chroma DB
- Pinecone
- FAISS
- Hybrid Search
- Multi Query Retrieval
- Metadata Filtering
- Streaming Responses
- Web UI
- Authentication

---

## 📈 Resume Highlights

- Built a Retrieval-Augmented Generation (RAG) application from scratch using Node.js.
- Implemented document loading, recursive chunking, embedding generation, cosine similarity search, prompt construction, and answer generation.
- Reduced embedding recomputation by introducing persistent vector caching.
- Integrated Gemini Embeddings and Groq LLM to generate grounded responses with source attribution.

---

## 📚 Learning Outcomes

This project helped me understand:

- How embeddings work
- Why semantic search outperforms keyword search
- How vector search powers RAG systems
- How prompts are constructed
- How LLMs are grounded using retrieved context
- How production RAG pipelines are organized
