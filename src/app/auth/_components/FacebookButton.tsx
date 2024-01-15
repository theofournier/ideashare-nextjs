import { Button } from "@mantine/core";
import { IconBrandFacebookFilled } from "@tabler/icons-react";

export function FacebookButton() {
  return (
    <Button
      leftSection={<IconBrandFacebookFilled />}
      variant="default"
      radius="xl"
    >
      Facebook
    </Button>
  );
}
