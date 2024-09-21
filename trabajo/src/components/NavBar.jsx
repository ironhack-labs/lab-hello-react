import React from 'react'
import image1 from "../assets/ironhack-logo-xs.png"
import image2 from "../assets/menu-top-xs.png"
import "./navStyle.css"

export default function NavBar() {
  return (
    <div className='navBar'>
      <img src={image1} alt="" className='logo'/>
      <img src={image2} alt="" className='menu'/>
    </div>
  )
}
