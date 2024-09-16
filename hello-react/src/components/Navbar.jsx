import imgLogo from "../assets/ironhack-logo.png";
import imgMenu from "../assets/menu-top.png";

function Navbar() {
  return (
    <nav id="navbar">
      <img src={imgLogo} alt="logo" className="logo" />
      <img src={imgMenu} alt="menu" className="menu" />
    </nav>
  );
}

export default Navbar;
