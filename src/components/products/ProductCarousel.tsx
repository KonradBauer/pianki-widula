"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface ProductCarouselProps {
  images: string[];
  title: string;
}

const AUTO_ADVANCE_MS = 4000;

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, next]);

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cream-light/40">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`${title} - ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Progress bar */}
        {!paused && (
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cream/30">
            <div
              key={index}
              className="h-full bg-cream rounded-full"
              style={{ animation: `width-progress ${AUTO_ADVANCE_MS}ms linear forwards` }}
            />
          </div>
        )}

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-navy shadow-md flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Poprzednie"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-navy shadow-md flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Następne"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-6 h-2 bg-navy" : "w-2 h-2 bg-navy/25 hover:bg-navy/50"
            }`}
            aria-label={`Zdjęcie ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === index ? "border-navy" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={`${title} - miniatura ${i + 1}`} fill sizes="56px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
