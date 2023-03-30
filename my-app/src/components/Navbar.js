// React Component <Navbar />
import logo1 from "../images/ironhack-logo-xs-dark.png"
import logo2 from "../images/menu-top-xs-dark.png"

function Navbar() {
    return (
      <nav id="logo">
        <img
          id="nav-img"
          src={logo1}
          alt="logo"
        />
        <img
          id="nav-img2"
          src={logo2}
          alt="logo"
          />
      </nav>
    );
  }
  
  export default Navbar;