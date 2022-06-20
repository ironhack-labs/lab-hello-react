import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import Articles from "./Articles";

const Features = () => {
  return (
    <section className="features">
      <Articles
        img={icon1}
        title="Declarative"
        text="React make it painless to create interactive UIs."
      />
      <Articles
        img={icon2}
        title="Components"
        text="Build encapsulated components that manage their state."
      />
      <Articles
        img={icon3}
        title="Single-Way"
        text="A set of immutable values are passed to the component's."
      />
      <Articles
        img={icon4}
        title="Declarative"
        text="Statically-typed, designed to run on modern browers"
      />
    </section>
  );
};

export default Features;
