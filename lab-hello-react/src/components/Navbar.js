import ironhackLogo from "../images/ironhack-logo-xs.png"
import menu         from "../images/menu-top-xs.png"

function Navbar() {
    return (
        <nav>
            <img
                id  = "nav-img"
                src = { ironhackLogo }
                alt = "Ironhack Logo"
            />
            <img
                id = "nav-menu"
                src = { menu }
                alt = "Navigation bar menu"
            />
        </nav>
    );
}

export default Navbar;