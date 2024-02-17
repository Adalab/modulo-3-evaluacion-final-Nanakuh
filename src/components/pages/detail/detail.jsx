import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.css";

function Detail() {
  const { id } = useParams();
  const defaultImage = "./anonimo.webp";
  const deadIcon = "./dead.png";
  const aliveIcon = "./alive.png";

  const [character, setCharacter] = useState({});

  const fetchCharacters = () => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())

      .then((dataResponse) => {
        setCharacter(dataResponse[0]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchCharacters();
  }, [character]);

  return (
    <div className="character-detail">
      <Link to="/" className="return-button">VOLVER</Link>
      <div className="character-header">
        <img
          src={`./${character.house}.jpg`}
          alt="Hogwarts Logo"
          className="hogwarts-logo"
        />
      </div>
      <img
        src={character.image || defaultImage}
        alt={character.name}
        className="character-image"
      />
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>
          <strong className="title">Especie:</strong> {character.species}
        </p>
        <p>
          <strong className="title">Género:</strong> {character.gender}
        </p>
        <p>
          <strong className="title">Casa:</strong> {character.house}
        </p>
        <p>
          <strong className="title">Fecha de Nacimiento:</strong> {character.dateOfBirth}
        </p>
        <p>
          <strong className="title">Mago:</strong> {character.wizard ? "Sí" : "No"}
        </p>
        <p>
          <strong className="title">Ancestry:</strong> {character.ancestry}
        </p>
        <p>
          <strong className="title">Color de Ojos:</strong> {character.eyeColour}
        </p>
        <p>
          <strong className="title">Color de Cabello:</strong> {character.hairColour}
        </p>
        <p>
          <strong className="title">Patronus:</strong> {character.patronus}
        </p>
        <p>
          <strong className="title">Estudiante de Hogwarts:</strong>{" "}
          {character.hogwartsStudent ? "Sí" : "No"}
        </p>
        <p>
          <strong className="title">Staff de Hogwarts:</strong>{" "}
          {character.hogwartsStaff ? "Sí" : "No"}
        </p>
        <p>
          <strong className="title">Actor:</strong> {character.actor}
        </p>
        <p>
        <strong className="title">Vivo:</strong> {character.alive ? <><img src={aliveIcon} alt="alive"/> Sí</> : <><img src={deadIcon} alt="dead"/> No</>}        
        </p> 
      </div> 
    </div>
  );
}

export default Detail;
