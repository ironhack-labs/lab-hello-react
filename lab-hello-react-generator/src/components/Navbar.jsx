import React from "react"
import logoIronhack from "../images/ironhack-logo-xs.png"
import humburgerMenu from "../images/menu-top-xs.png"

const Navbar = (props) => {
  return (
    <nav>
      <img src={logoIronhack} className="app-logo" alt="logo" />
      <img src={humburgerMenu} className="menu" alt="logo" />
    </nav>

  )
}

export default Navbar
