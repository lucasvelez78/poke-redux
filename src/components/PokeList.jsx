import React from "react";
import PokeCard from "./PokeCard";
import "./PokeList.css";

const PokeList = ({ pokemons }) => {
  return (
    <div className="pokeList">
      {pokemons.map((poke) => (
        <PokeCard
          name={poke.name}
          key={poke.name}
          image={poke.sprites.other["official-artwork"].front_default}
          types={poke.types}
          id={poke.id}
          favorite={poke.favorite}
        />
      ))}
    </div>
  );
};

export default PokeList;
