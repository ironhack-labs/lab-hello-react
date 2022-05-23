import React from "react";
import imgLogo from "../assets/images/ironhack-logo-xs.png";
import imgMenu from "../assets/images/menu-top-xs.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

function Index() {
  return (
    <div className="indexBody">
      <div className="indexBackground">
        <div className="indexHeader">
          <img src={imgLogo} alt="logo" />

          <div className="imgMenu">
            <img src={imgMenu} alt="menu" />
          </div>

        </div>
        <div className="indexText">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja Developer.
          </p>
          <a href="https://react.org"><b>Awesome!</b></a>
        </div>
      </div>

      <div className="indexAllCards">
        <div className="indexCard">
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="indexCard">
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="indexCard">
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="indexCard">
          <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
