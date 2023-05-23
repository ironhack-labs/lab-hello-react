import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav className="Menu">
      <img src={logo} alt="Logo" />
      <img src={menu} alt="Menu" />
    </nav>
  );
}

export default Navbar;
