import Logo from '../assets/ironhack-logo-xs.png'
import Menu from '../assets/menu-top-xs.png'
function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li><img src={Logo} alt="logo" /></li>
                <li><img src={Menu} alt="menu" /> </li>
            </ul>
        </nav>
    )
}
export default Navbar