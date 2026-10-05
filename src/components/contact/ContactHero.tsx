import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-white">
      <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* LEFT */}
        <div className="flex items-center justify-center border-r border-neutral-200">
          <div className="w-full max-w-[520px] px-6 py-14 md:px-10 lg:px-12">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[54px] leading-[0.95] font-medium tracking-[-0.03em] md:text-[68px]">
              Let&apos;s start
              <br />
              a conversation.
            </h1>

            <div className="mt-7 h-[2px] w-8 bg-[#e69a2d]" />

            <p className="mt-7 max-w-[390px] text-[16px] leading-7 text-neutral-600">
              Reach out to explore how we can partner, engage, learn and grow
              together.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
          <Image
            src="/images/home/hero.jpg"
            alt="A still from Bobby"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}