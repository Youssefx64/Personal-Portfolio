import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site } from '../../config/site';

const nav = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/research', label: 'Research' },
  { to: '/resume', label: 'Resume' },
] as const;

function linkClass(isActive: boolean) {
  const base =
    'text-sm transition-colors underline-offset-4 decoration-accent decoration-1';
  if (isActive) {
    return `${base} text-ink dark:text-neutral-100 underline font-medium`;
  }
  return `${base} text-neutral-600 dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-200 hover:underline`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-paper/95 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6 lg:max-w-4xl">
        <NavLink
          to="/"
          className="font-serif text-lg font-medium text-ink dark:text-neutral-100"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => linkClass(isActive)}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 dark:border-neutral-800 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-sm ${isActive ? 'bg-neutral-100 font-medium dark:bg-neutral-900' : 'text-neutral-600 dark:text-neutral-400'}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
