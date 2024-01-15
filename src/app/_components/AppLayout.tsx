import { AppShell, AppShellMain } from "@mantine/core";
import { AppBar } from "./AppBar";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppBar />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};
