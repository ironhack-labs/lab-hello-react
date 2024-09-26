import React from 'react'
import ironhack from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'

const Header = () => {
  return (
    <nav className='nav'>
        <img src={ironhack} className="logo" alt='ironhack logo'></img>
        <img src={menu} className="menu" alt='menu'></img>
     </nav>
  )
}

export default Header