import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'plain' | 'accent';
};

export default function Button({ variant = 'plain', className = '', type = 'button', ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded text-sm transition-colors disabled:opacity-50';
  const styles =
    variant === 'accent'
      ? 'bg-accent px-3 py-1.5 font-medium text-white hover:bg-blue-700'
      : 'text-neutral-600 underline-offset-4 hover:text-accent hover:underline dark:text-neutral-400 dark:hover:text-blue-400';

  return <button type={type} className={`${base} ${styles} ${className}`.trim()} {...rest} />;
}
