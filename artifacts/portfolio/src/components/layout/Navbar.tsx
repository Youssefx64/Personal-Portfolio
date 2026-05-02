import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-35% 0px -60% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

type NavbarProps = { isDark: boolean; toggleDarkMode: () => void };

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    <header className="sticky top-0 z-50 border-b border-[#272217]/10 bg-[#fbf7ea]/90 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-[#0e0c08]/90">
      <nav className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="inline-flex items-center gap-2.5 group"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#272217] font-mono text-[0.72rem] font-black text-[#fff5dd] ring-2 ring-[#c06c35] dark:bg-[#fff5dd] dark:text-[#272217]">
            YT
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-serif text-[0.9rem] font-bold text-[#272217] group-hover:text-[#c06c35] transition-colors dark:text-[#fff5dd] dark:group-hover:text-[#f0ad72]">
              Youssef Taha
            </span>
            <span className="font-mono text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#8a7e6b] dark:text-[#a99b80]">
              AI Engineer
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`rounded-lg px-3.5 py-2 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-150 ${
                active === id
                  ? 'bg-[#272217] text-[#fff5dd] dark:bg-[#fff5dd] dark:text-[#272217]'
                  : 'text-[#6d6048] hover:bg-[#272217]/8 hover:text-[#272217] dark:text-[#d8c9aa] dark:hover:bg-white/8 dark:hover:text-[#fff5dd]'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] transition-colors hover:border-[#c06c35] hover:text-[#c06c35] dark:border-white/15 dark:text-[#d8c9aa] dark:hover:border-[#f0ad72] dark:hover:text-[#f0ad72]"
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#272217]/15 text-[#6d6048] dark:border-white/15 dark:text-[#d8c9aa]"
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#272217] hover:bg-[#272217]/8 dark:text-[#fff5dd] dark:hover:bg-white/8"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#272217]/10 bg-[#fbf7ea] px-4 pb-4 dark:border-white/10 dark:bg-[#0e0c08] md:hidden">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => { scrollTo(id); setOpen(false); }}
              className={`block w-full rounded-lg px-3 py-2.5 text-left font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                active === id
                  ? 'bg-[#272217] text-[#fff5dd] dark:bg-[#fff5dd] dark:text-[#272217]'
                  : 'text-[#6d6048] hover:text-[#272217] dark:text-[#d8c9aa] dark:hover:text-[#fff5dd]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
