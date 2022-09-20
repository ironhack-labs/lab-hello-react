import IronhackLogo from '../Images/ironhack_logo.png';
import HamburgerLogo from '../Images/hamburger_logo.png';


function Header(){
    return (
        <header>
        <img src={IronhackLogo} alt="ironhack_logo" />
        <img src={HamburgerLogo} alt="hamburger_logo" />
        
        </header>
    );
}

export default Header;