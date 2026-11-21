import Image from "next/image";

import FilmImagePlaceholder from "@/components/films/FilmImagePlaceholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Film } from "@/data/films";

type FeaturedFilmProps = {
  film: Film;
};

export default function FeaturedFilm({ film }: FeaturedFilmProps) {
  const isRemoteImage = Boolean(
    film.heroImage?.startsWith("https://s3.pranapictures.com/"),
  );

  return (
    <section className="bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid overflow-hidden border border-neutral-200 bg-white lg:grid-cols-[62%_38%]">
          <div className="relative min-h-[360px] md:min-h-[460px]">
            {film.heroImage ? (
              <Image
                src={film.heroImage}
                alt={`${film.title} film still`}
                fill
                unoptimized={isRemoteImage}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
            ) : (
              <FilmImagePlaceholder title={film.title} />
            )}
          </div>

          <div className="flex items-center px-7 py-10 md:px-10 lg:px-12">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[46px] leading-none font-medium uppercase md:text-[56px]">
                {film.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600">
                {film.year && <span>{film.year}</span>}
                {film.year && film.type && <span>•</span>}
                {film.type && <span>{film.type}</span>}
                {film.type && film.duration && <span>•</span>}
                {film.duration && <span>{film.duration}</span>}
              </div>

              <div className="mt-5 h-[2px] w-8 bg-[#e69a2d]" />

              <p className="mt-6 max-w-[340px] text-[15px] leading-7 text-neutral-600">
                {film.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/filmography/${film.slug}`}
                  className="group inline-flex min-h-[52px] items-center gap-3 bg-[#e69a2d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#d88b21]"
                >
                  View film
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {film.trailerUrl && (
                  <a
                    href={film.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[52px] items-center gap-3 px-2 text-sm font-medium text-neutral-800"
                  >
                    Watch trailer
                    <ArrowRight
                      size={18}
                      className="text-[#e69a2d] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
