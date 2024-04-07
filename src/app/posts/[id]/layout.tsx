import { UserTimestamp } from "@/components/User/UserTimestamp";
import { getPost } from "@/lib/supabase/queries/post/getPost";
import { NextLayoutProps } from "@/lib/types";
import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notFound } from "next/navigation";
import { PostTabs } from "./_components/PostTabs";
import { IconThumbUp } from "@tabler/icons-react";
import { PostHeader } from "./_components/PostHeader";

export default async function Post({ params, children }: NextLayoutProps) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <Container size="lg">
      <Card>
        <PostHeader post={post}/>
        {children}
      </Card>
    </Container>
  );
}
