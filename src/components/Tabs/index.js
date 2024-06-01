import { useState } from "react";
import "./index.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Work History");

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab("Work History")}
          className={activeTab === "Work History" ? "active" : ""}
        >
          Work History
        </button>
        <button
          onClick={() => setActiveTab("Completed")}
          className={activeTab === "Completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setActiveTab("In Review")}
          className={activeTab === "In Review" ? "active" : ""}
        >
          In Review
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Work History" && <div>Work History Content</div>}
        {activeTab === "Completed" && <div>Completed Content</div>}
        {activeTab === "In Review" && <div>In Review Content</div>}
      </div>
    </div>
  );
};

export default Tabs;
