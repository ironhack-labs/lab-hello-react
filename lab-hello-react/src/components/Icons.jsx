import React from "react";
import Logo1 from "../assets/icon1.png";
import Logo2 from "../assets/icon2.png";
import Logo3 from "../assets/icon3.png";
import Logo4 from "../assets/icon4.png";

const Icons = () => {
  return (
    <div className="Icons">
      <div>
        <img src={Logo1} alt="logo1" />
        <h4>Declarative</h4>
        <p>
          React makes it <br />
          painless to create <br />
          interactive UIs.
        </p>
      </div>

      <div>
        <img src={Logo2} alt="logo1" />
        <h4>Components</h4>
        <p>
          Build encapsulated <br />
          components that <br />
          manage their state.
        </p>
      </div>

      <div>
        <img src={Logo3} alt="logo1" />
        <h4>Single-Way</h4>
        <p>
          A set of immutable <br />
          values are passed to <br />
          the component's
        </p>
      </div>

      <div>
        <img src={Logo4} alt="logo1" />
        <h4>JSX</h4>
        <p>
          Statically-typed, <br />
          designed to run on <br />
          modern browsers.
        </p>
      </div>
    </div>
  );
};

export default Icons;
