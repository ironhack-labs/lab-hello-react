import React from "react";
import ferramenta from "../images/ferramenta.png";
import caneta from "../images/canet.png";
import ecra from "../images/ecra.png";
import papel from "../images/paper.png";

function Lastcomponent() {
  return (
    <div>
      <div>
        <img src={ferramenta} alt="" />
        <h1>Declarative</h1>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div>
        <img src={caneta} alt="" />
        <h1>Components</h1>
        <p>Build encapsulated components that build their state</p>
      </div>
      <div>
        <img src={ecra} alt="" />
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div>
        <img src={papel} alt="" />
        <h1>JSX</h1>
        <p>Staticly typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
}

export default Lastcomponent;
