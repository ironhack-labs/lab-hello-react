import React from "react";
import logo from "../images/ironhack-logo-xs.png";
import menuLogo from "../images/menu-top-xs.png";

function Header() {
  return (
    <div className="header-main">
      {/* logo & menu */}
      <div className="logo-menu">
        <img src={logo} alt="logo" />
        <img src={menuLogo} alt="menu logo" id="menu-logo" />
      </div>

      {/* header text */}
      <div className="banner-text">
        <h1>Say hello to</h1>
        <h1>ReactJs</h1>

        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
      </div>

      {/* button */}
      <button id="awe-button">Awesome!</button>
    </div>
  );
}

export default Header;
