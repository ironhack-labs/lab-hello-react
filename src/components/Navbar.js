import ironhackLogo from "../images/ironhack-logo.png";
import menuIcon from "../images/menu-icon.png";

function Navbar (){
    return (
        <nav className="navbar">
            <img src={ironhackLogo} alt="ironhack-logo" />
            <img src={menuIcon}  alt="menu-icon"/>
        </nav>
    );
}

export default Navbar;