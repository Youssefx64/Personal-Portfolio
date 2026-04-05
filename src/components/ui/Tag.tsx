import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

type TagProps = (HTMLAttributes<HTMLSpanElement> | ButtonHTMLAttributes<HTMLButtonElement>) & {
  active?: boolean;
  asButton?: boolean;
};

export default function Tag({ active, asButton, className = '', children, ...rest }: TagProps) {
  const base =
    'inline-flex items-center rounded border px-2 py-0.5 text-xs transition-colors';
  const state = active
    ? 'border-accent text-accent dark:border-blue-400 dark:text-blue-400'
    : 'border-neutral-300 text-neutral-600 hover:border-neutral-400 dark:border-neutral-600 dark:text-neutral-400';

  if (asButton) {
    return (
      <button
        type="button"
        className={`${base} ${state} ${className}`.trim()}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={`${base} ${state} ${className}`.trim()} {...(rest as HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </span>
  );
}
