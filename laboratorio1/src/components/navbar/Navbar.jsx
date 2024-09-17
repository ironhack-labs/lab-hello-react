import React from 'react';
import '../navbar/navbar.css'
import photo1 from '../../images/menu-top-xs.png'
import photo2 from '../../images/ironhackLogo.png'


function Navbar() {
    return (
    <nav className='navbar'>
        <img src={photo2} className='left-icon' alt="icon1" />
        <img src={photo1} className='right-icon' alt="icon2" />
    </nav>
    );
}

export default Navbar;