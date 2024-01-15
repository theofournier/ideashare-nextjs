import { Button } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

export function GoogleButton() {
  return (
    <Button
      leftSection={<IconBrandGoogleFilled />}
      variant="default"
      radius="xl"
    >
      Google
    </Button>
  );
}
