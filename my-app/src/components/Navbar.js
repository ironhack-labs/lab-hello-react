import React, { Component } from 'react';
import ironLogo from '../images/ironhack.png';
import listLogo from '../images/ironhack2.png'

class Navbar extends Component {
    render() {
        return (
            <nav class="nav-bar-flex">
                <img class="nav-bar-img" src={ironLogo} alt="iron-logo" />
                <img class="nav-bar-img img2" src={listLogo} alt="list-logo" />
            </nav>
        )
    }
}

export default Navbar;