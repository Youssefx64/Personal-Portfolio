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
import 'highlight.js/styles/github-dark.min.css';

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
        className="mt-12 mb-6 scroll-mt-28 border-l-4 border-accent pl-4 font-serif text-[1.75rem] font-semibold text-ink first:mt-0 dark:text-[#EDEDED]"
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
      <h3 id={id} className="mt-10 mb-4 scroll-mt-28 border-l-4 border-accent pl-4 font-serif text-[1.25rem] font-semibold text-ink dark:text-[#EDEDED]" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }) => (
    <h4 className="mt-8 mb-4 font-serif text-lg font-semibold text-ink dark:text-[#EDEDED]" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="my-6 text-base leading-[1.75] text-[#111111] dark:text-[#EDEDED]" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-accent underline-offset-4 hover:underline transition-colors hover:text-accent-hover"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-6 list-disc space-y-2 pl-6 text-[#111111] dark:text-[#EDEDED]" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-6 list-decimal space-y-2 pl-6 text-[#111111] dark:text-[#EDEDED]" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-[1.75]" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-8 border-l-4 border-border-light dark:border-border-dark bg-paper dark:bg-surface-dark pl-4 py-2 italic text-[#6B7280] dark:text-[#9CA3AF]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-12 border-border-light dark:border-border-dark" {...props} />,
  table: ({ children, ...props }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[0.875rem] text-[#111111] dark:text-[#EDEDED]" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border-b-2 border-border-light px-4 py-3 font-semibold dark:border-border-dark" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-b border-border-light px-4 py-3 dark:border-border-dark" {...props}>
      {children}
    </td>
  ),
  img: ({ src, alt, ...props }) => (
    <span className="block my-8 text-center">
      <img
        src={src}
        alt={alt ?? ''}
        loading="lazy"
        className="mx-auto max-h-[600px] w-full rounded-lg shadow-sm"
        {...props}
      />
      {alt && <span className="block mt-4 text-[0.875rem] text-[#6B7280] dark:text-[#9CA3AF]">{alt}</span>}
    </span>
  ),
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  code: ({ className, children, ...props }) => {
    const inline = !className;
    if (inline) {
      return (
        <code
          className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-[0.875em] text-ink dark:bg-code-bg-dark dark:text-[#EDEDED]"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} font-mono text-[0.875em]`} {...props}>
        {children}
      </code>
    );
  },
  section: ({ children, className, ...props }) => {
    const isFootnotes = typeof className === 'string' && className.split(/\s+/).includes('footnotes');
    if (isFootnotes) {
      return (
        <section
          className={`footnotes mt-16 border-t border-border-light pt-8 text-[0.875rem] dark:border-border-dark ${className ?? ''}`}
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
