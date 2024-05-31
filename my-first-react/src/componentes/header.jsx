import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

function Header(){
    return(
        <header className="Header">
            <img src={logo} alt="logo"></img>
            <img src={menu} alt="menu" className="menu-icon" />
        </header>
        
    )
}
export default Header;