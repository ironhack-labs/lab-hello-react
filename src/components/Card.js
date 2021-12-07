import React from "react";

export default function Card(props) {
  const cards = props.cards;

  return (
    <>
      {cards.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}
