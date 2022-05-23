import React from "react";
import Logo from "../assets/images/ironhack-logo-xs.png";
import Burger from "../assets/images/menu-top-xs.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <img className="ironhack-logo" src={Logo} alt="Logo" />
      <img id="burger" src={Burger} alt="Burger-Menu" />
    </div>
  );
}

export default Navbar;
