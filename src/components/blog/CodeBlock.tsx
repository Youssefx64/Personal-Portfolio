import type { ComponentPropsWithoutRef } from 'react';

type CodeBlockProps = ComponentPropsWithoutRef<'pre'>;

export function CodeBlock({ children, className = '', ...rest }: CodeBlockProps) {
  return (
    <pre
      className={`mb-4 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900 ${className}`.trim()}
      {...rest}
    >
      {children}
    </pre>
  );
}
