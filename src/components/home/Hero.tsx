"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/home/hero.jpg",
    alt: "A scene from Bobby",
    stretchVertically: true,
  },
  {
    src: "/images/home/choices.jpg",
    alt: "A scene from Choices",
  },
  {
    src: "/images/home/arrangement.jpg",
    alt: "A scene from Arrangement",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isPaused || prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-white">
      <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* LEFT CONTENT */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[560px] px-6 py-14 md:px-10 lg:px-12">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[58px] leading-[0.93] font-medium tracking-[-0.03em] md:text-[72px] lg:text-[78px]">
              Stories that
              <br />
              stay with you.
            </h1>

            <div className="mt-6 h-[3px] w-8 bg-[#e69a2d]" />

            <p className="mt-7 max-w-[420px] text-[16px] leading-7 text-neutral-600 md:text-[17px]">
              Across the globe from the US to India.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/filmography"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#e69a2d] px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d88b21]"
              >
                Explore our films

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[54px] items-center justify-center border border-neutral-400 px-7 text-sm font-medium transition-colors duration-300 hover:bg-neutral-100"
              >
                Our story
              </Link>
            </div>

            <p className="mt-10 text-sm text-neutral-500 lg:mt-16">
              Independent stories. Global audiences.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div
          className="relative min-h-[420px] overflow-hidden bg-neutral-900 md:min-h-[550px] lg:min-h-[620px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          aria-roledescription="carousel"
          aria-label="Featured Prana Pictures films"
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <Image
                key={slide.src}
                src={slide.src}
                alt={isActive ? slide.alt : ""}
                fill
                preload={index === 0}
                aria-hidden={!isActive}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  slide.stretchVertically ? "scale-y-[1.35]" : ""
                } ${isActive ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            );
          })}

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/35 px-4 py-3 backdrop-blur-sm">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.alt}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full border border-white transition-all duration-300 ${
                    isActive
                      ? "scale-110 bg-[#d99a2b]"
                      : "bg-white/35 hover:bg-white/75"
                  }`}
                />
              );
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            Slide {activeSlide + 1} of {heroSlides.length}:{" "}
            {heroSlides[activeSlide].alt}
          </p>
        </div>
      </div>
    </section>
  );
}
