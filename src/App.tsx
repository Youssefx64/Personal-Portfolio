import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Research = lazy(() => import('./pages/Research'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="research" element={<Research />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
