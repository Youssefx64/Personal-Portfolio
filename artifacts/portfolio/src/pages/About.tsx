import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Github, Linkedin, BookOpen, Code2 } from 'lucide-react';
import { site } from '../config/site';
import { skillGroups } from '../content/resume';

const iconMap: Record<string, string> = {
  'Programming': '💻',
  'Generative AI & LLMs': '🤖',
  'NLP': '🗣️',
  'Deep Learning': '🧠',
  'Vector Databases': '🗄️',
  'DevOps & Tools': '🛠️',
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About · {site.fullName}</title>
        <meta name="description" content={`Learn more about ${site.fullName} — ${site.title} based in ${site.location}.`} />
      </Helmet>

      {/* ── Header ── */}
      <section className="bg-[#fbf7ea] pt-16 pb-12 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Get to know me</p>
          <h1 className="mt-2 font-serif text-[2.8rem] font-black text-[#272217] dark:text-[#fff5dd]">About Me</h1>
        </div>
      </section>

      {/* ── Bio + photo ── */}
      <section className="bg-[#fbf7ea] pb-16 dark:bg-[#0e0c08]">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:items-start">
          {/* Photo */}
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-[#c06c35]/15 blur-lg" />
              <img
                src={site.avatarPath}
                alt={site.fullName}
                className="relative h-64 w-64 rounded-2xl border-4 border-[#272217]/10 object-cover shadow-[8px_8px_0_#587a63] dark:border-white/10 dark:shadow-[8px_8px_0_#8a5b34]"
              />
            </div>

            {/* Contact info card */}
            <div className="w-full max-w-xs rounded-2xl border-2 border-[#272217]/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/4">
              <p className="mb-3 font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#8a7e6b] dark:text-[#7a6e5a]">Quick info</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-sm text-[#5d523e] dark:text-[#d8c9aa]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />
                  {site.location}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#5d523e] dark:text-[#d8c9aa]">
                  <Mail className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />
                  <a href={site.mailto} className="hover:text-[#c06c35] dark:hover:text-[#f0ad72] transition-colors">{site.email}</a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#5d523e] dark:text-[#d8c9aa]">
                  <Github className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c06c35] dark:hover:text-[#f0ad72] transition-colors">Youssefx64</a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#5d523e] dark:text-[#d8c9aa]">
                  <Linkedin className="h-4 w-4 shrink-0 text-[#c06c35] dark:text-[#f0ad72]" />
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c06c35] dark:hover:text-[#f0ad72] transition-colors">yousseftahaai</a>
                </div>
              </div>
              <div className="mt-4 border-t border-[#272217]/8 pt-4 dark:border-white/8">
                <div className="flex flex-wrap gap-2">
                  {[
                    { href: site.kaggle, label: 'Kaggle' },
                    { href: site.leetcode, label: 'LeetCode' },
                    { href: site.youtube, label: 'YouTube' },
                    { href: site.huggingface, label: 'HuggingFace' },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#272217]/15 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h2 className="font-serif text-[1.6rem] font-bold text-[#272217] dark:text-[#fff5dd]">
              AI Engineer building intelligent systems that matter
            </h2>
            <div className="mt-5 space-y-4 text-[1rem] leading-8 text-[#5d523e] dark:text-[#d8c9aa]">
              <p>
                I'm <strong className="text-[#272217] dark:text-[#fff5dd]">Youssef Taha Badawi</strong>, an AI Engineer and GenAI Developer based in Cairo, Egypt, currently studying Artificial Intelligence & Data Science at the Faculty of Computers & AI, Beni-Suef National University.
              </p>
              <p>
                My work focuses on the full lifecycle of Generative AI systems — from problem definition and system design, all the way to integration, deployment, and iterative optimization. I specialize in <strong className="text-[#272217] dark:text-[#fff5dd]">LLMs, Retrieval-Augmented Generation (RAG) pipelines, and Agentic AI architectures</strong> that solve real-world problems with measurable impact.
              </p>
              <p>
                I've built production-ready AI systems including domain-specific RAG solutions, LLM-powered virtual assistants, and an end-to-end CAD generation platform (CadArena) that translates natural language into engineering drawings using Large Language Models.
              </p>
              <p>
                I'm deeply passionate about the mathematical foundations of AI, clean modular engineering, and continuously pushing the boundaries of what intelligent systems can do.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { icon: <BookOpen className="h-4 w-4" />, label: 'B.Sc. AI & Data Science', sub: 'Beni-Suef National University' },
                { icon: <Code2 className="h-4 w-4" />, label: '12+ GitHub Repos', sub: '28 Public Repositories' },
                { icon: <span className="text-sm">🏆</span>, label: 'NASA Space Apps', sub: 'Challenge 2025 Participant' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="rounded-xl border border-[#272217]/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/4">
                  <div className="flex items-center gap-2 text-[#c06c35] dark:text-[#f0ad72]">{icon}</div>
                  <p className="mt-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#272217] dark:text-[#fff5dd]">{label}</p>
                  <p className="mt-0.5 text-[0.72rem] text-[#8a7e6b] dark:text-[#7a6e5a]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-t border-[#272217]/10 bg-[#f5f0e3] py-16 dark:border-white/10 dark:bg-[#12100b]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Technical Skills</p>
          <h2 className="mt-2 font-serif text-[2rem] font-bold text-[#272217] dark:text-[#fff5dd]">What I Work With</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/4"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{iconMap[group.name] ?? '⚡'}</span>
                  <h3 className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#272217] dark:text-[#fff5dd]">
                    {group.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#f1dfbd]/80 px-3 py-1 font-mono text-[0.65rem] font-bold text-[#5d523e] dark:bg-white/8 dark:text-[#d8c9aa]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
