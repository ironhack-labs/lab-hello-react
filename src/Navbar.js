import './Navbar.css';
import logo1 from './images/ironhack-logo-xs.png'
import logo2 from './images/menu-top-xs.png'

const Navbar = ()=> {
  return (
   
        <nav className='Navbar'>
          <a className='logo1'>
            <img src={logo1}  alt='logo' />
          </a>
          <a className='logo2'>
            <img src={logo2}  alt='logo' />
          </a>
        </nav>
  );
}


export default Navbar