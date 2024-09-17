import React from 'react'
import logoImg from "../assets/ironhack-logo-xs.png"
import menuImg from "../assets/menu-top-xs.png"


function Navbar() {

    return (
        <div id="navBar">
        <img src={logoImg} alt="ironhack" />
        <img  src={menuImg} alt="ironhack" />
        </div>
    )
}
export default Navbar;