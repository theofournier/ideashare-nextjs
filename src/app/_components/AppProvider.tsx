import { MantineProvider } from "@mantine/core";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
  );
};
