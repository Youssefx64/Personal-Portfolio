import { useState } from 'react';
import {
  ArrowRight, Github, Linkedin, Mail, MapPin, Star,
  ExternalLink, Phone, Briefcase, GraduationCap, Award,
  CheckCircle2, Youtube, BookOpen,
} from 'lucide-react';
import { site } from '../config/site';
import { projects, filterBuckets, type ProjectFilterBucket } from '../content/projects';
import {
  skillGroups, whatIBuild, currentFocus,
  experiences, education, certifications,
} from '../content/resume';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const techBadges = ['LLMs', 'RAG', 'Agentic AI', 'LangChain', 'LangGraph', 'FastAPI', 'HuggingFace', 'Qdrant', 'Docker', 'PyTorch'];

const certColors: Record<string, string> = {
  nvidia: 'bg-[#76b900]/15 text-[#4a7800] border-[#76b900]/30 dark:text-[#9ed13a]',
  deeplearning: 'bg-[#0d6efd]/10 text-[#0d4fa0] border-[#0d6efd]/25 dark:text-[#6ea8fe]',
  oracle: 'bg-[#f80000]/10 text-[#a00000] border-[#f80000]/25 dark:text-[#ff8080]',
  microsoft: 'bg-[#0078d4]/10 text-[#005a9e] border-[#0078d4]/25 dark:text-[#60a8e0]',
  huawei: 'bg-[#cf0a2c]/10 text-[#8a0000] border-[#cf0a2c]/25 dark:text-[#e87070]',
  nti: 'bg-[#c06c35]/12 text-[#8a3d1a] border-[#c06c35]/25 dark:text-[#f0ad72]',
};

/* ─── Section heading ─── */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-[2.2rem] font-bold text-[#272217] dark:text-[#fff5dd]">{title}</h2>
    </div>
  );
}

export default function SinglePage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterBucket>('All');
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ══════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="relative isolate overflow-hidden bg-[#fbf7ea] dark:bg-[#0e0c08]">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] dark:opacity-[0.12]">
          <div className="absolute left-[5%] top-[10%] h-64 w-64 rotate-12 rounded-[2.5rem] border border-[#c06c35]/40" />
          <div className="absolute right-[4%] top-[15%] h-80 w-80 rounded-full border-[30px] border-[#587a63]/22" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,34,23,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(39,34,23,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          {/* Left: text */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#587a63]/15 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#587a63] dark:bg-[#587a63]/20 dark:text-[#9fc4a8]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#587a63]" />
              Available for opportunities
            </span>

            <h1 className="mt-5 font-serif text-[clamp(2.8rem,7vw,5rem)] font-black leading-[0.9] tracking-tight text-[#272217] dark:text-[#fff5dd]">
              {site.fullName}
            </h1>
            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-[#c06c35] dark:text-[#f0ad72]">
              {site.title}
            </p>
            <p className="mt-5 max-w-md text-[1rem] leading-8 text-[#5d523e] dark:text-[#d8c9aa]">
              {site.bio}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-[#8a7e6b] dark:text-[#a99b80]">
              <MapPin className="h-4 w-4 shrink-0" /> {site.location}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#272217] px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#fff5dd] shadow-[0_8px_0_#c06c35] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_0_#c06c35] active:translate-y-1 active:shadow-[0_4px_0_#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:shadow-[0_8px_0_#f0ad72]"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={site.mailto}
                className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-[#272217]/20 bg-white/50 px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#272217] transition hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/20 dark:bg-white/5 dark:text-[#fff5dd] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              {[
                { href: site.github, icon: <Github className="h-5 w-5" />, label: 'GitHub' },
                { href: site.linkedin, icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
                { href: site.youtube, icon: <Youtube className="h-5 w-5" />, label: 'YouTube' },
                { href: site.medium, icon: <BookOpen className="h-5 w-5" />, label: 'Medium' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-[#6d6048] transition-colors hover:text-[#c06c35] dark:text-[#d8c9aa] dark:hover:text-[#f0ad72]">
                  {icon}
                </a>
              ))}
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
                <span key={t} className="rounded-full border border-[#272217]/12 bg-white/60 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#5d523e] dark:border-white/12 dark:bg-white/5 dark:text-[#d8c9aa]">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-[#272217]/10 bg-[#272217] py-8 dark:border-white/10 dark:bg-[#161410]">
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §2  ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="bg-[#fbf7ea] py-20 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <SectionHeading eyebrow="Get to know me" title="About Me" />

          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            {/* Quick-info card */}
            <div className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/4 self-start">
              <p className="mb-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#8a7e6b] dark:text-[#7a6e5a]">Quick Info</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <MapPin className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />, text: site.location },
                  { icon: <Mail className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />, text: <a href={site.mailto} className="hover:text-[#c06c35] transition-colors">{site.email}</a> },
                  { icon: <Github className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />, text: <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c06c35] transition-colors">Youssefx64</a> },
                  { icon: <Linkedin className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />, text: <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c06c35] transition-colors">yousseftahaai</a> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[#5d523e] dark:text-[#d8c9aa]">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-[#272217]/8 pt-5 dark:border-white/8 flex flex-wrap gap-2">
                {[
                  { href: site.kaggle, label: 'Kaggle' },
                  { href: site.leetcode, label: 'LeetCode' },
                  { href: site.medium, label: 'Medium' },
                  { href: site.stackoverflow, label: 'Stack Overflow' },
                  { href: site.huggingface, label: 'HuggingFace' },
                ].map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-[#272217]/15 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div>
              <h3 className="font-serif text-[1.5rem] font-bold text-[#272217] dark:text-[#fff5dd]">
                AI Engineer building intelligent systems that matter
              </h3>
              <div className="mt-4 space-y-4 text-[1rem] leading-8 text-[#5d523e] dark:text-[#d8c9aa]">
                <p>
                  I'm <strong className="text-[#272217] dark:text-[#fff5dd]">Youssef Taha Badawi</strong>, an AI Engineer and GenAI Developer based in Cairo, Egypt, currently studying Artificial Intelligence & Data Science at the Faculty of Computers & AI, Beni-Suef National University.
                </p>
                <p>
                  My work focuses on the full lifecycle of Generative AI systems — from problem definition and system design, all the way to integration, deployment, and iterative optimization. I specialize in <strong className="text-[#272217] dark:text-[#fff5dd]">LLMs, Retrieval-Augmented Generation (RAG) pipelines, and Agentic AI architectures</strong> that solve real-world problems with measurable impact.
                </p>
                <p>
                  I've built production-ready systems including domain-specific RAG solutions, LLM-powered virtual assistants, Healthcare AI tools, and CadArena — a graduation project that translates natural language into engineering CAD drawings using LLMs.
                </p>
              </div>

              {/* Current focus */}
              <div className="mt-6 rounded-xl border border-[#272217]/10 bg-[#f5f0e3] p-5 dark:border-white/10 dark:bg-white/4">
                <p className="mb-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#8a7e6b] dark:text-[#7a6e5a]">Currently focused on</p>
                <ul className="space-y-1.5">
                  {currentFocus.map((item, i) => (
                    <li key={i} className="text-[0.88rem] text-[#5d523e] dark:text-[#d8c9aa]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What I Build table */}
          <div className="mt-14">
            <p className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">What I Build</p>
            <div className="overflow-hidden rounded-2xl border-2 border-[#272217]/10 dark:border-white/10">
              {whatIBuild.map((row, i) => (
                <div key={i} className={`grid gap-4 p-5 sm:grid-cols-[180px_1fr] ${i % 2 === 0 ? 'bg-white/70 dark:bg-white/4' : 'bg-[#f5f0e3]/60 dark:bg-white/2'}`}>
                  <p className="font-mono text-[0.72rem] font-bold text-[#272217] dark:text-[#fff5dd]">{row.domain}</p>
                  <p className="text-[0.88rem] leading-6 text-[#5d523e] dark:text-[#d8c9aa]">{row.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §3  SKILLS
      ══════════════════════════════════════════ */}
      <section id="skills" className="border-t border-[#272217]/10 bg-[#f5f0e3] py-20 dark:border-white/10 dark:bg-[#12100b]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <SectionHeading eyebrow="Technical Arsenal" title="Tools & Technologies" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.name} className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/4">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#272217] dark:text-[#fff5dd]">{group.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[#f1dfbd]/80 px-3 py-0.5 font-mono text-[0.62rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §4  PROJECTS
      ══════════════════════════════════════════ */}
      <section id="projects" className="border-t border-[#272217]/10 bg-[#fbf7ea] py-20 dark:border-white/10 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Portfolio</p>
              <h2 className="mt-2 font-serif text-[2.2rem] font-bold text-[#272217] dark:text-[#fff5dd]">Projects</h2>
              <p className="mt-2 text-[0.9rem] text-[#6d6048] dark:text-[#a99b80]">End-to-end AI systems, NLP pipelines, Computer Vision models & developer tools.</p>
            </div>
            <a href={site.github} target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-1.5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#c06c35] transition-colors hover:text-[#272217] dark:text-[#f0ad72] dark:hover:text-[#fff5dd] sm:flex">
              All on GitHub <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {filterBuckets.map((bucket) => (
              <button key={bucket} type="button" onClick={() => setActiveFilter(bucket)}
                className={`rounded-full px-4 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-all duration-150 ${
                  activeFilter === bucket
                    ? 'bg-[#272217] text-[#fff5dd] shadow-[0_4px_0_#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:shadow-[0_4px_0_#f0ad72]'
                    : 'border border-[#272217]/15 text-[#6d6048] hover:border-[#c06c35]/50 hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72]/50 dark:hover:text-[#f0ad72]'
                }`}>
                {bucket}
              </button>
            ))}
          </div>

          <p className="mb-5 font-mono text-[0.68rem] text-[#8a7e6b] dark:text-[#7a6e5a]">{filteredProjects.length} projects</p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-[#272217]/10 bg-white/70 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#c06c35]/30 hover:shadow-lg dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/30">
                <div className="flex flex-1 flex-col gap-3.5 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#c06c35] dark:text-[#f0ad72]">{project.category}</span>
                      <h3 className="mt-0.5 font-serif text-[1.05rem] font-bold leading-snug text-[#272217] dark:text-[#fff5dd]">{project.title}</h3>
                    </div>
                    {project.stars != null && (
                      <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#272217]/10 px-2 py-0.5 font-mono text-[0.58rem] font-bold text-[#6d6048] dark:border-white/10 dark:text-[#d8c9aa]">
                        <Star className="h-2.5 w-2.5 fill-[#e4c15f] text-[#e4c15f]" /> {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-3 text-[0.82rem] leading-6 text-[#6d6048] dark:text-[#a99b80]">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.58rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]">{t}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.58rem] font-bold text-[#8a7e6b] dark:bg-white/8 dark:text-[#7a6e5a]">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="mt-auto flex gap-4 border-t border-[#272217]/6 pt-3 dark:border-white/6">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#272217] transition-colors hover:text-[#c06c35] dark:text-[#fff5dd] dark:hover:text-[#f0ad72]">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 rounded-2xl border-2 border-dashed border-[#272217]/15 bg-white/40 p-8 text-center dark:border-white/15 dark:bg-white/2">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8a7e6b] dark:text-[#7a6e5a]">More on GitHub</p>
            <p className="mt-2 font-serif text-xl font-bold text-[#272217] dark:text-[#fff5dd]">28 public repositories</p>
            <p className="mt-1 text-sm text-[#6d6048] dark:text-[#a99b80]">Including ML coursework, algorithms, and research implementations.</p>
            <a href={site.github} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#272217] px-6 py-2.5 font-mono text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#fff5dd] transition-colors hover:bg-[#c06c35] dark:bg-[#fff5dd] dark:text-[#272217] dark:hover:bg-[#f0ad72]">
              <Github className="h-4 w-4" /> View All on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §5  EXPERIENCE
      ══════════════════════════════════════════ */}
      <section id="experience" className="border-t border-[#272217]/10 bg-[#f5f0e3] py-20 dark:border-white/10 dark:bg-[#12100b]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 space-y-14">
          <SectionHeading eyebrow="Career & Background" title="Experience" />

          {/* Work */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c06c35] text-white shrink-0">
                <Briefcase className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-[1.4rem] font-bold text-[#272217] dark:text-[#fff5dd]">Work Experience</h3>
            </div>
            {experiences.map((exp, i) => (
              <div key={i} className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-7 dark:border-white/10 dark:bg-white/4">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-serif text-[1.2rem] font-bold text-[#272217] dark:text-[#fff5dd]">{exp.position}</h4>
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
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#587a63] dark:text-[#9fc4a8]" /> {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#272217]/8 pt-5 dark:border-white/8">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#f1dfbd]/70 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#587a63] text-white shrink-0">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-[1.4rem] font-bold text-[#272217] dark:text-[#fff5dd]">Education</h3>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-7 dark:border-white/10 dark:bg-white/4">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-serif text-[1.1rem] font-bold text-[#272217] dark:text-[#fff5dd]">{edu.degree}</h4>
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
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#587a63] dark:text-[#9fc4a8]" /> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e4c15f] text-[#272217] shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-[1.4rem] font-bold text-[#272217] dark:text-[#fff5dd]">Certifications</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => {
                const colorClass = certColors[cert.badge ?? 'nti'] ?? certColors['nti'];
                return (
                  <div key={i} className="flex flex-col gap-2 rounded-xl border-2 border-[#272217]/10 bg-white/70 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/4">
                    <span className={`self-start rounded-full border px-2.5 py-0.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] ${colorClass}`}>
                      {cert.issuer.split('(')[0].trim()}
                    </span>
                    <p className="text-[0.88rem] font-semibold leading-snug text-[#272217] dark:text-[#fff5dd]">{cert.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          §6  CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="border-t border-[#272217]/10 bg-[#fbf7ea] py-20 dark:border-white/10 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <SectionHeading eyebrow="Get in touch" title="Contact" />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Direct contact */}
            <div className="space-y-4">
              <h3 className="font-serif text-[1.2rem] font-bold text-[#272217] dark:text-[#fff5dd]">Direct Contact</h3>
              {[
                { href: site.mailto, icon: <Mail className="h-5 w-5" />, label: 'Email', value: site.email, bg: 'bg-[#c06c35]/15 text-[#c06c35] dark:bg-[#c06c35]/10 dark:text-[#f0ad72]' },
                { href: site.phoneTel, icon: <Phone className="h-5 w-5" />, label: 'Phone', value: site.phone, bg: 'bg-[#587a63]/15 text-[#587a63] dark:bg-[#587a63]/10 dark:text-[#9fc4a8]' },
              ].map(({ href, icon, label, value, bg }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-5 transition-all hover:border-[#c06c35]/40 hover:shadow-md dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/40">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>{icon}</div>
                  <div>
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7e6b] dark:text-[#7a6e5a]">{label}</p>
                    <p className="mt-0.5 text-[0.9rem] font-semibold text-[#272217] dark:text-[#fff5dd]">{value}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e4c15f]/20 text-[#8a6800] dark:bg-[#e4c15f]/10 dark:text-[#e4c15f]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7e6b] dark:text-[#7a6e5a]">Location</p>
                  <p className="mt-0.5 text-[0.9rem] font-semibold text-[#272217] dark:text-[#fff5dd]">{site.location}</p>
                </div>
              </div>

              {/* Open to work */}
              <div className="rounded-2xl border-2 border-[#587a63]/30 bg-[#587a63]/8 p-5 dark:border-[#587a63]/20 dark:bg-[#587a63]/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#587a63]" />
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#587a63] dark:text-[#9fc4a8]">Open to work</p>
                </div>
                <p className="text-[0.85rem] leading-6 text-[#4a6654] dark:text-[#a0c8aa]">
                  Available for AI engineering roles, freelance AI projects, and research collaborations.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-serif text-[1.2rem] font-bold text-[#272217] dark:text-[#fff5dd] mb-5">Find Me Online</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { name: 'GitHub', url: site.github, handle: '@Youssefx64', desc: '28 public repos · AI, NLP, ML projects', color: 'group-hover:text-[#272217] dark:group-hover:text-[#fff5dd]' },
                  { name: 'LinkedIn', url: site.linkedin, handle: 'yousseftahaai', desc: 'Professional network & career updates', color: 'group-hover:text-[#0077b5] dark:group-hover:text-[#60a8e0]' },
                  { name: 'Kaggle', url: site.kaggle, handle: 'yousseftaha98', desc: 'Data science competitions & notebooks', color: 'group-hover:text-[#0095cc] dark:group-hover:text-[#20beff]' },
                  { name: 'HuggingFace', url: site.huggingface, handle: 'yousseftaha98', desc: 'Models, datasets & AI demos', color: 'group-hover:text-[#cc7d00] dark:group-hover:text-[#ffb84d]' },
                  { name: 'Medium', url: site.medium, handle: '@ytaha8586', desc: 'AI articles & technical writing', color: 'group-hover:text-[#272217] dark:group-hover:text-[#fff5dd]' },
                  { name: 'Stack Overflow', url: site.stackoverflow, handle: 'Youssef Taha', desc: 'Q&A contributions', color: 'group-hover:text-[#f48024] dark:group-hover:text-[#f48024]' },
                  { name: 'LeetCode', url: site.leetcode, handle: 'Youssef_Taha1', desc: 'Algorithm & data structure solutions', color: 'group-hover:text-[#cc7d00] dark:group-hover:text-[#ffa116]' },
                  { name: 'YouTube', url: site.youtube, handle: '@SirYoussefx64', desc: 'AI tutorials and tech content', color: 'group-hover:text-[#cc0000] dark:group-hover:text-[#ff4444]' },
                ].map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border-2 border-[#272217]/10 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/4">
                    <ExternalLink className={`mt-0.5 h-4 w-4 shrink-0 text-[#8a7e6b] transition-colors dark:text-[#7a6e5a] ${link.color}`} />
                    <div className="min-w-0">
                      <p className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#272217] dark:text-[#fff5dd]">{link.name}</p>
                      <p className="mt-0.5 font-mono text-[0.62rem] text-[#c06c35] dark:text-[#f0ad72]">{link.handle}</p>
                      <p className="mt-1 text-[0.7rem] leading-5 text-[#8a7e6b] dark:text-[#7a6e5a]">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA Banner
      ══════════════════════════════════════════ */}
      <section className="bg-[#272217] py-16 dark:bg-[#161410]">
        <div className="mx-auto max-w-[640px] px-4 text-center sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#d8c9aa]/60">Let's work together</p>
          <h2 className="mt-3 font-serif text-[2rem] font-bold text-[#fff5dd]">Have an AI project in mind?</h2>
          <p className="mt-4 text-[#d8c9aa]/80">Whether it's a RAG system, LLM integration, or full AI pipeline — I'd love to build it with you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.mailto}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#c06c35] px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_6px_0_#8a3d1a] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_0_#8a3d1a]">
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/20 px-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#fff5dd] transition duration-150 hover:border-white/40">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
