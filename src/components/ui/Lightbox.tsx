"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, alt, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);

  const prev = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`absolute inset-0 transition-transform duration-300 flex items-center justify-center overflow-auto ${
            zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setZoomed((z) => !z)}
        >
          <Image
            src={images[index]}
            alt={`${alt} - ${index + 1}`}
            fill
            sizes="100vw"
            className={`select-none transition-transform duration-300 ${
              zoomed ? "object-none scale-150" : "object-contain"
            }`}
            priority
          />
        </div>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
            aria-label="Poprzednie"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
            aria-label="Następne"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
          aria-label="Zamknij"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Counter + zoom hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs">
            {index + 1} / {images.length} &nbsp;·&nbsp; kliknij zdjęcie aby {zoomed ? "zmniejszyć" : "powiększyć"}
          </span>
          {images.length > 1 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setZoomed(false); setIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === index ? "bg-cream w-4" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
