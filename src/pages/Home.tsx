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

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:max-w-4xl lg:py-20">
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink dark:text-neutral-100 sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">{site.title}</p>
          <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">{BIO}</p>
        </header>

        <section className="mt-16" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Featured work
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link to="/projects" className="text-accent underline-offset-2 hover:underline dark:text-blue-400">
              All projects →
            </Link>
          </p>
        </section>

        <section className="mt-16" aria-labelledby="writing-heading">
          <h2 id="writing-heading" className="font-serif text-xl font-medium text-ink dark:text-neutral-100">
            Recent writing
          </h2>
          <div className="mt-2">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="text-sm">
            <Link to="/blog" className="text-accent underline-offset-2 hover:underline dark:text-blue-400">
              Archive →
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
