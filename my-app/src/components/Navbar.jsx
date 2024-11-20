import React from "react";
import logoImage from "../images/logo.png";
import burgerImage from "../images/burger.png";

function Navbar() {
  return (
    <div className="header">
      <div className="header2">
        <nav className="navbar">
          <img src={logoImage} alt="ironhack logo" />
          <img src={burgerImage} alt="menu logo" />
        </nav>
        <div className="title">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,
            <br />
            and become a super Ninja developer.
          </p>
        </div>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Navbar;
