import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { films } from "@/data/films";

export const metadata: Metadata = {
  title: "Watch Our Work | Prana Pictures",
  description: "Watch trailers from Prana Pictures.",
};

export default function WatchPage() {
  const filmsWithTrailers = films.filter((film) => film.trailerUrl);

  return (
    <>
      <Header />

      <main>
        <section className="bg-[#f4f1ea] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#b97920]">
              Prana Pictures
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.95] text-neutral-950 md:text-7xl">
              Watch our work
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
              Explore the stories, characters and worlds behind our films through
              their official trailers.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-x-8 gap-y-12 md:grid-cols-2">
            {filmsWithTrailers.map((film) => (
              <a
                key={film.slug}
                href={film.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Watch the ${film.title} trailer`}
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <Image
                    src={film.heroImage}
                    alt={`${film.title} trailer`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d99a2b] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play size={23} className="ml-1" fill="currentColor" />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-5 border-b border-neutral-200 pb-5">
                  <div>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-none text-neutral-950 md:text-4xl">
                      {film.title}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500">
                      {film.year} · {film.type}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-[#b97920]">
                    Watch trailer
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
