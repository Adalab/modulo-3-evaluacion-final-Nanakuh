import PropTypes from "prop-types";
import "./select-filter.css";

const SelectFilter = ({ selectedHouse, onHouseChange }) => {
  return (
    <select
      defaultValue={selectedHouse}
      onChange={onHouseChange}
      className="house-filter"
    >
      <option value="Gryffindor">Gryffindor</option>
      <option value="Hufflepuff">Hufflepuff</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Slytherin">Slytherin</option>
    </select>
  );
};

SelectFilter.propTypes = {
  selectedHouse: PropTypes.string.isRequired,
  onHouseChange: PropTypes.func.isRequired,
};

export default SelectFilter;
