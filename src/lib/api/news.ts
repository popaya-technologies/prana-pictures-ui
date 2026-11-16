import { newsStories, type NewsStory } from "@/data/news";

export type PublicNewsItem = {
  _id: string;
  title: string;
  url?: string;
  description?: string;
  sortOrder: number;
  createdAt: string;
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
  return items.map((item, index) => {
    const imageFallback = newsStories[index % newsStories.length];
    const excerpt =
      item.description?.trim() || "Latest news from Prana Pictures.";

    return {
      slug: `news-${item._id}`,
      title: item.title,
      category: "film",
      categoryLabel: "News",
      excerpt,
      image: imageFallback.image,
      imageAlt: imageFallback.imageAlt,
      quote: excerpt,
      externalUrl: item.url || undefined,
    };
  });
}
