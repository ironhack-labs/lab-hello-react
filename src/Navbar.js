import menuToggleImg from "./images/menu-top-xs.png";
import ironLogo from "./images/ironhack-logo-xs.png";

function Navbar() {
  return (
    <nav>
      <img className="logo" src={ironLogo} alt="logo"></img>
      <img className="toggle" src={menuToggleImg} alt="toggle"></img>
    </nav>
  );
}

export default Navbar;
