import React from "react";
import './Nav.css'
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="ironhack" />
            </div>
            <div className="menu">
                <img src={menu} alt="menu" />
            </div>
        </div>
    )
}