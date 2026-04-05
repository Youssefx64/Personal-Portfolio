import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from '../config/site';
import BlogPostCard from '../components/ui/BlogPostCard';
import Tag from '../components/ui/Tag';
import { getAllPostsSorted, getAllTags } from '../utils/blogUtils';

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const posts = getAllPostsSorted();
  const tags = useMemo(() => getAllTags(), []);

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Writing on machine learning, computer vision, and engineering practice." />
        <meta property="og:title" content={`Blog · ${site.name}`} />
        <meta property="og:description" content="Archive of posts on ML and engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/blog`} />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:max-w-4xl">
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium text-ink dark:text-neutral-100">Blog</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Notes and longer articles, newest first. Click a tag to filter the list.
          </p>
        </header>

        {tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            <Tag asButton active={activeTag === null} onClick={() => setActiveTag(null)}>
              All
            </Tag>
            {tags.map((t) => (
              <Tag key={t} asButton active={activeTag === t} onClick={() => setActiveTag(activeTag === t ? null : t)}>
                {t}
              </Tag>
            ))}
          </div>
        )}

        <div className="mt-4">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} showSummary />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-neutral-600 dark:text-neutral-400">No posts for this tag.</p>
        )}
      </div>
    </>
  );
}
