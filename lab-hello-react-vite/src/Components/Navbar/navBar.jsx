import logo from '../../assets/ironhack-logo-xs.png'; 
import menu from '../../assets/menu-top-xs.png'; 
import './navBar.css'

const Navbar = () => {
    return(
      <nav>
        <img className="logo" src={logo}/>
        <img className="menu" src={menu}/>
      </nav>
    )
  }
  
  export default Navbar;