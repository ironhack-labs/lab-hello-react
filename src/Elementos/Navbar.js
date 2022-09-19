import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png"

function Navbar() {
    return(
        <>
        <div className="fondo">
            <img src={logo} alt="ImgLogo"/>
            <img src={menu} alt="ImgMenu"/>
        </div>
        </>
    )
}

export default Navbar;