import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <img src={menu} alt="" />
      </div>
    </div>
  );
}
