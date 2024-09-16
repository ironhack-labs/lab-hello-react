// import the images
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'


function Navbar() {
    return (
      <nav className="nav-items" >
      
        <img
          id="nav-img"
          src={logo}
          alt="logo"
        />
             <img
          id="nav-menu"
          src={menu}
          alt="menu"
        />
        </nav>
    );
  }  
  export default Navbar;