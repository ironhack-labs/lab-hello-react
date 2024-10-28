import icon from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";
export const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <img src={icon} />
      </a>
      <a href="#">
        <img src={menu} />
      </a>
    </nav>
  );
};
