"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  alt: string;
  onClose: () => void;
}

const ANIM_MS = 280;

export default function Lightbox({ images, initialIndex, alt, onClose }: LightboxProps) {
  const [curr, setCurr] = useState(initialIndex);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [zoomed, setZoomed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useCallback((newIndex: number, direction: "next" | "prev") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setZoomed(false);
    setDir(direction);
    setPrev(curr);
    setCurr(newIndex);
    timerRef.current = setTimeout(() => setPrev(null), ANIM_MS);
  }, [curr]);

  const prev_ = useCallback(() => {
    navigate((curr - 1 + images.length) % images.length, "prev");
  }, [curr, images.length, navigate]);

  const next_ = useCallback(() => {
    navigate((curr + 1) % images.length, "next");
  }, [curr, images.length, navigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev_();
      if (e.key === "ArrowRight") next_();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onClose, prev_, next_]);

  const animStyle = (role: "in" | "out") => ({
    animation: `lb${role === "in" ? "In" : "Out"}${dir === "next" ? "Next" : "Prev"} ${ANIM_MS}ms cubic-bezier(0.25,0.46,0.45,0.94) both`,
  });

  const content = (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outgoing image */}
        {prev !== null && (
          <div
            key={`out-${prev}`}
            style={animStyle("out")}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Image
              src={images[prev]}
              alt={`${alt} - ${prev + 1}`}
              fill
              sizes="100vw"
              className="object-contain select-none"
            />
          </div>
        )}

        {/* Incoming image */}
        <div
          key={`in-${curr}`}
          style={animStyle("in")}
          className={`absolute inset-0 flex items-center justify-center ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          onClick={() => setZoomed((z) => !z)}
        >
          <Image
            src={images[curr]}
            alt={`${alt} - ${curr + 1}`}
            fill
            sizes="100vw"
            className={`select-none transition-transform duration-300 ${zoomed ? "object-none scale-150" : "object-contain"}`}
            priority
          />
        </div>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={prev_}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/30 shadow-lg z-10"
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
            onClick={next_}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/30 shadow-lg z-10"
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
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/30 shadow-lg z-10"
          aria-label="Zamknij"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Counter + zoom hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/50 text-xs">
            {curr + 1} / {images.length} &nbsp;·&nbsp; kliknij zdjęcie aby {zoomed ? "zmniejszyć" : "powiększyć"}
          </span>
          {images.length > 1 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i, i > curr ? "next" : "prev")}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === curr ? "bg-cream w-4" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
