import { Github, Linkedin, GraduationCap, Mail, Moon, Sun } from 'lucide-react';
import { site } from '../../config/site';

type FooterProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const iconImg = 'h-5 w-5 opacity-70 transition-opacity hover:opacity-100 dark:opacity-80';

export default function Footer({ isDark, toggleDarkMode }: FooterProps) {
  const iconBtn =
    'text-neutral-500 transition-colors hover:text-accent dark:text-neutral-400 dark:hover:text-blue-400';

  return (
    <footer className="mt-auto border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 sm:px-6 lg:max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={site.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label="Kaggle"
          >
            <img
              src="https://cdn.simpleicons.org/kaggle/20BEFF"
              alt=""
              width={20}
              height={20}
              className={iconImg}
            />
          </a>
          <a
            href={site.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label="Hugging Face"
          >
            <img
              src="https://cdn.simpleicons.org/huggingface/FFD21E"
              alt=""
              width={20}
              height={20}
              className={iconImg}
            />
          </a>
          <a
            href={site.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label="Google Scholar"
          >
            <GraduationCap className="h-5 w-5" />
          </a>
          <a href={site.mailto} className={iconBtn} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          onClick={toggleDarkMode}
          className="flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-neutral-200"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
        </button>

        <p className="text-center text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
