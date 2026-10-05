export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="border-t border-neutral-200 bg-white py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[28%_36%_36%] lg:gap-0">
        {/* HEADING */}
        <div className="lg:pr-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[54px] leading-[0.9] font-medium tracking-[-0.03em] md:text-[66px]">
            Who
            <br />
            We Are
          </h2>

          <div className="mt-6 h-[2px] w-10 bg-[#e69a2d]" />
        </div>

        {/* COPY 1 */}
        <div className="lg:border-r lg:border-[#e69a2d]/50 lg:px-10">
          <p className="max-w-[360px] text-[16px] leading-7 text-neutral-700">
            Telling a story is not enough. Prana Pictures exists to give
            life—prana—to cinematic art and help independent filmmakers and
            artists bring their work to audiences around the world.
          </p>
        </div>

        {/* COPY 2 */}
        <div className="lg:px-10">
          <p className="max-w-[360px] text-[16px] leading-7 text-neutral-700">
            We connect distinctive content with audiences in South Asia and
            across the globe through curation, outreach and meaningful
            storytelling that resonates.
          </p>
        </div>
      </div>
    </section>
  );
}