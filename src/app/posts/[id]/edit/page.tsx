import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextPageProps } from "@/lib/types";
import { notFound } from "next/navigation";

export default async function EditPost({ params }: NextPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return <div>Edit post {params.id}</div>;
}
