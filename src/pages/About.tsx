import { Helmet } from 'react-helmet-async';
import { site } from '../config/site';
import Tag from '../components/ui/Tag';
import { education, experiences, skillCategories } from '../content/resume';

const BIO =
  'GenAI Developer and AI Engineer with hands-on experience designing end-to-end Generative AI systems. Specialized in LLMs, RAG pipelines, and Agentic AI architectures. Proficient in Python, PyTorch, and modern NLP frameworks. Passionate about applying GenAI to real-world problems with a research-driven mindset.';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content={`About ${site.name} — ${site.title}. Skills, background, and timeline.`}
        />
        <meta property="og:title" content={`About · ${site.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/about`} />
      </Helmet>

      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6">
        <h1 className="font-serif text-[2.5rem] font-bold text-ink dark:text-[#EDEDED]">About</h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Bio */}
            <div className="space-y-6 text-base leading-relaxed text-[#111111] dark:text-[#EDEDED]">
              <p>
                I am <strong>{site.name}</strong>. {BIO}
              </p>
              <p>
                I am based in {site.location}. Reach me at{' '}
                <a href={site.mailto} className="text-accent hover:underline underline-offset-4 font-medium transition-colors hover:text-accent-hover">
                  {site.email}
                </a>{' '}
                or{' '}
                <a href={site.phoneTel} className="text-accent hover:underline underline-offset-4 font-medium transition-colors hover:text-accent-hover">
                  {site.phone}
                </a>.
              </p>
            </div>

            {/* Timeline */}
            <section className="mt-16" aria-labelledby="timeline-heading">
              <h2 id="timeline-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
                Timeline
              </h2>
              <ol className="mt-8 space-y-10 border-l border-border-light dark:border-border-dark pl-6">
                {experiences.map((exp) => (
                  <li key={exp.position + exp.duration} className="relative">
                    <span className="absolute -left-[30px] top-1 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-2 border-paper dark:border-[#0F0F0F]" />
                    <p className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] mb-1">{exp.duration}</p>
                    <h3 className="font-medium text-ink dark:text-[#EDEDED] text-lg">{exp.position}</h3>
                    <p className="text-[0.875rem] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-[0.875rem] leading-relaxed text-[#111111] dark:text-[#EDEDED]">
                      {exp.description}
                    </p>
                  </li>
                ))}
                {education.map((edu) => (
                  <li key={edu.degree} className="relative">
                    <span className="absolute -left-[30px] top-1 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-2 border-paper dark:border-[#0F0F0F]" />
                    <p className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] mb-1">{edu.year}</p>
                    <h3 className="font-medium text-ink dark:text-[#EDEDED] text-lg">{edu.degree}</h3>
                    <p className="text-[0.875rem] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                      {edu.school} · {edu.location}
                    </p>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-[#111111] dark:text-[#EDEDED]">{edu.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div>
            {/* Quick Info / Skills */}
            <section className="lg:sticky lg:top-24" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
                Skills
              </h2>
              <div className="mt-6 space-y-8">
                {skillCategories.map((cat) => (
                  <div key={cat.name}>
                    <h3 className="text-[0.875rem] font-bold text-ink dark:text-[#EDEDED] uppercase tracking-wider mb-3">{cat.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
