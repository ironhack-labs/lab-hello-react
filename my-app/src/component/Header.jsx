import IronhackLogo from "../images/logo.png";
import Menu from "../images/menu.png";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <h1>Say Hello to React.js</h1>
      <img src={IronhackLogo} alt="Ironhack-logo" />
      <img id="menu" src={Menu} alt="Menu-icon" />
    </div>
  );
}

export default Header;