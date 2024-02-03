import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { PostItem } from "./_components/PostItem";
import { Container, SimpleGrid } from "@mantine/core";
import { PostSearchBar } from "./_components/PostSearchBar";

type Props = {
  query: string;
};

export default async function Posts({ searchParams }: { searchParams: Props }) {
  const searchQuery = searchParams.query;

  const posts = await getPosts();

  return (
    <Container size="lg">
      <PostSearchBar searchQuery={searchQuery} />
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
