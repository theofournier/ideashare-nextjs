import { ActionIcon, TextInput } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { redirect } from "next/navigation";

type Props = {
  searchQuery: string;
};

export const PostSearchBar = ({ searchQuery }: Props) => {
  const search = async (formData: FormData) => {
    "use server";

    const query = formData.get("query");

    if (!query) {
      redirect("/posts");
    }

    redirect(`/posts?query=${query}`);
  };
  return (
    <form action={search}>
      <TextInput
        radius="xl"
        size="md"
        type="search"
        name="query"
        placeholder="Search posts..."
        rightSectionWidth={42}
        leftSection={<IconSearch size="1rem" />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" type="submit">
            <IconArrowRight size="1rem" />
          </ActionIcon>
        }
        defaultValue={searchQuery}
      />
    </form>
  );
};
