import React from 'react';
import ironlogo from '../images/ironlogo.png';
import menutop from '../images/menutop.png';

function Navbar() {
    return (
            <div id="navflex">
                <div>
                <img
                    id="nav-img"
                    src={ironlogo}
                    alt="logo"
                    />
                </div>
                <div>
                <img
                    id="nav-img"
                    src={menutop}
                    alt="logo"
                    />
                </div>
            </div>
    );
}

export default Navbar;
