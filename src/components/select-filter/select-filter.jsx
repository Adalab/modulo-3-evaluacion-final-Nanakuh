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
      <option value="Gryffindor">GRIFFINDOR</option>
      <option value="Hufflepuff">HUFFLEPUFF</option>
      <option value="Ravenclaw">RAVENCLAW</option>
      <option value="Slytherin">SLITHERIN</option>
    </select>
   
  );
};

SelectFilter.propTypes = {
  selectedHouse: PropTypes.string.isRequired,
  onHouseChange: PropTypes.func.isRequired,
  houseFilter:PropTypes.string.isRequired,
};

export default SelectFilter;
