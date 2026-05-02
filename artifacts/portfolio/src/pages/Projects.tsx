import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, ExternalLink, Star } from 'lucide-react';
import { site } from '../config/site';
import { projects, filterBuckets, type ProjectFilterBucket } from '../content/projects';

export default function Projects() {
  const [active, setActive] = useState<ProjectFilterBucket>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Helmet>
        <title>Projects · {site.fullName}</title>
        <meta name="description" content={`Explore AI, NLP, and ML projects by ${site.fullName} — LLMs, RAG systems, Computer Vision and more.`} />
      </Helmet>

      {/* ── Header ── */}
      <section className="bg-[#fbf7ea] pt-16 pb-10 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Portfolio</p>
          <h1 className="mt-2 font-serif text-[2.8rem] font-black text-[#272217] dark:text-[#fff5dd]">Projects</h1>
          <p className="mt-3 max-w-xl text-[1rem] leading-7 text-[#6d6048] dark:text-[#a99b80]">
            End-to-end AI systems, NLP pipelines, Computer Vision models, and developer tools — built from scratch.
          </p>

          {/* Filter tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {filterBuckets.map((bucket) => (
              <button
                key={bucket}
                type="button"
                onClick={() => setActive(bucket)}
                className={`rounded-full px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-all duration-150 ${
                  active === bucket
                    ? 'bg-[#272217] text-[#fff5dd] shadow-[0_4px_0_#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:shadow-[0_4px_0_#f0ad72]'
                    : 'border border-[#272217]/15 text-[#6d6048] hover:border-[#c06c35]/50 hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72]/50 dark:hover:text-[#f0ad72]'
                }`}
              >
                {bucket}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-[#fbf7ea] pb-20 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="mb-6 font-mono text-[0.68rem] text-[#8a7e6b] dark:text-[#7a6e5a]">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-[#272217]/10 bg-white/70 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#c06c35]/30 hover:shadow-lg dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/30"
              >
                <div className="flex flex-1 flex-col gap-3.5 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#c06c35] dark:text-[#f0ad72]">
                        {project.category}
                      </span>
                      <h3 className="mt-0.5 font-serif text-[1.05rem] font-bold leading-snug text-[#272217] dark:text-[#fff5dd] truncate">
                        {project.title}
                      </h3>
                    </div>
                    {project.stars != null && (
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#272217]/10 px-2 py-0.5 font-mono text-[0.58rem] font-bold text-[#6d6048] dark:border-white/10 dark:text-[#d8c9aa]">
                        <Star className="h-2.5 w-2.5 fill-[#e4c15f] text-[#e4c15f]" /> {project.stars}
                      </span>
                    )}
                  </div>

                  <p className="line-clamp-3 text-[0.82rem] leading-6 text-[#6d6048] dark:text-[#a99b80]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.58rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.58rem] font-bold text-[#8a7e6b] dark:bg-white/8 dark:text-[#7a6e5a]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex gap-4 pt-2 border-t border-[#272217]/6 dark:border-white/6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-14 rounded-2xl border-2 border-dashed border-[#272217]/15 bg-white/40 p-8 text-center dark:border-white/15 dark:bg-white/2">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8a7e6b] dark:text-[#7a6e5a]">More on GitHub</p>
            <p className="mt-2 font-serif text-xl font-bold text-[#272217] dark:text-[#fff5dd]">28 public repositories</p>
            <p className="mt-1 text-sm text-[#6d6048] dark:text-[#a99b80]">Including ML coursework, algorithms, and research implementations.</p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#272217] px-6 py-2.5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#fff5dd] transition-colors hover:bg-[#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:hover:bg-[#f0ad72]"
            >
              <Github className="h-4 w-4" /> View All on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
