import filter from "../../assets/filter.svg";
import { FILTERS } from "../../constants";
import { useDataContext } from "../../context/dataContext";
import "./index.css";

const Filters = () => {
  const { setSelectedFilter } = useDataContext();
  
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setSelectedFilter(filterValue);
  };

  return (
    <div className="filters-container">
      <div className="filter-border"></div>
      <div className="filter">
        <img src={filter} alt="filter-icon" />
        <span>Filter By</span>
        <div className="custom-select-wrapper">
          <select className="custom-select" onChange={handleFilterChange}>
            <option value="all">All</option>
            {FILTERS.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
