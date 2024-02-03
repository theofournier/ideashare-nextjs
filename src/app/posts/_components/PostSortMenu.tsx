import { Button, Menu, MenuDropdown, MenuTarget } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

type Props = {
  searchSort?: string;
  onSearch: (formData: FormData) => void;
};

const SortMenuItem = ({
  sortValue,
  selected,
  onSearch,
}: {
  sortValue: string;
  selected: boolean;
  onSearch: (formData: FormData) => void;
}) => {
  return (
    <form action={onSearch}>
      <input name="sort" defaultValue={sortValue} hidden aria-hidden readOnly />
      <Button
        variant={selected ? "light" : "subtle"}
        type="submit"
        fullWidth
        justify="flex-start"
      >
        {sortValue}
      </Button>
    </form>
  );
};

const sortItems = [
  "Newest",
  "Oldest",
  "Popularity",
  "Most liked",
  "Most viewed",
];

export const PostSortMenu = ({ searchSort = "Newest", onSearch }: Props) => {
  return (
    <Menu shadow="md" width={200}>
      <MenuTarget>
        <Button
          variant="outline"
          leftSection={<IconArrowsSort />}
          radius="xl"
          type="button"
        >
          {searchSort}
        </Button>
      </MenuTarget>

      <MenuDropdown>
        {sortItems.map((item) => (
          <SortMenuItem
            key={item}
            sortValue={item}
            selected={searchSort === item}
            onSearch={onSearch}
          />
        ))}
      </MenuDropdown>
    </Menu>
  );
};
