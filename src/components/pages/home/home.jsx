import { useState, useEffect } from "react";
import "./home.css";
import Card from "../../card/card";
import NameFilter from "../../name-filter/name-filter";
import SelectFilter from "../../select-filter/select-filter";
import Header from "../../header/header";

function Home() {
  // Estados
  const [characters, setCharacters] = useState([]); 
  const [textFilter, setTextFilter] = useState("");
  const [houseFilter,setHouseFilter] = useState("gryffindor");

  
  const fetchCharacters = () => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
      .then((response) => response.json())

      .then((dataResponse) => {
        
        setCharacters(dataResponse);

      })
      .catch (error => console.error("Error fetching data: ", error))
    }

  useEffect(() => {
    fetchCharacters();
  }, [characters]); // Dependencias vacías para ejecutar solo en el montaje

  const handleNameFilterChange = (e) => {
    setTextFilter(e.target.value.toLowerCase());
  };
  const handleHouseFilterChange = (e) => {
    setHouseFilter(e.target.value.toLowerCase());
  };

  // Filtrado de personajes. Esta lógica ya maneja correctamente los arrays vacíos.
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(textFilter)
  );

  return (
    <div className="App">

     <Header />
      <div className="filter-section">
       <NameFilter handleFilterChange={handleNameFilterChange}/>
       <SelectFilter selectedHouse={houseFilter} onHouseChange={handleHouseFilterChange}/>
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
            <p>No characters found {textFilter}.</p> // Maneja el caso de no encontrar personajes
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
