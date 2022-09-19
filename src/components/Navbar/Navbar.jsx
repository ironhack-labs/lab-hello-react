import logo from "../../images/ironhack-logo-xs.png"
import hamburger from "../../images/menu-top-xs.png"
function Navbar(props) {
  return (
    <nav>
      <img src={logo} alt="ironhacklogo" />
      <img src={hamburger} alt="humburger-menu" />
    </nav>
  )
}

export default Navbar