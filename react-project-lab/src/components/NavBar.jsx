import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"


function NavBar(){
    return(
        <div class="navBar">
          <img class="imgNav" src={logo} alt="ironhack-logo" />
          <img class="imgNav2" src={menu} alt="ironhack-logo" />
        </div>
    )
}



export default NavBar;