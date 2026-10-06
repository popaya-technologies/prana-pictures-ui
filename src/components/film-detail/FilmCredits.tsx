import type { Film } from "@/data/films";

type Props = {
  film: Film;
};

export default function FilmCredits({ film }: Props) {
  const castCredit = ["Cast", film.cast];
  const hasGalleryMedia = Object.values(film.gallery).some(
    (items) => items.length > 0,
  );

  const creditColumns = [
    [
      ["Director", film.director],
      ["Writer", film.writer],
      ["Music", film.music],
      ...(film.basedOn ? [castCredit] : []),
    ],
    [
      ["Producers", film.producers],
      ["Language", film.language],
      ["Based on", film.basedOn],
      ...(!film.basedOn ? [castCredit] : []),
    ],
  ].map((column) => column.filter(([, value]) => value));

  return (
    <section
      className={`bg-white pb-14 md:pb-16 ${
        hasGalleryMedia ? "" : "pt-14 md:pt-16"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mb-7">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] font-medium leading-none md:text-[44px]">
            Credits
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {creditColumns.map((credits, columnIndex) => (
            <div key={columnIndex}>
              {credits.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[100px_minmax(0,1fr)] gap-5 border-b border-neutral-200 py-4 text-sm sm:grid-cols-[110px_minmax(0,1fr)]"
                >
                  <span className="font-medium uppercase text-neutral-700">
                    {label}
                  </span>

                  <span className="min-w-0 text-neutral-600">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
