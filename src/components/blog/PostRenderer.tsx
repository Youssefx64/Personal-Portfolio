import type { ReactNode } from 'react';
import { isValidElement } from 'react';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import { slugifyHeading } from '../../utils/slugify';
import { CodeBlock } from './CodeBlock';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.min.css';

function childrenToPlainText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(childrenToPlainText).join('');
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return childrenToPlainText(props.children);
  }
  return '';
}

const markdownComponents: Partial<Components> = {
  h2: ({ children, ...props }) => {
    const text = childrenToPlainText(children);
    const id = slugifyHeading(text);
    return (
      <h2
        id={id}
        className="mt-12 scroll-mt-28 font-serif text-2xl font-medium text-ink first:mt-0 dark:text-neutral-100"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = childrenToPlainText(children);
    const id = slugifyHeading(text);
    return (
      <h3 id={id} className="mt-8 scroll-mt-28 font-serif text-xl font-medium text-ink dark:text-neutral-100" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }) => (
    <h4 className="mt-6 font-serif text-lg font-medium text-ink dark:text-neutral-100" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="my-4 leading-relaxed text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-accent underline-offset-2 hover:underline dark:text-blue-400"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-4 list-disc space-y-1 pl-6 text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-4 border-l-2 border-neutral-300 pl-4 text-neutral-600 italic dark:border-neutral-600 dark:text-neutral-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-10 border-neutral-200 dark:border-neutral-800" {...props} />,
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm text-neutral-700 dark:text-neutral-300" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-neutral-200 bg-neutral-100 px-3 py-2 font-medium dark:border-neutral-700 dark:bg-neutral-900" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-neutral-200 px-3 py-2 dark:border-neutral-700" {...props}>
      {children}
    </td>
  ),
  img: ({ src, alt, ...props }) => (
    <img
      src={src}
      alt={alt ?? ''}
      loading="lazy"
      className="my-6 max-h-[480px] rounded-lg border border-neutral-200 object-contain dark:border-neutral-800"
      {...props}
    />
  ),
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  code: ({ className, children, ...props }) => {
    const inline = !className;
    if (inline) {
      return (
        <code
          className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em] text-ink dark:bg-neutral-800 dark:text-neutral-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  section: ({ children, className, ...props }) => {
    const isFootnotes = typeof className === 'string' && className.split(/\s+/).includes('footnotes');
    if (isFootnotes) {
      return (
        <section
          className={`footnotes mt-12 border-t border-neutral-200 pt-8 text-sm dark:border-neutral-800 ${className ?? ''}`}
          {...props}
        >
          {children}
        </section>
      );
    }
    return (
      <section className={className} {...props}>
        {children}
      </section>
    );
  },
};

type PostRendererProps = {
  content: string;
};

export default function PostRenderer({ content }: PostRendererProps) {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false }], rehypeHighlight]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
