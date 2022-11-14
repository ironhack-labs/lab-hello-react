import React from "react";
import logoImage from "../images/logo.png";
import burgerImage from "../images/burger.png";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <img src={logoImage} alt="ironhack logo" />
        <img src={burgerImage} alt="menu logo" />
      </nav>

      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>

      <button>Awesome!</button>
    </div>
  );
}

export default Navbar;
