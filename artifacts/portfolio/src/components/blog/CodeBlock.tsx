import type { ComponentPropsWithoutRef } from 'react';

type CodeBlockProps = ComponentPropsWithoutRef<'pre'>;

export function CodeBlock({ children, className = '', ...rest }: CodeBlockProps) {
  return (
    <pre
      className={`mb-6 mt-4 overflow-x-auto rounded-lg bg-[#1E1E1E] border border-border-light dark:border-border-dark p-4 text-[0.875rem] font-mono text-[#EDEDED] shadow-sm ${className}`.trim()}
      {...rest}
    >
      {children}
    </pre>
  );
}
