import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'
import '../App.css'

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <img src={menu} alt="menu" />
        </nav>
    )
}

export default NavBar