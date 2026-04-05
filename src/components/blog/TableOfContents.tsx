import type { TocItem } from '../../utils/blogUtils';

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 font-medium text-ink dark:text-neutral-200">On this page</p>
      <ul className="space-y-1.5 border-l border-neutral-200 pl-3 dark:border-neutral-700">
        {items.map((item, index) => (
          <li
            key={`${index}-${item.id}`}
            className={item.level === 3 ? 'pl-3' : ''}
          >
            <a
              href={`#${item.id}`}
              className="block py-0.5 text-neutral-600 hover:text-accent dark:text-neutral-400 dark:hover:text-blue-400"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
