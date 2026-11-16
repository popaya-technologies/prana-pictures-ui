import type {
  Film,
  FilmGallery,
  FilmMedia,
} from "@/data/films";

export type ApiFilmMedia = {
  type?: "image" | "video";
  objectKey: string;
  thumbnailObjectKey?: string;
  alt?: string;
  url: string;
  thumbnailUrl?: string;
};

export type ApiFilmGallery = {
  stills: ApiFilmMedia[];
  bts: ApiFilmMedia[];
  events: ApiFilmMedia[];
};

export type PublicFilm = {
  _id: string;
  title: string;
  slug: string;
  descriptionHtml: string;
  shortDescription?: string;
  genres: string[];
  cast?: string;
  directedBy?: string;
  writtenBy?: string;
  musicBy?: string;
  producedBy?: string;
  language?: string;
  basedOn?: string;
  releaseDate: string;
  runtimeMinutes: number;
  imdbUrl?: string;
  letterboxdUrl?: string;
  trailerUrl?: string;
  poster?: ApiFilmMedia;
  heroImage?: ApiFilmMedia;
  gallery?: ApiFilmGallery;
};

type FilmsResponse = {
  success: boolean;
  message: string;
  data: PublicFilm[];
};

type FilmResponse = {
  success: boolean;
  message: string;
  data: PublicFilm;
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000"
  ).replace(/\/+$/, "");
}

export async function getPublicFilms() {
  const response = await fetch(
    `${getApiBaseUrl()}/api/v1/films`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to fetch films (${response.status})`,
    );
  }

  const result = (await response.json()) as FilmsResponse;

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("The films API returned an invalid response");
  }

  return result.data;
}

export async function getPublicFilmBySlug(slug: string) {
  const response = await fetch(
    `${getApiBaseUrl()}/api/v1/films/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Unable to fetch film ${slug} (${response.status})`,
    );
  }

  const result = (await response.json()) as FilmResponse;

  if (!result.success || !result.data) {
    throw new Error("The film API returned an invalid response");
  }

  return result.data;
}

function mapMedia(media: ApiFilmMedia): FilmMedia {
  return {
    type: media.type ?? "image",
    src: media.url,
    thumbnail: media.thumbnailUrl,
    alt: media.alt,
  };
}

function mapGallery(
  apiGallery: ApiFilmGallery | undefined,
  fallbackGallery: FilmGallery | undefined,
): FilmGallery {
  return {
    stills:
      apiGallery?.stills?.length
        ? apiGallery.stills.map(mapMedia)
        : (fallbackGallery?.stills ?? []),
    bts:
      apiGallery?.bts?.length
        ? apiGallery.bts.map(mapMedia)
        : (fallbackGallery?.bts ?? []),
    events:
      apiGallery?.events?.length
        ? apiGallery.events.map(mapMedia)
        : (fallbackGallery?.events ?? []),
  };
}

export function mapPublicFilmToDisplayFilm(
  film: PublicFilm,
  fallback?: Film,
): Film {
  const releaseDate = new Date(film.releaseDate);
  const year = Number.isNaN(releaseDate.getTime())
    ? (fallback?.year ?? "")
    : String(releaseDate.getUTCFullYear());

  return {
    slug: film.slug,
    title: film.title,
    year,
    type: film.genres.join(" / "),
    duration: `${film.runtimeMinutes} min`,
    heroImage:
      film.heroImage?.url ??
      fallback?.heroImage ??
      film.poster?.url ??
      `/images/filmography/${film.slug}.jpg`,
    tagline:
      film.shortDescription ?? fallback?.tagline ?? film.title,
    synopsis:
      fallback?.synopsis ?? film.shortDescription ?? "",
    synopsisHtml: film.descriptionHtml,
    director: film.directedBy ?? fallback?.director ?? "",
    writer: film.writtenBy ?? fallback?.writer ?? "",
    music: film.musicBy ?? fallback?.music ?? "",
    producers: film.producedBy ?? fallback?.producers ?? "",
    language: film.language ?? fallback?.language ?? "",
    basedOn: film.basedOn ?? fallback?.basedOn,
    cast: film.cast ?? fallback?.cast,
    imdbUrl: film.imdbUrl ?? fallback?.imdbUrl,
    letterboxdUrl:
      film.letterboxdUrl ?? fallback?.letterboxdUrl,
    trailerUrl: film.trailerUrl ?? fallback?.trailerUrl,
    gallery: mapGallery(film.gallery, fallback?.gallery),
  };
}
