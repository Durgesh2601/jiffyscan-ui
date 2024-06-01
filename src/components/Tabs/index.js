import { useState } from "react";
import TabContent from "../TabContent/Content";
import "./index.css";
import { data } from "../../data";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("completed");

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div>
          <p className="work-history">Work History</p>
        </div>
        <div>
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab("completed")}
              className={activeTab === "completed" ? "active" : ""}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("In review")}
              className={activeTab === "In review" ? "active" : ""}
            >
              In Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
