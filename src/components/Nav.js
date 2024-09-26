import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Nav() {
    return (
      <div className="nav">
        <img src={logo} alt="logo" />
        <img className ="menu" src={menu} alt="menu" />
      </div>
    );
  }
  
  export default Nav;
  