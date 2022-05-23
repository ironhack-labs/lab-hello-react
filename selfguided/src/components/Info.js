import React from "react";
import declarative from "../assets/images/ferramenta.png";
import components from "../assets/images/pc.png";
import singleWay from "../assets/images/fixo.png";
import JSX from "../assets/images/code.png";

function Info() {
  return (
    <div>
      <div>
        <img src={declarative} alt="logo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={components} alt="components icon" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={singleWay} alt="logo" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={JSX} alt="" />
        <h3>JSX</h3>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Info;
