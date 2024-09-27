import IronHackLogo from '../images/ironhack-logo-xs.png';
import NavMenu from '../images/menu-top-xs.png';

function NavBar () {
  return (
    <nav className='nav-bar'>
      <div>
      <img src={IronHackLogo} alt="IronHack logo" />
      </div>
      <div>
      <img src={NavMenu} alt="IronHack logo" />
      </div>
    </nav>
  )
}

export default NavBar;