export type NextPageProps<
  T = { [key: string]: string | string[] | undefined }
> = {
  params: { id: string };
  searchParams: T;
};

export type NextLayoutProps = {
  params: { id: string };
  children: React.ReactNode;
};
