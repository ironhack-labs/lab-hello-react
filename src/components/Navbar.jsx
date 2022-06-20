import React from "react";
import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuImg from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <nav>
      <img src={ironhackLogo} alt="Ironhack Logo" className="img"></img>
      <img src={menuImg} alt="Menu bars" className="img"></img>
    </nav>
  );
};

export default Navbar;
