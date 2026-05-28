"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

const CLASS_MAP = {
  up: "animate-in-up",
  left: "animate-in-left",
  right: "animate-in-right",
  fade: "animate-in-fade",
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    animationDelay: `${delay}s`,
    ...(!visible && { opacity: 0 }),
  };

  return (
    <div
      ref={ref}
      className={`${visible ? CLASS_MAP[direction] : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
