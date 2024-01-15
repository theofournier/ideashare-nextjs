import { AppShellHeader, Group, Image, Title } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { AppBarLink } from "./AppBarLink";
import classes from "./styles/AppBar.module.css";
import NextLink from "next/link";
import NextImage from "next/image";
import { AppBarProfile } from "./AppBarProfile";
import { forwardRef } from "react";
import { ColorSchemeSwitch } from "./ColorSchemeSwitch";

const mainLinks = [
  { link: "/posts", label: "Posts" },
  { link: "/profiles", label: "Profiles" },
];

const AppBar = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const mainItems = mainLinks.map((link) => (
    <AppBarLink key={link.label} {...link} />
  ));

  return (
    <AppShellHeader ref={ref} className={classes.header} {...props}>
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
          <AppBarLink
            link="/posts/create"
            label="Create post"
            leftSection={<IconSquareRoundedPlusFilled />}
          />
          <AppBarProfile />
          <ColorSchemeSwitch />
        </Group>
      </Group>
    </AppShellHeader>
  );
});

AppBar.displayName = "AppBar";
export { AppBar };
