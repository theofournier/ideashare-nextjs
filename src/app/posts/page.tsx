import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { PostItem } from "./_components/PostItem";
import { Container, Group, SimpleGrid } from "@mantine/core";
import { PostSearchBar } from "./_components/PostSearchBar";
import { PostSortMenu } from "./_components/PostSortMenu";
import { NextPageProps } from "@/lib/types";
import { redirect } from "next/navigation";

type Props = {
  query?: string;
  sort?: string;
};

export default async function Posts({ searchParams }: NextPageProps<Props>) {
  const searchQuery = searchParams.query;
  const searchSort = searchParams.sort;

  const posts = await getPosts();

  const onSearch = async (formData: FormData) => {
    "use server";

    const query = formData.get("query") ?? searchQuery;
    const sort = formData.get("sort") ?? searchSort;

    const params = Object.entries({ query, sort })
      .filter(([key, value]) => Boolean(value) === true)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    redirect(`/posts?${params}`);
  };

  return (
    <Container size="lg">
      <Group>
        <PostSearchBar searchQuery={searchQuery} onSearch={onSearch} />
        <PostSortMenu searchSort={searchSort} onSearch={onSearch} />
      </Group>
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 3 }}
        spacing={{ base: 10, md: "md" }}
        verticalSpacing={{ base: 10, md: "md" }}
        mt="md"
      >
        {[...posts, ...posts].map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
