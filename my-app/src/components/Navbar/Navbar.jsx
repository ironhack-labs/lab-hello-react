import Logo from "../../images/ironhack-logo-xs.png"
import Menu from "../../images/menu-top-xs.png"

function Navbar() {
    return (
      <nav>
        <img
          id="nav-img"
          src={Logo}
          alt="logo"
        />
        <img
          id="menu-img"
          src={Menu}
          alt="menu"
        />
      </nav>
    );
  }
  
  export default Navbar;