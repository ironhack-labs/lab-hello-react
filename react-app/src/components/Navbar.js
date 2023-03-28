
import logo from '../images/ironhack-logo-xs.png';
import burger from '../images/menu-top-xs.png';
import '../App.css';


function Navbar(){
    return (
        <nav id="nav">
            <img src="{logo}" alt="Ironhack logo"/>
            <img src="{burger}" alt="menu"/>
        </nav>
    )
}

export default Navbar;