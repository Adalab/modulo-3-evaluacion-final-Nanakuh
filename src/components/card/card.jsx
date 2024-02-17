import PropTypes from "prop-types";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ id, image, name, species }) {
  const defaultImage = "./anonimo.webp";

  return (
    <Link to={`/character/${id}`}>
      <div className="card" key={id}>
        <img src={image || defaultImage} alt={name} className="card-image" />
        <div className="card-info">
          <h2 className="card-name">{name}</h2>
          <p className="card-species">Especie: {species}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Card;
