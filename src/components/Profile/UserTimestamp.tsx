import { User } from "@/lib/supabase/schema/types";
import { Avatar, Group, Text, Tooltip } from "@mantine/core";
import {
  differenceInHours,
  format,
  formatDistance,
  formatRelative,
} from "date-fns";
import NextLink from "next/link";

type Props = {
  user?: User;
  date: string;
  small?: boolean;
};

const getFormattedDate = (date: string) => {
  const now = Date.now();

  if (differenceInHours(now, date) < 24) {
    return formatDistance(date, now, { addSuffix: true });
  }
  return formatRelative(date, now);
};

export const UserTimestamp = ({ user, date, small = false }: Props) => {
  return (
    <Group>
      <NextLink href={`/profiles/${user?.id}`}>
        <Avatar src={user?.avatarUrl} alt={user?.username || "User"} />
      </NextLink>
      <div>
        <Text size={small ? "sm" : "md"}>{user?.username || "User"}</Text>
        <Tooltip label={format(date, "yyyy-MM-dd HH:mm:SS")} openDelay={300}>
          <Text size={small ? "xs" : "sm"} c="dimmed">
            {getFormattedDate(date)}
          </Text>
        </Tooltip>
      </div>
    </Group>
  );
};
