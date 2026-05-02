export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
  stars?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'CadArena',
    description:
      'End-to-end Generative AI web platform that translates natural language engineering commands into precise CAD drawings (DXF format) using Large Language Models. Engineers describe designs in plain text and the system instantly generates accurate engineering drawings.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/CadArena',
    technologies: ['Python', 'FastAPI', 'Next.js', 'Ollama', 'LLMs', 'WebSockets', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Youssefx64/CadArena',
    category: 'Generative AI',
    featured: true,
    stars: 5,
  },
  {
    id: 2,
    title: 'End-to-End Nutrition RAG System',
    description:
      'Production-ready Retrieval-Augmented Generation (RAG) system for nutrition recommendations. Integrates document ingestion, embedding pipelines, vector search (Qdrant/pgvector), and LLM-based question answering to deliver accurate, context-aware multilingual responses.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/End-to-End-Nutrition-RAG-System',
    technologies: ['Python', 'FastAPI', 'Qdrant', 'pgvector', 'OpenAI', 'Docker', 'PostgreSQL', 'RAG'],
    githubUrl: 'https://github.com/Youssefx64/End-to-End-Nutrition-RAG-System',
    category: 'Generative AI',
    featured: true,
    stars: 4,
  },
  {
    id: 3,
    title: 'Prompt Engineering with LangChain',
    description:
      'Comprehensive collection of prompt engineering techniques using LangChain — covering zero-shot, few-shot, chain-of-thought prompting, chatbots with memory, and integration with Ollama, OpenAI, and HuggingFace models.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Prompt-Engineering-using-LangChain',
    technologies: ['Python', 'LangChain', 'Ollama', 'OpenAI', 'HuggingFace', 'NLTK', 'Jupyter'],
    githubUrl: 'https://github.com/Youssefx64/Prompt-Engineering-using-LangChain',
    category: 'NLP',
    featured: true,
    stars: 6,
  },
  {
    id: 4,
    title: 'Computer Vision Roadmap',
    description:
      'Comprehensive structured roadmap for beginners entering Computer Vision. Covers classical techniques through deep learning, with curated resources, project ideas, and a clear learning path.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Computer-Vision-Roadmap',
    technologies: ['Computer Vision', 'Deep Learning', 'OpenCV', 'PyTorch', 'Python'],
    githubUrl: 'https://github.com/Youssefx64/Computer-Vision-Roadmap',
    category: 'Computer Vision',
    featured: true,
    stars: 11,
  },
  {
    id: 5,
    title: 'yctl — AI Engineer CLI',
    description:
      'Powerful personal AI Engineer CLI for Ubuntu. Scaffolds production-ready AI projects (NLP, CV, ML), inspects datasets, diagnoses system health (CUDA/GPU), and generates AI project roadmaps instantly.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/yctl-cli',
    technologies: ['Python', 'CLI', 'NLP', 'Computer Vision', 'CUDA', 'Machine Learning'],
    githubUrl: 'https://github.com/Youssefx64/yctl-cli',
    category: 'Data Science',
    stars: 5,
  },
  {
    id: 6,
    title: 'Customer Churn Prediction (DVC)',
    description:
      'End-to-end ML pipeline for customer churn prediction with full DVC (Data Version Control) integration. Features reproducible experiment tracking, pipeline management, and model versioning.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Customer-Churn-DVC',
    technologies: ['Python', 'DVC', 'Scikit-learn', 'Machine Learning', 'MLOps'],
    githubUrl: 'https://github.com/Youssefx64/Customer-Churn-DVC',
    category: 'Data Science',
    stars: 8,
  },
  {
    id: 7,
    title: 'Aether Analytics — NASA Space Apps',
    description:
      'NASA Space Apps Challenge 2025 project. Data analytics and visualization platform leveraging NASA open data for space exploration insights.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Aether-Analytics-2025-NASA-Space-Apps-Challenge',
    technologies: ['Python', 'Data Analysis', 'Visualization', 'NASA APIs'],
    githubUrl: 'https://github.com/Youssefx64/Aether-Analytics-2025-NASA-Space-Apps-Challenge',
    category: 'Data Science',
    stars: 3,
  },
  {
    id: 8,
    title: 'X-Ray Analysis with CNN',
    description:
      'Deep learning model for chest X-ray disease classification using Convolutional Neural Networks, with an interactive Gradio deployment interface for real-time inference.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Xray-Analysis-using-CNN-and-gradio-deployment',
    technologies: ['Python', 'PyTorch', 'CNN', 'Gradio', 'Medical AI', 'Jupyter'],
    githubUrl: 'https://github.com/Youssefx64/Xray-Analysis-using-CNN-and-gradio-deployment',
    category: 'Computer Vision',
    stars: 5,
  },
  {
    id: 9,
    title: 'Vector Database Semantic Search',
    description:
      'Semantic search and image search project using Pinecone and Qdrant vector databases. Demonstrates embedding generation, similarity search, and multi-modal retrieval.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Vector-Database-Semantic-Search-and-Image-Search-Project-Using-PineCone-and-Qdrant',
    technologies: ['Python', 'Pinecone', 'Qdrant', 'Embeddings', 'Semantic Search'],
    githubUrl: 'https://github.com/Youssefx64/Vector-Database-Semantic-Search-and-Image-Search-Project-Using-PineCone-and-Qdrant',
    category: 'NLP',
    stars: 3,
  },
  {
    id: 10,
    title: 'Speech Emotion Recognition',
    description:
      'End-to-end speech emotion recognition pipeline for classifying emotional states from audio signals. Applies NLP and audio feature engineering with deep learning models trained on benchmark datasets.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Automated-Essay-Scoring_NTI',
    technologies: ['Python', 'Deep Learning', 'Audio Processing', 'CNNs', 'PyTorch'],
    githubUrl: 'https://github.com/Youssefx64',
    category: 'NLP',
    stars: 3,
  },
  {
    id: 11,
    title: 'Computer Vision Journey',
    description:
      'Hands-on journey through Computer Vision applying classical techniques and deep learning to solve real-world problems — from edge detection and segmentation to object detection with YOLO.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Computer-Vision-Journey',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'NumPy', 'PyTorch'],
    githubUrl: 'https://github.com/Youssefx64/Computer-Vision-Journey',
    category: 'Computer Vision',
    stars: 3,
  },
  {
    id: 12,
    title: 'Maze Game with AI Search',
    description:
      'Maze solving game that visualizes classic AI search strategies including BFS, DFS, A*, UCS, and Hill Climbing — an interactive way to understand how AI navigates problems.',
    image: 'https://opengraph.githubassets.com/1/Youssefx64/Maze-Game-with-Ai-Search-strategies',
    technologies: ['Python', 'AI Search', 'BFS', 'A*', 'Pygame'],
    githubUrl: 'https://github.com/Youssefx64/Maze-Game-with-Ai-Search-strategies',
    category: 'Other',
    stars: 4,
  },
];

export type ProjectFilterBucket = 'All' | 'Generative AI' | 'Computer Vision' | 'NLP' | 'Data Science' | 'Other';

export const filterBuckets: ProjectFilterBucket[] = ['All', 'Generative AI', 'NLP', 'Computer Vision', 'Data Science', 'Other'];

export function projectFilterBucket(project: Project): ProjectFilterBucket {
  switch (project.category) {
    case 'NLP': return 'NLP';
    case 'Generative AI': return 'Generative AI';
    case 'Computer Vision': return 'Computer Vision';
    case 'Data Science': return 'Data Science';
    default: return 'Other';
  }
}
