import PropTypes from "prop-types";
import "./card.css";

function Card({ image, name, species }) {
  const defaultImage = "../../../anonimo.webp";

  return (
    <div className="card">
      <img src={image || defaultImage} alt={name} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-species">Especie: {species}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Card;
