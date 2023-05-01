// 1. Create a function that returns HTML or JSX content
import ironhackLogo from "../images/ironhack-logo.png";
import menuLogo from "../images/menu-logo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <img id="nav-img" src={ironhackLogo} alt="ironhackLogo" />
        <img id="nav-img" src={menuLogo} alt="menuLogo" />
      </nav>
    </div>
  );
}

export default Navbar;
