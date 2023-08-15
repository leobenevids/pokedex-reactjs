import React from "react";
import { CardContainer, Details } from "./styles";

const Card = ({ id, image, name, type, _callback }) => {
  return (
    <CardContainer type={type}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <Details>
        <h2>{name}</h2>
        <small>Type: {type}</small>
      </Details>
    </CardContainer>
  );
};

export default Card;
