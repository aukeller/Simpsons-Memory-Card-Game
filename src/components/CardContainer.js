import React from "react";
import Card from "./Card";
import images from "../assets";
import _ from "lodash";
import styles from "../styles/CardContainer.module.css";

const CardContainer = (props) => {
  const createCards = () => {
    const cards = [];
    for (let character in images) {
      let card = (
        <Card
          cardClick={props.cardClick}
          key={character}
          character={character}
          image={images[character]}
        />
      );
      cards.push(card);
    }
    return _.shuffle(cards);
  };

  return <div className={styles.container}>{createCards()}</div>;
};

export default CardContainer;
