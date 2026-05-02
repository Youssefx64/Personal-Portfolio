import { Link } from 'react-router-dom';
import type { BlogPost } from '../../utils/blogUtils';
import Tag from './tag';

type BlogPostCardProps = {
  post: BlogPost;
  showSummary?: boolean;
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

export default function BlogPostCard({ post, showSummary }: BlogPostCardProps) {
  return (
    <article className="flex flex-col sm:flex-row sm:items-baseline gap-4 py-4 border-b border-border-light dark:border-border-dark last:border-0 relative">
      <div className="flex shrink-0 items-center justify-between sm:w-32 mt-1">
        <time dateTime={post.date} className="font-mono text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">
          {formatDate(post.date)}
        </time>
        <span className="hidden sm:inline-block text-border-light dark:text-border-dark mr-4 md:mr-6">•</span>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-[1.25rem] font-medium leading-snug">
          <Link to={`/blog/${post.slug}`} className="text-accent transition-colors duration-150 hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>
        {showSummary && post.summary && (
          <p className="mt-2 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{post.summary}</p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 relative z-10">
            {post.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
