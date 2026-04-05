import { site } from '../config/site';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'CadArena',
    description:
      'Graduation project (ongoing): end-to-end Generative AI web platform that translates natural language engineering commands into precise CAD drawings (DXF). Uses LLMs to map instructions to geometric and parametric representations with a focus on reliability, geometric accuracy, and usability.',
    image: '/photo_2025-07-03_11-51-27.jpg',
    technologies: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'SQLite',
      'JWT',
      'WebSockets',
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Axios',
      'Ollama',
      'Git',
      'GitHub',
    ],
    githubUrl: site.github,
    category: 'Generative AI',
  },
  {
    id: 2,
    title: 'Nutrition RAG System',
    description:
      'Production-ready end-to-end RAG system for nutrition recommendations: document ingestion, embedding pipelines, vector search, and LLM-based question answering. RESTful API for semantic search and multi-provider LLM and vector backends.',
    image: '/Adobe Express - file.jpg',
    technologies: [
      'Python',
      'FastAPI',
      'Qdrant',
      'pgvector',
      'PostgreSQL',
      'OpenAI',
      'Cohere',
      'Docker',
      'Alembic',
    ],
    githubUrl: site.github,
    category: 'NLP',
  },
  {
    id: 3,
    title: 'Speech Emotion Recognition System',
    description:
      'End-to-end speech emotion recognition pipeline classifying emotional states from audio. Combines audio feature engineering with deep learning (CNNs) trained on multiple benchmark datasets; documented on Kaggle.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PyTorch', 'CNNs', 'Audio Processing', 'Kaggle'],
    githubUrl: 'https://www.kaggle.com/code/yousseftaha98/speech-emotion-recognition-ser',
    category: 'NLP',
  },
];

/** Filter tabs on /projects (maps internal `category` to a bucket). */
export type ProjectFilterBucket = 'Computer Vision' | 'NLP' | 'Data Science' | 'Other';

export function projectFilterBucket(project: Project): ProjectFilterBucket {
  switch (project.category) {
    case 'NLP':
      return 'NLP';
    case 'Generative AI':
      return 'Other';
    case 'Computer Vision':
      return 'Computer Vision';
    case 'Data Science':
      return 'Data Science';
    default:
      return 'Other';
  }
}
