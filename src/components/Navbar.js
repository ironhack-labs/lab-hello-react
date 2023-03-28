import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

function Navbar() {
    return(
        <nav>
            <img src={logo} alt="logo"/>
            <img src={menu} alt="menu"/>
        </nav>
    )
}

export default Navbar;