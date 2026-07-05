# 🤖 AI CLI Assistant

A command-line AI assistant capable of answering questions from a custom knowledge base using semantic retrieval and Large Language Models.

The assistant retrieves relevant information before generating responses, making answers more reliable and grounded.

---

## 🚀 Features

- Interactive CLI
- Semantic Search
- Knowledge Base Chat
- Source Attribution
- Vector Embedding Cache
- Prompt Engineering
- Modular AI Pipeline
- Hallucination Reduction

---

## 🏗 System Flow

```

User Question
      │
      ▼
Generate Query Embedding
      │
      ▼
Similarity Search
      │
      ▼
Retrieve Top Chunks
      │
      ▼
Prompt Builder
      │
      ▼
Groq LLM
      │
      ▼
Answer

```

---

## 🛠 Tech Stack

Backend

- Node.js
- JavaScript

AI

- Gemini Embeddings
- Groq

Concepts

- RAG
- Semantic Search
- Embeddings
- Cosine Similarity
- Prompt Engineering

---

## 📂 Architecture

```

CLI

↓

Retriever

↓

Vector Store

↓

Prompt Builder

↓

LLM

↓

Answer

```

---

## 📦 Folder Structure

```

src/
├── chat/
├── loaders/
├── splitters/
├── embeddings/
├── retrieval/
├── prompts/
├── llm/
├── persistence/
├── vectorstore/

```

---

## 🧠 AI Pipeline

1. User enters a question.

2. Question is converted into an embedding.

3. Similar documents are retrieved.

4. Retrieved context is combined into a prompt.

5. Groq generates a grounded answer.

6. Source files are displayed.

---

## 📚 Concepts Used

- Embeddings
- Semantic Search
- Vector Search
- Retrieval
- Prompt Engineering
- Context Injection
- Similarity Ranking
- Hallucination Reduction

---

## 📸 Sample Output

```

Ask a question:

What is Express?

Retrieved Sources

express.md

Answer

Express.js is a minimal and flexible web framework for Node.js...

```

---

## 🚀 Future Enhancements

- Conversation Memory
- Multi-turn Chat
- PDF Support
- Website Support
- Chroma Vector DB
- FAISS
- LangChain
- LangGraph
- Streaming
- Web Interface

---

## 📈 Resume Highlights

- Built an interactive AI assistant using Node.js and LLM APIs.
- Implemented semantic retrieval with embeddings and cosine similarity.
- Designed a modular AI pipeline separating ingestion, retrieval, prompting, and generation.
- Improved response quality through retrieval-based context injection and configurable relevance thresholds.

---

## 🎯 Learning Outcomes

Through this project I learned:

- Building end-to-end AI applications
- Working with embeddings
- Semantic retrieval
- Retrieval-Augmented Generation
- Prompt construction
- LLM orchestration
- AI application architecture
git init