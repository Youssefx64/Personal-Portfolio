import { type RefObject, useEffect, useState } from 'react';

/** 0–1 based on scroll through the given element. */
export function useReadingProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const articleTop = scrollTop + rect.top;
      const articleHeight = el.scrollHeight;
      const viewH = window.innerHeight;
      const end = articleTop + articleHeight - viewH;
      const start = articleTop;
      if (end <= start) {
        setProgress(1);
        return;
      }
      const p = (scrollTop - start) / (end - start);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ref]);

  return progress;
}
