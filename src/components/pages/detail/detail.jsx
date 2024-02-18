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
      <Link to="/" className="return-button">BACK</Link>
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
        <div className="member-data">
        <p>
          <strong className="title">Species:</strong> {character.species}
        </p>
        <p>
          <strong className="title">Gender:</strong> {character.gender}
        </p>
        <p>
          <strong className="title">House:</strong> {character.house}
        </p>
      
        <p>
          <strong className="title">Wizard:</strong> {character.wizard ? "Sí" : "No"}
        </p>
        <p>
          <strong className="title">Ancestry:</strong> {character.ancestry}
        </p>
        
        <p>
          <strong className="title">Patronus:</strong> {character.patronus}
        </p>
        <p>
          <strong className="title">Hogwarts student:</strong>{" "}
          {character.hogwartsStudent ? "Sí" : "No"}
        </p>
        <p>
          <strong className="title">Hogwarts staff:</strong>{" "}
          {character.hogwartsStaff ? "Sí" : "No"}
        </p>      
        <p>
        <strong className="title">Alive:</strong> {character.alive ? <><img className="alive-icon" src={aliveIcon} alt="alive"/> Sí</> : <><img className="alive-icon" src={deadIcon} alt="dead"/> No</>}        
        </p> 
        <p>
          <strong className="title">Actor:</strong> {character.actor}
        </p>
        </div>
      </div> 
    </div>
  );
}

export default Detail;
