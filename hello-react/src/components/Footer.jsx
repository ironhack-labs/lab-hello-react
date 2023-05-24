import React from "react";
import icon1 from "../images/Icon_1.png";
import icon2 from "../images/Icon_2.png";
import icon3 from "../images/Icon_3.png";
import icon4 from "../images/Icon_4.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="singleItem">
        <img src={icon1} alt="icon1" />
        <h3>Declarative</h3>
        <p className="black">React makes it painless to create interactive UIs.</p>
      </div>
      <div className="singleItem">
        <img src={icon2} alt="icon2" />
        <h3>Components</h3>
        <p className="black">Build encapsulated components that manage their state.</p>
      </div>
      <div className="singleItem">
        <img src={icon3} alt="icon3" />
        <h3>Single-Way</h3>
        <p className="black">A set of immutable values are passed to the component's.</p>
      </div>
      <div className="singleItem">
        <img src={icon4} alt="icon4" />
        <h3>JSX</h3>
        <p className="black">Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Footer;
