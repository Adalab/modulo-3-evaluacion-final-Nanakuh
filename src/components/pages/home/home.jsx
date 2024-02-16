import { useState, useEffect } from "react";
import "./home.css";
import Card from "../../card/card";
import NameFilter from "../../name-filter/name-filter";

function Home() {
  // Estados
  const [characters, setCharacters] = useState([]); 
  const [textFilter, setTextFilter] = useState("");

  
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
    setTextFilter(e.target.value.toLowerCase());
  };

  // Filtrado de personajes. Esta lógica ya maneja correctamente los arrays vacíos.
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(textFilter)
  );

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <div className="filter-section">
       <NameFilter handleFilterChange={handleFilterChange}/>
      </div>
      {characters.length === 0 ? (
        <p>Loading characters...</p>
      ) : (
        <div className="character-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <Card id={character.id}
                key={character.id}
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
