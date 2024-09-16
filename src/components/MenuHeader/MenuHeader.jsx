import Logo from '../../images/ironhack_logo.png';
import MenuIcon from '../../images/icon_menu.png';


function MenuHeader() {
    return(
        <nav>
            <img src={Logo} alt="Ironhack logo" />
            <img src={MenuIcon} alt="menu icon" />
        </nav>
    )
}

export default MenuHeader;