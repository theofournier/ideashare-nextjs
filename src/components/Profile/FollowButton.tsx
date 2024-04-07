import { Button, Text, TextProps } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons-react";

type Props = {
  userId: string;
  size?: TextProps["size"];
};

export const FollowButton = ({ userId, size }: Props) => {
  return (
    <Button variant="subtle" leftSection={<IconUserPlus />}>
      <Text size={size} c="dimmed">
        Follow
      </Text>
    </Button>
  );
};
