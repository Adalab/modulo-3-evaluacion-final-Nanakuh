import PropTypes from "prop-types";
import "./name-filter.css";

function NameFilter({ handleFilterChange }) {

  return (
    <input
          type="text"
          placeholder="Filter by name..."
          onChange={handleFilterChange}
          className="filter-input"
        />
  );
}

NameFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired
};

export default NameFilter;