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

      <div className="resume-page mx-auto max-w-[680px] px-4 py-16 sm:px-6 print:max-w-none print:px-8">
        <div className="flex flex-col gap-6 border-b border-border-light dark:border-border-dark pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-serif text-[2.5rem] font-bold text-ink dark:text-[#EDEDED]">{site.name}</h1>
            <p className="mt-2 text-[0.875rem] font-medium tracking-widest uppercase text-[#6B7280] dark:text-[#9CA3AF]">
              {site.title}
            </p>
            <p className="mt-4 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">
              {site.location} ·{' '}
              <a href={site.mailto} className="text-accent underline-offset-4 hover:underline transition-colors hover:text-accent-hover">
                {site.email}
              </a>
              {' · '}
              <a href={site.phoneTel} className="text-accent underline-offset-4 hover:underline transition-colors hover:text-accent-hover">
                {site.phone}
              </a>
            </p>
          </div>
          <a
            href={site.resumePdfPath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-accent text-accent px-4 py-2 text-[0.875rem] font-medium transition-colors hover:bg-accent hover:text-white dark:hover:text-white print:hidden"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download PDF
          </a>
        </div>

        <section className="mt-12" aria-labelledby="exp-resume">
          <h2 id="exp-resume" className="text-[0.875rem] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] border-b border-border-light dark:border-border-dark pb-2">
            Experience
          </h2>
          <div className="mt-6 space-y-10">
            {experiences.map((exp) => (
              <div key={exp.position + exp.duration}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-medium text-ink dark:text-[#EDEDED] text-lg">{exp.position}</h3>
                  <span className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">{exp.duration}</span>
                </div>
                <p className="text-[0.875rem] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  {exp.company} · {exp.location}
                </p>
                <p className="mt-3 whitespace-pre-line text-[0.875rem] leading-relaxed text-[#111111] dark:text-[#EDEDED]">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="edu-resume">
          <h2 id="edu-resume" className="text-[0.875rem] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] border-b border-border-light dark:border-border-dark pb-2">
            Education
          </h2>
          <div className="mt-6 space-y-8">
            {education.map((edu) => (
              <div key={edu.degree}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-medium text-ink dark:text-[#EDEDED] text-lg">{edu.degree}</h3>
                  <span className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">{edu.year}</span>
                </div>
                <p className="text-[0.875rem] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  {edu.school} · {edu.location}
                </p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-[#111111] dark:text-[#EDEDED]">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="skills-resume">
          <h2 id="skills-resume" className="text-[0.875rem] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] border-b border-border-light dark:border-border-dark pb-2">
            Skills
          </h2>
          <div className="mt-6 space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <p className="text-[0.875rem] font-bold text-ink dark:text-[#EDEDED]">{cat.name}</p>
                <p className="mt-1 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{cat.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="pub-resume">
          <h2 id="pub-resume" className="text-[0.875rem] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] border-b border-border-light dark:border-border-dark pb-2">
            Publications
          </h2>
          <p className="mt-4 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            No formal publications listed yet — see the{' '}
            <a href="/research" className="text-accent underline-offset-4 hover:underline transition-colors hover:text-accent-hover">
              Research
            </a>{' '}
            page for interests and work in progress.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="cert-resume">
          <h2 id="cert-resume" className="text-[0.875rem] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] border-b border-border-light dark:border-border-dark pb-2">
            Certifications
          </h2>
          <ul className="mt-4 space-y-4 text-[0.875rem]">
            {certifications.map((c) => (
              <li key={c.name} className="leading-relaxed">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline underline-offset-4 transition-colors hover:text-accent-hover"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span className="font-medium text-ink dark:text-[#EDEDED]">{c.name}</span>
                )}
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
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
