import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="ironhack-logo" />
      <img src={menu} alt="top-menu" />
    </div>
  );
}

export default Navbar;
