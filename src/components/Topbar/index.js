import Tabs from "../Tabs";
import search from "../../assets/search.svg";
import Filters from "../Filters";
import { useDataContext } from "../../context/dataContext";
import "./index.css";

const Topbar = () => {
  const { setSearchValue } = useDataContext();
  return (
    <div className="topbar">
      <div className="left">
        <Tabs />
        <Filters />
      </div>
      <div className="divider"></div>
      <div className="right">
        <div className="topbar-right-search">
          <div className="topbar-input-container">
            <span className="icon-start">
              <img src={search} alt="search" />
            </span>
            <input
              type="text"
              placeholder="Search Bounties, Profiles, and more..."
              onChange={(e) => setSearchValue(e.target.value)}
              onPaste={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
