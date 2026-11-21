import {
  defaultPageImages,
  type PageImages,
  type SiteImage,
} from "@/data/page-images";

type ApiImage = {
  url: string;
  alt?: string;
  focus?: "top" | "center" | "bottom";
} | null;

type PageImagesResponse = {
  success: boolean;
  data?: {
    home?: { heroSlides?: ApiImage[]; about?: ApiImage };
    about?: Record<"heroMain" | "heroLeft" | "heroRight" | "cta", ApiImage>;
    contact?: Record<"hero" | "story", ApiImage>;
  };
};

const focusClasses = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
} as const;

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000"
  ).replace(/\/+$/, "");
}

/** Uploaded image if there is one, otherwise the website's default. */
function resolve(custom: ApiImage | undefined, fallback: SiteImage): SiteImage {
  if (!custom?.url) {
    return fallback;
  }

  return {
    src: custom.url,
    alt: custom.alt?.trim() || "A still from a Prana Pictures film",
    className: focusClasses[custom.focus ?? "center"] ?? "object-center",
  };
}

/**
 * Images for the Home, About and Contact pages, as set under "Page images"
 * in the admin panel. Never throws: if the API is unavailable the website's
 * default images are used.
 */
export async function getPageImages(): Promise<PageImages> {
  const defaults = defaultPageImages;

  try {
    const response = await fetch(`${getApiBaseUrl()}/api/v1/page-images`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Unable to fetch page images (${response.status})`);
    }

    const result = (await response.json()) as PageImagesResponse;
    const data = result.success ? result.data : undefined;

    const customSlides = (data?.home?.heroSlides ?? []).filter(
      (slide): slide is NonNullable<ApiImage> => Boolean(slide?.url),
    );

    return {
      home: {
        heroSlides:
          customSlides.length > 0
            ? customSlides.map((slide) => resolve(slide, defaults.home.heroSlides[0]))
            : defaults.home.heroSlides,
        about: resolve(data?.home?.about, defaults.home.about),
      },
      about: {
        heroMain: resolve(data?.about?.heroMain, defaults.about.heroMain),
        heroLeft: resolve(data?.about?.heroLeft, defaults.about.heroLeft),
        heroRight: resolve(data?.about?.heroRight, defaults.about.heroRight),
        cta: resolve(data?.about?.cta, defaults.about.cta),
      },
      contact: {
        hero: resolve(data?.contact?.hero, defaults.contact.hero),
        story: resolve(data?.contact?.story, defaults.contact.story),
      },
    };
  } catch (error) {
    // Not fatal: the page still renders with the default images. A warning
    // (not an error) so Next.js dev mode doesn't show the red error overlay.
    console.warn(
      "Page images unavailable, using the website's default images:",
      error instanceof Error ? error.message : error,
    );
    return defaults;
  }
}
