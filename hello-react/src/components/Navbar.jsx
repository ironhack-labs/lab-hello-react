import logo from "../assets/ironhack-logo-xs.png";
import hamburger from "../assets/menu-top-xs.png";

// 1. Create a function that returns HTML or JSX content
function Navbar() {
  return (
    <nav>
      <img id="nav-logo" src={logo} alt="logo" />

      <img id="nav-hamburger" src={hamburger} alt="hamburger" />
    </nav>
  );
}

// 2. Export the function:
export default Navbar;
