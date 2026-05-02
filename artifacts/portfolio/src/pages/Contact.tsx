import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { site } from '../config/site';

const socialLinks = [
  {
    name: 'GitHub',
    url: site.github,
    handle: '@Youssefx64',
    desc: '28 public repos · AI, NLP, ML projects',
    icon: <Github className="h-5 w-5" />,
    color: 'hover:border-[#272217] hover:text-[#272217] dark:hover:border-[#fff5dd] dark:hover:text-[#fff5dd]',
  },
  {
    name: 'LinkedIn',
    url: site.linkedin,
    handle: 'yousseftahaai',
    desc: 'Professional network & career updates',
    icon: <Linkedin className="h-5 w-5" />,
    color: 'hover:border-[#0077b5] hover:text-[#0077b5] dark:hover:border-[#60a8e0] dark:hover:text-[#60a8e0]',
  },
  {
    name: 'Kaggle',
    url: site.kaggle,
    handle: 'yousseftaha98',
    desc: 'Data science competitions & notebooks',
    icon: <ExternalLink className="h-5 w-5" />,
    color: 'hover:border-[#20beff] hover:text-[#0095cc] dark:hover:border-[#20beff] dark:hover:text-[#20beff]',
  },
  {
    name: 'HuggingFace',
    url: site.huggingface,
    handle: 'yousseftaha98',
    desc: 'Models, datasets & AI demos',
    icon: <span className="text-lg leading-none">🤗</span>,
    color: 'hover:border-[#ff9d00] hover:text-[#cc7d00] dark:hover:border-[#ffb84d] dark:hover:text-[#ffb84d]',
  },
  {
    name: 'LeetCode',
    url: site.leetcode,
    handle: 'Youssef_Taha1',
    desc: 'Algorithm & data structure solutions',
    icon: <ExternalLink className="h-5 w-5" />,
    color: 'hover:border-[#ffa116] hover:text-[#cc7d00] dark:hover:border-[#ffa116] dark:hover:text-[#ffa116]',
  },
  {
    name: 'YouTube',
    url: site.youtube,
    handle: '@SirYoussefx64',
    desc: 'AI tutorials and tech content',
    icon: <ExternalLink className="h-5 w-5" />,
    color: 'hover:border-[#ff0000] hover:text-[#cc0000] dark:hover:border-[#ff4444] dark:hover:text-[#ff4444]',
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact · {site.fullName}</title>
        <meta name="description" content={`Get in touch with ${site.fullName} — ${site.title} based in ${site.location}.`} />
      </Helmet>

      {/* ── Header ── */}
      <section className="bg-[#fbf7ea] pt-16 pb-12 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#c06c35] dark:text-[#f0ad72]">Get in touch</p>
          <h1 className="mt-2 font-serif text-[2.8rem] font-black text-[#272217] dark:text-[#fff5dd]">Contact</h1>
          <p className="mt-3 max-w-xl text-[1rem] leading-7 text-[#6d6048] dark:text-[#a99b80]">
            I'm open to AI engineering roles, freelance collaborations, research partnerships, and interesting conversations about LLMs and GenAI.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf7ea] pb-20 dark:bg-[#0e0c08]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            {/* Left: direct contact */}
            <div className="space-y-5">
              <h2 className="font-serif text-[1.4rem] font-bold text-[#272217] dark:text-[#fff5dd]">Direct Contact</h2>

              <a
                href={site.mailto}
                className="flex items-center gap-4 rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-5 transition-all hover:border-[#c06c35]/40 hover:shadow-md dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c06c35]/15 text-[#c06c35] dark:bg-[#c06c35]/10 dark:text-[#f0ad72]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7e6b] dark:text-[#7a6e5a]">Email</p>
                  <p className="mt-0.5 text-[0.9rem] font-semibold text-[#272217] dark:text-[#fff5dd]">{site.email}</p>
                </div>
              </a>

              <a
                href={site.phoneTel}
                className="flex items-center gap-4 rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-5 transition-all hover:border-[#c06c35]/40 hover:shadow-md dark:border-white/10 dark:bg-white/4 dark:hover:border-[#f0ad72]/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#587a63]/15 text-[#587a63] dark:bg-[#587a63]/10 dark:text-[#9fc4a8]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7e6b] dark:text-[#7a6e5a]">Phone</p>
                  <p className="mt-0.5 text-[0.9rem] font-semibold text-[#272217] dark:text-[#fff5dd]">{site.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border-2 border-[#272217]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e4c15f]/20 text-[#8a6800] dark:bg-[#e4c15f]/10 dark:text-[#e4c15f]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7e6b] dark:text-[#7a6e5a]">Location</p>
                  <p className="mt-0.5 text-[0.9rem] font-semibold text-[#272217] dark:text-[#fff5dd]">{site.location}</p>
                </div>
              </div>

              {/* Availability box */}
              <div className="rounded-2xl border-2 border-[#587a63]/30 bg-[#587a63]/8 p-5 dark:border-[#587a63]/20 dark:bg-[#587a63]/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#587a63]" />
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#587a63] dark:text-[#9fc4a8]">Open to work</p>
                </div>
                <p className="text-[0.85rem] leading-6 text-[#4a6654] dark:text-[#a0c8aa]">
                  Currently available for AI engineering roles, freelance AI projects, and research collaborations.
                </p>
              </div>
            </div>

            {/* Right: social links */}
            <div>
              <h2 className="font-serif text-[1.4rem] font-bold text-[#272217] dark:text-[#fff5dd] mb-5">Find Me Online</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-start gap-3.5 rounded-xl border-2 border-[#272217]/10 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/4 ${link.color}`}
                  >
                    <div className="mt-0.5 shrink-0 text-[#8a7e6b] transition-colors group-hover:text-inherit dark:text-[#7a6e5a]">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#272217] dark:text-[#fff5dd]">{link.name}</p>
                      <p className="mt-0.5 font-mono text-[0.65rem] text-[#c06c35] dark:text-[#f0ad72]">{link.handle}</p>
                      <p className="mt-1 text-[0.72rem] leading-5 text-[#8a7e6b] dark:text-[#7a6e5a]">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
