export type FilmMedia = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt?: string;
};

export type FilmGallery = {
  stills: FilmMedia[];
  bts: FilmMedia[];
  events: FilmMedia[];
};

export type Film = {
  slug: string;
  title: string;
  year: string;
  type: string;
  duration: string;

  heroImage: string;

  tagline: string;
  synopsis: string;

  director: string;
  writer: string;
  music: string;
  producers: string;
  language: string;
  basedOn?: string;

  cast?: string;

  imdbUrl?: string;
  trailerUrl?: string;

  gallery: FilmGallery;
};

export const films: Film[] = [
  {
    slug: "bobby",
    title: "Bobby",
    year: "2022",
    type: "Short / Drama",
    duration: "21 min",

    heroImage: "/images/filmography/bobby/hero.jpg",

    tagline: "Love makes room.",

    synopsis:
      "Bobby is a high-functioning autistic individual whose struggles are compounded by social pressures. His parents confront the stigma surrounding his situation and learn how love, patience and understanding can create the conditions for him to succeed.",

    director: "Amir Jaffer",
    writer: "Puneet",
    music: "Aalap Desai",
    producers: "Puneet, Ajit Mukundan",
    language: "English",
    basedOn: "True events",

    cast:
      "Puneet, Sareeka, Amogh Karwar, Viji Nathan, David Francis Perry, Jenina Moreno, Liz Ho, Hilary Davidson, Geeta Rai, Sidhant Lochan, Aditi Honawar",

    imdbUrl: "https://www.imdb.com/title/tt14235988/",
    
    trailerUrl: "https://vimeo.com/735322509",

    gallery: {
      stills: [
        {
          type: "image",
          src: "/images/filmography/bobby/stills/still-1.jpg",
          alt: "Bobby film still 1",
        },
        {
          type: "image",
          src: "/images/filmography/bobby/stills/still-2.jpg",
          alt: "Bobby film still 2",
        },
        {
          type: "image",
          src: "/images/filmography/bobby/stills/still-3.jpg",
          alt: "Bobby film still 3",
        },
        {
          type: "image",
          src: "/images/filmography/bobby/stills/still-4.jpg",
          alt: "Bobby film still 4",
        },
        {
          type: "image",
          src: "/images/filmography/bobby/stills/still-5.jpg",
          alt: "Bobby film still 5",
        },
      ],

      bts: [
        {
          type: "image",
          src: "/images/filmography/bobby/bts/bts-1.jpg",
          alt: "Bobby behind the scenes 1",
        },
        {
          type: "video",
          src: "/videos/bobby/bts-1.mp4",
          thumbnail: "/images/filmography/bobby/bts/bts-video-thumb.jpg",
          alt: "Bobby behind the scenes video",
        },
      ],

      events: [
        {
          type: "image",
          src: "/images/filmography/bobby/events/event-1.jpg",
          alt: "Bobby event 1",
        },
        {
          type: "video",
          src: "/videos/bobby/event-1.mp4",
          thumbnail: "/images/filmography/bobby/events/event-video-thumb.jpg",
          alt: "Bobby event video",
        },
      ],
    },
  },

  {
    slug: "choices",
    title: "Choices",
    year: "2020",
    type: "Short / Drama",
    duration: "20 min",

    heroImage: "/images/filmography/choices/hero.jpg",

    tagline: "Every choice leaves a mark.",

    synopsis:
      "A story about relationships, identity and the consequences that follow the decisions we make.",

    director: "",
    writer: "",
    music: "",
    producers: "",
    language: "English",

    imdbUrl: "https://www.imdb.com/title/tt10729444/",

    trailerUrl: "https://vimeo.com/505538817",

    gallery: {
      stills: [
        {
          type: "image",
          src: "/images/filmography/choices/stills/still-1.jpg",
          alt: "Choices film still 1",
        },
        {
          type: "image",
          src: "/images/filmography/choices/stills/still-2.jpg",
          alt: "Choices film still 2",
        },
        {
          type: "image",
          src: "/images/filmography/choices/stills/still-3.jpg",
          alt: "Choices film still 3",
        },
        {
          type: "image",
          src: "/images/filmography/choices/stills/still-4.jpg",
          alt: "Choices film still 4",
        },
        {
          type: "image",
          src: "/images/filmography/choices/stills/still-5.jpg",
          alt: "Choices film still 5",
        },
      ],

      bts: [
        {
          type: "image",
          src: "/images/filmography/choices/bts/bts-1.jpg",
          alt: "Choices behind the scenes",
        },
      ],

      events: [
        {
          type: "image",
          src: "/images/filmography/choices/events/event-1.jpg",
          alt: "Choices event",
        },
      ],
    },
  },

  {
    slug: "arrangement",
    title: "Arrangement",
    year: "2019",
    type: "Short / Drama",
    duration: "24 min",

    heroImage: "/images/filmography/arrangement/hero.jpg",

    tagline: "Boundaries are tested.",

    synopsis:
      "A happily married Indian American couple decide to open their marriage. As they enter previously uncharted waters, they encounter unexpected consequences.",

    director: "Amir Jaffer",
    writer: "Amir Jaffer",
    music: "Aalap Desai",
    producers: "Ajit Mukundan",
    language: "English",

    cast:
      "Puneet, Sareeka, Michael Placencia, Silmara Volpi",

    imdbUrl: "https://www.imdb.com/title/tt9581596/",

    trailerUrl: "https://vimeo.com/337624807",

    gallery: {
      stills: [
        {
          type: "image",
          src: "/images/filmography/arrangement/stills/still-1.jpg",
          alt: "Arrangement film still 1",
        },
        {
          type: "image",
          src: "/images/filmography/arrangement/stills/still-2.jpg",
          alt: "Arrangement film still 2",
        },
        {
          type: "image",
          src: "/images/filmography/arrangement/stills/still-3.jpg",
          alt: "Arrangement film still 3",
        },
        {
          type: "image",
          src: "/images/filmography/arrangement/stills/still-4.jpg",
          alt: "Arrangement film still 4",
        },
        {
          type: "image",
          src: "/images/filmography/arrangement/stills/still-5.jpg",
          alt: "Arrangement film still 5",
        },
      ],

      bts: [
        {
          type: "image",
          src: "/images/filmography/arrangement/bts/bts-1.jpg",
          alt: "Arrangement behind the scenes",
        },
      ],

      events: [
        {
          type: "image",
          src: "/images/filmography/arrangement/events/event-1.jpg",
          alt: "Arrangement event",
        },
      ],
    },
  },
];

export function getFilmBySlug(slug: string) {
  return films.find((film) => film.slug === slug);
}
