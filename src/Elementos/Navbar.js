import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png"

function Navbar() {
    return(
        <>
        <div className="nav">
            <img src={logo} alt="ImgLogo" className="img"/>
            <img src={menu} alt="ImgMenu"className="img"/>
        </div>
        </>
    )
}

export default Navbar;