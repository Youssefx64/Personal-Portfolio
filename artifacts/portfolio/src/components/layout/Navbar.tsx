import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#272217]/10 bg-[#fbf7ea]/90 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-[#0e0c08]/90">
      <nav className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#272217] dark:text-[#fff5dd]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c06c35] text-white">
            <Cpu className="h-3.5 w-3.5" />
          </span>
          YT.ai
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#272217] text-[#fff5dd] dark:bg-[#fff5dd] dark:text-[#272217]'
                    : 'text-[#6d6048] hover:bg-[#272217]/8 hover:text-[#272217] dark:text-[#d8c9aa] dark:hover:bg-white/8 dark:hover:text-[#fff5dd]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#272217] transition-colors hover:bg-[#272217]/8 dark:text-[#fff5dd] dark:hover:bg-white/8 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#272217]/10 bg-[#fbf7ea] px-4 pb-4 dark:border-white/10 dark:bg-[#0e0c08] md:hidden">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? 'bg-[#272217] text-[#fff5dd] dark:bg-[#fff5dd] dark:text-[#272217]'
                    : 'text-[#6d6048] hover:text-[#272217] dark:text-[#d8c9aa] dark:hover:text-[#fff5dd]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
