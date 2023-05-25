import IronhackLogo from "../images/ironhack-logo-xs.png";
import Menu from "../images/menu-top-xs.png";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src={IronhackLogo} alt="Ironhack-logo" />
      <img id="menu" src={Menu} alt="Menu-icon" />
    </div>
  );
}

export default NavBar;
