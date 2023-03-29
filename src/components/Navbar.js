 
import Logo from '../images/ironhack-logo-xs.png'
import Menu from '../images/menu-top-xs.png'

function Navbar() {
    return (
     <nav class="d-flex justify-content-between container">
        <img class="mt-3 img1"src={Logo} alt="logo" />
        <img class="mt-4 img2" src={Menu} alt = "menu"/>
     </nav>
    );
  }
   
  // To make the component available, we have to export it
  export default Navbar;