import logo from '../images/ironhack-logo-xs.png'
import menuIcon from '../images/menu-top-xs.png'

function Navbar(){
  return(
    <nav>
      <img src={logo} alt="Ironhack Logo" />
      <img src={menuIcon} alt="Menu" />
    </nav>
  )
}
export default Navbar