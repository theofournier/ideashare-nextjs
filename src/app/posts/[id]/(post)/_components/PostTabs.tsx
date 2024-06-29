"use client";

import { usePathname, useRouter } from "next/navigation";
import { Badge, Tabs } from "@mantine/core";

type Props = {
  id: string;
  commentsCount?: number;
};

export const PostTabs = ({ id, commentsCount = 0 }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tabs value={pathname} onChange={(value) => value && router.push(value)}>
      <Tabs.List>
        <Tabs.Tab value={`/posts/${id}`}>Info</Tabs.Tab>
        <Tabs.Tab
          value={`/posts/${id}/comments`}
          rightSection={
            <Badge variant="outline" size="sm">
              {commentsCount}
            </Badge>
          }
        >
          Comments
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
