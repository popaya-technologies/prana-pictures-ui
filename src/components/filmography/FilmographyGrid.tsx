"use client";

import Image from "next/image";

import FilmImagePlaceholder from "@/components/films/FilmImagePlaceholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { PublicFilm } from "@/lib/api/films";

type Filter = "all" | "feature" | "short" | "series";

type FilmCard = {
  title: string;
  year: string;
  type: string;
  duration: string;
  // null = nothing uploaded in the admin panel (a placeholder is shown).
  image: string | null;
  imageAlt: string;
  href: string;
  categories: Filter[];
};

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Feature", value: "feature" },
  { label: "Short", value: "short" },
  { label: "Series", value: "series" },
];

type FilmographyGridProps = {
  films: PublicFilm[];
  loadFailed?: boolean;
};

function getCategories(genres: string[]): Filter[] {
  const categories: Filter[] = [];
  const normalizedGenres = genres.map((genre) =>
    genre.toLowerCase(),
  );

  if (normalizedGenres.some((genre) => genre.includes("feature"))) {
    categories.push("feature");
  }

  if (normalizedGenres.some((genre) => genre.includes("short"))) {
    categories.push("short");
  }

  if (normalizedGenres.some((genre) => genre.includes("series"))) {
    categories.push("series");
  }

  return categories;
}

function createFilmCard(film: PublicFilm): FilmCard {
  const releaseDate = new Date(film.releaseDate);
  const year = Number.isNaN(releaseDate.getTime())
    ? ""
    : String(releaseDate.getUTCFullYear());

  return {
    title: film.title,
    year,
    type: film.genres.join(" / "),
    duration: `${film.runtimeMinutes} min`,
    // Landscape cards: hero image first, then the poster.
    image: film.heroImage?.url ?? film.poster?.url ?? null,
    imageAlt:
      (film.heroImage?.url ? film.heroImage.alt : film.poster?.alt) ||
      `${film.title} film still`,
    href: `/filmography/${film.slug}`,
    categories: getCategories(film.genres),
  };
}

export default function FilmographyGrid({
  films,
  loadFailed = false,
}: FilmographyGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [animationKey, setAnimationKey] = useState(0);

  const filmCards = useMemo(
    () => films.map(createFilmCard),
    [films],
  );

  const filteredFilms = useMemo(() => {
    if (activeFilter === "all") {
      return filmCards;
    }

    return filmCards.filter((film) =>
      film.categories.includes(activeFilter)
    );
  }, [activeFilter, filmCards]);

  function handleFilterChange(filter: Filter) {
    setActiveFilter(filter);
    setAnimationKey((prev) => prev + 1);
  }

  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* FILTERS */}
        <div
          className="mb-8 flex flex-wrap gap-8 border-b border-neutral-200 text-sm"
          role="tablist"
          aria-label="Filmography filters"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleFilterChange(filter.value)}
                className={`relative border-b-2 pb-4 font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#e69a2d] text-[#d88b21]"
                    : "border-transparent text-neutral-700 hover:text-[#e69a2d]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div
          key={animationKey}
          className="grid animate-[filmFade_450ms_ease-out] grid-cols-1 gap-7 md:grid-cols-2"
        >
          {filteredFilms.map((film, index) => (
            <Link
              key={film.title}
              href={film.href}
              className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              <div className="relative aspect-[16/8.5] overflow-hidden">
                {film.image ? (
                  <Image
                    src={film.image}
                    alt={film.imageAlt}
                    fill
                    unoptimized={film.image.startsWith(
                      "https://s3.pranapictures.com/",
                    )}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <FilmImagePlaceholder title={film.title} />
                )}

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
              </div>

              <div className="flex items-center justify-between gap-5 px-5 py-4">
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[28px] leading-none font-medium uppercase md:text-[32px]">
                    {film.title}
                  </h3>

                  {(film.year || film.type || film.duration) && (
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[12px] text-neutral-600">
                      {film.year && <span>{film.year}</span>}

                      {film.year && film.type && <span>•</span>}

                      {film.type && <span>{film.type}</span>}

                      {film.type && film.duration && <span>•</span>}

                      {film.duration && <span>{film.duration}</span>}
                    </div>
                  )}
                </div>

                <ArrowRight
                  size={23}
                  className="shrink-0 text-[#e69a2d] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>

        {loadFailed ? (
          <div className="py-16 text-center text-sm text-neutral-500">
            Films could not be loaded. Please try again shortly.
          </div>
        ) : filteredFilms.length === 0 && (
          <div className="py-16 text-center text-sm text-neutral-500">
            No films found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
