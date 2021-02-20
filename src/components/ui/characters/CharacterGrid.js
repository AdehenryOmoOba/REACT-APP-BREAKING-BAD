import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from ".././Spinner";

const CharacterGrid = ({ isLoading, items }) => {
  if (!isLoading) {
    return (
      <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item} />
        ))}
      </section>
    );
  } else {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
};

export default CharacterGrid;
