import logo from '../../assets/ironhack-logo-xs.png'
import menu from '../../assets/menu-top-xs.png'
const Navbar = () => {
    return(
        <nav>
            <div className='logo'>
                <img src={logo} alt="" />
                <img src={menu} alt="" />
            </div>
        </nav>
    )
}
export default Navbar;