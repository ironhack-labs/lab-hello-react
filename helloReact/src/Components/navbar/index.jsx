import ironhackLogo from "../../assets/ironhack-logo-xs.png"
import menuBar  from "../../assets/menu-top-xs.png"
import '../../App.css'

function Navbar(){
    return(
        <div id="nav-bar">
            <img src={ironhackLogo} alt="Ironhack Logo"/>
            <img src={menuBar} alt="Ironhack Logo"/>
        </div>
    )
}

export default Navbar;