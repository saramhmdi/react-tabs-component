import React from "react";
import { useState } from "react";
import TabContent from "./TabContent";
import { tabs } from "../constants/constants";
import "../styles/TabComponent.css";
function TabComponent() {
  const [selectedTab, setSelectedTab] = useState(() => {
    const savedTab = localStorage.getItem("selectedTab");
    return savedTab ? parseInt(savedTab, 10) : tabs[0].id;
  });
  const activeTabData = tabs.find((tab) => tab.id === selectedTab);
  const clickHandler = (id) => {
    setSelectedTab(id);
    localStorage.setItem("selectedTab", id);
  };
  return (
    <>
      <div id="buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => clickHandler(tab.id)}
            className={tab.id === selectedTab ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {activeTabData && (
        <TabContent
          title={activeTabData.title}
          content={activeTabData.content}
        />
      )}
    </>
  );
}

export default TabComponent;
