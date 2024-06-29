import { Container, Group } from "@mantine/core";
import { NextPageProps } from "@/lib/types";
import { redirect } from "next/navigation";
import { ProfileSearchBar } from "./_components/ProfileSearchBar";
import { ProfileSortMenu } from "./_components/ProfileSortMenu";
import { getProfiles } from "@/lib/supabase/queries/profile/getProfiles";
import { ProfilesList } from "@/components/Profile/ProfilesList";

type Props = {
  query?: string;
  sort?: string;
};

export default async function Profiles({ searchParams }: NextPageProps<Props>) {
  const searchQuery = searchParams.query;
  const searchSort = searchParams.sort;

  const profiles = await getProfiles();

  const onSearch = async (formData: FormData) => {
    "use server";

    const query = formData.get("query") ?? searchQuery;
    const sort = formData.get("sort") ?? searchSort;

    const params = Object.entries({ query, sort })
      .filter(([key, value]) => Boolean(value) === true)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    redirect(`/profiles?${params}`);
  };

  if (!profiles || profiles.length === 0) {
    return <Container size="lg">No profiles</Container>;
  }

  return (
    <Container size="lg">
      <Group>
        <ProfileSearchBar searchQuery={searchQuery} onSearch={onSearch} />
        <ProfileSortMenu searchSort={searchSort} onSearch={onSearch} />
      </Group>
      <ProfilesList profiles={profiles} />
    </Container>
  );
}
