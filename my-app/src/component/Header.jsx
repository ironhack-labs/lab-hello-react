import IronhackLogo from "../images/logo.png";
import Menu from "../images/menu.png";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <img id="logo" src={IronhackLogo} alt="Ironhack-logo" />
      <img id="menu" src={Menu} alt="Menu-icon" />
    </div>
  );
}

export default Header;