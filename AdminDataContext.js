import { useState, createContext } from "react";

export const AdminDataContext = createContext();

export const AdminDataProvider = (props) => {
  const [tabs, setTabs] = useState([
    "Locations",
    "Categories",
    "Products",
    "Orders",
    "Reports",
  ]);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <AdminDataContext.Provider
      value={{
        tabs: [tabs, setTabs],
        selectedTab: [selectedTab, setSelectedTab],
      }}
    >
      {props.children}
    </AdminDataContext.Provider>
  );
};
