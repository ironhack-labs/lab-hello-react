import React from "react";
import Card from "../Card";
import Header from "../Header";
//importar imagenes
import logo1 from "./../../images/icon1.png";
import logo2 from "./../../images/icon2.png";
import logo3 from "./../../images/icon3.png";
import logo4 from "./../../images/icon4.png";

export default function Main() {
  const title = "Say hello to ReactJS";
  const subtitle =
    "You will learn how to use the most popular frontend library, and become a super Ninja developer";
  const button = "Awesome!";

  //Data
  const cardList = [
    {
      image: logo1,
      title: "Declarative",
      description: "React makes it painless to create interactive Uls",
    },
    {
      image: logo2,
      title: "Components",
      description: "Build encapsulated components that manager their state",
    },
    {
      image: logo3,
      title: "Single-Way",
      description: "A set inmmutable values are passed to the component's",
    },
    {
      image: logo4,
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
    },
  ];
  return (
    <>
      <div className="main">
        <Header />
        <div className="description">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>{button}</button>
        </div>
      </div>
      <div className="container">
        <Card cards={cardList} />
      </div>
    </>
  );
}
