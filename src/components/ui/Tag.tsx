import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

type TagProps = (HTMLAttributes<HTMLSpanElement> | ButtonHTMLAttributes<HTMLButtonElement>) & {
  active?: boolean;
  asButton?: boolean;
};

export default function Tag({ active, asButton, className = '', children, ...rest }: TagProps) {
  if (asButton) {
    const state = active
      ? 'border-accent bg-accent text-white'
      : 'border-border-light dark:border-border-dark text-[#6B7280] dark:text-[#9CA3AF] hover:text-ink dark:hover:text-[#EDEDED] hover:border-[#6B7280] dark:hover:border-[#9CA3AF]';
    return (
      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs transition-colors duration-150 ${state} ${className}`.trim()}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[0.75rem] text-gray-600 dark:text-gray-300 ${className}`.trim()}
      {...(rest as HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </span>
  );
}
