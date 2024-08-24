import React from "react";
import { useState } from "react";
import TabContent from "./TabContent";
import { tabs } from "../constants/constants";
import "../styles/TabComponent.css";
function TabComponent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === selectedTab);

  return (
    <>
      <div id="buttons">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setSelectedTab(tab.id)}  className={tab.id === selectedTab ? "active" : ""}>
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
