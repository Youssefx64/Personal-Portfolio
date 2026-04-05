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

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:max-w-4xl">
        <h1 className="font-serif text-3xl font-medium text-ink dark:text-neutral-100">About</h1>

        <div className="mt-8 space-y-5 leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            I am <strong>{site.name}</strong>. {BIO}
          </p>
          <p>
            I am based in {site.location}. Reach me at{' '}
            <a href={site.mailto} className="text-accent underline-offset-2 hover:underline dark:text-blue-400">
              {site.email}
            </a>{' '}
            or <a href={site.phoneTel} className="text-accent underline-offset-2 hover:underline dark:text-blue-400">{site.phone}</a>.
          </p>
        </div>

        <section className="mt-14" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Skills & tools
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Grouped by area; aligned with how I work on GenAI and ML systems.
          </p>
          <div className="mt-6 space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-sm font-medium text-ink dark:text-neutral-200">{cat.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Timeline
          </h2>
          <ol className="mt-6 space-y-8 border-l border-neutral-200 pl-6 dark:border-neutral-800">
            {experiences.map((exp) => (
              <li key={exp.position + exp.duration} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <p className="text-sm text-neutral-500 dark:text-neutral-500">{exp.duration}</p>
                <h3 className="font-medium text-ink dark:text-neutral-100">{exp.position}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.company} · {exp.location}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {exp.description}
                </p>
              </li>
            ))}
            {education.map((edu) => (
              <li key={edu.degree} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <p className="text-sm text-neutral-500 dark:text-neutral-500">{edu.year}</p>
                <h3 className="font-medium text-ink dark:text-neutral-100">{edu.degree}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {edu.school} · {edu.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{edu.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
