import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../hooks/useDarkMode';
import Navbar from './Navbar';
import Footer from './Footer';
import { site } from '../../config/site';

export default function Layout() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex min-h-screen flex-col bg-[#fbf7ea] text-[#272217] antialiased dark:bg-[#0e0c08] dark:text-[#fff5dd]">
      <Helmet
        defaultTitle={site.fullName}
        titleTemplate={`%s · ${site.name}`}
        htmlAttributes={{ lang: 'en' }}
      >
        <title>{site.fullName} · AI Engineer</title>
        <meta name="description" content={site.bio} />
      </Helmet>
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
