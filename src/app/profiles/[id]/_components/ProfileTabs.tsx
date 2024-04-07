"use client";

import { usePathname, useRouter } from "next/navigation";
import { Badge, Tabs } from "@mantine/core";

type Props = {
  id: string;
  postCount?: number;
  postVotedCount?: number;
  followingCount?: number;
};

export const ProfileTabs = ({
  id,
  postCount = 0,
  followingCount = 0,
  postVotedCount = 0,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tabs value={pathname} onChange={(value) => value && router.push(value)}>
      <Tabs.List>
        <Tabs.Tab
          value={`/profiles/${id}`}
          rightSection={
            <Badge variant="outline" size="sm">
              {postCount}
            </Badge>
          }
        >
          Posts
        </Tabs.Tab>
        <Tabs.Tab
          value={`/profiles/${id}/voted`}
          rightSection={
            <Badge variant="outline" size="sm">
              {postVotedCount}
            </Badge>
          }
        >
          Posts voted
        </Tabs.Tab>
        <Tabs.Tab
          value={`/profiles/${id}/following`}
          rightSection={
            <Badge variant="outline" size="sm">
              {followingCount}
            </Badge>
          }
        >
          Following
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
