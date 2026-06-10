"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";
import { highlight } from "@/lib/highlight";

interface OfferCardProps {
  name: string;
  subtitle: string;
  description: string;
  properties: string[];
  icon: string;
  image: string;
  index: number;
}

export default function OfferCard({
  name,
  subtitle,
  description,
  properties,
  icon,
  image,
  index,
}: OfferCardProps) {
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
      { threshold: 0.1, rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    animationDelay: `${index * 0.1}s`,
    ...(!visible && { opacity: 0 }),
  };

  return (
    <div
      ref={ref}
      className={`${visible ? "animate-in-up" : ""} bg-white rounded-2xl overflow-hidden border border-cream/20 shadow-sm card-lift group cursor-default`}
      style={style}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-fluid-h3 font-playfair text-navy font-semibold leading-tight mb-1">
          {name}
        </h3>
        <span className="text-fluid-sm text-cream font-medium block mb-3">{subtitle}</span>
        <p className="text-fluid-sm text-site-text-muted mb-4">{highlight(description)}</p>
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
    </div>
  );
}
