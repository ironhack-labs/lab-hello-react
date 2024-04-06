import logo from '../assets/logo.png';
import menu from '../assets/menu-top.png'

function Navbar () {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <img src={menu} alt="menu"/>
        </div>
    )
}
export default Navbar