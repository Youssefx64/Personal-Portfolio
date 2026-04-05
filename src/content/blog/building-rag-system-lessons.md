---
title: "Building a Production-Ready RAG System: Lessons from My Nutrition AI Project"
date: "2025-12-01"
tags: ["rag", "llm", "python", "genai"]
summary: "Chunking, embeddings, Qdrant vs pgvector, prompt templates, and what I would redo on a second pass."
readingTime: 9
slug: building-rag-system-lessons
---

Between August and December 2025 I built a **nutrition-focused RAG application** end to end: ingest documents, embed them, retrieve the best chunks, and answer questions with an LLM behind a **FastAPI** service. This post is the engineering story—not a tutorial clone—focused on decisions that actually moved quality.

## Chunking is where “smart retrieval” is won or lost

I started with fixed-size character chunks because it is easy to prototype. Retrieval quality was mediocre: nutrition guidelines reference tables, numbered lists, and cross-references that were split mid-thought. Switching to **structure-aware chunking** (respecting headings and list blocks where possible) reduced nonsense hits noticeably.

Practical rule I now repeat to myself: **optimize for semantic coherence per chunk**, not for equal token counts. If a chunk cannot stand alone as “the unit of meaning” a user might ask about, the model will struggle even with a perfect embedding model.

## Embeddings: pick a baseline, then measure

I experimented with multiple embedding providers as part of supporting **OpenAI** and **Cohere** in the same codebase. The lesson was not “which API is best in the abstract” but **which embedding space matched my documents and query style** after chunking.

I kept a small **offline evaluation set**: question–passage pairs I wrote by hand from the source PDFs. I scored recall@k on the vector store before involving the LLM at all. If retrieval fails, no prompt engineering fixes the answer.

## Qdrant vs pgvector: two valid tools, different trade-offs

I implemented paths for **Qdrant** and **pgvector** on **PostgreSQL** because deployment contexts differ: some teams already run Postgres everywhere; others want a dedicated vector service with filtering ergonomics I liked out of the box.

**Qdrant** felt natural when I cared about rapid iteration on collections, payload filters, and isolating the vector index from transactional data.

**pgvector** shined when I wanted **one database** for relational metadata, user accounts (if added later), and vectors—fewer moving parts for a small production footprint.

Neither choice replaces good chunking. Both punished sloppy preprocessing equally.

## Prompt templating: ground first, then speak

My final templates followed a boring structure that worked:

1. **System**: you are a nutrition assistant; use only the provided context; if context is insufficient, say so.
2. **Context**: top-k chunks with source labels.
3. **User**: the question.

I explicitly instructed the model to **quote or paraphrase constraints** from the context (for example daily limits) instead of inventing precise numbers. That single guardrail cut obvious hallucinations on edge questions.

A fragment of the idea in Python (simplified):

```python
def build_prompt(question: str, chunks: list[str]) -> str:
    context = "\n\n".join(f"[{i+1}] {c}" for i, c in enumerate(chunks))
    return (
        "Answer using ONLY the context. If the context does not contain the answer, reply that you do not know.\n\n"
        f"CONTEXT:\n{context}\n\nQUESTION:\n{question}"
    )
```

## API and operations: treat RAG like a product

The “ML” half was only part of the work. A **RESTful API** with clear error shapes, timeouts on embedding calls, and **Docker** packaging mattered as much as cosine similarity. I used **Alembic** so schema changes for pgvector-related tables stayed reproducible across environments.

### Logging and failure modes

I logged retrieval scores and chunk IDs for each request (with redaction appropriate for production). When users reported a wrong answer, I could replay whether the failure was **retrieval** (bad chunks) or **generation** (model overreach).

## What I would do earlier next time

### Run retrieval benchmarks before polishing the UI

I spent time on API ergonomics while retrieval was still noisy. Reordering would not change the outcome, but it would have shortened the loop.

### Define “groundedness” tests as code

A handful of pytest cases that assert citations or forbidden answers for known tricky prompts would have caught regressions when I swapped models.

## Closing thought

RAG is often sold as “plug in a vector DB and call GPT.” In practice, **document construction, evaluation, and deployment discipline** separate demos from systems you can stand behind. The nutrition project forced me to treat those pieces as first-class—and I am a better engineer for it.
