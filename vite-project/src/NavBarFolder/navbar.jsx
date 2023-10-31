import IronhackLogo from "/src/assets/ironhack-logo-xs.png";
import MenuDrop from "/src/assets/menu-top-xs.png";

function NavBar(){
    return (
        <div className = "nav-bar">     
            <img src={IronhackLogo} alt="logo" />
            <img src={MenuDrop} alt="menudrop" />
        </div>
    )
}

export default NavBar;