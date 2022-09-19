import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
