export type NewsCategory = "film" | "festival" | "award";

export type NewsStory = {
  slug: string;
  title: string;
  category: NewsCategory;
  categoryLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  quote: string;
};

export const newsStories: NewsStory[] = [
  {
    slug: "bobby-best-short-dcsaff",
    title: "BOBBY wins Best Short at DCSAFF!",
    category: "award",
    categoryLabel: "Award",
    excerpt:
      "BOBBY was named Best Short Film in the Audience Poll category at the DC South Asian Film Festival.",
    image: "/images/filmography/bobby/stills/still-1.jpg",
    imageAlt: "A still from Bobby",
    quote: "Audience Poll — Best Short Film",
  },
  {
    slug: "bobby-ends-2021-high-note",
    title: "Bobby ends 2021 on a high note",
    category: "film",
    categoryLabel: "Film",
    excerpt: "A year of screenings brought Bobby to new audiences and conversations.",
    image: "/images/filmography/bobby/stills/still-2.jpg",
    imageAlt: "A still from Bobby",
    quote: "Independent stories find their audience one screening at a time.",
  },
  {
    slug: "bobby-wins-hearts-in-kolkata",
    title: "Bobby wins hearts in Kolkata",
    category: "festival",
    categoryLabel: "Festival",
    excerpt: "A story about family and understanding meets audiences in Kolkata.",
    image: "/images/filmography/choices/stills/still-2.jpg",
    imageAlt: "A film still from Choices",
    quote: "Different perspectives. Shared humanity.",
  },
  {
    slug: "puneet-best-screenplay",
    title: "Puneet wins Best Screenplay",
    category: "award",
    categoryLabel: "Award",
    excerpt: "A recognition of the writing behind a deeply human story.",
    image: "/images/filmography/arrangement/bts/bts-1.jpg",
    imageAlt: "A behind-the-scenes still from Arrangement",
    quote: "Every memorable film begins with a story worth telling.",
  },
  {
    slug: "10th-msiff-features-bobby",
    title: "10th MSIFF features Bobby",
    category: "festival",
    categoryLabel: "Festival",
    excerpt: "Bobby joins a festival program celebrating independent cinema.",
    image: "/images/filmography/bobby/events/event-1.jpg",
    imageAlt: "The Bobby team at a screening event",
    quote: "Cinema brings stories and communities together.",
  },
  {
    slug: "visaaf-21-selects-bobby",
    title: "VISAFF 21 selects Bobby",
    category: "festival",
    categoryLabel: "Festival",
    excerpt: "A festival selection brings Bobby to another audience.",
    image: "/images/filmography/bobby/stills/still-3.jpg",
    imageAlt: "A still from Bobby",
    quote: "A story travels each time someone sees themselves in it.",
  },
  {
    slug: "inside-the-making-of-bobby",
    title: "Inside the making of Bobby",
    category: "film",
    categoryLabel: "Film",
    excerpt: "A closer look at the people and moments behind the film.",
    image: "/images/filmography/bobby/bts/bts-1.jpg",
    imageAlt: "Behind the scenes of Bobby",
    quote: "The work behind the frame is part of every story.",
  },
  {
    slug: "a-kolkata-audience-finds-its-story",
    title: "A Kolkata audience finds its story",
    category: "festival",
    categoryLabel: "Festival",
    excerpt: "A screening opens space for connection, reflection and conversation.",
    image: "/images/filmography/chances.jpg",
    imageAlt: "A production still from Chances",
    quote: "Meaningful cinema keeps the conversation going.",
  },
  {
    slug: "celebrating-independent-storytellers",
    title: "Celebrating independent storytellers",
    category: "award",
    categoryLabel: "Award",
    excerpt: "Recognizing the artists who bring distinctive stories to the screen.",
    image: "/images/filmography/arrangement/stills/still-2.jpg",
    imageAlt: "A still from Arrangement",
    quote: "Independent voices make cinema richer.",
  },
];

export function getNewsStoryBySlug(slug: string) {
  return newsStories.find((story) => story.slug === slug);
}