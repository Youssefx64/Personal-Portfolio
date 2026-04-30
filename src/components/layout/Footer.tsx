import { Moon, Sun } from 'lucide-react';
import { site } from '../../config/site';

type FooterProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

export default function Footer({ isDark, toggleDarkMode }: FooterProps) {
  return (
    <footer className="border-t border-[#191812]/10 bg-[#fbf7ea] py-8 dark:border-white/10 dark:bg-[#14120e]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-[#6d6048] dark:text-[#d8c9aa]">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors duration-150 hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
