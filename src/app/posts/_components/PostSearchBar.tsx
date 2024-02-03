import { ActionIcon, TextInput } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

type Props = {
  searchQuery?: string;
  onSearch: (formData: FormData) => void;
};

export const PostSearchBar = ({ searchQuery, onSearch }: Props) => {
  return (
    <form action={onSearch}>
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
