import { ArrowRight, Play } from "lucide-react";

import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

export default function FilmWatch({ film }: Props) {
  const hasWatchContent = film.trailerUrl || film.imdbUrl;

  if (!hasWatchContent) {
    return null;
  }

  return (
    <section className="bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="border border-neutral-200 bg-[#f7f5f0] px-6 py-10 md:px-10 md:py-12 lg:px-12">
          {/* HEADING */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] leading-none font-medium md:text-[46px]">
              Watch {film.title}
            </h2>

            <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* TRAILER */}
            {film.trailerUrl && (
              <a
                href={film.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#d99a2b] px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#c48720]"
              >
                <Play size={16} />

                Watch trailer
              </a>
            )}

            {/* IMDB */}
            {film.imdbUrl && (
              <a
                href={film.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-neutral-400 px-7 text-sm font-medium text-neutral-800 transition-colors duration-300 hover:bg-white"
              >
                IMDb

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
