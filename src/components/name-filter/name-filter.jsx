import PropTypes from "prop-types";
import "./name-filter.css";

function NameFilter({ handleFilterChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Filter by character..."
        onChange={handleFilterChange}
        className="filter-input"
      />
    </form>
  );
}

NameFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default NameFilter;
