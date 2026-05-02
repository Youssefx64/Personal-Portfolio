import { Helmet } from 'react-helmet-async';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { site } from '../config/site';
import { experiences, education, certifications } from '../content/resume';

const certIssuerColor: Record<string, string> = {
  nvidia: 'bg-[#76b900]/15 text-[#4a7800] border-[#76b900]/30 dark:bg-[#76b900]/10 dark:text-[#9ed13a] dark:border-[#76b900]/20',
  deeplearning: 'bg-[#0d6efd]/10 text-[#0d4fa0] border-[#0d6efd]/30 dark:bg-[#0d6efd]/10 dark:text-[#6ea8fe] dark:border-[#0d6efd]/20',
  oracle: 'bg-[#f80000]/10 text-[#a00000] border-[#f80000]/30 dark:bg-[#f80000]/10 dark:text-[#ff8080] dark:border-[#f80000]/20',
  microsoft: 'bg-[#0078d4]/10 text-[#005a9e] border-[#0078d4]/30 dark:bg-[#0078d4]/10 dark:text-[#60a8e0] dark:border-[#0078d4]/20',
  huawei: 'bg-[#cf0a2c]/10 text-[#8a0000] border-[#cf0a2c]/30 dark:bg-[#cf0a2c]/10 dark:text-[#e87070] dark:border-[#cf0a2c]/20',
  nti: 'bg-[#c06c35]/12 text-[#8a3d1a] border-[#c06c35]/30 dark:bg-[#c06c35]/10 dark:text-[#f0ad72] dark:border-[#c06c35]/20',
};

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience · {site.fullName}</title>
        <meta name="description" content={`Work experience, education, and certifications of ${site.fullName} — AI Engineer.`} />
      </Helmet>

      <div className="bg-[#fbf7ea] dark:bg-[#0e0c08]">
        {/* ── Header ── */}
        <section className="pt-16 pb-10 mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Career & Background</p>
          <h1 className="mt-2 font-serif text-[2.8rem] font-black text-[#272217] dark:text-[#fff5dd]">Experience</h1>
        </section>

        <div className="mx-auto max-w-[1120px] px-4 pb-20 sm:px-6 space-y-16">
          {/* ── Work Experience ── */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c06c35] text-white">
                <Briefcase className="h-4 w-4" />
              </div>
              <h2 className="font-serif text-[1.5rem] font-bold text-[#272217] dark:text-[#fff5dd]">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-7 dark:border-white/10 dark:bg-white/4"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-serif text-[1.25rem] font-bold text-[#272217] dark:text-[#fff5dd]">{exp.position}</h3>
                      <p className="mt-0.5 font-mono text-[0.78rem] font-semibold text-[#c06c35] dark:text-[#f0ad72]">{exp.company}</p>
                      <p className="mt-1 text-sm text-[#8a7e6b] dark:text-[#7a6e5a]">{exp.location}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#272217]/15 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#6d6048] dark:border-white/15 dark:text-[#d8c9aa]">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-6 text-[#5d523e] dark:text-[#d8c9aa]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#587a63] dark:text-[#9fc4a8]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-[#272217]/8 pt-5 dark:border-white/8">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#587a63] text-white">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h2 className="font-serif text-[1.5rem] font-bold text-[#272217] dark:text-[#fff5dd]">Education</h2>
            </div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-7 dark:border-white/10 dark:bg-white/4"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-serif text-[1.15rem] font-bold text-[#272217] dark:text-[#fff5dd]">{edu.degree}</h3>
                      <p className="mt-0.5 font-mono text-[0.78rem] font-semibold text-[#587a63] dark:text-[#9fc4a8]">{edu.school}</p>
                      <p className="mt-1 text-sm text-[#8a7e6b] dark:text-[#7a6e5a]">{edu.location}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#272217]/15 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#6d6048] dark:border-white/15 dark:text-[#d8c9aa]">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#5d523e] dark:text-[#d8c9aa]">{edu.description}</p>
                  {edu.highlights && (
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-6 text-[#5d523e] dark:text-[#d8c9aa]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#587a63] dark:text-[#9fc4a8]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── Certifications ── */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e4c15f] text-[#272217]">
                <Award className="h-4 w-4" />
              </div>
              <h2 className="font-serif text-[1.5rem] font-bold text-[#272217] dark:text-[#fff5dd]">Certifications</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => {
                const colorClass = cert.badge ? (certIssuerColor[cert.badge] ?? certIssuerColor['nti']) : certIssuerColor['nti'];
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-2 rounded-xl border-2 border-[#272217]/10 bg-white/70 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/4"
                  >
                    <span className={`self-start rounded-full border px-2.5 py-0.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] ${colorClass}`}>
                      {cert.issuer.split('(')[0].trim()}
                    </span>
                    <p className="text-[0.88rem] font-semibold leading-snug text-[#272217] dark:text-[#fff5dd]">{cert.name}</p>
                    {cert.date && (
                      <p className="font-mono text-[0.62rem] text-[#8a7e6b] dark:text-[#7a6e5a]">{cert.date}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
