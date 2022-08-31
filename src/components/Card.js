import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.character} />
      <span>{props.character}</span>
    </div>
  );
};

export default Card;
