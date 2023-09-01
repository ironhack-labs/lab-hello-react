import logo from '../../assets/ironhack-logo-xs.png';
import menu from '../../assets/menu-top-xs.png';
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src={logo} alt="Logo" />
                <img src={menu} alt="Menú" />
            </div>
        </nav>
    )
}

export default Navbar