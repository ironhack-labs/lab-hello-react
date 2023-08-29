import './Navbar.css'
import ironhackLogo from '../../assets/ironhack-logo-xs.png'
import menuTop from '../../assets/menu-top-xs.png'

function Navbar() {
  return (
    <>
      <img src={ironhackLogo} alt="Ironhack logo" />
      <img src={menuTop} alt="Menu top" />
    </>
  );
}

export default Navbar;
