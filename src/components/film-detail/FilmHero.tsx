"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

function getTrailerEmbedUrl(trailerUrl?: string) {
  if (!trailerUrl) {
    return null;
  }

  try {
    const url = new URL(trailerUrl);

    if (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];

      return videoId && /^\d+$/.test(videoId)
        ? `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
        : null;
    }

    if (url.hostname === "youtube.com" || url.hostname === "www.youtube.com") {
      const videoId = url.searchParams.get("v");

      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
        : null;
    }

    if (url.hostname === "youtu.be") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];

      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
        : null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function FilmHero({ film }: Props) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const trailerEmbedUrl = useMemo(
    () => getTrailerEmbedUrl(film.trailerUrl),
    [film.trailerUrl],
  );

  useEffect(() => {
    if (!isTrailerOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsTrailerOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTrailerOpen]);

  function closeTrailer() {
    setIsTrailerOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <section className="relative min-h-[620px] overflow-hidden">
      <Image
        src={film.heroImage}
        alt={`${film.title} film still`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1280px] items-end px-5 pb-14 md:px-8 md:pb-16">
        <div className="text-white">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[58px] font-medium uppercase leading-none md:text-[72px]">
            {film.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/90">
            <span>{film.year}</span>
            <span>•</span>
            <span>{film.type}</span>
            <span>•</span>
            <span>{film.duration}</span>
          </div>

          {trailerEmbedUrl && (
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsTrailerOpen(true)}
              aria-expanded={isTrailerOpen}
              className="mt-8 inline-flex items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e69a2d]">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="text-sm font-medium">
                Watch trailer
              </span>
            </button>
          )}
        </div>
      </div>

      {isTrailerOpen && trailerEmbedUrl && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={`${film.title} trailer`}
        >
          <iframe
            src={trailerEmbedUrl}
            title={`${film.title} trailer`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <button
            type="button"
            onClick={closeTrailer}
            autoFocus
            aria-label="Close trailer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#e69a2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6 md:top-6"
          >
            <X size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
