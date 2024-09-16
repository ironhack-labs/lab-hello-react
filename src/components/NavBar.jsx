import logoIron from "../assets/ironhack-logo-xs.png"
import menuIcon from "../assets/menu-top-xs.png"

function NavBar(){
    return(
        <div id="nav-bar">
            <img src={logoIron} alt="ironhack logo" />
            <img src={menuIcon} alt="menu icon" />
        </div>
    );
}

export default NavBar;