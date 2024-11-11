import React from "react";
import logo from "../assets/IronhackLogoSmall.png";
import menu from "../assets/Menu.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
};

export default Navbar;
