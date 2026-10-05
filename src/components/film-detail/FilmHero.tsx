import Image from "next/image";
import { Play } from "lucide-react";

import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

export default function FilmHero({ film }: Props) {
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

          {film.trailerUrl && (
            <a
              href={film.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e69a2d]">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="text-sm font-medium">
                Watch trailer
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}