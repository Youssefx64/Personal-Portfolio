import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from '../config/site';
import ProjectCard from '../components/ui/ProjectCard';
import Tag from '../components/ui/Tag';
import {
  projects,
  projectFilterBucket,
  type ProjectFilterBucket,
} from '../content/projects';

const FILTERS: ('All' | ProjectFilterBucket)[] = ['All', 'Computer Vision', 'NLP', 'Data Science', 'Other'];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => projectFilterBucket(p) === filter);
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="CadArena, Nutrition RAG, and speech emotion recognition — GenAI, LLMs, and NLP projects." />
        <meta property="og:title" content={`Projects · ${site.name}`} />
        <meta property="og:description" content="GenAI, RAG, and NLP engineering projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/projects`} />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium text-ink dark:text-neutral-100">Projects</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Highlights from my work: a graduation project turning language into CAD (DXF), a production-style nutrition
            RAG stack, and a speech emotion recognition pipeline. Filter by area; links open GitHub or Kaggle where
            applicable.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Tag key={f} asButton active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </Tag>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-neutral-600 dark:text-neutral-400">No projects in this category.</p>
        )}
      </div>
    </>
  );
}
