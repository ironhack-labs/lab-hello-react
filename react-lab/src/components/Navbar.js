import logo from "../images/logo.png"
import menu from "../images/menu.png"

function Navbar(){
    return(
  <nav className="top-nav">
    <img id="nav-logo" src={logo} alt="logo"/>
    <img id="menu-bttn" src={menu} alt="menu"/>
  </nav>
 )
}

export default Navbar;