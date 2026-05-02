/** Rough reading time from markdown body (strips fenced code blocks). */
export function estimateReadingTimeMinutes(markdown: string, wpm = 200): number {
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, ' ');
  const text = withoutCode.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}
