import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/ui/characters/CharacterGrid";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const data = await response.json();
      // console.log(data);
      setItems(data);
      setIsLoading(false);
    };

    getCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <div className="searc-box">
        <Search getQuery={(event) => setQuery(event)} />
      </div>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
