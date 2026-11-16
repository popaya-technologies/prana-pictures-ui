export type PublicInformationPage = {
  _id: string;
  title: string;
  slug: string;
  descriptionHtml?: string;
  seo?: {
    metaTitle: string;
    metaDescription?: string;
    metaKeywords?: string[];
  };
};

type InformationResponse = {
  success: boolean;
  message: string;
  data: PublicInformationPage;
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000"
  ).replace(/\/+$/, "");
}

export async function getPublicInformationBySlug(slug: string) {
  const response = await fetch(
    `${getApiBaseUrl()}/api/v1/information/${encodeURIComponent(slug)}`,
    { cache: "no-store" },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Unable to fetch information ${slug} (${response.status})`,
    );
  }

  const result = (await response.json()) as InformationResponse;

  if (!result.success || !result.data) {
    throw new Error("The information API returned an invalid response");
  }

  return result.data;
}
