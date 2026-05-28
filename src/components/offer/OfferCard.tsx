"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

interface OfferCardProps {
  name: string;
  subtitle: string;
  description: string;
  properties: string[];
  icon: string;
  index: number;
}

export default function OfferCard({
  name,
  subtitle,
  description,
  properties,
  icon,
  index,
}: OfferCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = visible
    ? { animationDelay: `${index * 0.1}s` }
    : { opacity: 0 };

  return (
    <div
      ref={ref}
      className={`${visible ? "animate-in-up" : ""} bg-white rounded-2xl p-6 border border-cream/20 shadow-sm card-lift group cursor-default`}
      style={style}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-cream-light flex items-center justify-center text-2xl shrink-0 group-hover:bg-cream transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-fluid-h3 font-playfair text-navy font-semibold leading-tight">
            {name}
          </h3>
          <span className="text-fluid-sm text-cream font-medium">{subtitle}</span>
        </div>
      </div>
      <p className="text-fluid-sm text-site-text-muted mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {properties.map((prop) => (
          <li
            key={prop}
            className="px-3 py-1 rounded-full bg-cream-light/60 text-navy text-xs font-medium border border-cream/30"
          >
            {prop}
          </li>
        ))}
      </ul>
    </div>
  );
}
