import ironhackLogo from '../images/ironhack-logo-xs.png'
import dropdownMenuLogo from '../images/menu-top-xs.png'

function Navbar() {
  return <div className="Navbar d-flex">
    <img src={ironhackLogo} class="ironhack-logo"></img>
    <img src={dropdownMenuLogo} class="dropdown-logo"></img>

  </div>
}

export default Navbar;