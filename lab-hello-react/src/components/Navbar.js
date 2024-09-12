import logo from '../images/ironhack-logo-xs.png';
import menubars from '../images/menu-top-xs.png';

function Navbar(){
    return (
    <div>
        <div className='Navbar'>
            <img src={logo} alt="icon"/>
            <img src={menubars} alt="navbar" className="img"/>
        </div>
    </div>
)}

export default Navbar;