import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { site } from '../../config/site';

type FooterProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const iconImg = 'h-[18px] w-[18px] opacity-70 transition-colors duration-150 group-hover:opacity-100 group-hover:text-accent';

export default function Footer({ isDark, toggleDarkMode }: FooterProps) {
  const iconBtn = 'group text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-150 hover:text-accent dark:hover:text-accent flex items-center justify-center';

  return (
    <footer className="mt-16 border-t border-border-light py-8 dark:border-border-dark">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <p className="text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="GitHub">
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="LinkedIn">
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
          <a href={site.kaggle} target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="Kaggle">
            <img src="https://cdn.simpleicons.org/kaggle/6B7280" alt="" className={iconImg} />
          </a>
          <a href={site.huggingface} target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="Hugging Face">
            <img src="https://cdn.simpleicons.org/huggingface/6B7280" alt="" className={iconImg} />
          </a>
          <a href={site.mailto} className={iconBtn} aria-label="Email">
            <Mail className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="ml-2 flex items-center justify-center text-[#6B7280] transition-colors duration-150 hover:text-accent dark:text-[#9CA3AF] dark:hover:text-accent"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
