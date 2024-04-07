import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { Container, Group, SimpleGrid } from "@mantine/core";
import { NextPageProps } from "@/lib/types";
import { redirect } from "next/navigation";
import { ProfileSearchBar } from "./_components/ProfileSearchBar";
import { ProfileSortMenu } from "./_components/ProfileSortMenu";
import { ProfileItem } from "./_components/ProfileItem";
import { getProfiles } from "@/lib/supabase/queries/profile/getProfiles";

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

  return (
    <Container size="lg">
      <Group>
        <ProfileSearchBar searchQuery={searchQuery} onSearch={onSearch} />
        <ProfileSortMenu searchSort={searchSort} onSearch={onSearch} />
      </Group>
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 3 }}
        spacing={{ base: 10, md: "md" }}
        verticalSpacing={{ base: 10, md: "md" }}
        mt="md"
      >
        {[...profiles, ...profiles].map((profile) => (
          <ProfileItem key={profile.user.id} profile={profile} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
