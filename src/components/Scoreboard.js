import React from "react";

const Scoreboard = (props) => {
  return (
    <div>
      <div>Score: {props.score}</div>
      <div>Best Score: 0 </div>
    </div>
  );
};

export default Scoreboard;
