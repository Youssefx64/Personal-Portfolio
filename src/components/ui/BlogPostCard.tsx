import { Link } from 'react-router-dom';
import type { BlogPost } from '../../utils/blogUtils';
import Tag from './Tag';

type BlogPostCardProps = {
  post: BlogPost;
  showSummary?: boolean;
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

export default function BlogPostCard({ post, showSummary }: BlogPostCardProps) {
  return (
    <article className="border-b border-neutral-200 py-6 last:border-0 dark:border-neutral-800">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-neutral-500">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>—</span>
        <span>{post.readingTime} min read</span>
      </div>
      <h2 className="mt-2 font-serif text-xl font-medium">
        <Link to={`/blog/${post.slug}`} className="text-ink hover:text-accent dark:text-neutral-100 dark:hover:text-blue-400">
          {post.title}
        </Link>
      </h2>
      {showSummary && post.summary && (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{post.summary}</p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}
