import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';
import { site } from '../config/site';
import Tag from '../components/ui/Tag';
import { certifications, education, experiences, skillCategories } from '../content/resume';

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume</title>
        <meta name="description" content={`CV — ${site.name}: GenAI, LLMs, RAG, experience, education, certifications.`} />
        <meta property="og:title" content={`Resume · ${site.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/resume`} />
      </Helmet>

      <div className="resume-page mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl print:max-w-none print:px-8">
        <div className="flex flex-col gap-4 border-b border-neutral-200 pb-8 print:border-neutral-300 dark:border-neutral-800 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-medium text-ink dark:text-neutral-100">{site.name}</h1>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{site.title}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {site.location} ·{' '}
              <a href={site.mailto} className="text-accent hover:underline dark:text-blue-400">
                {site.email}
              </a>
              {' · '}
              <a href={site.phoneTel} className="text-accent hover:underline dark:text-blue-400">
                {site.phone}
              </a>
            </p>
          </div>
          <a
            href={site.resumePdfPath}
            download
            className="inline-flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 print:hidden"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download PDF
          </a>
        </div>

        <section className="mt-10" aria-labelledby="exp-resume">
          <h2 id="exp-resume" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.position + exp.duration}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-medium text-ink dark:text-neutral-100">{exp.position}</h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">{exp.duration}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.company} · {exp.location}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {exp.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {exp.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="edu-resume">
          <h2 id="edu-resume" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Education
          </h2>
          <div className="mt-6 space-y-6">
            {education.map((edu) => (
              <div key={edu.degree}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-medium text-ink dark:text-neutral-100">{edu.degree}</h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">{edu.year}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {edu.school} · {edu.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="skills-resume">
          <h2 id="skills-resume" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Skills
          </h2>
          <div className="mt-4 space-y-4">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{cat.name}</p>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{cat.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="pub-resume">
          <h2 id="pub-resume" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Publications
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            No formal publications listed yet — see the{' '}
            <a href="/research" className="text-accent underline-offset-2 hover:underline dark:text-blue-400">
              Research
            </a>{' '}
            page for interests and work in progress.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="cert-resume">
          <h2 id="cert-resume" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Certifications
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline dark:text-blue-400"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span className="font-medium text-ink dark:text-neutral-100">{c.name}</span>
                )}
                <span className="text-neutral-600 dark:text-neutral-400">
                  {' '}
                  — {c.issuer}
                  {c.date ? `, ${c.date}` : ''}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
