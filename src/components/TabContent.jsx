import React from "react";
import "../styles/TabContent.css";
function TabContent({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default TabContent;
