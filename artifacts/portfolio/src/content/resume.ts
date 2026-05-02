export interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  badge?: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming',
    skills: ['Python', 'Go (Basic)', 'SQL', 'Bash'],
  },
  {
    name: 'Generative AI & LLMs',
    skills: ['Large Language Models', 'Prompt Engineering', 'RAG Pipelines', 'Agentic AI', 'Ollama', 'OpenAI API', 'LangChain'],
  },
  {
    name: 'NLP',
    skills: ['HuggingFace Transformers', 'spaCy', 'NLTK', 'Text Embeddings', 'Semantic Search'],
  },
  {
    name: 'Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'CNNs', 'Transformers Architecture', 'Transfer Learning'],
  },
  {
    name: 'Vector Databases',
    skills: ['Qdrant', 'FAISS', 'ChromaDB', 'pgvector', 'MongoDB', 'Pinecone'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git & GitHub', 'FastAPI', 'DVC', 'PostgreSQL', 'Linux'],
  },
];

export const experiences: Experience[] = [
  {
    position: 'GenAI Engineer',
    company: 'Independent & End-to-End Projects',
    location: 'Cairo, Egypt (Remote)',
    duration: '2024 – Present',
    description:
      'Designing and delivering end-to-end Generative AI systems focused on LLMs, RAG pipelines, and Agentic AI architectures.',
    bullets: [
      'Designed and delivered end-to-end Generative AI systems with strong focus on LLMs, RAG pipelines, and Agentic AI architectures.',
      'Built domain-specific RAG solutions for knowledge-grounded question answering, including data preparation, document chunking, embedding, and retrieval optimization.',
      'Developed LLM-powered virtual assistants capable of generating accurate, context-aware responses for real-world use cases.',
      'Owned the complete AI lifecycle from problem definition and system design to integration, evaluation, and iterative optimization.',
      'Applied prompt engineering and retrieval strategies to improve response relevance, reduce hallucinations, and enhance system robustness.',
      'Collaborated using Git and GitHub, following clean code practices and modular system design.',
    ],
    technologies: ['Python', 'LLMs', 'RAG', 'FastAPI', 'LangChain', 'Qdrant', 'Docker', 'HuggingFace'],
  },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. in Artificial Intelligence & Data Science',
    school: 'Faculty of Computers & Artificial Intelligence, Beni-Suef National University',
    location: 'Beni-Suef, Egypt',
    year: 'Oct 2022 – Present',
    description:
      'Comprehensive program covering AI, Machine Learning, Deep Learning, NLP, and Computer Vision with a strong mathematical foundation.',
    highlights: [
      'Relevant Coursework: AI, Machine Learning, Deep Learning, NLP, Computer Vision, Data Structures, Algorithms',
      'Graduation Project: CadArena — LLM-powered system that translates natural language into CAD drawings (DXF)',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Building LLM Applications With Prompt Engineering',
    issuer: 'NVIDIA Deep Learning Institute',
    badge: 'nvidia',
  },
  {
    name: 'Generative AI Summer Training Program',
    issuer: 'NVIDIA Deep Learning Institute (DLI)',
    badge: 'nvidia',
  },
  {
    name: 'AI for All: From Basics to GenAI Practice',
    issuer: 'NVIDIA',
    badge: 'nvidia',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford University & DeepLearning.AI',
    badge: 'deeplearning',
  },
  {
    name: 'Natural Language Processing',
    issuer: 'National Telecommunications Institute (NTI)',
    badge: 'nti',
  },
  {
    name: 'Deep Learning',
    issuer: 'National Telecommunications Institute (NTI)',
    badge: 'nti',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    badge: 'oracle',
  },
  {
    name: 'Microsoft Data Engineer',
    issuer: 'Microsoft (DEPI)',
    badge: 'microsoft',
  },
  {
    name: 'Huawei Big Data Associate',
    issuer: 'Huawei',
    badge: 'huawei',
  },
];

export const skillCategories = skillGroups;
