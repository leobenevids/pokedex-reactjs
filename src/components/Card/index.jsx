import React from "react";
import { CardContainer, Details } from "./styles";

const Card = ({ id, image, name, types }) => {
  const type1 = types[0].type.name
  const type2 = types[1] && types[1].type.name
  return (
    <CardContainer type1={type1} type2={type2}>
      <div className="number">
        <small>{id/100 < 1 ? `#0${id}` : `#${id}`}</small>
      </div>
      <img src={image} alt={name} />
      <Details>
        <h2>{name}</h2>
        <small>{type1}{type2 && `/${type2}`}</small>
      </Details>
    </CardContainer>
  );
};

export default Card;
