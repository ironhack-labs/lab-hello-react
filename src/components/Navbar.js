// React Component <Navbar />
import logo from '../images/logo.png';
import menu from '../images/menu.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <img src={menu} alt='menu' />
    </nav>
  );
}

export default Navbar;
