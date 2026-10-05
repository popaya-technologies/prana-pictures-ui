import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

export default function FilmCredits({ film }: Props) {
  const credits = [
    ["Director", film.director],
    ["Writer", film.writer],
    ["Music", film.music],
    ["Producers", film.producers],
    ["Language", film.language],
    ["Based on", film.basedOn],
    ["Cast", film.cast],
  ].filter(([, value]) => value);

  return (
    <section className="bg-white pb-14 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-7">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] font-medium leading-none md:text-[44px]">
            Credits
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {credits.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[110px_1fr] gap-5 border-b border-neutral-200 py-4 text-sm"
            >
              <span className="font-medium uppercase text-neutral-700">
                {label}
              </span>

              <span className="text-neutral-600">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}