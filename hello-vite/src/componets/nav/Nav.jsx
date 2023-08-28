import './Nav.css';
import logo from '../../assets/ironhack-logo-xs.png'
import barra from '../../assets/menu-top-xs.png'

function Nav() {
    return (
        <div className='nav-bar'>
            <img src={logo} alt="iron-hack" />
            <img className='barra' src={barra} alt="menu" />

        </div>
    )

}

export default Nav;