import ironhackLogo from "../images/ironhack-logo-xs.png";
import hamMenu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left">
          <img src={ironhackLogo} alt="logo" />
        </div>
        <div className="nav-right">
          <img src={hamMenu} alt="menu" />
        </div>
    </nav>
  );
}

export default Navbar;
