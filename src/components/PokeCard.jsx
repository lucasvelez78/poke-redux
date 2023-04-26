import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokeCard = ({ name, image, types }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt="Pokemon" />}
      extra={<StarOutlined />}
    >
      <Meta description={types.map((type) => `${type.type.name} • `)} />
    </Card>
  );
};

export default PokeCard;
