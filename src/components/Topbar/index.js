import Tabs from "../Tabs";
import search from "../../assets/search.svg";
import "./index.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <Tabs />
      </div>
      <div className="right">
        <div className="topbar-right-search">
          <div className="topbar-input-container">
            <span className="icon-start">
              <img src={search} alt="search" />
            </span>
            <input
              type="text"
              placeholder="Search Bounties, Profiles, and more..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
