import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Nav (){
    return (
        <nav className="nav"><img src={logo} alt='logo' /><img src={menu} alt='menu' /></nav>
      )
}

export default Nav