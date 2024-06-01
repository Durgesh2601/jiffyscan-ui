import { useDataContext } from "../../context/dataContext";
import { UNIQUE_KEYS, TABS_KEYS } from "../../constants";
import "./index.css";

const { ACTIVE } = UNIQUE_KEYS;

const { COMPLETED, IN_REVIEW } = TABS_KEYS;
const Tabs = () => {
  const { activeTab, setActiveTab } = useDataContext();

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div>
          <p className="work-history">Work History</p>
        </div>
        <div>
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab(COMPLETED)}
              className={activeTab === COMPLETED ? ACTIVE : ""}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab(IN_REVIEW)}
              className={activeTab === IN_REVIEW ? ACTIVE : ""}
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
