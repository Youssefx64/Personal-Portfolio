export interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export const skillCategories: { name: string; skills: string[] }[] = [
  { name: 'Programming', skills: ['Python', 'Go (Basic)'] },
  {
    name: 'Generative AI & LLMs',
    skills: ['Large Language Models', 'Prompt Engineering', 'RAG', 'Agentic AI'],
  },
  { name: 'NLP', skills: ['Transformers', 'Hugging Face', 'spaCy', 'NLTK', 'Text Embeddings'] },
  { name: 'Deep Learning', skills: ['PyTorch', 'TensorFlow'] },
  {
    name: 'Vector Databases',
    skills: ['FAISS', 'ChromaDB', 'Qdrant', 'PGVector', 'MongoDB'],
  },
  { name: 'Development Tools', skills: ['Git', 'GitHub', 'Docker'] },
];

export const experiences: Experience[] = [
  {
    position: 'GenAI Engineer',
    company: 'Independent & End-to-End Projects',
    location: 'Menof, Menoufia, Egypt',
    duration: '2024 – Present',
    description: [
      'Designed end-to-end Generative AI systems focused on LLMs, RAG pipelines, and Agentic AI.',
      'Built domain-specific RAG solutions: data preparation, chunking, embedding, and retrieval optimization.',
      'Developed LLM-powered virtual assistants for real-world use cases.',
      'Owned the full AI lifecycle: problem definition → system design → integration → evaluation.',
      'Applied prompt engineering to reduce hallucinations and improve response relevance.',
    ].join('\n'),
    technologies: [
      'Python',
      'LLMs',
      'RAG',
      'Agentic AI',
      'Prompt Engineering',
      'FastAPI',
      'PostgreSQL',
      'Qdrant',
      'Docker',
      'Git',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. in Artificial Intelligence & Data Science',
    school: 'Faculty of Computers & Artificial Intelligence, Beni-Suef National University',
    location: 'Beni Suef, Egypt',
    year: '10/2022 – Present',
    description:
      'Relevant coursework: AI, Machine Learning, Deep Learning, NLP, Computer Vision, Data Structures, and Algorithms. Graduation project: CadArena (Generative AI platform for CAD from natural language).',
  },
];

export const certifications: Certification[] = [
  { name: 'Building LLM Applications With Prompt Engineering', issuer: 'NVIDIA DLI' },
  { name: 'AI for All: From Basics to GenAI Practice', issuer: 'NVIDIA' },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford & DeepLearning.AI',
  },
  { name: 'Natural Language Processing', issuer: 'NTI' },
  { name: 'Deep Learning', issuer: 'NTI' },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
  },
  { name: 'Microsoft Data Engineer', issuer: 'DEPI' },
  { name: 'Huawei Big Data Associate', issuer: 'Huawei' },
];
