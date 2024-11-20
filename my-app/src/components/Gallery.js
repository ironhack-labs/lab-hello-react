import React, { Component } from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

class Gallery extends Component {
  render() {
    return (
      <section>
        <div>
          <img src={icon1} alt="Icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create Interactive UIs</p>
        </div>

        <div>
          <img src={icon2} alt="Icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src={icon3} alt="Icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>

        <div>
          <img src={icon4} alt="Icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </section>
    );
  }
}

export default Gallery;
