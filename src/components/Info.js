import React from "react";
import Card from "./Card";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Info() {
  const cards = [
    {
      image: icon1,
      title: "Declarative",
      text: "React makes it painless to create interactive UIs",
    },
    {
      image: icon2,
      title: "Components",
      text: "Build encapsulated components that manage their state.",
    },
    {
      image: icon3,
      title: "Single-Way",
      text: "A set of inmutable values are passed",
    },
    {
      image: icon4,
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <section className="info-section">
      {cards.map((card) => {
        return <Card img={card.image} text={card.text} title={card.title} />;
      })}
    </section>
  );
}

export default Info;
