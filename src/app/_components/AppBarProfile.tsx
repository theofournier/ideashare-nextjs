"use client";

import {
  Avatar,
  Button,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./styles/AppBarProfile.module.css";
import { usePathname } from "next/navigation";
import { AppBarLogout } from "./AppBarLogout";

type Props = {
  id: string;
  username?: string;
  email?: string;
  avatarUrl?: string;
};

export const AppBarProfile = ({ id, email, avatarUrl, username }: Props) => {
  const pathname = usePathname();
  return (
    <Menu
      trigger="click-hover"
      loop={false}
      withinPortal={false}
      trapFocus={false}
      menuItemTabIndex={0}
    >
      <MenuTarget>
        <Button variant="subtle" c="var(--mantine-color-text)">
          <Group gap={6}>
            <Avatar src={avatarUrl} alt={username || "User"} size={24} />
            <Text fw={500} size="sm">
              {username || email || "User"}
            </Text>
            <IconChevronDown size="1rem" />
          </Group>
        </Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem
          component={Link}
          href={`/profiles/${id}`}
          leftSection={<IconUserCircle size="1rem" />}
          className={classes.profileItem}
          data-active={pathname === `/profiles/${id}` || undefined}
        >
          <Stack gap={0}>
            <Text size="sm">My profile</Text>
            <Text size="xs" c="dimmed">
              {email}
            </Text>
          </Stack>
        </MenuItem>
        <MenuLabel>Settings</MenuLabel>
        <MenuItem
          leftSection={<IconSettings size="1rem" />}
          component={Link}
          href="/account"
          className={classes.profileItem}
          data-active={pathname === "/account" || undefined}
        >
          Account
        </MenuItem>
        <AppBarLogout />
      </MenuDropdown>
    </Menu>
  );
};
