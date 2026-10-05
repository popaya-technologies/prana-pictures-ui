import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

export default function FilmOverview({ film }: Props) {
  const details = [
    ["Director", film.director],
    ["Writer", film.writer],
    ["Music", film.music],
    ["Producers", film.producers],
    ["Language", film.language],
    ["Based on", film.basedOn],
  ].filter(([, value]) => value);

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[45%_55%]">
        {/* LEFT */}
        <div className="lg:border-r lg:border-neutral-200 lg:pr-14">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[40px] font-medium leading-none md:text-[46px]">
            {film.tagline}
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />

          <p className="mt-7 max-w-[480px] text-[15px] leading-7 text-neutral-600 md:text-[16px]">
            {film.synopsis}
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[120px_1fr] gap-5 border-b border-neutral-200 py-4 text-sm"
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