import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextPageProps } from "@/lib/types";
import { TypographyStylesProvider } from "@mantine/core";
import { notFound } from "next/navigation";

export default async function Post({ params }: NextPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      </TypographyStylesProvider>
    </div>
  );
}
