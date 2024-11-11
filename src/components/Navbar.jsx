import "../App.css";

import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";


function Navbar() {
  return (
    <nav className="navbar">
    <img src={logo} className="logo"  />
    <img src={menu} className="menu-icon" />
    </nav>
  );
}

export default Navbar;