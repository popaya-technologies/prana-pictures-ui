"use client";

import Image from "next/image";
import { useState } from "react";

import type { Film, FilmMedia } from "@/data/films";

type Props = {
  film: Film;
};

type Tab = "stills" | "bts" | "events";

const tabs: { label: string; value: Tab }[] = [
  { label: "Stills", value: "stills" },
  { label: "BTS", value: "bts" },
  { label: "Events", value: "events" },
];

export default function FilmGallery({ film }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("stills");

  const hasGalleryMedia = Object.values(film.gallery).some(
    (items) => items.length > 0,
  );

  if (!hasGalleryMedia) {
    return null;
  }

  const media = film.gallery[activeTab];

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* HEADING */}
        <div className="mb-7">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] leading-none font-medium md:text-[44px]">
            Gallery
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        {/* TABS */}
        <div
          className="mb-8 flex gap-8 overflow-x-auto border-b border-neutral-200"
          role="tablist"
          aria-label={`${film.title} gallery`}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                id={`gallery-tab-${tab.value}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`gallery-panel-${tab.value}`}
                onClick={() => setActiveTab(tab.value)}
                className={`shrink-0 border-b-2 pb-4 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "border-[#e69a2d] text-[#d88b21]"
                    : "border-transparent text-neutral-600 hover:text-[#e69a2d]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MEDIA PANEL */}
        <div
          id={`gallery-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`gallery-tab-${activeTab}`}
          className="overflow-hidden"
        >
          {media.length > 0 ? (
            activeTab === "stills" && media.length >= 5 ? (
              <div
                key={activeTab}
                className="grid animate-[galleryFade_350ms_ease-out] grid-cols-1 gap-3 overflow-hidden lg:aspect-[3/1] lg:grid-cols-2"
              >
                <MediaCard
                  item={media[0]}
                  className="aspect-[1.5/1] lg:aspect-auto"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  priority
                />
                <div className="grid grid-cols-2 gap-3 lg:grid-rows-2">
                  {media.slice(1, 5).map((item, index) => (
                    <MediaCard
                      key={`stills-${index}-${item.src}`}
                      item={item}
                      className="aspect-[1.5/1] lg:aspect-auto"
                      sizes="(max-width: 1023px) 50vw, 25vw"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div
                key={activeTab}
                className="grid animate-[galleryFade_350ms_ease-out] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3"
              >
                {media.map((item, index) => (
                  <MediaCard
                    key={`${activeTab}-${index}-${item.src}`}
                    item={item}
                    className="aspect-video"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    priority={index === 0}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="py-14 text-center text-sm text-neutral-500">
              No media available yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MediaCard({
  item,
  className,
  sizes,
  priority = false,
}: {
  item: FilmMedia;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  if (item.type === "video") {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <video
          controls
          preload="metadata"
          poster={item.thumbnail}
          aria-label={item.alt ?? "Film gallery video"}
          className="h-full w-full object-cover"
        >
          <source src={item.src} type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className={`group relative overflow-hidden bg-neutral-100 ${className}`}>
      <Image
        src={item.src}
        alt={item.alt ?? "Film gallery image"}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
      />
    </div>
  );
}
