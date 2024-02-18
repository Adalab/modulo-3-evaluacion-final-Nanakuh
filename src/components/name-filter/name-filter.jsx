import PropTypes from "prop-types";
import "./name-filter.css";

function NameFilter({ handleFilterChange,textFilter }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Filter by character..."
        onChange={handleFilterChange}
        className="filter-input"
        value={textFilter}
      />
    </form>
  );
}

NameFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  textFilter: PropTypes.string.isRequired
};

export default NameFilter;
