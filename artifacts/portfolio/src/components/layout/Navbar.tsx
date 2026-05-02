import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#191812]/10 bg-[#fbf7ea]/85 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-[#14120e]/85">
      <nav className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-[#272217] dark:text-[#fff5dd]"
        >
          <Sparkles className="h-4 w-4 text-[#c06c35]" aria-hidden="true" />
          Portfolio loading
        </Link>
        <span className="rounded-full border border-[#272217]/15 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6d6048] dark:border-white/15 dark:text-[#d8c9aa]">
          Game room open
        </span>
      </nav>
    </header>
  );
}
