import logo from '../images/ironhack-logo-xs.png';
import menuIcon from '../images/menu-top-xs.png';

function NavBar() {
    return(
        <nav>
            <ul>
                <li><img src={ logo } alt='logo' /></li>
                <li><img src={ menuIcon } alt='menu' /></li>
            </ul>
        </nav>
    );
}

export default NavBar;