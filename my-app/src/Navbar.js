import React from 'react'
import Logo from "./assets/images/ironhack-logo-xs.png"

function Navbar() {
  return (
    <nav>
        <img id="logo" src={Logo} alt="logo"/>
    </nav>
  )
}

export default Navbar