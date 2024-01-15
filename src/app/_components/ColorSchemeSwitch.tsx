"use client";

import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export const ColorSchemeSwitch = () => {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      size="md"
      onLabel={
        <IconSun size={16} color="var(--mantine-color-yellow-4)" stroke={2.5} />
      }
      offLabel={
        <IconMoonStars
          size={16}
          color="var(--mantine-color-blue-6)"
          stroke={2.5}
        />
      }
      onClick={toggleColorScheme}
      checked={computedColorScheme === "light"}
    />
  );
};
