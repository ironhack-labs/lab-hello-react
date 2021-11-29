import './NavBar.css'
import logo from './images/ironhack-logo-xs.png'
import menuLogo from './images/menu-top-xs.png'



const NavBar = () => {
    return (
    <div className="navBar">
        <a href="./">
            <img src={logo} className="" alt="IronHack logo"/>
        </a>
        <a href="./">
            <img src={menuLogo} className="" alt="Menu logo"/>
        </a>
    </div>
    )
}

export default NavBar