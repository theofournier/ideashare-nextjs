import { PostItem } from "./PostItem";
import { SimpleGrid } from "@mantine/core";
import { Post } from "@/lib/supabase/schema/types";

type Props = {
  posts: Post[];
};

export const PostsList = ({ posts }: Props) => {
  return (
    <SimpleGrid
      cols={{ base: 1, xs: 2, md: 3 }}
      spacing={{ base: 10, md: "md" }}
      verticalSpacing={{ base: 10, md: "md" }}
      mt="md"
    >
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
};
