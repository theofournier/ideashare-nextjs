import {
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  MantineSize,
  Text,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

type Props = {
  textSize?: MantineSize;
  iconSize?: string;
  text: string;
  description: string;
};

export const InputLabelPostForm = ({
  text,
  description,
  iconSize,
  textSize,
}: Props) => {
  return (
    <Group justify="center" gap="xs">
      <Text size={textSize ?? "sm"} fw={500}>
        {text}
      </Text>
      <HoverCard width={280} shadow="md" position="top">
        <HoverCardTarget>
          <IconInfoCircle size={iconSize ?? "1rem"} />
        </HoverCardTarget>
        <HoverCardDropdown>
          <Text size="sm">{description}</Text>
        </HoverCardDropdown>
      </HoverCard>
    </Group>
  );
};
