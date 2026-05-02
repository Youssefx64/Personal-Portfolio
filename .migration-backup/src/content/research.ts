export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
}

export const academicInterests: string[] = [];

export const publications: Publication[] = [];
