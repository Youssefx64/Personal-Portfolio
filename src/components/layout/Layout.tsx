import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../hooks/useDarkMode';
import Navbar from './Navbar';
import Footer from './Footer';
import { site } from '../../config/site';

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
          content={`${site.title} — LLMs, RAG, and Agentic AI. Projects, writing, and research.`}
        />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
