import React from "react";
import Img1 from "../assets/Icon.png";
import Img2 from "../assets/Icon2.png";
import Img3 from "../assets/Icon3.png";
import Img4 from "../assets/Icon4.png";

const Services = () => {
  return (
    <div className="services">
      <article>
        <img src={Img2} alt="Icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive Uls.</p>
      </article>
      <article>
        <img src={Img1} alt="Icon2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src={Img3} alt="Icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </article>
      <article>
        <img src={Img4} alt="Icon4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </div>
  );
};

export default Services;
