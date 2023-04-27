import React from "react";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const PokeCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const handleIsFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt="Pokemon" />}
      extra={<StarButton onClick={handleIsFavorite} isFavorite={favorite} />}
    >
      <Meta
        description={types.map((type) => `${type.type.name}`).join(" • ")}
      />
    </Card>
  );
};

export default PokeCard;
