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

export const projects: Project[] = [];

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
