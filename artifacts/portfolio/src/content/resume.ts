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
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'C++', 'Java', 'SQL', 'Bash', 'HTML5'],
  },
  {
    name: 'GenAI & LLMs',
    icon: '🤖',
    skills: ['Large Language Models', 'Prompt Engineering', 'RAG Pipelines', 'Agentic AI', 'LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI API', 'Anthropic Claude', 'Ollama', 'LLM Fine-tuning'],
  },
  {
    name: 'NLP',
    icon: '🗣️',
    skills: ['HuggingFace Transformers', 'BERT', 'T5', 'GPT', 'spaCy', 'NLTK', 'NER', 'Sentiment Analysis', 'Text Generation', 'Bilingual NLP (Arabic-English)', 'Semantic Search'],
  },
  {
    name: 'Deep Learning',
    icon: '🧠',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'CNNs', 'Transformer Architecture', 'Transfer Learning', 'Neural Network Optimization'],
  },
  {
    name: 'Computer Vision',
    icon: '👁️',
    skills: ['OpenCV', 'YOLO', 'Faster R-CNN', 'Detectron2', 'Albumentations', 'Medical Imaging', 'Image Segmentation', 'Object Detection'],
  },
  {
    name: 'Data Science',
    icon: '📊',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'Statistical Analysis', 'Feature Engineering'],
  },
  {
    name: 'Vector Databases',
    icon: '🗄️',
    skills: ['Qdrant', 'FAISS', 'ChromaDB', 'pgvector', 'Pinecone', 'MongoDB', 'PostgreSQL'],
  },
  {
    name: 'MLOps & Deployment',
    icon: '⚙️',
    skills: ['Docker', 'FastAPI', 'Flask', 'Streamlit', 'MLflow', 'DVC', 'CI/CD', 'Model Monitoring', 'Linux'],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['Google Cloud', 'AWS', 'Azure'],
  },
];

export const whatIBuild = [
  {
    domain: '🤖 GenAI & LLMs',
    items: 'RAG-powered chatbots · Multi-agent systems · Custom GPT applications · LLM fine-tuning pipelines',
  },
  {
    domain: '🏥 Healthcare AI',
    items: 'Medical diagnosis assistants · Nutrition chatbots · X-ray classification · Clinical NLP',
  },
  {
    domain: '🔍 NLP Systems',
    items: 'Arabic-English bilingual models · Sentiment analysis · Named Entity Recognition · Text generation',
  },
  {
    domain: '👁️ Computer Vision',
    items: 'Medical imaging · Real-time object detection · Image segmentation · Custom CNN architectures',
  },
  {
    domain: '🏗️ MLOps',
    items: 'Scalable ML pipelines · API development · Model monitoring · Production deployment',
  },
];

export const currentFocus = [
  '🔥 Building production-grade RAG systems with advanced retrieval strategies',
  '🤖 Developing agentic AI workflows with LangGraph',
  '🏥 Healthcare AI & Medical chatbots',
  '🧬 Fine-tuning LLMs for domain-specific tasks',
  '⚡ Optimizing LLM inference for real-world deployment',
];

export const experiences: Experience[] = [
  {
    position: 'GenAI Engineer',
    company: 'Independent & End-to-End Projects',
    location: 'Cairo, Egypt (Remote)',
    duration: '2024 – Present',
    description: 'Designing and delivering end-to-end Generative AI systems focused on LLMs, RAG pipelines, and Agentic AI architectures.',
    bullets: [
      'Designed and delivered end-to-end Generative AI systems with strong focus on LLMs, RAG pipelines, and Agentic AI architectures.',
      'Built domain-specific RAG solutions for knowledge-grounded question answering, including data preparation, document chunking, embedding, and retrieval optimization.',
      'Developed LLM-powered virtual assistants capable of generating accurate, context-aware responses for real-world use cases.',
      'Owned the complete AI lifecycle from problem definition and system design to integration, evaluation, and iterative optimization.',
      'Applied prompt engineering and retrieval strategies to improve response relevance, reduce hallucinations, and enhance system robustness.',
      'Collaborated using Git and GitHub, following clean code practices and modular system design.',
    ],
    technologies: ['Python', 'LLMs', 'RAG', 'FastAPI', 'LangChain', 'LangGraph', 'Qdrant', 'Docker', 'HuggingFace'],
  },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. in Artificial Intelligence & Data Science',
    school: 'Faculty of Computers & Artificial Intelligence, Beni-Suef National University',
    location: 'Beni-Suef, Egypt',
    year: 'Oct 2022 – Present',
    description: 'Comprehensive program covering AI, Machine Learning, Deep Learning, NLP, and Computer Vision with a strong mathematical foundation.',
    highlights: [
      'Relevant Coursework: AI, Machine Learning, Deep Learning, NLP, Computer Vision, Data Structures, Algorithms',
      'Graduation Project: CadArena — LLM-powered system that translates natural language into CAD drawings (DXF)',
    ],
  },
];

export const certifications: Certification[] = [
  { name: 'Building LLM Applications With Prompt Engineering', issuer: 'NVIDIA Deep Learning Institute', badge: 'nvidia' },
  { name: 'Generative AI Summer Training Program', issuer: 'NVIDIA Deep Learning Institute (DLI)', badge: 'nvidia' },
  { name: 'AI for All: From Basics to GenAI Practice', issuer: 'NVIDIA', badge: 'nvidia' },
  { name: 'Supervised Machine Learning: Regression and Classification', issuer: 'Stanford University & DeepLearning.AI', badge: 'deeplearning' },
  { name: 'Natural Language Processing', issuer: 'National Telecommunications Institute (NTI)', badge: 'nti' },
  { name: 'Deep Learning', issuer: 'National Telecommunications Institute (NTI)', badge: 'nti' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', badge: 'oracle' },
  { name: 'Microsoft Data Engineer', issuer: 'Microsoft (DEPI)', badge: 'microsoft' },
  { name: 'Huawei Big Data Associate', issuer: 'Huawei', badge: 'huawei' },
];

// Legacy alias
export const skillCategories = skillGroups;
