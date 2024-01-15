import { AppShellHeader, Group, Image, Title } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { AppBarLink } from "./AppBarLink";
import classes from "./styles/AppBar.module.css";
import NextLink from "next/link";
import NextImage from "next/image";
import { AppBarProfile } from "./AppBarProfile";
import { ColorSchemeSwitch } from "./ColorSchemeSwitch";
import { getCurrentUser } from "@/lib/supabase/queries/auth/getCurrentUser";

const mainLinks = [
  { link: "/posts", label: "Posts" },
  { link: "/profiles", label: "Profiles" },
];

export const AppBar = async () => {
  const user = await getCurrentUser();

  const mainItems = mainLinks.map((link) => (
    <AppBarLink key={link.label} {...link} />
  ));

  return (
    <AppShellHeader className={classes.header}>
      <Group className={classes.inner} justify="space-between">
        <NextLink href="/">
          <Group gap={8}>
            <Image
              component={NextImage}
              alt="Logo"
              src="/logo.png"
              width={40}
              height={40}
            />
            <Title size="h3">IdeaShare</Title>
          </Group>
        </NextLink>
        <Group gap={4}>{mainItems}</Group>
        <Group gap={4}>
          {user ? (
            <>
              <AppBarLink
                link="/posts/create"
                label="Create post"
                leftSection={<IconSquareRoundedPlusFilled />}
              />
              <AppBarProfile {...user} />
            </>
          ) : (
            <>
              <AppBarLink link="/auth/login" label="Login" />
              <AppBarLink
                link="/auth/register"
                label="Register"
                variant="outline"
              />
            </>
          )}
          <ColorSchemeSwitch />
        </Group>
      </Group>
    </AppShellHeader>
  );
};
