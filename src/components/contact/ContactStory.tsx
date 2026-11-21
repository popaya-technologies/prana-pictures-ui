import Image from "next/image";

import { defaultPageImages, type SiteImage } from "@/data/page-images";

type ContactStoryProps = {
  // From the admin panel (Page images), or the website's default.
  image?: SiteImage;
};

export default function ContactStory({
  image = defaultPageImages.contact.story,
}: ContactStoryProps) {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">
        {/* COPY */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[500px] px-6 py-14 md:px-10 lg:px-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[42px] leading-none font-medium md:text-[50px]">
              Stories connect us.
            </h2>

            <div className="mt-5 h-[2px] w-8 bg-[#e69a2d]" />

            <p className="mt-6 max-w-[330px] text-[15px] leading-7 text-neutral-600">
              Different perspectives. Shared humanity.
              <br />
              Meaningful cinema.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative min-h-[340px] overflow-hidden md:min-h-[420px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover ${image.className ?? ""}`}
            sizes="(max-width: 1024px) 100vw, 62vw"
          />
        </div>
      </div>
    </section>
  );
}