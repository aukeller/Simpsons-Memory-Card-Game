import React from "react";
import Card from "./Card";
import images from "../assets";

const CardContainer = () => {
  const createCards = () => {
    const cards = [];
    for (let character in images) {
      let card = (
        <Card key={character} character={character} image={images[character]} />
      );
      cards.push(card);
    }
    return cards;
  };

  return <div>{createCards()}</div>;
};

export default CardContainer;
