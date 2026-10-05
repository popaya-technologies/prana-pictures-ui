export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-[#191919] py-12 text-white md:py-14 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#e69a2d]/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#e69a2d]/10"
      />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[34%_66%] lg:items-center lg:gap-0">
          <div className="lg:pr-14">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[44px] leading-none font-medium md:text-[50px] lg:text-[56px]">
              Our Vision
            </h2>

            <div className="mt-5 h-[2px] w-10 bg-[#e69a2d]" />
          </div>

          <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:py-2 lg:pl-14">
            <p className="max-w-[780px] font-[family-name:var(--font-cormorant)] text-[30px] leading-[1.12] font-medium text-white md:text-[38px] lg:text-[46px]">
              Empowering independent filmmakers to bring bold stories to life
              for South Asian and global audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
