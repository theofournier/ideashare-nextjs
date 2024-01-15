"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, ButtonProps } from "@mantine/core";

type Props = ButtonProps & {
  link: string;
  label: string;
};

export const AppBarLink = ({ label, link, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <Button
      href={link}
      component={Link}
      variant={pathname === link ? "filled" : "subtle"}
      {...props}
    >
      {label}
    </Button>
  );
};
