import matter from 'gray-matter';
import { estimateReadingTimeMinutes } from './readingTime';
import { slugifyHeading } from './slugify';

export interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  summary?: string;
  readingTime?: number;
  slug?: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function pathToSlug(path: string): string {
  const base = path.split('/').pop() ?? path;
  return base.replace(/\.md$/i, '');
}

const rawModules = import.meta.glob<string>('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function parsePost(filePath: string, raw: string): BlogPost {
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;
  const slugFromFile = pathToSlug(filePath);
  const slug = fm.slug?.trim() || slugFromFile;

  if (!fm.title || !fm.date) {
    throw new Error(`Blog post ${filePath} requires title and date in frontmatter`);
  }

  const tags = Array.isArray(fm.tags) ? fm.tags.map(String) : [];
  const readingTime =
    typeof fm.readingTime === 'number' && fm.readingTime > 0
      ? fm.readingTime
      : estimateReadingTimeMinutes(content);

  return {
    slug,
    title: fm.title,
    date: normalizeDate(fm.date),
    tags,
    summary: fm.summary,
    readingTime,
    content: content.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(rawModules).map(([path, raw]) => parsePost(path, raw));
}

export function getAllPostsSorted(): BlogPost[] {
  return getAllPosts().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const sorted = getAllPostsSorted();
  const i = sorted.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: sorted[i + 1] ?? null,
    next: sorted[i - 1] ?? null,
  };
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.tags.forEach((t) => set.add(t)));
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** Strip YAML frontmatter if present (for heading scan). */
function bodyWithoutFrontmatter(raw: string): string {
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) return raw.slice(end + 4).trim();
  }
  return raw;
}

/**
 * Build TOC from markdown source using ## and ### only.
 */
export function extractTocFromMarkdown(markdown: string): TocItem[] {
  const body = bodyWithoutFrontmatter(markdown);
  const lines = body.split('\n');
  const toc: TocItem[] = [];

  for (const line of lines) {
    const h2 = /^##\s+(.+)$/.exec(line);
    const h3 = /^###\s+(.+)$/.exec(line);
    const raw = h2?.[1] ?? h3?.[1];
    if (!raw) continue;
    const text = raw.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\([^)]+\)/g, '$1').trim();
    const level = h2 ? 2 : 3;
    toc.push({ id: slugifyHeading(text), text, level: level as 2 | 3 });
  }

  return toc;
}
