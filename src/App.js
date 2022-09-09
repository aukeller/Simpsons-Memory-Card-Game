import React, { useState } from "react";

import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer";

import styles from "./styles/App.module.css";

function App() {
  const [score, setScore] = useState(0);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  const cardClick = (e) => {
    let card = e.currentTarget;

    if (clickedCharacters.includes(card.id)) {
      setClickedCharacters([]);
      setScore(0);
    } else {
      setClickedCharacters([...clickedCharacters, card.id]);
      setScore(score + 1);
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <Header />
        <Scoreboard score={score} />
      </div>
      <CardContainer cardClick={cardClick} />
    </div>
  );
}

export default App;
