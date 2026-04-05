---
title: "From Text to CAD: How I'm Using LLMs to Generate Engineering Drawings"
date: "2025-11-15"
tags: ["llm", "cad", "genai", "graduation-project"]
summary: "CadArena: natural language to DXF, and what LLMs can (and cannot) reliably do for geometric output."
readingTime: 8
slug: llm-to-cad-drawings
---

**CadArena** is my graduation project at Beni-Suef National University: an **end-to-end Generative AI web platform** that turns natural language engineering commands into **DXF** drawings. It is ongoing (from June 2025), and it sits at the intersection of LLMs, geometry, and product design—where small mistakes are visible immediately on the canvas.

## The problem in one sentence

CAD users think in constraints (“offset this wall by 200 mm,” “fillet these corners,” “mirror about centerline”). Traditional GUIs are powerful but heavy. The bet behind CadArena is that an LLM can **interpret intent** and drive a pipeline that emits **precise geometric entities** instead of only prose.

## System shape

The stack is deliberately full-stack: **FastAPI** and **SQLAlchemy** on the backend, **PostgreSQL** and **SQLite** where appropriate, **JWT** auth, **WebSockets** for responsive sessions, and **Next.js** with **TypeScript**, **React**, **Tailwind CSS**, and **Axios** on the frontend. For local LLM experiments I integrated **Ollama** so I could iterate without always hitting hosted APIs.

None of that matters if the **core mapping** from language to geometry is fragile—so most of my attention goes there.

## How the AI pipeline is organized

At a high level:

1. **Parse and normalize** the user command (and session context when available).
2. **Translate** to an intermediate representation—essentially structured “drawing operations” rather than raw DXF bytes.
3. **Validate** geometric feasibility (within the subset of CAD features we support).
4. **Emit** DXF and return it to the client for preview and download.

The LLM’s job is not to hallucinate arbitrary floats; it is to **propose structured operations** that downstream code can verify. That separation is what keeps the system debuggable.

## Challenges with geometric accuracy

### LLMs are fluent, geometry is brittle

A paragraph that “sounds right” can still imply an impossible construction. I learned to **narrow the output schema** the model is allowed to use and to **reject** proposals that fail validation rather than silently clamping numbers.

### Structured output is non-negotiable

Free-form text-to-DXF would be unmaintainable. I push the model toward **JSON-like or schema-bound** outputs that my engine consumes. When the model drifts, I tighten prompts, reduce degrees of freedom, or break the task into steps (plan → execute).

### Reliability beats cleverness

For engineering tools, a boring answer (“I cannot complete that without a radius”) beats a confident wrong arc. **Prompt engineering** here is partly about **refusal behavior** and partly about **disambiguation** (“did you mean inner or outer offset?”).

## What I learned about LLM reliability

### Ground with tools, not vibes

Whenever possible, the model proposes; **code computes**. Areas, intersections, and unit consistency should live in deterministic logic, not in the model’s hidden state.

### Evaluation is visual and quantitative

I maintain a small suite of **reference commands** with expected DXF properties (entity counts, bounds, layer names). Regression testing is still imperfect for geometry, but it catches gross breakage when the model or parser changes.

### Local models help the dev loop

**Ollama** made it cheap to test prompt and schema changes. Production may still use larger hosted models, but the iteration velocity locally was essential.

## Status and next steps

CadArena is **ongoing**. The hardest remaining work is not “more AI,” but **coverage and trust**: broader command classes, clearer error surfaces in the UI, and harder validation on real mechanical sketches.

### Why DXF as a target format

DXF remains a practical interchange format for many CAD and CAM workflows. Emitting DXF from a validated internal model lets users move results into tools they already trust, instead of locking them into a proprietary canvas. The trade-off is supporting a subset of entities well rather than claiming full AutoCAD parity on day one.

## Takeaway

LLMs are excellent **intent interfaces** for specialized software. They are poor **floating-point oracles**. CadArena works when I treat them as the front half of a **typed pipeline**—and when I accept that **geometric truth** still belongs to code.
