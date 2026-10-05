import Image from "next/image";

export default function FilmographyHero() {
  return (
    <section className="bg-white pt-8 pb-12 md:pt-8 md:pb-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[32%_68%] lg:items-center">
        {/* LEFT */}
        <div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[56px] leading-[0.95] font-medium tracking-[-0.03em] md:text-[68px]">
            Stories that
            <br />
            look closer.
          </h1>

          <div className="mt-7 h-[2px] w-8 bg-[#e69a2d]" />

          <p className="mt-7 max-w-[310px] text-[16px] leading-7 text-neutral-600">
            Character-driven stories about identity, relationships and the
            choices that shape us.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[320px] md:min-h-[420px] lg:min-h-[460px]">
          <div className="absolute inset-3 overflow-hidden">
            <Image
              src="/images/filmography/hero-cropped.jpg"
              alt="Prana Pictures filmography"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 68vw"
            />
          </div>

          {/* CORNER ACCENTS */}
          <span className="absolute top-0 right-0 h-12 w-[2px] bg-[#e69a2d]" />
          <span className="absolute top-0 right-0 h-[2px] w-12 bg-[#e69a2d]" />

          <span className="absolute bottom-0 left-0 h-12 w-[2px] bg-[#e69a2d]" />
          <span className="absolute bottom-0 left-0 h-[2px] w-12 bg-[#e69a2d]" />
        </div>
      </div>
    </section>
  );
}