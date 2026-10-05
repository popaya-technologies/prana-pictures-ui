import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-0">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 md:px-8 lg:min-h-[440px] lg:grid-cols-[32%_68%] lg:items-center lg:gap-0 lg:px-0">
        <div className="py-4 lg:px-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[48px] leading-[0.96] font-medium md:text-[62px]">
            News from
            <br />
            the journey.
          </h1>
          <div className="mt-6 h-[2px] w-8 bg-[#e69a2d]" />
          <p className="mt-6 max-w-[310px] text-[15px] leading-7 text-neutral-600 md:text-base">
            Festival selections, awards and moments from our films.
          </p>
        </div>

        <div className="relative min-h-[260px] overflow-hidden md:min-h-[360px] lg:h-[390px]">
          <Image
            src="/images/filmography/bobby/events/event-1.jpg"
            alt="The Bobby team at a screening event"
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="(max-width: 1024px) 100vw, 68vw"
          />
        </div>
      </div>
    </section>
  );
}