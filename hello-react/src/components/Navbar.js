import React from 'react'
import logo from '../images/ironhack-logo-xs.png'
import menuIcon from '../images/menu-top-xs.png'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="Ironhack Logo" />
      <img src={menuIcon} alt="" />
    </nav>
  )
}

export default Navbar