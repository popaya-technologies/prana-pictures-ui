import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const films = [
  {
    title: "Bobby",
    year: "2022",
    type: "Short, Drama",
    duration: "21 min",
    image: "/images/posters/bobby.jpg",
    href: "/filmography/bobby",
  },
  {
    title: "Choices",
    year: "2020",
    type: "Short, Drama",
    duration: "20 min",
    image: "/images/posters/choices.jpg",
    href: "/filmography/choices",
  },
  {
    title: "Arrangement",
    year: "2019",
    type: "Short, Drama",
    duration: "24 min",
    image: "/images/posters/arrangement.png",
    href: "/filmography/arrangement",
  },
];

export default function SelectedFilms() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
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

        <div className="grid grid-cols-1 justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {films.map((film) => (
            <Link
              key={film.title}
              href={film.href}
              className="group block w-full max-w-[380px] overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] lg:max-w-none"
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
                <Image
                  src={film.image}
                  alt={`${film.title} official poster`}
                  fill
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>

              <div className="flex items-center justify-between gap-5 px-5 py-5">
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[28px] leading-none font-medium uppercase md:text-[32px]">
                    {film.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[12px] text-neutral-600">
                    <span>{film.year}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{film.type}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{film.duration}</span>
                  </div>
                </div>

                <ArrowRight
                  size={22}
                  className="shrink-0 text-[#e69a2d] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>

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
