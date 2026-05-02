import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../hooks/useDarkMode';
import Navbar from './Navbar';
import Footer from './Footer';
import { site } from '../../config/site';

function PageFallback() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-sm text-neutral-500 dark:text-neutral-400 sm:px-6">
      Loading…
    </div>
  );
}

export default function Layout() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Helmet
        defaultTitle={site.name}
        titleTemplate={`%s · ${site.name}`}
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name="description"
          content="A tiny game is open while the portfolio is being rebuilt."
        />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
