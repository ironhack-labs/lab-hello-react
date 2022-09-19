import IronhackLogo from '../../images/nav-logo.png';
import NavLogo from '../../images/nav-menu.png';
import './Header.css';

function Header(){
    return (
        <header>
            <img src={IronhackLogo} alt='ironhack_logo' />
            <img src={NavLogo} alt='nav_menu' />
        </header>
    )
}

export default Header;