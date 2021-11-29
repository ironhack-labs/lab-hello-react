import "./Navbar.css";
import logo from "./../images/ironhack-logo-xs.png";
import menu from "./../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <div className="Navbar">
    
      <img src={logo} alt="IronHack Logo" />
      <img src={menu} alt="Menu Top" />
    </div>
  );
};

export default Navbar;
