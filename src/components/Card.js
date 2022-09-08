import React, { useRef } from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  const specialClass = useRef(false);

  if (props.character === "Burns" || props.character === "Abe") {
    specialClass.current = true;
  }

  return (
    <div className={styles.card} onClick={props.cardClick}>
      <img
        className={`${styles.image} ${
          specialClass.current ? styles.special : ""
        }`}
        src={props.image}
        alt={props.character}
      />
      <div className={styles.name}>
        <span>{props.character}</span>
      </div>
    </div>
  );
};

export default Card;
