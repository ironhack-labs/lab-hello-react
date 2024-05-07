import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="Nav">
      <div>
        <img src="/src/assets/ironhack-logo-xs-dark.png" alt="Iron Hack Logo" />
      </div>
      <div>
        <img src="/src/assets/menu-top-xs-dark.png" alt="Menu" />
      </div>
    </nav>
  );
}

export default NavBar; // export NavBar component to use
