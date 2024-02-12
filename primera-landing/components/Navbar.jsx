import Logo from "../src/assets/ironhack-logo-xs.png"
import Menu from "../src/assets/menu-top-xs.png"

function Navbar() {
    return(
        <nav className="header">
            <img src = {Logo} alt="logo" />
            <img id="menu" src= {Menu} alt="menu" />
        </nav>
    )
}

export default Navbar