import React from 'react';
import ironhackLogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png'

function Navbar() {
    return(
        <nav>
            <img src={ironhackLogo} alt="logo" />
            <img src={menuTop} alt="menu" />
        </nav>
    );
}

export default Navbar;