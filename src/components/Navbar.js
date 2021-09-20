import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

function Navbar() {
    return (
        <nav className="navbar header">
            <img id="logo" src={logo} alt="logo" />
            <img id="menu" src={menu} alt="menu" />
        </nav>

    );
  }
  
  export default Navbar;