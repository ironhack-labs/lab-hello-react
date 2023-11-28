import imageLogo from "../../assets/ironhack-logo-xs.png";
import burgerMenu from "../../assets/menu-top-xs.png";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={imageLogo} alt="Company Logo" className="company-logo" />
            <img src={burgerMenu} alt="Burger Menu" className="burger-menu" />
        </nav>
    )
}

export default Navbar;