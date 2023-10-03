import IronhackLogo from "/src/assets/ironhack-logo.png";
import BurgerMenu from "/src/assets/iron-burger-menu.png";

function Navbar() {
    return(
        <nav>
            <img src={IronhackLogo} alt= 'ironhack logo'/>
            <img src={BurgerMenu} alt='burger menu'/>
        </nav>
    )
}

export default Navbar;