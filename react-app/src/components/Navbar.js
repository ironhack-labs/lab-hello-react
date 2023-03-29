
import '../App.css';

import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';


function Navbar(){
    return (
        <nav id="nav">
            <img src="{logo}" alt="logo"/>
            <img src="{menu}" alt="menu"/>
        </nav>
    )
}

export default Navbar;