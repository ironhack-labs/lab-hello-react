import ironhackLogo from '../../images/ironhack-logo-xs.png';
import menu from '../../images/menu-top-xs.png';
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <img src={ironhackLogo} alt="ironhack-logo" />
            <img src={menu} alt="menu-img" />
        </header>
    )
}

export default Header;