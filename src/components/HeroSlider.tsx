"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const AUTO_MS = 5500;
const SWIPE_PX = 48;

export type HeroSlide = {
  src: string;
  alt: string;
};

export function HeroSlider({ slides }: { slides: readonly HeroSlide[] }) {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const count = slides.length;
  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, count, index]);

  if (count === 0) return null;

  const current = slides[index]!;

  return (
    <div
      className="border-line relative overflow-hidden rounded-2xl border bg-primary-deep shadow-sm"
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        pointerStartX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (pointerStartX.current == null) return;
        const delta = event.clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (Math.abs(delta) < SWIPE_PX) return;
        goTo(index + (delta < 0 ? 1 : -1));
      }}
      onPointerCancel={() => {
        pointerStartX.current = null;
      }}
    >
      <p id={labelId} className="sr-only">
        Photos of Masjid Noor
      </p>

      <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.src}
              className="relative h-full w-full shrink-0"
              aria-hidden={slideIndex !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slideIndex === 0}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="bg-surface-elevated/90 text-ink hover:bg-surface-elevated absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-sm backdrop-blur-sm"
            aria-label="Previous photo"
            onClick={() => goTo(index - 1)}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className="bg-surface-elevated/90 text-ink hover:bg-surface-elevated absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-sm backdrop-blur-sm"
            aria-label="Next photo"
            onClick={() => goTo(index + 1)}
          >
            <Chevron direction="right" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {slides.map((slide, slideIndex) => {
              const selected = slideIndex === index;
              return (
                <button
                  key={slide.src}
                  type="button"
                  className={`h-2.5 rounded-full transition-all ${
                    selected
                      ? "bg-accent w-7"
                      : "bg-surface-elevated/80 hover:bg-surface-elevated w-2.5"
                  }`}
                  aria-label={`Show photo ${slideIndex + 1} of ${count}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => goTo(slideIndex)}
                />
              );
            })}
          </div>
        </>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Photo {index + 1} of {count}: {current.alt}
      </p>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="h-5 w-5"
    >
      <path
        d={
          direction === "left"
            ? "M12.5 4.5 7 10l5.5 5.5"
            : "M7.5 4.5 13 10l-5.5 5.5"
        }
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
