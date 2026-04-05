import { Helmet } from 'react-helmet-async';
import { site } from '../config/site';
import { academicInterests, publications } from '../content/research';

export default function Research() {
  return (
    <>
      <Helmet>
        <title>Research</title>
        <meta name="description" content="Research interests: LLMs, RAG, Agentic AI, NLP, and GenAI for engineering." />
        <meta property="og:title" content={`Research · ${site.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/research`} />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:max-w-4xl">
        <h1 className="font-serif text-3xl font-medium text-ink dark:text-neutral-100">Research</h1>

        <section className="mt-10" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Academic interests
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            {academicInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="pub-heading">
          <h2 id="pub-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Publications
          </h2>

          {publications.length === 0 ? (
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              Papers in progress — nothing listed here yet. When work is published, each entry will include venue,
              links to PDF and code where applicable, and BibTeX for citation.
            </p>
          ) : (
            <ul className="mt-6 space-y-6">
              {publications.map((pub, i) => (
                <li key={i} className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <span className="text-neutral-500 dark:text-neutral-500">[{pub.year}]</span>{' '}
                  <span className="font-medium text-ink dark:text-neutral-100">{pub.title}</span>. {pub.authors}.{' '}
                  <em>{pub.venue}</em>.
                  <span className="ml-2 inline-flex flex-wrap gap-3">
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-2 hover:underline dark:text-blue-400"
                      >
                        PDF
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-2 hover:underline dark:text-blue-400"
                      >
                        Code
                      </a>
                    )}
                    {pub.bibtex && (
                      <button
                        type="button"
                        className="text-accent underline-offset-2 hover:underline dark:text-blue-400"
                        onClick={() => navigator.clipboard.writeText(pub.bibtex!)}
                      >
                        BibTeX
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
