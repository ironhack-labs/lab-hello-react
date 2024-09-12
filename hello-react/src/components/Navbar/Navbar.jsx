import Logo from "../../images/ironhack-logo-xs.png"
import MenuTop from "../../images/menu-top-xs.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="dark-background">
            <img src={Logo} alt="logo" />
            <img src={MenuTop} alt="menu-top" />
        </nav>
    )
}
export default Navbar;