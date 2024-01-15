import { AppShellHeader, Group, Title } from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { AppBarLink } from "./AppBarLink";
import classes from "./styles/AppBar.module.css";
import Link from "next/link";
import { AppBarProfile } from "./AppBarProfile";
import { forwardRef } from "react";

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
        <Link href="/">
          <Title>NAME</Title>
        </Link>
        <Group gap={8}>{mainItems}</Group>
        <Group gap={8}>
          <AppBarLink
            link="/posts/create"
            label="Create post"
            leftSection={<IconSquareRoundedPlusFilled />}
          />
          <AppBarProfile />
        </Group>
      </Group>
    </AppShellHeader>
  );
});

AppBar.displayName = "AppBar";
export { AppBar };
