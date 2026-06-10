import type { ReactNode } from "react";

export function highlight(text: string): ReactNode {
  const parts = text.split(/(CNC|bezpyłow\w*)/gi);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold underline text-cream">{part}</span>
    ) : (
      part || null
    )
  );
}
