import ironhackLogo from '../assets/ironhack-logo-xs.png';
import menuTop from '../assets/menu-top-xs.png';

function Navbar() {
	return (
		<nav className='navbar'>
			<img src={ironhackLogo} alt="ironhack logo" />
			<img src={menuTop} alt="menu top" />
		</nav>
	)
}

export default Navbar;