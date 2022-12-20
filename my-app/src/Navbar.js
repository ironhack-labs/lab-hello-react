import React, {useState, useEffect} from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>            
            <img className='logoIron' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"></img>
            <img className='bouton' src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"></img>
        </nav>
    );
};

export default Navbar;