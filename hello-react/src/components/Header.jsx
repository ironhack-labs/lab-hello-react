import React from 'react'
import ironLogo from "../images/ironhack-logo-xs.png"
import openMenu from "../images/menu-top-xs.png"

export default function Header() {
  return (
    <div className="header">
      <img src={ironLogo}/>
      <img className="openMenu" src={openMenu}/>
    </div>
  )
}
