import PropTypes from "prop-types";
import "./card.css";

function Card({ id,image, name, species }) {
  const defaultImage = "../../../anonimo.webp";

  return (
    <div className="card" key={id}>
      <img src={image || defaultImage} alt={name} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-species">Especie: {species}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  id:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string,
  house: PropTypes.string,
  dateOfBirth: PropTypes.string,
  wizard: PropTypes.bool,
  eyeColour: PropTypes.string,
  hairColour: PropTypes.string,
  patronus: PropTypes.string,
  alive: PropTypes.bool,
  actor: PropTypes.string,
};

export default Card;
