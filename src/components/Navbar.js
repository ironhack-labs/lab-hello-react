
import ironhacklogo from '../images/ironhack-logo-xs.png';
import menuIcon from '../images/menu-top-xs.png';

function Navbar (){

    return(
        <nav className = "Navbar"> 
            <img src ={ironhacklogo} alt = "ironhacklogo" />
            <img src ={menuIcon} alt = "menuIcon" />
        </nav>
    )
}

export default Navbar
