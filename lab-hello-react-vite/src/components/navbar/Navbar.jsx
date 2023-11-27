import "./style.css";
import ironHackLogo from "/src/assets/ironhack-logo-xs.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img id="navbar-logo" src={ironHackLogo} alt="Ironhack Logo" />
        <img
          id="navbar-hamburger"
          src="./src/assets/menu-top-xs.png"
          alt="Hamburger Menu Icon"
        />
      </nav>
    </>
  );
}

export default Navbar;
