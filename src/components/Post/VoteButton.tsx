import { Button, Text, TextProps } from "@mantine/core";
import { IconArrowBigUp } from "@tabler/icons-react";

type Props = {
  postId: string;
  size?: TextProps["size"];
};

export const VoteButton = ({ postId, size }: Props) => {
  return (
    <Button variant="subtle" leftSection={<IconArrowBigUp />}>
      <Text size={size} c="dimmed">
        Vote
      </Text>
    </Button>
  );
};
