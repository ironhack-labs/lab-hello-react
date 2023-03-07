import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
