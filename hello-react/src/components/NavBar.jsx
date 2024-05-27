import ironSmallLogo from "../assets/ironhack-logo-xs.png"
import menuIcon from "../assets/menu-top-xs.png"

const NavBar = () => {
  return (
    <div className="navbar">
        <img src={ironSmallLogo} alt="IronHack small logo" />
        <img src={menuIcon} alt="IronHack menu small" />
    </div>
  )
}

export default NavBar