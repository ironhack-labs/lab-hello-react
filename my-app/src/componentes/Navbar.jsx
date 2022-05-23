import React from "react";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
function Navbar(props) {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={hamburger} alt="" />
    </div>
  );
}

export default Navbar;
