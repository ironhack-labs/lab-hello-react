import logo from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img
        src={logo}
        alt="Ironhack Logo"
      />
      <img
        src={menuIcon}
        alt="Menu icon"
      />
    </nav>
  );
};

export default Navbar;
