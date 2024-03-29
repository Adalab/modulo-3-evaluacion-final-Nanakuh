import { useState, useEffect } from "react";
import "./home.css";
import Card from "../../card/card";
import NameFilter from "../../name-filter/name-filter";
import SelectFilter from "../../select-filter/select-filter";
import Header from "../../header/header";
import Footer from "../../footer/footer";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("gryffindor");

  const fetchCharacters = () => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
      .then((response) => response.json())

      .then((dataResponse) => {
        dataResponse.sort((a, b)=> a.name.localeCompare(b.name));
        setCharacters(dataResponse);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchCharacters();
  }, [characters]);

  const handleNameFilterChange = (e) => {
    setTextFilter(e.target.value.toLowerCase());
  };
  const handleHouseFilterChange = (e) => {
    setHouseFilter(e.target.value.toLowerCase());
  };

  // Filtrado de personajes
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(textFilter)
  );

  return (
    <div className="App">
      <Header />
      <div className="filter-section">
        <NameFilter
          handleFilterChange={handleNameFilterChange}
          textFilter={textFilter}
        />
        <SelectFilter
          selectedHouse={houseFilter}
          onHouseChange={handleHouseFilterChange}
        />
      </div>
      {characters.length === 0 ? (
        <p>Loading characters...</p>
      ) : (
        <div className="character-list">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <Card
                id={character.id}
                key={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
              />
            ))
          ) : (
            <p>There is no character that matches {textFilter}.</p>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
