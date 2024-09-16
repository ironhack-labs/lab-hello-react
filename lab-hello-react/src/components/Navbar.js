import logo from "../images/ironhack-logo-xs.png"
import menubars from "../images/menu-top-xs.png"


function Navbar(){
    return(
    <div class="barras">
       <img src={logo} alt="icon"/>
       <img src={menubars} alt="navbar"/>
     
    </div>)
}

export default Navbar;