import logo from '../../assets/ironhack-logo-xs.png'; 
import menu from '../../assets/menu-top-xs.png'; 

const Navbar = () => {
    return(
      <nav>
        <div>Demo React</div>
        <img src={logo}/>
        <img src={menu}/>
      </nav>
    )
  }
  
  export default Navbar;