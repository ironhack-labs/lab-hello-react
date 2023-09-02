import React from "react";
import Icon from "./icon";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function IconSection() {
  return (
    <div className="iconSection">
      <Icon
        img={icon1}
        title={"Declarative"}
        text={"React makes it painless to create interactive UIs."}
      />
      <Icon
        img={icon2}
        title={"Components"}
        text={"Build encapsulated components that manage their state."}
      />
      <Icon
        img={icon3}
        title={"Single-Way"}
        text={"A set of immutable values are passed to the components."}
      />
      <Icon
        img={icon4}
        title={"JSX"}
        text={"Statically-typed, designed to run on the modern browsers."}
      />
    </div>
  );
}

export default IconSection;
