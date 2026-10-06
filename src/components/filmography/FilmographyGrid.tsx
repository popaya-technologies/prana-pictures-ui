"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

type Filter = "all" | "feature" | "short" | "series";

type Film = {
  title: string;
  year: string;
  type: string;
  duration: string;
  image: string;
  href: string;
  categories: Filter[];
};

const films: Film[] = [
  {
    title: "Bobby",
    year: "2022",
    type: "Short / Drama",
    duration: "21 min",
    image: "/images/filmography/bobby.jpg",
    href: "/filmography/bobby",
    categories: ["short"],
  },
  {
    title: "Choices",
    year: "2020",
    type: "Short / Drama",
    duration: "20 min",
    image: "/images/filmography/choices.jpg",
    href: "/filmography/choices",
    categories: ["short"],
  },
  {
    title: "Arrangement",
    year: "2019",
    type: "Short / Drama",
    duration: "24 min",
    image: "/images/filmography/arrangement.jpg",
    href: "/filmography/arrangement",
    categories: ["short"],
  },
  {
    title: "Chances",
    year: "2018",
    type: "Short / Drama",
    duration: "17 min",
    image: "/images/filmography/chances.jpg",
    href: "/filmography/chances",
    categories: ["short"],
  },
  {
    title: "Hiraeth",
    year: "2020",
    type: "Series / Drama",
    duration: "7-part mini-series",
    image: "/images/filmography/hiraeth.jpg",
    href: "/filmography/hiraeth",
    categories: ["series"],
  },
  {
    title: "Not Tonight",
    year: "2024",
    type: "Feature / Drama",
    duration: "74 min",
    image: "/images/filmography/not-tonight.jpg",
    href: "/filmography/not-tonight",
    categories: ["feature"],
  },
];

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Feature", value: "feature" },
  { label: "Short", value: "short" },
  { label: "Series", value: "series" },
];

export default function FilmographyGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [animationKey, setAnimationKey] = useState(0);

  const filteredFilms = useMemo(() => {
    if (activeFilter === "all") {
      return films;
    }

    return films.filter((film) =>
      film.categories.includes(activeFilter)
    );
  }, [activeFilter]);

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
                <Image
                  src={film.image}
                  alt={`${film.title} film still`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

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

        {filteredFilms.length === 0 && (
          <div className="py-16 text-center text-sm text-neutral-500">
            No films found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
