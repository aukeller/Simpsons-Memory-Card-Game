import React, { useEffect, useState } from "react";
import Card from "./Card";
import images from "../assets";
import _ from "lodash";
import styles from "../styles/CardContainer.module.css";

const CardContainer = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
    setCards(_.shuffle(cards));
  }, [props.cardClick]);

  return <div className={styles.container}>{cards}</div>;
};

export default CardContainer;
