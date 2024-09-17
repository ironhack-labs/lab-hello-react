import logo from  '../images/ironhack-logo-xs.png'
import menuTop from '../images/menu-top-xs.png'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={logo} alt="ironhack logo"/>
      <img src={menuTop} alt="menu top"/>
    </nav>
  );
}

export default Navbar;