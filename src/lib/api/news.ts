import { type NewsCategory, type NewsStory } from "@/data/news";

// Shown for stories without an uploaded image (same look as the film placeholder).
export const NEWS_PLACEHOLDER_IMAGE = "/images/news/placeholder.jpg";

export type PublicNewsItem = {
  _id: string;
  title: string;
  url?: string;
  description?: string;
  // Tab on the News page, chosen in the admin panel.
  category?: NewsCategory;
  // Image uploaded in the admin panel (full public URL).
  image?: {
    url: string;
    alt?: string;
  };
  sortOrder: number;
  createdAt: string;
};

const categoryLabels: Record<NewsCategory, string> = {
  film: "Film",
  festival: "Festival",
  award: "Award",
};

type NewsResponse = {
  success: boolean;
  message: string;
  data: PublicNewsItem[];
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000"
  ).replace(/\/+$/, "");
}

export async function getPublicNews() {
  const response = await fetch(`${getApiBaseUrl()}/api/v1/news`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch news (${response.status})`);
  }

  const result = (await response.json()) as NewsResponse;

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("The news API returned an invalid response");
  }

  return result.data;
}

export function mapPublicNewsToStories(
  items: PublicNewsItem[],
): NewsStory[] {
  return items.map((item) => {
    const excerpt =
      item.description?.trim() || "Latest news from Prana Pictures.";
    const category: NewsCategory =
      item.category && item.category in categoryLabels
        ? item.category
        : "film";

    return {
      slug: `news-${item._id}`,
      title: item.title,
      category,
      categoryLabel: categoryLabels[category],
      excerpt,
      // Stories without an uploaded image show the Prana Pictures placeholder.
      image: item.image?.url ?? NEWS_PLACEHOLDER_IMAGE,
      imageAlt: item.image?.url ? item.image.alt || item.title : "",
      quote: excerpt,
      externalUrl: item.url || undefined,
    };
  });
}
