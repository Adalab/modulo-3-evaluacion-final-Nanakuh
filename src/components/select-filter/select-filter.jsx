import PropTypes from "prop-types";
import "./select-filter.css";

const SelectFilter = ({ selectedHouse, onHouseChange, houseFilter }) => {
  return (
   
   <select
      defaultValue={selectedHouse}
      onChange={onHouseChange}
      className="house-filter"
      value={houseFilter}
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
  houseFilter:PropTypes.string.isRequired,
};

export default SelectFilter;
