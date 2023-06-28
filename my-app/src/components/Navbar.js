import LogoOne from '../images/ironhack-logo-xs.png';
import LogoTwo from '../images/menu-top-xs.png';


function Navbar() {
  return (
    <nav>
      <img src={ LogoOne } alt="logo" />
      <img src={ LogoTwo } alt="logo" />
    </nav>
  );
}

export default Navbar;