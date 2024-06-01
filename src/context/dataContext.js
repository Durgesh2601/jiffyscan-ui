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
  const [selectedFilter, setSelectedFilter] = useState(UNIQUE_KEYS.ALL);
  const [activeTab, setActiveTab] = useState(TABS_KEYS.COMPLETED);

  useEffect(() => {
    if (!activeTab || !selectedFilter) return;
    const filteredData = getFilteredData(selectedFilter, activeTab, data);
    setDataToRender(filteredData);
  }, [activeTab, selectedFilter]);

  return (
    <DataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        data: dataToRender,
        setData: setDataToRender,
        setSelectedFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
