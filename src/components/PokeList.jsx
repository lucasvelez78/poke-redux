import React from "react";
import PokeCard from "./PokeCard";
import "./PokeList.css";

const PokeList = ({ pokemons }) => {
  return (
    <div className="pokeList">
      {pokemons.map((poke) => (
        <PokeCard name={poke.name} key={poke.name} />
      ))}
    </div>
  );
};

export default PokeList;
