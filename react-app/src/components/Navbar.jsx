import Logo from '../assets/ironhack-logo-xs.png'
import Menu from '../assets/menu-top-xs.png'


function Navbar() {
    return (
      <nav className="navbar">
        <img id='logo' src={Logo} alt="ironhack_logo" />
        <img id='menu' src={Menu} alt="menu_icon" />
      </nav>
    );
  }
  
  export default Navbar;