import Item from "./item";
import { PropTypes } from "prop-types";

function CharacterList({ flowers }) {
  const htmlFlowers = flowers.map((flower, idx) => (
    <li key={idx} className="image__card">
      <Item title={flower.title} url={flower.url} />
    </li>
  ));

  return <ul className="image__gallery">{htmlFlowers}</ul>;
}
CharacterList.propTypes = {
  flowers: PropTypes.array.isRequired
};

export default CharacterList;