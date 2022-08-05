import "./Nav.css";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Nav() {
  return (
    <nav>
      <img src={logo} />
      <img src={menu} />
    </nav>
  );
}

export default Nav;
