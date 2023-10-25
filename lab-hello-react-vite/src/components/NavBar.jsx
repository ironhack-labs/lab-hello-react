import React from "react";
import Logo from "../assets/ironhack-logo-xs.png"
import MenuWrap from "../assets/menu-top-xs.png"

function NavBar(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="Logo"></img>
            <img className="menu" src={MenuWrap} alt="MenuWrap"></img>
        </nav>
    )
}

export default NavBar;