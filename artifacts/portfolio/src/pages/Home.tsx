import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Star, ExternalLink } from 'lucide-react';
import { site } from '../config/site';
import { projects } from '../content/projects';

const featured = projects.filter((p) => p.featured);

const techBadges = [
  'LLMs', 'RAG', 'Agentic AI', 'PyTorch', 'LangChain',
  'FastAPI', 'HuggingFace', 'Qdrant', 'Docker', 'Python',
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{site.fullName} · AI Engineer</title>
        <meta name="description" content={site.bio} />
        <meta property="og:title" content={`${site.fullName} · AI Engineer`} />
        <meta property="og:description" content={site.bio} />
        <meta property="og:url" content={site.url} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-[#fbf7ea] dark:bg-[#0e0c08]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] dark:opacity-[0.15]">
          <div className="absolute left-[5%] top-[10%] h-64 w-64 rotate-12 rounded-[2.5rem] border border-[#c06c35]/40" />
          <div className="absolute right-[4%] top-[15%] h-80 w-80 rounded-full border-[30px] border-[#587a63]/22" />
          <div className="absolute bottom-[8%] left-[20%] h-24 w-[32rem] -rotate-3 bg-[#e4c15f]/30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,34,23,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(39,34,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          {/* Left: text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#587a63]/15 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#587a63] dark:bg-[#587a63]/20 dark:text-[#9fc4a8]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#587a63]" />
                Available for opportunities
              </span>
            </div>

            <h1 className="mt-5 font-serif text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.88] tracking-tight text-[#272217] dark:text-[#fff5dd]">
              {site.fullName}
            </h1>

            <p className="mt-4 font-mono text-base font-semibold uppercase tracking-[0.14em] text-[#c06c35] dark:text-[#f0ad72]">
              {site.title}
            </p>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#5d523e] dark:text-[#d8c9aa]">
              {site.bio}
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-[#8a7e6b] dark:text-[#a99b80]">
              <MapPin className="h-4 w-4 shrink-0" />
              {site.location}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#272217] px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#fff5dd] shadow-[0_8px_0_#c06c35] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_0_#c06c35] active:translate-y-1 active:shadow-[0_4px_0_#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:shadow-[0_8px_0_#f0ad72]"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.mailto}
                className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-[#272217]/20 bg-white/50 px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#272217] transition duration-150 hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/20 dark:bg-white/5 dark:text-[#fff5dd] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-[#6d6048] transition-colors hover:text-[#c06c35] dark:text-[#d8c9aa] dark:hover:text-[#f0ad72]">
                <Github className="h-5 w-5" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-[#6d6048] transition-colors hover:text-[#c06c35] dark:text-[#d8c9aa] dark:hover:text-[#f0ad72]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: photo + badges */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-[#c06c35]/20 blur-xl dark:bg-[#f0ad72]/10" />
              <img
                src={site.avatarPath}
                alt={site.fullName}
                className="relative h-72 w-72 rounded-[1.5rem] border-4 border-[#272217]/10 object-cover shadow-[12px_12px_0_#587a63] dark:border-white/10 dark:shadow-[12px_12px_0_#8a5b34] sm:h-80 sm:w-80"
              />
            </div>
            <div className="flex max-w-xs flex-wrap justify-center gap-2 lg:justify-end">
              {techBadges.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#272217]/12 bg-white/60 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#5d523e] dark:border-white/12 dark:bg-white/5 dark:text-[#d8c9aa]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-[#272217]/10 bg-[#272217] py-8 dark:border-white/10 dark:bg-[#161410]">
        <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4">
          {[
            { value: '12+', label: 'GitHub Projects' },
            { value: '5+', label: 'AI Systems Built' },
            { value: '9', label: 'Certifications' },
            { value: '2+', label: 'Years in AI' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-3xl font-black text-[#fff5dd]">{value}</p>
              <p className="mt-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d8c9aa]/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-[#fbf7ea] py-20 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Selected Work</p>
              <h2 className="mt-2 font-serif text-[2rem] font-bold text-[#272217] dark:text-[#fff5dd]">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1.5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#c06c35] transition-colors hover:text-[#272217] dark:text-[#f0ad72] dark:hover:text-[#fff5dd] sm:flex"
            >
              All Projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-[#272217]/10 bg-white/70 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#c06c35]/30 hover:shadow-lg dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/30"
              >
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#c06c35] dark:text-[#f0ad72]">{project.category}</span>
                      <h3 className="mt-1 font-serif text-[1.2rem] font-bold leading-snug text-[#272217] dark:text-[#fff5dd]">{project.title}</h3>
                    </div>
                    {project.stars != null && (
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#272217]/10 px-2.5 py-1 font-mono text-[0.62rem] font-bold text-[#6d6048] dark:border-white/10 dark:text-[#d8c9aa]">
                        <Star className="h-3 w-3 fill-[#e4c15f] text-[#e4c15f]" /> {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[#6d6048] dark:text-[#a99b80]">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]">{t}</span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold text-[#8a7e6b] dark:bg-white/8 dark:text-[#7a6e5a]">+{project.technologies.length - 5}</span>
                    )}
                  </div>
                  <div className="mt-auto flex gap-4 pt-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]">
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#c06c35] dark:text-[#f0ad72]">
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#272217] py-20 dark:bg-[#161410]">
        <div className="mx-auto max-w-[640px] px-4 text-center sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#d8c9aa]/60">Let's work together</p>
          <h2 className="mt-3 font-serif text-[2.2rem] font-bold text-[#fff5dd]">Have an AI project in mind?</h2>
          <p className="mt-4 text-[#d8c9aa]/80">Whether it's a RAG system, LLM integration, or full AI pipeline — I'd love to build it with you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.mailto}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#c06c35] px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_6px_0_#8a3d1a] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_0_#8a3d1a] active:translate-y-1 active:shadow-[0_3px_0_#8a3d1a]"
            >
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/20 px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#fff5dd] transition duration-150 hover:border-white/40 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
