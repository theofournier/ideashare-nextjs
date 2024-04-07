import { getPosts } from "@/lib/supabase/queries/post/getPosts";
import { NextPageProps } from "@/lib/types";

export default async function Voted({ params }: NextPageProps) {
  const posts = await getPosts();

  return <div>Posts Voted</div>;
}
