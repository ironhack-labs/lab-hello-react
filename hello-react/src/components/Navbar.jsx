import logo from '../assets/ironhack-logo-xs.png';
import menu from '../assets/menu-top-xs.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <img src={menu} alt="Menu" className='menu-icon'/>
    </div>
  )
}

export default Navbar