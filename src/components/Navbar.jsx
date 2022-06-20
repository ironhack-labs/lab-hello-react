import React from 'react';
import ironlogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png';


export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={ironlogo} alt='logo'/>
        <img src={menuTop} alt='menu-top'/>
    </nav>
  )
}
export default Navbar;