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

      <div className="mx-auto max-w-[720px] px-4 py-16 sm:px-6">
        <h1 className="font-serif text-[2.5rem] font-bold text-ink dark:text-[#EDEDED]">Research</h1>

        <section className="mt-12" aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
            Academic Interests
          </h2>
          <ul className="mt-6 list-inside list-disc space-y-2 text-base leading-relaxed text-ink dark:text-[#EDEDED]">
            {academicInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="pub-heading">
          <h2 id="pub-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
            Publications
          </h2>

          {publications.length === 0 ? (
            <p className="mt-6 text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
              Papers in progress — nothing listed here yet. When work is published, each entry will include venue,
              links to PDF and code where applicable, and BibTeX for citation.
            </p>
          ) : (
            <ul className="mt-8 space-y-8">
              {publications.map((pub, i) => (
                <li key={i} className="text-base leading-relaxed text-ink dark:text-[#EDEDED]">
                  <span className="text-[#6B7280] dark:text-[#9CA3AF]">[{pub.year}]</span>{' '}
                  <strong>{pub.title}</strong>. {pub.authors}.{' '}
                  <em>{pub.venue}</em>.{' '}
                  <span className="ml-1 inline-flex flex-wrap gap-2 text-[0.875rem]">
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        [PDF]
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        [Code]
                      </a>
                    )}
                    {pub.bibtex && (
                      <button
                        type="button"
                        className="text-accent underline-offset-4 hover:underline"
                        onClick={() => navigator.clipboard.writeText(pub.bibtex!)}
                      >
                        [BibTeX]
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
