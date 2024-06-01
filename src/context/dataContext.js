import { createContext, useState, useContext, useEffect } from "react";
import { data } from "../data";
import { TABS_KEYS, UNIQUE_KEYS } from "../constants";
import { getFilteredData } from "../utils";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [dataToRender, setDataToRender] = useState(data);
  const [activeTab, setActiveTab] = useState(TABS_KEYS.COMPLETED);
  const [searchValue, setSearchValue] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(UNIQUE_KEYS.ALL);

  useEffect(() => {
    if (!activeTab || !selectedFilter) return;
    const filteredData = getFilteredData(
      selectedFilter,
      activeTab,
      searchValue,
      data
    );
    setDataToRender(filteredData);
  }, [activeTab, selectedFilter, searchValue]);

  return (
    <DataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        data: dataToRender,
        setData: setDataToRender,
        setSelectedFilter,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
