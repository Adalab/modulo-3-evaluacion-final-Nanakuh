import { useState, useEffect } from "react";
import "./home.css";
import Card from "../../card/card";

function Home() {
  // Estados
  const [characters, setCharacters] = useState([]); 
  const [filter, setFilter] = useState("");

  
  const fetchCharacters = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())

      .then((dataResponse) => {
        
        setCharacters(dataResponse);

      })
      .catch (error => console.error("Error fetching data: ", error))
    }

  useEffect(() => {
    fetchCharacters();
  }, []); // Dependencias vacías para ejecutar solo en el montaje

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  // Filtrado de personajes. Esta lógica ya maneja correctamente los arrays vacíos.
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filter)
  );

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by name..."
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>
      {characters.length === 0 ? (
        <p>Loading characters...</p>
      ) : (
        <div className="character-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <Card
                key={character.name}
                image={character.image}
                name={character.name}
                species={character.species}
              />
            ))
          ) : (
            <p>No characters found.</p> // Maneja el caso de no encontrar personajes
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
