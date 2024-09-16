import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Nav() {
  return (
    <div>
      <nav className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu} className="App-menu" alt="menu" />
      </nav>
    </div>
  );
}

export default Nav;
