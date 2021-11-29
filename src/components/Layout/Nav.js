import React from "react";

//Importar imagenes
import logo from "../../image/ironhack-logo-xs.png";
import menu from "../../image/menu-top-xs.png";

function Nav() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="ironhack-logo-xs"></img>
      <img className="menu" src={menu} alt="menu-top-xs"></img>
    </nav>
  );
}

export default Nav;
