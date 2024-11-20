import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logoImage">
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <div className="menuImage">
        <a href="#">
          <img src={menu} className="menu" alt="menu" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
