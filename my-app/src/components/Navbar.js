import React from 'react';
import ironhackLogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png';

function Navbar () {
    
    return (
        <div className='navbar'>
            <nav>
            <img src={ironhackLogo} alt='ironhack logo' />
            <img src={menuTop} alt='menu logo' />
            </nav>

            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

            <button>Awesome!</button>
        </div>
    );
}

export default Navbar;    
