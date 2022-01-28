import "./NavBar.css";
import logo from "../ironhack-logo-xs.png";
import menuIcon from "../menu-top-xs.png";

function NavBar() {
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <img src={menuIcon} alt="" />
      </div>
    </div>
  );
}

export default NavBar;
