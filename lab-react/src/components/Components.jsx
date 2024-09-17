import React from "react";
import imageLogo from "../images/ironhack-logo-xs.png";
import imageMenu from "../images/menu-top-xs.png";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Components() {
  return (
    <div className="Body">
      <div className="TopBar" style={{ backgroundColor: "#2c364b" }}>
        <nav className="NavBar">
          <img src={imageLogo} alt="" />
          <div>
            <img src={imageMenu} alt="" />
          </div>
        </nav>
        <div className="Info">
          <h1 className="Title" style={{ color: "white" }}>
            Say hello to
            <br></br>ReactJs
          </h1>
          <p className="MainText" style={{ color: "white" }}>
            You will learn how to use 
            <br></br>the most popular frontend library, <br></br> and
            become a super Ninja developer{" "}
          </p>

          <a className="WhiteButton" href="#">
            Awesome!
          </a>
        </div>
      </div>

      <div className="BottomPart">
        <div className="eachCard">
          <img className="image" src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs </p>
        </div>
        <div className="eachCard">
          <img className="image" src={icon2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that mnage their state</p>
        </div>
        <div className="eachCard">
          <img className="image" src={icon3} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="eachCard">
          <img className="image" src={icon4} alt="" />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default Components;
