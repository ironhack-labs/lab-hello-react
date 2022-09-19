import React from "react";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Nav() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Ironhack Logo" />
      </div>
      <div>
        <img src={menu} alt="Menu" />
      </div>
    </nav>
  );
}

export default Nav;
