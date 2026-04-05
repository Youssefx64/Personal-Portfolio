import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const nav = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/research', label: 'Research' },
  { to: '/resume', label: 'Resume' },
] as const;

function linkClass(isActive: boolean) {
  const base = "relative text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-150 ease-in-out hover:text-ink dark:hover:text-[#EDEDED] py-1";
  if (isActive) {
    return `${base} font-bold !text-ink dark:!text-[#EDEDED] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-accent`;
  }
  return `${base} after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[150ms] hover:after:scale-x-100`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 bg-paper/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark dark:bg-[#0F0F0F]/80">
      <nav className="mx-auto flex h-[56px] max-w-[720px] items-center justify-between px-4 sm:px-6">
        <NavLink
          to="/"
          className="font-mono text-sm text-ink dark:text-[#EDEDED] select-none"
          onClick={() => setOpen(false)}
        >
          Youssef Taha B.
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
          className="rounded p-2 text-[#6B7280] dark:text-[#9CA3AF] hover:bg-neutral-100 dark:hover:bg-neutral-900 md:hidden transition-colors duration-150"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[56px] z-40 bg-paper dark:bg-[#0F0F0F] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-6 border-t border-border-light dark:border-border-dark">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block px-3 py-3 text-lg font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-accent dark:text-accent font-bold'
                      : 'text-ink dark:text-[#EDEDED] hover:text-accent dark:hover:text-accent'
                  }`
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
