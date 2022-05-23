import React from "react";
import Icon1 from "./assets/images/icon1.png";
import Icon2 from "./assets/images/icon2.png";
import Icon3 from "./assets/images/icon3.png";
import Icon4 from "./assets/images/icon4.png";

function List() {
  return (
    <div className="whitediv">
      <div className="boximg">
        <img className="image" src={Icon1} alt="icon1" />
        <h5>Declarative</h5>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="boximg">
        <img className="image" src={Icon2} alt="icon2" />
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="boximg">
        <img className="image" src={Icon3} alt="icon3" />
        <h5>Single-way</h5>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="boximg">
        <img className="image" src={Icon4} alt="icon4" />
        <h5>JSX</h5>
        <p>Statically typed designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default List;
