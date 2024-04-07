import { PostsList } from "@/components/Post/PostsList";
import { getProfilePosts } from "@/lib/supabase/queries/post/getProfilePosts";
import { NextPageProps } from "@/lib/types";

export default async function Profile({ params }: NextPageProps) {
  const posts = await getProfilePosts(params.id);

  return <PostsList posts={posts} />;
}
