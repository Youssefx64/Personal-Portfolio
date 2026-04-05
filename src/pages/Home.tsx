import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { site } from '../config/site';
import { projects } from '../content/projects';
import BlogPostCard from '../components/ui/BlogPostCard';
import ProjectCard from '../components/ui/ProjectCard';
import { getAllPostsSorted } from '../utils/blogUtils';

const FEATURED_IDS = [1, 2, 3] as const;

const BIO =
  'GenAI Developer and AI Engineer with hands-on experience designing end-to-end Generative AI systems. Specialized in LLMs, RAG pipelines, and Agentic AI architectures. Proficient in Python, PyTorch, and modern NLP frameworks. Passionate about applying GenAI to real-world problems with a research-driven mindset.';

export default function Home() {
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as typeof projects;
  const recentPosts = getAllPostsSorted().slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content={`${site.name} — ${site.title}. ${BIO.slice(0, 155)}…`} />
        <meta property="og:title" content={`${site.name} — ${site.title}`} />
        <meta property="og:description" content={BIO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
      </Helmet>

      {/* Hero section */}
      <div className="mx-auto max-w-[720px] px-4 pt-24 pb-8 sm:px-6 md:pt-32">
        <header className="max-w-xl">
          <h1 className="font-serif text-[2.5rem] font-bold tracking-tight text-ink dark:text-[#EDEDED]">
            {site.name}
          </h1>
          <p className="mt-4 text-[0.875rem] font-medium tracking-widest uppercase text-[#6B7280] dark:text-[#9CA3AF]">
            {site.title}
          </p>
          <p className="mt-8 text-base leading-[1.75] text-[#111111] dark:text-[#EDEDED]">
            {BIO}
          </p>
        </header>
      </div>

      <div className="mx-auto max-w-[720px] px-4 sm:px-6">
        <hr className="my-16 border-border-light dark:border-border-dark" />
      </div>

      {/* Featured Projects section */}
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <section aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
            Featured Projects
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/projects" className="text-[0.875rem] text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
              View all projects <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-[720px] px-4 sm:px-6">
        <hr className="my-16 border-border-light dark:border-border-dark" />
      </div>

      {/* Recent Writing section */}
      <div className="mx-auto max-w-[720px] px-4 sm:px-6 pb-16">
        <section aria-labelledby="writing-heading">
          <h2 id="writing-heading" className="font-serif text-[1.75rem] font-semibold text-ink dark:text-[#EDEDED]">
            Recent Writing
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-[0.875rem] text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
              Read all posts <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
