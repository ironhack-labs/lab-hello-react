import React from "react";
import Cards from "../Main/Cards";
import declarative from "../../image/icon1.png";
import components from "../../image/icon2.png";
import singleWay from "../../image/icon3.png";
import jsx from "../../image/icon4.png";

function Section() {
  const cards = [
    {
      name: "Declarative",
      description: "React makes it painless to create interactive UIs.",
      image: { declarative },
    },
    {
      name: "Components",
      description: "Build encapsulated components that manage their state",
      image: { components },
    },
    {
      name: "Single-Way",
      description: "A set of immutable values are passed to the component's.",
      image: { singleWay },
    },
    {
      name: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
      image: { jsx },
    },
  ];
  return (
    <div className="section">
      {cards.map((e) => {
        return (
          <div className="cards-id">
            <Cards cardsObj={e} />
          </div>
        );
      })}
    </div>
  );
}

export default Section;
