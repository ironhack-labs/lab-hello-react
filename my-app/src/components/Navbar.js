import logo from "../images/ih-logo.png"
import menu from "../images/menu.png"

function Navbar() {
    return (
        <nav className="Nav">
            <img src={logo}
                alt="Logo" />
            <img src={menu}
                alt="Menu" />
        </nav>
    )
};
export default Navbar;