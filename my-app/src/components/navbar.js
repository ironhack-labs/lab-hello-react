import Logo from '../images/ironhack-logo-xs.png'
import Menu from '../images/menu-top-xs.png'

function NavBar() {
    return (
      <nav >
        <li><img src={Logo}/></li>
        <li><img src={Menu}/></li>
      </nav>
    );
  }
  
  export default NavBar;