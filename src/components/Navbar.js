//importing Styles
import "./Navbar.css"
// Create Function
import IronhackFoto from "./ironhack.png"
import NavbarFoto from "./navbar.png"
function Navbar() {
    return(
        <div className="Navigate">
          <div>
            <img className="Nav-image-size" src={IronhackFoto} alt="IronHack" />
            </div>
                <div>
                <img className="Nav-image-size" src={NavbarFoto} alt="FotoNavbar" />
            </div>
        </div> 
    )
}

export default Navbar;