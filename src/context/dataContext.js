import { createContext, useState, useContext, useEffect } from "react";
import { data } from "../data";
import { TABS_KEYS } from "../constants";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(TABS_KEYS.COMPLETED);
  const [dataToRender, setDataToRender] = useState(data);

  useEffect(() => {
    if (!activeTab) return;
    const filteredData = data?.filter((item) => item?.status === activeTab);
    debugger
    setDataToRender(filteredData);
  }, [activeTab]);

  return (
    <DataContext.Provider
      value={{ activeTab, setActiveTab, data: dataToRender }}
    >
      {children}
    </DataContext.Provider>
  );
};
