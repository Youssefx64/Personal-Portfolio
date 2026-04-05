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
        <div className="mx-auto max-w-[680px] px-4 py-20 sm:px-6">
          <p className="text-[#6B7280] dark:text-[#9CA3AF]">This post could not be found.</p>
          <Link to="/blog" className="mt-4 inline-block text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
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
        className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent"
        aria-hidden
      >
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[680px]">
          <p className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">
            <Link to="/blog" className="text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
              ← Blog
            </Link>
          </p>

          <header className="mt-8">
            <h1 className="font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-ink dark:text-[#EDEDED]">
              {post.title}
            </h1>
            <div className="mt-6 font-mono flex items-center gap-2 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime} min read</span>
            </div>
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
            <div className="mt-8">
              <Button type="button" variant="accent" onClick={share} className="transition-colors duration-150">
                {copied ? 'Link copied' : 'Copy link'}
              </Button>
            </div>
          </header>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,680px)_minmax(0,240px)] justify-center">
          <div className="lg:hidden border-b border-border-light dark:border-border-dark mb-8 pb-8 max-w-[680px] mx-auto w-full">
            <TableOfContents items={toc} />
          </div>

          <article ref={articleRef} className="min-w-0 mx-auto w-full max-w-[680px]">
            <Suspense fallback={<p className="text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">Loading article…</p>}>
              <PostRenderer content={post.content} />
            </Suspense>
          </article>

          <aside className="hidden lg:block sticky top-24">
            <TableOfContents items={toc} />
          </aside>
        </div>

        <nav
          className="mx-auto mt-20 flex max-w-[680px] flex-col gap-4 border-t border-border-light pt-8 dark:border-border-dark sm:flex-row sm:justify-between text-[0.875rem]"
          aria-label="Adjacent posts"
        >
          <div>
            {prev && (
              <p>
                <span className="text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wider text-[0.625rem]">Previous</span>
                <br />
                <Link to={`/blog/${prev.slug}`} className="font-medium text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
                  {prev.title}
                </Link>
              </p>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <p>
                <span className="text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wider text-[0.625rem]">Next</span>
                <br />
                <Link to={`/blog/${next.slug}`} className="font-medium text-accent transition-colors hover:text-accent-hover hover:underline underline-offset-4">
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
