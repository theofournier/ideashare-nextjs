import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { PostItem } from "./_components/PostItem";
import { Container, SimpleGrid } from "@mantine/core";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <Container size="lg">
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 3 }}
        spacing={{ base: 10, md: "md" }}
        verticalSpacing={{ base: 10, md: "md" }}
      >
        {[...posts, ...posts].map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
