import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-sm text-[#6d6048] dark:text-[#d8c9aa] sm:px-6">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="projects" element={<Suspense fallback={<PageLoader />}><Projects /></Suspense>} />
        <Route path="experience" element={<Suspense fallback={<PageLoader />}><Experience /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
