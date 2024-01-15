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

export const AppBarProfile = () => {
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
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              alt="Theo Fournier"
              radius="xl"
              size={24}
            />
            <Text fw={500} size="sm">
              Theo Fournier
            </Text>
            <IconChevronDown size="1rem" />
          </Group>
        </Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem
          component={Link}
          href="/profiles/test"
          leftSection={<IconUserCircle size="1rem" />}
          className={classes.profileItem}
          data-active={pathname === "/profiles/test" || undefined}
        >
          My profile
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
        <MenuItem
          leftSection={
            <IconLogout size="1rem" color="var(--mantine-color-error)" />
          }
          color="var(--mantine-color-error)"
        >
          Logout
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
};
