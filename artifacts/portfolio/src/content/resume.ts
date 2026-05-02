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

export const skillCategories: { name: string; skills: string[] }[] = [];

export const experiences: Experience[] = [];

export const education: Education[] = [];

export const certifications: Certification[] = [];
