import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const films = [
  {
    title: "Bobby",
    year: "2022",
    type: "Short, Drama",
    duration: "21 min",
    image: "/images/home/bobby.jpg",
    imageClassName: "scale-y-[1.35] group-hover:scale-y-[1.4]",
    href: "/filmography/bobby",
  },
  {
    title: "Choices",
    year: "2020",
    type: "Short, Drama",
    duration: "20 min",
    image: "/images/home/choices.jpg",
    imageClassName: "group-hover:scale-105",
    href: "/filmography/choices",
  },
  {
    title: "Arrangement",
    year: "2019",
    type: "Short, Drama",
    duration: "24 min",
    image: "/images/home/arrangement.jpg",
    imageClassName: "group-hover:scale-105",
    href: "/filmography/arrangement",
  },
];

export default function SelectedFilms() {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* HEADING */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] leading-none font-medium md:text-[46px]">
              Selected films
            </h2>

            <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
          </div>

          <Link
            href="/filmography"
            className="group hidden items-center gap-2 text-sm text-neutral-700 transition-colors duration-300 hover:text-[#e69a2d] sm:flex"
          >
            View all films

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* FILM GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {films.map((film) => (
            <Link
              key={film.title}
              href={film.href}
              className="group relative block overflow-hidden bg-neutral-900"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={film.image}
                  alt={`${film.title} film still`}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${film.imageClassName}`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[34px] leading-none font-medium tracking-[0.02em] text-white uppercase md:text-[38px]">
                    {film.title}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-white/80 md:text-[13px]">
                      <span>{film.year}</span>

                      <span className="text-white/40">•</span>

                      <span>{film.type}</span>

                      <span className="text-white/40">•</span>

                      <span>{film.duration}</span>
                    </div>

                    <ArrowRight
                      size={22}
                      className="shrink-0 text-[#e69a2d] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* MOBILE VIEW ALL */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/filmography"
            className="group inline-flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-[#e69a2d]"
          >
            View all films

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}