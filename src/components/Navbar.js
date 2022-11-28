import IHLogo from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png"

function Navbar() {
  return (
    <nav>
      <a href="/">
        <img src={IHLogo} alt="ironhack-logo"></img>
      </a>
      <a href="/">
        <img src={menuIcon} alt="menu"></img>
      </a>
    </nav>
  )
}

export default Navbar;