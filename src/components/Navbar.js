import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
    return(
        <nav className="navbar">
            <Logo/>
            <Menu/>
        </nav>
    );
}



export default Navbar;