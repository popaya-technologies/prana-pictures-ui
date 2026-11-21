/**
 * Images shown on the Home, About and Contact pages when nothing has been
 * uploaded for that spot in the admin panel (Page images).
 * Keep the paths and alt text in sync with prana-pictures-admin/src/lib/page-images.ts.
 */
export type SiteImage = {
  src: string;
  alt: string;
  /** Extra classes for cropping (object-position / scale). */
  className?: string;
};

export const defaultPageImages = {
  home: {
    heroSlides: [
      {
        src: "/images/home/hero.jpg",
        alt: "A scene from Bobby",
        // This file has letterbox bars; stretch to hide them.
        className: "scale-y-[1.35]",
      },
      { src: "/images/home/choices.jpg", alt: "A scene from Choices" },
      { src: "/images/home/arrangement.jpg", alt: "A scene from Arrangement" },
    ] as SiteImage[],
    about: { src: "/images/home/about.jpg", alt: "A still from Chances" } as SiteImage,
  },
  about: {
    heroMain: {
      src: "/images/about/hero-main.jpg",
      alt: "The Bobby cast at a film screening",
    } as SiteImage,
    heroLeft: {
      src: "/images/about/hero-left.jpg",
      alt: "A still from Bobby",
      className: "scale-[1.08] object-[center_35%]",
    } as SiteImage,
    heroRight: {
      src: "/images/about/hero-right.jpg",
      alt: "A still from Choices",
      className: "scale-[1.1] object-[center_40%]",
    } as SiteImage,
    cta: { src: "/images/about/cta.jpg", alt: "A still from Bobby" } as SiteImage,
  },
  contact: {
    hero: { src: "/images/home/hero.jpg", alt: "A still from Bobby" } as SiteImage,
    story: { src: "/images/contact/story.jpg", alt: "A still from Choices" } as SiteImage,
  },
};

export type PageImages = typeof defaultPageImages;
