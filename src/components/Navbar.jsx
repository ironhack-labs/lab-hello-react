import imgIcon from "../assets/ironhack-logo-xs.png"
import imgMenu from "../assets/menu-top-xs.png"

function Navbar() {
  return (
      <nav>
        <img src={imgIcon} alt="logo ironhack" />
        <img src={imgMenu} alt="" id="menu" />
      </nav>    
  )
}

export default Navbar