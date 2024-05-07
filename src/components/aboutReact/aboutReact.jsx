import React from "react";
import "./aboutReact.css";
import Declarative from "../aboutReact/Declarative/Declarative";
import Components from "../aboutReact/Components/Components";
import SingleWay from "./Single-way/SingleWay";
import JSX from "../aboutReact/JSX/JSX";

function AboutReact() {
  return (
    <>
      <section id="aboutReact">
        <Declarative />
        <Components />
        <SingleWay />
        <JSX />
      </section>
    </>
  );
}

export default AboutReact; // export Header component to use
