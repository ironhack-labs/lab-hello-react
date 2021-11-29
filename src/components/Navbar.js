import logo from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png";

function Navbar() {
    return (
      <nav className="nav-menu">
        <img src={logo} alt=""/>
        <img src={menuIcon} alt="" height="15px"/>
      </nav>
    );
  }
  
  // 2. Export the function:
  export default Navbar;