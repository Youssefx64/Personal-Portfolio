export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
}

export const academicInterests: string[] = [
  'Large Language Models (LLMs) and their applications',
  'Retrieval-Augmented Generation (RAG) architectures',
  'Agentic AI systems and autonomous pipelines',
  'Natural Language Processing',
  'Generative AI for engineering domains (CAD, design)',
];

export const publications: Publication[] = [];
