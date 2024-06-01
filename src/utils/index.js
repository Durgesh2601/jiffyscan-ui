import { UNIQUE_KEYS } from "../constants";

export const getFilteredData = (filterValue, activeTab, data) => {
  if (filterValue === UNIQUE_KEYS.ALL)
    return data?.filter((item) => item?.status === activeTab);
  return data?.filter(
    (item) => item?.filters?.includes(filterValue) && item?.status === activeTab
  );
};
