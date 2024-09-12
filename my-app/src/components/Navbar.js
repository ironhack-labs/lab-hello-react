import logo from "../images/ironhack-logo-xs.png";
import topMenu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav>
      <a href="https://ironhack.com">
        <img src={logo} alt="ironhack logo" />
      </a>
      <a href="#">
        <img src={topMenu} alt="ironhack logo" />
      </a>
    </nav>
  );
}

export default Navbar;
