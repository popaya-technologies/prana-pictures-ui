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

function mapGallery(apiGallery: ApiFilmGallery | undefined): FilmGallery {
  return {
    stills: (apiGallery?.stills ?? []).map(mapMedia),
    bts: (apiGallery?.bts ?? []).map(mapMedia),
    events: (apiGallery?.events ?? []).map(mapMedia),
  };
}

/**
 * Turns a film from the API into what the pages display. Uses only what is
 * saved in the admin panel: nothing is filled in from the built-in copy in
 * src/data/films.ts (that copy is only used when the API is unreachable).
 */
export function mapPublicFilmToDisplayFilm(film: PublicFilm): Film {
  const releaseDate = new Date(film.releaseDate);
  const year = Number.isNaN(releaseDate.getTime())
    ? ""
    : String(releaseDate.getUTCFullYear());

  return {
    slug: film.slug,
    title: film.title,
    year,
    type: film.genres.join(" / "),
    duration: `${film.runtimeMinutes} min`,
    // Landscape spots: hero image first, then the poster.
    heroImage: film.heroImage?.url ?? film.poster?.url ?? null,
    tagline: film.shortDescription || film.title,
    synopsis: film.shortDescription ?? "",
    synopsisHtml: film.descriptionHtml,
    director: film.directedBy ?? "",
    writer: film.writtenBy ?? "",
    music: film.musicBy ?? "",
    producers: film.producedBy ?? "",
    language: film.language ?? "",
    basedOn: film.basedOn || undefined,
    cast: film.cast || undefined,
    imdbUrl: film.imdbUrl || undefined,
    letterboxdUrl: film.letterboxdUrl || undefined,
    trailerUrl: film.trailerUrl || undefined,
    gallery: mapGallery(film.gallery),
  };
}
