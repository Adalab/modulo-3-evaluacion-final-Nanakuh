import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";


function Detail() {
  const { id } = useParams();

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
      <div className="character-header">
        <img
          src={`./${character.house}.jpg`}
          alt="Hogwarts Logo"
          className="hogwarts-logo"
        />
      </div>
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>
          <strong>Especie:</strong> {character.species}
        </p>
        <p>
          <strong>Género:</strong> {character.gender}
        </p>
        <p>
          <strong>Casa:</strong> {character.house}
        </p>
        <p>
          <strong>Fecha de Nacimiento:</strong> {character.dateOfBirth}
        </p>
        <p>
          <strong>Mago:</strong> {character.wizard ? "Sí" : "No"}
        </p>
        <p>
          <strong>Ancestry:</strong> {character.ancestry}
        </p>
        <p>
          <strong>Color de Ojos:</strong> {character.eyeColour}
        </p>
        <p>
          <strong>Color de Cabello:</strong> {character.hairColour}
        </p>
        <p>
          <strong>Patronus:</strong> {character.patronus}
        </p>
        <p>
          <strong>Estudiante de Hogwarts:</strong>{" "}
          {character.hogwartsStudent ? "Sí" : "No"}
        </p>
        <p>
          <strong>Staff de Hogwarts:</strong>{" "}
          {character.hogwartsStaff ? "Sí" : "No"}
        </p>
        <p>
          <strong>Actor:</strong> {character.actor}
        </p>
        <p>
          <strong>Vivo:</strong> {character.alive ? "Sí" : "No"}
        </p>
      </div>
    </div>
  );
}

export default Detail;
