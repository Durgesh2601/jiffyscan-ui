import filter from "../../assets/filter.svg";
import "./index.css";

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filter-border"></div>
      <div className="filter">
        <img src={filter} alt="filter-icon" />
        <span>Filter By</span>
        <div class="custom-select-wrapper">
          <select class="custom-select">
            <option value="all">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
