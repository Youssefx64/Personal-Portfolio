import { lazy, Suspense, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { site } from '../config/site';
import TableOfContents from '../components/blog/TableOfContents';

const PostRenderer = lazy(() => import('../components/blog/PostRenderer'));
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { extractTocFromMarkdown, getAdjacentPosts, getPostBySlug } from '../utils/blogUtils';

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const articleRef = useRef<HTMLElement>(null);
  const progress = useReadingProgress(articleRef);
  const [copied, setCopied] = useState(false);

  if (!slug) return <Navigate to="/blog" replace />;

  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post not found</title>
        </Helmet>
        <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
          <p className="text-neutral-600 dark:text-neutral-400">This post could not be found.</p>
          <Link to="/blog" className="mt-4 inline-block text-accent underline-offset-2 hover:underline dark:text-blue-400">
            ← Back to blog
          </Link>
        </div>
      </>
    );
  }

  const toc = extractTocFromMarkdown(post.content);
  const { prev, next } = getAdjacentPosts(slug);
  const canonical = `${site.url}/blog/${post.slug}`;

  const share = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : canonical;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.summary ?? post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary ?? post.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={post.date} />
        {post.tags.map((t) => (
          <meta property="article:tag" content={t} key={t} />
        ))}
      </Helmet>

      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-0.5 bg-neutral-200 dark:bg-neutral-800"
        aria-hidden
      >
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out dark:bg-blue-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          <Link to="/blog" className="text-accent underline-offset-2 hover:underline dark:text-blue-400">
            ← Blog
          </Link>
        </p>

        <header className="mx-auto mt-6 max-w-[680px] text-center lg:text-left">
          <h1 className="font-serif text-3xl font-medium leading-tight text-ink dark:text-neutral-100 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 lg:justify-start">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              {post.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Button type="button" variant="accent" onClick={share}>
              {copied ? 'Link copied' : 'Copy link'}
            </Button>
          </div>
        </header>

        <div className="mx-auto mt-12 grid max-w-[680px] gap-10 lg:max-w-none lg:grid-cols-[minmax(0,200px)_minmax(0,680px)] lg:gap-12 xl:grid-cols-[minmax(0,220px)_minmax(0,680px)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-8 border-b border-neutral-200 pb-8 lg:hidden dark:border-neutral-800">
              <TableOfContents items={toc} />
            </div>
            <div className="hidden lg:block">
              <TableOfContents items={toc} />
            </div>
          </aside>

          <article ref={articleRef} className="min-w-0 border-neutral-200 dark:border-neutral-800 lg:border-l lg:pl-10">
            <Suspense fallback={<p className="text-sm text-neutral-500 dark:text-neutral-500">Loading article…</p>}>
              <PostRenderer content={post.content} />
            </Suspense>
          </article>
        </div>

        <nav
          className="mx-auto mt-16 flex max-w-[680px] flex-col gap-4 border-t border-neutral-200 pt-10 text-sm dark:border-neutral-800 sm:flex-row sm:justify-between"
          aria-label="Adjacent posts"
        >
          <div>
            {prev && (
              <p>
                <span className="text-neutral-500 dark:text-neutral-500">Previous</span>
                <br />
                <Link to={`/blog/${prev.slug}`} className="font-medium text-accent hover:underline dark:text-blue-400">
                  {prev.title}
                </Link>
              </p>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <p>
                <span className="text-neutral-500 dark:text-neutral-500">Next</span>
                <br />
                <Link to={`/blog/${next.slug}`} className="font-medium text-accent hover:underline dark:text-blue-400">
                  {next.title}
                </Link>
              </p>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
