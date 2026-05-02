import { Moon, Sun, Github, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../config/site';

type FooterProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

export default function Footer({ isDark, toggleDarkMode }: FooterProps) {
  return (
    <footer className="border-t border-[#272217]/10 bg-[#fbf7ea] py-10 dark:border-white/10 dark:bg-[#0e0c08]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#272217] dark:text-[#fff5dd]">
              {site.fullName}
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[#6d6048] dark:text-[#a99b80]">
              {site.title}
            </p>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={toggleDarkMode}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#272217]/8 pt-6 sm:flex-row dark:border-white/8">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#8a7e6b] dark:text-[#7a6e5a]">
            © {new Date().getFullYear()} {site.fullName} · {site.location}
          </p>
          <div className="flex gap-5">
            {[
              { to: '/projects', label: 'Projects' },
              { to: '/experience', label: 'Experience' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#8a7e6b] transition-colors hover:text-[#c06c35] dark:text-[#7a6e5a] dark:hover:text-[#f0ad72]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
