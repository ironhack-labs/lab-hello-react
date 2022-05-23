import React from "react";
import declarative from "../assets/images/image3.png";
import components from "../assets/images/image4.png";
import singleWay from "../assets/images/image5.png";
import JSX from "../assets/images/image6.png";

function Cards() {
  return (
    <div className="all-cards">
      <div className="card">
        <img className="card-img" src={declarative} alt="declarative-img" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="card">
        <img className="card-img" src={components} alt="components-img" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img className="card-img" src={singleWay} alt="singleWay-img" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="card">
        <img className="card-img" src={JSX} alt="JSX-img" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Cards;
