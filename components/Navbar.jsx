import logo from "../src/assets/ironhackLogo.png"
import menu from "../src/assets/menuIcon.png"

function Navbar() {
  return (
    <div id="navbar">
      <img id="logo" src={logo} alt="logo Ironhack" />
      <img id="menu" src={menu} alt="menu" />
    </div>
  )
}

export default Navbar