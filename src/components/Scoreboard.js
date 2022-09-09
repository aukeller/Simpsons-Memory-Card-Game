import React, { useEffect, useState } from "react";

const Scoreboard = (props) => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (props.score > highScore) {
      setHighScore(props.score);
    }
  }, [props.score, highScore]);

  return (
    <div>
      <div>Score: {props.score}</div>
      <div>Best Score: {highScore} </div>
    </div>
  );
};

export default Scoreboard;
