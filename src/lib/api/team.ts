export type PublicTeamMember = {
  _id: string;
  name: string;
  designation: string;
  shortBio?: string;
  descriptionHtml?: string;
  email?: string;
  sortOrder: number;
};

type TeamResponse = {
  success: boolean;
  message: string;
  data: PublicTeamMember[];
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000"
  ).replace(/\/+$/, "");
}

export async function getPublicTeamMembers() {
  const response = await fetch(`${getApiBaseUrl()}/api/v1/team`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch team (${response.status})`);
  }

  const result = (await response.json()) as TeamResponse;

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("The team API returned an invalid response");
  }

  return result.data;
}
