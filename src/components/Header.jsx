import './Header.css'
import logo from '../assets/ironhack_logo.png'
import menu from '../assets/two_lines.png'

function Header(){
    return(
        <div id="header-container">
            <img src={logo} alt="Ironhack Logo" className="logo" />
            <img src={menu} alt="Menu" className='logo' />
        </div>
    )
}

export default Header