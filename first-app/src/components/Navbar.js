import logo from "./logo.png";
import menu from "./menu.png";

function Navbar() {
    return (
        <nav>
            <img src={logo} />
            <img src={menu} />
        </nav>
    );
}

export default Navbar;
