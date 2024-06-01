import { UNIQUE_KEYS } from "../constants";

export const getFilteredData = (filterValue, activeTab, searchValue, data) => {
  return data?.filter((item) => {
    const matchesTab = item?.status === activeTab;
    const matchesFilter =
      filterValue === UNIQUE_KEYS.ALL || item?.filters?.includes(filterValue);

    if (!searchValue) {
      return matchesTab && matchesFilter;
    }

    const searchLower = searchValue.toLowerCase();
    const matchesSearch =
      item?.name.toLowerCase().includes(searchLower) ||
      item?.organizer.toLowerCase().includes(searchLower) ||
      (item?.token?.value &&
        item?.token?.value?.toString().includes(searchLower));

    return matchesTab && matchesFilter && matchesSearch;
  });
};
